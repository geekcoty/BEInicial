const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const UserService = require ("./service/UserService")
const UserInstance = new UserService ()

passport.use(new LocalStrategy({
usernameField: "name",
passwordField: "password"
}, 
async   (username, password, cb) => {
  try {
  const userData = await UserInstance.getByName(username);
  if(!userData) {
  console.log ("entro al primero")
  return cb(null,false)
  }
  console.log (userData.password,password);
  if (userData.password != password) {
      console.log ("entro al segundo")
      return cb(null,false)
  }
  console.log(userData);
  console.log("Todo esta bien");
  return cb(null, userData)
  } catch (err) {
    console.log(err)
  }
}
)
);

passport.serializeUser((user, cb) => {
  console.log("serialize",user)
  cb(null, user.name);
});

passport.deserializeUser(async (name, cb) => {
  const data = await UserInstance.getByName(name);

  cb(null, data);
});
