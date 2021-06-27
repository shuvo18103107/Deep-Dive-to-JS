'use strict'

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btncloseModal = document.querySelector('.close-modal');
const btnsOpneModal = document.querySelectorAll('.show-modal');
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const openModal = function () {
    modal.classList.remove('hidden');

    overlay.classList.remove('hidden');

}

for (let i = 0; i < btnsOpneModal.length; i++)
    btnsOpneModal[i].addEventListener(
        'click', openModal
    );



btncloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

// keypress event
// keydown - any key in the keyboard

document.addEventListener('keydown', function (e) {
    console.log(e.key);
    if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }


})