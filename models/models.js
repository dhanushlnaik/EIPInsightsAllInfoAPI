const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    status: {
        required: true,
        type: Number
    },
    status: {
        required: true,
        type: String
    },
    type: {
        required: true,
        type: String
    },
    category: {
        required: true,
        type: String
    },
    created: {
        required: true,
        type: String
    },
    author: {
        required: true,
        type: String
    },
    pull: {
        required: true,
        type: String
    },
    date: {
        required: true,
        type: String
    },
    eip: {
        required: true,
        type: String
    },
    insertions: {
        required: true,
        type: String
    }
})


module.exports = mongoose.model('EIPS', dataSchema)