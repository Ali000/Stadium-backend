const Team = require("../models/Team")

const index = async (req, res) => {
  //done
  try {
    let teams = await Team.find()
    res.json(teams)
  } catch (err) {
    res.json({ error: err.message })
  }
}

const show = async (req, res) => {
  // done
  try {
    const team = await Team.findById(req.params.id)
    res.json(team)
  } catch (err) {
    res.json({ error: err.message })
  }
}

const newTeam = async (req, res) => {
  //done
  try {
    let newTeam = await Team.create(req.body)
    res.json(newTeam)
  } catch (err) {
    res.json({ error: err.message })
  }
}

const updateTeam = async (req, res) => {
  try {
    let team = await Team.updateOne({ _id: req.params.id }, req.body)
    res.json(team)
  } catch (err) {
    res.json({ error: err.message })
  }
}

const deleteTeam = async (req, res) => {
  try {
    await Team.deleteOne({ _id: req.params.id }).exec()
    res.json(true)
  } catch (err) {
    res.json({ error: err.message })
  }
}

module.exports = {
  deleteTeam,
  updateTeam,
  newTeam,
  index,
  show,
}
