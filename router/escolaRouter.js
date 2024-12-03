import express from 'express';
import { listarEscolas, criarEscola, deletarEscola, buscarEscola } from '../controller/escolaController.js';

const escolaRouter = express.Router();

escolaRouter.get('/', listarEscolas);
escolaRouter.get('/:id', buscarEscola);
escolaRouter.post('/', criarEscola);
escolaRouter.delete('/:id', deletarEscola);

export default escolaRouter;