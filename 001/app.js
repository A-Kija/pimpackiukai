console.log('Labukas!');

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


for (let i = 0; i < 3; i++) {

    // Kartojimo kodas cia (3 kartai)

}


for (let i = 0; i < 103; i++) {

    const random = rand(1, 6);
    console.log(i, random);

}