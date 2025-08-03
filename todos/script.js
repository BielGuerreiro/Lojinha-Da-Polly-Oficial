const text = "Confira todos os Kits Aniversário";
const speed = 100;
const eraseSpeed = 50;
const delay = 1000;
const target = document.getElementById("typewriter");

let i = 0;
let isErasing = false;

function typeLoop() {
  if (!isErasing) {
    target.textContent = text.substring(0, i);
    i++;
    if (i > text.length) {
      isErasing = true;
      setTimeout(typeLoop, delay);
      return;
    }
  } else {
    target.textContent = text.substring(0, i);
    i--;
    if (i < 0) {
      isErasing = false;
    }
  }
  setTimeout(typeLoop, isErasing ? eraseSpeed : speed);
}

typeLoop();
