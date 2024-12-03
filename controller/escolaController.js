import Escola from "../model/Escola.js";

export async function listarEscolas(req, res){
    const escolas = await Escola.findAll();
    res.json(escolas);
}

export async function criarEscola(req, res){
    try{
        const escola = await Escola.create(req.body);
        res.json(escola);
    }catch(err){
        res.status(400).send(err.errors[0].message);
    }
}