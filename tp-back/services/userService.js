const User = require ("./../models/User.js")

class UserService {
  getUser(){
    const query = User.find().exec();
    return query
  }
  findUser(id){
    const query = User.findOne({_id:id}).exec();
    return query
  }
  addUser(data) {
    const newUser = new User(data)
    return newUser.save()
  }
  editUser(id){
    const query = User.findOneAndUpdate({_id: id}).exec();
    return query
  }
}

module.exports = UserService