class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  async getUsers(req, res) {
    const users = await this.userService.getUsers();
    return res.json(users);
  }
  async addUser(req, res) {
    const response = await this.userService.addUser(req.body);
    console.log(response);
    res.send("ok");
  }

  async updateUser(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    const data = name;

    if (id && name != "") {
      const update = await this.userService.updateUser(id);
      return console.log(update, data);
      res.status(200).send("usuario modificado con éxito");
    } else {
      res.status(400).send("no se modificó nada");
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

module.exports = UserController;
