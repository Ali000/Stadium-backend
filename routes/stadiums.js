var express = require("express")
var router = express.Router()
const stadiumController = require("../controllers/stadiums")

//send all stadiums
router.get("/", stadiumController.index)
//send a stadium
router.get("/:id", stadiumController.show)
// update stadium
router.put("/:id", stadiumController.updateStadium)
// create a stadium
router.post("/", stadiumController.newStadium)
// delete a stadium
router.delete("/:id", stadiumController.deleteStadium)

module.exports = router
