const User = require("../models/User")

const index = async (req, res) => {
  //done
  try {
    let users = await User.find()
    res.json(users)
  } catch (err) {
    res.json({ error: err.message })
  }
}

const show = async (req, res) => {
  // done
  try {
    const user = await User.findById(req.params.id).populate([
      "tickets",
      "stadiums",
    ])
    res.json(user)
  } catch (err) {
    res.json({ error: err.message })
  }
}

const newUser = async (req, res) => {
  //done
  try {
    let newUser = await User.create(req.body)
    res.json(newUser)
  } catch (err) {
    res.json({ error: err.message })
  }
}

const updateUser = async (req, res) => {
  try {
    let user = await User.updateOne({ _id: req.params.id }, req.body)
    res.json(user)
  } catch (err) {
    res.json({ error: err.message })
  }
}

const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id }).exec()
    res.json(true)
  } catch (err) {
    res.json({ error: err.message })
  }
}

module.exports = {
  deleteUser,
  updateUser,
  newUser,
  index,
  show,
}
