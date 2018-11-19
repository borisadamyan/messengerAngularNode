const express = require('express');
const router = express.Router();
const Message = require('../models/message');

router.get('/', function (req, res, next) {
    Message.find()
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

router.post('/', function (req, res, next) {
    console.log(req.body);
    let message = new Message({
        content: req.body.content,
    });
    message.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            })
        }
        res.status(201).json({
            message: 'Saved message',
            obj: result
        })
    })

});

router.patch('/:id', function (req, res, next) {
    Message.findById(req.params.id, function (err, message) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            })
        }
        ;
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
module.exports = router;