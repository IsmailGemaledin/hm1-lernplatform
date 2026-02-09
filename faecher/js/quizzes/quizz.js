// quizzes/quizz.js
// JavaScript quiz runner (bank-based, randomized questions + randomized answers)
// Expects: window.JS_QUIZZES = [{ id, title, questions: [{question, choices, correctIndex, explanation?}, ...] }, ...]
// HTML IDs used:
// quizTitle, quizContainer, quizFeedback, quizScore, quizTotal, quizProgress, btnRestart, btnCheck, btnNext

(function () {
  "use strict";

  const quizzes = window.JS_QUIZZES || [];
  if (!Array.isArray(quizzes) || quizzes.length === 0) return;

  // ====== CONFIG ======
  const QUIZ_INDEX = 0;            // which quiz bank to use from JS_QUIZZES
  const QUESTIONS_PER_RUN = 10;    // set to null to use all questions
  const SHUFFLE_QUESTIONS = true;
  const SHUFFLE_ANSWERS = true;
  // ====================

  const baseQuiz = quizzes[QUIZ_INDEX];
  if (!baseQuiz || !Array.isArray(baseQuiz.questions) || baseQuiz.questions.length === 0) return;

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

  if (!elTitle || !elContainer || !elFeedback || !elScore || !elTotal || !elProgress || !btnCheck || !btnNext || !btnRestart) {
    // Missing required elements; fail silently
    return;
  }

  elTitle.textContent = baseQuiz.title || "Quiz";

  // ---------- State ----------
  let sessionQuestions = [];
  let index = 0;
  let score = 0;
  let answered = false;

  // ---------- Helpers ----------
  function shuffleInPlace(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function clampQuestionsCount(bankLen) {
    if (QUESTIONS_PER_RUN == null) return bankLen;
    const n = Number(QUESTIONS_PER_RUN);
    if (!Number.isFinite(n) || n <= 0) return bankLen;
    return Math.min(n, bankLen);
  }

  function normalizeQuestion(q) {
    // Ensure shape + defensive defaults
    const question = q && q.question != null ? String(q.question) : "";
    const choices = Array.isArray(q && q.choices) ? q.choices.map(String) : [];
    const correctIndex = Number.isInteger(q && q.correctIndex) ? q.correctIndex : -1;
    const explanation = q && q.explanation != null ? String(q.explanation) : "";
    return { question, choices, correctIndex, explanation };
  }

  function buildSessionQuestions() {
    // 1) clone + normalize
    const bank = baseQuiz.questions.map(normalizeQuestion).filter(q => q.question && q.choices.length >= 2);

    // 2) shuffle questions
    if (SHUFFLE_QUESTIONS) shuffleInPlace(bank);

    // 3) take subset
    const take = clampQuestionsCount(bank.length);
    const picked = bank.slice(0, take);

    // 4) shuffle answers per question (while preserving correctIndex)
    return picked.map((q) => {
      const safeCorrect = (q.correctIndex >= 0 && q.correctIndex < q.choices.length) ? q.correctIndex : 0;

      const answers = q.choices.map((text, i) => ({
        text,
        isCorrect: i === safeCorrect,
      }));

      if (SHUFFLE_ANSWERS) shuffleInPlace(answers);

      const newCorrectIndex = answers.findIndex(a => a.isCorrect);
      return {
        question: q.question,
        choices: answers.map(a => a.text),
        correctIndex: newCorrectIndex >= 0 ? newCorrectIndex : 0,
        explanation: q.explanation || "",
      };
    });
  }

  function setFeedback(text, variant) {
    elFeedback.textContent = text;
    // keep your bootstrap vibe; only set color utility
    elFeedback.className = "fw-semibold";
    if (variant === "ok") elFeedback.classList.add("text-success");
    if (variant === "bad") elFeedback.classList.add("text-danger");
    if (variant === "warn") elFeedback.classList.add("text-warning");
    if (variant === "muted") elFeedback.classList.add("text-muted");
  }

  function updateHeader() {
    elScore.textContent = String(score);
    elTotal.textContent = String(sessionQuestions.length);
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

  function showExplanation(text) {
    const exp = document.getElementById("explanation");
    if (!exp) return;
    if (!text) {
      exp.style.display = "none";
      exp.textContent = "";
      return;
    }
    exp.textContent = text;
    exp.style.display = "block";
  }

  function setButtonsState() {
    btnNext.disabled = !answered;
  }

  // ---------- UI ----------
  function render() {
    answered = false;
    setButtonsState();
    setFeedback("", "muted");

    const q = sessionQuestions[index];
    updateProgress();

    elContainer.innerHTML = `
      <div class="mb-2">
        <div class="fw-bold mb-2">Frage ${index + 1} / ${sessionQuestions.length}</div>
        <div class="mb-3">${escapeHtml(q.question)}</div>

        <div class="list-group" id="answers">
          ${q.choices.map((c, i) => `
            <label class="list-group-item d-flex gap-2 align-items-center">
              <input class="form-check-input m-0" type="radio" name="answer" value="${i}">
              <span>${escapeHtml(c)}</span>
            </label>
          `).join("")}
        </div>

        <div id="explanation" class="mt-3 small text-muted" style="display:none;"></div>
      </div>
    `;
  }

  function renderFinished() {
    elProgress.style.width = "100%";
    elContainer.innerHTML = `
      <div class="p-3 rounded bg-light border">
        <div class="fw-bold mb-2">Fertig!</div>
        <div>Dein Score: <strong>${score}/${sessionQuestions.length}</strong></div>
        <div class="text-muted small mt-2">Klicke „Neu starten“, um eine neue Runde (randomisiert) zu starten.</div>
      </div>
    `;
    answered = true;
    setButtonsState();
    setFeedback("", "muted");
  }

  function resetSession() {
    sessionQuestions = buildSessionQuestions();
    index = 0;
    score = 0;
    answered = false;

    updateHeader();
    elProgress.style.width = "0%";
    setFeedback("", "muted");
    btnNext.disabled = true;

    if (sessionQuestions.length === 0) {
      elContainer.innerHTML = `
        <div class="p-3 rounded bg-light border">
          <div class="fw-bold mb-2">Keine Fragen gefunden</div>
          <div class="text-muted small">Prüfe deine <code>JS_QUIZZES</code>-Daten (question/choices/correctIndex).</div>
        </div>
      `;
      return;
    }

    render();
  }

  // ---------- Events ----------
  btnCheck.addEventListener("click", () => {
    if (answered) return;

    const selected = getSelectedIndex();
    if (selected === null) {
      setFeedback("Bitte wähle eine Antwort aus.", "bad");
      return;
    }

    const q = sessionQuestions[index];
    answered = true;

    markAnswers(q.correctIndex, selected);

    if (selected === q.correctIndex) {
      score++;
      updateHeader();
      setFeedback("Richtig ✅", "ok");
    } else {
      setFeedback("Falsch ❌", "bad");
    }

    showExplanation(q.explanation);
    setButtonsState();
  });

  btnNext.addEventListener("click", () => {
    if (!answered) return;

    index++;
    if (index >= sessionQuestions.length) {
      renderFinished();
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