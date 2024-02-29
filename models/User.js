const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ticketSchema = new Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, required: true },
    tickets: [{ type: Schema.Types.ObjectId, ref: "Ticket" }],
    staduims: [{ type: Schema.Types.ObjectId, ref: "Staduim" }],
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Team", ticketSchema)
