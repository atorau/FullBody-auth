const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username:       String,
  password:       String,
  image:          String,
  name:           String,
  lastName:       String,
  age:            {
          type: Number, default:0 },
  height:         {
          type: Number, default:0 },
  weigth:         {
          type: Number, default:0 },
  mass_muscle:    {
          type: Number, default:0 },
  mass_water:     {
          type: Number, default:0 },
  mass_bone:      {
          type: Number, default:0 },
  mass_fat:       {
          type: Number, default:0 },
  count_total:    {
          type: Number, default:0 },
  count_variable: {
          type: Number, default:0 },
  role: {
    type: String,
    enum : ['BEGINNER', 'REGULAR', 'ADVANCED'],
    default : 'BEGINNER'
  },
  medals:[{
      type: Schema.Types.ObjectId,
      ref: "Medal"
    }],
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
