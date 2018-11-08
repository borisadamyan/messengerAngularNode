var express = require('express');
var router = express.Router();
// var User = require('../models/user');

router.get('/', function (req, res, next) {
    // User.findOne({}, function (err, doc) {
    //    if(err){
    //        return res.send(err)
    //    }
    //     res.render('node', {email: doc});
    // });

    res.render('index');

});
//
// router.get('/message/', function (req, res, next) {
//     res.render('node', {message: req.params.msg});
// });

// router.post('/', function (req, res, next) {
//     var email = req.body.email;
//     var user = new User({
//         firstName: 'Boris',
//         lastName: 'Adam',
//         password: '123456',
//         email: email
//     });
//     user.save();
//     res.redirect('/');
// });

module.exports = router;
