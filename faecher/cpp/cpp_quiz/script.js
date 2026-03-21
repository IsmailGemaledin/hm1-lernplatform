// SECTION: Quiz Data
const QUESTIONS = [
  {
    category: "Syntax & Basics",
    question: "Which of the following is the correct way to write the main function in a standard C++ program?",
    options: [
      "int main()",
      "void main()",
      "main()",
      "public static void main()",
    ],
    correctIndex: 0,
    explanation:
      "In standard-conforming C++, the program entry point must be `int main()` or `int main(int argc, char** argv)`.",
  },
  {
    category: "Headers & IO",
    question: "Which header is required to use `std::cout`?",
    options: [
      "<stdio.h>",
      "<iostream>",
      "<cstdlib>",
      "<ostream.hpp>",
    ],
    correctIndex: 1,
    explanation: "The C++ stream-based IO objects like `std::cout` are declared in `<iostream>`.",
  },
  {
    category: "Namespaces",
    question:
      "What is the effect of writing `using namespace std;` at the top of a C++ file?",
    options: [
      "It imports only `std::cout` and `std::cin`.",
      "It makes all names in the `std` namespace available without the `std::` prefix.",
      "It creates a new namespace called `std`.",
      "It has no effect in modern C++.",
    ],
    correctIndex: 1,
    explanation:
      "`using namespace std;` brings all names from the `std` namespace into the current scope, so you can write `cout` instead of `std::cout`.",
  },
  {
    category: "Compilation",
    question:
      "What does the `g++` command do when compiling a simple C++ program like `main.cpp`?",
    options: [
      "Interprets the code line by line at runtime.",
      "Compiles the code to Java bytecode.",
      "Compiles and links the program to create an executable.",
      "Only checks syntax without creating any file.",
    ],
    correctIndex: 2,
    explanation:
      "`g++ main.cpp -o main` compiles and links the code into an executable named `main` (on Linux/macOS).",
  },
  {
    category: "Types & Variables",
    question: "Which declaration correctly defines a constant integer with value 10?",
    options: [
      "int const x = 10;",
      "constant int x = 10;",
      "var x: int = 10;",
      "immutable int x = 10;",
    ],
    correctIndex: 0,
    explanation:
      "`const int x = 10;` and `int const x = 10;` both declare a constant integer in C++.",
  },
  {
    category: "References & Pointers",
    question:
      "What does the `&` symbol mean in the parameter `int &x` of a C++ function?",
    options: [
      "`x` is a pointer to an integer.",
      "`x` is a reference to an integer.",
      "`x` is a constant integer.",
      "`x` is an address-of operator.",
    ],
    correctIndex: 1,
    explanation:
      "In a declaration like `int &x`, `x` is a reference to an integer, which aliases an existing variable.",
  },
  {
    category: "Control Flow",
    question: "Which C++ loop is best suited for iterating over the elements of a container like `std::vector<int>` when you don't need the index?",
    options: [
      "A classic `for` loop with an index variable.",
      "A `while` loop.",
      "A range-based `for` loop.",
      "A `do-while` loop.",
    ],
    correctIndex: 2,
    explanation:
      "Range-based `for` loops (`for (auto x : vec)`) are concise and expressive when you just need each element.",
  },
  {
    category: "Functions & Overloading",
    question: "What is function overloading in C++?",
    options: [
      "Defining multiple functions with the same name but different parameter lists.",
      "Defining a function inside another function.",
      "Having functions that call themselves.",
      "Declaring a function without defining it.",
    ],
    correctIndex: 0,
    explanation:
      "Function overloading lets you have multiple functions with the same name but different parameter types or counts.",
  },
  {
    category: "Classes & Objects",
    question: "Which keyword is used to define a class in C++?",
    options: ["object", "class", "struct", "typename"],
    correctIndex: 1,
    explanation: "Classes in C++ are defined using the `class` keyword (and `struct` with different default access).",
  },
  {
    category: "Memory & new/delete",
    question: "What is the correct way to dynamically allocate an array of 10 integers in C++?",
    options: [
      "int* a = new int(10);",
      "int a[10];",
      "int* a = new int[10];",
      "vector<int> a(10);",
    ],
    correctIndex: 2,
    explanation:
      "`new int[10]` allocates an array of 10 integers on the free store; don't forget to `delete[] a;` later.",
  },
];

