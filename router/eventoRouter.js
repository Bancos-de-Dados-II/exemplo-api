import express from 'express';
import { listarEventos, criarEvento, deletarEvento } from '../controller/eventoController.js';

const eventoRouter = express.Router();

eventoRouter.get('/', listarEventos);
eventoRouter.post('/', criarEvento);
eventoRouter.delete('/:id', deletarEvento);

export default eventoRouter;