
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const passportConfig = require("./passport");
const passport = require ("passport")

//Para la session

const session = require ("express-session");

const sessionMiddleware = session ({
  name: "auth-test",
  secret: "p4l4br4_m4g1c4",
  saveUninitialized: false,
  resave: false,
});
const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(sessionMiddleware);

app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
