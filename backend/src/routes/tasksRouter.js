const express = require('express');
const {
  create, listTasks, updateTasks, deleteTasks,
} = require('../controllers/task.controllers');

const tasksRouter = express.Router();

tasksRouter.post('/', create);
tasksRouter.get('/', listTasks);
tasksRouter.put('/:id', updateTasks);
tasksRouter.delete('/:id', deleteTasks);

module.exports = tasksRouter;
