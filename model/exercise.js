const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  name:         String,
  description:  String,
  video_link:   String,
  muscles:{
    type: String,
    enum : ['CARDIO', 'LEG', 'BACK','SHOULDER','CHEST','BICEPS','TRICEPS','GLUTES','ABS'],
    default : 'CARDIO'
  }
});

var Exercise = mongoose.model("Exercise", exerciseSchema);
module.exports = Exercise;
