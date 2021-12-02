var express = require('express');
var path = require('path');
var app = express();


app.use((req, res, next) => {
    res.set("Content-Security-Policy", "default-src 'self'; img-src 'self' 'strict-dynamic'");
    next()
})

app.use(express.static(path.join(__dirname, 'public')));

var indexRouter = express.Router();

indexRouter.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
app.use('/', indexRouter);

module.exports = app;
