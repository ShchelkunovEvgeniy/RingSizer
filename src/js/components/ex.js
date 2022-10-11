
const size1 = document.querySelector('.size-1');
const size2 = document.querySelector('.size-2');
const size3 = document.querySelector('.size-3');
const size4 = document.querySelector('.size-4');
const size5 = document.querySelector('.size-5');
const size6 = document.querySelector('.size-6');
const size7 = document.querySelector('.size-7');
const size8 = document.querySelector('.size-8');
const size9 = document.querySelector('.size-9');
// const size4 = document.querySelector('.size-4');
// const size5 = document.querySelector('.size-5');
// const size6 = document.querySelector('.size-6');



const buttonActive = document.querySelector('.tabs__nav-btn');

const buttons = [size1, size2, size3, size4, size5, size6, size7, size8, size9];
const ringSizes = ["14.86mm", "15.27mm", "15.70mm", "16.10mm", "16.51mm", "16.92mm", "17.35mm", "17.75mm", "18.19mm"];


for (let i = 0; i < 9; i++) {
  console.log(buttons[i]);
}

// if (buttonActive.addEventListener('click', () => {
for (let i = 0; i < 9; i++) {
  if (buttons[i].addEventListener('click', () => {
    document.querySelector('.ringsizer-img').style.width = ringSizes[i];
    document.querySelector('.ringsizer-img').style.height = ringSizes[i];
    console.log(ringSizes[i]);
  }));
};
// }));







// size1.addEventListener('click', () => {
//   document.querySelector('.ringsizer-img').style.width = '14.86mm';
//   document.querySelector('.ringsizer-img').style.height = '14.86mm';

// });

// size2.addEventListener('click', () => {
//   alert('qweqwe');
// });

// size3.addEventListener('click', () => {
//   alert('qweqwe');
// });

// size4.addEventListener('click', () => {
//   alert('qweqwe');
// });

// size5.addEventListener('click', () => {
//   alert('qweqwe');
// });

