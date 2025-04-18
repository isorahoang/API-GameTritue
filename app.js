var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
 
const mongoose = require("mongoose");
require("./models/UserModel");

var indexR = require('./routes/index');
var usersR = require('./routes/users');


var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexR);
app.use('/users', usersR);


// mongoose
//   .connect("mongodb://localhost:27017/gametritue", {
//   })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.log(err));
mongoose
  .connect(
    "mongodb+srv://isorahoang:1RbAsjVWJ615uVt9@reactapi.c3jg9um.mongodb.net/gametritue",
    {}
  )
  .then(() => console.log("Connected to MongoDB online"))
  .catch((err) => console.log(err));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




module.exports = app;
