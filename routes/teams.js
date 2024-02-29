var express = require("express")
var router = express.Router()
const teamsController = require("../controllers/teams")

//send all teams
router.get("/", teamsController.index)
//send a team
router.get("/:id", teamsController.show)
// update team
router.put("/:id", teamsController.updateTeam)
// create a team
router.post("/", teamsController.newTeam)
// delete a team
router.delete("/:id", teamsController.deleteTeam)

module.exports = router
