function checkAdmin(req, res, next) {
  if (req.user) {
    if (req.user.isAdmin) {
      console.log("is admin");
      next()
    } else { es
      console.log("not admin");
      res.sendStatus(403);
    }
  } else {
    console.log("no logged user");
    res.sendStatus(401)
  }
}

module.exports = checkAdmin;
