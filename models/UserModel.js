let mongoose = require('mongoose');
let schema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});
let userModel = new mongoose.model('User', schema);
module.exports = userModel;