// localStorage.setItem('animal', 'cat');

const what = localStorage.getItem('animal');

localStorage.removeItem('animal');

console.log(what);

const arr = ['Krokodilas', 'Gena', 'Kulverstukas'];

const stringArr = JSON.stringify(arr);

localStorage.setItem('gena', stringArr);

const backStringArr = localStorage.getItem('gena');

console.log(JSON.parse(backStringArr));



const h1 = document.querySelector('h1');
const b = document.querySelector('button');


// b.addEventListener('click', () => {
//     let numb = parseInt(h1.innerText);
//     numb++; // kodo logika
//     h1.innerText = numb;
// })

//data-alio  =>  dataset.alio

// b.addEventListener('click', () => {
//     let numb = parseInt(h1.dataset.numberCounter); //data-number-counter
//     numb++; // kodo logika
//     h1.innerText = numb; // dizainas-turinys
//     h1.dataset.numberCounter = numb; // duomenys
// })

let numb = 0;
b.addEventListener('click', () => {
    numb++;
    h1.innerText = numb;
});