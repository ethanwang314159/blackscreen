var modal = document.querySelector('[data-modal]');

modal.addEventListener('click', function (event) {
  event.preventDefault();
  var modalId = document.getElementById(modal.dataset.modal);
  modalId.classList.add('open');

  var exits = modalId.querySelectorAll('.modal-exit');
  console.log(exits)
  exits.forEach(function (exit) {
    exit.addEventListener('click', function (event) {
      event.preventDefault();
      modalId.classList.remove('open');
    });
  });
});
