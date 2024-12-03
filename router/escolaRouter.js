import express from 'express';
import { listarEscolas, criarEscola, deletarEscola, buscarEscola, atualizarEscola } from '../controller/escolaController.js';

const escolaRouter = express.Router();

escolaRouter.get('/', listarEscolas);
escolaRouter.get('/:id', buscarEscola);
escolaRouter.post('/', criarEscola);
escolaRouter.delete('/:id', deletarEscola);
escolaRouter.patch('/:id', atualizarEscola);

export default escolaRouter;