const TOTAL_QUESTIONS = 10; // as required
const TIME_PER_QUESTION = 20; // seconds

// SECTION: State
let currentIndex = 0;
let score = 0;
let correctCount = 0;
let incorrectCount = 0;
let timeoutCount = 0;
let timerId = null;
let remainingTime = TIME_PER_QUESTION;
let quizActive = false;
let hasAnsweredCurrent = false;

// SECTION: DOM Elements
const questionTextEl = document.getElementById("question-text");
const questionCategoryEl = document.getElementById("question-category");
const optionsListEl = document.getElementById("options-list");
const currentQuestionIndexEl = document.getElementById("current-question-index");
const totalQuestionsEl = document.getElementById("total-questions");
const timerDisplayEl = document.getElementById("timer-display");
const questionProgressEl = document.getElementById("question-progress");
const feedbackTextEl = document.getElementById("feedback-text");
const primaryActionBtn = document.getElementById("primary-action-btn");
const restartBtn = document.getElementById("restart-btn");
const resultsCardEl = document.getElementById("results-card");
const resultsScoreEl = document.getElementById("results-score");
const resultsDetailEl = document.getElementById("results-detail");
const statCorrectEl = document.getElementById("stat-correct");
const statIncorrectEl = document.getElementById("stat-incorrect");
const statTimeoutEl = document.getElementById("stat-timeout");
const playAgainBtn = document.getElementById("play-again-btn");

// Ensure labels show correct totals
if (totalQuestionsEl) totalQuestionsEl.textContent = TOTAL_QUESTIONS;
const totalQuestionsLabelEl = document.getElementById("total-questions-label");
if (totalQuestionsLabelEl) totalQuestionsLabelEl.textContent = String(TOTAL_QUESTIONS);
const timePerQuestionLabelEl = document.getElementById("time-per-question-label");
if (timePerQuestionLabelEl)
  timePerQuestionLabelEl.textContent = `${TIME_PER_QUESTION}s`;

// SECTION: Timer helpers
function updateTimerDisplay() {
  if (!timerDisplayEl) return;

  timerDisplayEl.textContent = String(remainingTime);
  timerDisplayEl.classList.remove(
    "timer-display--ok",
    "timer-display--warning",
    "timer-display--danger",
  );

  const fraction = remainingTime / TIME_PER_QUESTION;
  if (fraction > 0.5) {
    timerDisplayEl.classList.add("timer-display--ok");
  } else if (fraction > 0.25) {
    timerDisplayEl.classList.add("timer-display--warning");
  } else {
    timerDisplayEl.classList.add("timer-display--danger");
  }
}

function startTimer() {
  clearTimer();
  remainingTime = TIME_PER_QUESTION;
  updateTimerDisplay();

  timerId = window.setInterval(() => {
    remainingTime -= 1;
    if (remainingTime <= 0) {
      remainingTime = 0;
      updateTimerDisplay();
      clearTimer();
      if (!hasAnsweredCurrent) {
        handleTimeout();
      }
      return;
    }
    updateTimerDisplay();
  }, 1000);
}

function clearTimer() {
  if (timerId !== null) {
    window.clearInterval(timerId);
    timerId = null;
  }
}

