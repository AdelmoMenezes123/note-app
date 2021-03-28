const userCrlt = {};

const User = require('../models/User');
const passport = require('passport');

userCrlt.renderSignUpForm = (req, res) => {
    res.render('users/signup');
}

userCrlt.signup = async (req, res) => {
    const errors = [];
    const { name, password, confirm_password, email } = req.body;

    if (password != confirm_password) {
        errors.push({ text: 'Password do not match' })
    }

    if (password.length < 4) {
        errors.push({ text: "password must be at least 4 characters. " })
    }

    if (errors.length > 0) {
        res.render('users/signup', {
            errors,
            name,
            email,
            password,
            confirm_password
        })
    } else {
        const emailUser = await User.findOne({ email: email })
        if (emailUser) {
            req.flash('error_msg', 'The email is already is user.')
            res.redirect('/users/signup');
        } else {
            const newUser = new User({ name, password, email })
            newUser.password = await newUser.encrypPassword(password)
            await newUser.save();
            req.flash('success_msg', 'You are registered')
            res.redirect('/users/signin')
        }
    }
}

userCrlt.renderSignInform = (req, res) => {
    res.render('users/signin');
}

userCrlt.signin = passport.authenticate('local',{
    failureRedirect:'/users/signin',
    successRedirect:'/notes/all-notes',
    failureFlash: true
})


userCrlt.logout = (req, res) => {
    res.send('logout');
}

module.exports = userCrlt;