const express = require("express");
const router = express.Router();
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
router.get("/verify", function(req, res, next) {
  return res.json(req.user);
});

module.exports = router;
