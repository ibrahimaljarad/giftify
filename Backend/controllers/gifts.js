const User = require("../models/user");
const Gifts = require("../models/gifts");

exports.postAddGifts = (req, res, next) => {
  console.log(req.body);
  const title = req.body.title;
  const imgUrl = req.body.imgUrl;
  const description = req.body.description;
  const location = req.body.location;

    User.findOne({ where: { id: req.userId } })
    .then((user) => {
        console.log("hey");
        user.createGift({ title, description, imgUrl,  location });
    })
    .then((results) => res.send("Gift is created succesfully"))
    .catch((err) => console.log(err));
};

exports.getGifts = (req, res, next) => {
  User.findOne({ where: { id: req.userId } })
  .then((user) => user.getGifts())
  .then((result) => res.send(result))
  .catch((err) => console.log(err));
};

exports.getAllGifts = async (req, res, next) => {
  const gifts = await Gifts.findAll();
  console.log(req.gift);
  res.send(gifts);
};

exports.deleteGift = (req, res, next) => {
  console.log(req.body.id);
  Gifts.destroy({ where: {id: req.body.id } })
  .then((result) => res.send("deleted"))
  .catch((err) => console.log(err));
};
