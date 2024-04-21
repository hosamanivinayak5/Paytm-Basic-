const express = require("express");
const cors=require("cors");
const app=express();
const mainrouter=require("./routes/index");
const bodyParser = require("body-parser");

app.use(cors({
    
}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization")
      next();
    });
app.use("/api/v1",mainrouter);
const port=3000;
app.listen(port,()=>{
    console.log(`app is listning at ${port}`)
})