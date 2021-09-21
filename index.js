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

app.listen(process.env.PORT || parseInt(process.env.SERVER_PORT), () => {
    console.log("SERVER RUNNING ON PORT:", process.env.PORT || process.env.SERVER_PORT);
}).on("error", (err) => {
    process.exit(err);
});

process.on("exit", (err) => {
    console.log("ERROR: ", err.toString());
    console.log("API is closing...");
});