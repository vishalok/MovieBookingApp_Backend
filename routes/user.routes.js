const {updatePassword, updateProfile} = require('../controllers/user.controller');
const {verifyToken, isAdmin} = require('../middlewares/auth');
const { validate } = require('../models/users.models');

module.exports = (app) => {
    app.put('/mba/api/v1/updatePassword', verifyToken, updatePassword);
    app.put('/mba/api/v1/updateProfile/:userId', [verifyToken, isAdmin], updateProfile);
}