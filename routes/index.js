const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie.model.js");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

/* GET movies */
router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((allTheMoviesFromDB) => {
      res.render("movies.hbs", { movies: allTheMoviesFromDB });
    })
    .catch((error) => {
      console.log("Error while getting the movies from the DB: ", error);
      next(error);
    });
});

/* GET movie details */

router.get("/movies/:movieId", (req, res, next) => {
  const { movieId } = req.params;

  Movie.findById(movieId)
    .then((movie) => {
      console.log(movie);
      res.render("movie-details", { movie: movie });
    })
    .catch((error) => {
      console.log("Error while retrieving movie details: ", error);
      next(error);
    });
});

module.exports = router;
