import express from 'express';
import { listarEscolas } from '../controller/escolaController.js';

const escolaRouter = express.Router();

escolaRouter.get('/', listarEscolas);

export default escolaRouter;