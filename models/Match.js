const mongoose = require("mongoose")
const Schema = mongoose.Schema

const matchSchema = new Schema({
  name: { type: String, required: true },
  time: {
    from: { type: String, required: true },
    to: { type: String, required: true },
  },
  stadium: { type: Schema.Types.ObjectId, ref: "Stadium" },
  teams: {
    home: { type: Schema.Types.ObjectId, ref: "Team" },
    away: { type: Schema.Types.ObjectId, ref: "Team" },
  },
  result: { type: String },
})

// { type: String, required: true },

module.exports = mongoose.model("Match", matchSchema)
