// editor.js
document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("jsOutput");
  const editorEl = document.getElementById("jsEditor");
  const btnRun = document.getElementById("btnRun");
  const btnReset = document.getElementById("btnReset");
  const btnClear = document.getElementById("btnClearOut");

  if (!output || !editorEl || !btnRun) return;

  const write = (text) => { output.textContent += text + "\n"; };
  const clear = () => { output.textContent = ""; };

  if (!window.ace) {
    write("Error: Ace Editor konnte nicht geladen werden.");
    return;
  }

  const editor = ace.edit("jsEditor");
  editor.setTheme("ace/theme/chrome");
  editor.session.setMode("ace/mode/javascript");
  editor.setOptions({
    fontSize: "14px",
    showPrintMargin: false,
    wrap: true,
    tabSize: 2
  });

  const DEFAULT_CODE = `// Schreibe JavaScript und klicke auf "Run"
function greet(name) {
  return "Hallo, " + name + "!";
}

console.log(greet("World"));
`;

  editor.setValue(DEFAULT_CODE, -1);

  btnClear?.addEventListener("click", clear);

  btnReset?.addEventListener("click", () => {
    editor.setValue(DEFAULT_CODE, -1);
    clear();
  });

  btnRun.addEventListener("click", () => {
    clear();

    const oldLog = console.log;
    const oldWarn = console.warn;
    const oldErr = console.error;

    console.log = (...args) => write(args.map(String).join(" "));
    console.warn = (...args) => write("Warn: " + args.map(String).join(" "));
    console.error = (...args) => write("Error: " + args.map(String).join(" "));

    try {
      new Function(editor.getValue())();
    } catch (e) {
      write("Error: " + (e?.message || String(e)));
    } finally {
      console.log = oldLog;
      console.warn = oldWarn;
      console.error = oldErr;
    }
  });
});