import dotenv from 'dotenv';
import express from 'express';
dotenv.config();
import pg from 'pg';

const { Client } = pg;
const client = new Client({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB
});

conectar();

async function conectar(){
    await client.connect();
}

const app = express();
app.use(express.json());

app.get('/svg', async (req, res) => { 
    console.log('Hello world!');
});

app.listen(3000, () =>{
    console.log('Aplicação rodando na porta 3000');
});