'use strict';

const DOM = {
  body:          document,
  modal:         document.querySelectorAll('.modal'),
  overlay:       document.querySelector('.overlay'),
  btnCloseModal: document.querySelectorAll('.close-modal'),
  btnOpenModal:  document.querySelectorAll('.show-modal')
};

// open modal
function openModal(tag) {
  document.querySelector('.modal[data-modal="' + tag + '"]').classList.remove('hidden');
  DOM.overlay.classList.remove('hidden');
}

// close modal
function closeModal(tag) {
  document.querySelector('.modal[data-modal="' + tag + '"]').classList.add('hidden');
  DOM.overlay.classList.add('hidden');
}

// find the modal that is currently open
function getOpenModal() {
  for (let i = 0; i < DOM.modal.length; i++) {
    const thisModal = DOM.modal[i];
    if (thisModal.classList.contains('hidden') === false) {
      return thisModal;
    }
  }
  return null;
}

// open buttons — each reads its own tag
for (let i = 0; i < DOM.btnOpenModal.length; i++) {
  DOM.btnOpenModal[i].addEventListener('click', function () {
    openModal(DOM.btnOpenModal[i].dataset.modal);
  });
}

// close buttons — each reads its own tag
for (let i = 0; i < DOM.btnCloseModal.length; i++) {
  DOM.btnCloseModal[i].addEventListener('click', function () {
    closeModal(DOM.btnCloseModal[i].dataset.modal);
  });
}

// overlay — find the open modal, close it
DOM.overlay.addEventListener('click', function () {
  const open = getOpenModal();
  if (open !== null) {
    closeModal(open.dataset.modal);
  }
});

// Escape — same job as overlay
DOM.body.addEventListener('keydown', function (e) {
  if (e.key !== 'Escape') {
    return;
  }
  const open = getOpenModal();
  if (open !== null) {
    closeModal(open.dataset.modal);
  }
});
