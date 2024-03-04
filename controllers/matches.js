const Match = require("../models/Match")
const Stadium = require("../models/Stadium")

const index = async (req, res) => {
  //done
  try {
    let matches = await Match.find()
    res.json(matches)
  } catch (err) {
    res.json({ error: err.message })
  }
}

const show = async (req, res) => {
  // done
  try {
    const match = await Match.findById(req.params.id)
    res.json(match)
  } catch (err) {
    res.json({ error: err.message })
  }
}

const newMatch = async (req, res) => {
  //done
  try {
    let newMatch = await Match.create(req.body)
    const updateStadium = await Stadium.updateOne(req.body.stadium._id, {
      $push: { matches: newMatch._id },
    })
    res.json(newMatch)
  } catch (err) {
    res.json({ error: err.message })
  }
}

const updateMatch = async (req, res) => {
  try {
    // req.body.status = true
    let match = await Match.updateOne({ _id: req.params.id }, req.body)
    res.json(match)
  } catch (err) {
    res.json({ error: err.message })
  }
}

const deleteMatch = async (req, res) => {
  try {
    await Match.deleteOne({ _id: req.params.id }).exec()
    res.json(true)
  } catch (err) {
    res.json({ error: err.message })
  }
}

module.exports = {
  deleteMatch,
  updateMatch,
  newMatch,
  index,
  show,
}
