console.log('Labukas!');

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


for (let i = 0; i < 3; i++) {

    // Kartojimo kodas cia (3 kartai)

}


for (let i = 0; i < 3; i++) {

    const random = rand(1, 6);
    console.log(i, random);

}

const arr1 = [];

for (let i = 0; i < 3; i++) {

    const random = rand(1, 6);
    arr1.push(random); // elementai deliojami is eiles
    // arr1[i] = random; // elementai deliojami pasirinktinai

}



console.table(arr1);


const namas = ['Vytas', 'Lina', 'Bebras', 'Žirafas', 'Nausėda', 'Teta Zita'];

namas.push('Žirafas');
namas.unshift('Nauseda')

namas.pop();
namas.shift();

console.table(namas[1]);


for (let i = 0; i < namas.length; i++) {
    console.log(namas[i]);
}

console.log('---------------------------------------')

namas.forEach(g => console.log(g));