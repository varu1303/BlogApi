const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Blog = new Schema({
    title : {
        type: String,
        required: true
    },
    body : {
        type: String,
        required: true,
        validate: {
          validator: function(v) {
            return v.length > 5;
          },
          message: 'There should be more than 5 characters in body!'
        },
    },
    author : {
        type: String,
        required: true
    }
})
    




var blogModel = mongoose.model('blogModel', Blog);

module.exports = blogModel;