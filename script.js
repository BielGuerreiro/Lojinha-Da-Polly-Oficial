document.querySelectorAll(".bx-heart, .bxs-heart").forEach((icon) => {
  icon.addEventListener("click", function (e) {
    e.preventDefault();

    if (this.classList.contains("bx-heart")) {
      this.classList.remove("bx-heart");
      this.classList.add("bxs-heart");
    } else {
      this.classList.remove("bxs-heart");
      this.classList.add("bx-heart");
    }
  });
});

// seta dos market  ____________________________________________________________
const container = document.querySelector(".container-wrapper");
const btnLeft = document.querySelector(".arrow.left");
const btnRight = document.querySelector(".arrow.right");

const scrollAmount = 270;

btnLeft.addEventListener("click", () => {
  container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

btnRight.addEventListener("click", () => {
  container.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

// box do menu ________________________________________________________________________________
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".menu-overlay");
const menuItems = document.querySelectorAll(".menu li");
const contents = document.querySelectorAll(".menu-content");

// Mostrar overlay e conteúdo ao passar o mouse sobre o item
menuItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    const target = item.getAttribute("data-menu");
    overlay.style.display = "block";
    contents.forEach((c) => (c.style.display = "none"));
    const content = document.getElementById("menu-" + target);
    if (content) content.style.display = "block";
  });
});

// Manter overlay visível enquanto mouse estiver dentro do menu ou overlay
menu.addEventListener("mouseenter", () => {
  overlay.style.display = "block";
});

menu.addEventListener("mouseleave", () => {
  overlay.style.display = "none";
  contents.forEach((c) => (c.style.display = "none"));
});

overlay.addEventListener("mouseenter", () => {
  overlay.style.display = "block";
});

overlay.addEventListener("mouseleave", () => {
  overlay.style.display = "none";
  contents.forEach((c) => (c.style.display = "none"));
});
