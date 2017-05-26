var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
const User = require("../model/user");
const passport = require('../config/passport');
const upload = require('../config/multer');


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

  if(req.file !== undefined){
    profileInfo.image= `/upload/${req.file.filename}`;
  }

  User.findByIdAndUpdate(req.params.id, userInfo , {new: true}, (err) => {
    if (err) {
      console.log("error");
      return res.send(err);
    }
console.log("succes");
    return res.json({
      message: 'User updated successfully'
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


router.post('/', upload.single('file'), function(req, res) {

  const user = new User({
    username:       req.body.username,
    password:       hashPass,
    image: `/uploads/${req.file.filename}`,
    name:           req.body.name,
    lastName:       req.body.lastName,
    age:            req.body.age,
    height:         req.body.height,
    weigth:         req.body.weigth,
    mass_muscle:    req.body.mass_muscle,
    mass_water:     req.body.mass_water,
    mass_bone:      req.body.mass_bone,
    mass_fat:       req.body.mass_fat,
    count_total:    req.body.count_total,
    count_variable: req.body.count_variable,
  });

  user.save((err) => {
    if (err) {
      return res.send(err);
    }

    return res.json({
      message: 'New User created!',
      user: User
    });
  });
});



module.exports = router;
