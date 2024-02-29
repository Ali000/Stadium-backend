const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ticketSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    matchId: { type: Schema.Types.ObjectId, ref: "Match" },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Team", ticketSchema)
