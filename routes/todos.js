const express = require("express");
const router = express.Router();

//import controller
const {createTodo} = require("../controllers/createTodo");
//import contorller to get all todos
const {getTodo, getTodoById} = require("../controllers/getTodo");
const {updateTodo} = require("../controllers/updateTodo");
const {deleteTodo} = require("../controllers/deleteTodo");

//define API routes, controller mapping
router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);//create route
router.get("/getTodo/:id", getTodoById);//mapping for getTodoById
router.put("/updateTodo/:id", updateTodo);//mapping for updateTodo
router.delete("/deleteTodo/:id", deleteTodo);//mapping for updateTodo


module.exports = router;