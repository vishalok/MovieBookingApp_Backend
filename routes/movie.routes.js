const { getAllMovies, getMovieBasedOnId, createMovie, updateMovie, deleteMovie } = require('../controllers/movie.controller');
const { validateMovieReqBody } = require('../middlewares');


module.exports = (app) => {
    app.get('/mba/api/v1/movies', getAllMovies);   
    app.get('/mba/api/v1/movies/:id', getMovieBasedOnId); 
    app.post('/mba/api/v1/movie', validateMovieReqBody,createMovie); 
    app.put('/mba/api/v1/movies/:id', validateMovieReqBody, updateMovie);
    app.delete('/mba/api/v1/movies/:id', deleteMovie);
}
