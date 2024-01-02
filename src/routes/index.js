const express = require("express")
const route = express.Router();
const { getAll, loginUser, createUser } = require("../controllers/index");


route.get("/getUssers", getAll);
route.post("/login_user", loginUser);
route.post("/register_user", createUser);

module.exports = route;