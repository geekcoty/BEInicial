const User = require ("./../models/userModel")

class UserService {
addUser(user) {
const newUser = new User(user)
return newUser.save()

}
}

module.exports = UserService