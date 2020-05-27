const express = require('express');
const promoRouter = express.Router({mergeParams:true});
const bodyParser = require('body-parser');


promoRouter.use(bodyParser.json());

promoRouter.route('/').all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
}).get((req,res,next)=>{
    res.end('Displaying all the promotions');
}).post((req,res,next)=>{
    res.setHeader('Content-Type',"text/html");
    res.end('Adding the promotion with '+ req.body.name +' and with description '+ req.body.description );
}).put((req,res,next)=>{
    res.statusCode = 403;
    res.end('Update requests are not supported right now');
})
.delete((req,res,next)=>{
    res.end('deleting all the promotions');
});

promoRouter.route('/:promoId').all((req,res,next)=>{
    res.setHeader('Content-Type','text/html');
    res.statusCode = 200;
    next();
}).get((req,res,next)=>{
    res.end('showing promotions with id : ' + req.params.promoId );
}).post((req,res,next)=>{
    res.end("Creating promo with id " + req.params.promoId + ' Name : ' + req.body.name + ' and description : '+req.body.description);
}).put((req,res,next)=>{
    res.end("Updating request is not supported");
}).delete((req,res,next)=>{
    res.end('Deleting promotions with id ' + req.params.promoId);
});

module.exports = promoRouter;