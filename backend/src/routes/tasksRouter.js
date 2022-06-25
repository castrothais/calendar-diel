const express = require('express');
const { create, listTasks } = require('../controllers/task.controllers');

const tasksRouter = express.Router();

tasksRouter.post('/', create);
tasksRouter.get('/', listTasks);

module.exports = tasksRouter;
