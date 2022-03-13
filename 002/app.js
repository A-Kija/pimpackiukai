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

console.log(neo);