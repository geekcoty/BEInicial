const express = require('express');
const router = express.Router();
const userController =require ("./../controllers/index.js")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Hola");
});

router.post ("/add", function (req,res,next){

})
module.exports = router;
