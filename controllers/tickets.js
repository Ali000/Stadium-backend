const Ticket = require("../models/Ticket")

const index = async (req, res) => {
  //done
  try {
    let tickets = await Ticket.find()
    res.json(tickets)
  } catch (err) {
    res.json({ error: err.message })
  }
}

const show = async (req, res) => {
  // done
  try {
    const ticket = await ticket
      .findById(req.params.id)
      .populate(["user", "match"])
    res.json(ticket)
  } catch (err) {
    res.json({ error: err.message })
  }
}

const newTicket = async (req, res) => {
  //done
  try {
    let newTicket = await Ticket.create(req.body)
    res.json(newTicket)
  } catch (err) {
    res.json({ error: err.message })
  }
}

const updateTicket = async (req, res) => {
  try {
    // req.body.status = true
    let ticket = await Ticket.updateOne({ _id: req.params.id }, req.body)
    res.json(ticket)
  } catch (err) {
    res.json({ error: err.message })
  }
}

const deleteTicket = async (req, res) => {
  try {
    // if (res.locals.payload) {
    //   if (
    //     res.locals.payload.role == "Admin" ||
    //     res.locals.payload.role == "customer"
    //   ) {

    //   }
    // }
    await Ticket.deleteOne({ _id: req.params.id }).exec()
    res.json(true)
  } catch (err) {
    res.json({ error: err.message })
  }
}

module.exports = {
  deleteTicket,
  updateTicket,
  newTicket,
  index,
  show,
}
