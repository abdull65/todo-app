import { Router } from "express";
import {getTodos, getTodoById, createTodos, updateTodos, deleteTodos} from "../controllers/todo-controls.ts";
import { validateTodo } from "../middlewares/middleware.ts"
const router = Router();

router.get("/", getTodos);

router.get("/:id", getTodoById)

router.post("/", validateTodo, createTodos);

router.put("/:id", validateTodo, updateTodos);

router.delete("/:id", deleteTodos);

export default router;