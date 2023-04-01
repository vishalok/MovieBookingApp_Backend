const { validateMovieReqBody, validateTheatreReqBody} = require('./verifyReqBody');
//const { verifyToken} = require('./auth');
const { verifyToken, isAdmin} = require('./auth');
const {validateUserReqBody, validateUserProfile} = require('./validateUserReqBody')
const {validateTheatreRequestBody} = require('./verifyTheatreReqBody')

module.exports = {
    validateMovieReqBody,
    validateTheatreReqBody,
    verifyToken,
    isAdmin,
    validateUserReqBody,
    validateUserProfile,
    validateTheatreRequestBody
}

