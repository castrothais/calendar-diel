const express = require('express');
const { create, listTasks, updateTasks } = require('../controllers/task.controllers');

const tasksRouter = express.Router();

tasksRouter.post('/', create);
tasksRouter.get('/', listTasks);
tasksRouter.put('/:id', updateTasks);

module.exports = tasksRouter;
