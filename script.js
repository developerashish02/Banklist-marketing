'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// selecting Elements
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');

const sec = document.querySelectorAll('.section');
console.log(sec);

const buttons = document.getElementsByTagName('button');
console.log(buttons);

console.log(document.getElementsByClassName('btn'));

// creating Elements

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent =
message.innerHTML =
  'Ashish Gaikwad Learnnig java + javascript <button class="btn btn-close-cookie">Get</button>';
console.log(message);

header.append(message);

const btnScroll = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
console.log(section1);

btnScroll.addEventListener('click', () => {
  const s1Cords = section1.getBoundingClientRect();
  console.log(s1Cords);

  // window.scrollTo(
  //   s1Cords.left + window.pageXOffset,
  //   s1Cords.top + window.pageYOffset
  // );

  window.scrollTo({
    left: s1Cords.left + window.pageXOffset,
    top: s1Cords.top + window.pageYOffset,
    behavior: 'smooth',
  });

  section1.scrollIntoView({ behavior: 'smooth' });
});
