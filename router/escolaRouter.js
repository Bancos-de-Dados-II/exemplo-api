import express from 'express';
import { listarEscolas, criarEscola, deletarEscola } from '../controller/escolaController.js';

const escolaRouter = express.Router();

escolaRouter.get('/', listarEscolas);
escolaRouter.post('/', criarEscola);
escolaRouter.delete('/:id', deletarEscola);

export default escolaRouter;