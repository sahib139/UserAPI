const https = require("https");
const fs = require("fs")
const path = require("path")
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const {PORT} = require("./config/server-config");
const dbConnect = require("./config/database-config");
const APIroutes = require("./router/index");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/api",APIroutes);

const sslServer = https.createServer({
    key  : fs.readFileSync(path.join(__dirname,'..','cert','key.pem')),
    cert : fs.readFileSync(path.join(__dirname,'..','cert','cert.pem')),
},app);

sslServer.listen(PORT,async ()=>{    
    console.log(`Server started at ${PORT}`);
    await dbConnect();
    console.log("database connected!");
});