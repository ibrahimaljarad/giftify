const User = require("../models/user");

exports.postAddGifts = (req, res, next) => {
  const title = req.body.title;
  const imgUrl = req.body.imgUrl;
  const description = req.body.description;
  User.findOne({ where: { id: req.userId } })
    .then((user) => {
      console.log("hey");
      user.createGifts({ title, imgUrl, description });
    })
    .then((results) => res.send("Hobby is created succesfully"))
    .catch((err) => console.log(err));
};
exports.getGifts = (req, res, next) => {
  User.findOne({ where: { id: req.userId } })
    .then((user) => user.getGifts())
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
};
