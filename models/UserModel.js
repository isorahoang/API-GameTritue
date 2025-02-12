const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// Declare the Schema of the Mongo model
var user = new Schema({
  id: {
    type: ObjectId,
  },
  username: {
    type: String,
    maxlength: 50,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  points: {
    type: Number,
    default: 100,
  },
  rank: {
    type: Number,
  },
  total_matches: {
    type: Number,
    default: 0,
  },
  total_wins: {
    type: Number,
    default: 0,
  },
  avatar:{
    type: String,
    default: "default_avatar.jpg",
  },
});
//Export the model
module.exports = mongoose.models.user || mongoose.model("user", user);
