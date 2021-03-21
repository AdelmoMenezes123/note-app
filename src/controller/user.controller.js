const userCrlt = {};

// const User = require('../models/User');

userCrlt.renderSignUpForm = (req, res)=>{
    res.render('users/signup');
}

userCrlt.signup = (req, res)=>{
    res.send('signup');
}

userCrlt.renderSignInform = (req, res)=>{
    res.render('users/signin');
}

userCrlt.signin = (req, res)=>{
    res.send('signin');
}

userCrlt.logout = (req, res)=>{
    res.send('logout');
}

module.exports = userCrlt;