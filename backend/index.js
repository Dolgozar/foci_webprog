import mysql from'mysql2';
import cors from 'cors';
import express from 'express';

const app = express();
app.use(cors());
app.use(express.json());

const bl_gyozelmek = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'foci-webprog'
}).promise();

app.get('/csapatok', async (req, res) => {
    const [rows, fields] = await bl_gyozelmek.query('SELECT id, klubnev, gyozelmek_szama, CAST(legutobb_gyozott AS char) legutobb_gyozott, mvp FROM bl_adatok');
    res.send(rows);
});
 
app.post('/csapatok', async (req, res) => {
    console.log(req.body);
    const [data,fields] = await bl_gyozelmek.query('SELECT id, klubnev, gyozelmek_szama, CAST(legutobb_gyozott AS char) legutobb_gyozott, mvp FROM bl_adatok');
    res.status(201).send({
            klubnev: req.body.klubnev,
            gyozelmek_szama: req.body.gyozelmek_szama,
            legutobb_gyozott: req.body.legutobb_gyozott,
            mvp: req.body.mvp,
            id: data.insertId
    });
});

app.listen(3000);