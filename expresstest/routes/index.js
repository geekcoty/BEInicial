const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.send("esto es un test"
  );
});
//ejercicio6
router.get("/ej3/:name/", function (req, res, next) {
  res.send(
    `El nombre del usuario es ${req.params.name} y tiene ${req.query.edad} años`
  );
});

//ejercicio4
router.get("/ej4/:num/", function (req, res, next) {

  res.send(`${req.params.num * 2}`);
});

  
//ejercicio5
router.get("/ej5/:str/", function (req, res, next) {
let string = `${req.params.str}`
let palin = string.split("").reverse().join("");
if (palin === string) {res.send (string + " es un palindomo")}
    else {res.send(string + " no es un palindtromo")
}

});

module.exports = router;
