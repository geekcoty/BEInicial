const User = require("./../models/User.js");
const bcrypt = require("bcrypt");

class UserService {
  getUser() {
    const query = User.find().exec();
    return query;
  }

  findUser(id) {
    const query = User.findOne({ _id: id }).exec();
    return query;
  }

  addUser(data) {
    bcrypt.hash(data.password, 10).then((hash) => {
      data.password = hash;
      const newUser = new User(data);
      return newUser.save();
    });
  }

  editUser(id, newdata) {
    const query = User.findOneAndUpdate({ _id: id }, newdata).exec();
    return query;
  }

  deleteUser(id) {
    const query = User.deleteOne({ _id: id }, function (err) {
      if (err) console.log(err);
      console.log("succesfully deleted");
    });
  }
  //passport middleware
  getByName(name) {
    const query = User.findOne({ name }).exec();
    return query;
  }
}
module.exports = UserService;
