window.HM1_QUIZZES = window.HM1_QUIZZES || [];

HM1_QUIZZES.push({
  id: "summen",
  title: "Summen",
  description: "Berechne die folgenden Summen.",
  questions: [
{
  question: "Berechnen Sie die Summe \\(\\sum_{n=0}^{\\infty} \\left(\\frac{2}{5}\\right)^n\\).",
  choices: ["\\(\\frac{5}{3}\\)", "\\(\\frac{2}{3}\\)", "1", "\\(\\frac{5}{2}\\)"],
  correctIndex: 0,
  explanation: "Geometrische Reihe: \\(\\frac{1}{1-2/5}=\\frac{5}{3}\\)."
},
{
  question: "Berechnen Sie \\(\\sum_{n=1}^{\\infty} \\left(\\frac{3}{4}\\right)^n\\).",
  choices: ["3", "4", "\\(\\frac{3}{1}\\)", "\\(\\frac{3}{4}\\)"],
  correctIndex: 0,
  explanation: "Geometrisch: Start bei n=1 ⇒ \\(\\frac{r}{1-r}=3\\)."
},
{
  question: "Berechnen Sie \\(\\sum_{n=2}^{\\infty} \\left(\\frac12\\right)^n\\).",
  choices: ["1", "\\(\\frac12\\)", "\\(\\frac14\\)", "2"],
  correctIndex: 1,
  explanation: "Gesamt \\(=1\\), abziehen \\(1/2\\) ⇒ \\(1/2\\)."
},
{
  question: "Berechnen Sie \\(\\sum_{n=0}^{\\infty} \\frac{1}{2^{n+1}}\\).",
  choices: ["1", "2", "\\(\\frac12\\)", "\\(\\frac14\\)"],
  correctIndex: 0,
  explanation: "Faktor \\(1/2\\): \\(\\frac12 \\sum (1/2)^n = 1\\)."
},
{
  question: "Berechnen Sie \\(\\sum_{n=1}^{\\infty} \\frac{3}{2^n}\\).",
  choices: ["3", "6", "1", "\\(\\frac32\\)"],
  correctIndex: 0,
  explanation: "Geometrisch: \\(3\\cdot1=3\\)."
},
{
  question: "Berechnen Sie \\(\\sum_{n=0}^{\\infty} 5\\left(\\frac13\\right)^n\\).",
  choices: ["\\(\\frac{15}{2}\\)", "5", "\\(\\frac{5}{2}\\)", "\\(\\frac{3}{5}\\)"],
  correctIndex: 0,
  explanation: "Faktor 5: \\(5\\cdot\\frac{1}{1-1/3}=15/2\\)."
},
{
  question: "Berechnen Sie \\(\\sum_{n=2}^{\\infty} \\frac{4}{3^n}\\).",
  choices: ["\\(\\frac{2}{3}\\)", "\\(\\frac{4}{3}\\)", "\\(\\frac{1}{3}\\)", "1"],
  correctIndex: 0,
  explanation: "Gesamt \\(=2\\), abziehen erste zwei Terme ⇒ \\(2-4/3=2/3\\)."
},
{
  question: "Berechnen Sie \\(\\sum_{n=0}^{\\infty} \\frac{1}{n!}\\).",
  choices: ["e", "1", "2", "\\(e-1\\)"],
  correctIndex: 0,
  explanation: "Definition der Exponentialreihe."
},
{
  question: "Berechnen Sie \\(\\sum_{n=1}^{\\infty} \\frac{1}{n!}\\).",
  choices: ["\\(e-1\\)", "e", "1", "\\(e-2\\)"],
  correctIndex: 0,
  explanation: "Abziehen von \\(1/0!\\)."
},
{
  question: "Berechnen Sie \\(\\sum_{n=2}^{\\infty} \\frac{1}{n!}\\).",
  choices: ["\\(e-2\\)", "\\(e-1\\)", "1", "\\(\\frac12\\)"],
  correctIndex: 0,
  explanation: "Abziehen von \\(1/0!+1/1!\\)."
},
{
  question: "Berechnen Sie \\(\\sum_{n=3}^{\\infty} \\frac{1}{n!}\\).",
  choices: ["\\(e-\\frac52\\)", "\\(e-2\\)", "\\(e-3\\)", "\\(\\frac12\\)"],
  correctIndex: 0,
  explanation: "Abziehen von \\(1+1+1/2\\)."
},
{
  question: "Berechnen Sie \\(\\sum_{n=1}^{\\infty} \\frac{n}{n!}\\).",
  choices: ["e", "\\(e-1\\)", "1", "2"],
  correctIndex: 0,
  explanation: "\\(n/n! = 1/(n-1)!\\)."
},
{
  question: "Berechnen Sie \\(\\sum_{n=2}^{\\infty} \\frac{n}{n!}\\).",
  choices: ["\\(e-1\\)", "e", "1", "2"],
  correctIndex: 0,
  explanation: "Start bei \\((n-1)!\\) ab 1!."
},
{
  question: "Berechnen Sie \\(\\sum_{n=3}^{\\infty} \\frac{n}{n!}\\).",
  choices: ["\\(e-2\\)", "\\(e-1\\)", "1", "2"],
  correctIndex: 0,
  explanation: "Indexverschiebung, ab \\(2!\\)."
},
{
  question: "Berechnen Sie \\(\\sum_{n=1}^{\\infty} \\frac{n+1}{n!}\\).",
  choices: ["2e", "\\(e\\)", "\\(e+1\\)", "\\(e-1\\)"],
  correctIndex: 0,
  explanation: "Aufspalten: \\(\\sum n/n! + \\sum 1/n!\\)."
},
{
  question: "Berechnen Sie \\(\\sum_{n=2}^{\\infty} \\frac{n-1}{n!}\\).",
  choices: ["1", "\\(e-2\\)", "\\(e-1\\)", "2"],
  correctIndex: 0,
  explanation: "\\(n-1)/(n!) = 1/(n-1)! - 1/n!\\)."
},
{
  question: "Berechnen Sie \\(\\sum_{n=1}^{\\infty} \\frac{2n}{n!}\\).",
  choices: ["2e", "e", "1", "2"],
  correctIndex: 0,
  explanation: "Faktor 2 vor bekannter Summe."
},
{
  question: "Berechnen Sie \\(\\sum_{n=2}^{\\infty} \\frac{3n}{n!}\\).",
  choices: ["\\(3(e-1)\\)", "3e", "\\(e-3\\)", "3"],
  correctIndex: 0,
  explanation: "Ab n=2 ⇒ \\(e-1\\)."
},
{
  question: "Berechnen Sie \\(\\sum_{n=0}^{\\infty} \\frac{n}{(n+1)!}\\).",
  choices: ["1", "e", "\\(e-1\\)", "\\(\\frac12\\)"],
  correctIndex: 0,
  explanation: "Vereinfachen: \\(n/(n+1)! = 1/n! - 1/(n+1)!\\)."
},
{
  question: "Berechnen Sie \\(\\sum_{n=1}^{\\infty} \\frac{n-1}{n!}\\).",
  choices: ["1", "\\(e-2\\)", "\\(e-1\\)", "2"],
  correctIndex: 0,
  explanation: "Teleskopsumme nach Zerlegung."
},
        {
          question: "Berechnen Sie \\(\\sum_{n=0}^{\\infty} \\left(\\frac{1}{4}\\right)^n\\).",
          choices: ["\\(\\frac{4}{3}\\)", "\\(\\frac{1}{3}\\)", "1", "4"],
          correctIndex: 0,
          explanation: "Geometrische Reihe mit Quotient \\(1/4\\)."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=1}^{\\infty} \\left(\\frac{1}{3}\\right)^n\\).",
          choices: ["\\(\\frac{1}{2}\\)", "\\(\\frac{3}{2}\\)", "1", "\\(\\frac{1}{3}\\)"],
          correctIndex: 0,
          explanation: "Start bei n=1 ⇒ \\(\\frac{r}{1-r}=\\frac{1/3}{2/3}=1/2\\)."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=2}^{\\infty} \\left(\\frac{1}{2}\\right)^n\\).",
          choices: ["1", "\\(\\frac{1}{2}\\)", "\\(\\frac{1}{4}\\)", "2"],
          correctIndex: 1,
          explanation: "Gesamt = 1, abziehen \\(1/2\\)."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=0}^{\\infty} \\frac{2}{3^{n+1}}\\).",
          choices: ["1", "\\(\\frac{2}{3}\\)", "2", "\\(\\frac{3}{2}\\)"],
          correctIndex: 0,
          explanation: "Faktor 2/3, dann geometrische Reihe."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=1}^{\\infty} \\frac{5}{2^n}\\).",
          choices: ["5", "10", "\\(\\frac{5}{2}\\)", "1"],
          correctIndex: 0,
          explanation: "Faktor 5 vor geometrischer Reihe."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=0}^{\\infty} 7\\left(\\frac{1}{5}\\right)^n\\).",
          choices: ["\\(\\frac{35}{4}\\)", "7", "\\(\\frac{7}{4}\\)", "5"],
          correctIndex: 0,
          explanation: "Geometrisch mit Vorfaktor."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=3}^{\\infty} \\left(\\frac{1}{2}\\right)^n\\).",
          choices: ["\\(\\frac{1}{4}\\)", "\\(\\frac{1}{8}\\)", "\\(\\frac{1}{2}\\)", "1"],
          correctIndex: 0,
          explanation: "Gesamt 1 minus erste drei Terme."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=0}^{\\infty} \\frac{1}{(n+1)!}\\).",
          choices: ["\\(e-1\\)", "e", "\\(e-2\\)", "1"],
          correctIndex: 0,
          explanation: "Indexverschiebung der Exponentialreihe."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=1}^{\\infty} \\frac{1}{(n+1)!}\\).",
          choices: ["\\(e-2\\)", "\\(e-1\\)", "1", "\\(\\frac{1}{2}\\)"],
          correctIndex: 0,
          explanation: "Abziehen von \\(1/1!\\)."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=2}^{\\infty} \\frac{1}{(n+1)!}\\).",
          choices: ["\\(e-\\frac{5}{2}\\)", "\\(e-2\\)", "\\(e-3\\)", "1"],
          correctIndex: 0,
          explanation: "Exponentialreihe minus erste drei Terme."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=1}^{\\infty} \\frac{n-1}{n!}\\).",
          choices: ["1", "\\(e-1\\)", "\\(e-2\\)", "0"],
          correctIndex: 0,
          explanation: "Teleskopierende Zerlegung."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=2}^{\\infty} \\frac{n-1}{n!}\\).",
          choices: ["\\(e-2\\)", "1", "\\(e-1\\)", "0"],
          correctIndex: 0,
          explanation: "Indexverschiebung."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=1}^{\\infty} \\frac{n}{(n+1)!}\\).",
          choices: ["1", "\\(e-1\\)", "\\(\\frac{1}{2}\\)", "e"],
          correctIndex: 0,
          explanation: "Zerlegung in Differenz zweier Fakultäten."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=0}^{\\infty} \\frac{n+1}{(n+1)!}\\).",
          choices: ["e", "\\(e-1\\)", "1", "2"],
          correctIndex: 0,
          explanation: "Direkte Umformung zu \\(\\sum 1/n!\\)."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=1}^{\\infty} \\frac{2n}{n!}\\).",
          choices: ["2e", "e", "2", "1"],
          correctIndex: 0,
          explanation: "Faktor 2 vor bekannter Summe."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=2}^{\\infty} \\frac{2n}{n!}\\).",
          choices: ["\\(2(e-1)\\)", "2e", "e", "2"],
          correctIndex: 0,
          explanation: "Start bei n=2."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=1}^{\\infty} \\frac{n+2}{n!}\\).",
          choices: ["3e", "2e", "\\(e+2\\)", "\\(e\\)"],
          correctIndex: 0,
          explanation: "Aufspalten in bekannte Reihen."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=2}^{\\infty} \\frac{n+1}{n!}\\).",
          choices: ["\\(2e-1\\)", "\\(2e\\)", "\\(e+1\\)", "e"],
          correctIndex: 0,
          explanation: "Indexverschiebung + Addition."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=1}^{\\infty} \\frac{3}{n!}\\).",
          choices: ["\\(3(e-1)\\)", "3e", "3", "\\(e\\)"],
          correctIndex: 0,
          explanation: "Konstante vor Exponentialreihe."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=2}^{\\infty} \\frac{3}{n!}\\).",
          choices: ["\\(3(e-2)\\)", "\\(3(e-1)\\)", "3", "e"],
          correctIndex: 0,
          explanation: "Abziehen von \\(1/0!+1/1!\\)."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=3}^{\\infty} \\frac{3}{n!}\\).",
          choices: ["\\(3(e-\\frac52)\\)", "\\(3(e-2)\\)", "\\(e\\)", "3"],
          correctIndex: 0,
          explanation: "Analog zu Aufgabe 7(b)(ii)."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=0}^{\\infty} \\left(\\frac{3}{5}\\right)^{n+2}\\).",
          choices: ["\\(\\frac{9}{10}\\)", "\\(\\frac{3}{5}\\)", "1", "\\(\\frac{5}{2}\\)"],
          correctIndex: 0,
          explanation: "Startindex berücksichtigen."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=1}^{\\infty} 4\\left(\\frac{1}{3}\\right)^{n+1}\\).",
          choices: ["2", "\\(\\frac{4}{3}\\)", "1", "\\(\\frac{2}{3}\\)"],
          correctIndex: 0,
          explanation: "Faktor und Startindex."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=0}^{\\infty} \\frac{n}{2^{n+1}}\\).",
          choices: ["1", "2", "\\(\\frac{1}{2}\\)", "0"],
          correctIndex: 0,
          explanation: "Bekannte geometrische Ableitung."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=1}^{\\infty} \\frac{n}{2^n}\\).",
          choices: ["2", "1", "4", "\\(\\frac{1}{2}\\)"],
          correctIndex: 0,
          explanation: "Standardresultat."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=0}^{\\infty} \\frac{n+1}{2^{n+1}}\\).",
          choices: ["2", "1", "\\(\\frac{3}{2}\\)", "4"],
          correctIndex: 0,
          explanation: "Zerlegung in bekannte Summen."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=1}^{\\infty} \\frac{n-1}{2^n}\\).",
          choices: ["1", "2", "\\(\\frac{1}{2}\\)", "0"],
          correctIndex: 0,
          explanation: "Differenz zweier Standardreihen."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=2}^{\\infty} \\frac{n}{2^n}\\).",
          choices: ["1", "2", "\\(\\frac{3}{2}\\)", "0"],
          correctIndex: 0,
          explanation: "Gesamtsumme minus erster Term."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=0}^{\\infty} \\frac{2^n}{3^{n+1}}\\).",
          choices: ["1", "\\(\\frac{2}{3}\\)", "3", "\\(\\frac{3}{2}\\)"],
          correctIndex: 0,
          explanation: "Geometrische Reihe mit Quotient \\(2/3\\)."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=1}^{\\infty} \\frac{2^n}{3^n}\\).",
          choices: ["2", "3", "1", "\\(\\frac{3}{2}\\)"],
          correctIndex: 0,
          explanation: "Geometrische Reihe mit Quotient \\(2/3\\)."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=0}^{\\infty} \\left(\\frac{5}{6}\\right)^n\\).",
          choices: ["6", "5", "\\(\\frac{6}{5}\\)", "1"],
          correctIndex: 0,
          explanation: "Geometrische Reihe: \\(\\frac{1}{1-5/6}=6\\)."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=1}^{\\infty} \\left(\\frac{4}{5}\\right)^n\\).",
          choices: ["4", "5", "\\(\\frac{4}{1}\\)", "1"],
          correctIndex: 0,
          explanation: "Start bei n=1 ⇒ \\(\\frac{r}{1-r}=4\\)."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=2}^{\\infty} \\left(\\frac{3}{4}\\right)^n\\).",
          choices: ["3", "\\(\\frac{9}{4}\\)", "\\(\\frac{3}{4}\\)", "1"],
          correctIndex: 1,
          explanation: "Gesamt \\(=4\\), abziehen \\(1+3/4\\)."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=0}^{\\infty} \\frac{4}{5^{n+1}}\\).",
          choices: ["1", "\\(\\frac{4}{5}\\)", "4", "\\(\\frac{5}{4}\\)"],
          correctIndex: 0,
          explanation: "Faktor \\(4/5\\), dann geometrisch."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=1}^{\\infty} \\frac{6}{3^n}\\).",
          choices: ["3", "6", "\\(\\frac{3}{2}\\)", "1"],
          correctIndex: 0,
          explanation: "Geometrische Reihe mit Faktor 6."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=0}^{\\infty} 2\\left(\\frac{2}{3}\\right)^n\\).",
          choices: ["6", "3", "2", "1"],
          correctIndex: 0,
          explanation: "Faktor 2, Summe \\(=2\\cdot3\\)."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=3}^{\\infty} \\left(\\frac{2}{3}\\right)^n\\).",
          choices: ["\\(\\frac{8}{3}\\)", "\\(\\frac{8}{9}\\)", "\\(\\frac{2}{3}\\)", "1"],
          correctIndex: 1,
          explanation: "Gesamt \\(=3\\), abziehen erste drei Terme."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=0}^{\\infty} \\frac{2}{(n+1)!}\\).",
          choices: ["\\(2(e-1)\\)", "2e", "\\(e\\)", "1"],
          correctIndex: 0,
          explanation: "Indexverschiebung der Exponentialreihe."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=2}^{\\infty} \\frac{2}{n!}\\).",
          choices: ["\\(2(e-2)\\)", "\\(2(e-1)\\)", "2", "e"],
          correctIndex: 0,
          explanation: "Abziehen von \\(1/0!\\) und \\(1/1!\\)."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=1}^{\\infty} \\frac{n+2}{(n+1)!}\\).",
          choices: ["e", "\\(e-1\\)", "\\(2e\\)", "1"],
          correctIndex: 0,
          explanation: "Umformen zu \\(\\sum 1/n!\\)."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=2}^{\\infty} \\frac{n}{(n+1)!}\\).",
          choices: ["1", "\\(e-2\\)", "\\(e-1\\)", "\\(\\frac12\\)"],
          correctIndex: 0,
          explanation: "Teleskopsumme nach Zerlegung."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=1}^{\\infty} \\frac{n-1}{(n+1)!}\\).",
          choices: ["\\(\\frac12\\)", "1", "\\(e-2\\)", "0"],
          correctIndex: 0,
          explanation: "Indexverschiebung und Kürzen."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=0}^{\\infty} \\frac{n+1}{(n+2)!}\\).",
          choices: ["1", "\\(e-2\\)", "\\(\\frac12\\)", "e"],
          correctIndex: 0,
          explanation: "Zerlegung in bekannte Fakultätsreihen."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=1}^{\\infty} \\frac{3n}{(n+1)!}\\).",
          choices: ["3", "\\(3(e-1)\\)", "\\(\\frac32\\)", "e"],
          correctIndex: 0,
          explanation: "Direkte Vereinfachung zu \\(3\\sum 1/n!\\)."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=0}^{\\infty} \\frac{n}{3^{n+1}}\\).",
          choices: ["\\(\\frac12\\)", "1", "\\(\\frac{3}{2}\\)", "\\(\\frac13\\)"],
          correctIndex: 0,
          explanation: "Standardresultat für geometrische Ableitung."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=1}^{\\infty} \\frac{n}{3^n}\\).",
          choices: ["\\(\\frac32\\)", "1", "3", "\\(\\frac12\\)"],
          correctIndex: 0,
          explanation: "Bekannte Summe für \\(n r^n\\)."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=0}^{\\infty} \\frac{n+2}{3^{n+1}}\\).",
          choices: ["3", "2", "\\(\\frac32\\)", "1"],
          correctIndex: 0,
          explanation: "Zerlegung in bekannte geometrische Summen."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=2}^{\\infty} \\frac{n-1}{3^n}\\).",
          choices: ["1", "\\(\\frac12\\)", "2", "\\(\\frac13\\)"],
          correctIndex: 0,
          explanation: "Gesamtsumme minus erste Terme."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=0}^{\\infty} \\frac{3^n}{4^{n+1}}\\).",
          choices: ["1", "\\(\\frac34\\)", "4", "\\(\\frac43\\)"],
          correctIndex: 0,
          explanation: "Geometrisch mit Quotient \\(3/4\\)."
        },
        {
          question: "Berechnen Sie \\(\\sum_{n=1}^{\\infty} \\frac{3^n}{4^n}\\).",
          choices: ["3", "4", "1", "\\(\\frac43\\)"],
          correctIndex: 0,
          explanation: "Geometrische Reihe mit Quotient \\(3/4\\)."
        }
    ]
});