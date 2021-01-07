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

updateUser(id,data) {
  const query = User.findOneAndUpdate({_id:id}, {name: data}).exec();
  return query;
}


deleteUser(id) {
  const query = User.deleteOne(id, function (err) {
    if (err) console.log(err);
    console.log("Successful deletion");
  });
  return query;
}

}

module.exports = UserService