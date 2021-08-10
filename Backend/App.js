const express = require("express");
const app = express();
const port = 8000;

var cors = require('cors');



const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);


const bodyParser = require("body-parser");

const userRouter = require("./routes/users");
const giftsRouter = require("./routes/gifts");

const db = require("./util/database");
const passport = require("passport");

const User = require("./models/user");
const gifts = require("./models/gifts");

const initPassport = require("./util/passport-config");
initPassport(passport);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

app.use(
  session({
    secret: "MySecret",
    store: new SequelizeStore({
      db: db,
    }),
    resave: false, 
    proxy: true, 
  })
);

app.use((req, res, next) => {
  
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});





app.use(giftsRouter);
app.use(userRouter);

gifts.belongsTo(User);
User.hasMany(gifts);

db.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Gifty app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));

  app.use(cors());
