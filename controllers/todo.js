const Todo = require("../models/todo");

exports.addTodo = async (req, res, next) => {
  try {
    const newTodo = new Todo({
      title: req.body.title,
    });
    const todo = await newTodo.save();
    res.status(200).json({
      message: "added successfully",
      data: todo,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getTodo = async (req, res, next) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({
      data: todos,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

exports.updateTodo = async (req, res, next) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findByIdAndUpdate(
      id,
      { $set: { title: req.body.title } },
      { new: true }
    );
    res.status(200).json({
      data: todo,
      message: "Updated",
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.deleteOne({ _id: id });
    res.status(200).json({
      data: todo,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
