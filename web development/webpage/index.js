// 1. Dark Mode Toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("white-mode");
});

// 2. Typing Animation
const text = "Welcome to My Portfolio";
let index = 0;
const typedText = document.getElementById("typed-text");

function type() {
  if (index < text.length) {
    typedText.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}
type();

// 3. Scroll to Top Button
const scrollBtn = document.getElementById("scroll-top");
window.onscroll = function () {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// 4. Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const navList = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
});