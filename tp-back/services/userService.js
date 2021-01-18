const User = require ("./../models/User.js")

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
    const newUser = new User(data);
    return newUser.save();
  }
  editUser(id,data) {
  const query = User.findOneAndUpdate({_id:id}, {name: data}).exec();
  return query;
}
  deleteUser(id) {
    const query = User.deleteOne({ _id: id }.exec(), function (err) {
      if (err) console.log(err);
      console.log("succesful deletion");
    });
  }
}

module.exports = UserService