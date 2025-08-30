const express = require("express");
const bodyParser = require("body-parser");
const scanHandler = require("./scan"); 

const app = express();
app.use(bodyParser.json({ limit: "100mb" })); 
app.post("/api/scan", scanHandler);

app.listen(5000, ()=> console.log("Server on :5000"));
