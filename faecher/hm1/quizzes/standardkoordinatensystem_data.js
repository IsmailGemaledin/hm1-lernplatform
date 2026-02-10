window.HM1_QUIZZES = window.HM1_QUIZZES || [];

HM1_QUIZZES.push({
  id: "standardkoordinatensystem",
  title: "Standardkoordinatensystem",
  questions: [
    {
      question: "Gegeben sind \\(F=\\begin{pmatrix}1&0&0\\\\0&2&0\\\\0&0&3\\end{pmatrix}\\), \\(Q=\\begin{pmatrix}1\\\\-1\\\\2\\end{pmatrix}\\) und \\(P_F=\\begin{pmatrix}2\\\\1\\\\0\\end{pmatrix}\\). Bestimmen Sie \\(P_E=F\\,P_F+Q\\).",
      choices: [
        "\\(\\begin{pmatrix}3\\\\1\\\\2\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}3\\\\0\\\\2\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}2\\\\1\\\\2\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}1\\\\1\\\\2\\end{pmatrix}\\)"
      ],
      correctIndex: 0,
      explanation: "Matrixprodukt: \\(F P_F=(2,2,0)^T\\). Dann \\(+Q\\Rightarrow (3,1,2)^T\\)."
    },
    {
      question: "Gegeben sind \\(F=\\begin{pmatrix}2&0&0\\\\0&1&0\\\\0&0&-1\\end{pmatrix}\\), \\(Q=\\begin{pmatrix}0\\\\2\\\\1\\end{pmatrix}\\) und \\(P_F=\\begin{pmatrix}1\\\\-2\\\\3\\end{pmatrix}\\). Bestimmen Sie \\(P_E\\).",
      choices: [
        "\\(\\begin{pmatrix}2\\\\0\\\\-2\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}2\\\\-2\\\\-2\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}1\\\\0\\\\-2\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}2\\\\0\\\\2\\end{pmatrix}\\)"
      ],
      correctIndex: 0,
      explanation: "\\(F P_F=(2,-2,-3)^T\\). Plus \\(Q=(0,2,1)^T\\) ergibt \\((2,0,-2)^T\\)."
    },
    {
      question: "Gegeben sind \\(F=\\begin{pmatrix}1&1&0\\\\0&1&1\\\\0&0&1\\end{pmatrix}\\), \\(Q=\\begin{pmatrix}0\\\\0\\\\0\\end{pmatrix}\\) und \\(P_F=\\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix}\\). Bestimmen Sie \\(P_E\\).",
      choices: [
        "\\(\\begin{pmatrix}3\\\\5\\\\3\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}3\\\\2\\\\1\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}6\\\\5\\\\3\\end{pmatrix}\\)"
      ],
      correctIndex: 0,
      explanation: "\\(F P_F=(1+2,2+3,3)^T=(3,5,3)^T\\)."
    },
    {
      question: "Gegeben \\(F=\\begin{pmatrix}1&0&0\\\\0&1&0\\\\0&0&1\\end{pmatrix}\\), \\(Q=\\begin{pmatrix}4\\\\-2\\\\1\\end{pmatrix}\\), \\(P_F=\\begin{pmatrix}-1\\\\3\\\\2\\end{pmatrix}\\). Bestimmen Sie \\(P_E\\).",
      choices: [
        "\\(\\begin{pmatrix}3\\\\1\\\\3\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}-5\\\\5\\\\1\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}4\\\\-2\\\\1\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}-1\\\\3\\\\2\\end{pmatrix}\\)"
      ],
      correctIndex: 0,
      explanation: "Identität: \\(P_E=P_F+Q=(3,1,3)^T\\)."
    },
    {
      question: "Gegeben \\(F=\\begin{pmatrix}3&0&0\\\\0&-2&0\\\\0&0&1\\end{pmatrix}\\), \\(Q=\\begin{pmatrix}1\\\\1\\\\1\\end{pmatrix}\\), \\(P_F=\\begin{pmatrix}1\\\\1\\\\1\\end{pmatrix}\\). Bestimmen Sie \\(P_E\\).",
      choices: [
        "\\(\\begin{pmatrix}4\\\\-1\\\\2\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}3\\\\-2\\\\1\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}2\\\\0\\\\2\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}4\\\\3\\\\2\\end{pmatrix}\\)"
      ],
      correctIndex: 0,
      explanation: "\\(F P_F=(3,-2,1)^T\\), plus \\(Q\\Rightarrow(4,-1,2)^T\\)."
    },
    {
      question: "Gegeben \\(F=\\begin{pmatrix}1&2&0\\\\0&1&0\\\\0&0&1\\end{pmatrix}\\), \\(Q=\\begin{pmatrix}-1\\\\0\\\\2\\end{pmatrix}\\), \\(P_F=\\begin{pmatrix}2\\\\-1\\\\3\\end{pmatrix}\\). Bestimmen Sie \\(P_E\\).",
      choices: [
        "\\(\\begin{pmatrix}-1\\\\-1\\\\5\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}1\\\\-1\\\\5\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}3\\\\-1\\\\5\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}1\\\\1\\\\5\\end{pmatrix}\\)"
      ],
      correctIndex: 1,
      explanation: "\\(F P_F=(2+2(-1),-1,3)^T=(0,-1,3)^T\\). Plus \\(Q\\Rightarrow(-1,-1,5)^T\\)."
    },
    {
      question: "Gegeben \\(F=\\begin{pmatrix}2&0&0\\\\0&2&0\\\\0&0&2\\end{pmatrix}\\), \\(Q=\\begin{pmatrix}0\\\\0\\\\0\\end{pmatrix}\\). Für welches \\(P_F\\) gilt \\(P_E=\\begin{pmatrix}2\\\\4\\\\6\\end{pmatrix}\\)?",
      choices: [
        "\\(\\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}2\\\\4\\\\6\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}0\\\\2\\\\3\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}1\\\\1\\\\1\\end{pmatrix}\\)"
      ],
      correctIndex: 0,
      explanation: "Da \\(P_E=2P_F\\), folgt \\(P_F=(1,2,3)^T\\)."
    },
    {
      question: "Gegeben \\(F=\\begin{pmatrix}1&0&0\\\\0&-1&0\\\\0&0&1\\end{pmatrix}\\), \\(Q=\\begin{pmatrix}0\\\\0\\\\0\\end{pmatrix}\\). Welche geometrische Bedeutung hat \\(\\kappa_{E\\leftarrow F}(u)=Fu+Q\\)?",
      choices: [
        "Spiegelung an der \\(x_1x_3\\)-Ebene",
        "Rotation um die \\(x_3\\)-Achse",
        "Translation um \\((0,1,0)\\)",
        "Streckung mit Faktor 2"
      ],
      correctIndex: 0,
      explanation: "Vorzeichenwechsel in \\(x_2\\) ⇒ Spiegelung an Ebene \\(x_2=0\\) (\\(x_1x_3\\)-Ebene)."
    },
    {
      question: "Gegeben \\(F=\\begin{pmatrix}0&-1&0\\\\1&0&0\\\\0&0&1\\end{pmatrix}\\), \\(Q=0\\). Welche Bedeutung hat \\(Fu\\)?",
      choices: [
        "Rotation um \\(90^\\circ\\) in der \\(x_1x_2\\)-Ebene",
        "Spiegelung an der \\(x_1\\)-Achse",
        "Streckung in \\(x_3\\)-Richtung",
        "Schiefspiegelung"
      ],
      correctIndex: 0,
      explanation: "Standard-Rotationsmatrix: \\((u_1,u_2)\\mapsto(-u_2,u_1)\\)."
    },
    {
      question: "Gegeben \\(F\\) invertierbar, \\(Q\\in\\mathbb{R}^3\\). Welche Formel ist korrekt für \\(\\kappa_{F\\leftarrow E}(v)\\)?",
      choices: [
        "\\(F^{-1}(v-Q)\\)",
        "\\(F(v-Q)\\)",
        "\\(F^{-1}(v+Q)\\)",
        "\\(Fv+Q\\)"
      ],
      correctIndex: 0,
      explanation: "Umkehrabbildung der affinen Abbildung \\(v=Fu+Q\\)."
    },
    {
      question: "Gegeben \\(F=\\begin{pmatrix}1&0&0\\\\0&2&0\\\\0&0&1\\end{pmatrix}\\), \\(Q=\\begin{pmatrix}1\\\\0\\\\0\\end{pmatrix}\\), \\(v=\\begin{pmatrix}3\\\\4\\\\5\\end{pmatrix}\\). Bestimmen Sie \\(u=\\kappa_{F\\leftarrow E}(v)=F^{-1}(v-Q)\\).",
      choices: [
        "\\(\\begin{pmatrix}2\\\\2\\\\5\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}4\\\\2\\\\5\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}2\\\\4\\\\5\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}2\\\\1\\\\5\\end{pmatrix}\\)"
      ],
      correctIndex: 0,
      explanation: "\\(v-Q=(2,4,5)^T\\), \\(F^{-1}=\\operatorname{diag}(1,1/2,1)\\) ⇒ \\((2,2,5)^T\\)."
    },
    {
      question: "Gegeben \\(F=\\begin{pmatrix}2&0&0\\\\0&1&0\\\\0&0&-2\\end{pmatrix}\\), \\(Q=\\begin{pmatrix}0\\\\1\\\\0\\end{pmatrix}\\), \\(v=\\begin{pmatrix}4\\\\2\\\\-4\\end{pmatrix}\\). Bestimmen Sie \\(u=F^{-1}(v-Q)\\).",
      choices: [
        "\\(\\begin{pmatrix}2\\\\1\\\\2\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}2\\\\1\\\\-2\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}4\\\\1\\\\2\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}2\\\\2\\\\2\\end{pmatrix}\\)"
      ],
      correctIndex: 0,
      explanation: "\\(v-Q=(4,1,-4)^T\\), \\(F^{-1}=\\operatorname{diag}(1/2,1,-1/2)\\) ⇒ \\((2,1,2)^T\\)."
    },
    {
      question: "Gegeben \\(F=\\begin{pmatrix}1&1&0\\\\0&1&0\\\\0&0&1\\end{pmatrix}\\), \\(Q=0\\), \\(v=\\begin{pmatrix}3\\\\2\\\\1\\end{pmatrix}\\). Bestimmen Sie \\(u=F^{-1}v\\).",
      choices: [
        "\\(\\begin{pmatrix}1\\\\2\\\\1\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}3\\\\-1\\\\1\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}2\\\\1\\\\1\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}5\\\\2\\\\1\\end{pmatrix}\\)"
      ],
      correctIndex: 0,
      explanation: "Aus \\(v_2=u_2=2\\), \\(v_1=u_1+u_2\\Rightarrow u_1=1\\), \\(u_3=1\\)."
    },
    {
      question: "Gegeben \\(F=\\begin{pmatrix}1&0&0\\\\0&1&0\\\\0&0&1\\end{pmatrix}\\), \\(Q=\\begin{pmatrix}2\\\\-1\\\\0\\end{pmatrix}\\). Bestimmen Sie \\(\\kappa_{F\\leftarrow E}(v)\\) in Abhängigkeit von \\(v\\).",
      choices: [
        "\\(v-Q\\)",
        "\\(v+Q\\)",
        "\\(Fv+Q\\)",
        "\\(F^{-1}v\\)"
      ],
      correctIndex: 0,
      explanation: "Bei \\(F=I\\) ist \\(u=v-Q\\)."
    },
    {
      question: "Gegeben \\(F\\) invertierbar, \\(Q\\neq 0\\). Welche Aussage ist korrekt?",
      choices: [
        "\\(\\kappa_{E\\leftarrow F}\\) ist linear",
        "\\(\\kappa_{E\\leftarrow F}\\) ist affin, aber nicht linear",
        "\\(\\kappa_{E\\leftarrow F}\\) ist nicht bijektiv",
        "\\(\\kappa_{E\\leftarrow F}\\) ist nur für \\(u\\in\\mathbb{R}^2\\) definiert"
      ],
      correctIndex: 1,
      explanation: "Durch \\(+Q\\) ist es eine affine Abbildung; linear nur bei \\(Q=0\\)."
    },
    {
      question: "Gegeben \\(F\\) invertierbar, \\(Q\\in\\mathbb{R}^3\\). Welche Bedingung garantiert, dass \\(\\kappa_{E\\leftarrow F}\\) bijektiv ist?",
      choices: [
        "\\(\\det(F)\\neq 0\\)",
        "\\(\\operatorname{tr}(F)\\neq 0\\)",
        "\\(Q\\neq 0\\)",
        "\\(F\\) symmetrisch"
      ],
      correctIndex: 0,
      explanation: "Bijektivität ⇔ linearer Teil invertierbar ⇔ \\(\\det(F)\\neq0\\)."
    },
    {
      question: "Gegeben \\(F=\\begin{pmatrix}1&0&0\\\\0&1&0\\\\0&0&1\\end{pmatrix}\\), \\(Q=\\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix}\\). Bestimmen Sie \\(P_F\\), falls \\(P_E=\\begin{pmatrix}4\\\\4\\\\6\\end{pmatrix}\\).",
      choices: [
        "\\(\\begin{pmatrix}3\\\\2\\\\3\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}5\\\\6\\\\9\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}4\\\\4\\\\6\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix}\\)"
      ],
      correctIndex: 0,
      explanation: "Bei \\(F=I\\): \\(P_F=P_E-Q=(3,2,3)^T\\)."
    },
    {
      question: "Gegeben \\(F=\\begin{pmatrix}2&0&0\\\\0&2&0\\\\0&0&2\\end{pmatrix}\\), \\(Q=\\begin{pmatrix}1\\\\1\\\\1\\end{pmatrix}\\). Bestimmen Sie \\(P_F\\), falls \\(P_E=\\begin{pmatrix}5\\\\3\\\\1\\end{pmatrix}\\).",
      choices: [
        "\\(\\begin{pmatrix}2\\\\1\\\\0\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}4\\\\2\\\\0\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}3\\\\1\\\\0\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}2\\\\2\\\\2\\end{pmatrix}\\)"
      ],
      correctIndex: 0,
      explanation: "\\(P_E-Q=(4,2,0)^T\\). Dann \\(P_F=\\frac12(4,2,0)^T=(2,1,0)^T\\)."
    },
    {
      question: "Gegeben \\(F=\\begin{pmatrix}1&0&0\\\\0&-1&0\\\\0&0&1\\end{pmatrix}\\), \\(Q=\\begin{pmatrix}0\\\\1\\\\0\\end{pmatrix}\\), \\(P_F=\\begin{pmatrix}0\\\\2\\\\0\\end{pmatrix}\\). Bestimmen Sie \\(P_E\\).",
      choices: [
        "\\(\\begin{pmatrix}0\\\\-1\\\\0\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}0\\\\3\\\\0\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}0\\\\-3\\\\0\\end{pmatrix}\\)",
        "\\(\\begin{pmatrix}0\\\\1\\\\0\\end{pmatrix}\\)"
      ],
      correctIndex: 0,
      explanation: "\\(F P_F=(0,-2,0)^T\\), plus \\(Q=(0,1,0)^T\\) ⇒ \\((0,-1,0)^T\\)."
    },
    {
      question: "Gegeben \\(F\\) invertierbar, \\(Q\\in\\mathbb{R}^3\\). Welche Gleichung beschreibt die Menge aller Punkte \\(v\\) mit \\(\\kappa_{F\\leftarrow E}(v)=0\\)?",
      choices: [
        "\\(v=Q\\)",
        "\\(v=0\\)",
        "\\(v=FQ\\)",
        "\\(v=-Q\\)"
      ],
      correctIndex: 0,
      explanation: "\\(0=F^{-1}(v-Q)\\Rightarrow v-Q=0\\Rightarrow v=Q\\)."
    }
  ]
});