// SECTION: Rendering
function renderQuestion() {
  const q = QUESTIONS[currentIndex];
  if (!q) return;

  hasAnsweredCurrent = false;
  feedbackTextEl.textContent = "";
  feedbackTextEl.className = "feedback";

  questionCategoryEl.textContent = q.category;
  questionTextEl.textContent = q.question;
  currentQuestionIndexEl.textContent = String(currentIndex + 1);

  const progressPercent = ((currentIndex) / TOTAL_QUESTIONS) * 100;
  questionProgressEl.style.width = `${progressPercent}%`;

  optionsListEl.innerHTML = "";

  q.options.forEach((opt, index) => {
    const optionId = `option-${index}`;

    const li = document.createElement("div");
    li.className = "option";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.id = optionId;
    input.value = String(index);
    input.className = "option-input";

    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.setAttribute("data-index", String(index));

    const keySpan = document.createElement("span");
    keySpan.className = "option-key";
    keySpan.textContent = String(index + 1);

    const labelSpan = document.createElement("span");
    labelSpan.className = "option-label";
    labelSpan.textContent = opt;

    const stateSpan = document.createElement("span");
    stateSpan.className = "option-state-pill";
    stateSpan.textContent = "";

    button.appendChild(keySpan);
    button.appendChild(labelSpan);
    button.appendChild(stateSpan);

    button.addEventListener("click", () => {
      if (!quizActive || hasAnsweredCurrent) return;
      handleAnswer(index);
    });

    li.appendChild(input);
    li.appendChild(button);
    optionsListEl.appendChild(li);
  });

  primaryActionBtn.textContent =
    currentIndex === TOTAL_QUESTIONS - 1 ? "Finish" : "Next";
  primaryActionBtn.disabled = true;

  restartBtn.disabled = false;

  startTimer();
}

function revealAnswerStyles(selectedIndex, isTimeout = false) {
  const q = QUESTIONS[currentIndex];

  const optionButtons = optionsListEl.querySelectorAll(".option-button");
  optionButtons.forEach((btn) => {
    const index = Number(btn.getAttribute("data-index"));
    const keyEl = btn.querySelector(".option-key");
    const stateEl = btn.querySelector(".option-state-pill");

    if (!keyEl || !stateEl) return;

    if (index === q.correctIndex) {
      btn.classList.add("option-button--correct");
      keyEl.classList.add("option-key--correct");
      stateEl.classList.add("option-state-pill--correct");
      stateEl.textContent = "Correct";
    } else if (selectedIndex !== null && index === selectedIndex) {
      btn.classList.add("option-button--incorrect");
      keyEl.classList.add("option-key--incorrect");
      stateEl.classList.add("option-state-pill--incorrect");
      stateEl.textContent = isTimeout ? "Missed" : "Your pick";
    }

    btn.disabled = true;
  });
}

// SECTION: Answer handling
function handleAnswer(selectedIndex) {
  if (hasAnsweredCurrent) return;
  hasAnsweredCurrent = true;
  clearTimer();

  const q = QUESTIONS[currentIndex];
  const isCorrect = selectedIndex === q.correctIndex;

  revealAnswerStyles(selectedIndex);

  if (isCorrect) {
    correctCount += 1;
    score += 1;
    feedbackTextEl.textContent = "Nice! That's correct. " + q.explanation;
    feedbackTextEl.classList.add("feedback--correct");
  } else {
    incorrectCount += 1;
    feedbackTextEl.textContent = `Not quite. ${q.explanation}`;
    feedbackTextEl.classList.add("feedback--incorrect");
  }

  primaryActionBtn.disabled = false;
}

function handleTimeout() {
  if (hasAnsweredCurrent) return;
  hasAnsweredCurrent = true;

  timeoutCount += 1;

  revealAnswerStyles(null, true);

  const q = QUESTIONS[currentIndex];
  feedbackTextEl.textContent = `Time's up! ${q.explanation}`;
  feedbackTextEl.classList.add("feedback--timeout");

  primaryActionBtn.disabled = false;
}

