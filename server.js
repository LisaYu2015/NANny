//Set up host server for website
var express = require('express'),
    app = express();
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var cors = require('cors');
var morgan = require('morgan');             // log requests to the console (express4)

app.use(express.static('www'));
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(cors());

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

// API Routes
// app.get('/blah', routeHandler);

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

//Connection with MongoDB
var mongoose = require('mongoose'); 
var assert = require('assert');
console.log("Anyone here? number2");
var url2 = 'mongodb://bosch:bosch@ec2-54-87-140-197.compute-1.amazonaws.com:27017/test';
mongoose.connect(url2); 
// When successfully connected
mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + url2);
}); 
// If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 
// When the connection is disconnected
mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});


//Models (Schemas)
var Question = mongoose.model('Requests', {
	_id: [mongoose.Schema.Types.ObjectId],
    content: String,
    date: { type: Date, default: Date.now },
    error: String,
    helper: String,
    make: String,
    model: String,
    req_id: String,
    symptoms: String,
    year: String
});

var Discussion = mongoose.model('Discussion', {
	_id: [mongoose.Schema.Types.ObjectId],
	author: String,
	comment: String,
	requestid: [mongoose.Schema.Types.ObjectId],
	time: { type: Date, default: Date.now }
});

var User = mongoose.model('User', {
	_id: [mongoose.Schema.Types.ObjectId],
	expertise: String,
	shop: String,
	userid: String,
	username: String,
});

var Points = mongoose.model('Points', {
	_id: [mongoose.Schema.Types.ObjectId],
	userid: String,
	a_comment: Number,
	a_fix: Number,
	a_request: Number,
	p_comment: Number,
	p_fix: Number,
	p_request: Number,
	date: { type: Date, default: Date.now }
});

// Routes for Requests collection
 
    // Get reviews
    app.get('/api/question', function(req, res) {
        console.log("fetching questions");
        // use mongoose to get all reviews in the database
        Question.find(function(err, question) {
            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)
            res.json(question); // return all reviews in JSON format
        });
    });
 
    // create review and send back all reviews after creation
    app.post('/api/question', function(req, res) {
        console.log("creating questions");
        // create a review, information comes from request from Ionic
        Question.create({
            title : req.body.title,
            description : req.body.description,
            rating: req.body.rating,
            done : false
        }, function(err, question) {
            if (err)
                res.send(err);
            // get and return all the reviews after you create another
            Question.find(function(err, question) {
                if (err)
                    res.send(err)
                res.json(question);
            });
        });
    });
 
    // delete a review
    app.delete('/api/question/:question_id', function(req, res) {
        Question.remove({
	            _id : req.params.question_id
	        }, function(err, question) {
        });
    });