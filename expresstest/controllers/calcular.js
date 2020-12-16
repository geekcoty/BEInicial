class Calcular {
  isPrime(req,res) {
    const primeList = []
    for (let i = 1; i < 150 ; i++) {
      if (i % 2 === 0) {
        return  primeList.push()
      } else { return false}
      console.log (primeList)
    }
      res.json(primeList);
  }


}

module.exports = Calcular;