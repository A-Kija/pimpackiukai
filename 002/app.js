function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


const namas2 = [
    { name: 'Vytas', pot: false },
    { name: 'Lina', pot: true },
    { name: 'Bebras', pot: false }
];

const gamers = ['Vytas', 'Lina', 'Bebras', 'Žirafas', 'Nausėda', 'Teta Zita'];

console.table(namas2[0].pot);

// =======================

const try10 = []; // nauja deze

for (let i = 0; i < 3; i++) {
    const gamer = {}; // nauja deze
    gamer.name = gamers[rand(0, gamers.length - 1)];
    gamer.try = rand(1, 6);
    try10.push(gamer);
}

console.table(try10);

// const red = { name: 'Berbras', vazonas: 1 };

// const pink = red; // by reference

// red.name = 'Teta Zita';

// console.table('RED:', red);
// console.table('PINK:', pink);

const neo = {};
neo.number = rand(100, 999);
neo.pill = rand(0, 1) ? 'Blue' : 'Red';
neo.luckyNumbers = [];

for (let i = 0; i < 100; i++) {
    neo.luckyNumbers.push(rand(100, 999));
}

neo.pill = neo.luckyNumbers.indexOf(neo.number) == -1 ? 'Blue' : 'Red';

// console.log(neo);

const animals = ['Tiger', 'Rabbit', 'Fox', 'Wolf', 'Giraffe', 'Zajec', 'Krokodil Gena', 'Gražulis', 'Lion', 'Duck', 'Cat', 'Dog', 'Dingo', 'Atsirado', 'Parot'];

const matrix = [];


for (let i = 0; i < 50; i++) {
    const obj = {}
    obj.id = i + 1;
    obj.type = animals[rand(0, animals.length - 1)];
    obj.speed = rand(1, 50);
    obj.isSmith = rand(0, 1);
    // obj.pill = rand(0, 2) ? rand(0, 1) ? 'blue' : '' : 'red';
    // obj.pill = ['blue', 'red', ''][rand(0, 2)];
    const whatPill = rand(0, 2);
    switch (whatPill) {
        case 0:
            obj.pill = 'blue';
            break;
        case 1:
            obj.pill = 'red';
            break;
        default:
            obj.pill = '';
    }
    matrix.push(obj);
}

console.table(matrix);

const alive = matrix.filter(obj => {
    if (!obj.isSmith || obj.speed <= 30) {
        return true;
    }
    return false;
});


// matrix.sort((a, b) => b.speed - a.speed);

// const speeds = matrix.map(obj => ({ speed: obj.speed, pill: obj.pill }));

// const speeds = matrix.map(obj => {
//     return { speed: obj.speed, pill: obj.pill };
// });

// matrix.sort((a, b) => {
//     if (b.type > a.type) {
//         return -1;
//     }
//     if (b.type < a.type) {
//         return 1;
//     }
//     return 0
// });

matrix.sort((a, b) => {
    if (b.type > a.type) {
        return -1;
    }
    if (b.type < a.type) {
        return 1;
    }
    return b.speed - a.speed;
});

const SmithAndSpeed = matrix
    .sort((a, b) => b.speed - a.speed)
    .filter(obj => !!obj.isSmith);

console.table(SmithAndSpeed);
/*
! -- 
> -- <=
< -- >=
== -- !=
&& -- ||
false -- true
*/