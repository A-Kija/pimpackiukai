class Palydovas {

    static pav = ['Deimas', 'Fobas'];
    static eil = 0;
    static palydovai = [];

    static rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    static pridetiPalydovą() {
        if (this.eil < 2) {
            this.palydovai[this.eil] = new this(this.pav[this.eil]);
            this.eil++;
            return this.palydovai[this.eil - 1];
        } else {
            return this.palydovai[this.rand(0, 1)];
        }
    }

    constructor(vardas) {
        this.id = this.constructor.rand(100000, 999999);
        this.pavadinimas = vardas;
    }
}


console.log(Palydovas.pridetiPalydovą());
console.log(Palydovas.pridetiPalydovą());
console.log(Palydovas.pridetiPalydovą());
console.log(Palydovas.pridetiPalydovą());
console.log(Palydovas.pridetiPalydovą());



// let c = 100;

let km = 0;
let a;
do {
    // if (--c < 0) {
    //     console.log('ciklas');
    //     break;
    // }
    km++;
    const kengura = Palydovas.rand(0, 1);
    const vairas = Palydovas.rand(0, 1);
    const stabdis = Palydovas.rand(0, 1);
    console.log(kengura, vairas, stabdis);
    a = kengura + vairas + stabdis;
} while (a);

console.log(km - 1);