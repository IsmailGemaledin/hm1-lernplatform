// quizzes/quiz.js
// Randomizes questions (takes a random subset) and randomizes answer order per question.

(function () {
  const quizzes = window.ME1_QUIZZES || [];
  if (!quizzes.length) return;

  // ====== CONFIG ======
  const QUIZ_INDEX = 0;          // which quiz from ME1_QUIZZES
  const QUESTIONS_PER_RUN = 8;   // how many questions per attempt (change as you like)
  // ====================

  // Base quiz (bank)
  const baseQuiz = quizzes[QUIZ_INDEX];

  // State
  let sessionQuestions = []; // randomized subset of baseQuiz.questions
  let index = 0;
  let score = 0;
  let answered = false;

  // DOM
  const elTitle = document.getElementById("quizTitle");
  const elContainer = document.getElementById("quizContainer");
  const elFeedback = document.getElementById("quizFeedback");
  const elScore = document.getElementById("quizScore");
  const elTotal = document.getElementById("quizTotal");
  const elProgress = document.getElementById("quizProgress");

  const btnCheck = document.getElementById("btnCheck");
  const btnNext = document.getElementById("btnNext");
  const btnRestart = document.getElementById("btnRestart");

  elTitle.textContent = baseQuiz.title;

  // ---------- Helpers ----------
  function shuffle(array) {
    // Fisher–Yates shuffle (in place)
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function buildSessionQuestions() {
    // take a random subset of the bank
    const bank = [...baseQuiz.questions];
    shuffle(bank);

    const picked = bank.slice(0, Math.min(QUESTIONS_PER_RUN, bank.length));

    // For each question: shuffle answers but keep correctIndex consistent
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
        explanation: q.explanation || "",
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

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function updateProgress() {
    const total = sessionQuestions.length;
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

  function showExplanation(text) {
    const exp = document.getElementById("explanation");
    if (!exp) return;
    if (!text) return;
    exp.textContent = text;
    exp.style.display = "block";
  }

  // ---------- UI ----------
  function render() {
    answered = false;
    btnNext.disabled = true;
    elFeedback.textContent = "";

    const q = sessionQuestions[index];
    updateProgress();

    elContainer.innerHTML = `
      <div class="mb-2">
        <div class="fw-bold mb-2">Frage ${index + 1} / ${sessionQuestions.length}</div>
        <div class="mb-3">${escapeHtml(q.question)}</div>

        <div class="list-group" id="answers">
          ${q.choices
            .map((c, i) => `
              <label class="list-group-item d-flex gap-2 align-items-center">
                <input class="form-check-input m-0" type="radio" name="answer" value="${i}">
                <span>${escapeHtml(c)}</span>
              </label>
            `)
            .join("")}
        </div>

        <div id="explanation" class="mt-3 small text-muted" style="display:none;"></div>
      </div>
    `;
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
    resetSession(); // re-randomizes questions + answers
  });

  // Start
  resetSession();
})();