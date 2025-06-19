// Theme toggle
document.getElementById("modeToggle").addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  document.getElementById("modeToggle").textContent = next === "dark" ? "🌙" : "☀️";
});

// Hide loader after 2 sec
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".loader").style.display = "none";
  }, 2000);
});

