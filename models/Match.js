const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const matchSchema = new Schema({
  name: String,
  time: {
    from: "",
    to: "",
  },
  stadium: mongoose.Schema.Types.ObjectId,
  teams: {
    home: mongoose.Schema.Types.ObjectId,
    away: mongoose.Schema.Types.ObjectId
  },
  result: ""
})