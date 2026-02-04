
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
