const mongoose = require('mongoose');
const conection = require('./connectionMongoose');

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    dateTask: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
  },
);

const Task = conection.model('Task', taskSchema);

module.exports = Task;
