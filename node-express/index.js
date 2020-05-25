const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const hostname = "localhost";
const port = 3000;
const app = express();
const morgan = require('morgan');



app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// API
app.all('/dishes',(req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type',"text/plain");
    next();
});

app.get('/dishes',(req,res,next)=>{
    res.end('Displaying all the dishes');
});

app.post('/dishes',(req,res,next)=>{
    res.end('Adding the dish with '+req.body.name+' and with description '+req.body.description);
});

app.put('/dishes',(req,res,next)=>{
    res.statusCode = 403;
    res.end('Update requests are not supported right now');
});

app.delete('/dishes',(req,res,next)=>{
    res.end('deleting all the dishes');
});





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