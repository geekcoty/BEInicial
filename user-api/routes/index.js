const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Hola");
});

router.post ("/add", function (req,res,next){

})
module.exports = router;
