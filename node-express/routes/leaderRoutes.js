const express = require('express');
const leaderRouter = express.Router({mergeParams:true});

const bodyParser = require('body-parser');

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next)=>
{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
    
}).get((req,res,next)=>{
    res.end('Displaying all the leaders');
}).post((req,res,next)=>{
    res.setHeader('Content-Type',"text/html");
    res.end('Adding the leaders with '+ req.body.name +' and with description '+ req.body.description );
}).put((req,res,next)=>{
    res.statusCode = 403;
    res.end('Update requests are not supported right now');
})
.delete((req,res,next)=>{
    res.end('deleting all the leaders');
});

leaderRouter.route('/:leaderId')
.all((req,res,next)=>{
    res.setHeader('Content-Type','text/html');
    res.statusCode = 200;
    next();
}).get((req,res,next)=>{
    res.end('showing leaders with id : ' + req.params.leaderId );
}).post((req,res,next)=>{
    res.end("Creating leader with id " + req.params.leaderId + ' Name : ' + req.body.name + ' and description : '+req.body.description);
}).put((req,res,next)=>{
    res.end("Updating request is not supported");
}).delete((req,res,next)=>{
    res.end('Deleting leader with id ' + req.params.leaderId);
});

module.exports = leaderRouter;