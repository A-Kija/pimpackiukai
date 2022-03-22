/*
1 yra elektra
0 nera elektros

0   0
1   1
2   10
3   11
4   100
5   101
6   110
7   111
8   1000
9   1001
10  1010
11  1011
12  1100
13  1101
14  1110
15  1111
**********
2
4
8
16
32
64
128
256
512
1024   
*/

const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');
const cors = require('cors');
app.use(cors());

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'james_bond',
});



app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/zuikis/:zuikioNr', (req, res) => {
    res.send(`Hello Zuiki Nr. ${req.params.zuikioNr}!`);
})

app.get('/trees', (req, res) => {
    let sql


    // UPDATE table_name
    // SET column1 = value1, column2 = value2, ...
    // WHERE condition;

    sql = `
        UPDATE trees
        SET type = 1, height = 22.22
        WHERE title = 'Agrastas'
    `;

    con.query(sql);

    // DELETE FROM table_name WHERE condition;

    sql = `
    DELETE
    FROM trees
    WHERE title = 'Agrastas'
    `;

    con.query(sql);

    // SELECT column1, column2, ...
    // FROM table_name;

    sql = `
        SELECT
        *
        FROM trees
    `;
    con.query(sql, function(err, result) {
        if (err) throw err;
        res.json(result);
    });
});

app.post('/trees', (req, res) => {

    let sql

    console.log(req.body);

    // INSERT INTO table_name (column1, column2, column3, ...)
    // VALUES (value1, value2, value3, ...);

    sql = `
        INSERT INTO trees
        (title, height, type)
        VALUES ('${req.body.title}', ${req.body.height}, ${req.body.type})
    `;

    con.query(sql);

    res.json({ message: 'OK' });

});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})