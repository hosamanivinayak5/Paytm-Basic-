const express = require("express");
const cors=require("cors");
const app=express();
const mainrouter=require("./routes/index");
const bodyParser = require("body-parser");

app.use(cors(
    {
        origin:["https://paytm-basic-frontend-tau.vercel.app"],
        methods:["POST","GET","PUT"],
        credentials:true
    }
));
app.use(bodyParser.json());
app.use("https://paytm-basic-pi.vercel.app/api/v1/",mainrouter);
