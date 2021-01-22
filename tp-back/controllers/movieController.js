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
    const movie = await this.movieService.findMovie();
    res.json(movie);
  }

  // FALTA EL MIDDLEWARE DE MULTER ACA
  async addMovie(req, res) {
    const newMovie = await this.movieService.addMovie();
    res.json(newMovie);
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
    const movie = await this.movieService.deleteMovie(id)
    res.send("deleted")
  }
}

module.exports = MovieController;
