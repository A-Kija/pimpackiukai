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

// namas.forEach();

namas.forEach(function(namoGyventojai) {
    console.log(namoGyventojai);
});

namas.forEach((namoGyventojai) => {
    console.log(namoGyventojai);
});


namas.forEach(namoGyventojai => {
    console.log(namoGyventojai);
});

namas.forEach(namoGyventojai => console.log(namoGyventojai));


const namas2 = [
    ['Vytas', 'Simas'],
    ['Lina', 'Sima'],
    ['Bebras', 'Songaila']
];

console.table(namas2);
console.log('---->', namas2[2][1]);







const namas5 = [];
for (let i = 0; i < 5; i++) {

    const aukstas = [];
    for (let k = 0; k < 3; k++) {
        const random = rand(10, 99);
        aukstas.push(random);
    }

    namas5.push(aukstas);
}

console.table(namas5);


const pinigai = [158, 147, 8874, 147, 6547];


let pinigine = 0;

pinigai.forEach(pinigas => pinigine = pinigine + pinigas);

console.log(pinigine);

let bendrai = 0;

namas5.forEach(aukstas => {

    aukstas.forEach(saskaita => bendrai = bendrai + saskaita);

});


console.log(bendrai);