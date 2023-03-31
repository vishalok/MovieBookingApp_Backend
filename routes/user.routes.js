const {updatePassword, updateProfile} = require('../controllers/user.controller');
const {verifyToken, isAdmin} = require('../middlewares/auth')

module.exports = (app) => {
    app.put('/mba/api/v1/updatePassword', verifyToken, updatePassword);
    app.put('/mba/api/v1/updateProfile', [verifyToken, isAdmin], updateProfile);
}