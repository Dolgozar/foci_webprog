import express from 'express';
import mysql from'mysql2';
import cors from 'cors';

const app = express();
app.use(cors);
app.use(express.json());

const bl_gyozelmek = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bl-adatok'
}).promise();

app.get('/csapatok', async (req, res) => {
    const [rows, fields] = await rendelesek.query('SELECT id, klubnev, gyozelmek_szama, legutobb_gyozott, mvp FROM foci-webprog');
    res.send(rows);
}); 
app.post('/csapatok', async (req, res) => {
    const [data,fields] = await bl_gyozelmek.query('SELECT id, klubnev, gyozelmek_szama, legutobb_gyozott, mvp FROM bl-adatok' )
    res.status.send(201).send({
            id: data.insertId,
            klubnev: req.body.klubnev,
            gyozelmek_szama: req.body.gyozelmek_szama,
            legutobb_gyozott: req.body.legutobb_gyozott,
            mvp: req.body.mvp
    });
})

app.listen(3000);