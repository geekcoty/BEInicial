const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Bienvenides al TP final de Back End");
});

//PELICULAS

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
});

//Muestra una lista de usuarios, no tiene restricciones de acceso
router.get("/users", function (req, res,next) {
  res.send("muestra lista de usuarios")
});

//Muestra la información de un usuario particular, no tiene restricciones de acceso
router.get("/users/:id", function (req, res, next) {
  res.send("muestra un usuario particular")
});

//Sirve para crear un usuario en la base de datos, no tiene restricciones de acceso
router.post("/users/", function(req, res,next){
  res.send("crea un usuario en la db")
});

//Sirve para modificar un usuario en la base de datos. Necesita estar autenticado y ser admin para que se ejecute
router.put("/users/edit/:id", function (req,res,next) {
  res.send("modificación de usuario")
})

//Sirve para borrar un usuario de la base de datos. Necesita estar autenticado y ser admin para que se ejecute
router.delete("/users/delete/:id", function (req,res,next){
  res.send ("borrar usuarios")
})

module.exports = router;