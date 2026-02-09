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
        question: "Wann ist ein Halbleiter transparent für einfallendes Licht?",
        choices: [
            "Wenn die Photonenenergie kleiner als die Bandlücke ist",
            "Wenn die Photonenenergie größer als die Bandlücke ist",
            "Wenn keine Dotierung vorliegt",
            "Wenn die Temperatur 0 K beträgt"
        ],
        correctIndex: 0,
        explanation: "Ist Eph < Eg, kann kein Elektron-Loch-Paar erzeugt werden → transparent."
        },
        {
        question: "Was beschreibt die Bandlücke Eg eines Halbleiters?",
        choices: [
            "Energieabstand zwischen Valenzband und Leitungsband",
            "Maximale kinetische Energie der Elektronen",
            "Differenz zwischen Donator- und Akzeptorniveau",
            "Energie eines Photons"
        ],
        correctIndex: 0,
        explanation: "Eg ist der Energieabstand zwischen EV und EC."
        },
        {
        question: "Welche Ladung tragen Elektronen?",
        choices: [
            "negativ",
            "positiv",
            "neutral",
            "temperaturabhängig"
        ],
        correctIndex: 0,
        explanation: "Elektronen tragen die negative Elementarladung −e."
        },
        {
        question: "Welche Ladung tragen Löcher im Halbleiter?",
        choices: [
            "positiv",
            "negativ",
            "neutral",
            "abhängig von der Dotierung"
        ],
        correctIndex: 0,
        explanation: "Löcher verhalten sich wie positiv geladene Teilchen."
        },
        {
        question: "Was bedeutet n-Dotierung?",
        choices: [
            "Elektronen sind Majoritätsladungsträger",
            "Löcher sind Majoritätsladungsträger",
            "Der Halbleiter ist intrinsisch",
            "Die Bandlücke wird größer"
        ],
        correctIndex: 0,
        explanation: "Bei n-Dotierung stellen Elektronen die Majoritätsladungsträger dar."
        },
        {
        question: "Was bedeutet p-Dotierung?",
        choices: [
            "Löcher sind Majoritätsladungsträger",
            "Elektronen sind Majoritätsladungsträger",
            "Es gibt keine freien Ladungsträger",
            "Das Ferminiveau liegt im Leitungsband"
        ],
        correctIndex: 0,
        explanation: "Bei p-Dotierung dominieren Löcher den Ladungstransport."
        },
        {
        question: "Wo liegt das intrinsische Ferminiveau Ei?",
        choices: [
            "Nahe der Mitte der Bandlücke",
            "Im Leitungsband",
            "Im Valenzband",
            "Immer bei 0 eV"
        ],
        correctIndex: 0,
        explanation: "Bei intrinsischen Halbleitern liegt Ei näherungsweise in der Mitte der Bandlücke."
        },
        {
        question: "Wann ist ein Halbleiter degeneriert (entartet)?",
        choices: [
            "Wenn das Ferminiveau sehr nahe an einer Bandkante liegt oder im Band",
            "Wenn keine Dotierung vorliegt",
            "Wenn die Bandlücke sehr groß ist",
            "Wenn die Temperatur 0 K beträgt"
        ],
        correctIndex: 0,
        explanation: "Hohe Dotierung verschiebt EF in die Nähe der Bandkanten oder in ein Band."
        },
        {
        question: "Was ist die Einheit der Energie im E-k-Diagramm?",
        choices: [
            "Elektronenvolt (eV)",
            "Joule pro Sekunde",
            "Volt pro Meter",
            "Coulomb"
        ],
        correctIndex: 0,
        explanation: "Energien im Banddiagramm werden üblicherweise in eV angegeben."
        },
        {
        question: "Welche Größe ist auf der x-Achse des E-k-Diagramms aufgetragen?",
        choices: [
            "Wellenvektor k",
            "Energie",
            "Zeit",
            "Temperatur"
        ],
        correctIndex: 0,
        explanation: "Das E-k-Diagramm zeigt die Energie in Abhängigkeit vom Wellenvektor k."
        },
        {
        question: "Was verursacht Driftstrom im Halbleiter?",
        choices: [
            "Ein elektrisches Feld",
            "Ein Konzentrationsgradient",
            "Ein Temperaturgradient",
            "Photonenabsorption"
        ],
        correctIndex: 0,
        explanation: "Drift entsteht durch die Wirkung eines elektrischen Feldes auf Ladungsträger."
        },
        {
        question: "Was verursacht Diffusionsstrom im Halbleiter?",
        choices: [
            "Einen Konzentrationsunterschied der Ladungsträger",
            "Ein externes elektrisches Feld",
            "Eine Bandlücke",
            "Eine hohe Dotierung"
        ],
        correctIndex: 0,
        explanation: "Diffusion entsteht durch Gradienten der Ladungsträgerkonzentration."
        },
        {
        question: "Welche Aussage zum Valenzband ist korrekt?",
        choices: [
            "Es ist bei 0 K vollständig besetzt",
            "Es ist immer leer",
            "Es enthält nur Löcher",
            "Es existiert nur in Metallen"
        ],
        correctIndex: 0,
        explanation: "Bei 0 K ist das Valenzband vollständig mit Elektronen besetzt."
        },
        {
        question: "Warum leitet ein vollständig besetztes Valenzband nicht?",
        choices: [
            "Es gibt keine freien Zustände für Elektronen",
            "Die Bandlücke ist zu klein",
            "Elektronen sind zu schnell",
            "Es gibt zu viele Löcher"
        ],
        correctIndex: 0,
        explanation: "Ohne freie Zustände ist kein Ladungsträgertransport möglich."
        },
        {
        question: "Welche Größe beschreibt die Beweglichkeit μ?",
        choices: [
            "Wie schnell sich Ladungsträger im elektrischen Feld bewegen",
            "Die Anzahl der Ladungsträger",
            "Die Größe der Bandlücke",
            "Die Temperaturabhängigkeit der Zustandsdichte"
        ],
        correctIndex: 0,
        explanation: "μ beschreibt die Driftgeschwindigkeit pro Feldstärke."
        },
        {
        question: "Welche Ladungsträger besitzen in Silizium die höhere Beweglichkeit?",
        choices: [
            "Elektronen",
            "Löcher",
            "Beide gleich",
            "Temperaturabhängig zufällig"
        ],
        correctIndex: 0,
        explanation: "In Si ist die Elektronenbeweglichkeit größer als die der Löcher."
        },
        {
        question: "Was passiert bei der Generation im Halbleiter?",
        choices: [
            "Ein Elektron-Loch-Paar entsteht",
            "Ein Elektron rekombiniert",
            "Die Bandlücke verschwindet",
            "Die Dotierung ändert sich"
        ],
        correctIndex: 0,
        explanation: "Generation erzeugt ein Elektron-Loch-Paar."
        },
        {
        question: "Was bedeutet Rekombination?",
        choices: [
            "Ein Elektron trifft auf ein Loch",
            "Ein Elektron wird beschleunigt",
            "Ein Photon wird absorbiert",
            "Die Temperatur steigt"
        ],
        correctIndex: 0,
        explanation: "Bei Rekombination annihilieren Elektron und Loch."
        },
        {
        question: "Welche Energie muss ein Photon mindestens besitzen, um absorbiert zu werden?",
        choices: [
            "Mindestens die Bandlückenenergie",
            "Weniger als die Bandlücke",
            "Genau 0 eV",
            "Unabhängig von der Bandlücke"
        ],
        correctIndex: 0,
        explanation: "Nur Photonen mit Eph ≥ Eg können Elektronen anregen."
        },
        {
        question: "Welche Aussage zur Temperaturabhängigkeit der Leitfähigkeit ist korrekt?",
        choices: [
            "Halbleiter leiten bei höherer Temperatur besser",
            "Halbleiter leiten bei höherer Temperatur schlechter",
            "Die Leitfähigkeit ist temperaturunabhängig",
            "Nur Metalle sind temperaturabhängig"
        ],
        correctIndex: 0,
        explanation: "Mit steigender Temperatur entstehen mehr Ladungsträger."
        },
        {
        question: "Was beschreibt die Zustandsdichte?",
        choices: [
            "Anzahl erlaubter Zustände pro Energieintervall",
            "Anzahl der Atome im Kristall",
            "Elektronenbeweglichkeit",
            "Bandlückenenergie"
        ],
        correctIndex: 0,
        explanation: "Die Zustandsdichte gibt an, wie viele Zustände pro Energie verfügbar sind."
        },
        {
        question: "Wie groß ist die Zustandsdichte in der Bandlücke?",
        choices: [
            "Null",
            "Sehr groß",
            "Temperaturabhängig",
            "Unendlich"
        ],
        correctIndex: 0,
        explanation: "In der Bandlücke existieren keine erlaubten Zustände."
        },
        {
        question: "Was ist ein intrinsischer Halbleiter?",
        choices: [
            "Ein undotierter Halbleiter",
            "Ein stark dotierter Halbleiter",
            "Ein Metall",
            "Ein Isolator"
        ],
        correctIndex: 0,
        explanation: "Intrinsisch bedeutet ohne Dotierung."
        },
        {
        question: "Welche Ladungsträgerkonzentrationen gelten im intrinsischen Halbleiter?",
        choices: [
            "n = p",
            "n > p",
            "p > n",
            "n = 0"
        ],
        correctIndex: 0,
        explanation: "Im intrinsischen Fall sind Elektronen- und Löcherkonzentration gleich."
        },
        {
        question: "Was ist die Einheit der spezifischen Leitfähigkeit σ?",
        choices: [
            "S/cm",
            "Ohm",
            "Volt",
            "Coulomb"
        ],
        correctIndex: 0,
        explanation: "Die Leitfähigkeit wird in Siemens pro Zentimeter angegeben."
        },
        {
        question: "Was beschreibt die Raumladungszone eines pn-Übergangs?",
        choices: [
            "Einen ladungsträgerarmen Bereich",
            "Einen Bereich mit maximaler Leitfähigkeit",
            "Den metallischen Kontakt",
            "Den neutralen Halbleiter"
        ],
        correctIndex: 0,
        explanation: "In der Raumladungszone fehlen freie Ladungsträger."
        },
        {
        question: "Warum entsteht eine Raumladungszone?",
        choices: [
            "Durch Diffusion und Rekombination von Ladungsträgern",
            "Durch äußere Beleuchtung",
            "Durch hohe Temperatur",
            "Durch Photonemission"
        ],
        correctIndex: 0,
        explanation: "Diffusion führt zur Rekombination nahe der Grenzfläche."
        },
        {
        question: "Welche Richtung hat das elektrische Feld in der Raumladungszone?",
        choices: [
            "Vom n- zum p-Gebiet",
            "Vom p- zum n-Gebiet",
            "Senkrecht zur Grenzfläche",
            "Es existiert kein Feld"
        ],
        correctIndex: 0,
        explanation: "Das Feld zeigt vom positiv geladenen n-Gebiet zum p-Gebiet."
        },
        {
        question: "Welche Größe bestimmt die Diffusionsspannung eines pn-Übergangs?",
        choices: [
            "Dotierkonzentrationen",
            "Kristallstruktur",
            "Wellenlänge des Lichts",
            "Elektronenmasse"
        ],
        correctIndex: 0,
        explanation: "Die Diffusionsspannung hängt logarithmisch von NA und ND ab."
        },
        {
        question: "Warum wird die Boltzmann-Näherung verwendet?",
        choices: [
            "Wenn das Ferminiveau weit von den Bandkanten entfernt ist",
            "Bei entarteten Halbleitern",
            "Bei sehr tiefen Temperaturen",
            "Wenn die Bandlücke verschwindet"
        ],
        correctIndex: 0,
        explanation: "Die Boltzmann-Näherung gilt bei nicht-entarteten Halbleitern."
        },
    {
      question: "Welche Einheit hat die Beweglichkeit μ von Ladungsträgern?",
      choices: [
        "cm²/(V·s)",
        "cm/(V·s)",
        "V/cm",
        "A/cm²"
      ],
      correctIndex: 0,
      explanation: "Die Beweglichkeit ist definiert als Driftgeschwindigkeit pro Feldstärke."
    },
    {
      question: "Welche Beziehung gilt zwischen Driftgeschwindigkeit v_d und elektrischem Feld E?",
      choices: [
        "v_d = μ · E",
        "v_d = E / μ",
        "v_d = μ / E",
        "v_d = q · E"
      ],
      correctIndex: 0,
      explanation: "Die Driftgeschwindigkeit ist proportional zur Feldstärke."
    },
    {
      question: "Welche Einheit hat die Driftgeschwindigkeit v_d?",
      choices: [
        "cm/s",
        "cm²/(V·s)",
        "V/cm",
        "A"
      ],
      correctIndex: 0,
      explanation: "v_d ist eine Geschwindigkeit."
    },
    {
      question: "Welche Größe beschreibt die effektive Masse m*?",
      choices: [
        "Trägheit eines Ladungsträgers im Kristall",
        "Reale Masse eines Elektrons",
        "Ladung eines Elektrons",
        "Zustandsdichte"
      ],
      correctIndex: 0,
      explanation: "m* beschreibt das dynamische Verhalten im periodischen Potential."
    },
    {
      question: "Wodurch kann man die effektive Masse im E-k-Diagramm bestimmen?",
      choices: [
        "Durch die Krümmung der E-k-Relation",
        "Durch die Bandlücke",
        "Durch die Lage des Ferminiveaus",
        "Durch die Dotierung"
      ],
      correctIndex: 0,
      explanation: "Die effektive Masse ist umgekehrt proportional zur zweiten Ableitung von E(k)."
    },
    {
      question: "Welche Einheit hat die Zustandsdichte g(E)?",
      choices: [
        "1/(eV·cm³)",
        "eV/cm³",
        "cm³",
        "1/eV"
      ],
      correctIndex: 0,
      explanation: "Zustandsdichte gibt Zustände pro Energie und Volumen an."
    },
    {
      question: "Welche Aussage gilt für direkte Rekombination?",
      choices: [
        "Ein Photon wird emittiert",
        "Ein Phonon wird benötigt",
        "Sie tritt nur in Metallen auf",
        "Sie ist temperaturunabhängig"
      ],
      correctIndex: 0,
      explanation: "Bei direkter Rekombination wird Energie als Photon abgegeben."
    },
    {
      question: "Welche Rekombination dominiert bei niedriger Dotierung und geringer Störstellendichte?",
      choices: [
        "Direkte Rekombination",
        "Shockley-Read-Hall-Rekombination",
        "Auger-Rekombination",
        "Stoßionisation"
      ],
      correctIndex: 0,
      explanation: "SRH benötigt tiefe Störstellen und ist sonst schwächer."
    },
    {
      question: "Welche Rekombination wird bei hoher Dotierung besonders wichtig?",
      choices: [
        "Auger-Rekombination",
        "Direkte Rekombination",
        "Photonische Rekombination",
        "Diffusionsrekombination"
      ],
      correctIndex: 0,
      explanation: "Auger-Rekombination nimmt stark mit Ladungsträgerdichte zu."
    },
    {
      question: "Welche Einheit hat die intrinsische Ladungsträgerkonzentration n_i?",
      choices: [
        "cm⁻³",
        "cm⁻²",
        "cm",
        "eV"
      ],
      correctIndex: 0,
      explanation: "n_i ist eine Volumenkonzentration."
    },
    {
      question: "Welche Größe bestimmt die Temperaturabhängigkeit von n_i am stärksten?",
      choices: [
        "Die Bandlückenenergie",
        "Die Beweglichkeit",
        "Die effektive Masse",
        "Die Kristallstruktur"
      ],
      correctIndex: 0,
      explanation: "n_i ∝ exp(−Eg / 2kT)."
    },
    {
      question: "Welche Einheit hat die Boltzmann-Konstante k?",
      choices: [
        "eV/K",
        "J·K",
        "K/eV",
        "1/K"
      ],
      correctIndex: 0,
      explanation: "In der Halbleiterphysik wird k meist in eV/K verwendet."
    },
    {
      question: "Welche Aussage zur Boltzmann-Näherung ist korrekt?",
      choices: [
        "Sie gilt für nicht-entartete Halbleiter",
        "Sie gilt immer",
        "Sie gilt nur bei 0 K",
        "Sie gilt nur für Metalle"
      ],
      correctIndex: 0,
      explanation: "Die Näherung ist gültig, wenn EF weit von den Bandkanten entfernt ist."
    },
    {
      question: "Welche Einheit hat das elektrische Feld E?",
      choices: [
        "V/cm",
        "V",
        "A/cm",
        "J"
      ],
      correctIndex: 0,
      explanation: "E ist die Spannung pro Länge."
    },
    {
      question: "Welche Ursache hat Stoßionisation?",
      choices: [
        "Hohe elektrische Feldstärken",
        "Hohe Dotierung",
        "Niedrige Temperatur",
        "Photonenemission"
      ],
      correctIndex: 0,
      explanation: "Starke Felder beschleunigen Elektronen zur Ionisation."
    },
    {
      question: "Welche Folge kann Stoßionisation haben?",
      choices: [
        "Lawinendurchbruch",
        "Temperaturabsenkung",
        "Bandlückenvergrößerung",
        "Abnahme der Leitfähigkeit"
      ],
      correctIndex: 0,
      explanation: "Stoßionisation führt zu exponentieller Ladungsträgervermehrung."
    },
    {
      question: "Welche Einheit hat der Diffusionskoeffizient D?",
      choices: [
        "cm²/s",
        "cm/s",
        "V/cm",
        "cm³/s"
      ],
      correctIndex: 0,
      explanation: "D beschreibt die räumliche Ausbreitung pro Zeit."
    },
    {
      question: "Welche Beziehung verknüpft Diffusionskoeffizient und Beweglichkeit?",
      choices: [
        "Einstein-Relation",
        "Poisson-Gleichung",
        "Kontinuitätsgleichung",
        "Driftgleichung"
      ],
      correctIndex: 0,
      explanation: "D/μ = kT/q."
    },
    {
      question: "Welche Einheit hat der Stromdichtevektor j?",
      choices: [
        "A/cm²",
        "A",
        "V/cm",
        "C"
      ],
      correctIndex: 0,
      explanation: "Stromdichte ist Strom pro Fläche."
    },
    {
      question: "Welche Größe beschreibt die Leitfähigkeit σ?",
      choices: [
        "Fähigkeit eines Materials, Strom zu leiten",
        "Anzahl der Ladungsträger",
        "Bandlückenenergie",
        "Elektrische Feldstärke"
      ],
      correctIndex: 0,
      explanation: "σ = q(nμn + pμp)."
    },
    {
      question: "Welche Einheit hat der spezifische Widerstand ρ?",
      choices: [
        "Ω·cm",
        "Ω",
        "S/cm",
        "V/cm"
      ],
      correctIndex: 0,
      explanation: "ρ ist der Kehrwert der Leitfähigkeit."
    },
    {
      question: "Welche Aussage gilt für Metalle im Vergleich zu Halbleitern?",
      choices: [
        "Metalle besitzen keine Bandlücke",
        "Metalle haben immer größere Bandlücken",
        "Metalle sind immer intrinsisch",
        "Metalle besitzen keine Ladungsträger"
      ],
      correctIndex: 0,
      explanation: "In Metallen überlappen Valenz- und Leitungsband."
    },
    {
      question: "Welche Größe verschiebt das Ferminiveau bei Dotierung?",
      choices: [
        "Dotierkonzentration",
        "Bandlücke",
        "Kristallgitter",
        "Photonenenergie"
      ],
      correctIndex: 0,
      explanation: "Donatoren und Akzeptoren verändern EF."
    },
    {
      question: "Welche Einheit hat die Temperatur T?",
      choices: [
        "Kelvin (K)",
        "Grad Celsius",
        "eV",
        "Joule"
      ],
      correctIndex: 0,
      explanation: "In der Physik wird absolute Temperatur in Kelvin verwendet."
    },
    {
      question: "Welche Aussage zur Raumladungszone ist korrekt?",
      choices: [
        "Sie enthält fest gebundene Ionen",
        "Sie enthält viele freie Elektronen",
        "Sie ist elektrisch neutral",
        "Sie leitet besonders gut"
      ],
      correctIndex: 0,
      explanation: "In der RLZ bleiben ionisierte Dotieratome zurück."
    },
    {
      question: "Welche Gleichung beschreibt das elektrische Feld in der Raumladungszone?",
      choices: [
        "Poisson-Gleichung",
        "Schrödinger-Gleichung",
        "Einstein-Relation",
        "Boltzmann-Verteilung"
      ],
      correctIndex: 0,
      explanation: "Das Feld folgt aus der Poisson-Gleichung."
    },
    {
      question: "Welche Einheit hat das elektrische Potential?",
      choices: [
        "Volt",
        "V/cm",
        "Joule",
        "A"
      ],
      correctIndex: 0,
      explanation: "Das elektrische Potential wird in Volt angegeben."
    },
    {
      question: "Welche Größe bestimmt die Breite der Raumladungszone?",
      choices: [
        "Dotierkonzentrationen",
        "Photonenenergie",
        "Kristallstruktur",
        "Beweglichkeit"
      ],
      correctIndex: 0,
      explanation: "Höhere Dotierung → kleinere Raumladungszone."
    },
    {
      question: "Welche Aussage zur Temperaturabhängigkeit der Beweglichkeit ist korrekt?",
      choices: [
        "Sie nimmt bei hohen Temperaturen ab",
        "Sie steigt linear mit Temperatur",
        "Sie ist konstant",
        "Sie verschwindet bei Raumtemperatur"
      ],
      correctIndex: 0,
      explanation: "Phononenstreuung reduziert μ bei hohen Temperaturen."
    },
    {
      question: "Welche Streuung dominiert bei niedrigen Temperaturen?",
      choices: [
        "Coulomb-Streuung an Dotieratomen",
        "Phononenstreuung",
        "Photonenstreuung",
        "Auger-Streuung"
      ],
      correctIndex: 0,
      explanation: "Bei niedrigen T sind Gitterschwingungen schwach."
    },
    {
      question: "Welche Einheit hat die Elementarladung q?",
      choices: [
        "Coulomb (C)",
        "Ampere (A)",
        "Volt (V)",
        "Elektronenvolt (eV)"
      ],
      correctIndex: 0,
      explanation: "Die Elementarladung ist eine elektrische Ladung mit der Einheit Coulomb."
    },
    {
      question: "Wie lautet der Zusammenhang zwischen Leitfähigkeit σ und Widerstand ρ?",
      choices: [
        "σ = 1 / ρ",
        "σ = ρ · q",
        "σ = ρ / E",
        "σ = q · E"
      ],
      correctIndex: 0,
      explanation: "Leitfähigkeit und spezifischer Widerstand sind Kehrwerte."
    },
    {
      question: "Welche Größe beschreibt die thermische Energie kT?",
      choices: [
        "Mittlere Energie durch Temperatur",
        "Bandlückenenergie",
        "Ionisationsenergie",
        "Photonenenergie"
      ],
      correctIndex: 0,
      explanation: "kT ist ein Maß für die thermische Energie der Teilchen."
    },
    {
      question: "Welche Einheit hat kT?",
      choices: [
        "eV",
        "K",
        "J/K",
        "V"
      ],
      correctIndex: 0,
      explanation: "kT wird häufig direkt als Energie in eV angegeben."
    },
    {
      question: "Welche Aussage zur Fermi-Dirac-Verteilung ist korrekt?",
      choices: [
        "Sie gibt die Besetzungswahrscheinlichkeit eines Zustands an",
        "Sie beschreibt die Bandlücke",
        "Sie ist temperaturunabhängig",
        "Sie gilt nur für Löcher"
      ],
      correctIndex: 0,
      explanation: "f(E) beschreibt die Wahrscheinlichkeit, dass ein Zustand besetzt ist."
    },
    {
      question: "Wie groß ist f(E) am Ferminiveau bei T > 0 K?",
      choices: [
        "0,5",
        "0",
        "1",
        "Temperaturabhängig zufällig"
      ],
      correctIndex: 0,
      explanation: "Am Ferminiveau ist die Besetzungswahrscheinlichkeit 50 %."
    },
    {
      question: "Welche Größe beeinflusst die Form der Fermi-Verteilung?",
      choices: [
        "Temperatur",
        "Dotierung",
        "Kristallstruktur",
        "Bandlückenenergie"
      ],
      correctIndex: 0,
      explanation: "Mit steigender Temperatur wird die Verteilung flacher."
    },
    {
      question: "Welche Einheit hat die Zustandsdichte NC oder NV?",
      choices: [
        "cm⁻³",
        "cm⁻²",
        "eV⁻¹",
        "V/cm"
      ],
      correctIndex: 0,
      explanation: "NC und NV sind effektive Zustandsdichten pro Volumen."
    },
    {
      question: "Was beschreibt NC?",
      choices: [
        "Effektive Zustandsdichte des Leitungsbandes",
        "Zahl der Elektronen",
        "Zahl der Atome",
        "Energie des Leitungsbandes"
      ],
      correctIndex: 0,
      explanation: "NC gibt die effektive Zahl verfügbarer Zustände im Leitungsband an."
    },
    {
      question: "Was beschreibt NV?",
      choices: [
        "Effektive Zustandsdichte des Valenzbandes",
        "Zahl der Löcher",
        "Bandlückenenergie",
        "Dotierkonzentration"
      ],
      correctIndex: 0,
      explanation: "NV beschreibt die Zustandsdichte des Valenzbandes."
    },
    {
      question: "Welche Aussage zur intrinsischen Leitfähigkeit ist korrekt?",
      choices: [
        "Sie ist bei Raumtemperatur minimal",
        "Sie ist temperaturunabhängig",
        "Sie ist größer als bei dotierten Halbleitern",
        "Sie ist null"
      ],
      correctIndex: 0,
      explanation: "Ohne Dotierung ist die Leitfähigkeit gering."
    },
    {
      question: "Welche Größe erhöht die intrinsische Leitfähigkeit am stärksten?",
      choices: [
        "Temperatur",
        "Kristallstruktur",
        "Dotierung",
        "Bandkrümmung"
      ],
      correctIndex: 0,
      explanation: "Höhere Temperatur erzeugt mehr Elektron-Loch-Paare."
    },
    {
      question: "Welche Aussage zur Majoritätsladungsträgerdichte ist korrekt?",
      choices: [
        "Sie entspricht näherungsweise der Dotierkonzentration",
        "Sie ist gleich der Minoritätsladungsträgerdichte",
        "Sie ist immer gleich ni",
        "Sie ist temperaturunabhängig"
      ],
      correctIndex: 0,
      explanation: "In dotierten Halbleitern bestimmt die Dotierung die Majoritätsdichte."
    },
    {
      question: "Welche Aussage zur Minoritätsladungsträgerdichte ist korrekt?",
      choices: [
        "Sie nimmt mit steigender Dotierung ab",
        "Sie ist größer als die Majoritätsdichte",
        "Sie ist konstant",
        "Sie ist gleich der Dotierung"
      ],
      correctIndex: 0,
      explanation: "Das Massenwirkungsgesetz koppelt Majorität und Minorität."
    },
    {
      question: "Welches Gesetz verknüpft n, p und ni?",
      choices: [
        "Massenwirkungsgesetz",
        "Ohmsches Gesetz",
        "Poisson-Gleichung",
        "Einstein-Relation"
      ],
      correctIndex: 0,
      explanation: "Es gilt n · p = ni²."
    },
    {
      question: "Welche Einheit hat die Rekombinationsrate?",
      choices: [
        "cm⁻³·s⁻¹",
        "cm⁻³",
        "s⁻¹",
        "A/cm²"
      ],
      correctIndex: 0,
      explanation: "Rekombination beschreibt Ereignisse pro Volumen und Zeit."
    },
    {
      question: "Welche Größe beschreibt die Lebensdauer τ?",
      choices: [
        "Mittlere Zeit bis zur Rekombination",
        "Zeit bis zur Generation",
        "Diffusionszeit",
        "Driftzeit"
      ],
      correctIndex: 0,
      explanation: "τ ist die mittlere Lebensdauer eines Ladungsträgers."
    },
    {
      question: "Welche Einheit hat die Lebensdauer τ?",
      choices: [
        "Sekunde (s)",
        "cm",
        "eV",
        "A"
      ],
      correctIndex: 0,
      explanation: "τ ist eine Zeitgröße."
    },
    {
      question: "Welche Größe beeinflusst die Lebensdauer besonders stark?",
      choices: [
        "Störstellendichte",
        "Bandlücke",
        "Elektronenmasse",
        "Kristallorientierung"
      ],
      correctIndex: 0,
      explanation: "Tiefe Störstellen fördern Rekombination."
    },
    {
      question: "Welche Aussage zur Shockley-Read-Hall-Rekombination ist korrekt?",
      choices: [
        "Sie läuft über Störstellen in der Bandlücke",
        "Sie emittiert immer Photonen",
        "Sie tritt nur bei Metallen auf",
        "Sie ist feldunabhängig"
      ],
      correctIndex: 0,
      explanation: "SRH-Rekombination erfolgt über Zwischenenergieniveaus."
    },
    {
      question: "Welche Größe beschreibt der Diffusionsstrom?",
      choices: [
        "Strom durch Konzentrationsgradienten",
        "Strom durch elektrisches Feld",
        "Strom durch Temperaturgradient",
        "Strom durch Rekombination"
      ],
      correctIndex: 0,
      explanation: "Diffusion entsteht durch räumliche Konzentrationsunterschiede."
    },
    {
      question: "Welche Gleichung beschreibt den Elektronendriftstrom?",
      choices: [
        "j_n = q · n · μ_n · E",
        "j_n = q · D_n · ∇n",
        "j_n = n / μ",
        "j_n = q · E"
      ],
      correctIndex: 0,
      explanation: "Der Driftstrom ist proportional zu Feldstärke und Beweglichkeit."
    },
    {
      question: "Welche Gleichung beschreibt den Elektronendiffusionsstrom?",
      choices: [
        "j_n = q · D_n · ∇n",
        "j_n = q · n · μ_n · E",
        "j_n = n · E",
        "j_n = q · μ"
      ],
      correctIndex: 0,
      explanation: "Diffusion ist proportional zum Konzentrationsgradienten."
    },
    {
      question: "Welche Aussage zur Diffusionslänge L ist korrekt?",
      choices: [
        "Sie gibt die mittlere Strecke vor Rekombination an",
        "Sie ist gleich der Raumladungszonenbreite",
        "Sie ist temperaturunabhängig",
        "Sie ist immer größer als der Kristall"
      ],
      correctIndex: 0,
      explanation: "L = √(D · τ)."
    },
    {
      question: "Welche Einheit hat die Diffusionslänge?",
      choices: [
        "cm",
        "cm²",
        "s",
        "V/cm"
      ],
      correctIndex: 0,
      explanation: "Die Diffusionslänge ist eine Strecke."
    },
    {
      question: "Welche Aussage zur Bandkrümmung ist korrekt?",
      choices: [
        "Starke Krümmung bedeutet kleine effektive Masse",
        "Starke Krümmung bedeutet große Bandlücke",
        "Sie ist temperaturunabhängig",
        "Sie bestimmt die Dotierung"
      ],
      correctIndex: 0,
      explanation: "m* ist invers proportional zur Krümmung."
    },
    {
      question: "Welche Aussage zur effektiven Masse ist korrekt?",
      choices: [
        "Sie kann richtungsabhängig sein",
        "Sie ist immer konstant",
        "Sie ist gleich der Elektronenruhemasse",
        "Sie ist temperaturabhängig"
      ],
      correctIndex: 0,
      explanation: "In anisotropen Kristallen ist m* richtungsabhängig."
    },
    {
      question: "Welche Größe beschreibt die elektrische Stromdichte?",
      choices: [
        "Strom pro Fläche",
        "Strom pro Volumen",
        "Spannung pro Länge",
        "Ladung pro Zeit"
      ],
      correctIndex: 0,
      explanation: "j = I / A."
    },
    {
      question: "Welche Aussage zur Kontinuitätsgleichung ist korrekt?",
      choices: [
        "Sie verknüpft Strom, Generation und Rekombination",
        "Sie beschreibt nur Drift",
        "Sie gilt nur im Gleichgewicht",
        "Sie ersetzt die Poisson-Gleichung"
      ],
      correctIndex: 0,
      explanation: "Die Kontinuitätsgleichung ist eine Erhaltungsgleichung."
    },
    {
      question: "Welche Größe beschreibt die Raumladungsdichte ρ?",
      choices: [
        "Ladung pro Volumen",
        "Ladung pro Fläche",
        "Spannung pro Länge",
        "Energie pro Teilchen"
      ],
      correctIndex: 0,
      explanation: "ρ setzt sich aus freien und gebundenen Ladungen zusammen."
    },
    {
      question: "Welche Einheit hat die Raumladungsdichte ρ?",
      choices: [
        "C/cm³",
        "C/cm²",
        "A/cm²",
        "V/cm"
      ],
      correctIndex: 0,
      explanation: "Raumladungsdichte ist Ladung pro Volumen."
    },
    {
      question: "Welche Aussage zur Poisson-Gleichung ist korrekt?",
      choices: [
        "Sie verknüpft Potential und Raumladungsdichte",
        "Sie beschreibt die Driftbewegung",
        "Sie ist temperaturabhängig",
        "Sie gilt nur für Metalle"
      ],
      correctIndex: 0,
      explanation: "Die Poisson-Gleichung ist zentral für pn-Übergänge."
    },
    {
      question: "Welche Größe ist die Ableitung des Potentials?",
      choices: [
        "Elektrisches Feld",
        "Stromdichte",
        "Leitfähigkeit",
        "Zustandsdichte"
      ],
      correctIndex: 0,
      explanation: "E = −∇φ."
    },
    {
      question: "Welche Aussage zur Gleichgewichtslage ist korrekt?",
      choices: [
        "Drift- und Diffusionsströme heben sich auf",
        "Es fließt kein Diffusionsstrom",
        "Es gibt kein elektrisches Feld",
        "Es existieren keine Ladungsträger"
      ],
      correctIndex: 0,
      explanation: "Im Gleichgewicht ist der Gesamtstrom null."
    },
    {
      question: "Welche Größe ändert sich bei Beleuchtung eines Halbleiters direkt?",
      choices: [
        "Ladungsträgerkonzentration",
        "Bandlückenenergie",
        "Kristallgitter",
        "Elementarladung"
      ],
      correctIndex: 0,
      explanation: "Licht erzeugt zusätzliche Elektron-Loch-Paare."
    },
    {
      question: "Welche Aussage zur Generation durch Licht ist korrekt?",
      choices: [
        "Sie erhöht n und p gleichzeitig",
        "Sie erhöht nur n",
        "Sie erhöht nur p",
        "Sie verringert ni"
      ],
      correctIndex: 0,
      explanation: "Photonen erzeugen Elektron-Loch-Paare."
    },
    {
      question: "Warum verschiebt sich das intrinsische Ferminiveau Ei bei NC ≠ NV von der Mitte der Bandlücke?",
      choices: [
        "Weil unterschiedliche effektive Massen von Elektronen und Löchern vorliegen",
        "Weil die Bandlücke temperaturabhängig ist",
        "Weil intrinsische Halbleiter dotiert sind",
        "Weil die Elementarladung nicht konstant ist"
      ],
      correctIndex: 0,
      explanation: "NC und NV hängen von den effektiven Massen ab; bei NC ≠ NV verschiebt sich Ei logarithmisch."
    },
    {
      question: "Welche physikalische Bedeutung hat der Term exp(−Eg / 2kT) in der Formel für ni?",
      choices: [
        "Er beschreibt die thermische Aktivierung von Elektron-Loch-Paaren über die Bandlücke",
        "Er beschreibt die Driftbewegung der Ladungsträger",
        "Er beschreibt die Zustandsdichte im Leitungsband",
        "Er beschreibt die Dotierkonzentration"
      ],
      correctIndex: 0,
      explanation: "Der Exponentialterm dominiert die Temperaturabhängigkeit von ni."
    },
    {
      question: "Warum nimmt die Beweglichkeit bei sehr hoher Dotierung ab, selbst bei niedriger Temperatur?",
      choices: [
        "Wegen Coulomb-Streuung an ionisierten Dotieratomen",
        "Wegen verstärkter Phononenstreuung",
        "Wegen Abnahme der Bandlücke",
        "Wegen Verringerung der Ladungsträgerzahl"
      ],
      correctIndex: 0,
      explanation: "Ionisierte Dotieratome wirken als Streuzentren für Ladungsträger."
    },
    {
      question: "Welche Annahme ist notwendig, um σ = q(nμn + pμp) anwenden zu dürfen?",
      choices: [
        "Dass Drift der dominante Transportmechanismus ist",
        "Dass keine Rekombination stattfindet",
        "Dass der Halbleiter intrinsisch ist",
        "Dass die Temperatur 0 K beträgt"
      ],
      correctIndex: 0,
      explanation: "Die Formel beschreibt den Driftstrom im elektrischen Feld."
    },
    {
      question: "Warum kann bei einem nicht-entarteten Halbleiter die Boltzmann-Näherung verwendet werden?",
      choices: [
        "Weil EF mehrere kT von den Bandkanten entfernt liegt",
        "Weil die Bandlücke sehr klein ist",
        "Weil keine Rekombination auftritt",
        "Weil NC = NV gilt"
      ],
      correctIndex: 0,
      explanation: "Dann ist die Fermi-Dirac-Verteilung gut durch eine Exponentialfunktion näherbar."
    },
    {
      question: "Welche physikalische Größe wird durch die Krümmung des E-k-Diagramms direkt bestimmt?",
      choices: [
        "Die effektive Masse",
        "Die Bandlücke",
        "Die Zustandsdichte",
        "Die Lebensdauer"
      ],
      correctIndex: 0,
      explanation: "m* ∝ (d²E/dk²)⁻¹."
    },
    {
      question: "Warum tragen Minoritätsladungsträger trotz geringer Konzentration wesentlich zu Bauelementfunktionen bei?",
      choices: [
        "Weil sie für pn-Übergänge und Rekombinationsprozesse entscheidend sind",
        "Weil ihre Beweglichkeit größer ist",
        "Weil sie die Majoritätsladungsträger ersetzen",
        "Weil sie temperaturunabhängig sind"
      ],
      correctIndex: 0,
      explanation: "pn-Übergänge und Diodenwirkung beruhen auf Minoritätsladungsträgern."
    },
    {
      question: "Welche Annahme liegt der Einstein-Relation D/μ = kT/q zugrunde?",
      choices: [
        "Thermodynamisches Gleichgewicht",
        "Hohe elektrische Feldstärke",
        "Entartete Dotierung",
        "Zeitabhängiger Stromfluss"
      ],
      correctIndex: 0,
      explanation: "Die Relation gilt nur im thermischen Gleichgewicht."
    },
    {
      question: "Warum ist die Raumladungszone frei von beweglichen Ladungsträgern?",
      choices: [
        "Weil Elektronen und Löcher dort rekombiniert sind",
        "Weil die Bandlücke dort größer ist",
        "Weil keine Dotieratome vorhanden sind",
        "Weil dort kein elektrisches Feld existiert"
      ],
      correctIndex: 0,
      explanation: "Diffusion führt zur Rekombination nahe der pn-Grenze."
    },
    {
      question: "Welche physikalische Bedeutung hat die Diffusionslänge L = √(D·τ)?",
      choices: [
        "Mittlere Strecke, die ein Ladungsträger vor Rekombination zurücklegt",
        "Breite der Raumladungszone",
        "Maximale Driftstrecke im Feld",
        "Kristallgröße"
      ],
      correctIndex: 0,
      explanation: "Sie kombiniert Transport (D) und Lebensdauer (τ)."
    },
    {
      question: "Warum steigt die intrinsische Ladungsträgerkonzentration exponentiell mit der Temperatur?",
      choices: [
        "Weil thermische Energie die Bandlücke überwinden hilft",
        "Weil die Dotierung temperaturabhängig ist",
        "Weil NC und NV konstant sind",
        "Weil die Elementarladung steigt"
      ],
      correctIndex: 0,
      explanation: "Die thermische Anregung über Eg ist der dominante Effekt."
    },
    {
      question: "Welche physikalische Rolle spielt das elektrische Feld in der Raumladungszone?",
      choices: [
        "Es wirkt der weiteren Diffusion von Ladungsträgern entgegen",
        "Es erzeugt neue Elektron-Loch-Paare",
        "Es erhöht die Beweglichkeit",
        "Es eliminiert Rekombination"
      ],
      correctIndex: 0,
      explanation: "Das eingebaute Feld stellt das Gleichgewicht her."
    },
    {
      question: "Warum ist der Gesamtstrom im thermischen Gleichgewicht null?",
      choices: [
        "Weil Drift- und Diffusionsströme sich exakt kompensieren",
        "Weil keine Ladungsträger existieren",
        "Weil das elektrische Feld verschwindet",
        "Weil keine Dotierung vorliegt"
      ],
      correctIndex: 0,
      explanation: "Ein zentrales Resultat der Halbleiterstatistik."
    },
    {
      question: "Welche physikalische Bedeutung hat die Kontinuitätsgleichung?",
      choices: [
        "Erhaltung der Ladungsträger unter Generation und Rekombination",
        "Beschreibung der Bandstruktur",
        "Berechnung der Bandlücke",
        "Definition der Beweglichkeit"
      ],
      correctIndex: 0,
      explanation: "Sie ist eine Erhaltungsgleichung für Ladungsträger."
    },
    {
      question: "Warum ist die Auger-Rekombination bei hoher Ladungsträgerdichte dominant?",
      choices: [
        "Weil die Wahrscheinlichkeit für Dreiteilchenprozesse steigt",
        "Weil Photonenemission unterdrückt wird",
        "Weil die Bandlücke größer wird",
        "Weil die Beweglichkeit zunimmt"
      ],
      correctIndex: 0,
      explanation: "Auger-Prozesse skalieren stark mit der Ladungsträgerkonzentration."
    },
    {
      question: "Welche Annahme erlaubt die Verwendung der Poisson-Gleichung im Halbleiter?",
      choices: [
        "Kontinuierliche Raumladungsverteilung",
        "Diskrete Atomstruktur",
        "Zeitabhängige Felder",
        "Nichtlokale Wechselwirkungen"
      ],
      correctIndex: 0,
      explanation: "Die kontinuierliche Näherung ist zentral für pn-Analysen."
    },
    {
      question: "Warum nimmt die Beweglichkeit bei hohen Temperaturen ab?",
      choices: [
        "Wegen verstärkter Phononenstreuung",
        "Wegen höherer Dotierung",
        "Wegen geringerer Ladungsträgerzahl",
        "Wegen Abnahme der Zustandsdichte"
      ],
      correctIndex: 0,
      explanation: "Gitterschwingungen behindern den Ladungsträgertransport."
    },
    {
      question: "Welche Größe entscheidet, ob ein Halbleiter entartet ist?",
      choices: [
        "Die Lage des Ferminiveaus relativ zu den Bandkanten",
        "Die absolute Temperatur",
        "Die Kristallstruktur",
        "Die Bandlücke allein"
      ],
      correctIndex: 0,
      explanation: "Entartung liegt vor, wenn EF innerhalb von ~3kT an den Bändern liegt."
    },
    {
      question: "Warum kann man Metalle nicht mit der Boltzmann-Näherung beschreiben?",
      choices: [
        "Weil das Ferminiveau im Band liegt",
        "Weil keine Ladungsträger existieren",
        "Weil Metalle keine Bandstruktur haben",
        "Weil die Temperatur zu niedrig ist"
      ],
      correctIndex: 0,
      explanation: "Die Zustände nahe EF sind stark besetzt → Fermi-Dirac nötig."
    },
    {
      question: "Welche physikalische Bedeutung hat die effektive Zustandsdichte NC?",
      choices: [
        "Sie fasst die verfügbaren Zustände nahe der Leitungsbandkante zusammen",
        "Sie entspricht der Elektronenkonzentration",
        "Sie ist gleich der Dotierkonzentration",
        "Sie ist temperaturunabhängig"
      ],
      correctIndex: 0,
      explanation: "NC ist ein temperaturabhängiger Maßstab für verfügbare Zustände im Leitungsband."
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