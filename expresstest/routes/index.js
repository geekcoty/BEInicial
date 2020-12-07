const express = require("express");
const router = express.Router();

const UserData = require ("../controllers/ej3")
const UserDataInstance = new UserData();

const CalcController = require("../controllers/ej4")
const CalcInstance = new CalcController();

const PalindromeController = require ("../controllers/ej5");
const PalinInstance = new PalindromeController();

router.get("/", function (req, res, next) {
  res.send("esto es un test"
  );
});


//ejercicio3 con controllers
router.get("/ej3/:name/", function (req, res, next) {
 
  UserDataInstance.getData(req,res);

});

//ejercicio4 con controllers
router.get("/ej4/:num/", function (req, res, next) {

  CalcInstance.Calc(req,res)
});

  
//ejercicio5 con controllers

router.get("/ej5/:str/", function (req, res, next) {

  PalinInstance.PalinChecker(req,res)
});

module.exports = router;
