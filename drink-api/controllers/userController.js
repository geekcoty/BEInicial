class UserController {
  //inicialización del controller
  constructor(userService){
    this.userService = userService;
  }
  //llamar a un metodo
 async getUserByName(req,res) {
      const {name} = req.params
      console.log(req.params);

    // llamar a un metodo de servicio y pasarle el parametro
      const user = await this.userService.getUserByName(name)
      console.log(user, "controller")
    
      res.send(ok)
  }
}

module.exports = UserController