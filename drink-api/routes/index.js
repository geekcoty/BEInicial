const express = require('express');
const router = express.Router();

const UserController= require("./../controllers/userController.js")
const UserService = require("./../services/userService.js")
const DrinkService = require ("./../services/drinkService.js")

const UserInstance =new UserController(new UserService(), new DrinkService())

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Bye");
});

//hacer una query con metodo GET
//es una ruta dinamica porque vamos a elegir que parametro pasarle
router.get("/user/:name", function(req,res,next){
//llamar a la instancia
UserInstance.getUserByName(req,res)

})
module.exports = router;
