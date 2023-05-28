const moment = require('moment');
const Task = require('../models/task');
const {
  createTasks, findTasks, updateTaskById, deleteTaskById,
} = require('../services/task.services');
const { created, success } = require('../utils/status');

const create = async (req, res, next) => {
  try {
    const {
      title, description, dateTask, duration,
    } = req.body;
    const dateTaskMoment = moment(dateTask).format('YYYY-MM-DD HH:mm:ss');
    const result = await createTasks(title, description, dateTaskMoment, duration);
    return res.status(created).json({ task: result });
  } catch (error) {
    return next(error);
  }
};

const listTasks = async (req, res, next) => {
  try {
    const { title } = req.query;
    if (!title || title === '') {
      const allTasks = await findTasks();
      return res.status(success).json(allTasks);
    }
    const talkersList = await Task.find({ title: { $regex: title, $options: 'i' } });
    return res.status(success).json(talkersList);
  } catch (error) {
    return next(error);
  }
};

const updateTasks = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      title, description, duration,
    } = req.body;
    const newTask = await updateTaskById(id, { title, description, duration });
    return res.status(success).json(newTask);
  } catch (error) {
    return next(error);
  }
};

const deleteTasks = async (req, res, next) => {
  try {
    const { id } = req.params;
    await deleteTaskById(id);
    return res.status(success).json({});
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  create, listTasks, updateTasks, deleteTasks,
};
