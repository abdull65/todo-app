"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'todo_app',
    password: '12334',
    port: 5432
});
exports.default = pool;
