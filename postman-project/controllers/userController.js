const axios = require("axios");

class UserController {
  postUser(req, res) {
    const { body } = req;
    if (body.name) {
      console.log(req)
      res.status(200).send("usuario agregado con éxito");
    } else {  
    res.status(400).send("falta información");
    }
  }
}

module.exports = UserController;
