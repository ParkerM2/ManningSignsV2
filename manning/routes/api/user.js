//dependencies
const express = require('express')
const passport = require("passport");
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
var DBConnection = require('../../config/DBConnection');
var loginService = require('../../middlewares/login-service');
var userService = require('../../middlewares/user-service');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const router = express.Router();

// image routes


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
    })
});


router.put("/api/about1", function (req, res) {
    console.log("REQ", Object.keys(req.body)) // <- is the about1 info
    DBConnection.query(`UPDATE about SET about1 = ? WHERE id = 1`, Object.keys(req.body), function (err, rows) {
        if (err) { throw err }
     })
});

router.put("/api/about2", function (req, res) {
    console.log("REQ", Object.keys(req.body)) // <- is the about2 info
    DBConnection.query(`UPDATE about SET about2 = ? WHERE id = 1`, Object.keys(req.body), function (err, rows) {
        if (err) { throw err }

     })
});

// add image route
router.post('/api/addImage', upload.array('photos', 4), function (req, res, next) {
    // req.file should be 'photos' array
    // req.body will hold the text fields, if there were any'
    console.log(`Inside router.post/addImage req.file>${req.file}`)

    console.log(`Inside router.post/addImage req.body>${req.body}`)
    DBConnection.query(`INSERT INTO gallery (img_url) VALUES ?`, [req.body], function (err, rows) {
        if (err) { throw err }
    });
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
