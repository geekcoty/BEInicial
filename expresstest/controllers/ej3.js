class UserData {
 
  getData (req,res) {
    res.send(
      `El nombre del usuario es ${req.params.name} y tiene ${req.query.edad} años`
    );
  }

  
}

module.exports = UserData;