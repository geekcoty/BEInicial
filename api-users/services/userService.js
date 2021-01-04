const User = require ("./../models/userModel")

class UserService {
getUsers () {
  const query = User.find();
  return query;

}

addUser(user) {
const newUser = new User(user)
return newUser.save()

}

updateUser(user) {
  const updatedUser = User.findById({_id:id}, data).exec();
  return updatedUser
}


deleteUser(user) {
  const deletedUser = User.deleteOne(id, function (err) {
    if (err) console.log(err);
    console.log("Successful deletion");
  });
}
}

module.exports = UserService