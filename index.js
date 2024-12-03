import express from 'express';
import cors from 'cors';
import escolaRouter from './router/escolaRouter.js';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/escolas', escolaRouter);

app.listen(3000, () =>{
    console.log('Aplicação rodando na porta 3000');
});

// app.get('/svg/:estado/:municipio', async (req, res) => { 
//     let estado = req.params.estado;
//     let municipio = req.params.municipio;
//     let pathEstado = await client.query('SELECT ST_AsSVG(geom) FROM estado WHERE nome ilike $1',[estado]);
//     let pathMunicipio = await client.query('SELECT ST_AsSVG(geom) FROM municipio WHERE nome ilike $1',[municipio]);
//     let viewBox = await client.query('SELECT getViewBox($1)',[estado]);

//     res.json({
//         pathestado: pathEstado.rows[0].st_assvg,
//         pathmunicipio: pathMunicipio.rows[0].st_assvg,
//         viewBox: viewBox.rows[0].getviewbox
//     });

// });