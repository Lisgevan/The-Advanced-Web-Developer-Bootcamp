const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const port = 3000;

//ROUTES
const todoRoutes = require("./routes/todos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("HELLO FROM THE ROOT ROUTE"));

app.use("/api/todos", todoRoutes);

app.listen(port, () => console.log("APP IS RUNNING ON PORT" + port));
