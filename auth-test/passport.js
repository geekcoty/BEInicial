const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const UserService = require ("./service/UserService")

passport.use(
  new LocalStrategy(
    {
      usernameField: "name",
      passwordField: "password",
    },
    (username, password, cb) => {
      console.log(username, password);
    }
  )
);
