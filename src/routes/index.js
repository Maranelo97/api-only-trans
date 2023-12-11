const express = require("express")
const route = express.Router();
const { getAll, loginUser } = require("../controllers/index");


route.get("/getUssers", getAll);
route.get("/login_user", loginUser)

module.exports = route;