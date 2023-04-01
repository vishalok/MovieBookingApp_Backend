const { getAllMovies, getMovieBasedOnId, createMovie, updateMovie, deleteMovie } = require('../controllers/movie.controller');
const { validateMovieReqBody, verifyToken,isAdmin} = require('../middlewares');


module.exports = (app) => {
    app.get('/mba/api/v1/movies', verifyToken,getAllMovies);   
    app.get('/mba/api/v1/movies/:id',verifyToken, getMovieBasedOnId); 
    app.post('/mba/api/v1/movie', [verifyToken, isAdmin,validateMovieReqBody],createMovie); 
    app.put('/mba/api/v1/movies/:id', [verifyToken, isAdmin,validateMovieReqBody], updateMovie);
    app.delete('/mba/api/v1/movies/:id',[verifyToken, isAdmin], deleteMovie);
}
