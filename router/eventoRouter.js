import express from 'express';
import { listarEventos, criarEvento } from '../controller/eventoController.js';

const eventoRouter = express.Router();

eventoRouter.get('/', listarEventos);
eventoRouter.post('/', criarEvento);

export default eventoRouter;