import express from 'express';
import { listarEscolas, criarEscola } from '../controller/escolaController.js';

const escolaRouter = express.Router();

escolaRouter.get('/', listarEscolas);
escolaRouter.post('/', criarEscola);

export default escolaRouter;