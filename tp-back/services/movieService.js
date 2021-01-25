const Movie = require("./../models/Movie");

class MovieService {
  getMovies() {
    const query = Movie.find().exec();
    return query;
  }

  findMovie() {
    const query = Movie.findOne({ _id: id }).exec();
    return query;
  }

  addMovie(data) {
    const newMovie = new Movie(data)
    return newMovie.save();
  }
  

  editMovie(id, data) {
    const query = Movie.findOneAndUpdate({ id }, data).exec();
    return query;
  }

  deleteMovie(id) {
    const query = Movie.deleteOne({ _id: id}, function (err) {
      if (err) console.log(err);
      console.log("succesful deletion");
    });
  }
}

module.exports = MovieService;
