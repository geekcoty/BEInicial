//nombre del controller y del service en caps porque va a ser instanciado
class UserController {
  //inicialización del controller
  constructor(userService, drinkService){
    this.userService = userService;
    //llamamos a la segunda collection como variable de clase
    this.drinkService = drinkService;
  }
  //llamar a un metodo
 async getUserByName(req,res) {
      const {name} = req.params
      console.log(req.params);

    // llamar a un metodo de servicio y pasarle el parametro
      const user = await this.userService.getUserByName(name)
      const drink = await this.drinkService.getDrinkByName(user.favDrink)
      console.log(user, "controller")
      console.log(drink, "controller");

    // requerir informacion de otra collection a traves del modelado de data
    const data = {
      nane: user.name,
      favDrink: user.favDrink,
      main: drink.mainIngredient,
    }
      res.json(data)
  }
}

module.exports = UserController