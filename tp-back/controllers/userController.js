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
    const data = req.body;
    if (data) {
      try {
        const response = await this.userService.addUser(data);
        console.log(response);
        res.send("user added");
      } catch (e) {
        console.log(e);
        res.status(500).send("error when added");
      }
    } else {
      res.status(400).send("required information missing");
    }

}
}

module.exports = UserController