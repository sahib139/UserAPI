const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const {PORT} = require("./config/server-config");
const dbConnect = require("./config/database-config");
const APIroutes = require("./router/index");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/api",APIroutes);

app.listen(PORT,async ()=>{    
    console.log(`Server started at ${PORT}`);
    await dbConnect();
    console.log("database connected!");
});