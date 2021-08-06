const express = require("express");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

const giftsControllers = require("../controllers/gifts");

router.post("/add-gift", isAuth, giftsControllers.postAddGifts);
router.get("/get-gift", isAuth, giftsControllers.getGifts);

module.exports = router;
