import pg from 'pg'
const { Client } = pg
const client = new Client({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'aula'
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