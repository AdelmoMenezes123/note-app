const {Router} = require('express');
const router = Router();

const {renderSignUpForm, renderSignInform, signin,signup, logout} =require('../controller/user.controller')

router.get('/users/signup',renderSignUpForm)
router.post('/users/signup',signup)

router.get('/users/signin',renderSignInform)
router.post('/users/signin',signin)

router.get('/users/logout', logout)


module.exports = router;