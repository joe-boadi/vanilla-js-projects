'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btncloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

// Working with classes

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', function () {
    openModal();
  });
}

btncloseModal.addEventListener('click', function () {
  closeModal();
});

// Listen for keyboard events(global events: listen on the whole document)
const onkeyDown = () =>
  document.addEventListener('keydown', function (e) {
    // console.log(e.key, e);
    if (e.key === 'Escape' || e.key === 'Enter' || e.key === 'Space') {
      if (!modal.classList.contains('hidden')) {
        closeModal();
      }
    }
  });

onkeyDown();
