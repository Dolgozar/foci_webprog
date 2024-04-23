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

app.listen(3000);