//Set up host server for website
var express = require('express'),
    app = express();

app.use(express.static('www'));

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
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
console.log("Anyone here?");
var url2 = 'mongodb://bosch:bosch@ec2-54-87-140-197.compute-1.amazonaws.com:27017/test';
// MongoClient.connect(url2, function(err, db) {
//   assert.equal(null, err);
//   console.log("Connected correctly to server.");
//   db.close();
// });

mongoose.connect(url2); 

// CONNECTION EVENTS
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


//Models
var Question = mongoose.model('Requests', {
    title: String,
    description: String,
    rating: Number
});

var Discussion = mongoose.model('Discussion', {

});

var User = mongoose.model('User', {

});

var Points = mongoose.model('Points', {

})

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
        Review.remove({
            _id : req.params.question_id
        }, function(err, question) {
 
        });
    });