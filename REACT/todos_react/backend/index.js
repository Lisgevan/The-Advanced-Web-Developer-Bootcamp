const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const port = process.env.PORT || 3001;
// use: $env: port = 3003; // to change the port
console.log(process.env.PORT);

//ROUTES
const todoRoutes = require("./routes/todos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => res.sendFile("index.html"));

app.use("/api/todos", todoRoutes);

app.listen(port, () => console.log("APP IS RUNNING ON PORT " + port));
