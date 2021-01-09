
class UserController {

  constructor(UserService) {
    this.UserService = UserService
  }

 async createUser(req,res) {
   //de donde viene la info del usuario: del body
   const  { body } = req
   const name = body.name.toLowerCase()

   if (body && body.name && body.passowrd) {
      // llamar al service
      try {
      await this.UserService.createUser({...body, name});
        res.sendStatus(200)
      } catch (e){
        console.log(e)
      }
   } else {
     return res.sendStatus(400);
   }
 }

}

module.exports = UserController