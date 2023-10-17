const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://127.0.0.1:27017/short-url').then(console.log("connected"));

const urlSchema = new mongoose.Schema({
    shortId : {
        type: String,
        required: true,
        unique: true   
    },
    redirectUrl: {
        type: String,
        required:true
    },
    visHistory: [{timestamp: {type: Number}}],
},{timestamps: true});

const URL = mongoose.model('url', urlSchema);

module.exports = URL;