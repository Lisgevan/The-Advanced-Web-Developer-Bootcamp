// const express = require("express");
// const router = express.Router();
const db = require("../models");

//get all todos route
exports.getTodos = (req, res) => {
	db.Todo.find()
		.then(todos => res.json(todos))
		.catch(err => res.send(err));
};

//add a todo route
exports.createTodo = (req, res) => {
	db.Todo.create(req.body)
		.then(newTodo => res.status(201).json(newTodo))
		.catch(err => res.send(err));
};

//find a todo route
exports.getTodo = (req, res) => {
	db.Todo.findById(req.params.todoId)
		.then(foundTodo => res.json(foundTodo))
		.catch(err => res.send(err));
};

//update a todo route
exports.updateTodo = (req, res) => {
	db.Todo.findOneAndUpdate({ _id: req.params.todoId }, req.body, { new: true })
		.then(todo => res.json(todo))
		.catch(err => res.send(err));
};

//delete a todo route
exports.deleteTodo = (req, res) => {
	db.Todo.deleteOne({ _id: req.params.todoId })
		// db.Todo.findOneAndDelete({ _id: req.params.todoId })  //or do this that will return the deleted todo
		.then(todo => res.json({ message: "We deleted it!" }))
		.catch(err => res.send(err));
};

module.exports = exports;
