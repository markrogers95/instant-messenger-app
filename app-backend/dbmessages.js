const mongoose = require('mongoose');

const imSchema = mongoose.Schema({
    message : String,
    name : String,
    timestamp: String,
    received: Boolean,
});

const messagecontents = mongoose.model('messagecontents', imSchema);

module.exports = messagecontents;