// SEEDER
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const g = ['Baravykas', 'Lepšis', 'Ūmedė', 'Musmirė', 'Šungrybis', 'Kazlėkas', 'Pumpotaukšlis', 'Amsterdamo nuostabusis', 'Babausis'];
document.querySelector('#seeder').addEventListener('click', () => {
    for (let i = 0; i < 50; i++) {
        fetch('http://localhost:3000/war/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: g[rand(0, g.length - 1)],
                    power: rand(0, 9999) / 10,
                    type: rand(1, 4)
                })
            })
            .then(response => response.json())
    }
})


// CREATE
document.querySelector('#create').addEventListener('click', () => {
    const title = document.querySelector('#create-title').value;
    const power = document.querySelector('#create-power').value;
    const type = document.querySelector('#create-type').value;


    fetch('http://localhost:3000/war/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                power: power,
                type: type
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            get();
        })

    document.querySelector('#create-title').value = '';
    document.querySelector('#create-power').value = '';
    document.querySelector('#create-type').value = '';
});

// READ
const get = (sort = 'asc') => {
    const type = document.querySelector('#filter').value;
    // const s = slider.noUiSlider.get();
    s = [
        document.querySelector('#min').value,
        document.querySelector('#max').value
    ]

    fetch('http://localhost:3000/war?type=' + type + '&minPower=' + s[0] + '&maxPower=' + s[1] + '&sort=' + sort)
        .then(response => response.json())
        .then(data => {
            let html = ''
            data.forEach(t => {
                const type = ['Valgomas', 'Sukirmijęs', 'Nuodingas', 'Atominis'][t.type - 1];
                html += `
            <li>
            ID: ${t.id} 
            <strong>${t.title}</strong>
            <u>${type}</u>
            <i>${t.power}</i>
            </li>`;
            });
            document.querySelector('ul').innerHTML = html;
        });
}
document.querySelector('#filter')
    .addEventListener('change', () => {
        get();
    })


// const slider = document.querySelector('#slider');
// noUiSlider.create(slider, {
//     start: [0, 999],
//     connect: true,
//     range: {
//         'min': 0,
//         'max': 999
//     }
// });

// slider.noUiSlider.on('change', () => {
//     get();
// });

document.querySelectorAll('[type=range]').forEach(r => {
    r.addEventListener('change', () => get())
})

document.querySelectorAll('[type=radio]').forEach(r => {
    r.addEventListener('change', e => get(e.target.value))
})


get();