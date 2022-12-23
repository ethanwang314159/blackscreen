const modal = document.querySelector("[data-modal]");

modal.addEventListener("click", function (event) {
  event.preventDefault();
  const modalId = document.getElementById(modal.dataset.modal);
  modalId.classList.add("open");

  var exits = modalId.querySelectorAll(".modal-exit");
  exits.forEach(function (exit) {
    exit.addEventListener("click", function (event) {
      event.preventDefault();
      modalId.classList.remove("open");
    });
  });
});

setTimeout(() => {
  const featherInfo = document.getElementsByClassName("feather-info")[0];
  featherInfo.classList.toggle("feather-info-hover");
}, 3000);
