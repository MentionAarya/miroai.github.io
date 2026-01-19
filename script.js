// ===== OPEN SIDEBAR =====
function openMenu() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  sidebar.classList.add("active");
  overlay.classList.add("active");
  document.body.classList.add("no-scroll");
}

// ===== CLOSE SIDEBAR =====
function closeMenu() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("no-scroll");
}

// ===== CLOSE SIDEBAR ON LINK CLICK (MOBILE UX) =====
document.querySelectorAll(".sidebar a").forEach(link => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});
