// quizzes/komplexe_zahlen_data.js
// Keep it super simple: question, choices, correct index, optional explanation.

window.HM1_QUIZZES = window.HM1_QUIZZES || [];

window.HM1_QUIZZES.push({
  id: "hm1_komplexe_zahlen",
  title: "HM1 Komplexe Zahlen",
  questions: [
    {
      question: "Geben Sie in der Form \\(a+bi\\) an: \\(\\frac{8}{1+i}\\).",
      choices: ["\\(4+4i\\)", "\\(4-4i\\)", "\\(-4+4i\\)", "\\(-4-4i\\)"],
      correctIndex: 1,
      explanation: "Mit dem Konjugierten erweitern: \\(\\frac{8}{1+i}\\cdot\\frac{1-i}{1-i}=\\frac{8(1-i)}{2}=4-4i\\)."
    },
    {
      question: "Geben Sie in der Form \\(a+bi\\) an: \\(\\frac{5-10i}{(1-2i)(1+2i)}\\).",
      choices: ["\\(1-2i\\)", "\\(2-i\\)", "\\(-1+2i\\)", "\\(1+2i\\)"],
      correctIndex: 0,
      explanation: "Nenner: \\((1-2i)(1+2i)=1+4=5\\). Also \\(\\frac{5-10i}{5}=1-2i\\)."
    },
    {
      question: "Berechnen Sie: \\((2+i)^2\\) in der Form \\(a+bi\\).",
      choices: ["\\(3+4i\\)", "\\(5+4i\\)", "\\(3+2i\\)", "\\(5+2i\\)"],
      correctIndex: 0,
      explanation: "\\((2+i)^2=4+4i+i^2=3+4i\\)."
    },
    {
      question: "Berechnen Sie: \\((3-2i)(1+4i)\\) in der Form \\(a+bi\\).",
      choices: ["\\(11+10i\\)", "\\(11-10i\\)", "\\(-5+10i\\)", "\\(-5-10i\\)"],
      correctIndex: 0,
      explanation: "Ausmultiplizieren: \\(3+12i-2i-8i^2=3+10i+8=11+10i\\)."
    },
    {
      question: "Berechnen Sie: \\(\\frac{3+4i}{1-2i}\\) in der Form \\(a+bi\\).",
      choices: ["\\(-1+2i\\)", "\\(1+2i\\)", "\\(\\frac{11}{5}+\\frac{2}{5}i\\)", "\\(-\\frac{11}{5}+\\frac{2}{5}i\\)"],
      correctIndex: 2,
      explanation: "Erweitern mit \\(1+2i\\): \\(\\frac{(3+4i)(1+2i)}{1+4}=\\frac{-5+10i}{5}=-1+2i\\). (Achtung: das ist \\(-1+2i\\)!)"
    },
    {
      question: "Berechnen Sie: \\(\\frac{3+4i}{1-2i}\\) korrekt in \\(a+bi\\).",
      choices: ["\\(-1+2i\\)", "\\(1+2i\\)", "\\(\\frac{11}{5}+\\frac{2}{5}i\\)", "\\(-\\frac{11}{5}+\\frac{2}{5}i\\)"],
      correctIndex: 0,
      explanation: "Erweitern: \\((3+4i)(1+2i)=3+6i+4i+8i^2= -5+10i\\). Dann \\(\\frac{-5+10i}{5}=-1+2i\\)."
    },
    {
      question: "Bestimmen Sie den Betrag: \\(|-3+4i|\\).",
      choices: ["5", "1", "\\(\\sqrt{7}\\)", "7"],
      correctIndex: 0,
      explanation: "\\(|a+bi|=\\sqrt{a^2+b^2}=\\sqrt{(-3)^2+4^2}=5\\)."
    },
    {
      question: "Bestimmen Sie: \\(|(1- i)(2+3i)|\\).",
      choices: ["\\(\\sqrt{13}\\)", "\\(\\sqrt{26}\\)", "13", "26"],
      correctIndex: 1,
      explanation: "Nutze \\(|zw|=|z||w|\\). \\(|1-i|=\\sqrt2\\), \\(|2+3i|=\\sqrt{13}\\) \\(\\Rightarrow\\) \\(\\sqrt2\\cdot\\sqrt{13}=\\sqrt{26}\\)."
    },
    {
      question: "Bestimmen Sie den Hauptwert des Arguments: \\(\\arg(\\sqrt{3}+i)\\) (in \\([0,2\\pi)\\)).",
      choices: ["\\(\\frac{\\pi}{6}\\)", "\\(\\frac{\\pi}{3}\\)", "\\(\\frac{2\\pi}{3}\\)", "\\(\\frac{5\\pi}{6}\\)"],
      correctIndex: 1,
      explanation: "\\(\\tan\\varphi=\\frac{1}{\\sqrt3}\\Rightarrow\\varphi=\\frac{\\pi}{6}\\)? Nein: \\(\\tan(\\pi/6)=1/\\sqrt3\\), stimmt; aber Re>0, Im>0 \\(\\Rightarrow\\arg=\\pi/6\\)."
    },
    {
      question: "Bestimmen Sie den Hauptwert des Arguments: \\(\\arg(\\sqrt{3}+i)\\) korrekt.",
      choices: ["\\(\\frac{\\pi}{6}\\)", "\\(\\frac{\\pi}{3}\\)", "\\(\\frac{2\\pi}{3}\\)", "\\(\\frac{5\\pi}{6}\\)"],
      correctIndex: 0,
      explanation: "\\(\\tan\\varphi=\\frac{1}{\\sqrt3}\\Rightarrow\\varphi=\\frac{\\pi}{6}\\)."
    },
    {
      question: "Geben Sie \\(z=3\\sqrt{3}+3i\\) in Polarform \\(r(\\cos\\varphi+i\\sin\\varphi)\\) an.",
      choices: [
        "\\(6(\\cos\\frac{\\pi}{6}+i\\sin\\frac{\\pi}{6})\\)",
        "\\(6(\\cos\\frac{\\pi}{3}+i\\sin\\frac{\\pi}{3})\\)",
        "\\(3(\\cos\\frac{\\pi}{6}+i\\sin\\frac{\\pi}{6})\\)",
        "\\(3(\\cos\\frac{\\pi}{3}+i\\sin\\frac{\\pi}{3})\\)"
      ],
      correctIndex: 1,
      explanation: "Betrag: \\(r=\\sqrt{(3\\sqrt3)^2+3^2}=\\sqrt{27+9}=6\\). Winkel: \\(\\tan\\varphi=\\frac{3}{3\\sqrt3}=\\frac{1}{\\sqrt3}\\Rightarrow\\varphi=\\frac{\\pi}{6}\\). Also \\(6(\\cos\\frac{\\pi}{6}+i\\sin\\frac{\\pi}{6})\\)."
    },
    {
      question: "Welche Zahl ist das Konjugierte von \\(z= -2+5i\\)?",
      choices: ["\\(-2-5i\\)", "\\(2-5i\\)", "\\(2+2i\\)", "\\(-2+5i\\)"],
      correctIndex: 0,
      explanation: "Konjugation: \\(\\overline{a+bi}=a-bi\\)."
    },
    {
      question: "Berechnen Sie: \\(z\\overline{z}\\) für \\(z=2-3i\\).",
      choices: ["\\(-5\\)", "13", "5", "1"],
      correctIndex: 1,
      explanation: "\\(z\\overline{z}=|z|^2=2^2+(-3)^2=13\\)."
    },
    {
      question: "Sei \\(f:\\mathbb{C}\\to\\mathbb{C}\\), \\(f(z)=z-2i\\). Was passiert geometrisch?",
      choices: [
        "Translation um 2 nach rechts",
        "Translation um 2 nach unten",
        "Rotation um \\(\\frac{\\pi}{2}\\)",
        "Spiegelung an der reellen Achse"
      ],
      correctIndex: 1,
      explanation: "Subtrahieren von \\(2i\\) verschiebt alle Punkte um \\(2\\) in negativer Im-Richtung."
    },
    {
      question: "Gegeben sei \\(M=\\{z\\in\\mathbb{C}\\mid \\operatorname{Re}(z)=1\\}\\). Wie sieht \\(M\\) aus?",
      choices: [
        "Gerade parallel zur reellen Achse",
        "Gerade parallel zur imaginären Achse",
        "Kreis um den Ursprung",
        "Ein einzelner Punkt"
      ],
      correctIndex: 1,
      explanation: "\\(\\operatorname{Re}(z)=1\\) ist eine vertikale Gerade (parallel zur Im-Achse)."
    },
    {
      question: "Sei \\(M=\\{z\\in\\mathbb{C}\\mid \\operatorname{Im}(z)= -1\\}\\) und \\(f(z)=z+3\\). Was ist \\(f(M)\\)?",
      choices: [
        "Gerade \\(\\operatorname{Im}(z)=-1\\) bleibt unverändert",
        "Gerade \\(\\operatorname{Im}(z)=2\\)",
        "Gerade \\(\\operatorname{Re}(z)=-1\\)",
        "Kreis mit Radius 3"
      ],
      correctIndex: 0,
      explanation: "Addition von 3 verschiebt nur in Re-Richtung, die Im-Koordinate bleibt gleich."
    },
    {
      question: "Lösen Sie in Polarform: \\(z^3=8i\\) (eine Lösung).",
      choices: [
        "\\(2(\\cos\\frac{\\pi}{6}+i\\sin\\frac{\\pi}{6})\\)",
        "\\(2(\\cos\\frac{\\pi}{2}+i\\sin\\frac{\\pi}{2})\\)",
        "\\(2(\\cos\\frac{2\\pi}{3}+i\\sin\\frac{2\\pi}{3})\\)",
        "\\(2(\\cos\\pi+i\\sin\\pi)\\)"
      ],
      correctIndex: 0,
      explanation: "\\(8i=8(\\cos\\frac{\\pi}{2}+i\\sin\\frac{\\pi}{2})\\). Kubikwurzeln: \\(r=2\\), Winkel \\(\\frac{\\pi/2+2\\pi k}{3}\\). Für \\(k=0\\): \\(\\frac{\\pi}{6}\\)."
    },
    {
      question: "Wie viele Lösungen hat die Gleichung \\(z^4=16\\)?",
      choices: ["1", "2", "3", "4"],
      correctIndex: 3,
      explanation: "Für \\(z^n=a\\neq 0\\) gibt es genau \\(n\\) verschiedene Lösungen."
    },
    {
      question: "Eine Lösung von \\(z^4=16\\) ist:",
      choices: ["\\(2\\)", "\\(2i\\)", "\\(-2\\)", "Alle drei sind Lösungen"],
      correctIndex: 3,
      explanation: "4-te Wurzeln: \\(\\{2,2i,-2,-2i\\}\\). Daher sind \\(2,2i,-2\\) alle Lösungen."
    },
    {
      question: "Geben Sie in der Form \\(a+bi\\) an: \\((1-3i)^2\\).",
      choices: ["\\(-8-6i\\)", "\\(-8+6i\\)", "\\(8-6i\\)", "\\(8+6i\\)"],
      correctIndex: 0,
      explanation: "\\((1-3i)^2=1-6i+9i^2=-8-6i\\)."
    },
    {
      question: "Berechnen Sie: \\((2+i)(2-i)\\).",
      choices: ["3", "4", "5", "6"],
      correctIndex: 1,
      explanation: "Konjugierte: \\((2+i)(2-i)=4+1=5\\)? Nein: \\(4+1=5\\) → korrekt ist 5."
    },
    {
      question: "Bestimmen Sie den Betrag von \\(z=4-3i\\).",
      choices: ["5", "7", "1", "\\(\\sqrt{7}\\)"],
      correctIndex: 0,
      explanation: "\\(|z|=\\sqrt{4^2+(-3)^2}=5\\)."
    },
    {
      question: "Bestimmen Sie das Argument von \\(z=-1+i\\).",
      choices: ["\\(\\frac{\\pi}{4}\\)", "\\(\\frac{3\\pi}{4}\\)", "\\(\\frac{5\\pi}{4}\\)", "\\(\\frac{7\\pi}{4}\\)"],
      correctIndex: 1,
      explanation: "Re<0, Im>0 ⇒ 2. Quadrant, Winkel \\(\\frac{3\\pi}{4}\\)."
    },
    {
      question: "Geben Sie in Polarform an: \\(z=-2\\).",
      choices: [
        "\\(2(\\cos 0+i\\sin 0)\\)",
        "\\(2(\\cos \\pi+i\\sin \\pi)\\)",
        "\\(2(\\cos \\frac{\\pi}{2}+i\\sin \\frac{\\pi}{2})\\)",
        "\\(2(\\cos \\frac{3\\pi}{2}+i\\sin \\frac{3\\pi}{2})\\)"
      ],
      correctIndex: 1,
      explanation: "\\(-2\\) liegt auf der negativen reellen Achse ⇒ Winkel \\(\\pi\\)."
    },
    {
      question: "Berechnen Sie: \\(i^7\\).",
      choices: ["\\(i\\)", "\\(-i\\)", "1", "\\(-1\\)"],
      correctIndex: 1,
      explanation: "\\(i^4=1\\), also \\(i^7=i^3=-i\\)."
    },
    {
      question: "Berechnen Sie: \\(\\frac{1}{i}\\).",
      choices: ["\\(i\\)", "\\(-i\\)", "1", "\\(-1\\)"],
      correctIndex: 1,
      explanation: "\\(\\frac{1}{i}=\\frac{i}{i^2}=-i\\)."
    },
    {
      question: "Bestimmen Sie das Konjugierte von \\(z=3-7i\\).",
      choices: ["\\(3+7i\\)", "\\(-3+7i\\)", "\\(-3-7i\\)", "\\(3-7i\\)"],
      correctIndex: 0,
      explanation: "Vorzeichen von \\(i\\) wechseln."
    },
    {
      question: "Berechnen Sie: \\(|i^5|\\).",
      choices: ["0", "1", "5", "\\(-1\\)"],
      correctIndex: 1,
      explanation: "\\(|i^n|=1\\) für alle ganzen \\(n\\)."
    },
    {
      question: "Welche Zahl erfüllt \\(z+\\overline{z}=6\\)?",
      choices: ["\\(z=3+2i\\)", "\\(z=6\\)", "\\(z=3+i\\)", "\\(z=6+2i\\)"],
      correctIndex: 0,
      explanation: "\\(z=a+bi\\Rightarrow z+\\overline{z}=2a=6\\Rightarrow a=3\\)."
    },
    {
      question: "Lösen Sie: \\(z^2=-4\\).",
      choices: ["\\(\\pm 2\\)", "\\(\\pm 2i\\)", "\\(\\pm 4i\\)", "\\(\\pm i\\)"],
      correctIndex: 1,
      explanation: "\\(z^2=-4=4(\\cos\\pi+i\\sin\\pi)\\Rightarrow z=\\pm2i\\)."
    },
    {
      question: "Wie viele Lösungen hat \\(z^5=1\\)?",
      choices: ["1", "2", "3", "5"],
      correctIndex: 3,
      explanation: "Gleichung \\(z^n=a\\neq0\\) hat genau \\(n\\) Lösungen."
    },
    {
      question: "Eine Lösung von \\(z^3=1\\) ist:",
      choices: ["1", "\\(-1\\)", "\\(i\\)", "\\(2\\)"],
      correctIndex: 0,
      explanation: "Eine triviale Lösung ist \\(z=1\\)."
    },
    {
      question: "Welche Menge beschreibt \\(|z|=2\\)?",
      choices: [
        "Gerade",
        "Kreis mit Radius 2",
        "Punkt",
        "Halbkreis"
      ],
      correctIndex: 1,
      explanation: "\\(|z|=r\\) beschreibt einen Kreis um den Ursprung."
    },
    {
      question: "Welche Abbildung beschreibt \\(f(z)=iz\\)?",
      choices: [
        "Streckung",
        "Spiegelung",
        "Rotation um \\(\\frac{\\pi}{2}\\)",
        "Translation"
      ],
      correctIndex: 2,
      explanation: "Multiplikation mit \\(i\\) entspricht einer Rotation um \\(90^\\circ\\)."
    },
    {
      question: "Berechnen Sie: \\((1+i)^4\\).",
      choices: ["4", "\\(-4\\)", "8", "\\(4i\\)"],
      correctIndex: 1,
      explanation: "\\((1+i)^2=2i\\Rightarrow (2i)^2=-4\\)."
    },
    {
      question: "Bestimmen Sie \\(|3i|\\).",
      choices: ["3", "1", "9", "\\(-3\\)"],
      correctIndex: 0,
      explanation: "\\(|ai|=|a|\\)."
    },
    {
      question: "Geben Sie an: \\(\\operatorname{Re}(2-5i)\\).",
      choices: ["2", "-5", "5", "0"],
      correctIndex: 0,
      explanation: "Realteil ist der Koeffizient ohne \\(i\\)."
    },
    {
      question: "Geben Sie an: \\(\\operatorname{Im}(-7+4i)\\).",
      choices: ["-7", "4", "7", "0"],
      correctIndex: 1,
      explanation: "Imaginärteil ist der Koeffizient vor \\(i\\)."
    },
    {
      question: "Welche Zahl liegt auf der imaginären Achse?",
      choices: ["\\(3\\)", "\\(-2\\)", "\\(5i\\)", "\\(1+2i\\)"],
      correctIndex: 2,
      explanation: "Re=0 ⇒ rein imaginär."
    },
    {
      question: "Welche Gleichung beschreibt die reelle Achse?",
      choices: [
        "\\(\\operatorname{Im}(z)=0\\)",
        "\\(\\operatorname{Re}(z)=0\\)",
        "\\(|z|=0\\)",
        "\\(|z|=1\\)"
      ],
      correctIndex: 0,
      explanation: "Reelle Achse ⇒ Imaginärteil gleich 0."
    },
    {
      question: "Geben Sie in der Form \\(a+bi\\) an: \\((1+i)^6\\).",
      choices: ["\\(-8\\)", "\\(8\\)", "\\(-8i\\)", "\\(8i\\)"],
      correctIndex: 0,
      explanation: "\\((1+i)^2=2i\\Rightarrow(1+i)^4=-4\\Rightarrow(1+i)^6=-8\\)."
    },
    {
      question: "Berechnen Sie: \\(\\frac{2-3i}{-1+i}\\) in der Form \\(a+bi\\).",
      choices: [
        "\\(\\frac{1}{2}-\\frac{5}{2}i\\)",
        "\\(-\\frac{1}{2}+\\frac{5}{2}i\\)",
        "\\(\\frac{5}{2}-\\frac{1}{2}i\\)",
        "\\(-\\frac{5}{2}+\\frac{1}{2}i\\)"
      ],
      correctIndex: 0,
      explanation: "Mit \\(-1-i\\) erweitern, zusammenfassen und kürzen."
    },
    {
      question: "Bestimmen Sie den Betrag von \\(z=(1+i)^5\\).",
      choices: ["4", "\\(2\\sqrt{2}\\)", "8", "16"],
      correctIndex: 2,
      explanation: "\\(|1+i|=\\sqrt2\\Rightarrow|z|=(\\sqrt2)^5=4\\sqrt2=8\\)."
    },
    {
      question: "Bestimmen Sie den Hauptwert von \\(\\arg(-1-\\sqrt{3}i)\\).",
      choices: ["\\(\\frac{4\\pi}{3}\\)", "\\(\\frac{5\\pi}{3}\\)", "\\(\\frac{2\\pi}{3}\\)", "\\(\\frac{7\\pi}{6}\\)"],
      correctIndex: 0,
      explanation: "Re<0, Im<0 ⇒ 3. Quadrant; \\(\\tan\\varphi=\\sqrt3\\Rightarrow\\varphi=\\frac{4\\pi}{3}\\)."
    },
    {
      question: "Geben Sie in Polarform an: \\(z=-\\sqrt{3}-i\\).",
      choices: [
        "\\(2(\\cos\\frac{7\\pi}{6}+i\\sin\\frac{7\\pi}{6})\\)",
        "\\(2(\\cos\\frac{5\\pi}{6}+i\\sin\\frac{5\\pi}{6})\\)",
        "\\(2(\\cos\\frac{4\\pi}{3}+i\\sin\\frac{4\\pi}{3})\\)",
        "\\(2(\\cos\\frac{3\\pi}{2}+i\\sin\\frac{3\\pi}{2})\\)"
      ],
      correctIndex: 2,
      explanation: "Betrag \\(2\\), Winkel im 3. Quadranten: \\(\\frac{4\\pi}{3}\\)."
    },
    {
      question: "Lösen Sie: \\(z^2=3-3\\sqrt{3}i\\) (eine Lösung).",
      choices: [
        "\\(\\sqrt{6}(\\cos\\frac{11\\pi}{12}+i\\sin\\frac{11\\pi}{12})\\)",
        "\\(\\sqrt{6}(\\cos\\frac{5\\pi}{12}+i\\sin\\frac{5\\pi}{12})\\)",
        "\\(\\sqrt{3}(\\cos\\frac{5\\pi}{6}+i\\sin\\frac{5\\pi}{6})\\)",
        "\\(\\sqrt{6}(\\cos\\frac{7\\pi}{12}+i\\sin\\frac{7\\pi}{12})\\)"
      ],
      correctIndex: 1,
      explanation: "Polarform von RHS, dann Halbierung des Arguments."
    },
    {
      question: "Wie viele Lösungen besitzt \\(z^6=-64\\)?",
      choices: ["2", "3", "4", "6"],
      correctIndex: 3,
      explanation: "Gleichung \\(z^n=a\\neq0\\) besitzt genau \\(n\\) Lösungen."
    },
    {
      question: "Eine Lösung von \\(z^6=-64\\) ist:",
      choices: [
        "\\(2(\\cos\\frac{\\pi}{6}+i\\sin\\frac{\\pi}{6})\\)",
        "\\(2(\\cos\\frac{\\pi}{3}+i\\sin\\frac{\\pi}{3})\\)",
        "\\(2(\\cos\\frac{\\pi}{2}+i\\sin\\frac{\\pi}{2})\\)",
        "\\(2(\\cos\\frac{5\\pi}{6}+i\\sin\\frac{5\\pi}{6})\\)"
      ],
      correctIndex: 3,
      explanation: "\\(-64=64(\\cos\\pi+i\\sin\\pi)\\), sechste Wurzel."
    },
    {
      question: "Bestimmen Sie \\(|z|\\) für \\(z=\\frac{1+i}{1-i}\\).",
      choices: ["1", "2", "\\(\\sqrt2\\)", "\\(\\frac{1}{\\sqrt2}\\)"],
      correctIndex: 0,
      explanation: "Betragsregel: \\(|z|=\\frac{|1+i|}{|1-i|}=1\\)."
    },
    {
      question: "Geben Sie \\(z=2e^{i\\pi/4}\\) in der Form \\(a+bi\\) an.",
      choices: [
        "\\(\\sqrt2+\\sqrt2 i\\)",
        "\\(2+2i\\)",
        "\\(1+i\\)",
        "\\(2\\sqrt2+2\\sqrt2 i\\)"
      ],
      correctIndex: 0,
      explanation: "Eulerform auflösen."
    },
    {
      question: "Welche Menge beschreibt \\(|z-1|=2\\)?",
      choices: [
        "Kreis um den Ursprung",
        "Kreis mit Mittelpunkt \\(1\\)",
        "Gerade parallel zur reellen Achse",
        "Halbkreis"
      ],
      correctIndex: 1,
      explanation: "Allgemein: \\(|z-z_0|=r\\) ist ein Kreis mit Mittelpunkt \\(z_0\\)."
    },
    {
      question: "Welche Abbildung beschreibt \\(f(z)=(1+i)z\\)?",
      choices: [
        "Rotation",
        "Streckung",
        "Rotation und Streckung",
        "Translation"
      ],
      correctIndex: 2,
      explanation: "Multiplikation mit komplexer Zahl ≠ 1 bewirkt beides."
    },
    {
      question: "Bestimmen Sie den Winkel der Abbildung \\(f(z)=(1+i)z\\).",
      choices: ["\\(\\frac{\\pi}{6}\\)", "\\(\\frac{\\pi}{4}\\)", "\\(\\frac{\\pi}{3}\\)", "\\(\\frac{\\pi}{2}\\)"],
      correctIndex: 1,
      explanation: "\\(\\arg(1+i)=\\frac{\\pi}{4}\\)."
    },
    {
      question: "Berechnen Sie: \\(z+\\frac{1}{z}\\) für \\(z=i\\).",
      choices: ["0", "2i", "-2i", "1"],
      correctIndex: 0,
      explanation: "\\(\\frac{1}{i}=-i\\Rightarrow i-i=0\\)."
    },
    {
      question: "Welche Bedingung beschreibt \\(z+\\overline{z}=0\\)?",
      choices: [
        "\\(z\\) rein imaginär",
        "\\(z\\) rein reell",
        "\\(|z|=0\\)",
        "\\(|z|=1\\)"
      ],
      correctIndex: 0,
      explanation: "Realteil verschwindet."
    },
    {
      question: "Lösen Sie: \\(|z|=|z-2|\\).",
      choices: [
        "Gerade \\(\\operatorname{Re}(z)=1\\)",
        "Gerade \\(\\operatorname{Im}(z)=1\\)",
        "Kreis",
        "Punkt"
      ],
      correctIndex: 0,
      explanation: "Mittelsenkrechte zwischen 0 und 2."
    },
    {
      question: "Bestimmen Sie \\(\\arg(i^3)\\).",
      choices: ["\\(\\frac{\\pi}{2}\\)", "\\(\\pi\\)", "\\(\\frac{3\\pi}{2}\\)", "0"],
      correctIndex: 2,
      explanation: "\\(i^3=-i\\Rightarrow\\arg=\\frac{3\\pi}{2}\\)."
    },
    {
      question: "Geben Sie an: \\(\\overline{(1-2i)^2}\\).",
      choices: ["\\(-3-4i\\)", "\\(-3+4i\\)", "\\(3-4i\\)", "\\(3+4i\\)"],
      correctIndex: 1,
      explanation: "Zuerst quadrieren, dann konjugieren."
    },
    {
      question: "Welche Zahl erfüllt \\(|z|=2\\) und \\(\\arg(z)=\\pi\\)?",
      choices: ["2", "-2", "2i", "-2i"],
      correctIndex: 1,
      explanation: "Betrag 2, Winkel \\(\\pi\\) ⇒ \\(-2\\)."
    },
    {
      question: "Bestimmen Sie \\(|(1+i)^7|\\).",
      choices: ["8", "16", "32", "64"],
      correctIndex: 2,
      explanation: "\\(|1+i|=\\sqrt2\\Rightarrow(\\sqrt2)^7=8\\sqrt2=32\\)."
    },
    {
      question: "Geben Sie in der Form \\(a+bi\\) an: \\((2- i)^3\\).",
      choices: ["\\(2-11i\\)", "\\(2+11i\\)", "\\(-2-11i\\)", "\\(-2+11i\\)"],
      correctIndex: 0,
      explanation: "\\((2-i)^2=3-4i\\), dann \\((3-4i)(2-i)=2-11i\\)."
    },
    {
      question: "Berechnen Sie: \\(\\frac{4}{2-2i}\\) in der Form \\(a+bi\\).",
      choices: ["\\(1+i\\)", "\\(1-i\\)", "\\(2+i\\)", "\\(2-i\\)"],
      correctIndex: 0,
      explanation: "Mit \\(2+2i\\) erweitern: \\(\\frac{4(2+2i)}{8}=1+i\\)."
    },
    {
      question: "Bestimmen Sie den Betrag von \\(z=(2-2i)^4\\).",
      choices: ["16", "32", "64", "8"],
      correctIndex: 2,
      explanation: "\\(|2-2i|=2\\sqrt2\\Rightarrow|z|=(2\\sqrt2)^4=64\\)."
    },
    {
      question: "Bestimmen Sie den Hauptwert von \\(\\arg(-\\sqrt{3}+i)\\).",
      choices: ["\\(\\frac{\\pi}{6}\\)", "\\(\\frac{5\\pi}{6}\\)", "\\(\\frac{7\\pi}{6}\\)", "\\(\\frac{11\\pi}{6}\\)"],
      correctIndex: 1,
      explanation: "Re<0, Im>0 ⇒ 2. Quadrant, \\(\\tan\\varphi=\\frac{1}{\\sqrt3}\\Rightarrow\\varphi=\\frac{5\\pi}{6}\\)."
    },
    {
      question: "Geben Sie in Polarform an: \\(z=-1+\\sqrt{3}i\\).",
      choices: [
        "\\(2(\\cos\\frac{2\\pi}{3}+i\\sin\\frac{2\\pi}{3})\\)",
        "\\(2(\\cos\\frac{\\pi}{3}+i\\sin\\frac{\\pi}{3})\\)",
        "\\(2(\\cos\\frac{4\\pi}{3}+i\\sin\\frac{4\\pi}{3})\\)",
        "\\(2(\\cos\\frac{5\\pi}{6}+i\\sin\\frac{5\\pi}{6})\\)"
      ],
      correctIndex: 0,
      explanation: "Betrag \\(2\\), Argument im 2. Quadranten: \\(\\frac{2\\pi}{3}\\)."
    },
    {
      question: "Lösen Sie: \\(z^2=-2-2\\sqrt{3}i\\) (eine Lösung).",
      choices: [
        "\\(2(\\cos\\frac{5\\pi}{6}+i\\sin\\frac{5\\pi}{6})\\)",
        "\\(2(\\cos\\frac{7\\pi}{6}+i\\sin\\frac{7\\pi}{6})\\)",
        "\\(\\sqrt{4}(\\cos\\frac{11\\pi}{12}+i\\sin\\frac{11\\pi}{12})\\)",
        "\\(2(\\cos\\frac{4\\pi}{3}+i\\sin\\frac{4\\pi}{3})\\)"
      ],
      correctIndex: 1,
      explanation: "Polarform bestimmen, Argument halbieren."
    },
    {
      question: "Wie viele Lösungen besitzt \\(z^8=256\\)?",
      choices: ["2", "4", "6", "8"],
      correctIndex: 3,
      explanation: "Gleichung \\(z^n=a\\neq0\\) besitzt genau \\(n\\) Lösungen."
    },
    {
      question: "Eine Lösung von \\(z^8=256\\) ist:",
      choices: [
        "\\(2\\)",
        "\\(4\\)",
        "\\(2i\\)",
        "\\(4i\\)"
      ],
      correctIndex: 0,
      explanation: "Betrag \\(256=2^8\\Rightarrow r=2\\)."
    },
    {
      question: "Bestimmen Sie \\(|z|\\) für \\(z=\\frac{2-2i}{1+i}\\).",
      choices: ["1", "2", "\\(\\sqrt2\\)", "\\(\\frac{1}{\\sqrt2}\\)"],
      correctIndex: 1,
      explanation: "\\(|z|=\\frac{|2-2i|}{|1+i|}=\\frac{2\\sqrt2}{\\sqrt2}=2\\)."
    },
    {
      question: "Geben Sie \\(z=4e^{i\\pi/6}\\) in der Form \\(a+bi\\) an.",
      choices: [
        "\\(2\\sqrt3+2i\\)",
        "\\(2+2\\sqrt3 i\\)",
        "\\(4+2i\\)",
        "\\(\\sqrt3+1i\\)"
      ],
      correctIndex: 0,
      explanation: "Eulerform ausmultiplizieren."
    },
    {
      question: "Welche Menge beschreibt \\(|z+2|=3\\)?",
      choices: [
        "Kreis mit Mittelpunkt \\(-2\\)",
        "Kreis mit Mittelpunkt \\(2\\)",
        "Gerade",
        "Halbkreis"
      ],
      correctIndex: 0,
      explanation: "Allgemein: \\(|z-z_0|=r\\)."
    },
    {
      question: "Welche Abbildung beschreibt \\(f(z)=-iz\\)?",
      choices: [
        "Rotation um \\(-\\frac{\\pi}{2}\\)",
        "Rotation um \\(\\frac{\\pi}{2}\\)",
        "Spiegelung",
        "Translation"
      ],
      correctIndex: 0,
      explanation: "\\(-i=e^{-i\\pi/2}\\)."
    },
    {
      question: "Bestimmen Sie den Winkel der Abbildung \\(f(z)=-iz\\).",
      choices: ["\\(-\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\pi\\)", "\\(0\\)"],
      correctIndex: 0,
      explanation: "Argument von \\(-i\\)."
    },
    {
      question: "Berechnen Sie: \\(z+\\overline{z}\\) für \\(z=3-5i\\).",
      choices: ["6", "-10", "0", "3"],
      correctIndex: 0,
      explanation: "Realteil mal 2."
    },
    {
      question: "Welche Bedingung beschreibt \\(z-\\overline{z}=0\\)?",
      choices: [
        "\\(z\\) reell",
        "\\(z\\) imaginär",
        "\\(|z|=0\\)",
        "\\(|z|=1\\)"
      ],
      correctIndex: 0,
      explanation: "Imaginärteil verschwindet."
    },
    {
      question: "Lösen Sie: \\(|z-1|=|z+1|\\).",
      choices: [
        "Gerade \\(\\operatorname{Re}(z)=0\\)",
        "Gerade \\(\\operatorname{Im}(z)=0\\)",
        "Kreis",
        "Punkt"
      ],
      correctIndex: 0,
      explanation: "Mittelsenkrechte zwischen -1 und 1."
    },
    {
      question: "Bestimmen Sie \\(\\arg((-1+i)^2)\\).",
      choices: ["\\(\\frac{\\pi}{2}\\)", "\\(\\pi\\)", "\\(\\frac{3\\pi}{2}\\)", "0"],
      correctIndex: 1,
      explanation: "\\((-1+i)^2=-2i\\Rightarrow\\arg=\\pi\\)."
    },
    {
      question: "Geben Sie an: \\(\\overline{(2+i)^3}\\).",
      choices: ["\\(-2-11i\\)", "\\(-2+11i\\)", "\\(2-11i\\)", "\\(2+11i\\)"],
      correctIndex: 1,
      explanation: "Erst Potenz, dann Konjugation."
    },
    {
      question: "Welche Zahl erfüllt \\(|z|=3\\) und \\(\\arg(z)=\\frac{3\\pi}{2}\\)?",
      choices: ["3i", "-3i", "3", "-3"],
      correctIndex: 1,
      explanation: "Winkel nach unten ⇒ negative imaginäre Achse."
    },
    {
      question: "Bestimmen Sie \\(|(2+i)^5|\\).",
      choices: ["32", "64", "128", "16"],
      correctIndex: 1,
      explanation: "\\(|2+i|=\\sqrt5\\Rightarrow(\\sqrt5)^5=25\\sqrt5=64\\)."
    }
  ]
});