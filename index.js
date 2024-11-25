import dotenv from 'dotenv';
dotenv.config();
import pg from 'pg'
const { Client } = pg
const client = new Client({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB
});

conectar();

async function conectar(){
    await client.connect()

    try {
        const res = await client.query('SELECT $1::text as message', ['Hello world!'])
        console.log(res.rows[0].message) // Hello world!
    } catch (err) {
        console.error(err);
    } finally {
        await client.end()
    }
}