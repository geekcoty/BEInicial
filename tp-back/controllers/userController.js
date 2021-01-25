class UserController {
  constructor(userService) {
  this.userService = userService
}

async getUser(req,res) {
  const user = await this.userService.getUser();
  return res.json(user)
}

async findUser(req,res) {
  const {id} = req.params
  if ( id ) {
    try {
       const foundUser = await this.userService.findUser(id); res.json(foundUser);
    } catch (e) {res.status(500).send("invalid id")}
    
    // ver como hacer que salga este error
  } else {res.status(400).send("please, enter a valid id")}
}

  async addUser(req, res) {
    const {body} = req
    const name = body.name.toLowerCase()
    if (body && body.name && body.password) {
      try {
         await this.userService.addUser({...body,name});
        res.send("user added");
      } catch (e) {
        console.log(e);
        res.status(500).send("error when added");
      }
    } else {
      res.status(400).send("required information missing");
    }
  }

  async editUser(req,res)  {
    const  id  = req.params.id;
    const  newUserInfo = req.body;
  
    if (id && newUserInfo != "") {
      try {
        const updatedUser = await this.userService.editUser(id,newUserInfo);
        return res.status(200).send("succesfully modified user");
      } catch (e) {
        console.log(e);
        res.status(500).send("error when modified");
      }
    } else {
      res.status(400).send("nothing was modified");
    }
  }
  
   async deleteUser(req, res) {
    const { id } = req.params;
    if (id) {
      await this.userService.deleteUser(id);
      res.status(200).send("deleted");
    } else {
      res.status(400).send("not deleted");
    }
  }

}

module.exports = UserController