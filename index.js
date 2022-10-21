const openBtn = document.querySelector(".js-card-opener");
const buttons = document.querySelectorAll(".botones a");
const buttonsContainer = document.querySelector(".botones a");
const comoLLegar = document.getElementById("btn1")
const confirmar = document.getElementById("btn2")

openBtn.onclick = function () {
  if (buttonsContainer.classList.contains("show")) {
    comoLLegar.href = "https://goo.gl/maps/EEBPZ49Qo7zt6puJ9";
    confirmar.href = "https://api.whatsapp.com/send?phone=+573235903858&text=Gracias%20por%20la%20invitación%20al%20baby%20shower,%20con%20gusto%20asistiremos!%20🥳";
  } else {
    comoLLegar.removeAttribute("href");
    confirmar.removeAttribute("href");

  }
  document.body.classList.toggle("open");
  buttons.forEach(button => {
    button.classList.toggle("show")
  })
  console.log(buttonsContainer.classList.contains("show"))
};