var express = require("express")
var router = express.Router()
const ticketsController = require("../controllers/tickets")

//send all tickets
router.get("/", ticketsController.index)
//send a ticket
router.get("/:id", ticketsController.show)
// update ticket
router.put("/:id", ticketsController.updateTicket)
// create a ticket
router.post("/", ticketsController.newTicket)
// delete a ticket
router.delete("/:id", ticketsController.deleteTicket)

module.exports = router
