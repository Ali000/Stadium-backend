const expressRouter = require("express");
const AuthCTRL = require("../controllers/Auth");
const middleware = require("../middleware");

const router = expressRouter.Router();


router.post('/signup', AuthCTRL.signUp);
router.post('/signin', AuthCTRL.signIn);
router.get("/checksession", AuthCTRL.checkSession);

module.exports = router;