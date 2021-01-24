const express = require("express");
const passport = require("passport");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + ".jpg");
  },
});

const upload = multer({ storage: storage });

const checkAdmin = require("../utils/checkAdmin");
const checkAuth = require("./../utils/checkAuth");

const router = express.Router();

const UserController = require("./../controllers/userController");
const UserService = require("./../services/userService");
const UserInstance = new UserController(new UserService());

const MovieController = require("./../controllers/movieController");
const MovieService = require("./../services/movieService");

const MovieInstance = new MovieController(new MovieService());

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Bienvenides al TP final de Back End");
});

//PELICULAS

//Passport login
router.post("/movies/login", passport.authenticate("local"), (req, res) => {
  return res.json({
    ok: true,
  });
});

//Muestra un array con todas las películas. Solo se puede acceder autenticado
router.get("/movies", checkAuth, function (req, res, next) {
  MovieInstance.getMovies(req, res);
});

//Muestra la información de una película especīfica. Solo se puede acceder autenticado
router.get("/movies/:id", checkAuth, function (req, res, next) {
  MovieInstance.findMovie(req, res);
});

//Sirve para crear una película en la base de datos. Necesita estar autenticado y ser admin para que se ejecute
router.post(
  "/movies",
  checkAdmin, 
  function (req, res, next) {
    MovieInstance.addMovie(req, res);
  }
);

//Sirve para modificar una película en la base de datos. Necesita estar autenticado y ser admin para que se ejecute
router.put("/movies/edit/:id", checkAdmin, function (req, res, next) {
  MovieInstance.editMovie(req, res);
});

//Sirve para borrar una película de la base de datos. Necesita estar autenticado y ser admin para que se ejecute.

router.delete("/movies/delete/:id", checkAdmin, function (req, res, next) {
  MovieInstance.deleteMovie(req, res);
});

//USUARIOS

//Passport login
router.post("/users/login", passport.authenticate("local"), (req, res) => {
  return res.json({
    ok: true,
  });
});

//Muestra una lista de usuarios, no tiene restricciones de acceso
router.get("/users", function (req, res, next) {
  UserInstance.getUser(req, res);
});

//Muestra la información de un usuario particular, no tiene restricciones de acceso
router.get("/users/:id", function (req, res, next) {
  UserInstance.findUser(req, res);
});

//Sirve para crear un usuario en la base de datos, no tiene restricciones de acceso
router.post("/users/", function (req, res, next) {
  UserInstance.addUser(req, res);
});

//Sirve para modificar un usuario en la base de datos. Necesita estar autenticado y ser admin para que se ejecute
router.put("/users/edit/:id", checkAdmin, function (req, res, next) {
  UserInstance.editUser(req, res);
});

//Sirve para borrar un usuario de la base de datos. Necesita estar autenticado y ser admin para que se ejecute
router.delete("/users/delete/:id", checkAdmin, function (req, res, next) {
  UserInstance.deleteUser(req, res);
});
module.exports = router;
