const axios = require ("axios");

class GithubUser {
 async  getUser(req,res) {

  const data = await axios.get ("https://api.github.com/users/doomling");


  res.json (data.data)
  }
}


module.exports = GithubUser;
