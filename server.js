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
var serve = require('http').createServer(app);
var io = require("socket.io")(serve);

app.use(express.static('www'));
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse aserverpplication/x-www-form-urlencoded
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

// app.listen(app.get('port'), function () {
//     console.log('Express server listening on port ' + app.get('port'));
// });

//added for instant messaginging capability
serve.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

//socketio chat
io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
 
    socket.on('comment', function (msg) {
        console.log("comment created")
        socket.broadcast.emit('comment', msg);
    });

    socket.on('chat', function (msg) {
        console.log("new chat created")
        socket.broadcast.emit('chat', msg);
    });
});


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
    total_points: { type: Number, default: 0},  //points available for usage
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
    opendate: {type:Date, default:Date.now}
});

//Data contains the details of each project/treasure
var Detail = mongoose.model('detail', {
    _id: mongoose.Schema.Types.ObjectId,
    PID: Number,
    ProjectID:String, //links to _id of Project
    type:String,
    sentence:String
});

//Relationships track how mnay times someone has helped someone else
var Relationship = mongoose.model('relationships', {
    _id: mongoose.Schema.Types.ObjectId,
    helper: String,
    requester: String,
    n: {type:Number, default:1},
})

var Group = mongoose.model('groups', {
    _id: mongoose.Schema.Types.ObjectId,
    name: {type:String, default:''},
    nmembers: {type:Number, default:1},
    nposts: {type:Number, default:0},
    basedon: {type:String, default:''},
    description: {type:String, default:''}
})

var Membership = mongoose.model('memberships', {
    _id: mongoose.Schema.Types.ObjectId,
    groupid: {type:String, default:''},
    memberid: {type:String, default:''}
})

var Post = mongoose.model('posts', {
    _id: mongoose.Schema.Types.ObjectId,
    groupid: {type:String, default:''},
    memberid: {type:String, default:''},
    content: {type:String, default:''}
})

var Comment = mongoose.model('comments', {
    _id: mongoose.Schema.Types.ObjectId,
    postid: {type:String, default:''},
    writerid: {type:String, default:''},
    content: {type:String, default:''}
})

// routes for groups and memberships
    //get group by group id
    app.get('/api/group/groupid/:groupid', function(req, res){
        Group.find({_id:req.params.groupid}, function (err, docs){
            if(err){
                res.send(err)
            } else {
                res.send(docs)
            }
        })
    })

    //get all groups
    app.get('/api/group/', function(req, res) {
        Group.find(function (err, docs){
            if(err)
                res.send(err)
            res.send(docs)
        })
    })

    //get all groups where user is a member
    app.get('/api/member/userid/:userid', function(req, res){
        Membership.find({memberid:req.params.userid}, function(err, docs){
            if(err){
                res.send(err)
            } else {
                res.send(docs)
            }
        })
    })

    //search through groups
    app.get('/api/group/search/:search', function(req, res) {
        console.log("searching through groups")
        User.find( {$text: {$search: req.params.search}},
                      {score: {$meta: "textScore" } })
            .sort({score: {$meta: "textScore" }})
            .exec(function(err, docs) {
                if(err)
                    res.send(err);
                res.json(docs);
            });
    });

    //add new group
    app.post('/api/group', function(req, res) {
 
        console.log("creating group");
        console.log(req.body);

        var ngroup = new Group();
        ngroup._id = new ObjectId();
        ngroup.name = req.body.name;
        ngroup.description = req.body.description;
        ngroup.basedon = req.body.basedon;
        ngroup.save(function(err,docs) {
            if(err)
                res.send(err);
            res.send(docs);
        })
    });
    
    //join group
    app.post('/api/member', function(res, req) {
        console.log("adding membership")

        var mem = new Membership();
        mem._id = new ObjectId();
        mem.groupid = req.body.groupid;
        mem.memberid = req.body.memberid;
        mem.save(function(err, docs){
            if(err)
                res.send(err)
            res.send(docs);
        })
    })

    //unjoin group
    app.delete('/api/member', function(res, req) {
        Membership.remove({memberid:req.body.memberid, groupid:req.body.groupid}, function(err, docs){
            if(err)
                res.send(err)
            res.send(docs)
        })
    })

