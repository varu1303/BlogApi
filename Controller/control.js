const modelQ = require('./../model/modelQuery.js');

module.exports = {
    
    homeMessage : function (req, res) {
        res.send ('WELCOME! \n 1. CREATE blog -> POST at /blogs (Raw JSON data in body) \n 2. GET ALL blogs -> GET at /blogs \n 3. GET A blog -> GET at /blogs/:id \n 4. EDIT a blog -> PUT at /blogs/:id \n 5. DELETE a blog -> DELETE at /blogs/:id');
    },
    
    viewBlogs : function (req, res) {
        modelQ.findAll()
            .then(function (data) {
            if(data.length > 0) {
                console.log('SUCCESSFUL GET OF ALL DATA ');
                res.send(data);
            }
            else {
                console.log('NO BLOGS IN DB');
                res.send('NO BLOGS IN DB');
            }

        })
            .catch(function (e) {
                console.log('BLOGS COULD NOT BE LOADED');
                res.send(e);
        });
    },
    
    addBlog : function (req, res) {
        modelQ.saveBlog(req)
            .then(function (d) {
                console.log('BLOG ADDED ');
                res.status(201).send(d);
        })
            .catch(function (e) {
                console.log('ERROR IN ADDING BLOG');
                res.status(202).send(e.message);
        });
    },
    
    viewBlog : function (req, res) {
        modelQ.findOne(req.params.id)
            .then(function (d) {
            
            if(d) {
                console.log('BLOG FOUND');
                res.send(d);
            }
            else {
                console.log('BLOG NOT PRESENT IN DB');
                res.send('BLOG NOT PRESENT IN DATABASE! TRY WITH VALID ID');
            }
        })
            .catch(function (e) {
                console.log('ERROR IN GETTING BLOG');
                res.send(e);
        });
    },
    
    updateBlog : function (req, res) {
        modelQ.editOne(req.params.id, req.body)
            .then(function (d) {
                
            if(d) {
                console.log('BLOG UPDATED');
                res.send(d);
            }
            else {
                console.log('BLOG NOT PRESENT IN DB');
                res.send('BLOG ASKED TO BE UPDATED NOT PRESENT IN DATABASE! TRY WITH VALID ID');
            }
        })
            .catch(function (e) {
                console.log('EDIT FAILED');
                res.status(304).send(e);
        })
    },
    
    removeBlog : function (req, res) {
        modelQ.omitOne(req.params.id)
            .then(function (d) {
                
            if(d) {
                console.log('BLOG REMOVED');
                res.send(d);
            }
            else {
                console.log('BLOG NOT PRESENT IN DB');
                res.send('BLOG ASKED TO BE DELETED NOT PRESENT IN DATABASE! TRY WITH VALID ID');
            }
        })
            .catch(function (e) {
                console.log('ERROR IN DELETING BLOG');
                res.send(e);
        })
    }
    
};