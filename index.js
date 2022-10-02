const openBtn = document.querySelector(".js-card-opener");
const buttons = document.querySelectorAll(".botones a");

openBtn.onclick = function () {
  document.body.classList.toggle("open");
  buttons.forEach(button => {
    button.classList.toggle("show")
  })
};