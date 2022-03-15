// const a = '5';

// console.log('a', typeof a, a);

// const ja = JSON.stringify(a);

// console.log('-------------------->>>>>>>>>');

// console.log('ja', typeof ja, ja);

// const aj = JSON.parse(ja);

// console.log('aj', typeof aj, aj);




fetch('https://jsonplaceholder.typicode.com/posts/99')
    .then(response => response.json())
    .then(data => console.log(data));


console.log('Labas');