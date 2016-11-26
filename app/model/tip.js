var mongoose = require('mongoose');

var tipSchema = mongoose.Schema({
    username: String,
    message: String,
    updated: {
        type: Date
    },
    created: {
        type: Date,
        default: Date.now
    },
    olderMessage: String
});

var Tip = mongoose.model('Tip', tipSchema);

function createDefaultTips() {
    Tip.find({}).exec(function(err, collection) {
        if(collection.length === 0) {
            Tip.create({username: 'Matt', message: 'Wow'});
            Tip.create({username: 'Koleman', message: 'Another wow!'});
        }
    })
}

exports.createDefaultTips = createDefaultTips;