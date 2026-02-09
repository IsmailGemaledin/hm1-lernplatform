// quizzes/quiz-data.js
// Keep it super simple: question, choices, correct index, optional explanation.

window.ME1_QUIZZES = [
  {
    id: "me1_basics_1",
    title: "ME1 Basics (Einfach)",
    questions: [
      {
        question: "Wieviel Joule (J) entsprechen 1 eV?",
        choices: [
          "1.602 × 10^-19 J",
          "6.242 × 10^18 J",
          "9.81 J",
          "1.0 J"
        ],
        correctIndex: 0,
        explanation: "1 eV = 1.602 × 10^-19 Joule."
      },
      {
        question: "Was unterscheidet direkte von indirekten Halbleitern (E-k Diagramm)?",
        choices: [
          "Bei direkten Halbleitern liegen Valenzbandmaximum und Leitungsbandminimum bei gleichem k.",
          "Bei direkten Halbleitern ist die Bandlücke immer größer als 3 eV.",
          "Bei indirekten Halbleitern gibt es keine Bandlücke.",
          "Bei indirekten Halbleitern ist die Zustandsdichte konstant."
        ],
        correctIndex: 0,
        explanation: "Indirekt: Impulsänderung nötig (z.B. Phonon), weil Maximum/Minimum nicht bei gleichem k."
      },
      {
        question: "Welche Aussage ist korrekt: Ein Halbleiter ist entartet (degeneriert), wenn …",
        choices: [
          "das Fermi-Niveau innerhalb von 3kT an den Bandkanten liegt oder sogar im Band.",
          "die Temperatur 0 K ist.",
          "die Bandlücke 0 eV ist.",
          "keine Dotierung vorhanden ist."
        ],
        correctIndex: 0,
        explanation: "Degeneration: EF liegt sehr nahe an EC/EV oder im Band (typisch bei hoher Dotierung)."
      }
    ]
  }
];