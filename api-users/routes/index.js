const express = require("express");
const router = express.Router();
const userController = require("./../controllers/userController");
const userService = require("./../services/userService");
const userInstance = new userController(new userService());

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Hola");
});

router.post("/add", function (req, res, next) {
  userInstance.addUser(req, res);
});
module.exports = router;
