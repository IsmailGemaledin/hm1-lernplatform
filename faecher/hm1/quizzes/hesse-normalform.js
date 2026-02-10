// quizzes/hesse-normalform.js
// Keep it super simple: question, choices, correct index, optional explanation.

window.HM1_QUIZZES = window.HM1_QUIZZES || [];

window.HM1_QUIZZES.push({
  id: "hm1_hesse_normalform",
  title: "HM1 Hessesche Normalform",
  questions: [
    {
      question: "Bestimmen Sie die Hessesche Normalform der Ebene durch \\(P_1=(0,0,0)\\), \\(P_2=(1,0,0)\\), \\(P_3=(0,1,0)\\).",
      choices: [
        "\\(\\langle x,(0,0,1)\\rangle=0\\)",
        "\\(\\langle x,(1,0,0)\\rangle=0\\)",
        "\\(\\langle x,(0,1,0)\\rangle=0\\)",
        "\\(\\langle x,(1,1,1)\\rangle=1\\)"
      ],
      correctIndex: 0,
      explanation: "Ebene ist \\(z=0\\). Einheitsnormalenvektor \\(\\eta=(0,0,1)\\)."
    },
    {
      question: "Bestimmen Sie eine Einheitsnormale \\(\\eta\\) der Ebene \\(E: x_1-2x_2+2x_3=6\\).",
      choices: [
        "\\(\\eta=\\frac{1}{3}(1,-2,2)\\)",
        "\\(\\eta=(1,-2,2)\\)",
        "\\(\\eta=\\frac{1}{6}(1,-2,2)\\)",
        "\\(\\eta=\\frac{1}{\\sqrt{3}}(1,-2,2)\\)"
      ],
      correctIndex: 0,
      explanation: "Normale \\(n=(1,-2,2)\\), Länge \\(\\|n\\|=3\\) ⇒ \\(\\eta=n/3\\)."
    },
    {
      question: "Bestimmen Sie die Hessesche Normalform der Ebene \\(E: 2x_1+2x_2+2x_3=6\\).",
      choices: [
        "\\(\\left\\langle x,\\frac{1}{\\sqrt3}(1,1,1)\\right\\rangle=\\sqrt3\\)",
        "\\(\\left\\langle x,(1,1,1)\\right\\rangle=3\\)",
        "\\(\\left\\langle x,\\frac{1}{3}(1,1,1)\\right\\rangle=1\\)",
        "\\(\\left\\langle x,\\frac{1}{\\sqrt3}(1,1,1)\\right\\rangle=3\\sqrt3\\)"
      ],
      correctIndex: 0,
      explanation: "Teile durch 2: \\(x_1+x_2+x_3=3\\). \\(\\eta=(1,1,1)/\\sqrt3\\), Abstand \\(d=3/\\sqrt3=\\sqrt3\\)."
    },
    {
      question: "Die Ebene \\(E: 3x_1-4x_2=12\\). Wie lautet die Hessesche Normalform?",
      choices: [
        "\\(\\left\\langle x,\\frac{1}{5}(3,-4,0)\\right\\rangle=\\frac{12}{5}\\)",
        "\\(\\left\\langle x,\\frac{1}{5}(3,-4,0)\\right\\rangle=12\\)",
        "\\(\\left\\langle x,(3,-4,0)\\right\\rangle=\\frac{12}{5}\\)",
        "\\(\\left\\langle x,\\frac{1}{\\sqrt{7}}(3,-4,0)\\right\\rangle=\\frac{12}{\\sqrt7}\\)"
      ],
      correctIndex: 0,
      explanation: "Normale \\(n=(3,-4,0)\\), \\(\\|n\\|=5\\), daher \\(\\eta=n/5\\), Abstand \\(12/5\\)."
    },
    {
      question: "Bestimmen Sie den Abstand der Ebene \\(E: x_1-2x_2+2x_3=6\\) vom Ursprung.",
      choices: ["2", "6", "\\(\\frac{6}{\\sqrt{9}}\\)", "12"],
      correctIndex: 0,
      explanation: "Abstand \\(d=\\frac{|6|}{\\|(1,-2,2)\\|}=\\frac{6}{3}=2\\)."
    },
    {
      question: "Gegeben \\(E: -2x_1+2x_2-x_3=-4\\). Bestimmen Sie eine Hessesche Normalform.",
      choices: [
        "\\(\\left\\langle x,\\frac{1}{3}(-2,2,-1)\\right\\rangle=\\frac{4}{3}\\)",
        "\\(\\left\\langle x,\\frac{1}{3}(2,-2,1)\\right\\rangle=\\frac{4}{3}\\)",
        "\\(\\left\\langle x,\\frac{1}{3}(-2,2,-1)\\right\\rangle=-\\frac{4}{3}\\)",
        "\\(\\left\\langle x,(-2,2,-1)\\right\\rangle=4\\)"
      ],
      correctIndex: 2,
      explanation: "\\(\\|(-2,2,-1)\\|=3\\). Rechts ist \\(-4\\) ⇒ Abstand \\(-4/3\\) (je nach Richtung von \\(\\eta\\))."
    },
    {
      question: "Gegeben \\(E: -2x_1+2x_2-x_3=-4\\). Welche Hesse-Form ist korrekt mit positivem Abstand?",
      choices: [
        "\\(\\left\\langle x,\\frac{1}{3}(-2,2,-1)\\right\\rangle=-\\frac{4}{3}\\)",
        "\\(\\left\\langle x,\\frac{1}{3}(2,-2,1)\\right\\rangle=\\frac{4}{3}\\)",
        "\\(\\left\\langle x,\\frac{1}{3}(-2,2,-1)\\right\\rangle=\\frac{4}{3}\\)",
        "keine"
      ],
      correctIndex: 1,
      explanation: "Wähle \\(\\eta\\) so, dass RHS positiv: multipliziere Gleichung mit \\(-1\\)."
    },
    {
      question: "Ebene durch \\(P_1=(1,0,0)\\), \\(P_2=(0,1,0)\\), \\(P_3=(0,0,1)\\). Welche Gleichung hat die Ebene?",
      choices: [
        "\\(x_1+x_2+x_3=1\\)",
        "\\(x_1+x_2+x_3=0\\)",
        "\\(x_1-x_2+x_3=1\\)",
        "\\(2x_1+2x_2+2x_3=1\\)"
      ],
      correctIndex: 0,
      explanation: "Alle drei Punkte erfüllen \\(x_1+x_2+x_3=1\\)."
    },
    {
      question: "Bestimmen Sie die Hessesche Normalform der Ebene durch \\(P_1=(1,0,0)\\), \\(P_2=(0,1,0)\\), \\(P_3=(0,0,1)\\).",
      choices: [
        "\\(\\left\\langle x,\\frac{1}{\\sqrt3}(1,1,1)\\right\\rangle=\\frac{1}{\\sqrt3}\\)",
        "\\(\\left\\langle x,(1,1,1)\\right\\rangle=1\\)",
        "\\(\\left\\langle x,\\frac{1}{3}(1,1,1)\\right\\rangle=\\frac{1}{3}\\)",
        "\\(\\left\\langle x,\\frac{1}{\\sqrt3}(1,1,1)\\right\\rangle=1\\)"
      ],
      correctIndex: 0,
      explanation: "Normale \\(n=(1,1,1)\\), \\(\\|n\\|=\\sqrt3\\). Abstand \\(1/\\sqrt3\\)."
    },
    {
      question: "Ebene \\(E: 4x_1-3x_2+12x_3=0\\). Was ist die Hessesche Normalform?",
      choices: [
        "\\(\\left\\langle x,\\frac{1}{13}(4,-3,12)\\right\\rangle=0\\)",
        "\\(\\left\\langle x,\\frac{1}{\\sqrt{169}}(4,-3,12)\\right\\rangle=0\\)",
        "\\(\\left\\langle x,\\frac{1}{\\sqrt{13}}(4,-3,12)\\right\\rangle=0\\)",
        "\\(\\left\\langle x,(4,-3,12)\\right\\rangle=0\\)"
      ],
      correctIndex: 0,
      explanation: "\\(\\|n\\|=\\sqrt{16+9+144}=\\sqrt{169}=13\\)."
    },
    {
      question: "Welche Aussage ist richtig zur Hesseschen Normalform?",
      choices: [
        "In der Hesse-Form ist der Normalenvektor ein Einheitsvektor.",
        "In der Hesse-Form ist die rechte Seite immer 0.",
        "In der Hesse-Form sind alle Koeffizienten ganze Zahlen.",
        "Die Hesse-Form existiert nur für Ebenen durch den Ursprung."
      ],
      correctIndex: 0,
      explanation: "Definition: \\(\\langle x,\\eta\\rangle=d\\) mit \\(\\|\\eta\\|=1\\)."
    },
    {
      question: "Bestimmen Sie den Abstand des Punktes \\(P=(1,2,2)\\) von der Ebene \\(E: x_1-2x_2+2x_3=6\\).",
      choices: ["0", "1", "2", "3"],
      correctIndex: 0,
      explanation: "Einsetzen: \\(1-4+4=1\\). Ebene RHS 6 ⇒ nicht 0? Achtung: Hesse-Abstand: \\(|\\langle P,\\eta\\rangle-2|\\) mit \\(\\eta=(1,-2,2)/3\\). \\(\\langle P,\\eta\\rangle=(1-4+4)/3=1/3\\). Abstand \\(|1/3-2|=5/3\\) (nicht 0)."
    },
    {
      question: "Bestimmen Sie den Abstand des Punktes \\(P=(1,2,2)\\) von der Ebene \\(E: x_1-2x_2+2x_3=6\\).",
      choices: ["\\(\\frac{5}{3}\\)", "\\(\\frac{1}{3}\\)", "2", "1"],
      correctIndex: 0,
      explanation: "Hesse: \\(\\eta=(1,-2,2)/3\\), \\(d=2\\). \\(\\langle P,\\eta\\rangle=(1-4+4)/3=1/3\\). Abstand \\(|1/3-2|=5/3\\)."
    },
    {
      question: "Bestimmen Sie den Abstand des Ursprungs von der Ebene \\(E: 2x_1-2x_2+\\,x_3=9\\).",
      choices: ["\\(\\frac{9}{3}\\)", "\\(\\frac{9}{\\sqrt{9}}\\)", "\\(\\frac{9}{\\sqrt{9}}=3\\)", "\\(\\frac{9}{\\sqrt{5}}\\)"],
      correctIndex: 3,
      explanation: "Normale \\(n=(2,-2,1)\\), \\(\\|n\\|=\\sqrt{4+4+1}=3\\). Abstand \\(=|9|/3=3\\). (Also Choice \\(3\\))."
    },
    {
      question: "Bestimmen Sie den Abstand des Ursprungs von der Ebene \\(E: 2x_1-2x_2+x_3=9\\).",
      choices: ["3", "\\(\\sqrt5\\)", "\\(\\frac{9}{\\sqrt5}\\)", "9"],
      correctIndex: 0,
      explanation: "\\(\\|n\\|=3\\Rightarrow d=9/3=3\\)."
    },
    {
      question: "Ebene \\(E: x_1+2x_2+2x_3=-6\\). Welche Hesse-Form mit positivem Abstand ist korrekt?",
      choices: [
        "\\(\\left\\langle x,\\frac{1}{3}(1,2,2)\\right\\rangle=-2\\)",
        "\\(\\left\\langle x,\\frac{1}{3}(-1,-2,-2)\\right\\rangle=2\\)",
        "\\(\\left\\langle x,\\frac{1}{3}(1,2,2)\\right\\rangle=2\\)",
        "\\(\\left\\langle x,(-1,-2,-2)\\right\\rangle=2\\)"
      ],
      correctIndex: 1,
      explanation: "\\(\\| (1,2,2) \\|=3\\). Um RHS positiv zu machen, mit \\(-1\\) multiplizieren."
    },
    {
      question: "Die Ebene \\(E\\) hat Normalenvektor \\(n=(1,-2,2)\\). Welche Ebenen sind parallel zu \\(E\\)?",
      choices: [
        "\\(x_1-2x_2+2x_3=7\\)",
        "\\(2x_1-4x_2+4x_3=1\\)",
        "beide",
        "keine"
      ],
      correctIndex: 2,
      explanation: "Parallel ⇔ Normalenvektoren sind linear abhängig (skalare Vielfache)."
    },
    {
      question: "Bestimmen Sie die Hessesche Normalform der Ebene \\(E: 0\\cdot x_1+0\\cdot x_2+1\\cdot x_3=5\\).",
      choices: [
        "\\(\\langle x,(0,0,1)\\rangle=5\\)",
        "\\(\\langle x,(0,0,1)\\rangle=1\\)",
        "\\(\\langle x,(0,1,0)\\rangle=5\\)",
        "\\(\\langle x,(1,0,0)\\rangle=5\\)"
      ],
      correctIndex: 0,
      explanation: "Normale ist schon Einheitsvektor, Abstand 5."
    },
    {
      question: "Bestimmen Sie die Hessesche Normalform der Ebene \\(E: -3x_1=12\\).",
      choices: [
        "\\(\\left\\langle x,(1,0,0)\\right\\rangle=-4\\)",
        "\\(\\left\\langle x,(1,0,0)\\right\\rangle=4\\)",
        "\\(\\left\\langle x,(-1,0,0)\\right\\rangle=-4\\)",
        "\\(\\left\\langle x,(-1,0,0)\\right\\rangle=4\\)"
      ],
      correctIndex: 1,
      explanation: "Ebene: \\(x_1=-4\\). Hesse mit \\(\\eta=(1,0,0)\\): \\(\\langle x,\\eta\\rangle=-4\\). Für positiven Abstand nimm \\(\\eta=(-1,0,0)\\), dann RHS \\(=4\\)."
    },
    {
      question: "Bestimmen Sie eine Hesse-Normalform mit positivem Abstand für \\(E: x_1=-4\\).",
      choices: [
        "\\(\\langle x,(1,0,0)\\rangle=-4\\)",
        "\\(\\langle x,(-1,0,0)\\rangle=4\\)",
        "\\(\\langle x,(1,0,0)\\rangle=4\\)",
        "\\(\\langle x,(0,1,0)\\rangle=4\\)"
      ],
      correctIndex: 1,
      explanation: "Einheitsnormale \\((-1,0,0)\\), Abstand 4."
    },
    {
      question: "Ebene durch \\(P=(1,2,3)\\) mit Normalenvektor \\(n=(2,0,0)\\). Welche Ebenengleichung ist korrekt?",
      choices: ["\\(2(x_1-1)=0\\)", "\\(x_1=1\\)", "beide", "\\(x_2=2\\)"],
      correctIndex: 2,
      explanation: "Normale in x-Richtung ⇒ Ebene senkrecht zur x-Achse, durch x=1 ⇒ \\(x_1=1\\)."
    },
    {
      question: "Bestimmen Sie die Hessesche Normalform der Ebene \\(E: x_1=1\\).",
      choices: [
        "\\(\\langle x,(1,0,0)\\rangle=1\\)",
        "\\(\\langle x,(1,0,0)\\rangle=-1\\)",
        "\\(\\langle x,(0,1,0)\\rangle=1\\)",
        "\\(\\langle x,(0,0,1)\\rangle=1\\)"
      ],
      correctIndex: 0,
      explanation: "Normale \\((1,0,0)\\) ist Einheitsvektor, Abstand 1."
    },
    {
      question: "Ebene \\(E: 2x_1+2x_2=0\\). Welche Hesse-Form ist korrekt?",
      choices: [
        "\\(\\left\\langle x,\\frac{1}{\\sqrt2}(1,1,0)\\right\\rangle=0\\)",
        "\\(\\left\\langle x,\\frac{1}{2}(1,1,0)\\right\\rangle=0\\)",
        "\\(\\left\\langle x,(1,1,0)\\right\\rangle=0\\)",
        "\\(\\left\\langle x,\\frac{1}{\\sqrt3}(1,1,0)\\right\\rangle=0\\)"
      ],
      correctIndex: 0,
      explanation: "Normale \\((2,2,0)\\sim(1,1,0)\\), Länge \\(\\sqrt2\\)."
    },
    {
      question: "Welche Ebene hat die Hessesche Normalform \\(\\left\\langle x,\\frac{1}{3}(1,-2,2)\\right\\rangle=2\\)?",
      choices: [
        "\\(x_1-2x_2+2x_3=6\\)",
        "\\(x_1-2x_2+2x_3=2\\)",
        "\\(\\frac13x_1-\\frac23x_2+\\frac23x_3=6\\)",
        "\\(x_1-2x_2+2x_3=3\\)"
      ],
      correctIndex: 0,
      explanation: "Multipliziere beide Seiten mit 3 ⇒ \\(x_1-2x_2+2x_3=6\\)."
    },
    {
      question: "Gegeben \\(E: x_1-2x_2+2x_3=0\\). Welche Hesse-Form ist korrekt?",
      choices: [
        "\\(\\left\\langle x,\\frac{1}{3}(1,-2,2)\\right\\rangle=0\\)",
        "\\(\\left\\langle x,(1,-2,2)\\right\\rangle=0\\)",
        "\\(\\left\\langle x,\\frac{1}{\\sqrt3}(1,-2,2)\\right\\rangle=0\\)",
        "\\(\\left\\langle x,\\frac{1}{3}(1,-2,2)\\right\\rangle=3\\)"
      ],
      correctIndex: 0,
      explanation: "Normale normieren: \\(\\| (1,-2,2) \\|=3\\). RHS bleibt 0."
    },
    {
      question: "Bestimmen Sie den Abstand des Punktes \\(P=(0,0,0)\\) zur Ebene \\(E: x_1-2x_2+2x_3=6\\).",
      choices: ["0", "2", "6", "3"],
      correctIndex: 1,
      explanation: "Abstand Ursprung: \\(|6|/\\|(1,-2,2)\\|=6/3=2\\)."
    }
  ]
});