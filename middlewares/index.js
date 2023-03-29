const { validateMovieReqBody, validateTheatreReqBody} = require('./verifyReqBody');
const { verifyToken} = require('./auth');
module.exports = {
    validateMovieReqBody,
    validateTheatreReqBody,
    verifyToken
}