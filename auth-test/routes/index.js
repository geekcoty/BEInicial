const express = require("express");
const router = express.Router();

const UserController = require ("../controller/userController")
const UserService = require ("../service/userService")

const UserInstance =  new UserController(new UserService)

//requerimos passport
const passport = require("passport");

/* GET home page. */
router.get("/", function (req, res, next){
  res.send("Hola");
});

//ruta al login
router.post("/api/login",passport.authenticate("local"), (req, res) => {
  return res.json({
    ok: true
  });
});

//ruta a la validación
router.get("/api/verify", function(req, res, next) {
  return res.json(req.user);
});

//
router.post("/create", (req,res,next) =>{
  UserInstance.createUser(req,res)
} )

module.exports = router;
