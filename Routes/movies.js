const express = require('express');
const router = express.Router();

const movieController = require('../Controllers/MovieController');

router.get('/', movieController.GetAllMovies);

router.post('/create', movieController.CreateMovies);

router.get('/id/:id', movieController.GetMoviesById);

router.get('/:movieId', movieController.GetMoviesByMovieId);

module.exports = router;