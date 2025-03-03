import express from 'express';
import { listarEventos, criarEvento, deletarEvento, atualizarEvento,
    buscarPorDescricao } from '../controller/eventoController.js';

const eventoRouter = express.Router();

eventoRouter.get('/', listarEventos);
eventoRouter.get('/:descricao', buscarPorDescricao);
eventoRouter.post('/', criarEvento);
eventoRouter.delete('/:id', deletarEvento);
eventoRouter.patch('/:id', atualizarEvento);


export default eventoRouter;