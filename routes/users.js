const express = require('express');
const router = require('express-promise-router')();
// const router = express.Router;
const passport = require('passport');
const passportConf = require('../passport');

const { validateBody, schemas } = require('../helpers/routeHelpers');
const UsersController = require('../controllers/users');

router.route('/signup')
    .post(validateBody(schemas.authSchema), UsersController.signUp);

router.route('/signin')
    .post(validateBody(schemas.authSchema), passport.authenticate('local', { session: false }), UsersController.signIn);

router.route('/secret')
    .get(passport.authenticate('jwt', { session: false }), UsersController.secret);

module.exports = router;

