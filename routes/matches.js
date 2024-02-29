var express = require("express")
var router = express.Router()
const matchesController = require("../controllers/matches")

//send all Matchs
router.get("/", matchesController.index)
//send a Match
router.get("/:id", matchesController.show)
// update Match
router.put("/:id", matchesController.updateMatch)

/// for future functionlity
// create a Match
router.post("/", matchesController.newMatch)
// delete a Match
router.delete("/:id", matchesController.deleteMatch)

module.exports = router
