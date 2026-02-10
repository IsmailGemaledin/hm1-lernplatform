window.HM1_QUIZZES = window.HM1_QUIZZES || [];

window.HM1_QUIZZES.push({
  id: "hm1_eigenwerte",
  title: "HM1 Lineare Algebra – Eigenwerte & Matrizen",
  questions: [
    {
      question: "Gegeben sei \\(A=\\begin{pmatrix}2&1\\\\0&3\\end{pmatrix}\\). Bestimmen Sie die Eigenwerte von \\(A\\).",
      choices: ["\\(\\lambda=2,3\\)", "\\(\\lambda=1,2\\)", "\\(\\lambda=3\\)", "\\(\\lambda=2\\)"],
      correctIndex: 0,
      explanation: "Dreiecksmatrix ⇒ Eigenwerte sind die Diagonaleinträge."
    },
    {
      question: "Für welche \\(\\alpha\\) ist die Matrix \\(A_\\alpha=\\begin{pmatrix}1&2\\\\0&\\alpha\\end{pmatrix}\\) invertierbar?",
      choices: ["\\(\\alpha=0\\)", "\\(\\alpha\\neq0\\)", "\\(\\alpha=1\\)", "für alle \\(\\alpha\\)"],
      correctIndex: 1,
      explanation: "Determinante = \\(1\\cdot\\alpha\\). Invertierbar ⇔ \\(\\alpha\\neq0\\)."
    },
    {
      question: "Bestimmen Sie die Determinante von \\(A=\\begin{pmatrix}4&1\\\\-2&0\\end{pmatrix}\\).",
      choices: ["2", "4", "8", "-2"],
      correctIndex: 3,
      explanation: "\\(\\det A = 4\\cdot0-1\\cdot(-2)=-2\\)."
    },
    {
      question: "Wie viele Eigenwerte besitzt eine \\(3\\times3\\)-Matrix (mit Vielfachheiten)?",
      choices: ["1", "2", "3", "unendlich viele"],
      correctIndex: 2,
      explanation: "Grad des charakteristischen Polynoms = 3."
    },
    {
      question: "Wann ist eine Matrix diagonalisierbar?",
      choices: [
        "Wenn sie invertierbar ist",
        "Wenn geometrische = algebraische Vielfachheit für alle Eigenwerte gilt",
        "Wenn sie symmetrisch ist",
        "Wenn sie nur reelle Eigenwerte hat"
      ],
      correctIndex: 1,
      explanation: "Notwendige und hinreichende Bedingung."
    },
    {
      question: "Gegeben sei \\(A=\\begin{pmatrix}2&0\\\\0&2\\end{pmatrix}\\). Wie groß ist die geometrische Vielfachheit von \\(\\lambda=2\\)?",
      choices: ["1", "2", "3", "0"],
      correctIndex: 1,
      explanation: "Kern von \\(A-2I\\) ist \\(\\mathbb{R}^2\\)."
    },
    {
      question: "Bestimmen Sie das charakteristische Polynom von \\(A=\\begin{pmatrix}1&1\\\\0&2\\end{pmatrix}\\).",
      choices: [
        "\\((1-\\lambda)(2-\\lambda)\\)",
        "\\((\\lambda-1)(\\lambda-2)\\)",
        "\\(\\lambda^2-3\\lambda+2\\)",
        "alle richtig"
      ],
      correctIndex: 3,
      explanation: "Alle Ausdrücke sind äquivalent."
    },
    {
      question: "Ist jede obere Dreiecksmatrix diagonalisierbar?",
      choices: ["Ja", "Nein", "Nur bei reellen Einträgen", "Nur bei verschiedenen Diagonaleinträgen"],
      correctIndex: 1,
      explanation: "Gegenbeispiel: Jordanblock."
    },
    {
      question: "Bestimmen Sie den Kern von \\(A=\\begin{pmatrix}1&1\\\\1&1\\end{pmatrix}\\).",
      choices: [
        "\\(\\{(0,0)\\}\\)",
        "\\(\\text{span}\\{(1,-1)\\}\\)",
        "\\(\\mathbb{R}^2\\)",
        "\\(\\text{span}\\{(1,1)\\}\\)"
      ],
      correctIndex: 1,
      explanation: "Gleichung \\(x+y=0\\)."
    },
    {
      question: "Wie groß ist der Rang einer Matrix mit Determinante \\(\\neq0\\)?",
      choices: ["0", "1", "n", "beliebig"],
      correctIndex: 2,
      explanation: "Volle Rangzahl."
    },
    {
      question: "Gegeben sei \\(A\\in\\mathbb{R}^{n\\times n}\\). Wann ist \\(0\\) ein Eigenwert?",
      choices: [
        "Wenn \\(A\\) invertierbar ist",
        "Wenn \\(\\det A=0\\)",
        "Wenn \\(\\operatorname{tr}(A)=0\\)",
        "Immer"
      ],
      correctIndex: 1,
      explanation: "Eigenwert 0 ⇔ nicht invertierbar."
    },
    {
      question: "Bestimmen Sie die Spur von \\(A=\\begin{pmatrix}3&1\\\\2&5\\end{pmatrix}\\).",
      choices: ["8", "11", "10", "6"],
      correctIndex: 0,
      explanation: "Spur = Summe der Diagonaleinträge."
    },
    {
      question: "Welche Aussage gilt für ähnliche Matrizen?",
      choices: [
        "Gleiche Eigenwerte",
        "Gleicher Rang",
        "Gleiche Determinante",
        "Alle richtig"
      ],
      correctIndex: 3,
      explanation: "Ähnliche Matrizen beschreiben dieselbe lineare Abbildung."
    },
    {
      question: "Bestimmen Sie die Eigenwerte von \\(A=\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}\\).",
      choices: [
        "\\(\\pm1\\)",
        "\\(\\pm i\\)",
        "\\(0,1\\)",
        "\\(i\\)"
      ],
      correctIndex: 1,
      explanation: "Charpolynom: \\(\\lambda^2+1=0\\)."
    },
    {
      question: "Wann ist eine Matrix orthogonal?",
      choices: [
        "\\(A^TA=I\\)",
        "\\(\\det A=1\\)",
        "\\(A=A^T\\)",
        "\\(A^{-1}=A\\)"
      ],
      correctIndex: 0,
      explanation: "Definition orthogonaler Matrizen."
    },
    {
      question: "Welche Eigenwerte hat eine orthogonale Matrix?",
      choices: [
        "Nur reelle",
        "Betrag 1",
        "Nur positive",
        "Nur 1"
      ],
      correctIndex: 1,
      explanation: "Rotationen und Spiegelungen."
    },
    {
      question: "Ist jede symmetrische Matrix diagonalisierbar?",
      choices: ["Ja", "Nein", "Nur bei Rang 1", "Nur über \\(\\mathbb{C}\\)"],
      correctIndex: 0,
      explanation: "Spektralsatz."
    },
    {
      question: "Bestimmen Sie die algebraische Vielfachheit von \\(\\lambda=2\\) für \\((\\lambda-2)^3\\).",
      choices: ["1", "2", "3", "0"],
      correctIndex: 2,
      explanation: "Exponent im charakteristischen Polynom."
    },
    {
      question: "Wie viele linear unabhängige Eigenvektoren kann ein Eigenwert maximal haben?",
      choices: [
        "1",
        "gleich seiner algebraischen Vielfachheit",
        "unendlich viele",
        "abhängig von der Matrixgröße"
      ],
      correctIndex: 1,
      explanation: "Definition geometrische Vielfachheit."
    },
    {
      question: "Wann ist eine Matrix nicht diagonalisierbar?",
      choices: [
        "Wenn sie einen mehrfachen Eigenwert hat",
        "Wenn geometrische < algebraische Vielfachheit",
        "Wenn sie nicht invertierbar ist",
        "Wenn sie reelle Einträge hat"
      ],
      correctIndex: 1,
      explanation: "Kernkriterium für Diagonalisierbarkeit."
    }
]
});