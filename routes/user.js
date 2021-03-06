const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/', function (req, res, next) {
    // console.log(req.body);
    let user = new User({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: bcrypt.hashSync(req.body.password, 10)
    });
    user.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            })
        }
        res.status(201).json({
            message: 'User Created',
            obj: result
        })
    })
});

router.post('/signin', function (req, res, next) {
    console.log(req.body);
    User.findOne({email: req.body.email}, function (err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            })
        }
        if (!user) {
            return res.status(401).json({
                title: 'Login failed',
                error: {message: 'User could not be found'}
            })
        }
        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).json({
                title: 'Login failed',
                error: {message: 'User could not be found'}
            })
        }

        const token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
        res.status(200).json({
            message: 'Successfully logged in',
            token: token,
            userId: user._id
        })

    })
});
module.exports = router;
