import Escola from "../model/Escola.js";
import client from "../database/redis.js";

export async function listarEscolas(req, res){
    const cache = await client.get('escolas');
    if(!cache){
        const escolas = await Escola.findAll();
        await client.set('escolas', 
            JSON.stringify(escolas), {'EX': 3600});
        res.json(escolas);
        console.log('Retornando do postgre');
        return;
    }
    console.log('Retornando do redis');
    res.json(JSON.parse(cache));
}

export async function criarEscola(req, res){
    try{
        const escola = await Escola.create(req.body);
        res.json(escola);
    }catch(err){
        res.status(400).send(err.errors[0].message);
    }
}

export async function deletarEscola(req, res){
    const escola = await Escola.findByPk(req.params.id);
    if(!escola){
        res.status(404).send("Escola não encontrada");
        return;
    }
    await escola.destroy();
    res.json(escola);
}

export async function buscarEscola(req, res){
    const escola = await Escola.findByPk(req.params.id);
    if(!escola){
        res.status(404).send("Escola não encontrada");
        return;
    }
    res.json(escola);
}

export async function atualizarEscola(req, res){
    try{
        const escola = await Escola.findByPk(req.params.id);
        if(!escola){
            res.status(404).send("Escola não encontrada");
            return;
        }
        escola.set(req.body);
        await escola.save();
        res.json(escola);
    }catch(err){
        res.status(400).send(err.errors[0].message);
    }
}