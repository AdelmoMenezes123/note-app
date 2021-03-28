const passport = require('passport');
const LocalStoragy = require('passport-local');

const User = require('../models/User')

passport.use(new LocalStoragy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    //Match email's user
    const user = await User.findOne({ email })
    if (!user) {
        return done(null, false, { message: 'Not user Found' })
    } else {
        //Match password's user
        const match = await user.matchPassword(password)
        if (match) {
            return done(null, user)
        } else {
            return done(null, false, { message: 'Incorrect Password' })
        }
    }
}))

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user)
    })
})