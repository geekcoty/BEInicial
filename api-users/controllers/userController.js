class UserController {
  constructor(UserService) {
    this.UserService = UserService;
  }

  async getUsers(req, res) {
    const users = await this.UserService.getUsers();
    return res.json(users);
  }
  async addUser(req, res) {
    const response = await this.UserService.addUser(req.body);
    console.log(response);
    res.send("ok");
  }

  async updateUser(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    const data = name;

    if (id && name != "") {
      const update = await this.UserService.updateUser(id);
      return console.log(update, data);
      res.status(200).send("usuario modificado con éxito");
    } else {
      res.status(400).send("no se modificó nada");
    }
  }

  async deleteUser(req, res) {
    const { id } = req.params;

    if (id) {
      await this.UserService.deleteUser(id);
      res.status(200).send("deleted");
    } else {
      res.status(400).send("not deleted");
    }
  }
}

module.exports = UserController;
