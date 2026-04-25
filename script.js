const menuBtn = document.querySelector("[data-menu-btn]");
const navLinks = document.querySelector("[data-nav-links]");
const yearNode = document.querySelector("[data-year]");
const contactForm = document.querySelector("[data-contact-form]");
const notice = document.querySelector("[data-form-notice]");

if (menuBtn && navLinks) {
  const setOpen = (open) => {
    navLinks.classList.toggle("show", open);
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };

  menuBtn.addEventListener("click", () => {
    setOpen(!navLinks.classList.contains("show"));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("click", (e) => {
    if (!navLinks.classList.contains("show")) return;
    const t = e.target;
    if (t instanceof Node && !navLinks.contains(t) && !menuBtn.contains(t)) {
      setOpen(false);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });
}

const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a").forEach((link) => {
  const page = link.getAttribute("href");
  if (page === currentPage) {
    link.classList.add("active");
  }
});

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

if (contactForm && notice) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    notice.textContent = "Thanks! Your message has been sent successfully.";
    contactForm.reset();
  });
}
