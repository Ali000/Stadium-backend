var express = require("express")
var router = express.Router()
const stadiumController = require("../controllers/stadiums")
const middleware = require("../middleware")

//send all stadiums
router.get(
  "/",
  middleware.stripToken,
  middleware.verifyToken,
  stadiumController.index
)
//send a stadium
router.get(
  "/:id",
  middleware.stripToken,
  middleware.verifyToken,
  stadiumController.show
)
// update stadium
router.put(
  "/:id",
  middleware.stripToken,
  middleware.verifyToken,
  stadiumController.updateStadium
)
// create a stadium
router.post(
  "/",
  middleware.stripToken,
  middleware.verifyToken,
  stadiumController.newStadium
)
// delete a stadium
router.delete(
  "/:id",
  middleware.stripToken,
  middleware.verifyToken,
  stadiumController.deleteStadium
)

module.exports = router
