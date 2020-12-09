const axios = require("axios");

class axiosController {

  async userGithub(req,res){

    const userData = await axios.get(`https://api.github.com/users/${req.params.login}`);
    res.json (userData.data);
  }

  async detailsUser(req,res) {
    const userDetails =  await axios.get(`https://api.github.com/users/${req.params.login}`);
    const modeledUserData  = {
      name : userDetails.data.name,
      bio: userDetails.data.bio,
      company: userDetails.data.company
    }
    res.json(modeledUserData);
  }

  async moreDetails (req,res) {
        const userDetails = await axios.get(
          `https://api.github.com/users/${req.params.login}`
        );
        const modeledUserData = {
          name: userDetails.data.name,
          bio: userDetails.data.bio,
          company: userDetails.data.company,
        };

        const newModeledUserData = {... modeledUserData, age: 36, iceCreamFlavour: "mint chocolate"} 
        res.json (newModeledUserData);

  }

}

module.exports = axiosController;