const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false}))
console.log("API starting...");

require("dotenv").config();
require("./src/database");
require("./src/models/address");

app.use("/api", require("./src/routes"));

app.listen(parseInt(process.env.SERVER_PORT), () => {
    console.log("Listen on port:", process.env.SERVER_PORT);
}).on("error", (err) => {
    process.exit(err);
});

process.on("exit", (err) => {
    console.log("ERROR: ", err.toString());
    console.log("API is closing...");
});