const http = require('http');
const express = require('express');

const hostname = "localhost";
const port = 3000;

const app = express();

app.use((req,res,next)=>{
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader("Content-Type","text/html");
    res.end('<h1>This is an express server</h1>');
});

const server = http.createServer(app);
server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}`);
});