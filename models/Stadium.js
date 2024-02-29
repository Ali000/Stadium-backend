const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stadiumSchema = new Schema({
  name: String,
  seats: Number,
  location: {
    latitude: Number,
    longtitude: Number
  },
  sport: String,
  match:  [mongoose.Schema.Types.ObjectId]
})

module.exports = stadiumSchema;