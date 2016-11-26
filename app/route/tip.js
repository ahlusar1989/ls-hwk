var mongoose = require('mongoose'),
    Tip = mongoose.model('Tip');

module.exports = function(app) {
    app.get('/tips', function(req, res, next) {
        Tip.find().exec(function(err, data) {
            if(err) {
                return next(err);
            }
            res.json(data);
        });
    });

    app.post('/tips', function(req, res, next) {
        var tip = new Tip({
            username: req.body.username,
            message: req.body.message
        });
        tip.save(function(err, data) {
            if(err) {
                return next(err);
            }
            res.status(201).json(data);
        });
    });

    app.get('/tips/:id', function(req, res) {
        Tip.findById(req.params.id, function(err, data){
            res.json(data);
        });
    });

    app.delete('/tips/:id', function(req, res) {
        Tip.findByIdAndRemove(req.params.id, function(err, data) {
            res.json(data);
        });
    });

    app.put('/tips/:id', function(req, res, next) {
        Tip.findById(req.params.id, function(err, data) {
            data.username = req.body.username;
            data.message = req.body.message;
            data.updated = Date.now();
            data.save(function(err, data) {
                if(err) {
                    return next(err);
                }
                res.status(201).json(data);
            });
        });
    });
};