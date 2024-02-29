const mongoose = require("mongoose")
const Schema = mongoose.Schema

const stadiumSchema = new Schema(
  {
    name: { type: String, required: true },
    seats: { type: Number, required: true },
    location: {
      latitude: { type: Date, required: true },
      longtitude: { type: Date, required: true },
    },
    sport: { type: String, required: true },
    matches: [{ type: Schema.Types.ObjectId, ref: "Stadium" }],
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Stadium", stadiumSchema)
