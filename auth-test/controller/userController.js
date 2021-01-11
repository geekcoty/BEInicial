class UserController {
  constructor(UserService) {
    this.UserService = UserService;
  }

  async createUser(req, res) {
    const body = req.body;
    const name = body.name.toLowerCase();

    if (body && body.name && body.password) {
      try {
        const user = await this.UserService.createUser({ ...body, name });
        console.log(user);
        return res.sendStatus(200);
      } catch (err) {
        console.log(err);
        return res.sendStatus(500);
      }
    } else {
      return res.sendStatus(400);
    }
  }
}

module.exports = UserController;
