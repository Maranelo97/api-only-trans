const express = require("express")
const route = express.Router();
const { getAll, loginUser, createUser, update, deleteUser } = require("../controllers/index");

const allowOnlyFromSpecificOrigin = (req, res, next) => {
    const allowedOrigins = ['http://localhost:3000', 'https://admin.pensionplan.com.ar', 'http://localhost:4200'];
    const origin = req.headers.origin;

    if (allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);
        return next();
    }

    return res.status(403).json({ error: 'Acceso no permitido desde esta dirección.' });
};

route.use(allowOnlyFromSpecificOrigin)
route.get("/getUssers", getAll);
route.post("/login_user", loginUser);
route.post("/register_user", createUser);
route.put('/updateUser/:id', update);
route.delete('/deleteUser/:id', deleteUser);

module.exports = route;
