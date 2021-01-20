function checkAdmin(req, res, next) {
  if (req.user) {
    if (req.user.isAdmin) {
      console.log("es admin");
      next()
    } else {
      console.log("no es admin");
      res.sendStatus(403);
    }
  } else {
    console.log("no hay user logueado");
    res.sendStatus(401)
  }
}

module.exports = checkAdmin;
