const express = require('express');

//requerimos multer
const multer = require("multer");

//creamos un storage, donde le pasamps un obj con distintas props
const storage = multer.diskStorage({
  destination: function (req, file,cb){
    cb(null, "./uploads");
  },
  filename: function(req,file,cb) {
    cb(null,file.fieldname + "-" + Date.now() + ".png");
  },
});

//crear un const upload y le pasamos a multer un obj con las props de storage, para usarlo como middleware
const upload = multer({ storage: storage });

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Hola!")
});

//multer como middleware
//avatar es un fieldname que elegimos nosotros
router.post("/upload", upload.single("avatar"), function (req, res) {
  console.log (req.body, req.file);
  return res.json({
    error: false,
    file: req.file,
    body: req.body,
  });
})
module.exports = router;
