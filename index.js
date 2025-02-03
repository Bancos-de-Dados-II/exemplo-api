import express from 'express';
import cors from 'cors';
import escolaRouter from './router/escolaRouter.js';
import Evento from './model/Evento.js';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/escolas', escolaRouter);

app.listen(3000, () =>{
    console.log('Aplicação rodando na porta 3000');
});