// SECTION: Navigation & results
function goToNextQuestionOrFinish() {
  if (!quizActive) {
    startQuiz();
    return;
  }

  if (!hasAnsweredCurrent) {
    return;
  }

  if (currentIndex < TOTAL_QUESTIONS - 1) {
    currentIndex += 1;
    renderQuestion();
  } else {
    finishQuiz();
  }
}

function startQuiz() {
  quizActive = true;
  score = 0;
  correctCount = 0;
  incorrectCount = 0;
  timeoutCount = 0;
  currentIndex = 0;
  resultsCardEl.hidden = true;

  const progressPercent = 0;
  questionProgressEl.style.width = `${progressPercent}%`;

  primaryActionBtn.textContent = "Next";
  primaryActionBtn.disabled = true;

  renderQuestion();
}

function resetQuizToIdle() {
  clearTimer();
  quizActive = false;
  hasAnsweredCurrent = false;

  questionCategoryEl.textContent = "Syntax & Basics";
  questionTextEl.textContent = "Press \"Start Quiz\" to begin your C++ challenge.";
  currentQuestionIndexEl.textContent = "1";
  questionProgressEl.style.width = "0%";

  optionsListEl.innerHTML = "";
  feedbackTextEl.textContent = "";
  feedbackTextEl.className = "feedback";

  timerDisplayEl.textContent = String(TIME_PER_QUESTION);
  timerDisplayEl.className = "timer-display timer-display--ok";

  primaryActionBtn.textContent = "Start Quiz";
  primaryActionBtn.disabled = false;
  restartBtn.disabled = true;
}

function finishQuiz() {
  clearTimer();
  quizActive = false;

  const totalAnswered = correctCount + incorrectCount + timeoutCount;
  const scorePercentage = Math.round((correctCount / TOTAL_QUESTIONS) * 100);

  resultsScoreEl.textContent = `You scored ${correctCount} / ${TOTAL_QUESTIONS} (${scorePercentage}%).`;

  let detailMessage = "";
  if (scorePercentage === 100) {
    detailMessage = "Perfect run! You're a C++ boss.";
  } else if (scorePercentage >= 80) {
    detailMessage = "Great job! You have solid C++ fundamentals.";
  } else if (scorePercentage >= 50) {
    detailMessage = "Nice effort. A bit more practice and you'll nail it.";
  } else {
    detailMessage = "Don't worry—use this as a checklist for what to review next.";
  }

  resultsDetailEl.textContent = detailMessage;

  statCorrectEl.textContent = String(correctCount);
  statIncorrectEl.textContent = String(incorrectCount);
  statTimeoutEl.textContent = String(timeoutCount);

  resultsCardEl.hidden = false;

  primaryActionBtn.textContent = "Play again";
  primaryActionBtn.disabled = false;
}

// SECTION: Event Handlers
primaryActionBtn.addEventListener("click", () => {
  if (!quizActive) {
    if (currentIndex === 0 && !hasAnsweredCurrent) {
      startQuiz();
    } else {
      resetQuizToIdle();
      startQuiz();
    }
  } else if (currentIndex === TOTAL_QUESTIONS - 1 && hasAnsweredCurrent) {
    finishQuiz();
  } else {
    goToNextQuestionOrFinish();
  }
});

restartBtn.addEventListener("click", () => {
  resetQuizToIdle();
});

playAgainBtn.addEventListener("click", () => {
  resultsCardEl.hidden = true;
  resetQuizToIdle();
  startQuiz();
});

// Keyboard shortcuts: 1-4 map to options when quizActive and not answered
window.addEventListener("keydown", (event) => {
  if (!quizActive || hasAnsweredCurrent) return;

  const key = event.key;
  if (key < "1" || key > "4") return;

  const index = Number(key) - 1;
  const optionButton = optionsListEl.querySelector(
    `.option-button[data-index="${index}"]`,
  );
  if (optionButton) {
    event.preventDefault();
    handleAnswer(index);
  }
});

// Initialize idle state on load
resetQuizToIdle();
