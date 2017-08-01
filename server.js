//nodejs buckets
var AWS = require('aws-sdk');
var s3Bucket = new AWS.S3( { params: {Bucket: 'katcher'} } );

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

// app.listen(8080);
// console.log("App listening on port 8080");

//Connection with MongoDB
var mongoose = require('mongoose'); 
var assert = require('assert');
console.log("Anyone here?");
var local = 'mongodb://localhost:27017/mydb';
var url2 = 'mongodb://bosch:bosch@ec2-54-87-140-197.compute-1.amazonaws.com:27017/test';
mongoose.connect(local); 
// When successfully connected
mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + local);
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

//Tracks the general request information. Changed to "Question" variable
//because 'request' is a common keyword in webapps.
var Question = mongoose.model('Requests', {
    _id: mongoose.Schema.Types.ObjectId,
    content: String,
    date: { type: Date, default: Date.now },
    helperID: mongoose.Schema.Types.ObjectId, //points to a user
    requesterID: mongoose.Schema.Types.ObjectId, //points to a user
    symptoms: String,
    ProjectID : mongoose.Schema.Types.ObjectId, //referes to project witch includes userID, brand, year, model, engine and errorcode
});

//tracks the comments related to a question/request
var Discussion = mongoose.model('Discussion', {
    _id: mongoose.Schema.Types.ObjectId,
    author: mongoose.Schema.Types.ObjectId,
    comment: String,
    requestid: mongoose.Schema.Types.ObjectId,
    time: { type: Date, default: Date.now } //when was the comment posted
});

var User = mongoose.model('Users', {
    _id: mongoose.Schema.Types.ObjectId,
    expertise: String,
    experience: String,
    shop: String,
    fname: String,
    lname: String,
    email: String,
    password: String,
    joined: { type: Date, default: Date.now },
    last_active: { type: Date, default: Date.now },
    total_points: { type: Number, default: 0},
    level: { type: String, default: "Novice"},
    total_fix: { type: Number, default: 0},
    total_help: { type: Number, default: 0},
});

var Point = mongoose.model('Points', {
    _id: mongoose.Schema.Types.ObjectId,
    Userid: String,
    a_comment: Number,
    a_fix: Number,
    a_request: Number,
    date: { type: Date, default: Date.now }
});

//Project contains the general details of each car
var Project = mongoose.model('Project', {
    _id: mongoose.Schema.Types.ObjectId,
    Userid:mongoose.Schema.Types.ObjectId,
    brand:String,
    year:Number,
    model:String,
    complete: {type:String, default:'No'},
    errorcode:String,
    symptoms: String,
    engine:String,
});

//Data contains the details of each project/treasure
var Data = mongoose.model('Data', {
    _id: mongoose.Schema.Types.ObjectId,
    ProjectID:mongoose.Schema.Types.ObjectId,
    type:String,
    sentence:String,
});

//Routes for requests for one person
    //get list of requests for one user
    app.get('/api/question/id/:id', function(req, res){
        console.log("getting all chats");
        Question.find({Userid: req.params.id}, function(err, points){
            if(err)
                res.send(err)
            res.json(docs);
            console.log(docs);
        });
    });

    // create request 
    // first create project, then add request for that project
    app.post('/api/question', function(req, res) {
 
        console.log("creating questions");

        var nquestion = new Question();
        nquestion.content = req.body.content;
        nquestion.helperID = req.body.helperID;
        nquestion.requesterID = req.body.requesterID;

        var newproj = new Project();
        newproj.Userid = req.body.userid;
        newproj.brand = req.body.brand;
        newproj.year = req.body.year;
        newproj.model = req.body.model;
        newproj.errorcode = req.body.errorcode;
        newproj.symptoms = req.body.symptoms;
        newproj.engine = req.body.engine;

        newproj.save(function(err, project) {
            if(err)
                res.send(err);
            nquestion.ProjectID = project.id;
        });

        nquestion.save(function(err, question){
            if(err)
                res.send(err);
        });
 
    });

    //get discussion for one request
    app.get('/api/disc/id/:id', function(req, res){
        console.log("getting discussion");
        Discussion.find({requestid: req.params.id}, function(err, disc){
            if(err)
                res.send(err);
            res.json(disc);
            console.log(disc);
        });
    });

    //add comment to discussion
    app.post('/api/disc/', function(req, res){
        Discussion.save({req}, function(err, docs){
            if(err)
                res.send(err);
            res.send(docs);
        })
    })

