const { getAllTheatres, getTheatreBasedOnId, createTheatre, updateTheatre, deleteTheatre, updateMoviesInTheatre } = require('../controllers/theatre.controller');


module.exports = (app) => {
    app.get('/mba/api/v1/theatres', getAllTheatres);   
    app.get('/mba/api/v1/theatre/:id', getTheatreBasedOnId); 
    app.post('/mba/api/v1/theatre',createTheatre); 
    app.put('/mba/api/v1/theatre/:id', updateTheatre);
    app.delete('/mba/api/v1/theatre/:id', deleteTheatre);
    app.put('/mba/api/v1/theatre/:id/movies', updateMoviesInTheatre);
}