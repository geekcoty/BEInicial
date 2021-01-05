const express = require("express");
const router = express.Router();
const passport = require("passport");
/* GET home page. */
router.get("/", function (req, res, next){
  res.send("Hola");
});

router.post("/api/login", passport.authenticate("local"), (req, res) => {
  return res.json({
    ok: true,
  });
});

router.get("/verify", function(req, res, next) {
  return res.json({
    ok: true
  });
});

module.exports = router;
