var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var passport = require('passport');
var authenticate = require('./authenticate');
var config = require('./config');


//###### EXPRESS GENERATED APP #############
var app = express();

// Secure traffic only
app.all('*', (req, res, next) => {
  if (req.secure) {
    return next();
  }
  else {
    res.redirect(307, 'https://' + req.hostname + ':' + app.get('secPort') + req.url);
  }
});



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//##########################################


//########### ROUTES ##############################
var index = require('./routes/index');
var users = require('./routes/users');
var dishRouter = require('./routes/dishRouter');
var promoRouter = require('./routes/promoRouter');
var leaderRouter = require('./routes/leaderRouter');
const favoriteRouter = require('./routes/favoriteRouter');
const uploadRouter = require('./routes/uploadRouter');



//##################################################


//############ AUTHORIZATION #################
//Using cookies
//app.use(cookieParser('12345-67890-09876-54321'));


//Using sessions
// app.use(session({
//   name: 'session-id',
//   secret: '12345-67890-09876-54321',
//   saveUninitialized: false,
//   resave: false,
//   store: new FileStore()
// }));

app.use(passport.initialize());

//app.use(passport.session());


//Unprotected urls
app.use('/', index);
app.use('/users', users);

/*Now only certain routes are needed to be validated using tokens
and not all of them , once authentication is successful,
a token will be generated , which will be used to protect the specific end points
*/
// function auth(req, res, next) {
//   console.log(req.session);

//   if (!req.user) {
//     var err = new Error('You are not authenticated!');
//     err.status = 403;
//     return next(err);
//   }
//   else {

//     next();

//   }
// }


// app.use(auth);

//Protected urls
app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);
app.use('/imageUpload',uploadRouter);
app.use('/favorites', favoriteRouter);

//###################################################

//############# DB CONNECTION CONFIG ######
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Dishes = require('./models/dishes');
const Leaders = require('./models/leaders');
const Promotions = require('./models/promotions');
// Connection URL
const url = config.mongoUrl;
const connect = mongoose.connect(url, {
  useMongoClient: true,
  /* other options */
});

connect.then((db) => {
  console.log("Connected correctly to server");
}, (err) => { console.log(err); });

//############################################



//################### STATIC FILES ################
app.use(express.static(path.join(__dirname, 'public')));
//################################################






//#################### ERROR HANDLING ##################
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//#############################################################




module.exports = app;
