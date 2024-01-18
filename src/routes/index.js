const express = require("express")
const route = express.Router();
const { getAll, loginUser, createUser, update, deleteUser } = require("../controllers/index");


route.get("/getUssers", getAll);
route.post("/login_user", loginUser);
route.post("/register_user", createUser);
route.put('/updateUser/:id', update);
route.delete('/deleteUser/:id', deleteUser);

module.exports = route;