const { ObjectId } = require('mongodb');
const Task = require('../models/task');
const { taskSchemas } = require('../schemas/taskSchemas');
const errorConstructor = require('../utils/errorConstructor');
const { badRequest, notFound } = require('../utils/status');

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

const verifyTaskId = async (id) => {
  const taskExist = await Task.findOne({ _id: ObjectId(id) });
  if (!taskExist) throw errorConstructor(notFound, 'Task not found');
};

const updateTaskById = async (id, updateTask) => {
  await verifyTaskId(id);
  const resultUpdate = await Task.updateOne({ _id: id }, updateTask);
  const objectUpdated = await Task.findById(id);
  return {
    result: resultUpdate.acknowledged,
    objectUpdated,
  };
};

module.exports = { createTasks, findTasks, updateTaskById };
