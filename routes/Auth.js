const expressRouter = require("express");
const AuthCTRL = require("../controllers/Auth");

const router = expressRouter.Router();


router.post('/signup', AuthCTRL.signUp);
router.post('/signin', AuthCTRL.signIn);

module.exports = router;