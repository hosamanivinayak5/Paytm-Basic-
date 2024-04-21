const express = require("express");
const cors=require("cors");
const app=express();
const mainrouter=require("./routes/index");
const bodyParser = require("body-parser");

app.use(cors({
    origin:["https://paytm-basic-pi.vercel.app"],
    methods:["POST","PUT","GET","DELETE"],
    credentials:true
}));
app.use(bodyParser.json());

app.use("/api/v1",mainrouter);
const port=3000;
app.listen(port,()=>{
    console.log(`app is listning at ${port}`)
})