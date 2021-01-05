const User = require("../model/User")

class UserService {
  getByName(name) {
    const query = User.findOne({ name }).exce();
  return query;
  }
}

module.exports= UserService;
