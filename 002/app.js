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