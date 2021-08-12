const express = require("express");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

const giftsControllers = require("../controllers/gifts");

router.post("/add-gifts", isAuth, giftsControllers.postAddGifts);
router.get("/get-gifts", isAuth, giftsControllers.getGift);
router.get("/get-all-gift", giftsControllers.getAllGifts);
router.delete("/delete", isAuth, giftsControllers.deleteGift);

module.exports = router;
