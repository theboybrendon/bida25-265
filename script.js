const menuBtn = document.querySelector("[data-menu-btn]");
const navLinks = document.querySelector("[data-nav-links]");
const yearNode = document.querySelector("[data-year]");
const contactForm = document.querySelector("[data-contact-form]");
const notice = document.querySelector("[data-form-notice]");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
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
  yearNode.textContent = new Date().getFullYear();
}

if (contactForm && notice) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    notice.textContent = "Thanks! Your message has been sent successfully.";
    contactForm.reset();
  });
}
