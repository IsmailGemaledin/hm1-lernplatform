// quizzes/quizz_data.js
// Question bank for the JavaScript course.
// Format expected by quizzes/quizz.js:
// window.JS_QUIZZES = [{ id, title, questions: [{ question, choices, correctIndex, explanation? }, ...] }, ...]

window.JS_QUIZZES = window.JS_QUIZZES || [];

window.JS_QUIZZES.push({
  id: "js_basics_01_12",
  title: "JavaScript Grundlagen (Lektion 1–12)",
  questions: [
    {
      question: "Wofür wird JavaScript in Webanwendungen hauptsächlich verwendet?",
      choices: [
        "Für die Struktur einer Seite (Überschriften, Absätze, Links)",
        "Für das visuelle Design und Layout einer Seite",
        "Für Interaktivität und Logik (z. B. Events, DOM-Manipulation, Datenverarbeitung)",
        "Für das Erstellen von Datenbanken direkt im Browser"
      ],
      correctIndex: 2,
      explanation: "HTML = Struktur, CSS = Darstellung, JavaScript = Verhalten/Logik (Interaktivität, DOM, Daten)."
    },
    {
      question: "Welche Aussage über die Ausführung von JavaScript im Browser ist korrekt?",
      choices: [
        "JavaScript wird immer erst nach dem vollständigen Laden von Bildern ausgeführt.",
        "JavaScript wird im Browser standardmäßig parallel auf mehreren Threads ausgeführt.",
        "JavaScript wird beim Parsen des HTMLs ausgeführt und kann das Rendering blockieren.",
        "JavaScript kann ohne Einschränkungen auf lokale Dateien des Nutzers zugreifen."
      ],
      correctIndex: 2,
      explanation: "Scripts können das Parsen/Rendering blockieren, wenn sie früh geladen/ausgeführt werden. Browser-JS läuft zudem in einer Sandbox."
    },
    {
      question: "Welche Einbindung ist in professionellen Projekten Standard?",
      choices: [
        "Inline-JavaScript im onclick-Attribut",
        "Internes JavaScript direkt im <script>-Tag im HTML",
        "Externes JavaScript über <script src=\"...\">",
        "JavaScript wird nur über CSS-Animationen ersetzt"
      ],
      correctIndex: 2,
      explanation: "Externe JS-Dateien sind sauber, wiederverwendbar und leichter zu debuggen."
    },
    {
      question: "Was bewirkt das Attribut defer bei einem Script-Tag?",
      choices: [
        "Es verhindert, dass das Script geladen wird.",
        "Es lädt das Script sofort und führt es erst nach dem HTML-Parsing aus.",
        "Es führt das Script sofort aus und lädt es erst danach.",
        "Es funktioniert nur bei Inline-Scripts."
      ],
      correctIndex: 1,
      explanation: "defer = Download parallel, Ausführung nach dem Parsen des HTMLs (in Dokument-Reihenfolge)."
    },
    {
      question: "Welche Anweisung erzeugt eine Konstante, die nicht neu zugewiesen werden kann?",
      choices: ["var x = 3;", "let x = 3;", "const x = 3;", "static x = 3;"],
      correctIndex: 2,
      explanation: "const verhindert Reassignment der Variable (bei Objekten/Arrays sind interne Werte trotzdem änderbar)."
    },
    {
      question: "Was ist der Unterschied zwischen == und ===?",
      choices: [
        "Kein Unterschied",
        "=== vergleicht zusätzlich den Typ (keine implizite Typumwandlung)",
        "== vergleicht zusätzlich den Typ",
        "=== funktioniert nur für Zahlen"
      ],
      correctIndex: 1,
      explanation: "=== ist der strikte Vergleich (Wert + Typ)."
    },
    {
      question: "Welche Aussage über Funktionen ist korrekt?",
      choices: [
        "Funktionen können keine Parameter haben.",
        "Funktionen müssen immer einen Wert zurückgeben.",
        "Ohne return gibt eine Funktion undefined zurück.",
        "Funktionen können nicht als Werte gespeichert werden."
      ],
      correctIndex: 2,
      explanation: "Wenn kein return erreicht wird, ist das Ergebnis undefined."
    },
    {
      question: "Welche Arrow-Function ist äquivalent zu: function add(a, b) { return a + b; }",
      choices: [
        "const add = (a, b) => { a + b; }",
        "const add = (a, b) => a + b;",
        "const add = (a, b) => return a + b;",
        "const add = a + b => (a, b);"
      ],
      correctIndex: 1,
      explanation: "Bei einer Expression kann return weggelassen werden: (a,b) => a+b"
    },
    {
      question: "Wie greifst du auf das erste Element eines Arrays arr zu?",
      choices: ["arr(1)", "arr[1]", "arr[0]", "arr.first()"],
      correctIndex: 2,
      explanation: "Arrays sind 0-indexiert."
    },
    {
      question: "Welche Methode hängt ein Element am Ende eines Arrays an?",
      choices: ["push()", "pop()", "shift()", "unshift()"],
      correctIndex: 0,
      explanation: "push() fügt am Ende hinzu; pop() entfernt am Ende."
    },
    {
      question: "Welche Aussage über Objekte ist korrekt?",
      choices: [
        "Objekte speichern Werte nur in einer festen Reihenfolge wie Arrays.",
        "Objekte bestehen aus Schlüssel–Wert-Paaren.",
        "Objekte können keine Funktionen enthalten.",
        "Auf Eigenschaften kann nur mit eckigen Klammern zugegriffen werden."
      ],
      correctIndex: 1,
      explanation: "Objekte sind Key-Value-Strukturen; Zugriff via Punkt oder Klammern."
    },
    {
      question: "Was ist das DOM?",
      choices: [
        "Eine CSS-Datei zur Gestaltung von HTML",
        "Die Datenbank des Browsers",
        "Die interne Baumdarstellung des HTML-Dokuments im Browser",
        "Ein JavaScript-Framework"
      ],
      correctIndex: 2,
      explanation: "DOM = Document Object Model, Baumstruktur der Seite."
    },
    {
      question: "Welche Methode wählt das erste Element passend zum CSS-Selektor aus?",
      choices: [
        "document.getElementById()",
        "document.querySelector()",
        "document.querySelectorAll()",
        "document.select()"
      ],
      correctIndex: 1,
      explanation: "querySelector liefert das erste passende Element."
    },
    {
      question: "Wie registrierst du korrekt einen Klick-Event-Listener?",
      choices: [
        "button.onClick(() => {...})",
        "button.addEventListener('click', handler())",
        "button.addEventListener('click', handler)",
        "button.addListener('click', handler)"
      ],
      correctIndex: 2,
      explanation: "handler wird als Referenz übergeben (nicht sofort aufrufen)."
    },
    {
      question: "Was beschreibt ein Promise am besten?",
      choices: [
        "Eine Schleife, die garantiert endet",
        "Ein Wert, der später verfügbar sein wird (oder fehlschlägt)",
        "Ein Objekt, das nur im DOM existiert",
        "Eine Methode, um CSS zu laden"
      ],
      correctIndex: 1,
      explanation: "Promises repräsentieren zukünftige Ergebnisse: pending/fulfilled/rejected."
    },
    {
      question: "Welche Aussage zu fetch ist korrekt?",
      choices: [
        "fetch ist synchron und blockiert den Browser.",
        "fetch wirft automatisch einen Fehler bei HTTP 404.",
        "fetch gibt ein Promise zurück und ist asynchron.",
        "fetch kann nur GET-Anfragen senden."
      ],
      correctIndex: 2,
      explanation: "fetch ist asynchron (Promise). HTTP-Fehler müssen über response.ok geprüft werden."
    },
    {
      question: "Wie prüfst du nach fetch korrekt auf HTTP-Fehler?",
      choices: [
        "if (response.status === 0) throw new Error()",
        "if (!response.ok) throw new Error('HTTP-Fehler')",
        "catch fängt automatisch 404 ab, daher keine Prüfung nötig",
        "if (response.json) throw new Error()"
      ],
      correctIndex: 1,
      explanation: "response.ok ist false bei Statuscodes >= 400."
    },
    {
      question: "Welche Einbindung ist nötig, damit ES-Module im Browser funktionieren?",
      choices: [
        "<script src=\"app.js\"></script>",
        "<script async src=\"app.js\"></script>",
        "<script type=\"module\" src=\"app.js\"></script>",
        "<script module src=\"app.js\"></script>"
      ],
      correctIndex: 2,
      explanation: "ES-Module benötigen type=\"module\"."
    },
    {
      question: "Was ist ein Named Export?",
      choices: [
        "export default function ...",
        "export { add, multiply }",
        "import add from './math.js'",
        "Ein Export ohne Dateiendung"
      ],
      correctIndex: 1,
      explanation: "Named Exports: export function add() {} oder export { add }."
    },
    {
      question: "Welche Best Practice ist in modernem JS am sinnvollsten?",
      choices: [
        "var überall verwenden",
        "Globale Variablen als Standard",
        "const standardmäßig, let nur bei Reassignment",
        "== ist besser als ==="
      ],
      correctIndex: 2,
      explanation: "const ist Standard, let nur wenn nötig. === statt ==."
    },
    {
      question: "Was ist der Rückgabewert von typeof null?",
      choices: [
        "'null'",
        "'object'",
        "'undefined'",
        "'number'"
      ],
      correctIndex: 1,
      explanation: "typeof null === 'object' ist ein historischer Bug in JavaScript."
    },
    {
      question: "Welche Aussage über let und const ist korrekt?",
      choices: [
        "let ist block-scope, const ist function-scope",
        "let und const sind beide block-scope",
        "const ist global-scope",
        "let kann nicht neu zugewiesen werden"
      ],
      correctIndex: 1,
      explanation: "Sowohl let als auch const sind block-scope."
    },
    {
      question: "Was passiert, wenn auf eine nicht definierte Variable zugegriffen wird?",
      choices: [
        "JavaScript gibt undefined zurück",
        "JavaScript wirft einen ReferenceError",
        "JavaScript setzt den Wert automatisch auf null",
        "Der Code wird ignoriert"
      ],
      correctIndex: 1,
      explanation: "Der Zugriff auf eine nicht deklarierte Variable wirft einen ReferenceError."
    },
    {
      question: "Was ist Hoisting?",
      choices: [
        "Das automatische Verschieben von Variablen an das Ende des Codes",
        "Das Laden von Modulen vor dem HTML",
        "Das Hochziehen von Deklarationen vor deren Verwendung",
        "Ein Feature nur für Arrow Functions"
      ],
      correctIndex: 2,
      explanation: "Deklarationen (nicht Initialisierungen) werden vor der Ausführung verarbeitet."
    },
    {
      question: "Welche Variable wird gehoistet?",
      choices: [
        "const",
        "let",
        "var",
        "Alle gleich"
      ],
      correctIndex: 2,
      explanation: "var wird gehoistet (Initialisierung bleibt undefined)."
    },
    {
      question: "Was ist der Standardwert von this im Browser (nicht strict mode)?",
      choices: [
        "undefined",
        "document",
        "window",
        "globalThis"
      ],
      correctIndex: 2,
      explanation: "Im nicht-strikten Modus zeigt this im globalen Kontext auf window."
    },
    {
      question: "Welche Aussage über Arrow Functions ist korrekt?",
      choices: [
        "Arrow Functions haben ihr eigenes this",
        "Arrow Functions können nicht anonym sein",
        "Arrow Functions übernehmen this aus dem umgebenden Kontext",
        "Arrow Functions können nicht zurückgeben"
      ],
      correctIndex: 2,
      explanation: "Arrow Functions binden kein eigenes this."
    },
    {
      question: "Was macht Array.prototype.map()?",
      choices: [
        "Verändert das bestehende Array",
        "Erstellt ein neues Array basierend auf einer Funktion",
        "Filtert Elemente heraus",
        "Sortiert das Array"
      ],
      correctIndex: 1,
      explanation: "map gibt immer ein neues Array zurück."
    },
    {
      question: "Welche Methode entfernt Elemente aus einem Array?",
      choices: [
        "slice()",
        "map()",
        "splice()",
        "concat()"
      ],
      correctIndex: 2,
      explanation: "splice verändert das Originalarray."
    },
    {
      question: "Was ist der Rückgabewert von [].length?",
      choices: ["undefined", "null", "0", "1"],
      correctIndex: 2,
      explanation: "Ein leeres Array hat die Länge 0."
    },
    {
      question: "Wie wird ein Objekt korrekt destrukturiert?",
      choices: [
        "const [a, b] = obj;",
        "const {a, b} = obj;",
        "const (a, b) = obj;",
        "const obj(a, b);"
      ],
      correctIndex: 1,
      explanation: "Objektdestrukturierung verwendet geschweifte Klammern."
    },
    {
      question: "Was ist der Zweck von event.preventDefault()?",
      choices: [
        "Beendet das JavaScript-Programm",
        "Verhindert das Standardverhalten eines Events",
        "Entfernt einen Event Listener",
        "Stoppt die Event-Blase"
      ],
      correctIndex: 1,
      explanation: "preventDefault verhindert z. B. das Absenden eines Formulars."
    },
    {
      question: "Welche Methode stoppt die Event-Propagation?",
      choices: [
        "event.cancel()",
        "event.preventDefault()",
        "event.stopPropagation()",
        "event.stop()"
      ],
      correctIndex: 2,
      explanation: "stopPropagation verhindert Bubbling/Capturing."
    },
    {
      question: "Was bedeutet Asynchronität in JavaScript?",
      choices: [
        "Code wird parallel auf mehreren CPUs ausgeführt",
        "Code wird blockierend ausgeführt",
        "Lange Operationen blockieren nicht den Hauptthread",
        "JavaScript pausiert den Browser"
      ],
      correctIndex: 2,
      explanation: "Asynchronität verhindert Blockieren des Main Threads."
    },
    {
      question: "Welche Methode wird verwendet, um ein Promise erfolgreich zu behandeln?",
      choices: [
        "catch()",
        "resolve()",
        "then()",
        "await()"
      ],
      correctIndex: 2,
      explanation: "then() verarbeitet erfüllte Promises."
    },
    {
      question: "Was bewirkt await?",
      choices: [
        "Es blockiert den gesamten Browser",
        "Es wartet synchron ohne Promise",
        "Es pausiert die async-Funktion bis das Promise erfüllt ist",
        "Es ersetzt then() global"
      ],
      correctIndex: 2,
      explanation: "await funktioniert nur innerhalb von async-Funktionen."
    },
    {
      question: "Welche Aussage zu async-Funktionen ist korrekt?",
      choices: [
        "Sie geben immer ein Promise zurück",
        "Sie blockieren den Main Thread",
        "Sie funktionieren ohne Promises",
        "Sie sind identisch zu normalen Funktionen"
      ],
      correctIndex: 0,
      explanation: "async-Funktionen geben implizit ein Promise zurück."
    },
    {
      question: "Was ist JSON?",
      choices: [
        "Ein JavaScript-Framework",
        "Ein Datenformat auf Basis von JavaScript-Objekten",
        "Ein HTML-Ersatz",
        "Eine CSS-Erweiterung"
      ],
      correctIndex: 1,
      explanation: "JSON = JavaScript Object Notation."
    },
    {
      question: "Wie wandelst du ein Objekt in JSON um?",
      choices: [
        "JSON.parse(obj)",
        "JSON.stringify(obj)",
        "obj.toJSON()",
        "String(obj)"
      ],
      correctIndex: 1,
      explanation: "JSON.stringify serialisiert Objekte."
    },
    {
      question: "Welche Aussage über Best Practices ist korrekt?",
      choices: [
        "Globale Variablen sind empfehlenswert",
        "Code sollte möglichst kurz sein",
        "Lesbarkeit ist wichtiger als Cleverness",
        "Kommentare sind überflüssig"
      ],
      correctIndex: 2,
      explanation: "Lesbarer Code ist wartbarer Code."
    },
    {
      question: "Was gibt die Funktion zurück? function f(){ }  f()",
      choices: ["null", "0", "undefined", "false"],
      correctIndex: 2,
      explanation: "Ohne return gibt eine Funktion standardmäßig undefined zurück."
    },
    {
      question: "Welche Aussage über Scope ist korrekt?",
      choices: [
        "var ist block-scope",
        "let und const sind block-scope",
        "const ist global-scope",
        "function-scope gibt es in JS nicht"
      ],
      correctIndex: 1,
      explanation: "let/const sind block-scope, var ist function-scope."
    },
    {
      question: "Was ist eine Closure?",
      choices: [
        "Eine Schleife, die sich selbst beendet",
        "Eine Funktion mit Zugriff auf Variablen aus dem äußeren Scope",
        "Ein Objekt ohne Prototyp",
        "Ein Synonym für Callback"
      ],
      correctIndex: 1,
      explanation: "Closures speichern den Lexical Environment (äußerer Scope bleibt zugreifbar)."
    },
    {
      question: "Was ist der Unterschied zwischen function declaration und function expression?",
      choices: [
        "Keiner",
        "Nur Declarations werden hoisted (vollständig), Expressions nicht vollständig",
        "Nur Expressions können Parameter haben",
        "Nur Expressions können return verwenden"
      ],
      correctIndex: 1,
      explanation: "Function Declarations werden hoisted; Function Expressions erst nach Zuweisung nutzbar."
    },
    {
      question: "Welche Aussage zu Temporal Dead Zone (TDZ) ist korrekt?",
      choices: [
        "TDZ betrifft nur var",
        "TDZ bedeutet, dass let/const vor Deklaration nicht zugreifbar sind",
        "TDZ ist ein Browser-Bug",
        "TDZ macht Variablen automatisch null"
      ],
      correctIndex: 1,
      explanation: "let/const existieren im Scope, sind aber bis zur Deklaration nicht nutzbar (ReferenceError)."
    },
    {
      question: "Was ist das Ergebnis: '5' + 2",
      choices: ["7", "52", "NaN", "TypeError"],
      correctIndex: 1,
      explanation: "Mit + und String erfolgt Konkatenation: '5' + 2 -> '52'."
    },
    {
      question: "Was ist das Ergebnis: '5' - 2",
      choices: ["3", "52", "NaN", "TypeError"],
      correctIndex: 0,
      explanation: "Bei - werden Strings zu Zahlen konvertiert: '5' - 2 -> 3."
    },
    {
      question: "Was ist das Ergebnis: Number('')",
      choices: ["0", "NaN", "undefined", "''"],
      correctIndex: 0,
      explanation: "Leerer String wird zu 0 konvertiert."
    },
    {
      question: "Was ist das Ergebnis: Boolean('false')",
      choices: ["false", "true", "NaN", "TypeError"],
      correctIndex: 1,
      explanation: "Nicht-leere Strings sind truthy, auch 'false'."
    },
    {
      question: "Welche Werte sind falsy in JavaScript?",
      choices: [
        "0, '', null, undefined, NaN, false",
        "0, '0', [], {}",
        "null, {}, ' '",
        "undefined, 'false', 1"
      ],
      correctIndex: 0,
      explanation: "Falsy: false, 0, -0, 0n, '', null, undefined, NaN."
    },
    {
      question: "Was macht optional chaining (?.)?",
      choices: [
        "Es erstellt eine tiefe Kopie",
        "Es verhindert Fehler beim Zugriff auf evtl. null/undefined",
        "Es castet zu boolean",
        "Es macht aus einem Objekt ein Array"
      ],
      correctIndex: 1,
      explanation: "obj?.a?.b gibt undefined statt Fehler, wenn zwischendrin null/undefined."
    },
    {
      question: "Was ist der Unterschied zwischen null und undefined?",
      choices: [
        "Keiner",
        "null = bewusst kein Wert, undefined = nicht gesetzt/fehlt",
        "undefined ist ein Objekt, null ist ein String",
        "null kann nicht verglichen werden"
      ],
      correctIndex: 1,
      explanation: "null = absichtlich leer; undefined = Standard bei fehlenden Zuweisungen."
    },
    {
      question: "Was ist der Rückgabewert von Array.isArray([])?",
      choices: ["true", "false", "undefined", "object"],
      correctIndex: 0,
      explanation: "Array.isArray prüft korrekt, ob ein Wert ein Array ist."
    },
    {
      question: "Welche Methode erstellt aus einer NodeList ein echtes Array?",
      choices: [
        "NodeList.toArray()",
        "Array.from(nodeList)",
        "nodeList.map(...)",
        "nodeList.push(...)"
      ],
      correctIndex: 1,
      explanation: "Array.from(...) oder [...nodeList] erzeugen ein Array."
    },
    {
      question: "Was ist der Unterschied zwischen querySelector und querySelectorAll?",
      choices: [
        "Beide liefern immer alle Elemente",
        "querySelector liefert das erste Element, querySelectorAll alle passenden",
        "querySelectorAll liefert nur IDs",
        "querySelector funktioniert nur im head"
      ],
      correctIndex: 1,
      explanation: "querySelector -> erstes Match; querySelectorAll -> NodeList aller Matches."
    },
    {
      question: "Welche Methode fügt einem Element eine CSS-Klasse hinzu?",
      choices: ["el.classAdd('x')", "el.classList.add('x')", "el.addClass('x')", "el.style.class='x'"],
      correctIndex: 1,
      explanation: "Über classList.add entfernst/fügst du Klassen sauber hinzu."
    },
    {
      question: "Was macht event.target?",
      choices: [
        "Das Element, an dem der Listener hängt",
        "Das Element, das das Event ausgelöst hat",
        "Der aktuelle URL-Host",
        "Den Event-Typ als String"
      ],
      correctIndex: 1,
      explanation: "target ist das tatsächliche Auslöse-Element; currentTarget ist das Listener-Element."
    },
    {
      question: "Was macht event.currentTarget?",
      choices: [
        "Das Element, an dem der Listener registriert ist",
        "Das Element, das geklickt wurde",
        "Ein Alias für target",
        "Der Parent-Node des Targets"
      ],
      correctIndex: 0,
      explanation: "currentTarget = Element des Listeners; target = tatsächlicher Ursprung."
    },
    {
      question: "Was ist Event Delegation?",
      choices: [
        "Ein Event wird gelöscht",
        "Ein Listener an einem Parent verarbeitet Events von Kindern",
        "Ein Event wird mehrfach ausgelöst",
        "Ein Event wird synchronisiert"
      ],
      correctIndex: 1,
      explanation: "Delegation nutzt Bubbling: Parent lauscht und prüft target."
    },
    {
      question: "Was bedeutet Bubbling?",
      choices: [
        "Events laufen von außen nach innen",
        "Events laufen vom Target nach oben (zu Parents)",
        "Events laufen nur auf window",
        "Events sind immer asynchron"
      ],
      correctIndex: 1,
      explanation: "Bubbling: Ereignis wandert vom Ziel nach oben durch DOM-Hierarchie."
    },
    {
      question: "Was ist Capturing?",
      choices: [
        "Events laufen von außen nach innen",
        "Events laufen vom Target nach oben",
        "Events laufen nur in Shadow DOM",
        "Events laufen nur bei Tastatur"
      ],
      correctIndex: 0,
      explanation: "Capturing-Phase: von Document/Window Richtung Target."
    },
    {
      question: "Wie aktivierst du Capturing bei addEventListener?",
      choices: [
        "addEventListener('click', fn, true)",
        "addEventListener('click', fn, 'capture')",
        "addEventListener('click', true, fn)",
        "addEventListener(true)"
      ],
      correctIndex: 0,
      explanation: "Dritter Parameter true oder {capture:true} aktiviert Capturing."
    },
    {
      question: "Welche Aussage zu fetch ist korrekt?",
      choices: [
        "fetch sendet Cookies immer automatisch in jede Domain",
        "fetch liefert bei 404 automatisch catch",
        "fetch muss response.ok prüfen",
        "fetch unterstützt keine JSON-Antworten"
      ],
      correctIndex: 2,
      explanation: "HTTP-Fehler sind keine Promise-Rejections; response.ok prüfen."
    },
    {
      question: "Was macht Promise.all([...])?",
      choices: [
        "Es führt Promises nacheinander aus",
        "Es wartet auf alle Promises oder bricht bei erstem Reject ab",
        "Es ignoriert Fehler",
        "Es macht alle Promises synchron"
      ],
      correctIndex: 1,
      explanation: "Promise.all resolved mit Array; reject, sobald eines rejectet."
    },
    {
      question: "Was macht Promise.race([...])?",
      choices: [
        "Es wartet auf alle Promises",
        "Es liefert das erste settled Promise (resolve oder reject)",
        "Es liefert immer das langsamste Promise",
        "Es sortiert Promises"
      ],
      correctIndex: 1,
      explanation: "race gibt das Ergebnis des zuerst abgeschlossenen Promises zurück."
    },
    {
      question: "Was ist eine Microtask-Queue?",
      choices: [
        "Queue für DOM-Events",
        "Queue für Promises (then/catch/finally) mit hoher Priorität",
        "Queue für setTimeout",
        "Queue für Netzwerkkarten"
      ],
      correctIndex: 1,
      explanation: "Promise-Reaktionen laufen in Microtasks (vor Macrotasks wie setTimeout)."
    },
    {
      question: "Was ist ein typischer Macrotask?",
      choices: ["Promise.then", "queueMicrotask", "setTimeout", "await"],
      correctIndex: 2,
      explanation: "setTimeout/Events sind Macrotasks; Promise.then ist Microtask."
    },
    {
      question: "Welche Aussage über JSON.parse ist korrekt?",
      choices: [
        "Es wandelt ein Objekt zu JSON-Text um",
        "Es wandelt JSON-Text zu einem JS-Wert um",
        "Es funktioniert nur im Node.js",
        "Es gibt immer einen String zurück"
      ],
      correctIndex: 1,
      explanation: "JSON.parse nimmt einen JSON-String und liefert Objekt/Array/etc."
    },
    {
      question: "Was macht JSON.stringify?",
      choices: [
        "Es parst JSON-Text",
        "Es serialisiert JS-Werte zu JSON-Text",
        "Es entfernt alle Keys",
        "Es wandelt immer zu Number"
      ],
      correctIndex: 1,
      explanation: "stringify erzeugt JSON-Text (String) aus JS-Werten."
    },
    {
      question: "Welche Aussage zu try/catch ist korrekt?",
      choices: [
        "try/catch fängt Syntaxfehler beim Parsen sicher ab",
        "try/catch fängt nur Runtime-Fehler in synchronem Code ab",
        "try/catch fängt automatisch Promise-Rejections außerhalb von await",
        "try/catch ersetzt response.ok"
      ],
      correctIndex: 1,
      explanation: "try/catch fängt Runtime-Fehler; bei Promises brauchst du await oder catch."
    },
    {
      question: "Welche Aussage zu async/await ist korrekt?",
      choices: [
        "await blockiert den ganzen Browser",
        "async-Funktionen geben immer ein Promise zurück",
        "await kann überall verwendet werden",
        "async macht Code schneller"
      ],
      correctIndex: 1,
      explanation: "async-Funktionen liefern Promises; await pausiert nur die async-Funktion."
    },
    {
      question: "Was ist der Vorteil von Modules (ESM)?",
      choices: [
        "Sie machen JavaScript typisiert",
        "Sie verhindern globalen Scope und erlauben explizite Imports/Exports",
        "Sie ersetzen HTML",
        "Sie machen fetch synchron"
      ],
      correctIndex: 1,
      explanation: "Module kapseln Code und reduzieren globale Seiteneffekte."
    },
    {
      question: "Welche Einbindung ist korrekt für ES-Module im Browser?",
      choices: [
        "<script src='app.js'></script>",
        "<script type='module' src='app.js'></script>",
        "<script module src='app.js'></script>",
        "<script defer module src='app.js'></script>"
      ],
      correctIndex: 1,
      explanation: "Module benötigen type='module'."
    },
    {
      question: "Welche Aussage über Import-Pfade im Browser ist korrekt?",
      choices: [
        "Imports brauchen keine Dateiendung",
        "Imports müssen meist relative Pfade mit ./ oder ../ verwenden",
        "import funktioniert ohne type='module'",
        "import lädt automatisch aus node_modules im Browser"
      ],
      correctIndex: 1,
      explanation: "Im Browser braucht man i. d. R. relative Pfade inkl. Dateiendung."
    },
    {
      question: "Was ist der Unterschied zwischen innerHTML und textContent?",
      choices: [
        "Keiner",
        "innerHTML interpretiert HTML, textContent setzt reinen Text",
        "textContent interpretiert HTML, innerHTML nicht",
        "innerHTML ist sicherer als textContent"
      ],
      correctIndex: 1,
      explanation: "innerHTML parst HTML (XSS-Risiko), textContent setzt nur Text."
    },
    {
      question: "Welche Aussage ist sicherheitsrelevant korrekt?",
      choices: [
        "innerHTML ist immer sicher",
        "textContent ist sicherer für User-Eingaben als innerHTML",
        "XSS hat nichts mit DOM zu tun",
        "Nur CSS kann XSS verursachen"
      ],
      correctIndex: 1,
      explanation: "User-Input nie ungeprüft per innerHTML einfügen."
    },
    {
      question: "Wie erstellst du ein neues DOM-Element korrekt?",
      choices: [
        "document.newElement('div')",
        "document.createElement('div')",
        "document.make('div')",
        "new Element('div')"
      ],
      correctIndex: 1,
      explanation: "document.createElement erzeugt ein Element-Node."
    },
    {
      question: "Was macht element.appendChild(child)?",
      choices: [
        "Es entfernt child aus dem DOM",
        "Es hängt child ans Ende von element an",
        "Es ersetzt element durch child",
        "Es klont child automatisch"
      ],
      correctIndex: 1,
      explanation: "appendChild fügt den Node als letztes Kind hinzu (und bewegt ihn, falls er schon existiert)."
    },
    {
      question: "Wie entfernst du ein Element aus dem DOM (modern)?",
      choices: [
        "element.delete()",
        "element.remove()",
        "document.remove(element)",
        "element.drop()"
      ],
      correctIndex: 1,
      explanation: "element.remove() entfernt das Element aus dem DOM."
    },
    {
      question: "Welche Array-Methode prüft, ob mindestens ein Element eine Bedingung erfüllt?",
      choices: ["every()", "some()", "filter()", "reduce()"],
      correctIndex: 1,
      explanation: "some() gibt true zurück, wenn mindestens ein Element die Bedingung erfüllt."
    },
    {
      question: "Welche Array-Methode prüft, ob alle Elemente eine Bedingung erfüllen?",
      choices: ["every()", "some()", "find()", "map()"],
      correctIndex: 0,
      explanation: "every() gibt true zurück, wenn alle Elemente die Bedingung erfüllen."
    },
    {
      question: "Welche Aussage über reduce() ist korrekt?",
      choices: [
        "reduce() kann nur Zahlen addieren",
        "reduce() baut aus einem Array einen einzelnen Wert (Akkumulator)",
        "reduce() entfernt Elemente aus dem Array",
        "reduce() sortiert das Array"
      ],
      correctIndex: 1,
      explanation: "reduce akkumuliert Werte (Summe, Objekt, Map, etc.)."
    },
    {
      question: "Was ist der Unterschied zwischen == null und === null?",
      choices: [
        "== null trifft nur auf null zu",
        "== null trifft auf null und undefined zu",
        "=== null trifft auf null und undefined zu",
        "Keiner"
      ],
      correctIndex: 1,
      explanation: "x == null ist true für null oder undefined (absichtlich lax)."
    }
  ]
});