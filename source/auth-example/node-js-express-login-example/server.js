const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");

const app = express();

const db = require("./app/models");
const Role = db.role;

db.sequelize.sync({force: true})
.then(() => {
  console.log("Drop and resync DB");
  initial();
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });

  Role.create({
    id: 2,
    name: "moderator"
  });

  Role.create({
    id: 3,
    name: "admin"
  })
}

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(cookieSession({
  name: "bezkoder-session",
  keys: ["COOKIE_SECRET"],
  httpOnly: true
})
);

app.get("/", (req, res) => {
  res.json({message: "Welcome to bezkoder application."});
});

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
