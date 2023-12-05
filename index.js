const express = require("express");
const conncetDB = require("./config/db");
const todoRoute = require("./routes/todo");

conncetDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(todoRoute);

app.listen(3000, () => console.log("Server Started"));
