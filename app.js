var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require('./routes/db')
const bodyParser = require('body-parser')
const session = require('express-session')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var usersRotas = require('./routes/paginas');
var usersRotachek = require('./routes/checar');
const buscaRota = require('./routes/procura')


var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({secret:'hello sesseion'}));
app.use(express.static(path.join(__dirname, 'public')));


// rootas
app.use('/', indexRouter);
app.use('/envio', usersRouter);
app.use('/pagina',usersRotas);
app.use('/control',usersRotachek);
app.use('/buscar',buscaRota);





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
