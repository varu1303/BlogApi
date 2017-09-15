const Controller = require('./../Controller/control.js');

module.exports = function (app) {
    
    app.get('/', Controller.homeMessage);
    
    app.get('/blogs', Controller.viewBlogs);
    
    app.post('/blogs', Controller.addBlog);
    
    app.get('/blogs/:id', Controller.viewBlog);
    
    app.put('/blogs/:id', Controller.updateBlog);
    
    app.delete('/blogs/:id', Controller.removeBlog);
    
    app.get('*', function(req, res, next) {
        var err = new Error();
        err.status = 404;
        next(err);
    });
    
};