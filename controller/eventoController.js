import Evento from '../model/Evento.js';

export async function listarEventos(req, res){
   const eventos = await Evento.find();
   res.json(eventos);
}