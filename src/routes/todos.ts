import { Router } from "express";
import {getTodos, getTodoById, createTodos, updateTodos, deleteTodos} from "../controllers/todo-controls.ts";

const router = Router();

router.get("/", getTodos);

router.get("/:id", getTodoById)

router.post("/", (req, res, next) => {
    console.log("Middleware")
    if (!req.body.title) {
       return res.status(404).send({message: 'Title is required'})
    }
    next()
}, createTodos);

router.put("/:id", (req, res) => {
}, updateTodos);

router.delete("/:id", deleteTodos);

export default router;