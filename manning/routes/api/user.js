//dependencies
const express = require('express')
const passport = require("passport");
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
var DBConnection = require('../../config/DBConnection');
var loginService = require('../../services/login-service');
var userService = require('../../services/user-service');


const router = express.Router();


// login route
router.post("/api/login", [
    check("email").notEmpty(),
    check("user_password").notEmpty()
], async (req, res) => {
    console.log("REQ BODY", req.body);
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.mapped() })
    }

    try {
        let userId = await loginService.handleLogin(req.body.email, req.body.user_password)
        let token = jwt.sign({ userId }, "secret")
        return res.json({ token })
    } catch (err) {
        return res.status(400).json({ errors: err });
    }
});
// router.get("/api/images", passport.authenticate('jwt', { session: false }), function (req,res ) {
//     DBConnection.query('SELECT * FROM `gallery`', function (err, rows) {
//         if (err) {throw err}
//         res.json(rows)
//     })
// });

// list image route
router.get("/api/images", function (req,res ) {
    DBConnection.query('SELECT * FROM `gallery`', function (err, rows) {
        if (err) {throw err}
        res.json(rows)
        console.log(res)
    })
});

// list about section entries
router.get("/api/about", function (req,res ) {
    DBConnection.query('SELECT * FROM `about`', function (err, rows) {
        if (err) {throw err}
        res.json(rows)
        console.log(res)
    })
});

// add image route
router.post('/api/addImage', passport.authenticate('jwt', { session: false }), function (req, res) {
    try {
        userService.addImage(req.body.img_url, req.body.img_title, req.body.about, req.body.tag, function (err, results) {
            if (err) { throw err }
            res.status(201).json({ status: 'success', message: 'Created' });
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
});

// remove image route
router.delete('/api/removeImage/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
    try {
        userService.removeImage(req.params.id, function (err, results) {
            if (err) { throw err }
            res.status(204).json({
                status: 'success',
                deleted: true
            });
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
});


module.exports = router;
