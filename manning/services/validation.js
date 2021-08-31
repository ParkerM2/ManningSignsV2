const check = require('express-validator');

validateLogin = [
    check("email", "Invalid email").isEmail().trim(),

    check("user_password", "Invalid password")
    .not().isEmpty()
];

export default validateLogin;
