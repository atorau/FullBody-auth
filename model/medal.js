const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const medalSchema = new Schema({
  name:        String,
  image:       String,
  description: String
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const User = mongoose.model("Medal", medalSchema);
module.exports = Medal;
