const { getAllTheatres, getTheatreBasedOnId, createTheatre,
     updateTheatre, deleteTheatre, updateMoviesInTheatre,checkMovieInTheatre } = require('../controllers/theatre.controller');
const { validateTheatreReqBody } = require('../middlewares')
const { theaterNameExists } = require('../middlewares/verifyReqBody')


module.exports = (app) => {
    app.get('/mba/api/v1/theatres', getAllTheatres);   
    app.get('/mba/api/v1/theatre/:id', validateTheatreReqBody,getTheatreBasedOnId); 
    app.post('/mba/api/v1/theatre',theaterNameExists,createTheatre); 
    app.put('/mba/api/v1/theatre/:id', updateTheatre);
    app.delete('/mba/api/v1/theatre/:id', deleteTheatre);
    app.put('/mba/api/v1/theatre/:id/movies', updateMoviesInTheatre);
    app.get('/mba/api/v1/theatres/:theatreId/movies/:movieId', checkMovieInTheatre);
    
}