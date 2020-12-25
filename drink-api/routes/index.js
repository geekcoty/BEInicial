const express = require('express');
const router = express.Router();
const UserController= require("./../controllers/userController.js")
const UserService = require("./../services/userService.js")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Bye");
});

//hacer una query con metodo GET
//es una ruta dinamica porque vamos a elegir que parametro pasarle
router.get("/user/:name", function(req,res,next){
//llamar a la instancia

})
module.exports = router;
