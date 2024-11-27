import dotenv from 'dotenv';
import express from 'express';
dotenv.config();
import pg from 'pg';

const { Client } = pg;
const client = new Client({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB
});

conectar();

async function conectar(){
    await client.connect();
}

const app = express();
app.use(express.json());

app.get('/svg/:estado/:municipio', async (req, res) => { 
    let estado = req.params.estado;
    let municipio = req.params.municipio;
    let pathEstado = await client.query('SELECT ST_AsSVG(geom) FROM estado WHERE nome ilike $1',[estado]);
    let pathMunicipio = await client.query('SELECT ST_AsSVG(geom) FROM municipio WHERE nome ilike $1',[municipio]);
    let viewBox = await client.query('SELECT getViewBox($1)',[estado]);

    res.json({
        pathestado: pathEstado.rows[0].st_assvg,
        pathmunicipio: pathMunicipio.rows[0].st_assvg,
        viewBox: viewBox.rows[0].getviewbox
    });

});

app.listen(3000, () =>{
    console.log('Aplicação rodando na porta 3000');
});