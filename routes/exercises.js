var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
const Exercise = require('../model/exercise');
const upload = require('../config/multer');
const passport = require('../config/passport');
const createSchedule = require("../helpers");

/*Get Exercises list. */
router.get('/',(req,res,next)=>{
  Exercise.find({}).exec((err, exercises)=>{
    if(err){
      return res.render(err);
    }
    const schedule = createSchedule(exercises);
    res.json(schedule);
  });
});

/*Get a single Exercise. */
router.get('/:id',(req,res)=>{
  if(!mongoose.Types.ObjectID.isValid(req.params.id)){
    return res.status(400).json({message:'Specified id is not valid'});
  }
  Exercise.findById(req.params.id, (err, Exercises)=>{
    if(err){
      return res.render(err);
    }
    return res.json(Exercises);
  });
});


module.exports = router;
