const express = require('express');
const passport = require("passport");
const router = express.Router();

const UserController = require ("./../controllers/userController")
const UserService = require ("./../services/userService")
const UserInstance = new UserController(new UserService())

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Bienvenides al TP final de Back End");
});

/*PELICULAS

//Muestra un array con todas las películas. Solo se puede acceder autenticado
router.get("/movies", function (req, res, next) {
  res.send("array de movies");
});

//Muestra la información de una película especīfica. Solo se puede acceder autenticado
router.get("/movies/:id", function (req, res, next) {
  res.send("Bienvenides al TP final de Back End");
});

//Sirve para crear una película en la base de datos. Necesita estar autenticado y ser admin para que se ejecute
router.post("/movies", function (req, res, next) {
  res.send("nueva peli");
});

//Sirve para modificar una película en la base de datos. Necesita estar autenticado y ser admin para que se ejecute
router.put("/movies/edit/:id", function (req,res,next) {
  res.send("modificar peliculas")
});

//Sirve para borrar una película de la base de datos. Necesita estar autenticado y ser admin para que se ejecute.

router.delete("/movies/delete/:id", function(req,res,next) {
  res.send("borrar peliculas")
});*/

//USUARIOS

//Muestra una lista de usuarios, no tiene restricciones de acceso
router.get("/users", function (req, res,next) {
  UserInstance.getUser(req,res)
});

//Muestra la información de un usuario particular, no tiene restricciones de acceso
router.get("/users/:id", function (req, res, next) {
  UserInstance.findUser(req,res)
});

//Sirve para crear un usuario en la base de datos, no tiene restricciones de acceso
router.post("/users/", function(req, res,next){
  UserInstance.addUser(req,res)
});

//Sirve para modificar un usuario en la base de datos. Necesita estar autenticado y ser admin para que se ejecute
router.put("/users/edit/:id", passport.authenticate("local"),function (req,res,next) {
  UserInstance.editUser(req,res)

})

//Sirve para borrar un usuario de la base de datos. Necesita estar autenticado y ser admin para que se ejecute
router.delete("/users/delete/:id", passport.authenticate("local") ,function (req,res,next){
  UserInstance.deleteUser(req,res)
})

module.exports = router;
