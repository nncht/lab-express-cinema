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

module.exports = router;
