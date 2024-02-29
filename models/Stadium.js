const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stadiumSchema = new Schema({
  name: String,
  seats: Number,
  location: String,
  sport: String,
  match:  [mongoose.Schema.Types.ObjectId]
})

module.exports = mongoose.model("Stadium", stadiumSchema);