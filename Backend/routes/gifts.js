const express = require("express");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

const giftsControllers = require("../controllers/gifts");

router.post("/add-gift", isAuth, giftsControllers.postAddGifts);
router.get("/get-gift", isAuth, giftsControllers.getGifts);
router.get("/get-all-gift", isAuth, giftsControllers.getAllGifts);
router.delete("/delete", isAuth, giftsControllers.deleteGift);

module.exports = router;
