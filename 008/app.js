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


    fetch('http://localhost:3000/trees/', {
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

    document.querySelector('#create-title').value = '';
    document.querySelector('#create-height').value = '';
    document.querySelector('#create-type').value = '';
})


document.querySelector('#delete')
    .addEventListener('click', () => {
        const id = document.querySelector('#delete-id').value;

        fetch('http://localhost:3000/trees/' + id, {
                method: 'DELETE'
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                get();
            })
    })


document.querySelector('#update').addEventListener('click', () => {
    const title = document.querySelector('#update-title').value;
    const height = document.querySelector('#update-height').value;
    const type = document.querySelector('#update-type').value;
    const id = document.querySelector('#update-id').value;

    fetch('http://localhost:3000/trees/' + id, {
            method: 'PUT',
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

    document.querySelector('#update-title').value = '';
    document.querySelector('#update-height').value = '';
    document.querySelector('#update-type').value = '';
    document.querySelector('#update-id').value = '';
})


get();