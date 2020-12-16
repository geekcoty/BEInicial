const express = require("express");
const router = express.Router();


const UserData = require ("../controllers/ej3")
const UserDataInstance = new UserData();

const CalcController = require("../controllers/ej4")
const CalcInstance = new CalcController();

const PalindromeController = require ("../controllers/ej5");
const PalinInstance = new PalindromeController();

const EjercicioUnoController = require ("../controllers/ejaxios");
const EjercicioUnoInstance = new EjercicioUnoController();

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

// Axios

const GithubUser =require ("../controllers/axios");
const GithubInstance = new GithubUser();

router.get ("/axios", function (req,res, next) {
  GithubInstance.getUser(req,res)
});

// Desafio Axios
const axiosController = require("../controllers/ejaxios");
const axios = require("axios");
const calcularController = require ("../controllers/calcular");
const Calcular = require("../controllers/calcular");

// Ejercicio cero
//const calcularInstance = new Calcular();
//router.get ("/calcular", function (req, res, next) {
//calcularInstance.isPrime(req,res)
//});

// Ejercicio uno


const AxiosUnoInstance = new axiosController();

router.get ("/user/:login" , function (req,res,next) {
 AxiosUnoInstance.userGithub(req,res)
  
  });

  // Ejercicio dos
const AxiosDosInstance = new axiosController();

  router.get("/user/:login/details", function (req, res, next) {
    AxiosDosInstance.detailsUser(req, res);
  });

  // Ejercicio tres
const AxiosTresInstance = new axiosController();

    router.get("/user/:login/moredetails", function (req, res, next) {
      AxiosTresInstance.moreDetails(req, res);
    });
module.exports = router;
