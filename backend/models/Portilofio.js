const mongoose = require('mongoose');
const slug = require('slug');

const { Schema } = mongoose;

const portifolioSchema = new Schema({


    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true

    },
    Date: {
        type: Date,
        default: Date.now()
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        default: function(){return slug(this.title)}
    },

});

module.exports = mongoose.model('portifoli', portifolioSchema);