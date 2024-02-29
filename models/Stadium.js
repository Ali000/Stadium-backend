const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stadiumSchema = new Schema({
  name: String,
  seats: Number,
  location: {
    latitude: Number,
    longtitude: Number
  },
  sport: String
})

module.exports = stadiumSchema;