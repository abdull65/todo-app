import { Pool } from "pg";

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'todo_app',
    password: '12334',
    port: 5432,
});


export default pool;