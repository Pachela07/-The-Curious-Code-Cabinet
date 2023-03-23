'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// Query selector for all the elements within the class
const btnOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelectorAll('.close-modal');

// Clean function to open the modal and overlay
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
// Clean function to close the modal when clicked on or when clicked outside of modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// Loop through all the the elements length
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}
// Needs to be a loop
for (let i = 0; i < btnCloseModal.length; i++) {
  btnCloseModal[i].addEventListener('click', closeModal);
}

overlay.addEventListener('click', closeModal);
