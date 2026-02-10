window.HM1_QUIZZES = window.HM1_QUIZZES || [];

HM1_QUIZZES.push({
  id: "quadriken",
  title: "Quadriken",
  questions: [
    {
      question: "Gegeben ist die Quadrik \\(x_1^2 + 4x_1x_2 + x_2^2 - 1 = 0\\). Welche Art von Quadrik liegt vor?",
      choices: ["Ellipse", "Hyperbel", "Parabel", "Leere Menge"],
      correctIndex: 1,
      explanation: "Matrix hat Eigenwerte unterschiedlichen Vorzeichens ⇒ Hyperbel."
    },
    {
      question: "Gegeben \\(x_1^2 + 2x_1x_2 + x_2^2 = 0\\). Welche Aussage ist korrekt?",
      choices: [
        "Degenerierte Quadrik",
        "Ellipse",
        "Hyperbel",
        "Parabel"
      ],
      correctIndex: 0,
      explanation: "Quadratische Form ist \\((x_1+x_2)^2\\) ⇒ degeneriert."
    },
    {
      question: "Welche symmetrische Matrix gehört zur Quadrik \\(2x_1^2 - 6x_1x_2 + 2x_2^2 = 1\\)?",
      choices: [
        "\\(\\begin{pmatrix}2&-3\\\\-3&2\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}2&-6\\\\-6&2\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}1&-3\\\\-3&1\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}2&3\\\\3&2\\end{pmatrix}\\)"
      ],
      correctIndex: 0,
      explanation: "Gemischter Term: \\(2a_{12}= -6\\Rightarrow a_{12}=-3\\)."
    },
    {
      question: "Gegeben ist \\(x^T A x = 1\\) mit \\(A\\) positiv definit. Welche Quadrik liegt vor?",
      choices: ["Ellipse", "Hyperbel", "Parabel", "Gerade"],
      correctIndex: 0,
      explanation: "Alle Eigenwerte positiv ⇒ Ellipse."
    },
    {
      question: "Welche Bedingung an die Eigenwerte von \\(A\\) beschreibt eine Hyperbel?",
      choices: [
        "Alle Eigenwerte positiv",
        "Alle Eigenwerte negativ",
        "Mindestens ein positives und ein negatives Eigenwert",
        "Mindestens ein Eigenwert 0"
      ],
      correctIndex: 2,
      explanation: "Unterschiedliche Vorzeichen ⇒ Hyperbel."
    },
    {
      question: "Gegeben \\(x_1^2 - x_2^2 + 2x_1 = 0\\). Welche Transformation eliminiert den linearen Term?",
      choices: [
        "Verschiebung",
        "Rotation",
        "Spiegelung",
        "Skalierung"
      ],
      correctIndex: 0,
      explanation: "Lineare Terme entfernt man durch Verschiebung."
    },
    {
      question: "Welche Transformation eliminiert gemischte Terme \\(x_1x_2\\) in einer Quadrik?",
      choices: [
        "Verschiebung",
        "Rotation",
        "Translation",
        "Skalierung"
      ],
      correctIndex: 1,
      explanation: "Rotation (orthogonale Transformation) diagonalisiert die Matrix."
    },
    {
      question: "Die Matrix \\(A=\\begin{pmatrix}1&2\\\\2&1\\end{pmatrix}\\) hat welche Eigenwerte?",
      choices: ["3 und −1", "1 und 2", "2 und 2", "3 und 1"],
      correctIndex: 0,
      explanation: "Charakteristisches Polynom: \\((1-\\lambda)^2-4=0\\)."
    },
    {
      question: "Gegeben \\(x_1^2 + x_2^2 + 2x_1 - 4 = 0\\). Welche Quadrik liegt vor?",
      choices: ["Ellipse", "Hyperbel", "Parabel", "Leere Menge"],
      correctIndex: 0,
      explanation: "Nach quadratischer Ergänzung: Kreis."
    },
    {
      question: "Welche Aussage ist korrekt zur Matrixdarstellung einer Quadrik?",
      choices: [
        "Die Matrix ist immer eindeutig",
        "Die Matrix ist symmetrisch",
        "Die Matrix ist diagonal",
        "Die Matrix ist orthogonal"
      ],
      correctIndex: 1,
      explanation: "Gemischte Terme werden symmetrisch verteilt."
    },
    {
      question: "Gegeben \\(x_1^2 + 6x_1x_2 + x_2^2 = 1\\). Welche Eigenrichtungen hat die Quadrik?",
      choices: [
        "\\((1,1)\\) und \\((1,-1)\\)",
        "\\((1,0)\\) und \\((0,1)\\)",
        "\\((2,1)\\) und \\((1,2)\\)",
        "\\((1,2)\\) und \\((2,1)\\)"
      ],
      correctIndex: 0,
      explanation: "Wie in Aufgabe 1: symmetrische Struktur."
    },
    {
      question: "Welche Normalform entsteht aus \\(4z_1^2 - 2z_2^2 = 1\\)?",
      choices: ["Hyperbel", "Ellipse", "Parabel", "Punkt"],
      correctIndex: 0,
      explanation: "Unterschiedliche Vorzeichen ⇒ Hyperbel."
    },
    {
      question: "Was beschreibt die Gleichung \\(x^T A x = 0\\) bei indefiniter Matrix \\(A\\)?",
      choices: [
        "Zwei sich schneidende Geraden",
        "Ellipse",
        "Leere Menge",
        "Ein Punkt"
      ],
      correctIndex: 0,
      explanation: "Typisch für degenerierte Hyperbeln."
    },
    {
      question: "Welche Eigenschaft hat eine orthogonale Matrix \\(Q\\)?",
      choices: [
        "\\(Q^TQ=I\\)",
        "\\(Q^2=I\\)",
        "\\(\\det(Q)=0\\)",
        "\\(Q^T=-Q\\)"
      ],
      correctIndex: 0,
      explanation: "Definition orthogonaler Matrizen."
    },
    {
      question: "Warum verwendet man orthogonale Transformationen bei Quadriken?",
      choices: [
        "Sie erhalten Winkel und Längen",
        "Sie entfernen lineare Terme",
        "Sie ändern Eigenwerte",
        "Sie machen die Matrix singulär"
      ],
      correctIndex: 0,
      explanation: "Geometrische Struktur bleibt erhalten."
    },
    {
      question: "Welche Quadrik entsteht bei einem Eigenwert gleich 0?",
      choices: ["Parabel", "Ellipse", "Hyperbel", "Kreis"],
      correctIndex: 0,
      explanation: "Ein verschwindender Eigenwert ⇒ Parabel."
    },
    {
      question: "Welche Bedingung beschreibt eine Ellipse?",
      choices: [
        "Alle Eigenwerte gleich 0",
        "Alle Eigenwerte gleiches Vorzeichen",
        "Gemischte Vorzeichen",
        "Determinante = 0"
      ],
      correctIndex: 1,
      explanation: "Positiv oder negativ definit."
    },
    {
      question: "Welche Transformation folgt nach der Rotation zur Normalform?",
      choices: [
        "Verschiebung",
        "Weitere Rotation",
        "Spiegelung",
        "Skalierung"
      ],
      correctIndex: 0,
      explanation: "Lineare Terme eliminieren."
    },
    {
      question: "Welche Größe bleibt bei einer Rotation invariant?",
      choices: [
        "Eigenwerte",
        "Koordinaten",
        "Lineare Terme",
        "Konstante"
      ],
      correctIndex: 0,
      explanation: "Orthogonale Ähnlichkeit erhält das Spektrum."
    },
    {
      question: "Was beschreibt die Gleichung \\(\\frac{z_1^2}{a^2}-\\frac{z_2^2}{b^2}=1\\)?",
      choices: [
        "Hyperbel in Normalform",
        "Ellipse in Normalform",
        "Parabel",
        "Gerade"
      ],
      correctIndex: 0,
      explanation: "Standardform der Hyperbel."
    }
  ]
});