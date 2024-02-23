var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
require('./config/database');

var indexRouter = require('./routes/index');
var flightsRouter = require('./routes/flights');
var destinationsRouter = require('./routes/destinations');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/flights', flightsRouter);
app.use('/', destinationsRouter)

// catch 404 and forward to error handler
app.use(function (request, response, next) {
  next(createError(404));
});

// //error handler
// app.use(function (error, request, response, next) {
//   // set locals, only providing error in development
//   request.locals.message = error.message;
//   console.log(error.message);
//   request.locals.error = request.app.get('env') === 'development' ? error : {};

//   // render the error page
//   request.status(error.status || 500);
//   request.render('error');
// });

module.exports = app;
