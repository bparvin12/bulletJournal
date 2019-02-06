const JWT = require('jsonwebtoken');
const User = require('../models/user');
const { JWT_SECRET } = require('../configuration/')

signToken = user => {
        return JWT.sign({
        iss: 'QButler',
        sub: user._id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 1)
    }, JWT_SECRET);
}

module.exports = {
    signUp: async (req, res, next) => {
        // console.log('contents of req.value.body', req.value.body);
        // console.log('usersController.signUp() called');
       
        const { email, password } = req.value.body;
        // email = req.value.body.email;
        // password = req.value.body.password;

        // check for dupe user
        const foundUser = await User.findOne({ email })
        if (foundUser) { 
            return res.status(403).json({ error: 'email already registered'})
        }

        //create new user
        const newUser = new User({ email, password });
        await newUser.save();

        // generate token
        const token = signToken(newUser);


        // response w/ token
        res.status(200).json({ token });

    },
    signIn: async (req, res, next) => {
        // console.log('UsersController.signIn() called');
        const token = signToken(req.user);
        res.status(200).json({ token });
        console.log('successful login!');
    },
    secret: async (req, res, next) => {
        // console.log('UsersController.secret() called');
        console.log('secret success!');
        res.json({ secret: 'secret resource'})
    }
};