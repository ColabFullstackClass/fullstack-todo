import express from "express";
import {
  addTodo,
  getAllTodos,
  getTodoByStatus,
  updateTodo,
  deleteTodo,
} from "../controllers/todo.controller.js";

const router = express.Router();


router.post("/todos", addTodo);


router.get("/todos", getAllTodos);

router.get("/todos/status", getTodoByStatus);

router.put("/todos/:id", updateTodo);


router.delete("/todos/:id", deleteTodo);

export default router;
