const express = require("express");
const router = express.Router();
const userController = require("./../controllers/userController");
const userService = require("./../services/userService");
const userInstance = new userController(new userService());

/* GET home page. */
router.get("/", function (req, res, next) {
  userInstance.getUsers(req,res);
});

router.post("/add", function (req, res, next) {
  userInstance.addUser(req, res);
});

router.put("/modify/:id/", function(req,res,next) {
  userInstance.updateUser(req,res);
});

router.delete("delete/:id", function (req, res,next){
  userInstance.deleteUser(req,res);
});
module.exports = router;
