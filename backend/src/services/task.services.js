const Task = require('../models/task');
const taskSchemas = require('../schemas/taskSchemas');
const errorConstructor = require('../utils/errorConstructor');
const { badRequest } = require('../utils/status');

const validateTask = (title, description, dateTask, duration) => {
  const { error } = taskSchemas.validate({
    title, description, dateTask, duration,
  });
  if (error) throw errorConstructor(badRequest, 'Invalid entries. Try again.');
};

const createTasks = async (title, description, dateTask, duration) => {
  validateTask(title, description, dateTask, duration);

  const taksCreated = await Task.create({
    title, description, dateTask, duration,
  });
  return taksCreated;
};

const findTasks = async () => {
  const allTasks = await Task.find();
  return allTasks;
};

module.exports = { createTasks, findTasks };
