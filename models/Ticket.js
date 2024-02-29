const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ticketSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    match: { type: Schema.Types.ObjectId, ref: "Match" },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Ticket", ticketSchema)
