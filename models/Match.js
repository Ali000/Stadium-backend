const mongoose = require("mongoose")
const Schema = mongoose.Schema

const matchSchema = new Schema({
  name: { type: String, required: true },
  time: {
    from: { type: Date, required: true },
    to: { type: Date, required: true },
  },
  stadium: { type: Schema.Types.ObjectId, ref: "Stadium" },
  teams: {
    home: { type: Schema.Types.ObjectId, ref: "Team" },
    away: { type: Schema.Types.ObjectId, ref: "Team" },
  },
  price: { type: Number, required: true }, //price of the ticket
  result: { type: String },
  seats: { type: Number, required: true },
})

// { type: String, required: true },

module.exports = mongoose.model("Match", matchSchema)
