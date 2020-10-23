const {check} = require('express-validator');

exports.userSignupValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is required'),
    check('email')
        .isEmail()
        .withMessage('Valid email is required'),
    check('password')
        .isLength({min: 6})
        .withMessage('Password needs to be at least six caracters in length')
];