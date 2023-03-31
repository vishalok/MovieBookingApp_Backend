const { validateMovieReqBody, validateTheatreReqBody} = require('./verifyReqBody');
const { verifyToken} = require('./auth');
const { verifyToken, isAdmin} = require('./auth');
module.exports = {
    validateMovieReqBody,
    validateTheatreReqBody,
    verifyToken,
    isAdmin
}

