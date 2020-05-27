const express = require('express');
const dishRouter = express.Router({mergeParams:true});
const bodyParser = require('body-parser');



dishRouter.use(bodyParser.json());





dishRouter.route('/')
.all((req,res,next)=>
{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
    
}).get((req,res,next)=>{
    res.end('Displaying all the dishes');
}).post((req,res,next)=>{
    res.setHeader('Content-Type',"text/html");
    res.end('Adding the dish with '+ req.body.name +' and with description '+ req.body.description );
}).put((req,res,next)=>{
    res.statusCode = 403;
    res.end('Update requests are not supported right now');
})
.delete((req,res,next)=>{
    res.end('deleting all the dishes');
});

dishRouter.route('/:dishId')
.all((req,res,next)=>{
    res.setHeader('Content-Type','text/html');
    res.statusCode = 200;
    next();
}).get((req,res,next)=>{
    res.end('showing dishes with id : ' + req.params.dishId );
}).post((req,res,next)=>{
    res.end("Creating dish with id " + req.params.dishId + ' Name : ' + req.body.name + ' and description : '+req.body.description);
}).put((req,res,next)=>{
    res.end("Updating request is not supported");
}).delete((req,res,next)=>{
    res.end('Deleting dish with id ' + req.params.dishId);
});

// exporting
module.exports = dishRouter