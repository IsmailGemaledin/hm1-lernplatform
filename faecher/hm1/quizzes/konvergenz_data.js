// quizzes/konvergenz_data.js
// Keep it super simple: question, choices, correct index, optional explanation.

window.HM1_QUIZZES = window.HM1_QUIZZES || [];

window.HM1_QUIZZES.push({
  id: "hm1_konvergenz",
  title: "HM1 Konvergenz & absolute Konvergenz",
  questions: [
    {
      question: "Untersuchen Sie die Reihe auf Konvergenz und absolute Konvergenz: \\(\\sum_{n=1}^{\\infty} (-1)^n\\,\\frac{1}{\\sqrt{n}}\\).",
      choices: ["absolut konvergent", "bedingt konvergent", "divergent", "konvergiert nur für gerade \\(n\\)"],
      correctIndex: 1,
      explanation: "Leibniz: \\(1/\\sqrt n\\searrow\\) und \\(\\to 0\\) ⇒ konvergent. Absolut: \\(\\sum 1/\\sqrt n\\) ist p-Reihe mit \\(p=1/2<1\\) ⇒ divergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} (-1)^{n}\\,\\frac{1}{n}\\).",
      choices: ["absolut konvergent", "bedingt konvergent", "divergent", "konvergiert nicht, weil \\(1/n\\) nicht monoton ist"],
      correctIndex: 1,
      explanation: "Alternierende harmonische Reihe: konvergent nach Leibniz. Absolut: \\(\\sum 1/n\\) divergiert."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} (-1)^{n}\\,\\frac{1}{n^2}\\).",
      choices: ["absolut konvergent", "bedingt konvergent", "divergent", "nur bedingt, weil alternierend"],
      correctIndex: 0,
      explanation: "Absolut: \\(\\sum 1/n^2\\) ist p-Reihe mit \\(p=2>1\\) ⇒ konvergent ⇒ absolut konvergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{1}{\\sqrt{4+3n}}\\).",
      choices: ["konvergent (p-Reihe)", "divergent (vergleichbar mit \\(1/\\sqrt n\\))", "absolut konvergent", "bedingt konvergent"],
      correctIndex: 1,
      explanation: "Für große \\(n\\): \\(\\frac{1}{\\sqrt{4+3n}}\\sim \\frac{1}{\\sqrt{3n}}\\propto 1/\\sqrt n\\). p-Reihe mit \\(p=1/2<1\\) ⇒ divergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} (-1)^n\\,\\frac{1}{\\sqrt{4+3n}}\\).",
      choices: ["absolut konvergent", "bedingt konvergent", "divergent", "konvergiert nur, wenn man bei \\(n=2\\) startet"],
      correctIndex: 1,
      explanation: "Leibniz: \\(1/\\sqrt{4+3n}\\searrow\\) und \\(\\to 0\\) ⇒ konvergent. Absolut: wie \\(\\sum 1/\\sqrt n\\) ⇒ divergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{1}{n(n+1)}\\).",
      choices: ["divergent", "konvergent (teleskopierend)", "bedingt konvergent", "absolut divergent"],
      correctIndex: 1,
      explanation: "\\(\\frac{1}{n(n+1)}=\\frac{1}{n}-\\frac{1}{n+1}\\) teleskopiert ⇒ konvergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\left(\\frac{1}{n}-\\frac{1}{n+2}\\right)\\).",
      choices: ["divergent", "konvergent (teleskopierend)", "bedingt konvergent", "absolut konvergent wegen Alternation"],
      correctIndex: 1,
      explanation: "Teleskopierend: Partialsummen bleiben beschränkt und konvergieren."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{1}{n^p}\\) für \\(p=\\tfrac{3}{2}\\).",
      choices: ["divergent", "konvergent", "bedingt konvergent", "nicht entscheidbar"],
      correctIndex: 1,
      explanation: "p-Reihe mit \\(p>1\\) ⇒ konvergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{1}{n^p}\\) für \\(p=1\\).",
      choices: ["konvergent", "divergent", "bedingt konvergent", "absolut konvergent"],
      correctIndex: 1,
      explanation: "Harmonische Reihe \\(\\sum 1/n\\) divergiert."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{1}{n^p}\\) für \\(p=\\tfrac{1}{2}\\).",
      choices: ["konvergent", "divergent", "bedingt konvergent", "konvergiert nur ab \\(n\\ge 2\\)"],
      correctIndex: 1,
      explanation: "p-Reihe mit \\(p<1\\) ⇒ divergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=0}^{\\infty} \\left(\\frac{1}{2}\\right)^n\\).",
      choices: ["divergent", "konvergent (geometrische Reihe)", "bedingt konvergent", "konvergiert nur für gerade \\(n\\)"],
      correctIndex: 1,
      explanation: "Geometrische Reihe mit \\(|q|=1/2<1\\) ⇒ konvergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=0}^{\\infty} \\left(-\\frac{1}{2}\\right)^n\\).",
      choices: ["divergent", "bedingt konvergent", "absolut konvergent", "nicht entscheidbar"],
      correctIndex: 2,
      explanation: "Geometrische Reihe mit \\(|q|=1/2<1\\) ⇒ konvergent. Absolut ebenfalls (mit \\(q=1/2\\))."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=0}^{\\infty} 2^n\\).",
      choices: ["konvergent", "divergent", "bedingt konvergent", "absolut konvergent"],
      correctIndex: 1,
      explanation: "Geometrische Reihe mit \\(|q|=2>1\\) ⇒ divergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{n}{n^3+1}\\).",
      choices: ["divergent (wie \\(1/n\\))", "konvergent (wie \\(1/n^2\\))", "bedingt konvergent", "nicht entscheidbar"],
      correctIndex: 1,
      explanation: "Für große \\(n\\): \\(\\frac{n}{n^3+1}\\sim \\frac{n}{n^3}=\\frac{1}{n^2\\!}\\) ⇒ konvergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{n+1}{n^2}\\).",
      choices: ["konvergent", "divergent", "bedingt konvergent", "absolut konvergent"],
      correctIndex: 1,
      explanation: "\\(\\frac{n+1}{n^2}=\\frac{1}{n}+\\frac{1}{n^2\\!}\\). Wegen \\(\\sum 1/n\\) divergent ⇒ Reihe divergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{1}{n(n+1)(n+2)}\\).",
      choices: ["divergent", "konvergent", "bedingt konvergent", "nicht entscheidbar"],
      correctIndex: 1,
      explanation: "Vergleich: \\(\\frac{1}{n(n+1)(n+2)}\\le \\frac{1}{n^3}\\). p-Reihe mit \\(p=3\\) ⇒ konvergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{\\sqrt{n}}{n^2+1}\\).",
      choices: ["divergent", "konvergent", "bedingt konvergent", "konvergent nur ab \\(n\\ge 10\\)"],
      correctIndex: 1,
      explanation: "Für große \\(n\\): \\(\\frac{\\sqrt n}{n^2}\\sim \\frac{1}{n^{3/2}}\\), p>1 ⇒ konvergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{1}{\\sqrt{n}+1}\\).",
      choices: ["konvergent", "divergent", "bedingt konvergent", "absolut konvergent"],
      correctIndex: 1,
      explanation: "Für große \\(n\\): \\(\\frac{1}{\\sqrt n+1}\\sim \\frac{1}{\\sqrt n}\\). p=1/2 ⇒ divergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{1}{n+\\sqrt{n}}\\).",
      choices: ["konvergent", "divergent", "bedingt konvergent", "absolut konvergent"],
      correctIndex: 1,
      explanation: "Für große \\(n\\): \\(\\frac{1}{n+\\sqrt n}\\sim \\frac{1}{n}\\) ⇒ divergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\left(\\frac{1}{\\sqrt n}-\\frac{1}{\\sqrt{n+1}}\\right)\\).",
      choices: ["divergent", "konvergent (teleskopierend)", "bedingt konvergent", "nicht entscheidbar"],
      correctIndex: 1,
      explanation: "Teleskopierend: Partialsummen = \\(1-1/\\sqrt{N+1}\\to 1\\)."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n+1}\\).",
      choices: ["divergent", "bedingt konvergent", "absolut konvergent", "nicht entscheidbar"],
      correctIndex: 1,
      explanation: "Leibniz: \\(1/(n+1)\\searrow\\to0\\) ⇒ konvergent. Absolut: \\(\\sum 1/(n+1)\\) divergiert ⇒ nicht absolut."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n(n+1)}\\).",
      choices: ["absolut konvergent", "bedingt konvergent", "divergent", "konvergiert nicht, weil alternierend"],
      correctIndex: 0,
      explanation: "Absolut: \\(\\sum \\frac{1}{n(n+1)}\\) konvergiert (teleskopierend/\\(\\le 1/n^2\\))."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=2}^{\\infty} \\frac{1}{n\\ln n}\\).",
      choices: ["konvergent", "divergent", "bedingt konvergent", "absolut konvergent"],
      correctIndex: 1,
      explanation: "Klassisch: \\(\\sum \\frac{1}{n\\ln n}\\) divergiert (sehr langsam, aber divergent)."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=2}^{\\infty} \\frac{1}{n(\\ln n)^2}\\).",
      choices: ["konvergent", "divergent", "bedingt konvergent", "nicht entscheidbar"],
      correctIndex: 0,
      explanation: "Klassisch: \\(\\sum \\frac{1}{n(\\ln n)^p}\\) konvergiert für \\(p>1\\)."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{n^2}{n^3+5}\\).",
      choices: ["divergent (wie \\(1/n\\))", "konvergent (wie \\(1/n^2\\))", "absolut konvergent", "bedingt konvergent"],
      correctIndex: 0,
      explanation: "Für große \\(n\\): \\(\\frac{n^2}{n^3}=\\frac{1}{n}\\) ⇒ divergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{1}{n^2+n}\\).",
      choices: ["divergent", "konvergent", "bedingt konvergent", "nicht entscheidbar"],
      correctIndex: 1,
      explanation: "\\(\\frac{1}{n^2+n}=\\frac{1}{n(n+1)}\\) teleskopierend ⇒ konvergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{2n+1}{n^2+n}\\).",
      choices: ["konvergent", "divergent", "bedingt konvergent", "absolut konvergent"],
      correctIndex: 1,
      explanation: "\\(\\frac{2n+1}{n^2+n}\\sim \\frac{2n}{n^2}=\\frac{2}{n}\\) ⇒ divergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{\\sqrt{n}+\\sqrt{n+1}}\\).",
      choices: ["divergent", "bedingt konvergent", "absolut konvergent", "nicht entscheidbar"],
      correctIndex: 1,
      explanation: "Nenner \\(\\sim 2\\sqrt n\\) ⇒ Betrag \\(\\sim 1/\\sqrt n\\) (nicht absolut). Alternierend + monotone Nullfolge ⇒ Leibniz ⇒ bedingt."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\left(\\sqrt{n+1}-\\sqrt{n}\\right)\\).",
      choices: ["konvergent", "divergent", "bedingt konvergent", "absolut konvergent"],
      correctIndex: 1,
      explanation: "\\(\\sqrt{n+1}-\\sqrt n\\sim \\frac{1}{2\\sqrt n}\\). Dann Vergleich mit \\(\\sum 1/\\sqrt n\\) ⇒ divergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{1}{\\sqrt{n(n+1)}}\\).",
      choices: ["konvergent", "divergent", "bedingt konvergent", "nicht entscheidbar"],
      correctIndex: 1,
      explanation: "Für große \\(n\\): \\(\\sqrt{n(n+1)}\\sim n\\) ⇒ Glied \\(\\sim 1/n\\) ⇒ divergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{1}{n^{3/2}+n}\\).",
      choices: ["divergent", "konvergent", "bedingt konvergent", "nicht entscheidbar"],
      correctIndex: 1,
      explanation: "Nenner \\(\\ge n^{3/2}\\) ⇒ Glied \\(\\le 1/n^{3/2}\\) ⇒ konvergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n^{3/2}}\\).",
      choices: ["bedingt konvergent", "absolut konvergent", "divergent", "nicht entscheidbar"],
      correctIndex: 1,
      explanation: "Absolut: p-Reihe mit \\(p=3/2>1\\) ⇒ konvergent ⇒ absolut."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{(-1)^n\\,n}{n^2+1}\\).",
      choices: ["absolut konvergent", "bedingt konvergent", "divergent", "konvergent nur für ungerade \\(n\\)"],
      correctIndex: 1,
      explanation: "Betrag \\(\\sim 1/n\\) ⇒ nicht absolut. Alternierend, \\(n/(n^2+1)\\searrow\\to0\\) ⇒ Leibniz ⇒ bedingt."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{n}{(n+1)(n+2)}\\).",
      choices: ["konvergent", "divergent", "bedingt konvergent", "nicht entscheidbar"],
      correctIndex: 1,
      explanation: "Für große \\(n\\): \\(\\frac{n}{n^2}=\\frac{1}{n}\\) ⇒ divergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{1}{(n+1)(n+2)}\\).",
      choices: ["divergent", "konvergent", "bedingt konvergent", "absolut divergent"],
      correctIndex: 1,
      explanation: "Teleskopierend: \\(\\frac{1}{(n+1)(n+2)}=\\frac{1}{n+1}-\\frac{1}{n+2}\\)."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{1}{\\sqrt{n^2+1}}\\).",
      choices: ["konvergent", "divergent", "bedingt konvergent", "nicht entscheidbar"],
      correctIndex: 1,
      explanation: "Für große \\(n\\): \\(\\frac{1}{\\sqrt{n^2+1}}\\sim \\frac{1}{n}\\) ⇒ divergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{1}{n\\sqrt{n}}\\).",
      choices: ["divergent", "konvergent", "bedingt konvergent", "nicht entscheidbar"],
      correctIndex: 1,
      explanation: "\\(\\frac{1}{n\\sqrt n}=\\frac{1}{n^{3/2}}\\), p=3/2>1 ⇒ konvergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\left(\\frac{n}{n+1}\\right)^n\\).",
      choices: ["divergent", "konvergent", "bedingt konvergent", "nicht entscheidbar"],
      correctIndex: 1,
      explanation: "\\(\\left(\\frac{n}{n+1}\\right)^n=\\left(1-\\frac{1}{n+1}\\right)^n\\to e^{-1}\\neq 0\\). Gliedtest ⇒ Reihe divergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\left(\\frac{n}{n+1}\\right)^{n^2}\\).",
      choices: ["konvergent", "divergent", "bedingt konvergent", "nicht entscheidbar"],
      correctIndex: 0,
      explanation: "\\(\\left(1-\\frac{1}{n+1}\\right)^{n^2}\\approx e^{-n}\\) ⇒ sehr klein, Vergleich mit geometrischer Reihe ⇒ konvergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{1}{2^n\\,n}\\).",
      choices: ["divergent", "konvergent", "bedingt konvergent", "nicht entscheidbar"],
      correctIndex: 1,
      explanation: "Vergleich: \\(\\frac{1}{2^n n}\\le \\frac{1}{2^n}\\). Geometrische Reihe konvergent ⇒ konvergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{2^n}\\).",
      choices: ["divergent", "bedingt konvergent", "absolut konvergent", "nicht entscheidbar"],
      correctIndex: 2,
      explanation: "Geometrisch mit \\(|q|=1/2\\). Absolut ebenfalls."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n\\ln(n+1)}\\).",
      choices: ["absolut konvergent", "bedingt konvergent", "divergent", "nicht entscheidbar"],
      correctIndex: 1,
      explanation: "Alternierend mit \\(b_n=1/(n\\ln(n+1))\\searrow\\to0\\) ⇒ Leibniz ⇒ konvergent. Absolut: ähnlich \\(\\sum 1/(n\\ln n)\\) ⇒ divergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{n}{2^n}\\).",
      choices: ["divergent", "konvergent", "bedingt konvergent", "nicht entscheidbar"],
      correctIndex: 1,
      explanation: "Bekannt/vergleichbar: \\(n/2^n\\) fällt schnell, Vergleich mit geometrischer Reihe ⇒ konvergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{1+(-1)^n}{n}\\).",
      choices: ["konvergent", "divergent", "absolut konvergent", "bedingt konvergent"],
      correctIndex: 1,
      explanation: "Für gerade \\(n\\): Term \\(=\\frac{2}{n}\\), für ungerade \\(n\\): Term \\(=0\\). Damit enthält die Reihe eine harmonische Teilreihe ⇒ divergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n^p}\\) für \\(p>1\\).",
      choices: ["immer divergent", "immer bedingt konvergent", "immer absolut konvergent", "nicht entscheidbar"],
      correctIndex: 2,
      explanation: "Absolut: \\(\\sum 1/n^p\\) konvergent für \\(p>1\\) ⇒ absolut konvergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n^p}\\) für \\(0<p\\le 1\\).",
      choices: ["absolut konvergent", "bedingt konvergent", "divergent", "konvergiert nur für \\(p=1\\)"],
      correctIndex: 1,
      explanation: "Für \\(0<p\\le1\\): \\(1/n^p\\searrow\\to0\\) ⇒ Leibniz ⇒ konvergent. Absolut: \\(\\sum 1/n^p\\) divergiert ⇒ bedingt."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{1}{n^2}\\cdot\\frac{n}{n+1}\\).",
      choices: ["divergent", "konvergent", "bedingt konvergent", "nicht entscheidbar"],
      correctIndex: 1,
      explanation: "Term \\(\\sim \\frac{1}{n^2}\\) ⇒ konvergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{\\ln n}{n^2}\\).",
      choices: ["divergent", "konvergent", "bedingt konvergent", "nicht entscheidbar"],
      correctIndex: 1,
      explanation: "Für große \\(n\\): \\(\\ln n\\) wächst langsam, \\(\\frac{\\ln n}{n^2}\\le \\frac{C}{n^{3/2}}\\) für große \\(n\\) ⇒ konvergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{\\ln n}{n}\\).",
      choices: ["konvergent", "divergent", "bedingt konvergent", "nicht entscheidbar"],
      correctIndex: 1,
      explanation: "Größer als \\(\\sum 1/n\\) (für große \\(n\\) gilt \\(\\ln n\\ge 1\\)) ⇒ divergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{1}{n+(-1)^n}\\).",
      choices: ["konvergent", "divergent", "bedingt konvergent", "absolut konvergent"],
      correctIndex: 1,
      explanation: "Für gerade \\(n\\): Term \\(=1/(n+1)\\sim 1/n\\). Harm. Teilreihe ⇒ divergent."
    },
    {
      question: "Untersuchen Sie die Reihe: \\(\\sum_{n=1}^{\\infty} \\frac{1}{n^2+1}\\).",
      choices: ["konvergent", "divergent", "bedingt konvergent", "nicht entscheidbar"],
      correctIndex: 0,
      explanation: "Vergleich: \\(\\frac{1}{n^2+1} \\le \\frac{1}{n^2}\\), p=2>1 ⇒ konvergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{n}{n^2+1}\\).",
      choices: ["konvergent", "divergent", "bedingt konvergent", "absolut konvergent"],
      correctIndex: 1,
      explanation: "Für große n: \\(\\frac{n}{n^2+1} \\sim \\frac{1}{n}\\) ⇒ harmonisch ⇒ divergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} (-1)^n \\frac{1}{n^2+1}\\).",
      choices: ["absolut konvergent", "bedingt konvergent", "divergent", "nicht entscheidbar"],
      correctIndex: 0,
      explanation: "Absolut: \\(\\sum \\frac{1}{n^2+1}\\) konvergent ⇒ absolut konvergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{1}{\\sqrt{n^2+n}}\\).",
      choices: ["konvergent", "divergent", "bedingt konvergent", "nicht entscheidbar"],
      correctIndex: 1,
      explanation: "Für große n: \\(\\sqrt{n^2+n} \\sim n\\) ⇒ Reihe ~ \\(1/n\\) ⇒ divergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{1}{n^{3/2}+\\sqrt{n}}\\).",
      choices: ["konvergent", "divergent", "bedingt konvergent", "nicht entscheidbar"],
      correctIndex: 0,
      explanation: "Nenner ≥ \\(n^{3/2}\\) ⇒ Vergleich mit \\(1/n^{3/2}\\), p>1 ⇒ konvergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} (-1)^n \\frac{\\sqrt{n}}{n+1}\\).",
      choices: ["absolut konvergent", "bedingt konvergent", "divergent", "nicht entscheidbar"],
      correctIndex: 1,
      explanation: "Betrag ~ \\(1/\\sqrt{n}\\) ⇒ nicht absolut. Alternierend + monoton ⇒ Leibniz ⇒ bedingt."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{\\sqrt{n+1}-\\sqrt{n}}{n}\\).",
      choices: ["konvergent", "divergent", "bedingt konvergent", "nicht entscheidbar"],
      correctIndex: 0,
      explanation: "Zähler ~ \\(1/(2\\sqrt n)\\) ⇒ Term ~ \\(1/n^{3/2}\\) ⇒ konvergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{n+1}{n^3}\\).",
      choices: ["konvergent", "divergent", "bedingt konvergent", "absolut konvergent"],
      correctIndex: 0,
      explanation: "\\(\\frac{n+1}{n^3}=\\frac{1}{n^2}+\\frac{1}{n^3}\\), p>1 ⇒ konvergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{n^2}{n^3+n}\\).",
      choices: ["konvergent", "divergent", "bedingt konvergent", "nicht entscheidbar"],
      correctIndex: 1,
      explanation: "Term ~ \\(\\frac{n^2}{n^3}=\\frac{1}{n}\\) ⇒ divergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\left(\\frac{1}{n}-\\frac{1}{n+1}\\right)\\).",
      choices: ["konvergent", "divergent", "bedingt konvergent", "nicht entscheidbar"],
      correctIndex: 0,
      explanation: "Teleskopierende Reihe ⇒ Grenzwert der Partialsummen existiert."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n^2+n}\\).",
      choices: ["absolut konvergent", "bedingt konvergent", "divergent", "nicht entscheidbar"],
      correctIndex: 0,
      explanation: "Absolut: \\(\\sum \\frac{1}{n(n+1)}\\) konvergent ⇒ absolut."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{1}{n(\\sqrt{n}+1)}\\).",
      choices: ["konvergent", "divergent", "bedingt konvergent", "nicht entscheidbar"],
      correctIndex: 1,
      explanation: "Term ~ \\(1/n^{3/2}\\)? Nein: ~ \\(1/n\\) ⇒ divergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{\\ln(n+1)}{n^2}\\).",
      choices: ["konvergent", "divergent", "bedingt konvergent", "nicht entscheidbar"],
      correctIndex: 0,
      explanation: "\\(\\ln n\\) wächst langsam, Vergleich mit \\(1/n^{3/2}\\) ⇒ konvergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{\\ln n}{n}\\).",
      choices: ["konvergent", "divergent", "bedingt konvergent", "nicht entscheidbar"],
      correctIndex: 1,
      explanation: "Vergleich mit harmonischer Reihe ⇒ divergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\left(\\frac{n+1}{n}\\right)^n\\).",
      choices: ["konvergent", "divergent", "bedingt konvergent", "nicht entscheidbar"],
      correctIndex: 1,
      explanation: "Glied ~ e ⇒ Gliedtest ⇒ divergent."
    },
    {
      question: "Untersuchen Sie: \\(\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n+(-1)^n}\\).",
      choices: ["absolut konvergent", "bedingt konvergent", "divergent", "nicht entscheidbar"],
      correctIndex: 1,
      explanation: "Betrag \\(\\sim 1/n\\) ⇒ nicht absolut. Alternierend und Glied \\(\\to0\\) (mit Monotonie ab großem \\(n\\)) ⇒ Leibniz ⇒ bedingt."
    }
  ]
});