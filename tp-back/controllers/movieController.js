class MovieController {
  constructor(movieService) {
    this.movieService = movieService;
    this.movies = [];
  }

  async getMovies(req, res) {
    const movies = await this.movieService.getMovies();
    res.send(movies);
  }

  async findMovie(req, res) {
    const {id} = req.params
    if (id) {
      try {const movie = await this.movieService.findMovie(); res.sendStatus(200).json(movie)} catch (error){console.log(error)}
    } else {res.sendStatus(404).send("id not found")}
  }

  async addMovie(req, res) {
    const {body} = req
    if (body) {
      try {
        const newMovie = await this.movieService.addMovie();
        this.movies.push(newMovie);
        res.sendStatus(200).send("successfully added movie")
      } catch (error) {console.log(error)}
    } else {res.sendStatus(400).send("movie not added")}
  }

  async editMovie(req, res) {
    const id = req.params.id;
    const newInfo = req.body;

    if (id && newInfo != "") {
      try {
        const update = await this.movieService.editUser(id, newInfo);
        return res.status(200).send("succesfully modified user");
      } catch (e) {
        console.log(e);
        res.status(500).send("error when modified");
      }
    } else {
      res.status(400).send("nothing was modified");
    }
  }

  async deleteMovie(req,res){
    const {id} = req.params
    if (id) {
    try {const movie = await this.movieService.deleteMovie(id);
    res.sendStatus(200).send("movie deleted")} catch (error){console.log(error)}
  } else {res.sendStatus(404).send("movie not found")}
}
}
module.exports = MovieController;