//Routes for points data for one user
    //get all points data for one user
    app.get("/api/points/id/:id", function(req, res){
        console.log("finding points data")
        Point.find({Userid: req.params.id}, function(err, docs){
            if(err)
                res.send(err);
            res.json(docs);
            console.log(docs);
        });
    });

    //get points data for one user for a specific day
    app.get("/api/points/id/:id", function(req, res){
        console.log("finding points data")
        Point.find({Userid: req.params.id}, function(err, docs){
            if(err)
                res.send(err)
            res.json(docs);
            console.log(docs);
        })
    });

    //insert/update the points data for one day
    app.post("/api/points", function(req, res) {
        Point.save({req}, function (err, success){
            if(err){
                res.send(err);
                console.log(err);
            } else {
                res.send(success);
            }
        })
    });

//Routes for users(adding/getting)
    //get all users
    app.get('/api/user', function(req, res) {
        console.log("getting all users");
        User.find(function(err, users){
            if(err)
                res.send(err);
            res.json(users);
        });
    });

    //find one user with some username
    app.get('/api/email/:email', function(req, res){
        console.log("authenticating user");
        User.find({email: req.params.email}, function(err, docs){
            if(err)
                res.send(err)
            res.json(docs);
            console.log(docs);
        });
    });

    var ObjectId = require('mongodb').ObjectId;

    //create new user
    app.post('/api/user', function(req, res) {
        console.log("registering user");
        User.create({
            _id: new ObjectId(),
            expertise: req.body.expertise,
            experience: req.body.experience,
            shop: req.body.shop,
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            password: req.body.password,
            done: false
        }, function(err, user) {
            if (err) {
                res.send(err);
                console.log(err);
            }
            else{
                res.send(user);
            }
        });
    });

    //updating user info
    app.post('/api/user/userid/:userid', function(req, res){
        var data = {Key: 'ProfilePics/emailofuser', Body: imagefile}
        s3Bucket.putObject(data, function(err, data){
            if(err){
                console.log("Error uploading image.");
            } else {
                console.log("successfully uploaded image.")
            }
        });
    })


//Routes for projects/Treasures

    app.get('/api/Project', function(req, res) {

        console.log("fetching Projects");

        //use mongoose to get all Projects in the database
        Project.find(function(err, Project){
            //if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(Project);
        });
    });

    //create Project and send back all Projects after creation
    app.post('/api/Project',function(req, res){

        console.log("creating Project");

        //create a Project, information comes from request from Ionic
        Project.create({
            PID : req.body.projectID, //should be automaticly created
            TID : req.body.technicaianID, //should be gathered from the user detail=userID
            brand : req.body.brand,
            year : req.body.year,
            model : req.body.model,
            complete : req.body.complete, //automaticlly assigned
            errorcode : req.body.errorcode,
            engine : req.body.engine,
            done : false
        }, function(err, Project) {
            if (err)
                res.send(err);

            //get and return all the Projects after you create another
            Project.find(function(err, Project){
                if(err)
                    res.send(err)
                res.json(Project);
            });
        });
    });

        // delete a Project
    app.delete('/api/Project/:Project_id', function(req, res) {
        Project.remove({
            _id : req.params.Project_id
        }, function(err, Project) {
 
        });
    });





// // Bucket names must be unique across all S3 users

// var myBucket = 'katcher';
// // var myKey = 'myBucketKey';

// s3.createBucket({Bucket: myBucket}, function(err, data) {

// if (err) {
//     console.log(err);
// } else {
//      params = {Bucket: myBucket, 'Hello!'};
//      s3.putObject(params, function(err, data) {
//          if (err) {
//              console.log(err)
//          } else {
//              console.log("Successfully uploaded data to myBucket/myKey");
//          }
//       });
//    }
// });
