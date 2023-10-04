const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    name: String,
    location: [Number]
});

module.exports = mongoose.model('Location', locationSchema);
