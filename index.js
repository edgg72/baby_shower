const openBtn = document.querySelector(".js-card-opener");
const buttons = document.querySelector(".botones");

openBtn.onclick = function () {
  document.body.classList.toggle("open");
  buttons.classList.toggle("show")
};