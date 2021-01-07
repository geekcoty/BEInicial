class UserController {
  constructor(UserService){
    this.UserService = UserService
  }

async getUsers(req,res) {
  const users = await this.UserService.getUsers()
  return res.json(users)
}
 async addUser(req,res){
   // console.log(req.body)
  const response = await this.UserService.addUser(req.body)
  console.log(response)   
  res.send("ok")
  }

 async updateUser(req,res){
    const id = req.params.id
    const {name} = req.body
    const data = name
    
    if (id && name !="") {
       /* this.names.splice(id, 1);
        this.names.splice(id, 0, newName)*/
        const update = await this.UserService.updateUser(id)
        return console.log(update,data)
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