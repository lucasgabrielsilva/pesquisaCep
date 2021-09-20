const express = require("express");
const addressController = require("../controllers/address");
const middleware = require("../middlewares/checkCep");
const routes = express.Router();

routes.use("/save", middleware);

routes.get("/search/:cep", addressController.searchAddress);
routes.post("/save", addressController.saveAddress);

module.exports = routes;