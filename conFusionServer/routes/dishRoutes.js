const express = require('express');
const dishRouter = express.Router({mergeParams:true});
const bodyParser = require('body-parser');
const Dishes = require('../models/dishes');


dishRouter.use(bodyParser.json());





dishRouter.route('/')
.get((req,res,next)=>{
    Dishes.find({})
    .then((dish)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(dish);
    },(err)=>next(err))
    .catch((err)=>next(err));
    
}).post((req,res,next)=>{
    Dishes.create(req.body)
    .then((dish)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(dish);
    },(err)=>next(err))
    .catch((err)=>next(err));
}).put((req,res,next)=>{
    res.statusCode = 403;
    res.end('Update requests are not supported right now');
})
.delete((req,res,next)=>{
    Dishes.remove({})
    .then((dish)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(dish);
    },(err)=>next(err))
    .catch((err)=>next(err));
    
});





dishRouter.route('/:dishId')
.get((req,res,next)=>{

   Dishes.findById(req.params.dishId)
   .then((dish)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    res.json(dish);
   },(err)=>next(err))
   .catch((err)=>next(err));

})
.post((req,res,next)=>{
    res.end("Creating dish with id " + req.params.dishId + ' Name : ' + req.body.name + ' and description : '+req.body.description);
})
.put((req,res,next)=>{
    Dishes.findByIdAndUpdate(req.params.dishId,{
        $set:req.body
    },{new:true})
    .then((dish)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(dish);
    },(err)=>next(err))
    .catch((err)=>next(err));
})
.delete((req,res,next)=>{
    Dishes.findByIdAndRemove(req.params.dishId)
    .then((dish)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(dish);
    },(err)=>next(err))
    .catch((err)=>next(err));
});

// exporting
module.exports = dishRouter