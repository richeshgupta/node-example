const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const hostname = "localhost";
const port = 3000;
const app = express();
const morgan = require('morgan');
const dishRouter = require('./routes/dishRoutes');
const promoRouter = require('./routes/promotionsRoutes');
const leaderRouter = require('./routes/leaderRoutes');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// API
app.use('/dishes',dishRouter); //API route call
app.use('/promotions',promoRouter); // API route call for promotion end point
app.use('/leaders',leaderRouter);

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