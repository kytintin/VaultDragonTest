const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    movieId: {
        type: String,
        required: true,
        max: 10
    },
    name: {
        type: String,
        required: true,
        max: 100
    },
    created_at: {
        type: String
    }
})

module.exports = mongoose.model('movies',MovieSchema);