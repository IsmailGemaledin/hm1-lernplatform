document.addEventListener("DOMContentLoaded", () => {
    // DARK MODE BUTTON
    const btn = document.createElement("button");
    btn.textContent = "🌓";
    btn.id = "darkToggle";
    document.body.appendChild(btn);

    const saved = localStorage.getItem("theme") || "light";
    document.documentElement.dataset.theme = saved;

    btn.onclick = () => {
        const t = document.documentElement.dataset.theme === "light" ? "dark" : "light";
        document.documentElement.dataset.theme = t;
        localStorage.setItem("theme", t);
    };

    // SCROLL TO TOP BUTTON
    const topBtn = document.createElement("div");
    topBtn.id = "topBtn";
    topBtn.textContent = "↑";
    document.body.appendChild(topBtn);

    window.addEventListener("scroll", () => {
        topBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
});