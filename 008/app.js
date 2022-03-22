'use strict'


const get = () => {
    fetch('http://localhost:3000/trees')
        .then(response => response.json())
        .then(data => {

            // console.log(data)

            let html = ''
            data.forEach(t => {
                const type = ['Lapuotis', 'Spygliuotis', 'Palmė'][t.type - 1];
                html += `
            <li>
            ID: ${t.id} 
            <strong>${t.title}</strong>
            <u>${type}</u>
            <i>${t.height}</i>
            </li>`;
            });
            document.querySelector('ul').innerHTML = html;
        });
}




document.querySelector('#create').addEventListener('click', () => {
    const title = document.querySelector('#create-title').value;
    const height = document.querySelector('#create-height').value;
    const type = document.querySelector('#create-type').value;

    fetch('http://localhost:3000/trees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                height: height,
                type: type
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            get();
        })


})


get();