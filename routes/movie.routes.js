const { getAllMovies } = require('../controllers/movie.controller');
const {getMovieBasedOnId}= require('../controllers/movie.controller');
const {getMovieBasedOnName}= require('../controllers/movie.controller');

module.exports = (app) => {
    app.get('/mba/api/v1/movies',getAllMovies)
    app.get('/mba/api/v1/movies/:id',getMovieBasedOnId)
    app.get('/mba/api/v1/movies/:name',getMovieBasedOnName)
}