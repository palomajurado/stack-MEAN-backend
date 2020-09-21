// servidro configurado
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

// enviroment variables
app.set("port", process.env.PORT || 4000);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.json("Bienvenido"));
app.use("/api/employees", require("./routes/employees.routes"));

module.exports = app;
