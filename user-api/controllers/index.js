class userController {
  addUser (req,res){
    console.log(req.body)
    res.send ("ok")
  }
}

module.exports = userController