var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
const User = require("../model/user");
const passport = require('../config/passport');
const upload = require('../config/multer');
const fs = require('fs');
const imgurUploader = require('imgur-uploader');


// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', (req, res) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Specified id is not valid' });
  }
console.log("req.params.id",  req.params.id );
  User.findById(req.params.id, (err, Users) => {
      if (err) {
        return res.send(err);
      }
      console.log(Users);
      return res.json(Users);
    });
});
/* EDIT a User. */
router.put('/:id', (req, res) => {
  // if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
  //   return res.status(400).json({ message: 'Specified id is not valid' });
  // }
console.log(req.body);

  const userInfo= req.body;

  if(userInfo.count_total >= 35 ){
    userInfo.role = "REGULAR";
  }

  if(userInfo.count_total >= 100){
    userInfo.role = "ADVANCED";
  }

  if(req.file !== undefined){
    profileInfo.image= `/upload/${req.file.filename}`;
  }

  User.findByIdAndUpdate(req.params.id, userInfo , {new: true}, (err, user) => {
    if (err) {
      console.log("error");
      return res.send(err);
    }
console.log("succes");
    return res.json({
      user: user
    });
  });
});

router.delete('/:id', (req, res) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Specified id is not valid' });
  }

  User.remove({ _id: req.params.id }, (err) => {
    if (err) {
      return res.send(err);
    }

    return res.json({
      message: 'User has been removed!'
    });
  });
});


router.post('/edit', upload.single('file'), function(req, res) {

  const imageInfo ={};
   console.log("HEEEERYYYYYYYYYY",req.file.path);
  //  return res.json(user);
  if(req.file !== undefined){
    imgurUploader(fs.readFileSync(req.file.path)).then(data => {
      console.log(data);
      console.log("AQUIIIIIIII", data.link);
      imageInfo.image=data.link;
      console.log("AQUI TAMBIEN ENTRA", req.body.id);
  User.findByIdAndUpdate(req.body.id, imageInfo,(err,user)=>{
    if(err){return res.send(err);}
    return res.json(user);
    });
  });
}
});




module.exports = router;
