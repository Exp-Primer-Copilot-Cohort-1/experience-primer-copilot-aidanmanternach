// create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Comment = require('./models/comment');
var Post = require('./models/post');

// connect to database
mongoose.connect('mongodb://localhost/comment');