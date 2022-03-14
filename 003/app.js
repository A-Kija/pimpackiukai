const b1 = document.querySelector('#b1');

b1.addEventListener('click', () => {
    console.log('Labas!');
});


document.querySelector('a')
    .addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Valio!');
    });


const b2 = document.querySelector('#b2');
const i2 = document.querySelector('#i2');

b2.addEventListener('click', () => {
    console.log(i2.value);
});

//[]masyvas
//{}objektas
//()ant visko

const map1 = new Map();

let No;

map1.set('Jonas', 5);
map1.set('Janina', 8);
map1.set('Nieko', No);

map1.set(function() { console.log(88) }, 'F');

console.log(map1.get('Nieko'));

console.log(map1.has('Nieko'));
console.log(map1.get('asjdkjasfjdsaj'));


// map1.delete('Janina');

// map1.clear();

map1.forEach((value, key) => console.log(key, '->', value));


// console.log(map1);

const inputName = document.querySelector('#i3a');
const inputSausage = document.querySelector('#i3b');
const add = document.querySelector('#b3');

const sausageMap = new Map();


add.addEventListener('click', () => {
    if (sausageMap.has(inputName.value)) {
        const sausageNow = sausageMap.get(inputName.value) + parseInt(inputSausage.value);
        sausageMap.set(inputName.value, sausageNow);
    } else {
        sausageMap.set(inputName.value, parseInt(inputSausage.value));
    }
    console.log(sausageMap);
});