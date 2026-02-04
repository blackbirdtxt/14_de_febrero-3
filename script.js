const background = document.getElementById("background");

const icons = ["💖","💕","💘","🌸","🌹","🌺","💞","💗"];

function createFloatingItem() {
  const span = document.createElement("span");
  span.classList.add("float");
  span.innerText = icons[Math.floor(Math.random() * icons.length)];

  span.style.left = Math.random() * 100 + "vw";
  span.style.fontSize = Math.random() * 20 + 20 + "px";
  span.style.animationDuration = Math.random() * 10 + 8 + "s";

  background.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 18000);
}

// Genera flores/corazones constantemente
setInterval(createFloatingItem, 400);

let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");
let modal = document.getElementById("modal");

let scale = 1;

noBtn.addEventListener("click", () => {
  scale += 0.2;
  yesBtn.style.transform = `scale(${scale})`;
});

yesBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

function closeModal() {
  modal.style.display = "none";
}
