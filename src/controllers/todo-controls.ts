import { Request, Response } from "express";
import pool from "../db.ts";

interface Todo {
    id?: number;
    title: string;
    completed: boolean;
}

export const getTodos = async (req: Request, res: Response) => {
    const result = await pool.query("SELECT * FROM todos ORDER BY id ASC");
    if(result.rowCount === 0) {
        return res.status(404).json({message: "Todo not found"});
    }
    res.status(200).json(result.rows);
};

export const getTodoById = async(req: Request, res: Response) => {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM todos WHERE id = $1", [id]);
    if(result.rowCount === 0) {
        return res.status(404).json({message: "Todo not found"})
    }
    res.status(200).json(result.rows[0])
}

export const createTodos = async (req: Request, res: Response) => {
    const { title, completed }: Todo = req.body as Todo;
    const isCompleted = completed ?? false;
    const result = await pool.query(
        "INSERT INTO todos (title, completed) VALUES ($1, $2) RETURNING *",
        [title, isCompleted]);
    res.status(201).json({
        message: "Todo created successfully",
        todo:result.rows[0]});
};

export const updateTodos = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, completed }: Todo = req.body as Todo;
    const result = await pool.query(
        "UPDATE todos SET title=$1, completed=$2 WHERE id=$3 RETURNING *",
        [title, completed ?? false, id]);

        if(result.rowCount === 0) {
            return res.status(404).json({message: "Todo not found"});
        }
    res.status(200).json(
        {
        message: "Todo updated successfully",
        todo: result.rows[0]
    });
};

export const deleteTodos = async (req: Request, res: Response) => {
    const { id } = req.params;
   const result = await pool.query("DELETE FROM todos WHERE id=$1", [id]);
    if(result.rowCount === 0) {
        return res.status(404).json({message: "Todo not found"});
    }
    res.json({
        message: "Todo deleted successfully",
        todo: result.rows[0]
    });
}