// title: string
// price: float
// type: [saldžios/sūrios/su mėsa/veganiškos]

const createTitle = document.querySelector('#create-title');
const createPrice = document.querySelector('#create-price');
const createType = document.querySelector('#create-type');
const createButton = document.querySelector('#create-button');


createButton.addEventListener('click', () => {
    const bandele = new Bandele(
        createTitle.value,
        createPrice.value,
        createType.value
    );

    createTitle.value = '';
    createPrice.value = '';
    createType.value = '';

    storage.create(bandele);
    Bandele.render();
})


class localDB {

    constructor(what) {
        this.key = what;
        this.data = localStorage.getItem(this.key);
        if (this.data === null) {
            this.data = [];
            localStorage.setItem(this.key, JSON.stringify([]));
        } else {
            this.data = JSON.parse(this.data);
        }
    }

    create(obj) {
        obj.id = this.getId();
        this.data.push(obj);
        this.write();
    }


    write() {
        localStorage.setItem(this.key, JSON.stringify(this.data));
    }

    getId() {
        let id = localStorage.getItem('bId');
        if (id === null) {
            id = 1;
            localStorage.setItem('bId', 1);
            return 1;
        }
        id = parseInt(id);
        id++;
        localStorage.setItem('bId', id);
        return id;
    }


}

class Bandele {

    static data;

    static render() {
        const types = ['saldžios', 'sūrios', 'su mėsa', 'veganiškos'];
        const list = document.querySelector('#list');
        list.innerHTML = '';
        this.data.forEach(b => {
            const div = document.createElement('div');
            div.classList.add('item');

            const h3 = document.createElement('h3');
            h3.appendChild(document.createTextNode(b.title));

            const span = document.createElement('span');
            span.appendChild(document.createTextNode(b.price + ' Eur'));

            const i = document.createElement('i');
            i.appendChild(document.createTextNode(types[b.type - 1]));

            div.appendChild(h3);
            div.appendChild(span);
            div.appendChild(i);

            list.appendChild(div);

        })

    }

    constructor(t, p, ty, id) {
        this.title = t;
        this.price = parseFloat(p);
        this.type = parseInt(ty);
        this.id = typeof id == 'undefined' ? 0 : id;
    }
}

const storage = new localDB('bulkute');
Bandele.data = storage.data;
Bandele.render();