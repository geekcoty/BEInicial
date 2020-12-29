const express = require('express');
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file,cb){
    cb(null, "./uploads");
  },
  filename: function(req,file,cb) {
    cb(null,file.fieldname + "-" + Date.now() + ".png");
  },
});

const upload = multer({ storage: storage });
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Hola!")
});

router.post("/upload", upload.single("avatar"), function (req, res) {
  console.log (req.boy, req.file);
  return res.json({
    error: false,
    file: req.file,
    body: req.body,
  });
})
module.exports = router;
