import express from 'express';
import cors from 'cors';
import escolaRouter from './router/escolaRouter.js';
import eventoRouter from './router/eventoRouter.js';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/escolas', escolaRouter);
app.use('/eventos', eventoRouter);

app.listen(3000, () =>{
    console.log('Aplicação rodando na porta 3000');
});