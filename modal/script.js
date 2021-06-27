'use strict'


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btncloseModal = document.querySelector('.close-modal');
const btnsOpneModal = document.querySelectorAll('.show-modal');
console.log(btnsOpneModal);
for (let i = 0; i < btnsOpneModal.length; i++)
    console.log(btnsOpneModal[i].textContent);