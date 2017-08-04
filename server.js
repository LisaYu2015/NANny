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
console.log("Anyone here?");
var url1 = 'mongodb://localhost:27017/testdb';
var url2 = 'mongodb://bosch:bosch@ec2-54-87-140-197.compute-1.amazonaws.com:27017/test';
mongoose.connect(url1); 
// When successfully connected
mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + url1);
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
var Question = mongoose.model('Request', {
    _id: [mongoose.Schema.Types.ObjectId],
    content: String,
    date: { type: Date, default: Date.now },
    helperID: [mongoose.Schema.Types.ObjectId],
    requesterID: [mongoose.Schema.Types.ObjectId],
    symptoms: String,
    ProjectID : [mongoose.Schema.Types.ObjectId] //referes to project witch includes userID, brand, year, model, engine and errorcode
});

var Discussion = mongoose.model('Discussion', {
    _id: [mongoose.Schema.Types.ObjectId],
    author: [mongoose.Schema.Types.ObjectId],
    comment: String,
    requestid: [mongoose.Schema.Types.ObjectId],
    time: { type: Date, default: Date.now }
});

var User = mongoose.model('User', {
    _id: [mongoose.Schema.Types.ObjectId],
    expertise: String,
    shop: String,
    username: String
});

var Points = mongoose.model('Points', {
    _id: [mongoose.Schema.Types.ObjectId],
    Userid: [mongoose.Schema.Types.ObjectId],
    a_comment: Number,
    a_fix: Number,
    a_request: Number,
    p_comment: Number,
    p_fix: Number,
    p_request: Number,
    date: { type: Date, default: Date.now }
});

//treasure

var Project = mongoose.model('project', {
    _id: mongoose.Schema.Types.ObjectId,
    PID:Number,
    brand:String,
    year:Number,
    model:String,
    complete:String,
    errorcode:String,
    engine:String,
    uploaded:String,
    numofpics:Number
});

var Detail = mongoose.model('detail', {
    _id: mongoose.Schema.Types.ObjectId,
    PID:Number,
    type:String,
    sentence:String
});


// Routes for Requests collection
 
    // Get reviews
    app.get('/api/question', function(req, res) {
 
        console.log("fetching questions");
 
        // use mongoose to get all reviews in the database
        Question.find(function(err, question) {
 
            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err);
 
            res.json(question); // return all reviews in JSON format
        });
    });
 
    // create review and send back all reviews after creation
    app.post('/api/question', function(req, res) {
 
        console.log("creating questions");
 
        // create a review, information comes from request from Ionic
        Question.create({
            _id: [mongoose.Schema.Types.ObjectId],
            content: String,
            date: { type: Date, default: Date.now },
            helperID: [mongoose.Schema.Types.ObjectId],
            requesterID: [mongoose.Schema.Types.ObjectId],
            symptoms: String,
            ProjectID : [mongoose.Schema.Types.ObjectId],
            done : false
        }, function(err, question) {
            if (err)
                res.send(err);
 
            // get and return all the reviews after you create another
            Question.find(function(err, question) {
                if (err)
                    res.send(err);
                res.json(question);
            });
        });
 
    });
 
    // delete a review
    app.delete('/api/question/:question_id', function(req, res) {
        question.remove({
            _id : req.params.question_id
        }, function(err, question) {
 
        });
    });

    app.get('/api/Project', function(req, res) {

        console.log("fetching Projects");

        //use mongoose to get all Projects in the database
        Project.find(function(err, Project){
            //if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(Project);
        });
    });


    app.post('/api/Project', function(req, res) {
 
        console.log("creating Projects");
        console.log(req.body);
 

            

                Project.findById(req.body._id, function(err, project) {
                  if (!project)
                    {console.log("here");
                res.send(new Error('Could not load Document'));}
                  else {
                    // do your updates here
                                // project._id = req.body._id;
            project.PID =req.body.PID;
            project.TID = req.body.TID;
            project.year= req.body.year;
            project.brand= req.body.brand;
            project.model= req.body.model;
            project.engine= req.body.engine;
            project.errorcode = req.body.errorcode;
            project.complete = req.body.complete;
            project.uploaded = req.body.uploaded;
            project.numofpics = req.body.numofpics;
            
                    project.save(function(err) {
                      if (err)
                        {console.log('error');
                        console.log(err)}
                      else
                        {console.log(project);
                        console.log('success')}
                    });
                  }
                });
 
    });

    app.get('/api/Detail', function (req, res) {

        console.log("fetching Details");

        //use mongoose to get all Details in the database
        Detail.find(function (err, Detail) { 
            //if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(Detail);
        });
    });

    app.post('/api/Detail', function(req, res) {
 
        console.log("creating Details");
        console.log(req.body);
 

            

        Detail.findById(req.body._id, function(err, detail) {
          if (!detail)
            {console.log("here");
        console.log(detail);
        res.send(new Error('Could not load Document'));}
            else {
            // do your updates here
                        // project._id = req.body._id;
                detail.PID =req.body.PID;
                detail.type = req.body.type;
                detail.sentence= req.body.sentence;

    
                detail.save(function(err) {
                    if (err)
                        {console.log('error');
                        console.log(err)}
                    else
                        {console.log(detail);
                        console.log('success')}
                });
            }
        });
 
    });






