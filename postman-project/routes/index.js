const express = require("express");
const router = express.Router();

const postmanController = require ("../controllers/postman")
const postmanInstance = new postmanController()


router.get("/", function (req, res, next) {
 postmanInstance.getName(req,res);
});

router.post("/add", function (req, res, next) {
  postmanInstance.addName(req, res);
});

router.put("/modify/:index", function (req, res, next){
  postmanInstance.modifyName(req,res);
})
router.delete("/delete/:index", function (req, res, next) {
  postmanInstance.deleteName(req, res);
});
module.exports = router;
