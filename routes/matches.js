var express = require("express")
var router = express.Router()
const matchesController = require("../controllers/matches")
const middleware = require("../middleware")

//send all Matchs
router.get(
  "/",
  // middleware.stripToken,
  // middleware.verifyToken,
  matchesController.index
)
//send a Match
router.get(
  "/:id",
  // middleware.stripToken,
  // middleware.verifyToken,
  matchesController.show
)
// update Match
router.put(
  "/:id",
  middleware.stripToken,
  middleware.verifyToken,
  matchesController.updateMatch
)

/// for future functionlity
// create a Match
router.post(
  "/",
  middleware.stripToken,
  middleware.verifyToken,
  matchesController.newMatch
)
// delete a Match
router.delete(
  "/:id",
  middleware.stripToken,
  middleware.verifyToken,
  matchesController.deleteMatch
)

module.exports = router
