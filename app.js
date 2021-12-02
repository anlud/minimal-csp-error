var express = require('express');
var path = require('path');
var app = express();

var indexRouter = express.Router();

indexRouter.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


app.use((req, res, next) => {
    res.set("Content-Security-Policy", "default-src 'self'; img-src 'self' 'strict-dynamic' http://not-localhost.com");
    next()
})
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);

module.exports = app;
