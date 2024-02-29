var express = require("express")
var router = express.Router()

const usersController = require("../controllers/users")
// send user
router.get("/:id", usersController.show)
// update user
router.put("/:id", usersController.updateUser)
// create a user
router.post("/", usersController.newUser)
// delete a user
router.delete("/:id", usersController.deleteUser)
module.exports = router
