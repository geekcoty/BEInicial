const mongoose = require("mongoose");
const movieSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  mediaType: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Movie", movieSchema);
