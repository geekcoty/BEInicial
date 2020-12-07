class CalcController {
  Calc(req,res){
    res.send(`${req.params.num * 2}`);
  }
}

module.exports =CalcController;