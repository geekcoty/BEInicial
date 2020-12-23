class UserController {
  constructor(userService){
    this.userService = userService
  }

 async addUser(req,res){
   // console.log(req.body)
  const response = await this.userService.addUser(req.body)
  console.log(response)   
  res.send("ok")
  }
}


module.exports = UserController