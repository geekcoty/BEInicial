class UserController {
  constructor(userService){
    this.userService = userService
  }

async getUsers(req,res) {
  const users = await this.userService.getUsers()
  return res.json(users)
}
 async addUser(req,res){
   // console.log(req.body)
  const response = await this.userService.addUser(req.body)
  console.log(response)   
  res.send("ok")
  }

 async updateUser(req,res){
    const id = req.params.id
    const {name} = req.body
    
    if (id && name !="") {
       /* this.names.splice(id, 1);
        this.names.splice(id, 0, newName)*/
        const update = await this.userService.updateUser(id)
        console.log(update)
        res.status(200).send("usuario modificado con éxito");
    }
     else 
      {
        res.status(400).send("no se modificó nada");
      }

}

deleteUser(req,res) {

}
  }


module.exports = UserController