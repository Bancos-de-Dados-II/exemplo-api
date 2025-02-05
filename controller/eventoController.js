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

export async function deletarEvento(req, res){
   const id = req.params.id;
   await Evento.deleteOne({_id: id}).
      then(result => {
         if(result.deletedCount>0){
            res.json({message: 'Evento deletado com sucesso'});
            return;
         }
      })
   res.status(404).json({message: 'Evento não encontrado'});
}