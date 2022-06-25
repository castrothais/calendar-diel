const express = require('express');
const { error } = require('./middlewares/errorMiddlewares');
const tasksRouter = require('./routes/tasksRouter');

const app = express();

app.use(express.json());

app.use('/task/', tasksRouter);

app.use(error);

module.exports = app;
