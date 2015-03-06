var express = require('express'),
	stylus = require('stylus'),
	cookieParser = require('cookie-parser'),
	session = require('express-session'),
	passport = require('passport');

module.exports = function (app, config, bodyParser) {
	function compile (str, path) {
		return stylus(str).set('filename', path);
	}

	//all environments
	app.set('views', config.rootPath + '/server/views');
	app.set('view engine', 'jade');
	app.use(cookieParser());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(session({
		secret: 'ambiguous statement',
		resave: true,
		saveUninitialized: true
	}));
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(stylus.middleware(
		{
			src: config.rootPath + '/public',
			compile: compile
		}
	));
	app.use(express.static(config.rootPath + '/public'));
};