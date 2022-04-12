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
const port = 3003;
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
    // SELECT column1, column2, ...
    // FROM table_name;
    const sql = `
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
    // INSERT INTO table_name (column1, column2, column3, ...)
    // VALUES (value1, value2, value3, ...);
    const sql = `
        INSERT INTO trees
        (title, height, type)
        VALUES (?, ?, ?)
    `;
    con.query(sql, [req.body.title, req.body.height, req.body.type], function(err, result) {
        console.log(result, err);
        res.json({ message: 'OK' });
    });
});

app.delete('/trees/:id', (req, res) => {
    // DELETE FROM table_name WHERE condition;
    const sql = `
    DELETE
    FROM trees
    WHERE id = ${req.params.id}
    `;
    con.query(sql);
    res.json({ message: 'OK' });
});

app.put('/trees/:id', (req, res) => {
    // UPDATE table_name
    // SET column1 = value1, column2 = value2, ...
    // WHERE condition;
    const sql = `
    UPDATE trees
    SET title = ?, height = ?, type = ?
    WHERE id = ?
    `;
    con.query(sql, [req.body.title, req.body.height, req.body.type, req.params.id], function(err, result) {
        console.log(result, err);
        res.json({ message: 'OK' });
    });
});

// GRYBU KARAS

app.post('/war', (req, res) => {
    const sql = `
        INSERT INTO geybu_karas
        (title, power, type)
        VALUES (?, ?, ?)
    `;
    con.query(sql, [req.body.title, req.body.power, req.body.type], function(err, result) {
        console.log(result, err);
        res.json({ message: 'OK' });
    });
});

app.get('/war', (req, res) => {
    if (req.query.type != 0) {
        const sql = `
        SELECT
        *
        FROM geybu_karas
        WHERE type = ? AND power >= ? AND power <= ?
        ORDER BY power ${req.query.sort == 'desc' ? 'DESC' : 'ASC'}
    `;
        con.query(sql, [req.query.type, req.query.minPower, req.query.maxPower], function(err, result) {
            if (err) throw err;
            res.json(result);
        });
    } else {

        const sql = `
        SELECT
        *
        FROM geybu_karas
        WHERE power >= ? AND power <= ?
        ORDER BY power ${req.query.sort == 'desc' ? 'DESC' : 'ASC'}
    `;
        con.query(sql, [req.query.minPower, req.query.maxPower], function(err, result) {
            if (err) throw err;
            res.json(result);
        });
    }
});


app.get('/join/inner', (req, res) => {
    // SELECT column_name(s)
    // FROM table1
    // INNER JOIN table2
    // ON table1.column_name = table2.column_name;
    const sql = `
        SELECT 
        color, k.type AS grybo_tipas, c.type AS spalvos_tipas
        FROM geybu_karas AS k
        INNER JOIN colors AS c
        ON k.id = c.grybas_id
    `;
    con.query(sql, function(err, result) {
        if (err) throw err;
        res.json(result);
    });
});

app.get('/join/left', (req, res) => {
    // SELECT column_name(s)
    // FROM table1
    // LEFT JOIN table2
    // ON table1.column_name = table2.column_name;
    const sql = `
        SELECT 
        *
        FROM geybu_karas
        LEFT JOIN colors
        ON geybu_karas.id = colors.grybas_id
    `;
    con.query(sql, function(err, result) {
        if (err) throw err;
        res.json(result);
    });
});


app.get('/join/right', (req, res) => {
    // SELECT column_name(s)
    // FROM table1
    // RIGHT JOIN table2
    // ON table1.column_name = table2.column_name;
    const sql = `
        SELECT 
        *
        FROM geybu_karas
        RIGHT JOIN colors
        ON geybu_karas.id = colors.grybas_id
    `;
    con.query(sql, function(err, result) {
        if (err) throw err;
        res.json(result);
    });
});




// ZOO MUSEUM

// CREATE
app.post('/zoo', (req, res) => {
    const sql = `
        INSERT INTO zoo_museum
        (animal_type, animal_weight, is_alive)
        VALUES (?, ?, ?)
    `;
    con.query(sql, [req.body.type, req.body.weight, req.body.isAlive], function(err, result) {
        // console.log(result, err);
        res.json({ message: 'OK' });
    });
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})