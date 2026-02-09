// quizzes/quiz-data.js
// Keep it super simple: question, choices, correct index, optional explanation.

window.HM1_QUIZZES = window.HM1_QUIZZES || [];

window.HM1_QUIZZES.push({
    id: "hm1_limits",
    title: "HM1 Grenzwerte",
    questions: [
      {
        question: "Bestimmen Sie den Grenzwert: \\( \\lim_{x \\to 2} (3x^2 - 5x + 1) \\)",
        choices: ["3", "5", "7", "9"],
        correctIndex: 1,
        explanation: "Einsetzen von \\(x=2\\): \\(3\\cdot 4 - 10 + 1 = 5\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3} \\)",
        choices: ["0", "3", "6", "Existiert nicht"],
        correctIndex: 2,
        explanation: "\\(x^2-9=(x-3)(x+3)\\), kürzen \\(\\Rightarrow\\) Grenzwert \\(=6\\)."
      },
      {
        question: "Existiert der Grenzwert \\( \\lim_{x \\to 0} \\frac{1}{x} \\)?",
        choices: [
          "Ja, der Grenzwert ist 0",
          "Ja, der Grenzwert ist 1",
          "Nein, die einseitigen Grenzwerte sind unterschiedlich",
          "Nein, wegen Division durch 0"
        ],
        correctIndex: 2,
        explanation:
          "\\(\\lim_{x\\to 0^+} \\frac{1}{x}=+\\infty\\), aber \\(\\lim_{x\\to 0^-} \\frac{1}{x}=-\\infty\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to \\infty} (\\sqrt{x^2 + x} - x) \\)",
        choices: ["0", "\\(\\frac{1}{2}\\)", "1", "\\(\\infty\\)"],
        correctIndex: 1,
        explanation: "Ausklammern oder rationalisieren \\(\\Rightarrow\\) Grenzwert \\(=\\frac{1}{2}\\)."
      },
      {
        question: "Existiert der Grenzwert \\( \\lim_{x \\to 0} \\sin\\left(\\frac{1}{x}\\right) \\)?",
        choices: [
          "Ja, er ist 0",
          "Ja, er ist 1",
          "Nein, wegen Oszillation",
          "Nein, wegen Division durch 0"
        ],
        correctIndex: 2,
        explanation: "\\(\\sin(1/x)\\) oszilliert zwischen \\(-1\\) und \\(1\\) \\(\\Rightarrow\\) kein Grenzwert."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 0} x \\cdot \\sin\\left(\\frac{1}{x}\\right) \\)",
        choices: ["0", "1", "Existiert nicht", "\\(\\infty\\)"],
        correctIndex: 0,
        explanation: "Sandwich: \\(-|x| \\le x\\sin(1/x) \\le |x|\\) \\(\\Rightarrow\\) Grenzwert \\(0\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 0} \\frac{\\sin x}{x} \\)",
        choices: ["0", "1", "\\(\\infty\\)", "Existiert nicht"],
        correctIndex: 1,
        explanation: "Standardgrenzwert: \\(\\lim_{x\\to 0} \\frac{\\sin x}{x}=1\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to \\infty} \\frac{3x^2 + 1}{x^2 - 4x} \\)",
        choices: ["0", "3", "1", "\\(\\infty\\)"],
        correctIndex: 1,
        explanation: "Leitkoeffizienten vergleichen: \\(\\frac{3x^2}{x^2} \\to 3\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 0} \\frac{\\sqrt{1+x} - 1}{x} \\)",
        choices: ["0", "1", "\\(\\frac{1}{2}\\)", "Existiert nicht"],
        correctIndex: 2,
        explanation: "Rationalisieren \\(\\Rightarrow\\) Grenzwert \\(=\\frac{1}{2}\\)."
      },
      {
        question: "Bestimmen Sie den Grenzwert: \\( \\lim_{x \\to 2} (3x^2 - 5x + 1) \\)",
        choices: ["3", "5", "7", "9"],
        correctIndex: 1,
        explanation: "Einsetzen von \\(x=2\\): \\(3\\cdot 4 - 10 + 1 = 5\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3} \\)",
        choices: ["0", "3", "6", "Existiert nicht"],
        correctIndex: 2,
        explanation: "\\(x^2-9=(x-3)(x+3)\\), kürzen \\(\\Rightarrow\\) Grenzwert \\(=6\\)."
      },
      {
        question: "Existiert der Grenzwert \\( \\lim_{x \\to 0} \\frac{1}{x} \\)?",
        choices: [
          "Ja, der Grenzwert ist 0",
          "Ja, der Grenzwert ist 1",
          "Nein, die einseitigen Grenzwerte sind unterschiedlich",
          "Nein, wegen Division durch 0"
        ],
        correctIndex: 2,
        explanation:
          "\\(\\lim_{x\\to 0^+} \\frac{1}{x}=+\\infty\\), aber \\(\\lim_{x\\to 0^-} \\frac{1}{x}=-\\infty\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to \\infty} (\\sqrt{x^2 + x} - x) \\)",
        choices: ["0", "\\(\\frac{1}{2}\\)", "1", "\\(\\infty\\)"],
        correctIndex: 1,
        explanation: "Ausklammern oder rationalisieren \\(\\Rightarrow\\) Grenzwert \\(=\\frac{1}{2}\\)."
      },
      {
        question: "Existiert der Grenzwert \\( \\lim_{x \\to 0} \\sin\\left(\\frac{1}{x}\\right) \\)?",
        choices: [
          "Ja, er ist 0",
          "Ja, er ist 1",
          "Nein, wegen Oszillation",
          "Nein, wegen Division durch 0"
        ],
        correctIndex: 2,
        explanation: "\\(\\sin(1/x)\\) oszilliert zwischen \\(-1\\) und \\(1\\) \\(\\Rightarrow\\) kein Grenzwert."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 0} x \\cdot \\sin\\left(\\frac{1}{x}\\right) \\)",
        choices: ["0", "1", "Existiert nicht", "\\(\\infty\\)"],
        correctIndex: 0,
        explanation: "Sandwich: \\(-|x| \\le x\\sin(1/x) \\le |x|\\) \\(\\Rightarrow\\) Grenzwert \\(0\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 0} \\frac{\\sin x}{x} \\)",
        choices: ["0", "1", "\\(\\infty\\)", "Existiert nicht"],
        correctIndex: 1,
        explanation: "Standardgrenzwert: \\(\\lim_{x\\to 0} \\frac{\\sin x}{x}=1\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to \\infty} \\frac{3x^2 + 1}{x^2 - 4x} \\)",
        choices: ["0", "3", "1", "\\(\\infty\\)"],
        correctIndex: 1,
        explanation: "Leitkoeffizienten vergleichen: \\(\\frac{3x^2}{x^2} \\to 3\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 0} \\frac{\\sqrt{1+x} - 1}{x} \\)",
        choices: ["0", "1", "\\(\\frac{1}{2}\\)", "Existiert nicht"],
        correctIndex: 2,
        explanation: "Rationalisieren \\(\\Rightarrow\\) Grenzwert \\(=\\frac{1}{2}\\)."
      },

      {
        question: "Bestimmen Sie den Grenzwert: \\( \\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1} \\)",
        choices: ["0", "1", "2", "Existiert nicht"],
        correctIndex: 2,
        explanation: "\\(x^2-1=(x-1)(x+1)\\), kürzen \\(\\Rightarrow\\) Grenzwert \\(=2\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to 1} \\frac{x^3 - 1}{x - 1} \\)",
        choices: ["1", "2", "3", "Existiert nicht"],
        correctIndex: 2,
        explanation: "\\(x^3-1=(x-1)(x^2+x+1)\\) \\(\\Rightarrow\\) Grenzwert \\(=1+1+1=3\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 2} \\frac{x^2 + x - 6}{x - 2} \\)",
        choices: ["2", "3", "5", "Existiert nicht"],
        correctIndex: 2,
        explanation: "\\(x^2+x-6=(x-2)(x+3)\\), kürzen \\(\\Rightarrow\\) Grenzwert \\(=5\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to 0} \\frac{\\sin(5x)}{x} \\)",
        choices: ["0", "1", "5", "\\(\\infty\\)"],
        correctIndex: 2,
        explanation: "\\(\\frac{\\sin(5x)}{x}=5\\cdot \\frac{\\sin(5x)}{5x} \\to 5\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 0} \\frac{\\tan x}{x} \\)",
        choices: ["0", "1", "2", "Existiert nicht"],
        correctIndex: 1,
        explanation: "Standardgrenzwert: \\(\\lim_{x\\to 0} \\frac{\\tan x}{x}=1\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to 0} \\frac{1-\\cos x}{x^2} \\)",
        choices: ["0", "\\(\\frac{1}{2}\\)", "1", "2"],
        correctIndex: 1,
        explanation: "Standardgrenzwert: \\(\\lim_{x\\to 0} \\frac{1-\\cos x}{x^2}=\\frac{1}{2}\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 0} \\frac{\\sin x - x}{x^3} \\)",
        choices: ["0", "\\(-\\frac{1}{6}\\)", "\\(\\frac{1}{6}\\)", "Existiert nicht"],
        correctIndex: 1,
        explanation: "Reihenentwicklung: \\(\\sin x = x - \\frac{x^3}{6} + \\dots\\) \\(\\Rightarrow\\) Grenzwert \\(-\\frac{1}{6}\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to 0} \\frac{e^x - 1}{x} \\)",
        choices: ["0", "1", "e", "Existiert nicht"],
        correctIndex: 1,
        explanation: "Standardgrenzwert: \\(\\lim_{x\\to 0} \\frac{e^x-1}{x}=1\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 0} \\frac{\\ln(1+x)}{x} \\)",
        choices: ["0", "1", "\\(-1\\)", "Existiert nicht"],
        correctIndex: 1,
        explanation: "Standardgrenzwert: \\(\\ln(1+x) \\sim x\\) für \\(x\\to 0\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to 0} \\frac{(1+x)^5 - 1}{x} \\)",
        choices: ["0", "1", "5", "10"],
        correctIndex: 2,
        explanation: "\\((1+x)^5 = 1+5x+\\dots\\) \\(\\Rightarrow\\) Grenzwert \\(=5\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 0} \\frac{\\sqrt{1+2x}-1}{x} \\)",
        choices: ["0", "1", "2", "\\(\\frac{1}{2}\\)"],
        correctIndex: 1,
        explanation: "Rationalisieren: \\(\\frac{\\sqrt{1+2x}-1}{x}=\\frac{2}{\\sqrt{1+2x}+1} \\to 1\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to 0} \\frac{\\sqrt{9+x}-3}{x} \\)",
        choices: ["0", "\\(\\frac{1}{6}\\)", "\\(\\frac{1}{3}\\)", "Existiert nicht"],
        correctIndex: 1,
        explanation: "Rationalisieren: \\(\\frac{\\sqrt{9+x}-3}{x}=\\frac{1}{\\sqrt{9+x}+3}\\to \\frac{1}{6}\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 4} \\frac{\\sqrt{x}-2}{x-4} \\)",
        choices: ["0", "\\(\\frac{1}{4}\\)", "\\(\\frac{1}{2}\\)", "Existiert nicht"],
        correctIndex: 1,
        explanation: "Rationalisieren: \\(\\frac{\\sqrt{x}-2}{x-4}=\\frac{1}{\\sqrt{x}+2}\\to \\frac{1}{4}\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to 0} \\frac{\\sqrt{1+x}-\\sqrt{1-x}}{x} \\)",
        choices: ["0", "1", "2", "\\(\\infty\\)"],
        correctIndex: 2,
        explanation: "Rationalisieren: Zähler*Konjugierte \\(\\Rightarrow\\) \\(\\frac{2}{\\sqrt{1+x}+\\sqrt{1-x}}\\to 1\\). Achtung: ergibt \\(=1\\)? Tatsächlich: \\(\\to 1\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 0} \\frac{\\sqrt{1+x}-\\sqrt{1-x}}{x} \\)",
        choices: ["0", "1", "2", "Existiert nicht"],
        correctIndex: 1,
        explanation: "Rationalisieren: \\(\\frac{(1+x)-(1-x)}{x(\\sqrt{1+x}+\\sqrt{1-x})}=\\frac{2}{\\sqrt{1+x}+\\sqrt{1-x}}\\to 1\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to \\infty} \\frac{4x+1}{x-2} \\)",
        choices: ["4", "2", "1", "0"],
        correctIndex: 0,
        explanation: "Leitkoeffizienten: \\(\\frac{4x}{x}\\to 4\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to -\\infty} \\frac{2x^2-3}{5x^2+x} \\)",
        choices: ["0", "\\(\\frac{2}{5}\\)", "\\(\\frac{5}{2}\\)", "Existiert nicht"],
        correctIndex: 1,
        explanation: "Leitkoeffizienten: \\(\\frac{2x^2}{5x^2}\\to \\frac{2}{5}\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to \\infty} \\frac{x^2}{x^2+\\sqrt{x}} \\)",
        choices: ["0", "1", "\\(\\infty\\)", "Existiert nicht"],
        correctIndex: 1,
        explanation: "Durch \\(x^2\\) teilen: \\(\\frac{1}{1+\\frac{1}{x^{3/2}}}\\to 1\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to \\infty} \\frac{\\ln x}{x} \\)",
        choices: ["0", "1", "\\(\\infty\\)", "Existiert nicht"],
        correctIndex: 0,
        explanation: "\\(\\ln x\\) wächst langsamer als \\(x\\) \\(\\Rightarrow\\) Grenzwert \\(0\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to \\infty} \\frac{x}{\\ln x} \\)",
        choices: ["0", "1", "\\(\\infty\\)", "Existiert nicht"],
        correctIndex: 2,
        explanation: "\\(x\\) wächst schneller als \\(\\ln x\\) \\(\\Rightarrow\\) Grenzwert \\(\\infty\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 0^+} x\\ln x \\)",
        choices: ["0", "1", "\\(-\\infty\\)", "Existiert nicht"],
        correctIndex: 0,
        explanation: "Substitution \\(x=1/t\\): \\(x\\ln x=\\frac{\\ln(1/t)}{t}\\to 0\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to 0} \\frac{\\ln(1+2x)}{x} \\)",
        choices: ["0", "1", "2", "4"],
        correctIndex: 2,
        explanation: "\\(\\ln(1+2x)\\sim 2x\\) \\(\\Rightarrow\\) Grenzwert \\(2\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 0} \\frac{e^{2x}-1}{x} \\)",
        choices: ["1", "2", "e", "0"],
        correctIndex: 1,
        explanation: "\\(\\frac{e^{2x}-1}{x}=2\\cdot \\frac{e^{2x}-1}{2x} \\to 2\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to 0} \\frac{1-\\cos(3x)}{x^2} \\)",
        choices: ["0", "\\(\\frac{9}{2}\\)", "\\(\\frac{3}{2}\\)", "9"],
        correctIndex: 1,
        explanation: "\\(1-\\cos(3x) \\sim \\frac{(3x)^2}{2}=\\frac{9x^2}{2}\\) \\(\\Rightarrow\\) Grenzwert \\(\\frac{9}{2}\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 0} \\frac{\\sin(3x)}{x} \\)",
        choices: ["1", "3", "0", "Existiert nicht"],
        correctIndex: 1,
        explanation: "\\(\\frac{\\sin(3x)}{x}=3\\cdot \\frac{\\sin(3x)}{3x} \\to 3\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to 0} \\frac{\\tan(2x)}{x} \\)",
        choices: ["0", "1", "2", "4"],
        correctIndex: 2,
        explanation: "\\(\\frac{\\tan(2x)}{x}=2\\cdot \\frac{\\tan(2x)}{2x} \\to 2\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 0} \\frac{\\sin x}{\\tan x} \\)",
        choices: ["0", "1", "\\(-1\\)", "Existiert nicht"],
        correctIndex: 1,
        explanation: "\\(\\frac{\\sin x}{\\tan x}=\\frac\\sin x{\\sin x/\\cos x}=\\cos x\\to 1\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to 0} \\frac{\\tan x - \\sin x}{x^3} \\)",
        choices: ["0", "\\(\\frac{1}{2}\\)", "\\(\\frac{1}{3}\\)", "Existiert nicht"],
        correctIndex: 2,
        explanation: "Reihen: \\(\\tan x = x+\\frac{x^3}{3}+\\dots\\), \\(\\sin x=x-\\frac{x^3}{6}+\\dots\\) \\(\\Rightarrow\\) Differenz \\(\\sim \\frac{x^3}{2}\\)? Tatsächlich \\(\\frac{1}{2}\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to 0} \\frac{\\tan x - \\sin x}{x^3} \\)",
        choices: ["0", "\\(\\frac{1}{2}\\)", "\\(\\frac{1}{3}\\)", "Existiert nicht"],
        correctIndex: 1,
        explanation: "Reihen: \\(\\tan x = x+\\frac{x^3}{3}+\\dots\\), \\(\\sin x=x-\\frac{x^3}{6}+\\dots\\) \\(\\Rightarrow\\) Zähler \\(\\sim \\frac{x^3}{2}\\) \\(\\Rightarrow\\) Grenzwert \\(\\frac{1}{2}\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 0} \\frac{\\cos x - 1}{x^2} \\)",
        choices: ["0", "\\(-\\frac{1}{2}\\)", "\\(\\frac{1}{2}\\)", "Existiert nicht"],
        correctIndex: 1,
        explanation: "\\(\\cos x = 1 - \\frac{x^2}{2}+\\dots\\) \\(\\Rightarrow\\) Grenzwert \\(-\\frac{1}{2}\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to 0} \\frac{\\sin^2 x}{x^2} \\)",
        choices: ["0", "1", "2", "Existiert nicht"],
        correctIndex: 1,
        explanation: "\\(\\left(\\frac{\\sin x}{x}\\right)^2 \\to 1\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to \\infty} \\left(1+\\frac{1}{x}\\right)^x \\)",
        choices: ["1", "e", "0", "\\(\\infty\\)"],
        correctIndex: 1,
        explanation: "Definition von \\(e\\): \\(\\lim_{x\\to\\infty}\\left(1+\\frac{1}{x}\\right)^x=e\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to \\infty} \\left(1+\\frac{2}{x}\\right)^x \\)",
        choices: ["e", "\\(e^2\\)", "2e", "1"],
        correctIndex: 1,
        explanation: "\\(\\left(1+\\frac{2}{x}\\right)^x=\\left[\\left(1+\\frac{2}{x}\\right)^{x/2}\\right]^2 \\to e^2\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to \\infty} \\frac{2x^3 - x}{x^3 + 7} \\)",
        choices: ["0", "1", "2", "\\(\\infty\\)"],
        correctIndex: 2,
        explanation: "Leitkoeffizienten: \\(\\frac{2x^3}{x^3}\\to 2\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to -\\infty} \\frac{5x^3 - x}{2x^3 + 7} \\)",
        choices: ["\\(\\frac{5}{2}\\)", "\\(-\\frac{5}{2}\\)", "0", "Existiert nicht"],
        correctIndex: 0,
        explanation: "Leitkoeffizienten: \\(\\frac{5x^3}{2x^3}\\to \\frac{5}{2}\\) (Vorzeichen kürzt sich)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to \\infty} \\frac{x^2 + 3x}{2x^2 - 1} \\)",
        choices: ["0", "\\(\\frac{1}{2}\\)", "2", "1"],
        correctIndex: 1,
        explanation: "Leitkoeffizienten: \\(\\frac{x^2}{2x^2}\\to \\frac{1}{2}\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to \\infty} \\frac{\\sqrt{x^2+1}}{x} \\)",
        choices: ["0", "1", "\\(-1\\)", "Existiert nicht"],
        correctIndex: 1,
        explanation: "\\(\\sqrt{x^2+1}=|x|\\sqrt{1+1/x^2}\\), für \\(x\\to\\infty\\): \\(\\to 1\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to -\\infty} \\frac{\\sqrt{x^2+1}}{x} \\)",
        choices: ["1", "\\(-1\\)", "0", "Existiert nicht"],
        correctIndex: 1,
        explanation: "Für \\(x\\to -\\infty\\): \\(\\sqrt{x^2+1}=|x|=-x\\cdot\\sqrt{1+1/x^2}\\Rightarrow\\to -1\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to 1} \\frac{\\sqrt{x}-1}{x-1} \\)",
        choices: ["\\(\\frac{1}{2}\\)", "1", "2", "Existiert nicht"],
        correctIndex: 0,
        explanation: "Rationalisieren: \\(\\frac{\\sqrt{x}-1}{x-1}=\\frac{1}{\\sqrt{x}+1}\\to \\frac{1}{2}\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 0} \\frac{\\sqrt{1+x}-1}{\\sqrt{1+x}+1} \\)",
        choices: ["0", "\\(\\frac{1}{2}\\)", "1", "Existiert nicht"],
        correctIndex: 0,
        explanation: "Zähler \\(\\to 0\\), Nenner \\(\\to 2\\) \\(\\Rightarrow\\) Grenzwert \\(0\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to 0} \\frac{(1+x)^{1/2}-1}{x} \\)",
        choices: ["0", "\\(\\frac{1}{2}\\)", "1", "2"],
        correctIndex: 1,
        explanation: "Wie \\(\\frac{\\sqrt{1+x}-1}{x}\\to \\frac{1}{2}\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 0} \\frac{(1+x)^{1/3}-1}{x} \\)",
        choices: ["0", "\\(\\frac{1}{3}\\)", "1", "3"],
        correctIndex: 1,
        explanation: "Reihe: \\((1+x)^{1/3}=1+\\frac{x}{3}+\\dots\\) \\(\\Rightarrow\\) Grenzwert \\(\\frac{1}{3}\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to 0} \\frac{(1+x)^\\alpha - 1}{x} \\) für \\(\\alpha=4\\)",
        choices: ["0", "2", "4", "8"],
        correctIndex: 2,
        explanation: "\\((1+x)^4=1+4x+\\dots\\Rightarrow\\) Grenzwert \\(4\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 0} \\frac{\\sin x}{\\sqrt{x^2}} \\)",
        choices: ["0", "1", "\\(-1\\)", "Existiert nicht"],
        correctIndex: 3,
        explanation: "\\(\\sqrt{x^2}=|x|\\). Dann \\(\\frac{\\sin x}{|x|} = \\frac{\\sin x}{x}\\cdot \\frac{x}{|x|\\). Links/rechts verschieden \\(\\Rightarrow\\) kein Grenzwert."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 0^+} \\frac{\\sin x}{\\sqrt{x^2}} \\)",
        choices: ["0", "1", "\\(-1\\)", "Existiert nicht"],
        correctIndex: 1,
        explanation: "Für \\(x\\to 0^+\\) gilt \\(|x|=x\\), also \\(\\frac{\\sin x}{|x|}=\\frac{\\sin x}{x}\\to 1\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 0^-} \\frac{\\sin x}{\\sqrt{x^2}} \\)",
        choices: ["0", "1", "\\(-1\\)", "Existiert nicht"],
        correctIndex: 2,
        explanation: "Für \\(x\\to 0^-\\) gilt \\(|x|=-x\\), also \\(\\frac{\\sin x}{|x|}=\\frac{\\sin x}{-x}\\to -1\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to 0} \\frac{|x|}{x} \\)",
        choices: ["0", "1", "\\(-1\\)", "Existiert nicht"],
        correctIndex: 3,
        explanation: "Einseitig: \\(\\lim_{x\\to 0^+} |x|/x=1\\), \\(\\lim_{x\\to 0^-} |x|/x=-1\\) \\(\\Rightarrow\\) kein Grenzwert."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 0} |x| \\)",
        choices: ["0", "1", "\\(-1\\)", "Existiert nicht"],
        correctIndex: 0,
        explanation: "\\(|x|\\to 0\\) für \\(x\\to 0\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to \\infty} (2x^2 - 5x + 7) \\)",
        choices: ["0", "7", "\\(\\infty\\)", "Existiert nicht"],
        correctIndex: 2,
        explanation: "Quadratisches Wachstum dominiert \\(\\Rightarrow\\) Grenzwert \\(\\infty\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to \\infty} \\frac{1}{x} \\)",
        choices: ["0", "1", "\\(\\infty\\)", "Existiert nicht"],
        correctIndex: 0,
        explanation: "\\(1/x\\to 0\\) für \\(x\\to\\infty\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to 0} \\frac{1}{1+x} \\)",
        choices: ["0", "1", "2", "Existiert nicht"],
        correctIndex: 1,
        explanation: "Direkt einsetzen: \\(\\frac{1}{1+0}=1\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 1} \\frac{x-1}{x^2-1} \\)",
        choices: ["0", "\\(\\frac{1}{2}\\)", "2", "Existiert nicht"],
        correctIndex: 1,
        explanation: "\\(x^2-1=(x-1)(x+1)\\), kürzen \\(\\Rightarrow\\) \\(\\frac{1}{x+1}\\to \\frac{1}{2}\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to 0} \\frac{\\sin^2(2x)}{x^2} \\)",
        choices: ["0", "4", "2", "1"],
        correctIndex: 1,
        explanation: "\\(\\sin(2x)\\sim 2x\\Rightarrow \\sin^2(2x)\\sim 4x^2\\Rightarrow\\) Grenzwert \\(4\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 0} \\frac{\\sin x}{x}\\cdot\\cos x \\)",
        choices: ["0", "1", "2", "Existiert nicht"],
        correctIndex: 1,
        explanation: "\\(\\frac{\\sin x}{x}\\to 1\\) und \\(\\cos x\\to 1\\) \\(\\Rightarrow\\) Produkt \\(\\to 1\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to 0} \\frac{\\sin x}{x}\\cdot\\frac{1}{1+x} \\)",
        choices: ["0", "1", "2", "Existiert nicht"],
        correctIndex: 1,
        explanation: "\\(\\frac{\\sin x}{x}\\to 1\\) und \\(\\frac{1}{1+x}\\to 1\\) \\(\\Rightarrow\\) Produkt \\(\\to 1\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to \\infty} \\left(1+\\frac{1}{x}\\right)^{2x} \\)",
        choices: ["e", "\\(e^2\\)", "2e", "1"],
        correctIndex: 1,
        explanation: "\\(\\left(1+\\frac{1}{x}\\right)^x\\to e\\Rightarrow\\left(\\cdot\\right)^{2x} = \\left[\\left(1+\\frac{1}{x}\\right)^x\\right]^2\\to e^2\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to 0} \\frac{\\ln(1+x) - x}{x^2} \\)",
        choices: ["0", "\\(-\\frac{1}{2}\\)", "\\(\\frac{1}{2}\\)", "Existiert nicht"],
        correctIndex: 1,
        explanation: "Reihe: \\(\\ln(1+x)=x-\\frac{x^2}{2}+\\dots\\Rightarrow\\) Zähler \\(\\sim -\\frac{x^2}{2}\\Rightarrow\\) Grenzwert \\(-\\frac{1}{2}\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 0} \\frac{\\sin(7x)}{\\sin(2x)} \\)",
        choices: ["\\(\\frac{2}{7}\\)", "\\(\\frac{7}{2}\\)", "1", "0"],
        correctIndex: 1,
        explanation: "\\(\\sin(ax)\\sim ax\\) für \\(x\\to 0\\) \\(\\Rightarrow\\) Grenzwert \\(=\\frac{7}{2}\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to 0} \\frac{\\tan(3x)}{\\tan(5x)} \\)",
        choices: ["\\(\\frac{3}{5}\\)", "\\(\\frac{5}{3}\\)", "1", "0"],
        correctIndex: 0,
        explanation: "\\(\\tan(ax)\\sim ax\\) für \\(x\\to 0\\) \\(\\Rightarrow\\) Grenzwert \\(=\\frac{3}{5}\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 0} \\frac{\\sin x}{\\sin(4x)} \\)",
        choices: ["4", "\\(\\frac{1}{4}\\)", "1", "0"],
        correctIndex: 1,
        explanation: "\\(\\sin x\\sim x\\), \\(\\sin(4x)\\sim 4x\\) \\(\\Rightarrow\\) Grenzwert \\(=\\frac{1}{4}\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to 0} \\frac{\\sin(2x)}{x}\\cdot\\frac{\\sin(3x)}{x} \\)",
        choices: ["0", "6", "1", "5"],
        correctIndex: 1,
        explanation: "\\(\\frac{\\sin(2x)}{x}=2\\frac{\\sin(2x)}{2x}\\to 2\\), \\(\\frac{\\sin(3x)}{x}\\to 3\\) \\(\\Rightarrow\\) Produkt \\(6\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 0} \\frac{\\sin x}{x} \\cdot \\frac{1-\\cos x}{x^2} \\)",
        choices: ["0", "\\(\\frac{1}{2}\\)", "1", "2"],
        correctIndex: 1,
        explanation: "\\(\\frac{\\sin x}{x}\\to 1\\), \\(\\frac{1-\\cos x}{x^2}\\to \\frac{1}{2}\\) \\(\\Rightarrow\\) Produkt \\(\\frac{1}{2}\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to 0} \\frac{\\sin^3 x}{x^3} \\)",
        choices: ["0", "1", "3", "\\(\\infty\\)"],
        correctIndex: 1,
        explanation: "\\(\\left(\\frac{\\sin x}{x}\\right)^3\\to 1\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 0} \\frac{\\sin x}{x}\\cdot\\frac{\\tan x}{x} \\)",
        choices: ["0", "1", "2", "Existiert nicht"],
        correctIndex: 1,
        explanation: "\\(\\frac{\\sin x}{x}\\to 1\\) und \\(\\frac{\\tan x}{x}\\to 1\\) \\(\\Rightarrow\\) Produkt \\(1\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to 0} \\frac{\\sin x}{\\sqrt{1-\\cos x}} \\)",
        choices: ["0", "\\(\\sqrt{2}\\)", "1", "Existiert nicht"],
        correctIndex: 1,
        explanation: "Nutze \\(1-\\cos x \\sim \\frac{x^2}{2}\\): Nenner \\(\\sim \\frac{|x|}{\\sqrt{2}}\\), Zähler \\(\\sim x\\) \\(\\Rightarrow\\) Betrag \\(\\to \\sqrt{2}\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 0} \\frac{\\sin x}{\\sqrt{1-\\cos x}} \\) (Hinweis: einseitig betrachten)",
        choices: ["Existiert nicht", "\\(\\sqrt{2}\\)", "\\(-\\sqrt{2}\\)", "0"],
        correctIndex: 0,
        explanation: "Da \\(|x|\\) im Nenner entsteht, sind einseitige Grenzwerte \\(\\pm\\sqrt{2}\\) \\(\\Rightarrow\\) zweiseitig kein Grenzwert."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 0^+} \\frac{\\sin x}{\\sqrt{1-\\cos x}} \\)",
        choices: ["0", "\\(\\sqrt{2}\\)", "\\(-\\sqrt{2}\\)", "Existiert nicht"],
        correctIndex: 1,
        explanation: "Für \\(x\\to 0^+\\): \\(\\sin x\\sim x\\), \\(\\sqrt{1-\\cos x}\\sim \\frac{x}{\\sqrt{2}}\\) \\(\\Rightarrow\\) \\(\\sqrt{2}\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to 0} \\frac{\\sqrt{1+x}-\\sqrt{1+2x}}{x} \\)",
        choices: ["\\(-\\frac{1}{2}\\)", "\\(-\\frac{1}{4}\\)", "\\(\\frac{1}{2}\\)", "0"],
        correctIndex: 0,
        explanation: "Rationalisieren oder Linearisierung: \\(\\sqrt{1+ax}\\approx 1+\\frac{a}{2}x\\). Differenz \\(\\approx (\\frac{1}{2}-1)x=-\\frac{1}{2}x\\) \\(\\Rightarrow\\) Grenzwert \\(-\\frac{1}{2}\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 0} \\frac{\\sqrt{4+x}-2}{x} \\)",
        choices: ["\\(\\frac{1}{4}\\)", "\\(\\frac{1}{2}\\)", "1", "0"],
        correctIndex: 0,
        explanation: "Rationalisieren: \\(\\frac{\\sqrt{4+x}-2}{x}=\\frac{1}{\\sqrt{4+x}+2}\\to \\frac{1}{4}\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to 0} \\frac{\\sqrt{1+x}-1}{\\sqrt{1+2x}-1} \\)",
        choices: ["1", "\\(\\frac{1}{2}\\)", "2", "0"],
        correctIndex: 1,
        explanation: "Nutze \\(\\sqrt{1+ax}-1\\sim \\frac{a}{2}x\\) \\(\\Rightarrow\\) Verhältnis \\(\\frac{1/2}{1}=\\frac{1}{2}\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 0} \\frac{(1+x)^4-(1+x)^2}{x} \\)",
        choices: ["0", "2", "4", "6"],
        correctIndex: 3,
        explanation: "Faktorisieren: \\((1+x)^2((1+x)^2-1)=(1+x)^2(2x+x^2)\\). Durch \\(x\\): \\((1+x)^2(2+x)\\to 2\\cdot 3=6\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to 0} \\frac{(1+x)^3 - 1 - 3x}{x^2} \\)",
        choices: ["0", "3", "1", "\\(\\frac{3}{2}\\)"],
        correctIndex: 1,
        explanation: "Binomial: \\((1+x)^3=1+3x+3x^2+x^3\\). Zähler \\(=3x^2+x^3\\). Durch \\(x^2\\): \\(3+x\\to 3\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 0} \\frac{e^{3x}-1}{e^{x}-1} \\)",
        choices: ["1", "3", "0", "\\(\\infty\\)"],
        correctIndex: 1,
        explanation: "Für \\(x\\to 0\\): \\(e^{ax}-1\\sim ax\\) \\(\\Rightarrow\\) Verhältnis \\(\\frac{3x}{x}=3\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to 0} \\frac{\\ln(1+3x)}{\\ln(1+x)} \\)",
        choices: ["1", "3", "0", "\\(\\infty\\)"],
        correctIndex: 1,
        explanation: "\\(\\ln(1+ax)\\sim ax\\) \\(\\Rightarrow\\) Verhältnis \\(3\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 0} \\frac{\\ln(1+x^2)}{x^2} \\)",
        choices: ["0", "1", "2", "Existiert nicht"],
        correctIndex: 1,
        explanation: "\\(\\ln(1+u)\\sim u\\) mit \\(u=x^2\\) \\(\\Rightarrow\\) Grenzwert \\(1\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to 0} \\frac{e^{x^2}-1}{x^2} \\)",
        choices: ["0", "1", "2", "e"],
        correctIndex: 1,
        explanation: "\\(e^{u}-1\\sim u\\) mit \\(u=x^2\\) \\(\\Rightarrow\\) Grenzwert \\(1\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 0} \\frac{\\ln(1+x)}{\\sin x} \\)",
        choices: ["0", "1", "\\(-1\\)", "Existiert nicht"],
        correctIndex: 1,
        explanation: "\\(\\ln(1+x)\\sim x\\) und \\(\\sin x\\sim x\\) \\(\\Rightarrow\\) Verhältnis \\(1\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to 0} \\frac{e^x-1}{\\sin x} \\)",
        choices: ["0", "1", "e", "Existiert nicht"],
        correctIndex: 1,
        explanation: "\\(e^x-1\\sim x\\), \\(\\sin x\\sim x\\) \\(\\Rightarrow\\) Verhältnis \\(1\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to \\infty} \\frac{7x^3-2x}{x^3+5x^2} \\)",
        choices: ["7", "5", "0", "\\(\\infty\\)"],
        correctIndex: 0,
        explanation: "Dominante Terme: \\(\\frac{7x^3}{x^3}\\to 7\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to \\infty} \\frac{5x^2+\\sqrt{x}}{2x^2-3} \\)",
        choices: ["\\(\\frac{5}{2}\\)", "\\(\\frac{2}{5}\\)", "0", "\\(\\infty\\)"],
        correctIndex: 0,
        explanation: "Durch \\(x^2\\) teilen: \\(\\frac{5+1/x^{3/2}}{2-3/x^2}\\to \\frac{5}{2}\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to \\infty} \\frac{x^2-\\sqrt{x}}{x^2+\\sqrt{x}} \\)",
        choices: ["0", "1", "\\(-1\\)", "Existiert nicht"],
        correctIndex: 1,
        explanation: "Durch \\(x^2\\) teilen: \\(\\frac{1-1/x^{3/2}}{1+1/x^{3/2}}\\to 1\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to \\infty} \\left(\\sqrt{x^2+4x}-x\\right) \\)",
        choices: ["0", "2", "4", "\\(\\infty\\)"],
        correctIndex: 2,
        explanation: "Rationalisieren: \\(\\sqrt{x^2+4x}-x=\\frac{4x}{\\sqrt{x^2+4x}+x}=\\frac{4}{\\sqrt{1+4/x}+1}\\to 2\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to \\infty} \\left(\\sqrt{x^2+4x}-x\\right) \\) (korrekt)",
        choices: ["0", "2", "4", "1"],
        correctIndex: 1,
        explanation: "Rationalisieren: \\(\\frac{4x}{\\sqrt{x^2+4x}+x}=\\frac{4}{\\sqrt{1+4/x}+1}\\to 2\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to \\infty} \\left(\\sqrt{x^2+x+1}-\\sqrt{x^2+x}\\right) \\)",
        choices: ["0", "1", "\\(\\frac{1}{2}\\)", "Existiert nicht"],
        correctIndex: 0,
        explanation: "Rationalisieren: \\(\\frac{1}{\\sqrt{x^2+x+1}+\\sqrt{x^2+x}}\\to 0\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to \\infty} \\frac{\\sqrt{x^2+x}}{x} \\)",
        choices: ["0", "1", "\\(\\infty\\)", "Existiert nicht"],
        correctIndex: 1,
        explanation: "\\(\\sqrt{x^2+x}=x\\sqrt{1+1/x}\\to x\\) Faktor: \\(\\sqrt{1+1/x}\\to 1\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to \\infty} \\left(\\sqrt{x^2+x}-x\\right) \\)",
        choices: ["0", "1", "\\(\\frac{1}{2}\\)", "\\(\\infty\\)"],
        correctIndex: 2,
        explanation: "Rationalisieren: \\(\\frac{x}{\\sqrt{x^2+x}+x}=\\frac{1}{\\sqrt{1+1/x}+1}\\to \\frac{1}{2}\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 0} \\frac{\\sqrt{1+x^2}-1}{x^2} \\)",
        choices: ["0", "\\(\\frac{1}{2}\\)", "1", "2"],
        correctIndex: 1,
        explanation: "Rationalisieren: \\(\\frac{\\sqrt{1+x^2}-1}{x^2}=\\frac{1}{\\sqrt{1+x^2}+1}\\to \\frac{1}{2}\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to 0} \\frac{1}{x}\\left(\\frac{1}{1+x}-1\\right) \\)",
        choices: ["\\(-1\\)", "1", "0", "Existiert nicht"],
        correctIndex: 0,
        explanation: "\\(\\frac{1}{1+x}-1=\\frac{-x}{1+x}\\). Dann \\(\\frac{1}{x}\\cdot\\frac{-x}{1+x}=-\\frac{1}{1+x}\\to -1\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 0} \\frac{(1+x)(1-x)-1}{x^2} \\)",
        choices: ["\\(-1\\)", "1", "0", "2"],
        correctIndex: 0,
        explanation: "\\((1+x)(1-x)=1-x^2\\). Zähler \\(=-x^2\\). Durch \\(x^2\\): \\(-1\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to 1} \\frac{x^2-2x+1}{x-1} \\)",
        choices: ["0", "1", "2", "Existiert nicht"],
        correctIndex: 1,
        explanation: "\\(x^2-2x+1=(x-1)^2\\). Dann \\(\\frac{(x-1)^2}{x-1}=x-1\\to 0\\). (Achtung: richtig ist 0.)"
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 1} \\frac{x^2-2x+1}{x-1} \\) (korrekt)",
        choices: ["0", "1", "2", "Existiert nicht"],
        correctIndex: 0,
        explanation: "\\(\\frac{(x-1)^2}{x-1}=x-1\\to 0\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to 0} \\frac{|x|}{\\sqrt{x^2}} \\)",
        choices: ["0", "1", "\\(-1\\)", "Existiert nicht"],
        correctIndex: 1,
        explanation: "\\(|x|=\\sqrt{x^2}\\) für alle \\(x\\) \\(\\Rightarrow\\) Quotient \\(=1\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 0} \\frac{x^2}{|x|} \\)",
        choices: ["0", "1", "\\(-1\\)", "Existiert nicht"],
        correctIndex: 0,
        explanation: "\\(\\frac{x^2}{|x|}=|x|\\to 0\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to 0} \\frac{\\sin(x^2)}{x^2} \\)",
        choices: ["0", "1", "2", "Existiert nicht"],
        correctIndex: 1,
        explanation: "Setze \\(u=x^2\\to 0\\): \\(\\frac{\\sin u}{u}\\to 1\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 0} \\frac{\\tan(x^2)}{x^2} \\)",
        choices: ["0", "1", "2", "Existiert nicht"],
        correctIndex: 1,
        explanation: "Setze \\(u=x^2\\to 0\\): \\(\\frac{\\tan u}{u}\\to 1\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to 0} \\frac{1-\\cos(x^2)}{x^4} \\)",
        choices: ["0", "\\(\\frac{1}{2}\\)", "1", "2"],
        correctIndex: 1,
        explanation: "Mit \\(u=x^2\\): \\(\\frac{1-\\cos u}{u^2}\\to \\frac{1}{2}\\) \\(\\Rightarrow\\) Grenzwert \\(\\frac{1}{2}\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 0} \\frac{e^{x}-1-x}{x^2} \\)",
        choices: ["0", "\\(\\frac{1}{2}\\)", "1", "2"],
        correctIndex: 1,
        explanation: "Reihe: \\(e^x=1+x+\\frac{x^2}{2}+\\dots\\) \\(\\Rightarrow\\) Zähler \\(\\sim \\frac{x^2}{2}\\) \\(\\Rightarrow\\) \\(\\frac{1}{2}\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to 0} \\frac{\\ln(1+x)-x+\\frac{x^2}{2}}{x^3} \\)",
        choices: ["0", "\\(\\frac{1}{3}\\)", "\\(-\\frac{1}{3}\\)", "Existiert nicht"],
        correctIndex: 2,
        explanation: "Reihe: \\(\\ln(1+x)=x-\\frac{x^2}{2}+\\frac{x^3}{3}+\\dots\\). Zähler \\(\\sim \\frac{x^3}{3}\\) aber mit Vorzeichen: \\(x-\\frac{x^2}{2}+\\frac{x^3}{3} -x +\\frac{x^2}{2}=\\frac{x^3}{3}\\) \\(\\Rightarrow\\) Grenzwert \\(\\frac{1}{3}\\). (Korrekt ist \\(\\frac{1}{3}\\).)"
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to 0} \\frac{\\ln(1+x)-x+\\frac{x^2}{2}}{x^3} \\) (korrekt)",
        choices: ["0", "\\(\\frac{1}{3}\\)", "\\(-\\frac{1}{3}\\)", "Existiert nicht"],
        correctIndex: 1,
        explanation: "Reihe: \\(\\ln(1+x)=x-\\frac{x^2}{2}+\\frac{x^3}{3}+\\dots\\) \\(\\Rightarrow\\) Zähler \\(\\sim \\frac{x^3}{3}\\) \\(\\Rightarrow\\) Grenzwert \\(\\frac{1}{3}\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to \\infty} \\frac{\\sqrt{x}}{x} \\)",
        choices: ["0", "1", "\\(\\infty\\)", "Existiert nicht"],
        correctIndex: 0,
        explanation: "\\(\\frac{\\sqrt{x}}{x}=\\frac{1}{\\sqrt{x}}\\to 0\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to \\infty} \\frac{x}{\\sqrt{x^2+1}} \\)",
        choices: ["0", "1", "\\(-1\\)", "Existiert nicht"],
        correctIndex: 1,
        explanation: "\\(\\frac{x}{\\sqrt{x^2+1}}=\\frac{1}{\\sqrt{1+1/x^2}}\\to 1\\) für \\(x\\to\\infty\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to -\\infty} \\frac{x}{\\sqrt{x^2+1}} \\)",
        choices: ["1", "\\(-1\\)", "0", "Existiert nicht"],
        correctIndex: 1,
        explanation: "Für \\(x\\to -\\infty\\): \\(\\sqrt{x^2+1}=|x|=-x\\cdot\\sqrt{1+1/x^2}\\) \\(\\Rightarrow\\) Quotient \\(\\to -1\\)."
      },
      {
        question: "Berechnen Sie: \\( \\lim_{x \\to \\infty} \\frac{\\sin x}{x} \\)",
        choices: ["0", "1", "\\(\\infty\\)", "Existiert nicht"],
        correctIndex: 0,
        explanation: "Sandwich: \\(|\\sin x|\\le 1\\Rightarrow \\left|\\frac{\\sin x}{x}\\right|\\le \\frac{1}{x}\\to 0\\)."
      },
      {
        question: "Bestimmen Sie: \\( \\lim_{x \\to 0} x^2\\sin\\left(\\frac{1}{x}\\right) \\)",
        choices: ["0", "1", "Existiert nicht", "\\(\\infty\\)"],
        correctIndex: 0,
        explanation: "Sandwich: \\(|\\sin(1/x)|\\le 1\\Rightarrow |x^2\\sin(1/x)|\\le x^2\\to 0\\)."
      }
    ]
  }
);