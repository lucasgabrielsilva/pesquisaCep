const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(morgan('short'));
console.log("API starting...");

require("dotenv").config();
require("./src/database");
require("./src/models/address");

app.use("/api", require("./src/routes"));

console.log('SERVER RUNNING...');

process.on("exit", (err) => {
    console.log("ERROR: ", err.toString());
    console.log("API is closing...");
});