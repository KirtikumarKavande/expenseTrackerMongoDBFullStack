const express = require("express");
const auth=require('../controllers/auth')

const app = express();

const router = express.Router();

router.post("/signup", auth.signUp);
router.post("/signin", auth.signin);

module.exports = router;