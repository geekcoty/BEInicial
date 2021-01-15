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
  addUser() {
const newUser = new User(user)
return newUser.save()
}
}

module.exports = UserService