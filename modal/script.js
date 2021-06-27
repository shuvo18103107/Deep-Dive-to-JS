'use strict'


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btncloseModal = document.querySelector('.close-modal');
const btnsOpneModal = document.querySelectorAll('.show-modal');
console.log(btnsOpneModal);
for (let i = 0; i < btnsOpneModal.length; i++)
    btnsOpneModal[i].addEventListener(
        'click', function () {
            console.log(btnsOpneModal[i].textContent);
            modal.classList.remove('hidden');

            overlay.classList.remove('hidden');





        }
    );
btncloseModal.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

})
overlay.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

})
