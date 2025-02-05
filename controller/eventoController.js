import Evento from '../model/Evento.js';

export async function listarEventos(req, res){
   const eventos = await Evento.find();
   res.json(eventos);
}

export async function criarEvento(req, res){
   const evento = new Evento(req.body);
   await evento.save();
   res.status(201).json(evento);
}