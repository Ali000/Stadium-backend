const Stadium = require("../models/Stadium")

const index = async (req, res) => {
  //done
  try {
    let stadiums = await Stadium.find()
    res.json(Stadiums)
  } catch (err) {
    res.json({ error: err.message })
  }
}

const show = async (req, res) => {
  // done
  try {
    const stadium = await Stadium.findById(req.params.id)
    res.json(stadium)
  } catch (err) {
    res.json({ error: err.message })
  }
}

const newStadium = async (req, res) => {
  //done
  try {
    let newStadium = await Stadium.create(req.body)
    res.json(newStadium)
  } catch (err) {
    res.json({ error: err.message })
  }
}

const updateStadium = async (req, res) => {
  try {
    // req.body.status = true
    let stadium = await Stadium.updateOne({ _id: req.params.id }, req.body)
    res.json(stadium)
  } catch (err) {
    res.json({ error: err.message })
  }
}

const deleteStadium = async (req, res) => {
  try {
    await Stadium.deleteOne({ _id: req.params.id }).exec()
    res.json(true)
  } catch (err) {
    res.json({ error: err.message })
  }
}

module.exports = {
  deleteStadium,
  updateStadium,
  newStadium,
  index,
  show,
}
