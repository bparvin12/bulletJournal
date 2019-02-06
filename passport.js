const passport = require('passport');
const jwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require ('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const { JWT_SECRET } = require ('./configuration');
const User = require ('./models/user');

// JSON Web Token Strategy
passport.use(new jwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: JWT_SECRET
}, async (payload, done) => {
    try{
// find user in token
const user = await User.findById(payload.sub);
// if user does not exist
if (!user) {
    return done(null, false);
}
// return the user
done(null, user);

    } catch(error) {
        done(error, false);
    }
}));

// Local Strategy
passport.use(new LocalStrategy({
    usernameField: 'email'

}, async(email, password, done) => {
    try {
        // find user by email match
const user = await User.findOne({ email });

// error handling (email match)
if (!user) {
    return done(null, false);
}

// password verify
const isMatch = await user.isValidPassword(password);

// error handling (password verify)
if (!isMatch) {
    return done(null, false);
}
// return user
return done(null, user);

    } catch(error) {
        done(error, false);
    }
}));