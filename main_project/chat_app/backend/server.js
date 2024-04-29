const express = require("express");
const dotenv = require("dotenv");

const req = require("express/lib/request");
const res = require("express/lib/response");

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000

app.get("/", (req,res) => {
    //root route https://localhost:5000/
    res.send("Server is ready");
})

app.listen(PORT, () => console.log(`Server Running at port${PORT}`));