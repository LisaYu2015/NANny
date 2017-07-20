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
mongoose.connect('mongodb://bosch:bosch@ec2-54-87-140-197.compute-1.amazonaws.com:27017/test');

//Models
var Requests = mongoose.model('Requests', {
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

// Routes
 
    // Get reviews
    app.get('/api/reviews', function(req, res) {
 
        console.log("fetching reviews");
 
        // use mongoose to get all reviews in the database
        Review.find(function(err, reviews) {
 
            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)
 
            res.json(reviews); // return all reviews in JSON format
        });
    });
 
    // create review and send back all reviews after creation
    app.post('/api/reviews', function(req, res) {
 
        console.log("creating review");
 
        // create a review, information comes from request from Ionic
        Review.create({
            title : req.body.title,
            description : req.body.description,
            rating: req.body.rating,
            done : false
        }, function(err, review) {
            if (err)
                res.send(err);
 
            // get and return all the reviews after you create another
            Review.find(function(err, reviews) {
                if (err)
                    res.send(err)
                res.json(reviews);
            });
        });
 
    });
 
    // delete a review
    app.delete('/api/reviews/:review_id', function(req, res) {
        Review.remove({
            _id : req.params.review_id
        }, function(err, review) {
 
        });
    });