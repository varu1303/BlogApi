const mongoose = require('mongoose');

const blogModel = require('./model.js');

mongoose.Promise = global.Promise;

module.exports = {
    findAll : function () {
        return blogModel.find({});
    },
    
    saveBlog : function (req) {
        var post = new blogModel({
            title : req.body.title,
            body : req.body.body,
            author: req.body.author
        });
        
        return post.save();
    },
    
    findOne : function (id) {
        return blogModel.findById(id);
    },
    
    editOne : function (id, obj) {
        return blogModel.findByIdAndUpdate(id, {$set : obj});
    },
    
    omitOne : function (id) {
        return blogModel.findByIdAndRemove(id);
    }
};