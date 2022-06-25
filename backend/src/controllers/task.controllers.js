const moment = require('moment');
const Task = require('../models/task');
const { createTasks, findTasks } = require('../services/task.services');
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
    const talkersList = await Task.find({ title });
    return res.status(success).json(talkersList);
  } catch (error) {
    return next(error);
  }
};

module.exports = { create, listTasks };
