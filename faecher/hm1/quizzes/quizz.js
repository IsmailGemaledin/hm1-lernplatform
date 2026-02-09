// quizzes/quizz.js
// Randomizes questions across ALL loaded quiz data files (HM1_QUIZZES or ME1_QUIZZES),
// randomizes answer order per question, and renders KaTeX for any LaTeX wrapped in \( ... \) or \[ ... \].

(function () {
  // ---------- Data source ----------
  const quizzes =
    (window.HM1_QUIZZES && window.HM1_QUIZZES.length ? window.HM1_QUIZZES : null) ||
    (window.ME1_QUIZZES && window.ME1_QUIZZES.length ? window.ME1_QUIZZES : null) ||
    [];

  if (!quizzes.length) {
    console.warn("[quiz] No quiz data found. Expected window.HM1_QUIZZES or window.ME1_QUIZZES.");
    return;
  }

  // ====== CONFIG ======
  const QUESTIONS_PER_RUN = 10; // how many questions per attempt (random across ALL files)
  // ====================

  // ---------- State ----------
  let sessionQuestions = [];
  let index = 0;
  let score = 0;
  let answered = false;

  // ---------- DOM ----------
  const elTitle = document.getElementById("quizTitle");
  const elContainer = document.getElementById("quizContainer");
  const elFeedback = document.getElementById("quizFeedback");
  const elScore = document.getElementById("quizScore");
  const elTotal = document.getElementById("quizTotal");
  const elProgress = document.getElementById("quizProgress");

  const btnCheck = document.getElementById("btnCheck");
  const btnNext = document.getElementById("btnNext");
  const btnRestart = document.getElementById("btnRestart");

  const required = [
    ["quizTitle", elTitle],
    ["quizContainer", elContainer],
    ["quizFeedback", elFeedback],
    ["quizScore", elScore],
    ["quizTotal", elTotal],
    ["quizProgress", elProgress],
    ["btnCheck", btnCheck],
    ["btnNext", btnNext],
    ["btnRestart", btnRestart],
  ];

  const missing = required.filter(([, el]) => !el).map(([id]) => id);
  if (missing.length) {
    console.warn("[quiz] Missing required elements:", missing.join(", "));
    return;
  }

  // Title for mixed pool
  elTitle.textContent = "HM1 — Gemischter Test";

  // ---------- Helpers ----------
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function updateProgress() {
    const total = sessionQuestions.length || 1;
    const pct = Math.round((index / total) * 100);
    elProgress.style.width = `${pct}%`;
  }

  function getSelectedIndex() {
    const checked = elContainer.querySelector('input[name="answer"]:checked');
    return checked ? Number(checked.value) : null;
  }

  function markAnswers(correctIndex, selectedIndex) {
    const items = elContainer.querySelectorAll("#answers .list-group-item");
    items.forEach((item, i) => {
      item.classList.remove("list-group-item-success", "list-group-item-danger");
      if (i === correctIndex) item.classList.add("list-group-item-success");
      if (selectedIndex !== null && i === selectedIndex && selectedIndex !== correctIndex) {
        item.classList.add("list-group-item-danger");
      }
    });
  }

  function renderKaTeX(target) {
    if (!window.renderMathInElement || !target) return;
    try {
      window.renderMathInElement(target, {
        delimiters: [
          { left: "\\(", right: "\\)", display: false },
          { left: "\\[", right: "\\]", display: true },
        ],
        throwOnError: false,
      });
    } catch (e) {
      console.warn("[quiz] KaTeX render failed:", e);
    }
  }

  function normalizeQuestion(q) {
    const choices = Array.isArray(q.choices) ? q.choices : [];
    const correctIndex = Number.isInteger(q.correctIndex) ? q.correctIndex : -1;
    return {
      question: q.question || "",
      choices,
      correctIndex,
      explanation: q.explanation || "",
    };
  }

  function buildQuestionPool() {
    // Collect ALL questions from ALL quizzes (across all files)
    const pool = quizzes.flatMap((quiz) => {
      const qs = Array.isArray(quiz.questions) ? quiz.questions : [];
      return qs.map((q) => ({
        ...normalizeQuestion(q),
        sourceQuizId: quiz.id || "",
        sourceQuizTitle: quiz.title || "",
      }));
    });

    // Filter out broken entries
    return pool.filter((q) => q.question && q.choices.length >= 2 && q.correctIndex >= 0);
  }

  function buildSessionQuestions() {
    const pool = buildQuestionPool();
    if (!pool.length) return [];

    shuffle(pool);
    const picked = pool.slice(0, Math.min(QUESTIONS_PER_RUN, pool.length));

    // Shuffle answer order while keeping correctIndex consistent
    return picked.map((q) => {
      const answers = q.choices.map((text, i) => ({
        text,
        isCorrect: i === q.correctIndex,
      }));

      shuffle(answers);
      const newCorrectIndex = answers.findIndex((a) => a.isCorrect);

      return {
        question: q.question,
        choices: answers.map((a) => a.text),
        correctIndex: newCorrectIndex,
        explanation: q.explanation,
        sourceQuizId: q.sourceQuizId,
        sourceQuizTitle: q.sourceQuizTitle,
      };
    });
  }

  function resetSession() {
    sessionQuestions = buildSessionQuestions();
    index = 0;
    score = 0;
    answered = false;

    elScore.textContent = "0";
    elTotal.textContent = String(sessionQuestions.length);
    elProgress.style.width = "0%";
    elFeedback.textContent = "";
    elFeedback.className = "fw-semibold";

    btnNext.disabled = true;
    render();
  }

  // ---------- UI ----------
  function render() {
    answered = false;
    btnNext.disabled = true;
    elFeedback.textContent = "";

    const q = sessionQuestions[index];
    updateProgress();

    if (!q) {
      elContainer.innerHTML = `
        <div class="p-3 rounded bg-light border">
          <div class="fw-bold mb-2">Keine Fragen gefunden.</div>
          <div class="text-muted small">Prüfe, ob deine Datenfiles wirklich in <code>window.HM1_QUIZZES.push(...)</code> eintragen.</div>
        </div>
      `;
      return;
    }

    elContainer.innerHTML = `
      <div class="mb-2">
        <div class="fw-bold mb-2">Frage ${index + 1} / ${sessionQuestions.length}</div>

        <div class="mb-3 quiz-math" id="questionText">${q.question}</div>

        <div class="list-group" id="answers">
          ${q.choices
            .map(
              (c, i) => `
              <label class="list-group-item d-flex gap-2 align-items-center">
                <input class="form-check-input m-0" type="radio" name="answer" value="${i}">
                <span class="quiz-math">${c}</span>
              </label>
            `
            )
            .join("")}
        </div>

        <div id="explanation" class="mt-3 small text-muted" style="display:none;"></div>
      </div>
    `;

    renderKaTeX(elContainer);
  }

  function showExplanation(text) {
    const exp = document.getElementById("explanation");
    if (!exp) return;

    if (!text) {
      exp.style.display = "none";
      exp.innerHTML = "";
      return;
    }

    exp.innerHTML = text;
    exp.style.display = "block";
    renderKaTeX(exp);
  }

  // ---------- Events ----------
  btnCheck.addEventListener("click", () => {
    if (answered) return;

    const selected = getSelectedIndex();
    if (selected === null) {
      elFeedback.textContent = "Bitte wähle eine Antwort aus.";
      elFeedback.className = "fw-semibold text-danger";
      return;
    }

    const q = sessionQuestions[index];
    answered = true;

    markAnswers(q.correctIndex, selected);

    if (selected === q.correctIndex) {
      score++;
      elFeedback.textContent = "Richtig ✅";
      elFeedback.className = "fw-semibold text-success";
    } else {
      elFeedback.textContent = "Falsch ❌";
      elFeedback.className = "fw-semibold text-danger";
    }

    elScore.textContent = String(score);
    btnNext.disabled = false;

    showExplanation(q.explanation);
  });

  btnNext.addEventListener("click", () => {
    if (!answered) return;

    index++;
    if (index >= sessionQuestions.length) {
      elProgress.style.width = "100%";
      elContainer.innerHTML = `
        <div class="p-3 rounded bg-light border">
          <div class="fw-bold mb-2">Fertig!</div>
          <div>Dein Score: <strong>${score}/${sessionQuestions.length}</strong></div>
          <div class="text-muted small mt-2">Klicke „Neu starten“ um es nochmal zu machen.</div>
        </div>
      `;
      btnNext.disabled = true;
      return;
    }

    render();
  });

  btnRestart.addEventListener("click", () => {
    resetSession();
  });

  // Start
  resetSession();
})();