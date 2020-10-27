const mongoose = require('mongoose');

const imSchema = mongoose.Schema({
    message : String,
    name : String,
    timestamp: String,
    received: Boolean,
});

const messageContent = mongoose.model('messageContent', imSchema);

module.exports = messageContent;