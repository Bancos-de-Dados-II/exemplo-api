import Escola from "../model/Escola.js";

export async function listarEscolas(req, res){
    const escolas = await Escola.findAll();
    res.json(escolas);
}