const {signUp} = require('../controllers/auth.controller');


module.exports = (app) => {
    app.post('/mba/api/v1/signup', signUp);
}