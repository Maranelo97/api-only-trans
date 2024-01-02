const express = require("express");
const mysql = require("mysql2")
const cors = require("cors")
const conn = require("express-myconnection")
const route = require("./routes/index")
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000

const dbConfig = {
    host: process.env.DB_HOST  || "localhost",
    port: process.env.DB_PORT  || "3306",
    user: process.env.DB_USER  || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "onlytransdb"
}

app.use(cors());
app.use(conn(mysql, dbConfig, "single"))

app.use(express.json());

app.use("/",route);

app.get("/", (req, res) => {
    res.send("MAURI GATO, no mentira amigo te quiero <3")
})

app.listen(PORT, () => {
    console.log("server Running on port " + PORT)
})