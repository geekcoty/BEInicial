const express = require("express");
const router = express.Router();
const passport = require("passport");
/* GET home page. */
router.get("/", function (req, res, next){
  res.send("Hola");
});

router.post(
  "/login",
  passport.authenticate("local"),
  function(req, res, next){
    return res.json("hola que hace");
  }
);

router.get("/verify", function(req, res, next) {
  return res.json({
    ok: true
  });
});

module.exports = router;
