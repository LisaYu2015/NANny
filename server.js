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
var Question = mongoose.model('Question', {
    _id: mongoose.Schema.Types.ObjectId,
    content: { type: String, default: ""},
    date: { type: Date, default: Date.now },
    helperID: { type: String, default: ""}, //points to a user
    requesterID: { type: String, default: ""}, //points to a user
    ProjectID : { type: String, default: ""}, //referes to project witch includes userID, brand, year, model, engine and errorcode
});

//tracks the comments related to a question/request
var Discussion = mongoose.model('Discussion', {
    _id: mongoose.Schema.Types.ObjectId,
    author: String,
    comment: String,
    requestid: String,
    time: { type: Date, default: Date.now } //when was the comment posted
});

var User = mongoose.model('Users', {
    _id: mongoose.Schema.Types.ObjectId,
    expertise: { type: String, default: ""},
    experience: { type: String, default: ""},
    shop: { type: String, default: ""},
    fname: { type: String, default: ""},
    lname: { type: String, default: ""},
    email: { type: String, default: ""},
    password: { type: String, default: ""},
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
    PID: {type:Number, default:0}, //project id for us
    TID: {type:Number, default:0}, //technician id (should be the same as userid)
    Userid:{type:String, default:''}, //Links to _id of user
    brand:{type:String, default:''},
    year:{type:Number, default:0},
    model:{type:String, default:''},
    complete: {type:String, default:'no'},
    errorcode:{type:String, default:''},
    symptoms: {type:String, default:''},
    engine:{type:String, default:''},
    uploaded: {type:String, default:'no'},
    numofpics: {type:Number, default:0},
});

//Data contains the details of each project/treasure
var Detail = mongoose.model('detail', {
    _id: mongoose.Schema.Types.ObjectId,
    PID: Number,
    ProjectID:String, //links to _id of Project
    type:String,
    sentence:String,
});

//Routes for requests for one person
    //get list of requests asked by current user
    app.get('/api/question/reqid/:reqid', function(req, res){
        console.log("getting all chats request");
        console.log(req.params.reqid);
        Question.find({requesterID: req.params.reqid}, function(err, docs){
            if(err)
                res.send(err)
            res.json(docs);
            console.log(docs);
        });
    });

    //get list of requests for which the current user is the helper
    app.get('/api/question/helpid/:helpid', function(req, res){
        console.log("getting all chats help");
        Question.find({helperID: req.params.helpid}, function(err, docs){
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
        console.log(req.body);

        var nquestion = new Question();
        nquestion._id = new ObjectId();
        nquestion.content = req.body.content;
        // nquestion.helperID = req.body.helperID;
        nquestion.requesterID = req.body.requesterid;
        nquestion.ProjectID = req.body.projectid;
        nquestion.save(function(err, question){
            if(err)
                res.send(err);
            console.log("done")
            res.send(question);
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
    app.get('/api/user/id/:id', function(req, res) {
        console.log("getting one users by id");
        User.find({_id: mongoose.Types.ObjectId(req.params.id)}, function(err, users){
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
                res.send(err);
 
            res.json(Project);
        });
    });
 
 
    app.post('/api/Project', function(req, res) {
        console.log("creating/updating Projects");
        console.log(req.body);

        // if(!req.body._id){
        //     //if no _id is sent along, add the project
        //     nproj = new Project()
        //     Project.save(req, function(err, proj, numAffected){
        //         if(err){
        //             console.log('err')
        //             res.send(err);
        //         } else {
        //             console.log(proj);
        //             res.send(proj);
        //         }
        //     })
        // }
 
                Project.findById(req.body._id, function(err, project) {
                  if (!project && !err) {
                    console.log("creating new project");
                    project = new Project();
                    project._id = new ObjectId();
                    project.year = req.body.year;
                    project.brand = req.body.brand;
                    project.model = req.body.model;
                    project.errorcode = req.body.error;
                    project.symptoms = req.body.symptoms;

                    project.save(function(err, proj) {
                      if (err)
                        {console.log('error');
                        console.log(err)
                        res.send(err);
                    }
                      else
                        {console.log(project);
                        console.log('success')
                        res.send(proj);
                        }

                    });
                  } else {
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
           
                    project.save(function(err, proj) {
                      if (err)
                        {console.log('error');
                        console.log(err)}
                      else
                        {console.log(project);
                        console.log('success')
                        res.send(proj);
                        }

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
