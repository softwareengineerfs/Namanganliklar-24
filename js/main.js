const elModal = document.querySelector(".modal");
const elModalClose = document.querySelector(".js-modal-close");

if (elModalClose) {
  elModalClose.addEventListener("click", function () {
    elModal.classList.remove("modal-open");
  }) ;
}

// 30 soniyadan keyin modalni korinadigan qilish
setTimeout( function () {
  elModal.classList.add("modal-open");
}, 30000);