"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodos = exports.updateTodos = exports.createTodos = exports.getTodos = void 0;
const db_1 = __importDefault(require("../db"));
const getTodos = async (req, res) => {
    const result = await db_1.default.query("SELECT * FROM todos ORDER BY id ASC");
    res.json(result.rows);
};
exports.getTodos = getTodos;
const createTodos = async (req, res) => {
    const { title, completed } = req.body;
    const result = await db_1.default.query("INSERT INTO todos (title, completed) VALUES ($1, $2) RETURNING *", [title, completed]);
    res.status(201).json(result.rows[0]);
};
exports.createTodos = createTodos;
const updateTodos = async (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;
    const result = await db_1.default.query("UPDATE todos SET title=$1, completed=$2 WHERE id=$3 RETURNING *", [title, completed, id]);
    res.status(201).json(result.rows[0]);
};
exports.updateTodos = updateTodos;
const deleteTodos = async (req, res) => {
    const { id } = req.params;
    await db_1.default.query("DELETE FROM todos WHERE id=$1", [id]);
    res.json({ message: "Todo deleted" });
};
exports.deleteTodos = deleteTodos;
