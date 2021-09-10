var express  = require('express')  
var mongoose = require('mongoose')  
var path     = require('path')
var PORT = precess.env.PORT || 3000;
var userRoutes = require('./routes/users')

var app = express();

app.set("views", path.resolve(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use('/user/', userRoutes);

app.listen(PORT, () => {
    console.log("Server running at http://localhost:${PORT}");
})

module.exports = app;