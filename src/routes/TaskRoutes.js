const express = require('express');
const { getTasks, addTask, updateTaskById, deleteTaskById } = require('../controllers/TasksController')
const Router = express.Router();

Router.get('/tasks', getTasks);
Router.post('/tasks/add', addTask);
Router.put('/tasks/update/:id', updateTaskById);
Router.delete('/tasks/delete/:id', deleteTaskById);

module.exports = Router;