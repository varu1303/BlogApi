const express = require('express');
const bodyParser = require('body-parser');

const mongoConnect = require('./server/mongoConnect.js');
const route = require('./route/routes.js');



//app gets all the methods of express
var app = express();

app.use(bodyParser.json());

//Passing app as arguement to route.js function so, can configure routes in one different file
route(app);

//Error handling
app.use(function(err, req, res, next) {
    if (err.status == 404)
        res.status(404).json({ error: 'PAGE DOES NOT EXIST' });
});

//Listening to port 3000 for requests
app.listen('3000',function () {
    console.log('Listening on 3000 port');
});