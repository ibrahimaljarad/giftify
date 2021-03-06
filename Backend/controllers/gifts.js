const User = require("../models/user");
const Gifts = require("../models/gifts");

exports.postAddGifts = (req, res, next) => {
  console.log(req.body);
  const title = req.body.title;
  const imgUrl = req.body.imgUrl;
  const description = req.body.description;
  const location = req.body.location;
  const isDonated = false;

    User.findOne({ where: { id: req.userId } })
    .then((user) => {
        console.log("hey");
        user.createGift({ title, description, imgUrl,  location, isDonated });
    })
    .then((results) => res.send("Gift is created succesfully"))
    .catch((err) => console.log(err));
};

exports.getGift = (req, res, next) => {
  User.findOne({ where: { id: req.userId } })
  .then((user) => user.getGifts())
  .then((result) => res.send(result))
  .catch((err) => console.log(err));
};

// exports.getDonorInfo = (req, res, next) => {
//   console.log(req.body)
//   User.findOne({ where: { id: req.gift.UserId } })
//   .then((result) => res.send(result))
//   .catch((err) => console.log(err));
// };

// exports.getDonorInfo = async (req, res, next) => {
//   console.log(req.userId)
//   User.findOne({ where: { id: req.gift.UserId } })
//   .then((result) => res.send(result))
//   .catch((err) => console.log(err));
// };

// exports.getDonorInfo = async (req, res, next) => {
//   const gifts = await user.findOne({ where: { id: req.gift.UserId } });
//   console.log(req.gift);
//   res.send(gifts);
// };
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
