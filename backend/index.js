const express = require("express");
const cors=require("cors");
const app=express();
const mainrouter=require("./routes/index");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use("https://paytm-basic-pi.vercel.app/api/v1/",mainrouter);
