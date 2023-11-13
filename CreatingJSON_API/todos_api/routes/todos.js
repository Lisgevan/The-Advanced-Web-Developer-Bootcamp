const express = require("express");
const router = express.Router();
const db = require("../models");
const helpers = require("../helpers/todos");

router
	.route("/")
	//get all todos route
	.get(helpers.getTodos)
	//add a todo route
	.post(helpers.createTodo);

router
	.route("/:todoId")
	//finf a todo route
	.get(helpers.getTodo)
	//update a todo route
	.put(helpers.updateTodo)
	//delete a todo route
	.delete(helpers.deleteTodo);

module.exports = router;
