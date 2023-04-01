const {updatePassword, updateProfile,getAllusers} = require('../controllers/user.controller');
const {verifyToken, isAdmin,validateUserProfile} = require('../middlewares/auth');
const { validate } = require('../models/users.models');

module.exports = (app) => {
    app.put('/mba/api/v1/updatePassword', verifyToken, updatePassword);
    //app.put('/mba/api/v1/updateProfile/:userId', [verifyToken, isAdmin],validateUserProfile, updateProfile);
    app.get('/mba/api/v1/getAllusers', [verifyToken, isAdmin],getAllusers);
}