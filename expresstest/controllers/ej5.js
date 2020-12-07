class PalindromeController {

  PalinChecker(req,res) {
     let string = `${req.params.str}`;
     let palin = string.split("").reverse().join("");
     if (palin === string) {
       res.send(string + " es un palindomo");
     } else {
       res.send(string + " no es un palindtromo");
     }
  }

}


module.exports = PalindromeController;