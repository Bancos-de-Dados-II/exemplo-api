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
         res.status(404).json({message: 'Evento não encontrado'});
      })
}

export async function atualizarEvento(req, res){
   const id = req.params.id;
   Evento.updateOne({_id: id}, req.body).
      then(result => {
         if(result.modifiedCount>0){
            res.json({message: 'Evento atualizado com sucesso'});
            return;
         }
         res.status(404).json({message: 'Evento não encontrado'});
      })
}

export async function buscarPorDescricao(req, res){
   const descricao = req.params.descricao;
   const eventos = await Evento.find({
      $text: {
         $search: descricao
      }
   });
}