//Routes for saving and getting relationships
    //get all relationships where the requester has a certain id
    app.get('/api/relation/req/:req', function(req, res) {
        Relationship.find({requester:req.params.req}, function(err, rel) {
            if(err){
                res.send(err)
            } else {
                res.send(rel)
            }
        })
    })

    //get all relationships where the helper has a certian id
    app.get('/api/relation/help/:help', function(req, res) {
        Relationship.find({helper:req.params.help}, function(err, rel) {
                if(err){
                    res.send(err)
                } else {
                    res.send(rel)
                }
            })
    })

    //to check for relationships and create new if not there
    app.post('/api/relation/', function(req, res) {
        console.log('creating/updating relations')
        Relationship.find({requester:req.body.requester, helper:req.body.helper}, function(err, rel) {
            if (err){
                res.send(err)
            } else if (!rel && !err){
                console.log('creating new relation')
                relation = new Relationship();
                relation._id = new ObjectId();
                relation.requester = req.body.requester;
                relation.helper = req.body.helper;
                relation.save(function(err, r) {
                    if (err){
                        res.send(err);
                    } else{
                        res.send(r);
                    }
                })
            }
            else {
                console.log('updating relation')
                rel.n = rel.n + 1;
                rel.save(function(err, r) {
                    if (err){
                        res.send(err);
                    } else{
                        res.send(r);
                    }
                });
            }
        });
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
        });
    });

    //add comment to discussion
    app.post('/api/disc/', function(req, res){
        var comment = new Discussion();
        comment._id = new ObjectId();
        comment.comment = req.body.comment;
        comment.author = req.body.author;
        comment.requestid = req.body.requestid;

        comment.save(function(err, docs){
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
    app.get('/api/user/search/:search', function(req, res) {
        console.log("searching through users for expertise")
        User.find( {$text: {$search: req.params.search}},
                      {score: {$meta: "textScore" } })
            .sort({score: {$meta: "textScore" }})
            .exec(function(err, docs) {
                if(err)
                    res.send(err);
                res.json(docs);
            });
    });

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

app.get('/api/Project/alluploaded', function(req, res) {
 
        console.log("fetching Projects");
 
        //use mongoose to get all Projects in the database
        Project.find({uploaded:"yes"},function(err, Project){
            //if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err);
 
            res.json(Project);
        });
    });

app.get('/api/Project/id/:id', function(req, res){
    Project.find({_id: mongoose.Types.ObjectId(req.params.id)}, function(err, users){
            if(err)
                res.send(err);
            res.json(users);
            console.log(users);
        });
    // Project.findById(req.params.id, function(err, project) {
    //     if(err){ res.send(err); }
    //     res.send(project);
    // }
})
 
 
    app.post('/api/Project', function(req, res) {
        console.log("creating/updating Projects");
        console.log(req.body);

 
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
                    project.Userid = req.body.Userid;

                    project.save(function(err, proj) {
                      if (err)
                        {console.log('error');
                        console.log(err)
                        res.send(err);
                    }
                      else
                        {console.log(project);
                            console.log("abc");
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



    app.delete('/api/Project/:project_id', function(req, res) {
        console.log("deleting project")
        Project.remove({
            _id : req.params.project_id
        }, function(err, project) {
        res.send(project);
        });

    });



    app.get('/api/Project/search/:search', function(req, res) {
        console.log("searching through projects")
        Project.find( {$text: {$search: req.params.search}, uploaded:"yes" },
                      {score: {$meta: "textScore" } })
            .sort({score: {$meta: "textScore" }})
            .exec(function(err, docs) {
                if(err)
                    res.send(err);
                res.json(docs);
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
                        

            detail = new Detail();
            detail._id = new ObjectId();
            detail.ProjectID = req.body.ProjectID;
            detail.type = req.body.type;
            detail.sentence = req.body.sentence;
            detail.save(function(err, det) {
                if (err)
                {
                    console.log('error');
                    console.log(err);
                    res.send(err);
                }
                else
                {
                    console.log(detail);
                    console.log('success');
                    res.send(det);
                }
            })



        }

            else {
            // do your updates here
                        // project._id = req.body._id;
                detail.ProjectID =req.body.ProjectID;
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

    app.delete('/api/Detail/project_id/:project_id', function(req, res) {
        console.log("deleting details")
        Detail.remove({
            ProjectID : req.params.project_id

        }, function(err, detail) {
        res.send(detail);
        });
    });

        app.delete('/api/Detail/detail_id/:detail_id', function(req, res) {
        console.log("deleting detail")
        Detail.remove({
            _id : req.params.detail_id

        }, function(err, detail) {
        res.send(detail);
        });
    });