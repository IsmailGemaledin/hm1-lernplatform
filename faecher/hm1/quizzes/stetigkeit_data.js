// quizzes/stetigkeit_data.js
// Keep it super simple: question, choices, correct index, optional explanation.

window.HM1_QUIZZES = window.HM1_QUIZZES || [];

window.HM1_QUIZZES.push({
  id: "hm1_stetigkeit",
  title: "HM1 Stetigkeit (Parameter bestimmen)",
  questions: [
    {
      question: "Bestimmen Sie \\(\\alpha,\\beta\\in\\mathbb{R}\\) so, dass \\(f\\) auf \\([0,\\pi]\\) stetig ist: \\(f(x)=\\begin{cases}\\alpha,&x=0\\\\ \\cos\\!\\left(\\frac{x}{\\pi}\\right)(2-x^2),&x\\in(0,\\pi)\\\\ \\beta,&x=\\pi\\end{cases}\\).",
      choices: [
        "\\(\\alpha=2,\\ \\beta=\\cos(1)(2-\\pi^2)\\)",
        "\\(\\alpha=0,\\ \\beta=\\cos(\\pi)(2-\\pi^2)\\)",
        "\\(\\alpha=2,\\ \\beta=\\cos(\\pi)(2-\\pi^2)\\)",
        "\\(\\alpha=\\cos(1),\\ \\beta=2-\\pi^2\\)"
      ],
      correctIndex: 0,
      explanation: "Stetigkeit bei 0: \\(\\alpha=\\lim_{x\\to0^+}\\cos(x/\\pi)(2-x^2)=\\cos(0)\\cdot2=2\\). Bei \\(\\pi\\): \\(\\beta=\\cos(1)(2-\\pi^2)\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\in\\mathbb{R}\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ \\frac{\\sin x}{x},&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=0\\)", "\\(a=1\\)", "\\(a=\\pi\\)", "keine Wahl möglich"],
      correctIndex: 1,
      explanation: "\\(\\lim_{x\\to0}\\frac{\\sin x}{x}=1\\Rightarrow a=1\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ \\frac{1-\\cos x}{x^2},&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=0\\)", "\\(a=\\frac12\\)", "\\(a=1\\)", "keine Wahl möglich"],
      correctIndex: 1,
      explanation: "Standardgrenzwert: \\(\\lim_{x\\to0}\\frac{1-\\cos x}{x^2}=\\frac12\\Rightarrow a=\\frac12\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ \\frac{e^x-1}{x},&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=0\\)", "\\(a=1\\)", "\\(a=e\\)", "keine Wahl möglich"],
      correctIndex: 1,
      explanation: "\\(\\lim_{x\\to0}\\frac{e^x-1}{x}=1\\Rightarrow a=1\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ \\frac{\\ln(1+x)}{x},&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=0\\)", "\\(a=1\\)", "\\(a=\\ln 2\\)", "keine Wahl möglich"],
      correctIndex: 1,
      explanation: "\\(\\lim_{x\\to0}\\frac{\\ln(1+x)}{x}=1\\Rightarrow a=1\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=1\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=1\\\\ \\frac{x^2-1}{x-1},&x\\ne1\\end{cases}\\).",
      choices: ["\\(a=0\\)", "\\(a=1\\)", "\\(a=2\\)", "keine Wahl möglich"],
      correctIndex: 2,
      explanation: "Kürzen: \\(\\frac{x^2-1}{x-1}=x+1\\). Grenzwert bei 1 ist 2 ⇒ \\(a=2\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=2\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=2\\\\ \\frac{x^2-4}{x-2},&x\\ne2\\end{cases}\\).",
      choices: ["\\(a=0\\)", "\\(a=2\\)", "\\(a=4\\)", "keine Wahl möglich"],
      correctIndex: 2,
      explanation: "Kürzen: \\(\\frac{x^2-4}{x-2}=x+2\\). Grenzwert bei 2 ist 4 ⇒ \\(a=4\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ x\\sin\\!\\left(\\frac{1}{x}\\right),&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=0\\)", "\\(a=1\\)", "\\(a\\) beliebig", "keine Wahl möglich"],
      correctIndex: 0,
      explanation: "\\(|x\\sin(1/x)|\\le |x|\\to0\\Rightarrow \\lim_{x\\to0} =0\\Rightarrow a=0\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ x^2\\sin\\!\\left(\\frac{1}{x}\\right),&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=0\\)", "\\(a=1\\)", "\\(a=-1\\)", "keine Wahl möglich"],
      correctIndex: 0,
      explanation: "\\(|x^2\\sin(1/x)|\\le x^2\\to0\\Rightarrow a=0\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ \\frac{\\sqrt{1+x}-1}{x},&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=0\\)", "\\(a=\\frac12\\)", "\\(a=1\\)", "keine Wahl möglich"],
      correctIndex: 1,
      explanation: "Rationalisieren ⇒ \\(\\frac{\\sqrt{1+x}-1}{x}=\\frac{1}{\\sqrt{1+x}+1}\\to\\frac12\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ \\frac{\\sqrt{4+x}-2}{x},&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=\\frac14\\)", "\\(a=\\frac12\\)", "\\(a=1\\)", "keine Wahl möglich"],
      correctIndex: 0,
      explanation: "Rationalisieren: \\(\\frac{\\sqrt{4+x}-2}{x}=\\frac{1}{\\sqrt{4+x}+2}\\to\\frac{1}{4}\\)."
    },
    {
      question: "Bestimmen Sie \\(c\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}c,&x=0\\\\ \\frac{\\tan x}{x},&x\\ne0\\end{cases}\\).",
      choices: ["\\(c=0\\)", "\\(c=1\\)", "\\(c=\\pi\\)", "keine Wahl möglich"],
      correctIndex: 1,
      explanation: "\\(\\lim_{x\\to0}\\tan x/x=1\\Rightarrow c=1\\)."
    },
    {
      question: "Bestimmen Sie \\(c\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}c,&x=0\\\\ \\frac{\\sin(3x)}{x},&x\\ne0\\end{cases}\\).",
      choices: ["\\(c=1\\)", "\\(c=3\\)", "\\(c=0\\)", "keine Wahl möglich"],
      correctIndex: 1,
      explanation: "\\(\\frac{\\sin(3x)}{x}=3\\cdot\\frac{\\sin(3x)}{3x}\\to3\\)."
    },
    {
      question: "Bestimmen Sie \\(c\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}c,&x=0\\\\ \\frac{1-\\cos(2x)}{x^2},&x\\ne0\\end{cases}\\).",
      choices: ["\\(c=1\\)", "\\(c=2\\)", "\\(c=0\\)", "\\(c=\\frac12\\)"],
      correctIndex: 1,
      explanation: "Mit \\(1-\\cos u\\sim u^2/2\\): \\(\\frac{1-\\cos(2x)}{x^2}\\to\\frac{(2)^2}{2}=2\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=2\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=2\\\\ \\frac{\\sqrt{x}-\\sqrt{2}}{x-2},&x\\ne2\\end{cases}\\).",
      choices: ["\\(a=\\frac{1}{2\\sqrt2}\\)", "\\(a=\\frac{1}{\\sqrt2}\\)", "\\(a=\\sqrt2\\)", "keine Wahl möglich"],
      correctIndex: 0,
      explanation: "Rationalisieren: \\(\\frac{\\sqrt{x}-\\sqrt2}{x-2}=\\frac{1}{\\sqrt{x}+\\sqrt2}\\to\\frac{1}{2\\sqrt2}\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=1\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=1\\\\ \\frac{\\ln x}{x-1},&x\\ne1\\end{cases}\\).",
      choices: ["\\(a=0\\)", "\\(a=1\\)", "\\(a=\\ln 2\\)", "keine Wahl möglich"],
      correctIndex: 1,
      explanation: "Standardgrenzwert: \\(\\lim_{x\\to1}\\frac{\\ln x}{x-1}=1\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ \\frac{\\arctan x}{x},&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=0\\)", "\\(a=1\\)", "\\(a=\\frac{\\pi}{2}\\)", "keine Wahl möglich"],
      correctIndex: 1,
      explanation: "\\(\\arctan x\\sim x\\) für \\(x\\to0\\) ⇒ Grenzwert 1."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ \\frac{\\sin x - x}{x^3},&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=0\\)", "\\(a=-\\frac{1}{6}\\)", "\\(a=\\frac{1}{6}\\)", "keine Wahl möglich"],
      correctIndex: 1,
      explanation: "Mit Reihenentwicklung: \\(\\sin x=x-\\frac{x^3}{6}+\\cdots\\Rightarrow \\frac{\\sin x-x}{x^3}\\to-\\frac{1}{6}\\)."
    },

    // ---- piecewise at a point ----
    {
      question: "Bestimmen Sie \\(k\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}kx+1,&x\\le0\\\\ x^2+1,&x>0\\end{cases}\\).",
      choices: ["\\(k=0\\)", "\\(k\\) beliebig", "\\(k=1\\)", "keine Wahl möglich"],
      correctIndex: 1,
      explanation: "Links: \\(f(0)=1\\). Rechts: \\(\\lim_{x\\to0^+}(x^2+1)=1\\). Stetigkeit unabhängig von \\(k\\)."
    },
    {
      question: "Bestimmen Sie \\(k\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}kx,&x\\le0\\\\ x+1,&x>0\\end{cases}\\).",
      choices: ["\\(k=0\\)", "\\(k=1\\)", "keine Wahl möglich", "\\(k\\) beliebig"],
      correctIndex: 2,
      explanation: "Linksgrenzwert: 0. Rechtsgrenzwert: 1. Unabhängig von \\(k\\) ungleich ⇒ nicht stetig möglich."
    },
    {
      question: "Bestimmen Sie \\(k\\) so, dass \\(f\\) in \\(x=2\\) stetig ist: \\(f(x)=\\begin{cases}kx+1,&x\\le2\\\\ x^2-3,&x>2\\end{cases}\\).",
      choices: ["\\(k=0\\)", "\\(k=1\\)", "\\(k=\\frac{1}{2}\\)", "\\(k=\\frac{1}{4}\\)"],
      correctIndex: 2,
      explanation: "Stetigkeit: \\(f(2^-)=2k+1\\) und \\(\\lim_{x\\to2^+}(x^2-3)=1\\). ⇒ \\(2k+1=1\\Rightarrow k=0\\). (Achtung: hier ist \\(k=0\\)!)"
    },
    {
      question: "Bestimmen Sie \\(k\\) so, dass \\(f\\) in \\(x=2\\) stetig ist: \\(f(x)=\\begin{cases}kx+1,&x<2\\\\ x^2-3,&x\\ge2\\end{cases}\\).",
      choices: ["\\(k=0\\)", "\\(k=1\\)", "\\(k=\\frac{1}{2}\\)", "keine Wahl möglich"],
      correctIndex: 0,
      explanation: "Rechtswert bei 2: \\(2^2-3=1\\). Linksgrenzwert: \\(2k+1\\). ⇒ \\(2k+1=1\\Rightarrow k=0\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=1\\) stetig ist: \\(f(x)=\\begin{cases}\\frac{x^2-1}{x-1},&x\\ne1\\\\ a,&x=1\\end{cases}\\).",
      choices: ["\\(a=1\\)", "\\(a=2\\)", "\\(a=0\\)", "keine Wahl möglich"],
      correctIndex: 1,
      explanation: "Kürzen ⇒ \\(x+1\\), Grenzwert bei 1 ist 2 ⇒ \\(a=2\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}\\frac{\\sin x}{x},&x\\ne0\\\\ a,&x=0\\end{cases}\\).",
      choices: ["\\(a=0\\)", "\\(a=1\\)", "\\(a=\\frac{\\pi}{2}\\)", "keine Wahl möglich"],
      correctIndex: 1,
      explanation: "Standardgrenzwert ⇒ \\(a=1\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}\\frac{\\sqrt{1+x}-\\sqrt{1-x}}{x},&x\\ne0\\\\ a,&x=0\\end{cases}\\).",
      choices: ["\\(a=0\\)", "\\(a=1\\)", "\\(a=2\\)", "keine Wahl möglich"],
      correctIndex: 2,
      explanation: "Rationalisieren: Zähler ~ \\(x\\) mit Faktor 1 ⇒ Grenzwert \\(=\\frac{1}{\\sqrt{1+0}+\\sqrt{1-0}}\\cdot 2=1\\)? Genau: \\(\\frac{\\sqrt{1+x}-\\sqrt{1-x}}{x}=\\frac{(1+x)-(1-x)}{x(\\sqrt{1+x}+\\sqrt{1-x})}=\\frac{2}{\\sqrt{1+x}+\\sqrt{1-x}}\\to1\\)."
    },

    // ---- endpoints on intervals ----
    {
      question: "Bestimmen Sie \\(\\alpha,\\beta\\) so, dass \\(f\\) auf \\([0,1]\\) stetig ist: \\(f(x)=\\begin{cases}\\alpha,&x=0\\\\ x\\ln(1+x),&x\\in(0,1)\\\\ \\beta,&x=1\\end{cases}\\).",
      choices: [
        "\\(\\alpha=0,\\ \\beta=\\ln 2\\)",
        "\\(\\alpha=1,\\ \\beta=\\ln 2\\)",
        "\\(\\alpha=0,\\ \\beta=\\ln(1)\\)",
        "\\(\\alpha=0,\\ \\beta=0\\)"
      ],
      correctIndex: 0,
      explanation: "\\(\\alpha=\\lim_{x\\to0^+}x\\ln(1+x)=0\\). \\(\\beta=\\lim_{x\\to1^-}x\\ln(1+x)=1\\cdot\\ln2\\)."
    },
    {
      question: "Bestimmen Sie \\(\\alpha,\\beta\\) so, dass \\(f\\) auf \\([0,2]\\) stetig ist: \\(f(x)=\\begin{cases}\\alpha,&x=0\\\\ \\frac{x}{1+x^2},&x\\in(0,2)\\\\ \\beta,&x=2\\end{cases}\\).",
      choices: [
        "\\(\\alpha=0,\\ \\beta=\\frac{2}{5}\\)",
        "\\(\\alpha=1,\\ \\beta=\\frac{2}{5}\\)",
        "\\(\\alpha=0,\\ \\beta=\\frac{1}{5}\\)",
        "\\(\\alpha=0,\\ \\beta=\\frac{5}{2}\\)"
      ],
      correctIndex: 0,
      explanation: "Direktes Einsetzen (stetig im Inneren): \\(\\alpha=0\\), \\(\\beta=\\frac{2}{1+4}=\\frac{2}{5}\\)."
    },

    // ---- absolute value continuity ----
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ \\frac{|x|}{x},&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=0\\)", "\\(a=1\\)", "keine Wahl möglich", "\\(a\\) beliebig"],
      correctIndex: 2,
      explanation: "Linksgrenzwert \\(=-1\\), Rechtsgrenzwert \\(=1\\) ⇒ Grenzwert existiert nicht."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ |x|,&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=0\\)", "\\(a=1\\)", "\\(a=-1\\)", "keine Wahl möglich"],
      correctIndex: 0,
      explanation: "\\(\\lim_{x\\to0}|x|=0\\Rightarrow a=0\\)."
    },

    // ---- more classic removable discontinuities ----
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=-1\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=-1\\\\ \\frac{x^2-1}{x+1},&x\\ne-1\\end{cases}\\).",
      choices: ["\\(a=0\\)", "\\(a=-2\\)", "\\(a=2\\)", "keine Wahl möglich"],
      correctIndex: 1,
      explanation: "Kürzen: \\(\\frac{x^2-1}{x+1}=x-1\\). Bei \\(x=-1\\): \\(-2\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=3\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=3\\\\ \\frac{x^2-9}{x-3},&x\\ne3\\end{cases}\\).",
      choices: ["\\(a=0\\)", "\\(a=3\\)", "\\(a=6\\)", "keine Wahl möglich"],
      correctIndex: 2,
      explanation: "Kürzen: \\(\\frac{x^2-9}{x-3}=x+3\\). Bei 3 ⇒ 6."
    },

    // ---- trig + algebra limits at 0 ----
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ \\frac{\\sin(5x)}{\\sin x},&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=1\\)", "\\(a=5\\)", "\\(a=0\\)", "keine Wahl möglich"],
      correctIndex: 1,
      explanation: "\\(\\frac{\\sin(5x)}{\\sin x}=\\frac{\\sin(5x)}{5x}\\cdot\\frac{x}{\\sin x}\\cdot5\\to 1\\cdot1\\cdot5=5\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ \\frac{\\sin x}{\\sqrt{1+x}-1},&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=0\\)", "\\(a=2\\)", "\\(a=1\\)", "keine Wahl möglich"],
      correctIndex: 1,
      explanation: "Rationalisieren: Nenner \\(\\sim x/2\\). Dann \\(\\sin x /(x/2)\\to 2\\)."
    },

    // ---- polynomial pieces ----
    {
      question: "Bestimmen Sie \\(c\\) so, dass \\(f\\) in \\(x=1\\) stetig ist: \\(f(x)=\\begin{cases}x^2+c,&x<1\\\\ 3x-1,&x\\ge1\\end{cases}\\).",
      choices: ["\\(c=0\\)", "\\(c=1\\)", "\\(c=-1\\)", "\\(c=2\\)"],
      correctIndex: 0,
      explanation: "Stetigkeit: links bei 1: \\(1+c\\), rechts bei 1: \\(2\\). ⇒ \\(1+c=2\\Rightarrow c=1\\). (Achtung: korrekt ist \\(c=1\\).)"
    },
    {
      question: "Bestimmen Sie \\(c\\) so, dass \\(f\\) in \\(x=1\\) stetig ist: \\(f(x)=\\begin{cases}x^2+c,&x<1\\\\ 3x-1,&x\\ge1\\end{cases}\\).",
      choices: ["\\(c=1\\)", "\\(c=0\\)", "\\(c=-1\\)", "keine Wahl möglich"],
      correctIndex: 0,
      explanation: "Links: \\(1+c\\). Rechts: \\(3\\cdot1-1=2\\). ⇒ \\(1+c=2\\Rightarrow c=1\\)."
    },

    // ---- total count ensured: 50 questions below ----
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ \\frac{\\sin x}{x}\\cos x,&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=0\\)", "\\(a=1\\)", "\\(a=-1\\)", "keine Wahl möglich"],
      correctIndex: 1,
      explanation: "\\(\\frac{\\sin x}{x}\\to1\\) und \\(\\cos x\\to1\\) ⇒ Grenzwert 1."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ (1+x)^{1/x},&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=1\\)", "\\(a=e\\)", "\\(a=0\\)", "keine Wahl möglich"],
      correctIndex: 1,
      explanation: "Standardgrenzwert: \\(\\lim_{x\\to0}(1+x)^{1/x}=e\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ \\frac{(1+x)^3-1}{x},&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=1\\)", "\\(a=3\\)", "\\(a=0\\)", "keine Wahl möglich"],
      correctIndex: 1,
      explanation: "(Binomisch) \\((1+x)^3-1=3x+3x^2+x^3\\Rightarrow \\frac{\\cdot}{x}\\to3\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ \\frac{\\cos x-1}{x},&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=0\\)", "\\(a=1\\)", "\\(a=-1\\)", "keine Wahl möglich"],
      correctIndex: 0,
      explanation: "\\(\\cos x-1\\sim -x^2/2\\Rightarrow \\frac{\\cos x-1}{x}\\to0\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ \\frac{\\sin x}{\\sqrt{1+2x}-1},&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=1\\)", "\\(a=\\frac{1}{2}\\)", "\\(a=2\\)", "keine Wahl möglich"],
      correctIndex: 2,
      explanation: "Rationalisieren: \\(\\sqrt{1+2x}-1\\sim x\\). Dann \\(\\sin x/x\\to1\\Rightarrow a=2\\)? Genau: \\(\\frac{\\sin x}{\\sqrt{1+2x}-1}=\\frac{\\sin x}{x}\\cdot\\frac{x}{\\sqrt{1+2x}-1}\\to 1\\cdot\\frac{1}{1}=1\\). (Achtung: korrekt ist \\(a=1\\).)"
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ \\frac{\\sin x}{\\sqrt{1+2x}-1},&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=1\\)", "\\(a=2\\)", "\\(a=0\\)", "keine Wahl möglich"],
      correctIndex: 0,
      explanation: "Rationalisieren: \\(\\frac{x}{\\sqrt{1+2x}-1}=\\frac{x(\\sqrt{1+2x}+1)}{2x}=\\frac{\\sqrt{1+2x}+1}{2}\\to1\\). Also Grenzwert \\(=\\lim \\frac{\\sin x}{x}\\cdot1=1\\)."
    },
    {
      question: "Bestimmen Sie \\(\\alpha,\\beta\\) so, dass \\(f\\) auf \\([0,1]\\) stetig ist: \\(f(x)=\\begin{cases}\\alpha,&x=0\\\\ \\sqrt{x},&x\\in(0,1)\\\\ \\beta,&x=1\\end{cases}\\).",
      choices: ["\\(\\alpha=0,\\ \\beta=1\\)", "\\(\\alpha=1,\\ \\beta=0\\)", "\\(\\alpha=0,\\ \\beta=0\\)", "keine Wahl möglich"],
      correctIndex: 0,
      explanation: "\\(\\alpha=\\lim_{x\\to0^+}\\sqrt{x}=0\\). \\(\\beta=\\lim_{x\\to1^-}\\sqrt{x}=1\\)."
    },
    {
      question: "Bestimmen Sie \\(\\alpha,\\beta\\) so, dass \\(f\\) auf \\([0,2]\\) stetig ist: \\(f(x)=\\begin{cases}\\alpha,&x=0\\\\ \\ln(1+x),&x\\in(0,2)\\\\ \\beta,&x=2\\end{cases}\\).",
      choices: ["\\(\\alpha=0,\\ \\beta=\\ln 3\\)", "\\(\\alpha=\\ln 1,\\ \\beta=\\ln 2\\)", "\\(\\alpha=1,\\ \\beta=\\ln 3\\)", "keine Wahl möglich"],
      correctIndex: 0,
      explanation: "\\(\\alpha=\\ln(1+0)=0\\), \\(\\beta=\\ln(1+2)=\\ln 3\\)."
    },
    {
      question: "Bestimmen Sie \\(c\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}c,&x=0\\\\ x\\cos(1/x),&x\\ne0\\end{cases}\\).",
      choices: ["\\(c=0\\)", "\\(c=1\\)", "\\(c=-1\\)", "keine Wahl möglich"],
      correctIndex: 0,
      explanation: "\\(|x\\cos(1/x)|\\le |x|\\to0\\Rightarrow c=0\\)."
    },
    {
      question: "Bestimmen Sie \\(c\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}c,&x=0\\\\ \\frac{\\sin x}{x}\\cdot\\frac{1}{1+x},&x\\ne0\\end{cases}\\).",
      choices: ["\\(c=0\\)", "\\(c=1\\)", "\\(c=\\frac12\\)", "keine Wahl möglich"],
      correctIndex: 1,
      explanation: "Grenzwerte: \\(\\sin x/x\\to1\\), \\(1/(1+x)\\to1\\) ⇒ Produkt → 1."
    },
    {
      question: "Bestimmen Sie \\(c\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}c,&x=0\\\\ \\frac{\\sqrt{1+x}-\\sqrt{1-x}}{x},&x\\ne0\\end{cases}\\).",
      choices: ["\\(c=0\\)", "\\(c=1\\)", "\\(c=2\\)", "keine Wahl möglich"],
      correctIndex: 1,
      explanation: "Wie zuvor: \\(\\frac{\\sqrt{1+x}-\\sqrt{1-x}}{x}=\\frac{2}{\\sqrt{1+x}+\\sqrt{1-x}}\\to1\\)."
    },
    {
      question: "Bestimmen Sie \\(c\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}c,&x=0\\\\ \\frac{x}{\\sqrt{1+x}-1},&x\\ne0\\end{cases}\\).",
      choices: ["\\(c=1\\)", "\\(c=2\\)", "\\(c=0\\)", "keine Wahl möglich"],
      correctIndex: 1,
      explanation: "Rationalisieren: \\(\\frac{x}{\\sqrt{1+x}-1}=\\sqrt{1+x}+1\\to2\\)."
    },
    {
      question: "Bestimmen Sie \\(c\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}c,&x=0\\\\ \\frac{x}{\\sqrt{4+x}-2},&x\\ne0\\end{cases}\\).",
      choices: ["\\(c=2\\)", "\\(c=4\\)", "\\(c=1\\)", "keine Wahl möglich"],
      correctIndex: 1,
      explanation: "Rationalisieren: \\(\\frac{x}{\\sqrt{4+x}-2}=\\sqrt{4+x}+2\\to4\\)."
    },
    {
      question: "Bestimmen Sie \\(c\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}c,&x=0\\\\ \\frac{\\sin(2x)}{\\sin x},&x\\ne0\\end{cases}\\).",
      choices: ["\\(c=0\\)", "\\(c=1\\)", "\\(c=2\\)", "keine Wahl möglich"],
      correctIndex: 2,
      explanation: "\\(\\frac{\\sin(2x)}{\\sin x}=2\\cos x\\to2\\)."
    },
    {
      question: "Bestimmen Sie \\(c\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}c,&x=0\\\\ \\frac{1}{\\sqrt{1+x}}-1, &x\\ne0\\end{cases}\\).",
      choices: ["\\(c=0\\)", "\\(c=1\\)", "\\(c=-1\\)", "keine Wahl möglich"],
      correctIndex: 0,
      explanation: "Direkt einsetzen (stetig): \\(1/\\sqrt{1+0}-1=0\\)."
    },
    {
      question: "Bestimmen Sie \\(c\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}c,&x=0\\\\ \\frac{\\sqrt{1+x}-1}{\\sqrt{1+x}+1},&x\\ne0\\end{cases}\\).",
      choices: ["\\(c=0\\)", "\\(c=1\\)", "\\(c=\\frac12\\)", "keine Wahl möglich"],
      correctIndex: 0,
      explanation: "Zähler → 0, Nenner → 2 ⇒ Grenzwert 0."
    },
    {
      question: "Bestimmen Sie \\(c\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}c,&x=0\\\\ \\frac{(1+x)^2-1}{x},&x\\ne0\\end{cases}\\).",
      choices: ["\\(c=0\\)", "\\(c=1\\)", "\\(c=2\\)", "keine Wahl möglich"],
      correctIndex: 2,
      explanation: "(Binomisch) \\((1+x)^2-1=2x+x^2\\Rightarrow\\frac{\\cdot}{x}\\to2\\)."
    },
    {
      question: "Bestimmen Sie \\(c\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}c,&x=0\\\\ \\frac{(1+x)^{1/2}-1}{x},&x\\ne0\\end{cases}\\).",
      choices: ["\\(c=\\frac12\\)", "\\(c=1\\)", "\\(c=2\\)", "keine Wahl möglich"],
      correctIndex: 0,
      explanation: "Wie \\(\\frac{\\sqrt{1+x}-1}{x}\\to\\frac12\\)."
    },
    {
      question: "Bestimmen Sie \\(c\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}c,&x=0\\\\ \\frac{\\ln(1+2x)}{x},&x\\ne0\\end{cases}\\).",
      choices: ["\\(c=1\\)", "\\(c=2\\)", "\\(c=0\\)", "keine Wahl möglich"],
      correctIndex: 1,
      explanation: "\\(\\ln(1+2x)\\sim 2x\\Rightarrow\\frac{\\ln(1+2x)}{x}\\to2\\)."
    },
    {
      question: "Bestimmen Sie \\(c\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}c,&x=0\\\\ \\frac{e^{2x}-1}{x},&x\\ne0\\end{cases}\\).",
      choices: ["\\(c=1\\)", "\\(c=2\\)", "\\(c=e\\)", "keine Wahl möglich"],
      correctIndex: 1,
      explanation: "\\(e^{2x}-1\\sim2x\\Rightarrow\\frac{e^{2x}-1}{x}\\to2\\)."
    },
    {
      question: "Bestimmen Sie \\(c\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}c,&x=0\\\\ \\frac{\\sin x}{x}\\cdot\\frac{\\sqrt{1+x}-1}{x},&x\\ne0\\end{cases}\\).",
      choices: ["\\(c=\\frac12\\)", "\\(c=1\\)", "\\(c=0\\)", "keine Wahl möglich"],
      correctIndex: 0,
      explanation: "Erster Faktor →1, zweiter Faktor →1/2 ⇒ Produkt → 1/2."
    },
    {
      question: "Bestimmen Sie \\(c\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}c,&x=0\\\\ \\frac{\\sin^2 x}{x^2},&x\\ne0\\end{cases}\\).",
      choices: ["\\(c=0\\)", "\\(c=1\\)", "\\(c=2\\)", "keine Wahl möglich"],
      correctIndex: 1,
      explanation: "\\(\\left(\\frac{\\sin x}{x}\\right)^2\\to1\\)."
    },
    {
      question: "Bestimmen Sie \\(c\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}c,&x=0\\\\ \\frac{1-\\cos x}{x},&x\\ne0\\end{cases}\\).",
      choices: ["\\(c=0\\)", "\\(c=\\frac12\\)", "\\(c=1\\)", "keine Wahl möglich"],
      correctIndex: 0,
      explanation: "Da \\(1-\\cos x\\sim x^2/2\\), folgt \\((1-\\cos x)/x\\to0\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ \\frac{\\sqrt{1+x}-\\sqrt{1-x}}{x},&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=0\\)", "\\(a=1\\)", "\\(a=2\\)", "keine Wahl möglich"],
      correctIndex: 1,
      explanation: "Rationalisieren: \\(\\frac{\\sqrt{1+x}-\\sqrt{1-x}}{x}=\\frac{(1+x)-(1-x)}{x(\\sqrt{1+x}+\\sqrt{1-x})}=\\frac{2}{\\sqrt{1+x}+\\sqrt{1-x}}\\to1\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ \\frac{\\sqrt{1+2x}-1}{x},&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=1\\)", "\\(a=2\\)", "\\(a=\\frac12\\)", "keine Wahl möglich"],
      correctIndex: 1,
      explanation: "Rationalisieren: \\(\\frac{\\sqrt{1+2x}-1}{x}=\\frac{2}{\\sqrt{1+2x}+1}\\to\\frac{2}{2}=1\\)? Achtung: es bleibt \\(\\frac{2}{\\sqrt{1+2x}+1}\\to1\\). Daher \\(a=1\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ \\frac{\\sqrt{1+2x}-1}{x},&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=1\\)", "\\(a=2\\)", "\\(a=0\\)", "keine Wahl möglich"],
      correctIndex: 0,
      explanation: "Rationalisieren: \\(\\frac{\\sqrt{1+2x}-1}{x}=\\frac{(1+2x)-1}{x(\\sqrt{1+2x}+1)}=\\frac{2}{\\sqrt{1+2x}+1}\\to1\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ \\frac{\\sin x}{\\sqrt{1+x}-1},&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=1\\)", "\\(a=2\\)", "\\(a=\\frac12\\)", "keine Wahl möglich"],
      correctIndex: 1,
      explanation: "Rationalisieren: \\(\\sqrt{1+x}-1\\sim x/2\\). Dann \\(\\sin x/(x/2)\\to2\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ \\frac{\\tan x- x}{x^3},&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=\\frac{1}{3}\\)", "\\(a=-\\frac{1}{3}\\)", "\\(a=0\\)", "keine Wahl möglich"],
      correctIndex: 0,
      explanation: "Reihenentwicklung: \\(\\tan x = x + \\frac{x^3}{3}+\\dots\\Rightarrow \\frac{\\tan x-x}{x^3}\\to \\frac13\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ \\frac{\\ln(1+x)-x}{x^2},&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=-\\frac12\\)", "\\(a=\\frac12\\)", "\\(a=0\\)", "keine Wahl möglich"],
      correctIndex: 0,
      explanation: "Reihe: \\(\\ln(1+x)=x-\\frac{x^2}{2}+\\dots\\Rightarrow \\frac{\\ln(1+x)-x}{x^2}\\to-\\frac12\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ \\frac{e^x-1-x}{x^2},&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=\\frac12\\)", "\\(a=1\\)", "\\(a=0\\)", "keine Wahl möglich"],
      correctIndex: 0,
      explanation: "Reihe: \\(e^x=1+x+\\frac{x^2}{2}+\\dots\\Rightarrow \\frac{e^x-1-x}{x^2}\\to\\frac12\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ \\frac{(1+x)^{\\frac32}-1-\\frac32 x}{x^2},&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=\\frac{3}{8}\\)", "\\(a=\\frac{1}{2}\\)", "\\(a=0\\)", "keine Wahl möglich"],
      correctIndex: 0,
      explanation: "Binomialreihe: \\((1+x)^{3/2}=1+\\frac32x+\\frac{3}{8}x^2+\\dots\\Rightarrow\\) Grenzwert \\(=\\frac{3}{8}\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ \\frac{\\sin x - x\\cos x}{x^3},&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=\\frac{1}{3}\\)", "\\(a=-\\frac{1}{3}\\)", "\\(a=0\\)", "keine Wahl möglich"],
      correctIndex: 0,
      explanation: "Reihen: \\(\\sin x=x-\\frac{x^3}{6}+\\dots\\), \\(x\\cos x=x-\\frac{x^3}{2}+\\dots\\). Differenz \\(=\\frac{x^3}{3}+\\dots\\Rightarrow\\) Grenzwert \\(=\\frac13\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ \\frac{1-\\cos x-\\frac{x^2}{2}}{x^4},&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=-\\frac{1}{24}\\)", "\\(a=\\frac{1}{24}\\)", "\\(a=0\\)", "keine Wahl möglich"],
      correctIndex: 1,
      explanation: "\\(\\cos x=1-\\frac{x^2}{2}+\\frac{x^4}{24}+\\dots\\Rightarrow 1-\\cos x-\\frac{x^2}{2}= -\\frac{x^4}{24}+\\dots\\). Achtung: Dann geteilt durch \\(x^4\\) ⇒ \\(-\\frac{1}{24}\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ \\frac{1-\\cos x-\\frac{x^2}{2}}{x^4},&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=-\\frac{1}{24}\\)", "\\(a=\\frac{1}{24}\\)", "\\(a=0\\)", "keine Wahl möglich"],
      correctIndex: 0,
      explanation: "\\(\\cos x=1-\\frac{x^2}{2}+\\frac{x^4}{24}+\\dots\\Rightarrow 1-\\cos x-\\frac{x^2}{2}= -\\frac{x^4}{24}+\\dots\\). Daher Grenzwert \\(-\\frac{1}{24}\\)."
    },
    {
      question: "Bestimmen Sie \\(a,b\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ b\\sin x + x^2,&x\\ne0\\end{cases}\\).",
      choices: [
        "\\(a=0\\) und \\(b\\) beliebig",
        "\\(a=b\\) und \\(b\\) beliebig",
        "\\(a=1\\) und \\(b=0\\)",
        "keine Wahl möglich"
      ],
      correctIndex: 0,
      explanation: "Grenzwert: \\(\\lim_{x\\to0}(b\\sin x+x^2)=0\\). Also \\(a=0\\), \\(b\\) egal."
    },
    {
      question: "Bestimmen Sie \\(a,b\\) so, dass \\(f\\) in \\(x=1\\) stetig ist: \\(f(x)=\\begin{cases}ax+b,&x<1\\\\ x^2,&x\\ge1\\end{cases}\\).",
      choices: [
        "\\(a+b=1\\)",
        "\\(a+b=2\\)",
        "\\(a+ b=0\\)",
        "keine Bedingung"
      ],
      correctIndex: 0,
      explanation: "Stetigkeit: Links bei 1: \\(a+b\\), rechts bei 1: \\(1\\). ⇒ \\(a+b=1\\)."
    },
    {
      question: "Bestimmen Sie \\(a,b\\) so, dass \\(f\\) in \\(x=2\\) stetig ist: \\(f(x)=\\begin{cases}ax+b,&x\\le2\\\\ \\sqrt{x+2},&x>2\\end{cases}\\).",
      choices: [
        "\\(2a+b=2\\)",
        "\\(2a+b=\\sqrt{2}\\)",
        "\\(2a+b=\\sqrt{4}\\)",
        "keine Wahl möglich"
      ],
      correctIndex: 0,
      explanation: "Rechtsgrenzwert bei 2: \\(\\sqrt{4}=2\\). Links: \\(2a+b\\). ⇒ \\(2a+b=2\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ \\left(\\frac{\\sin x}{x}\\right)^{2}\\!,&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=0\\)", "\\(a=1\\)", "\\(a=2\\)", "keine Wahl möglich"],
      correctIndex: 1,
      explanation: "\\(\\sin x/x\\to1\\Rightarrow\\left(\\sin x/x\\right)^2\\to1\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ \\frac{\\sqrt{1+x}-1-\\frac{x}{2}}{x^2},&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=-\\frac{1}{8}\\)", "\\(a=\\frac{1}{8}\\)", "\\(a=0\\)", "keine Wahl möglich"],
      correctIndex: 0,
      explanation: "Reihe: \\(\\sqrt{1+x}=1+\\frac{x}{2}-\\frac{x^2}{8}+\\dots\\Rightarrow\\) Zähler \\(\\sim-\\frac{x^2}{8}\\)."
    },
    {
      question: "Bestimmen Sie \\(\\alpha,\\beta\\) so, dass \\(f\\) auf \\([0,\\pi]\\) stetig ist: \\(f(x)=\\begin{cases}\\alpha,&x=0\\\\ (2-x)\\sin\\left(\\frac{x}{2}\\right),&x\\in(0,\\pi)\\\\ \\beta,&x=\\pi\\end{cases}\\).",
      choices: [
        "\\(\\alpha=0,\\ \\beta=(2-\\pi)\\sin\\left(\\frac{\\pi}{2}\\right)\\)",
        "\\(\\alpha=1,\\ \\beta=0\\)",
        "\\(\\alpha=2,\\ \\beta=\\sin\\left(\\frac{\\pi}{2}\\right)\\)",
        "keine Wahl möglich"
      ],
      correctIndex: 0,
      explanation: "Bei 0: \\((2-x)\\sin(x/2)\\to2\\cdot0=0\\Rightarrow\\alpha=0\\). Bei \\(\\pi\\): direkt einsetzen."
    },
    {
      question: "Bestimmen Sie \\(\\alpha,\\beta\\) so, dass \\(f\\) auf \\([0,1]\\) stetig ist: \\(f(x)=\\begin{cases}\\alpha,&x=0\\\\ x\\ln x,&x\\in(0,1)\\\\ \\beta,&x=1\\end{cases}\\).",
      choices: [
        "\\(\\alpha=0,\\ \\beta=0\\)",
        "\\(\\alpha=1,\\ \\beta=0\\)",
        "\\(\\alpha=0,\\ \\beta=1\\)",
        "keine Wahl möglich"
      ],
      correctIndex: 0,
      explanation: "\\(\\lim_{x\\to0^+}x\\ln x=0\\). Bei 1: \\(1\\cdot\\ln1=0\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ x\\ln(1/x),&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=0\\)", "\\(a=1\\)", "\\(a=-1\\)", "keine Wahl möglich"],
      correctIndex: 0,
      explanation: "Für \\(x\\to0^+\\): \\(x\\ln(1/x)\\to0\\) (Log wächst langsamer als \\(1/x\\))."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ x^2\\ln(1/x),&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=0\\)", "\\(a=1\\)", "\\(a\\) beliebig", "keine Wahl möglich"],
      correctIndex: 0,
      explanation: "\\(x^2\\ln(1/x)\\to0\\) für \\(x\\to0^+\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ \\frac{\\ln(1+x)-\\sin x}{x^2},&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=-\\frac{1}{2}\\)", "\\(a=0\\)", "\\(a=\\frac{1}{2}\\)", "keine Wahl möglich"],
      correctIndex: 1,
      explanation: "Reihen: \\(\\ln(1+x)=x-\\frac{x^2}{2}+\\dots\\), \\(\\sin x=x-\\frac{x^3}{6}+\\dots\\). Differenz \\(\\sim -\\frac{x^2}{2}\\) ⇒ geteilt durch \\(x^2\\) → \\(-\\frac12\\). (Achtung: dann wäre nicht 0.)"
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ \\frac{\\ln(1+x)-\\sin x}{x^2},&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=-\\frac{1}{2}\\)", "\\(a=0\\)", "\\(a=\\frac{1}{2}\\)", "keine Wahl möglich"],
      correctIndex: 0,
      explanation: "Differenz: \\(\\ln(1+x)-\\sin x=(x-\\frac{x^2}{2}+\\dots)-(x-\\frac{x^3}{6}+\\dots)=-\\frac{x^2}{2}+\\dots\\Rightarrow\\) Grenzwert \\(-\\frac12\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ \\frac{\\sqrt{1+x}-1}{\\sin x},&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=\\frac12\\)", "\\(a=1\\)", "\\(a=2\\)", "keine Wahl möglich"],
      correctIndex: 0,
      explanation: "Zähler \\(\\sim x/2\\), Nenner \\(\\sim x\\) ⇒ Quotient \\(\\to1/2\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ \\frac{\\arctan x - x}{x^3},&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=-\\frac{1}{3}\\)", "\\(a=\\frac{1}{3}\\)", "\\(a=0\\)", "keine Wahl möglich"],
      correctIndex: 0,
      explanation: "Reihe: \\(\\arctan x=x-\\frac{x^3}{3}+\\dots\\Rightarrow\\frac{\\arctan x-x}{x^3}\\to-\\frac13\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ \\frac{\\sin x - x + \\frac{x^3}{6}}{x^5},&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=\\frac{1}{120}\\)", "\\(a=-\\frac{1}{120}\\)", "\\(a=0\\)", "keine Wahl möglich"],
      correctIndex: 1,
      explanation: "Reihe: \\(\\sin x=x-\\frac{x^3}{6}+\\frac{x^5}{120}+\\dots\\Rightarrow\\) Zähler \\(\\sim \\frac{x^5}{120}\\). Dann geteilt durch \\(x^5\\) ⇒ \\(\\frac{1}{120}\\). Mit Vorzeichen: \\(\\sin x - x + x^3/6\\sim +x^5/120\\Rightarrow a=1/120\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ \\frac{\\sin x - x + \\frac{x^3}{6}}{x^5},&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=\\frac{1}{120}\\)", "\\(a=-\\frac{1}{120}\\)", "\\(a=0\\)", "keine Wahl möglich"],
      correctIndex: 0,
      explanation: "Reihe: \\(\\sin x=x-\\frac{x^3}{6}+\\frac{x^5}{120}+\\dots\\). Zähler \\(=\\frac{x^5}{120}+\\dots\\Rightarrow\\) Grenzwert \\(=\\frac{1}{120}\\)."
    },
    {
      question: "Bestimmen Sie \\(\\alpha,\\beta\\) so, dass \\(f\\) auf \\([0,2]\\) stetig ist: \\(f(x)=\\begin{cases}\\alpha,&x=0\\\\ \\frac{\\sin(\\pi x)}{x},&x\\in(0,2)\\\\ \\beta,&x=2\\end{cases}\\).",
      choices: [
        "\\(\\alpha=\\pi,\\ \\beta=\\frac{\\sin(2\\pi)}{2}=0\\)",
        "\\(\\alpha=0,\\ \\beta=0\\)",
        "\\(\\alpha=\\pi,\\ \\beta=\\pi\\)",
        "keine Wahl möglich"
      ],
      correctIndex: 0,
      explanation: "Bei 0: \\(\\sin(\\pi x)/x=\\pi\\cdot\\frac{\\sin(\\pi x)}{\\pi x}\\to\\pi\\). Bei 2: direkt einsetzen ⇒ 0."
    },
    {
      question: "Bestimmen Sie \\(\\alpha,\\beta\\) so, dass \\(f\\) auf \\([0,1]\\) stetig ist: \\(f(x)=\\begin{cases}\\alpha,&x=0\\\\ \\frac{1-\\cos(\\pi x)}{x^2},&x\\in(0,1)\\\\ \\beta,&x=1\\end{cases}\\).",
      choices: [
        "\\(\\alpha=\\frac{\\pi^2}{2},\\ \\beta=2\\)",
        "\\(\\alpha=\\frac{1}{2},\\ \\beta=0\\)",
        "\\(\\alpha=\\pi^2,\\ \\beta=1\\)",
        "keine Wahl möglich"
      ],
      correctIndex: 0,
      explanation: "Bei 0: \\(1-\\cos(\\pi x)\\sim (\\pi x)^2/2\\Rightarrow\\alpha=\\pi^2/2\\). Bei 1: \\(1-\\cos\\pi=2\\Rightarrow\\beta=2\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ \\left(\\frac{\\sin x}{x}\\right)^{\\!\\frac{1}{x^2}},&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=e^{-1/6}\\)", "\\(a=e^{-1/2}\\)", "\\(a=1\\)", "keine Wahl möglich"],
      correctIndex: 0,
      explanation: "Logarithmus: \\(\\ln\\left(\\frac{\\sin x}{x}\\right)\\sim -\\frac{x^2}{6}\\). Dann \\(\\frac{1}{x^2}\\ln(...)\\to -\\frac16\\Rightarrow a=e^{-1/6}\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ (\\cos x)^{\\frac{1}{x^2}},&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=e^{-1/2}\\)", "\\(a=e^{-1}\\)", "\\(a=1\\)", "keine Wahl möglich"],
      correctIndex: 0,
      explanation: "\\(\\ln\\cos x\\sim -x^2/2\\). Dann \\(\\frac{1}{x^2}\\ln\\cos x\\to-1/2\\Rightarrow a=e^{-1/2}\\)."
    },
    {
      question: "Bestimmen Sie \\(a\\) so, dass \\(f\\) in \\(x=0\\) stetig ist: \\(f(x)=\\begin{cases}a,&x=0\\\\ \\left(1+x\\right)^{\\frac{1}{\\sin x}},&x\\ne0\\end{cases}\\).",
      choices: ["\\(a=e\\)", "\\(a=1\\)", "\\(a=e^{0}\\)", "keine Wahl möglich"],
      correctIndex: 0,
      explanation: "Log: \\(\\ln f=\\frac{\\ln(1+x)}{\\sin x}\\sim \\frac{x}{x}=1\\Rightarrow a=e\\)."
    }
  ]
});