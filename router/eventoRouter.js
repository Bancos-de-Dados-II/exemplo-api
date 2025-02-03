import express from 'express';
import { listarEventos } from '../controller/eventoController.js';

const eventoRouter = express.Router();

eventoRouter.get('/', listarEventos);

export default eventoRouter;