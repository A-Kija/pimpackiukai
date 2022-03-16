// const a = '5';

// console.log('a', typeof a, a);

// const ja = JSON.stringify(a);

// console.log('-------------------->>>>>>>>>');

// console.log('ja', typeof ja, ja);

// const aj = JSON.parse(ja);

// console.log('aj', typeof aj, aj);


console.log(document.querySelector('h1'));


// fetch('https://jsonplaceholder.typicode.com/posts/99')
//     .then(response => response.json())
//     .then(data => {
//         document.querySelector('h1').innerText = data.title;
//         document.querySelector('p').innerText = data.body;
//         //cia

//         console.log(data)
//     });

// let t = 0;

// const time = setInterval(() => {
//     console.log(++t);
//     if (t > 40) {
//         clearInterval(time);
//     }
// }, 1);

const ul = document.querySelector('ul');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            const li = document.createElement('li');
            const text = document.createTextNode(element.username);
            li.appendChild(text);
            ul.appendChild(li);
        });

        console.log(data)
    });