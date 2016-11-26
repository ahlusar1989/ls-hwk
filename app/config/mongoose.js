var mongoose = require('mongoose'),
    tipModel = require('../model/tip');

mongoose.connect('mongodb://localhost/tipdb');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'db not connected...'));
db.once('open', function callback() {
    console.log('(tipdb) db opened');
});

tipModel.createDefaultTips();