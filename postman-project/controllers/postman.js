
class PostmanController{
  constructor (){
    this.names = []
  }

  getName(req,res) {
    res.send (
   this.names
    )
  }

  addName(req, res) {
    const {body} = req
      console.log(req.headers)
    if (body.name) {
      this.names.push(body.name);
      res.status(200).send("usuario agregado con éxito");
    } else {
      res.status(400).send("falta información");
    }
  }
  modifyName(req,res) {
    const {index} = req.params
    const newName = req.body.name
    
    
    if (index > -1 && newName !="") {
        this.names.splice(index, 1);
        this.names.splice(index, 0, newName),
        res.status(200).send("usuario modificado con éxito");
    }
     else 
      {
        res.status(400).send("no se modificó nada");
      }

}
  deleteName(req,res) {
    const {index} = req.params 
    if (index > 0) {
      this.names.splice(index,1,)
      res.status(200).send("usuario borrado con éxito");
    } 
    else {res.status(400).send("usuario inexistente")}
  
}
}



module.exports = PostmanController;