var express = require("express")
var router = express.Router()
const ticketsController = require("../controllers/tickets")
const middleware = require("../middleware")

//send all tickets
router.get("/", ticketsController.index)
//send a ticket
router.get("/:id", ticketsController.show)
// update ticket
router.put(
  "/:id",
  middleware.stripToken,
  middleware.verifyToken,
  ticketsController.updateTicket
)
// create a ticket
router.post(
  "/",
  middleware.stripToken,
  middleware.verifyToken,
  ticketsController.newTicket
)
// delete a ticket
router.delete(
  "/:id",
  middleware.stripToken,
  middleware.verifyToken,
  ticketsController.deleteTicket
)

module.exports = router
