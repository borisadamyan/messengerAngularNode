const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
var Message = require('../models/message');
var User = require('../models/user');

router.get('/', function (req, res, next) {
    Message.find()
        .populate('user', 'firstName')
        .exec(function (err, messages) {
            if (err) {
                res.status(201).json({
                    message: 'Saved message',
                    obj: result
                })
            }
            res.status(200).json({
                message: 'Success',
                obj: messages
            })
        })
});

router.use('/', function (req, res, next) {
    jwt.verify(req.query.token, 'secret', function (err, decoded) {
        if (err) {
            return res.status(401).json({
                title: 'Not authenticated',
                error: err
            })
        }
        next();
    });
});

// router.post('/', function (req, res, next) {
//     const decoded = jwt.decode(req.query.token);
//     console.log(decoded);
//     User.findById(decoded.user._id, function (err, user) {
//         if (err) {
//             return res.status(500).json({
//                 title: 'An error occurred',
//                 error: err
//             })
//         }
//         let message = new Message({
//             content: req.body.content,
//             user: user
//         });
//         message.save(function (err, result) {
//             if (err) {
//                 return res.status(500).json({
//                     title: 'An error occurred',
//                     error: err
//                 })
//             }
//             user.messages.push(result);
//             user.save();
//             res.status(201).json({
//                 message: 'Saved message',
//                 obj: result
//             })
//         })
//
//     });
// });
router.post('/', function (req, res, next) {
    const decoded = jwt.decode(req.query.token);
    // console.log(req.body);
    // console.log(req.query);
    // console.log(decoded.user._id);
    User.findById(decoded.user._id, function (err, user) {
        if (err) {
            console.log('ERRor');
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        var message = new Message({
            content: req.body.content,
            user: user
        });
        // console.log('MESSAGE', message);
        message.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            console.log(message);
             user.messages.push(message._id);
            // user.messages.push('hello');
            // console.log(user.messages.push());
            user.save();
            res.status(201).json({
                message: 'Saved message',
                obj: result
            });
        });
    });
});
router.patch('/:id', function (req, res, next) {
    Message.findById(req.params.id, function (err, message) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!message) {
            return res.status(500).json({
                title: 'No message Found!',
                error: {message: 'Message Not Found!'}
            })
        }
        message.content = req.body.content;
        message.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                })
            }
            res.status(201).json({
                message: 'Updated message',
                obj: result
            })
        })
    });
});


router.delete('/:id', function (req, res, next) {
    const decoded = jwt.decode(req.query.token);
    console.log(decoded);
    Message.findById(req.params.id, function (err, message) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!message) {
            return res.status(500).json({
                title: 'No message Found!',
                error: {message: 'Message Not Found!'}
            })
        }
        console.log(message);
        if(message.user != decoded.user._id){
            return res.status(401).json({
                title: 'Not authenticated',
                error: {message: 'User do not match'}
            })
        }

        message.content = req.body.content;
        message.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                })
            }
            res.status(201).json({
                message: 'Deleted message',
                obj: result
            })
        })
    });
});

module.exports = router;