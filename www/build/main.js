webpackJsonp([0],{

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_points_points__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__points_points__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__earnpoints_earnpoints__ = __webpack_require__(378);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(nav, auth, p, modalCtrl) {
        var _this = this;
        this.nav = nav;
        this.auth = auth;
        this.p = p;
        this.modalCtrl = modalCtrl;
        this.p_comment = [];
        this.p_fixes = [];
        this.p_request = [];
        this.p_total = [];
        var info = this.auth.getUserInfo();
        this.username = info.fname;
        this.email = info.email;
        this.user = info;
        this.p.getpoints(this.user._id).then(function (data) {
            if (data) {
                _this.all_points = data;
                alert(_this.all_points.length);
                for (var i = 0; i < _this.all_points.length; i++) {
                    var comments = _this.all_points[i].a_comment;
                    var fix = _this.all_points[i].a_fix;
                    var req = _this.all_points[i].a_request;
                    _this.p_comment.push(comments * 5 + _this.p_comment.reduce(function (pv, cv) { return pv + cv; }, 0));
                    _this.p_fixes.push(fix * 10 + _this.p_fixes.reduce(function (pv, cv) { return pv + cv; }, 0));
                    _this.p_request.push(req * 2 + _this.p_request.reduce(function (pv, cv) { return pv + cv; }, 0));
                    // this.p_total.push(comments *5 + fix *10 + req *2)
                }
                alert(_this.p_comment);
            }
        });
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log("hello from homepage");
        var colors = {
            green: {
                fill: '#e0eadf',
                stroke: '#5eb84d',
            },
            lightBlue: {
                stroke: '#6fccdd',
            },
            darkBlue: {
                fill: '#92bed2',
                stroke: '#3282bf',
            },
            purple: {
                fill: '#8fa8c8',
                stroke: '#75539e',
            },
        };
        // var ctx = this.lineCanvas.getContext("2D");
        // ctx.canvas.
        this.lineChart = new __WEBPACK_IMPORTED_MODULE_4_chart_js__["Chart"](this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                        label: "New Fixes",
                        fill: false,
                        backgroundColor: colors.purple.fill,
                        pointBackgroundColor: colors.purple.stroke,
                        borderColor: colors.purple.stroke,
                        pointHighlightStroke: colors.purple.stroke,
                        borderCapStyle: 'butt',
                        data: this.p_fixes,
                    }, {
                        label: "Comments",
                        fill: false,
                        backgroundColor: colors.darkBlue.fill,
                        pointBackgroundColor: colors.darkBlue.stroke,
                        borderColor: colors.darkBlue.stroke,
                        pointHighlightStroke: colors.darkBlue.stroke,
                        borderCapStyle: 'butt',
                        data: this.p_comment,
                    }, {
                        label: "Answering Requests",
                        fill: false,
                        backgroundColor: colors.green.fill,
                        pointBackgroundColor: colors.green.stroke,
                        borderColor: colors.green.stroke,
                        pointHighlightStroke: colors.green.stroke,
                        data: this.p_request,
                    }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    yAxes: [{
                            stacked: true,
                        }]
                },
            }
        });
        // this.lineChart = new Chart(this.lineCanvas.nativeElement, {
        //         type: 'line',
        //         data: {
        //             labels: ["January", "February", "March", "April", "May", "June", "July"],
        //             datasets: [
        //                 {
        //                     label: "My First dataset",
        //                     fill: false,
        //                     lineTension: 0.1,
        //                     backgroundColor: "rgba(75,192,192,0.4)",
        //                     borderColor: "rgba(75,192,192,1)",
        //                     borderCapStyle: 'butt',
        //                     borderDash: [],
        //                     borderDashOffset: 0.0,
        //                     borderJoinStyle: 'miter',
        //                     pointBorderColor: "rgba(75,192,192,1)",
        //                     pointBackgroundColor: "#fff",
        //                     pointBorderWidth: 1,
        //                     pointHoverRadius: 5,
        //                     pointHoverBackgroundColor: "rgba(75,192,192,1)",
        //                     pointHoverBorderColor: "rgba(220,220,220,1)",
        //                     pointHoverBorderWidth: 2,
        //                     pointRadius: 1,
        //                     pointHitRadius: 10,
        //                     data: [65, 59, 80, 81, 56, 55, 40],
        //                     spanGaps: false,
        //                 }
        //             ]
        //         }
        //     });
    };
    HomePage.prototype.pointsmodal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__points_points__["a" /* PointsPage */]);
        modal.present();
    };
    HomePage.prototype.earnmodal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__earnpoints_earnpoints__["a" /* EarnpointsPage */]);
        modal.present();
    };
    HomePage.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function (succ) {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        });
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('lineCanvas'),
    __metadata("design:type", Object)
], HomePage.prototype, "lineCanvas", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="logout()">\n\n          <ion-icon name="log-out"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n \n\n<ion-content class="home" padding>\n\n  <h1>Welcome to TexConnect {{user.fname}} {{user.lname}}!</h1>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-row>\n\n          <ion-col col-1>\n\n          </ion-col>\n\n          <ion-col col-5>\n\n            <button ion-button (click)="pointsmodal()"><h3>You have 140 Points</h3></button>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <button ion-button (click)="earnmodal()"><h3>Earn More Points</h3></button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-card>\n\n          <ion-card-header>\n\n            Points History\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            <canvas #lineCanvas></canvas>\n\n          </ion-card-content>\n\n          <ion-card-content>\n\n<!--             <div>\n\n                <h2>Hello From Bar Clustered Component</h2>\n\n                <div id="chartdiv" style="width:100%; height:600px;"></div>\n\n            </div> -->\n\n          </ion-card-content>\n\n        </ion-card>\n\n<!--       </ion-col>\n\n      <ion-col col-1>\n\n      </ion-col> -->\n\n<!--       <ion-col col-3>\n\n        <br><br><br><br>\n\n        <h2>Leaderboard:</h2>\n\n          <ol style="font-size: 14">\n\n            <li>Ji Eun Kim</li>\n\n            <li>Lisa Yu</li>\n\n            <li>Wan-Yi Yan</li>\n\n            <li>Sneha Krishna</li>\n\n            <li>Bjoern Michele</li>\n\n            <li>Yi-Cheih Lee</li>\n\n            <li>Ann-Marie Roberts</li>\n\n            <li>Jeff Hibner</li>\n\n            <li>Aniket Kittur</li>\n\n            <li>Robert Kraut</li>\n\n          </ol>\n\n      </ion-col> -->\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-1>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <h3>You will become a Bosch certified D level expert by performing one of the above activities 50 times.</h3>\n\n      </ion-col>\n\n    </ion-row>\n\n        <h2>Leaderboard:</h2>\n\n          <ol style="font-size: 14">\n\n            <li>Ji Eun Kim</li>\n\n            <li>Lisa Yu</li>\n\n            <li>Wan-Yi Yan</li>\n\n            <li>Sneha Krishna</li>\n\n            <li>Bjoern Michele</li>\n\n            <li>Yi-Cheih Lee</li>\n\n            <li>Ann-Marie Roberts</li>\n\n            <li>Jeff Hibner</li>\n\n            <li>Aniket Kittur</li>\n\n            <li>Robert Kraut</li>\n\n          </ol>\n\n    <ion-row>\n\n\n\n    </ion-row>\n\n\n\n  </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__providers_points_points__["a" /* PointsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Chat */
/* unused harmony export Comment */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Chat = (function () {
    function Chat() {
    }
    return Chat;
}());

var Comment = (function () {
    function Comment() {
    }
    return Comment;
}());

var RequestsProvider = (function () {
    function RequestsProvider(http, auth) {
        this.http = http;
        this.auth = auth;
        console.log('Hello RequestsProvider Provider');
    }
    //where id is the _id of the user
    RequestsProvider.prototype.getallrequests = function (id) {
        var _this = this;
        var username = this.auth.getUserName();
        return new Promise(function (resolve) {
            _this.http.get('/api/question/reqid/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                if (data) {
                    _this.chats.push(data);
                    //for each request, get and store name of helper
                    for (var i = 0; i < _this.chats.length; i++) {
                        _this.chats[i].requestername = username;
                        _this.chats[i].helpername = _this.auth.getusernamebyid(_this.chats[i].helperID);
                    }
                }
                _this.http.get('/api/question/helpid/' + id)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    if (data) {
                        _this.chats.push(data);
                        //for each request, get and store name of requester
                        for (var i = 0; i < _this.chats.length; i++) {
                            _this.chats[i].helpername = username;
                            _this.chats[i].requestername = _this.auth.getusernamebyid(_this.chats[i].requesterID);
                        }
                        resolve(_this.chats);
                    }
                });
            });
        });
    };
    //where id is the _id of the chat
    RequestsProvider.prototype.getdiscussion = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('/api/disc/id/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.disc = data;
                resolve(_this.disc);
            });
        });
    };
    RequestsProvider.prototype.createrequest = function (info) {
        var _this = this;
        console.log(info);
        return new Promise(function (resolve) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post('/api/question', JSON.stringify(info), { headers: headers })
                .subscribe(function (res) {
                resolve(res);
            });
        });
    };
    RequestsProvider.prototype.assignhelper = function () { };
    return RequestsProvider;
}());
RequestsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */]])
], RequestsProvider);

//# sourceMappingURL=requests.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreasuresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_treasuresprovider_treasuresprovider__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__treasure_detail_treasure_detail__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__new_project_new_project__ = __webpack_require__(388);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the TreasuresPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TreasuresPage = (function () {
    function TreasuresPage(navCtrl, navParams, treasuresService, modalCtrl, auth, http, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.treasuresService = treasuresService;
        this.modalCtrl = modalCtrl;
        this.auth = auth;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.links = [];
        this.carlinks = [];
        this.buttonimg = [];
        this.Userprojects = [];
        this.UserID = this.auth.getUserid();
        console.log(this.auth.getUserid());
    }
    TreasuresPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TreasuresPage');
    };
    TreasuresPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log("Ion view enter");
        this.projects = [];
        this.Userprojects = [];
        this.treasuresService.gettreasures().then(function (data) {
            _this.projects = data;
            console.log(_this.projects);
            console.log("hier");
            for (var i = 0; i < _this.projects.length; i++) {
                if (_this.projects[i].Userid == _this.UserID)
                    _this.Userprojects.push(_this.projects[i]);
                for (var i_1 = 0; i_1 < _this.Userprojects.length; i_1++) {
                    _this.carlinks[i_1] = "https://s3.amazonaws.com/katcher/Brands/" + _this.Userprojects[i_1].brand + "/" + _this.Userprojects[i_1].model + ".jpg";
                    _this.links[i_1] = "https://s3.amazonaws.com/katcher/PID" + _this.Userprojects[i_1].PID + "/Photo/1.jpg";
                    if (_this.Userprojects[i_1].uploaded == "yes")
                        _this.buttonimg[i_1] = "cloud-done";
                    else
                        _this.buttonimg[i_1] = "cloud-upload";
                }
            }
        });
    };
    TreasuresPage.prototype.showDetails = function (project) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__treasure_detail_treasure_detail__["a" /* TreasureDetailPage */], project);
        //let modal = this.modalCtrl.create(TreasureDetailPage );
        //modal.present();
    };
    TreasuresPage.prototype.upload = function (project, i) {
        console.log("upload");
        console.log(i);
        if (project.uploaded == "yes") {
            project.uploaded = "no";
            this.buttonimg[i] = "cloud-upload";
            var toast = this.toastCtrl.create({
                message: 'Your project is now private',
                duration: 1500,
                position: 'middle'
            });
            toast.present();
        }
        else {
            project.uploaded = "yes";
            this.buttonimg[i] = "cloud-done";
            var toast = this.toastCtrl.create({
                message: 'You published your project',
                duration: 1500,
                position: 'middle'
            });
            toast.present();
        }
        this.treasuresService.posttreasures(project);
    };
    TreasuresPage.prototype.addProject = function () {
        var _this = this;
        //this.navCtrl.push(TreasuresEditDetailPage, {project,details});
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__new_project_new_project__["a" /* NewProjectPage */]);
        modal.onDidDismiss(function (data) {
            console.log(data);
            console.log('jetzt');
            //this.projects.push(data);
            var toast = _this.toastCtrl.create({
                message: 'Your project was created and will be shown on the next refresh of the page.',
                duration: 2000,
                position: 'middle'
            });
            toast.present();
        });
        modal.present();
        console.log("here12");
    };
    return TreasuresPage;
}());
TreasuresPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-treasures',template:/*ion-inline-start:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\pages\treasures\treasures.html"*/'<!--\n\n  Generated template for the TreasuresPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Treasures</ion-title>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-buttons end>\n\n      <button ion-button (click)="addProject()"><ion-icon name="add">Add Project</ion-icon></button>\n\n      </ion-buttons>\n\n\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="card-background-page">	\n\n\n\n\n\n	<ion-list>\n\n\n\n     <ion-grid>\n\n\n\n		 <ion-item *ngFor =" let Userproject of Userprojects; let i  = index ">\n\n     \n\n     <ion-row >\n\n	   <ion-col>  	\n\n     <ion-card (click)="showDetails(Userproject)" >\n\n     <img src={{this.carlinks[i]}}>   \n\n     <div class="card-title" >{{Userproject.year}} {{Userproject.brand}} {{Userproject.model}}</div>\n\n     <div class="card-subtitle">{{Userproject.errorcode}}</div>\n\n     </ion-card>\n\n     <button class="sharebutton" ion-button icon-only (click)="upload(Userproject, i)"><ion-icon name={{this.buttonimg[i]}}></ion-icon></button>\n\n     </ion-col>\n\n\n\n     \n\n     </ion-row >\n\n       \n\n     </ion-item></ion-grid>\n\n     </ion-list>\n\n     </ion-content>\n\n     '/*ion-inline-end:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\pages\treasures\treasures.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_treasuresprovider_treasuresprovider__["a" /* TreasuresProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_treasuresprovider_treasuresprovider__["a" /* TreasuresProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _g || Object])
], TreasuresPage);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=treasures.js.map

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 146;

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 189;

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterPage = (function () {
    function RegisterPage(nav, auth, alertCtrl) {
        this.nav = nav;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.createSuccess = false;
        this.registerCredentials = { email: '', password: '', fname: '', lname: '', shop: '' };
    }
    RegisterPage.prototype.register = function () {
        var _this = this;
        this.auth.register(this.registerCredentials).then(function (user) {
            _this.createSuccess = true;
            _this.showPopup("Success", "Account created. Please enter your email and password to get started");
        });
    };
    RegisterPage.prototype.showPopup = function (title, text) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        if (_this.createSuccess) {
                            _this.nav.popToRoot();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\pages\register\register.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>Register</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n \n\n<ion-content class="login-content" padding>\n\n  <div class="login-box">\n\n    \n\n    <form (ngSubmit)="register()" #registerForm="ngForm">\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-list inset>\n\n            \n\n            <ion-item>\n\n              <ion-input type="text" placeholder="Email" name="email" [(ngModel)]="registerCredentials.email" required></ion-input>\n\n            </ion-item>\n\n            \n\n            <ion-item>\n\n              <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n\n            </ion-item>\n\n            \n\n            <ion-item>\n\n              <ion-input type="text" placeholder="First Name" name="fname" [(ngModel)]="registerCredentials.fname" required></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n              <ion-input type="text" placeholder="Last Name" name="lname" [(ngModel)]="registerCredentials.lname" required></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n              <ion-input type="text" placeholder="Shop" name="shop" [(ngModel)]="registerCredentials.shop" required></ion-input>\n\n            </ion-item>\n\n\n\n            <!-- Need to convert to dropdowns and radio buttons\n\n            expertise\n\n            <ion-item>\n\n              <ion-input type="text" placeholder="First Name" name="fname" [(ngModel)]="registerCredentials.fname" required></ion-input>\n\n            </ion-item>\n\n\n\n            experience\n\n            <ion-item>\n\n              <ion-input type="text" placeholder="First Name" name="fname" [(ngModel)]="registerCredentials.fname" required></ion-input>\n\n            </ion-item>\n\n            -->\n\n\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      \n\n      <ion-row>\n\n        <ion-col class="signup-col">\n\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid">Register</button>\n\n        </ion-col>\n\n      </ion-row>\n\n      \n\n    </form>\n\n  </div>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n     <img src="../../assets/images/bosch_background.png" width=\'100%\' height="10px" />\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\pages\register\register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var User = (function () {
    function User(email, fname, lname, shop, pass) {
        this.email = email;
        this.fname = fname;
        this.lname = lname;
        this.shop = shop;
        this.password = pass;
    }
    return User;
}());

var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.data = null;
    }
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        if (credentials.email === null || credentials.password === null) {
            return Promise.reject("Please insert credentials");
        }
        return new Promise(function (resolve) {
            _this.http.get('/api/email/' + credentials.email)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                _this.currentUser = data[0];
                resolve(_this.data);
            });
        });
    };
    AuthService.prototype.register = function (credentials) {
        var _this = this;
        if (credentials.email === null || credentials.password === null) {
            return Promise.reject("Please fill all fields.");
        }
        return new Promise(function (resolve) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post('/api/user', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                _this.currentUser = res[0];
                resolve(res);
            });
            console.log("will this be visible?");
        });
    };
    AuthService.prototype.getUserInfo = function () {
        return this.currentUser;
    };
    AuthService.prototype.getUserid = function () {
        return this.currentUser._id;
    };
    AuthService.prototype.getUserName = function () {
        return this.currentUser.fname.toString + " " + this.currentUser.lname.toString;
    };
    AuthService.prototype.getusernamebyid = function (id) {
        var user;
        this.http.get('/api/user/id/' + id)
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            user = res[0];
        });
        return user.fname.toString + " " + user.lname.toString;
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].create(function (observer) {
            _this.currentUser = null;
            observer.next(true);
            observer.complete();
        });
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], AuthService);

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Points */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the PointsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var Points = (function () {
    function Points() {
    }
    return Points;
}());

var PointsProvider = (function () {
    function PointsProvider(http) {
        this.http = http;
        console.log('Hello PointsProvider Provider');
    }
    PointsProvider.prototype.getpoints = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('/api/points/id/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.points = data;
                resolve(_this.points);
            });
        });
    };
    PointsProvider.prototype.updatepoints = function (activity, n) {
        //get points for today
        //add activity points for that
    };
    return PointsProvider;
}());
PointsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], PointsProvider);

//# sourceMappingURL=points.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PointsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PointsPage = (function () {
    function PointsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PointsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PointsPage');
    };
    return PointsPage;
}());
PointsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-points',template:/*ion-inline-start:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\pages\points\points.html"*/'<!--\n\n  Generated template for the PointsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Points</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\nYou have 17 points\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\pages\points\points.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], PointsPage);

//# sourceMappingURL=points.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EarnpointsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EarnpointsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EarnpointsPage = (function () {
    function EarnpointsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EarnpointsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EarnpointsPage');
    };
    return EarnpointsPage;
}());
EarnpointsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-earnpoints',template:/*ion-inline-start:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\pages\earnpoints\earnpoints.html"*/'<!--\n\n  Generated template for the EarnpointsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>earnpoints</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\pages\earnpoints\earnpoints.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], EarnpointsPage);

//# sourceMappingURL=earnpoints.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-right>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.user = this.auth.getUserInfo();
        this.joined = new Date(this.user.joined).getTime().toString();
        this.lastactive = new Date(this.user.last_active).getTime().toString();
        this.fixes = this.user.total_fix.toString();
        this.helps = this.user.total_help.toString();
        this.total_points = this.user.total_points.toString();
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function (succ) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        });
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\pages\profile\profile.html"*/'<ion-header>\n\n     <img src="../../assets/images/bosch_background.png" width=\'100%\' height="10px" />\n\n  <ion-navbar color="dark">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Profile</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="logout()">\n\n          <ion-icon name="log-out"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n \n\n<ion-content class="home" padding>\n\n    <h3>{{user.fname}} {{user.lname}} </h3>\n\n    <h4>Points: {{total_points | number}}</h4>\n\n    <h4>Level: {{user.level }}</h4>\n\n    <h4>Expertise: {{user.expertise}}</h4>\n\n    <img width="100%" src="../../assets/images/default-profile-picture.png">>\n\n    <p>Joined: {{joindate | date:"MM/dd/yyyy"}}</p>\n\n    <p>Last Active: {{activedate | date:"MM/dd/yyyy"}}</p>\n\n    <p>New Fixes: {{fixes | number}}</p>\n\n    <p>Helps: {{helps | number}}</p>\n\n  <ion-card>\n\n    <h3>Recent Fix</h3>\n\n    Most recent fix will show up here\n\n  </ion-card>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n     <img src="../../assets/images/bosch_background.png" width=\'100%\' height="10px" />\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\pages\profile\profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SearchPage = (function () {
    function SearchPage(navCtrl, navParams, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage.prototype.search = function () {
    };
    SearchPage.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function (succ) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        });
    };
    return SearchPage;
}());
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\pages\search\search.html"*/'<!--\n\n  Generated template for the SearchPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Search</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="logout()">\n\n          <ion-icon name="log-out"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<form (ngSubmit)="search()" #nrequest="ngForm">\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-list inset>\n\n            \n\n            <ion-item>\n\n              <ion-input type="text" placeholder="Year" name="year" [(ngModel)]="nrequest.year"></ion-input>\n\n            </ion-item>\n\n            \n\n            <ion-item>\n\n              <ion-input type="password" placeholder="Make" name="make" [(ngModel)]="nrequest.make" ></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n              <ion-input type="text" placeholder="Model" name="Model" [(ngModel)]="nrequest.model"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n              <ion-input type="text" placeholder="Error Codes" name="error" [(ngModel)]="nrequest.error"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n            	<ion-textarea [(ngModel)]=\'nrequest.symptoms\' name="symptoms" placeholder="Describe the issues that you are seeing. What have you already tried to do to solve the issue? What components have you already checked?"></ion-textarea>\n\n        	</ion-item>\n\n            \n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col class="signup-col">\n\n          <button ion-button class="submit-btn" full type="submit" >Search</button>\n\n        </ion-col>\n\n      </ion-row>\n\n      \n\n    </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\pages\search\search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__onechat_onechat__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_request_new_request__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_requests_requests__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChatPage = (function () {
    function ChatPage(navCtrl, navParams, auth, ques) {
        // If we navigated to this page, we will have an item available as a nav param
        // this.selectedItem = navParams.get('item');
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.ques = ques;
        // Let's populate this page with some filler content for funzies
        this.userid = this.auth.getUserid();
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                author: 'SK' + i,
                title: '2014 Honda Civic',
                note: 'These are the symptoms',
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatPage');
    };
    ChatPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log("ionview did enter chatpage");
        this.ques.getallrequests(this.userid).then(function (data) {
            if (data) {
                _this.chats = data;
            }
        })
            .catch(function (err) {
            alert(err);
        });
    };
    ChatPage.prototype.itemTapped = function (event, item) {
        var _this = this;
        //get one discussion and push to page
        this.ques.getdiscussion(item._id)
            .then(function (data) {
            if (data) {
                _this.disc = data;
            }
        })
            .catch(function (err) {
            alert(err);
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__onechat_onechat__["a" /* OneChatPage */], { chat: item });
    };
    ChatPage.prototype.newrequest = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__new_request_new_request__["a" /* NewRequestPage */]);
    };
    ChatPage.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function (succ) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        });
    };
    return ChatPage;
}());
ChatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-chat',template:/*ion-inline-start:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\pages\chat\chat.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Request History</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="logout()">\n\n          <ion-icon name="log-out"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<button ion-button (click)=\'newrequest()\'>Create New Request</button>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of chats" (click)="itemTapped($event, item)">\n\n      <!-- <ion-icon [name]="item.icon" item-left></ion-icon> -->\n\n      <ion-row><b>{{item.title}}</b></ion-row>\n\n      <ion-row>\n\n	      {{item.author}} is helping you\n\n	  </ion-row>\n\n      <div class="date" item-right>\n\n        Opened: 1/21/17\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\pages\chat\chat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_6__providers_requests_requests__["a" /* RequestsProvider */]])
], ChatPage);

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OneChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OnechatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var OneChatPage = (function () {
    function OneChatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.chat = navParams.get('chat');
        //in reality need to get the chat info from the database
        this.comments = [];
        for (var i = 1; i < 11; i++) {
            this.comments.push({
                author: 'SK' + i,
                date: '12/1/17',
                comment: 'testing'
            });
        }
    }
    OneChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OnechatPage');
    };
    OneChatPage.prototype.addcomment = function () {
        //add comment to db
        //get all the coments again
        //this.navCtrl.push(OneChatPage,{chat:this.chat});
    };
    return OneChatPage;
}());
OneChatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-onechat',template:/*ion-inline-start:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\pages\onechat\onechat.html"*/'<!--\n\n  Generated template for the OnechatPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{chat.title}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="logout()">\n\n          <ion-icon name="log-out"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<ion-item>\n\n		{{chat.note}}\n\n	</ion-item>\n\n  <ion-list>\n\n    <ion-item *ngFor="let c of comments">\n\n    	{{c.author}}:{{c.comment}}\n\n    </ion-item>\n\n  </ion-list>  	\n\n\n\n  	<form (ngSubmit)="addcomment()" #newcommentform="ngForm">\n\n      <ion-row>\n\n        <ion-col>\n\n        	<ion-textarea name="ncomment" [(ngModel)]="ncomment"></ion-textarea>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col class="signup-col">\n\n          <button ion-button class="submit-btn" full type="submit">Send</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\pages\onechat\onechat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], OneChatPage);

//# sourceMappingURL=onechat.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewRequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_requests_requests__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_treasuresprovider_treasuresprovider__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the NewRequestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var NewRequestPage = (function () {
    function NewRequestPage(navCtrl, navParams, req, tres, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.req = req;
        this.tres = tres;
        this.auth = auth;
        this.nrequest = { year: '', brand: '', model: '', error: '', symptoms: '' };
        this.nrequestq = { content: '', requesterid: '', helperid: '', projectid: '' };
    }
    NewRequestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewRequestPage');
    };
    NewRequestPage.prototype.createnewproj = function () {
        this.project = this.tres.posttreasures(this.nrequest);
    };
    NewRequestPage.prototype.send = function () {
        var _this = this;
        //create new project
        console.log(this.nrequest);
        this.tres.posttreasures(this.nrequest).then(function (data) {
            _this.project = data;
            console.log(JSON.stringify(_this.project));
            _this.nrequestq.requesterid = _this.auth.getUserid();
            _this.nrequestq.projectid = _this.project._id;
            console.log(_this.nrequestq);
            //create new request
            _this.req.createrequest(_this.nrequestq).then(function (data) {
                console.log("before pop");
                _this.navCtrl.pop();
            });
        });
    };
    return NewRequestPage;
}());
NewRequestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-new-request',template:/*ion-inline-start:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\pages\new-request\new-request.html"*/'<!--\n\n  Generated template for the NewRequestPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>NewRequest</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<form (ngSubmit)="send()" #nreqform="ngForm">\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-list inset>\n\n            \n\n            <ion-item>\n\n              <ion-input type="text" placeholder="Year" name="year" [(ngModel)]="nrequest.year"></ion-input>\n\n            </ion-item>\n\n            \n\n            <ion-item>\n\n              <ion-input type="password" placeholder="Make" name="brand" [(ngModel)]="nrequest.brand" ></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n              <ion-input type="text" placeholder="Model" name="model" [(ngModel)]="nrequest.model"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n              <ion-input type="text" placeholder="Error Codes" name="error" [(ngModel)]="nrequest.error"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n            	<ion-textarea [(ngModel)]=\'nrequest.symptoms\' name="symptoms" placeholder="Describe the issues that you are seeing."></ion-textarea>\n\n        	  </ion-item>\n\n\n\n            <ion-item>\n\n              <ion-textarea [(ngModel)]=\'nrequestq.content\' name="content" placeholder="What help do you need? Please include what have you already tried to do to solve the issue and what components you have already checked?"></ion-textarea>\n\n            </ion-item>\n\n            \n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col class="signup-col">\n\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!nreqform.form.valid">Ask for Help</button>\n\n        </ion-col>\n\n      </ion-row>\n\n      \n\n    </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\pages\new-request\new-request.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_requests_requests__["a" /* RequestsProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_treasuresprovider_treasuresprovider__["a" /* TreasuresProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthService */]])
], NewRequestPage);

//# sourceMappingURL=new-request.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreasureDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_treasuresprovider_treasuresprovider__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_treasuresdetailprovider_treasuresdetailprovider__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_treasures_edit_detail_treasures_edit_detail__ = __webpack_require__(387);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TreasuresPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TreasureDetailPage = (function () {
    function TreasureDetailPage(navCtrl, treasuresService, alertCtrl, navParams, treasuresDetailService, toastCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.treasuresService = treasuresService;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.treasuresDetailService = treasuresDetailService;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.links = [];
        this.completestatus = "error";
        this.projectdetails = [];
        this.projectproblems = [];
        this.projectconclusions = [];
        this.projectdiagnosis = [];
        this.projectsymptoms = [];
        this.projectuploadstatus = "cloud-upload";
        this.completestatusimg = "radio-button-off";
        this.ProjID = navParams.data;
    }
    TreasureDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad TreasuresDetailPage');
        console.log(this.ProjID);
        this.treasuresDetailService.gettreasuresdetail().then(function (data) {
            _this.details = data;
            for (var i = 0; i < _this.details.length; i++) {
                if (_this.details[i].ProjectID == _this.ProjID._id) {
                    _this.projectdetails.push(_this.details[i]);
                    if (_this.details[i].type == "problem")
                        _this.projectproblems.push(_this.details[i]);
                    else if (_this.details[i].type == "conclusion")
                        _this.projectconclusions.push(_this.details[i]);
                    else if (_this.details[i].type == "diagnosis")
                        _this.projectdiagnosis.push(_this.details[i]);
                    else if (_this.details[i].type == "symptom")
                        _this.projectsymptoms.push(_this.details[i]);
                }
            }
            for (var i = 1; i <= _this.ProjID.numofpics; i++) {
                _this.links[i] = "https://s3.amazonaws.com/katcher/" + _this.ProjID._id + "/Photo/" + i + ".jpg";
                console.log(_this.links[i]);
            }
        });
        if (this.ProjID.complete == "yes") {
            this.completestatus = "Finished";
            this.completestatusimg = "checkmark-circle";
        }
        else {
            this.completestatus = "Pending";
            this.completestatusimg = "radio-button-off";
        }
        if (this.ProjID.uploaded == "yes")
            this.projectuploadstatus = "cloud-done";
        else
            this.projectuploadstatus = "cloud-upload";
    };
    TreasureDetailPage.prototype.upload1 = function (project) {
        console.log("upload");
        if (project.uploaded == "yes") {
            project.uploaded = "no";
            this.projectuploadstatus = "cloud-upload";
            var toast = this.toastCtrl.create({
                message: 'Your project is now private',
                duration: 1500,
                position: 'middle'
            });
            toast.present();
        }
        else {
            project.uploaded = "yes";
            this.projectuploadstatus = "cloud-done";
            var toast = this.toastCtrl.create({
                message: 'You published your project',
                duration: 1500,
                position: 'middle'
            });
            toast.present();
        }
        this.treasuresService.posttreasures(project);
    };
    TreasureDetailPage.prototype.complete = function (project) {
        console.log("complete");
        if (project.complete == "yes") {
            project.complete = "no";
            this.completestatusimg = "radio-button-off";
            this.completestatus = "Pending";
            var toast = this.toastCtrl.create({
                message: 'The status of your project is no longer complete',
                duration: 1500,
                position: 'middle'
            });
            toast.present();
        }
        else {
            project.complete = "yes";
            this.completestatusimg = "checkmark-circle";
            this.completestatus = "Finished";
            var toast = this.toastCtrl.create({
                message: 'Congratulations! You completed your project',
                duration: 1500,
                position: 'middle'
            });
            toast.present();
        }
        this.treasuresService.posttreasures(project);
    };
    TreasureDetailPage.prototype.editDetails = function (project, details) {
        //this.navCtrl.push(TreasuresEditDetailPage, {project,details});
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__pages_treasures_edit_detail_treasures_edit_detail__["a" /* TreasuresEditDetailPage */], { project: project, details: details });
        modal.present();
        console.log("here12");
    };
    TreasureDetailPage.prototype.deleteproject = function (id) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Delete',
            message: 'Do you want to permanently delete this project and all of the related data?',
            buttons: [
                {
                    text: 'delete',
                    handler: function () {
                        _this.treasuresService.deleteproject(id);
                    }
                },
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('cancel clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    return TreasureDetailPage;
}());
TreasureDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-treasure-detail',template:/*ion-inline-start:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\pages\treasure-detail\treasure-detail.html"*/'<!--\n\n  Generated template for the TreasuresPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Details</ion-title>\n\n        \n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n      <ion-card>\n\n        <ion-card-content>\n\n\n\n            <ion-fab top right>\n\n              <button ion-fab><ion-icon name="construct"></ion-icon></button>\n\n              <ion-fab-list>\n\n                <button ion-fab color="danger" (click)="editDetails(ProjID,projectdetails)"><ion-icon name="create"></ion-icon></button>\n\n                <button ion-fab color="primary" (click)="complete(ProjID)"><ion-icon name={{this.completestatusimg}}></ion-icon></button>\n\n                <button ion-fab color="green" (click)="upload1(ProjID)"><ion-icon name={{this.projectuploadstatus}}></ion-icon></button>\n\n                <button ion-fab color="danger" (click)="deleteproject(ProjID._id)"><ion-icon name="trash"></ion-icon></button>\n\n                </ion-fab-list>\n\n                </ion-fab>\n\n\n\n       \n\n            <ion-card-title>\n\n                [{{this.completestatus}}] {{ProjID.year}} {{this.ProjID.brand}} {{this.ProjID.model}} \n\n            </ion-card-title>\n\n            <p>Error Code: {{this.ProjID.errorcode}}</p>         \n\n            <ul>Symptoms:\n\n            <li *ngFor =" let projectsymptom of projectsymptoms; let i = index ">{{this.projectsymptom.sentence}} </li>  \n\n            </ul>\n\n            <p></p>\n\n            <ul>Diagnosis:\n\n            <li *ngFor =" let projectdiagnosi of projectdiagnosis; let i = index ">{{this.projectdiagnosi.sentence}} </li>  \n\n            </ul>\n\n            <p></p>\n\n            <ul>conclusion:\n\n            <li *ngFor =" let projectconclusion of projectconclusions; let i = index ">{{this.projectconclusion.sentence}} </li>  \n\n            </ul>\n\n\n\n             <p *ngFor =" let link of links; let i = index ">\n\n            <img src={{this.links[i]}}/>\n\n            </p>\n\n            </ion-card-content>\n\n            </ion-card>\n\n            </ion-content>\n\n\n\n     '/*ion-inline-end:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\pages\treasure-detail\treasure-detail.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_treasuresprovider_treasuresprovider__["a" /* TreasuresProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_treasuresprovider_treasuresprovider__["a" /* TreasuresProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_treasuresdetailprovider_treasuresdetailprovider__["a" /* TreasuresDetailProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_treasuresdetailprovider_treasuresdetailprovider__["a" /* TreasuresDetailProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]) === "function" && _g || Object])
], TreasureDetailPage);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=treasure-detail.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreasuresDetailProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the TreasuresProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var TreasuresDetailProvider = (function () {
    function TreasuresDetailProvider(http) {
        this.http = http;
        console.log('Hello TreasuresDetailProvider Provider');
        this.data = null;
    }
    TreasuresDetailProvider.prototype.gettreasuresdetail = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('/api/Detail')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
                console.log(data);
            });
        });
    };
    return TreasuresDetailProvider;
}());
TreasuresDetailProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], TreasuresDetailProvider);

//# sourceMappingURL=treasuresdetailprovider.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreasuresEditDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_treasuresprovider_treasuresprovider__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TreasuresEditDetailPage = (function () {
    function TreasuresEditDetailPage(navCtrl, navParams, viewCtrl, alertCtrl, treasuresService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.treasuresService = treasuresService;
        this.projectproblems = [];
        this.projectconclusions = [];
        this.projectdiagnosis = [];
        this.projectsymptoms = [];
        this.newprojectproblems = [];
        this.newprojectconclusions = [];
        this.newprojectdiagnosis = [];
        this.newprojectsymptoms = [];
        this.ProjID = navParams.get('project');
        this.projdetails = navParams.get('details');
    }
    TreasuresEditDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TreasuresEditDetailPage');
        this.newyear = this.ProjID.year;
        this.newbrand = this.ProjID.brand;
        this.newmodel = this.ProjID.model;
        this.newerrorcode = this.ProjID.errorcode;
        console.log(this.ProjID);
        console.log(this.projdetails);
        for (var i = 0; i < this.projdetails.length; i++) {
            if (this.projdetails[i].type == "problem") {
                this.projectproblems.push(this.projdetails[i]);
                this.newprojectproblems.push(this.projdetails[i].sentence);
            }
            else if (this.projdetails[i].type == "conclusion") {
                this.projectconclusions.push(this.projdetails[i]);
                this.newprojectconclusions.push(this.projdetails[i].sentence);
            }
            else if (this.projdetails[i].type == "diagnosis") {
                this.projectdiagnosis.push(this.projdetails[i]);
                this.newprojectdiagnosis.push(this.projdetails[i].sentence);
            }
            else if (this.projdetails[i].type == "symptom") {
                this.projectsymptoms.push(this.projdetails[i]);
                this.newprojectsymptoms.push(this.projdetails[i].sentence);
            }
        }
    };
    TreasuresEditDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    TreasuresEditDetailPage.prototype.save = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Save',
            message: 'Do you want to save your changes and overwrite your data?',
            buttons: [
                {
                    text: 'Save',
                    handler: function () {
                        if (_this.newyear != _this.ProjID.year || _this.newbrand != _this.ProjID.brand || _this.newmodel != _this.ProjID.model || _this.newerrorcode != _this.ProjID.errorcode) {
                            _this.ProjID.year = _this.newyear;
                            _this.ProjID.brand = _this.newbrand;
                            _this.ProjID.model = _this.newmodel;
                            _this.ProjID.errorcode = _this.newerrorcode;
                            console.log(_this.ProjID);
                            _this.treasuresService.posttreasures(_this.ProjID);
                        }
                        for (var i = 0; i < _this.newprojectproblems.length; i++) {
                            if (_this.newprojectproblems[i] != _this.projectproblems[i].sentence && _this.newprojectproblems[i] != "") {
                                _this.projectproblems[i].sentence = _this.newprojectproblems[i];
                                var projdetails = {
                                    _id: _this.projectproblems[i]._id,
                                    ProjectID: _this.ProjID._id,
                                    type: "problem",
                                    sentence: _this.newprojectproblems[i],
                                };
                                _this.treasuresService.postdetails(projdetails);
                            }
                            else if (_this.newprojectproblems[i] == "") {
                            }
                        }
                        for (var i = 0; i < _this.projectconclusions.length; i++) {
                            if (_this.newprojectconclusions[i] != _this.projectconclusions[i].sentence && _this.newprojectconclusions[i] != "") {
                                _this.projectconclusions[i].sentence = _this.newprojectconclusions[i];
                                var projdetails = {
                                    _id: _this.projectconclusions[i]._id,
                                    ProjectID: _this.ProjID._id,
                                    type: "conclusion",
                                    sentence: _this.newprojectconclusions[i],
                                };
                                _this.treasuresService.postdetails(projdetails);
                            }
                            else if (_this.newprojectconclusions[i] == "" && _this.projectconclusions[i]._id != null) {
                                _this.treasuresService.deletedetails(_this.projectconclusions[i]._id);
                            }
                        }
                        for (var i = 0; i < _this.projectdiagnosis.length; i++) {
                            if (_this.newprojectdiagnosis[i] != _this.projectdiagnosis[i].sentence && _this.newprojectdiagnosis[i] != "") {
                                _this.projectdiagnosis[i].sentence = _this.newprojectdiagnosis[i];
                                var projdetails = {
                                    _id: _this.projectdiagnosis[i]._id,
                                    ProjectID: _this.ProjID._id,
                                    type: "diagnosis",
                                    sentence: _this.newprojectdiagnosis[i],
                                };
                                _this.treasuresService.postdetails(projdetails);
                            }
                            else if (_this.newprojectdiagnosis[i] == "" && _this.projectdiagnosis[i]._id != null) {
                                _this.treasuresService.deletedetails(_this.projectdiagnosis[i]._id);
                            }
                        }
                        for (var i = 0; i < _this.projectsymptoms.length; i++) {
                            if (_this.newprojectsymptoms[i] != _this.projectsymptoms[i].sentence && _this.newprojectsymptoms[i] != "") {
                                console.log("a");
                                _this.projectsymptoms[i].sentence = _this.newprojectsymptoms[i];
                                var projdetails = {
                                    _id: _this.projectsymptoms[i]._id,
                                    ProjectID: _this.ProjID._id,
                                    type: "symptom",
                                    sentence: _this.newprojectsymptoms[i],
                                };
                                _this.treasuresService.postdetails(projdetails);
                            }
                            else if (_this.newprojectsymptoms[i] == "" && _this.projectsymptoms[i]._id != null) {
                                _this.treasuresService.deletedetails(_this.projectsymptoms[i]._id);
                            }
                        }
                        _this.viewCtrl.dismiss();
                    }
                },
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('cancel clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    TreasuresEditDetailPage.prototype.addsymptom = function () {
        this.newprojectsymptoms[this.newprojectsymptoms.length] = "";
        this.projectsymptoms.push({
            ProjectID: this.ProjID._id,
            type: "symptom",
            sentence: "",
        });
    };
    TreasuresEditDetailPage.prototype.adddiagnosis = function () {
        this.newprojectdiagnosis[this.newprojectdiagnosis.length] = "";
        this.projectdiagnosis.push({
            ProjectID: this.ProjID._id,
            type: "symptom",
            sentence: "",
        });
    };
    TreasuresEditDetailPage.prototype.addconclusion = function () {
        this.newprojectconclusions[this.newprojectconclusions.length] = "";
        this.projectconclusions.push({
            ProjectID: this.ProjID._id,
            type: "conclusion",
            sentence: "",
        });
    };
    return TreasuresEditDetailPage;
}());
TreasuresEditDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-treasures-edit-detail',template:/*ion-inline-start:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\pages\treasures-edit-detail\treasures-edit-detail.html"*/'<!--\n\n  Generated template for the TreasuresEditDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n   	<ion-title>Edit</ion-title>\n\n   	\n\n   	  <button ion-button top right color="light" (click)="dismiss()">\n\n          <ion-icon name="close"></ion-icon>\n\n      </button>\n\n\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n     \n\n<ion-list>\n\n       \n\n            <ion-item>\n\n            <ion-label stacked>\n\n                Year\n\n            </ion-label>\n\n            <ion-input type="number" placeholder="{{this.newyear}}"    [(ngModel)]="this.newyear"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n            <ion-label stacked>\n\n                Brand\n\n            </ion-label>\n\n            <ion-input type="text" placeholder="{{this.newbrand}}" [(ngModel)]="this.newbrand"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n            <ion-label stacked>\n\n                Model\n\n            </ion-label>\n\n            <ion-input type="text" placeholder="{{this.newmodel}}" [(ngModel)]="this.newmodel"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n            <ion-label stacked>\n\n                Error Code\n\n            </ion-label>\n\n            <ion-input type="text" placeholder="{{this.newerrorcode}}" [(ngModel)]="this.newerrorcode"></ion-input>\n\n            </ion-item>\n\n</ion-list>\n\n\n\n     \n\n            \n\n<ion-list>\n\n        	<ion-item *ngFor =" let projectsymptom of projectsymptoms; let i = index ">\n\n        		<ion-label stacked>Symptom: {{i+1}}</ion-label>\n\n        		<ion-input type="text" placeholder="{{newprojectsymptoms[i]}}"     [(ngModel)]="newprojectsymptoms[i]"></ion-input>\n\n        	</ion-item>\n\n        	<button ion-button (click)="addsymptom()"><ion-icon name="add" >Add Symptom</ion-icon></button>\n\n			<ion-item><ion-input type="text" placeholder="{{newprojectsymptoms[i]}}"     [(ngModel)]="newprojectsymptoms[i]"></ion-input></ion-item>\n\n			<ion-item *ngFor =" let projectdiagnosi of projectdiagnosis; let i = index ">\n\n        		<ion-label stacked>Diagnosis Step: {{i+1}}</ion-label>\n\n        		<ion-input type="text" placeholder="{{newprojectdiagnosis[i]}}"   [(ngModel)]="newprojectdiagnosis[i]"></ion-input>	\n\n        	</ion-item>\n\n        	<button ion-button (click)="adddiagnosis()"><ion-icon name="add" >Add Diagnosis</ion-icon></button>\n\n        	<ion-item><ion-input type="text" placeholder="{{newprojectdiagnosis[i]}}"   [(ngModel)]="newprojectdiagnosis[i]"></ion-input></ion-item>\n\n        	<ion-item *ngFor = " let projectconclusion of projectconclusions; let i = index ">\n\n        		<ion-label stacked>Conclusion: {{i+1}}</ion-label>\n\n        		<ion-input type="text" placeholder="{{newprojectconclusions[i]}}"   [(ngModel)]="newprojectconclusions[i]"></ion-input>\n\n        	</ion-item>\n\n        	<ion-item><ion-input type="text" placeholder="{{newprojectconclusions[i]}}"   [(ngModel)]="newprojectconclusions[i]"></ion-input></ion-item>\n\n        	<button ion-button (click)="addconclusion()"><ion-icon name="add" >Add Conclusion</ion-icon></button>\n\n\n\n\n\n</ion-list>  \n\n\n\n<ion-item>\n\n<button ion-button full large round (click)="save()">Save</button>\n\n</ion-item>  \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\pages\treasures-edit-detail\treasures-edit-detail.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__providers_treasuresprovider_treasuresprovider__["a" /* TreasuresProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_treasuresprovider_treasuresprovider__["a" /* TreasuresProvider */]) === "function" && _e || Object])
], TreasuresEditDetailPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=treasures-edit-detail.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewProjectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_treasuresprovider_treasuresprovider__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TreasuresEditDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var NewProjectPage = (function () {
    function NewProjectPage(navCtrl, navParams, viewCtrl, auth, alertCtrl, treasuresService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.treasuresService = treasuresService;
        this.projectproblems = [];
        this.projectconclusions = [];
        this.projectdiagnosis = [];
        this.projectsymptoms = [];
        this.newprojectproblems = [];
        this.newprojectconclusions = [];
        this.newprojectdiagnosis = [];
        this.newprojectsymptoms = [];
        this.UserID = this.auth.getUserid();
    }
    NewProjectPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TreasuresEditDetailPage');
    };
    NewProjectPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    NewProjectPage.prototype.save = function () {
        var _this = this;
        this.details = [];
        var confirm = this.alertCtrl.create({
            title: 'Save',
            message: 'Do you want to save your new project?',
            buttons: [
                {
                    text: 'Save',
                    handler: function () {
                        var newproj = {
                            Userid: _this.UserID,
                            year: _this.newyear,
                            brand: _this.newbrand,
                            model: _this.newmodel,
                            errorcode: _this.newerrorcode,
                        };
                        newproj.Userid = _this.UserID;
                        newproj.year = _this.newyear;
                        newproj.brand = _this.newbrand;
                        newproj.model = _this.newmodel;
                        newproj.errorcode = _this.newerrorcode;
                        console.log(newproj);
                        _this.treasuresService.posttreasures(newproj).then(function (data) {
                            _this.ProjID = data;
                            console.log(_this.ProjID);
                            for (var i = 0; i < _this.projectproblems.length; i++) {
                                if (_this.newprojectproblems[i] != "") {
                                    var projdetails = {
                                        ProjectID: _this.ProjID._id,
                                        type: "problem",
                                        sentence: _this.newprojectproblems[i],
                                    };
                                    _this.treasuresService.postdetails(projdetails);
                                }
                            }
                            for (var i = 0; i < _this.projectconclusions.length; i++) {
                                if (_this.newprojectconclusions[i] != "") {
                                    var projdetails = {
                                        ProjectID: _this.ProjID._id,
                                        type: "conclusion",
                                        sentence: _this.newprojectconclusions[i],
                                    };
                                    _this.treasuresService.postdetails(projdetails);
                                }
                            }
                            for (var i = 0; i < _this.projectdiagnosis.length; i++) {
                                if (_this.newprojectdiagnosis[i] != "") {
                                    var projdetails = {
                                        ProjectID: _this.ProjID._id,
                                        type: "diagnosis",
                                        sentence: _this.newprojectdiagnosis[i],
                                    };
                                    _this.treasuresService.postdetails(projdetails);
                                }
                            }
                            for (var i = 0; i < _this.projectsymptoms.length; i++) {
                                if (_this.newprojectsymptoms[i] != "") {
                                    var projdetails = {
                                        ProjectID: _this.ProjID._id,
                                        type: "symptom",
                                        sentence: _this.newprojectsymptoms[i],
                                    };
                                    _this.treasuresService.postdetails(projdetails);
                                }
                            }
                            _this.viewCtrl.dismiss(data);
                        });
                    }
                },
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('cancel clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    NewProjectPage.prototype.addsymptom = function () {
        this.newprojectsymptoms[this.newprojectsymptoms.length] = "";
        this.projectsymptoms[this.projectsymptoms.length] = "";
    };
    NewProjectPage.prototype.adddiagnosis = function () {
        this.newprojectdiagnosis[this.newprojectdiagnosis.length] = "";
        this.projectdiagnosis[this.projectdiagnosis.length] = "";
    };
    NewProjectPage.prototype.addconclusion = function () {
        this.newprojectconclusions[this.newprojectconclusions.length] = "";
        this.projectconclusions[this.projectconclusions.length] = "";
    };
    return NewProjectPage;
}());
NewProjectPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-new-project',template:/*ion-inline-start:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\pages\new-project\new-project.html"*/'<ion-header>\n\n  <ion-navbar>\n   	<ion-title>Add a new Project</ion-title>\n   	\n   	  <button ion-button top right color="light" (click)="dismiss()">\n          <ion-icon name="close"></ion-icon>\n      </button>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n     \n<ion-list>\n       \n            <ion-item>\n            <ion-label stacked>\n                Year\n            </ion-label>\n            <ion-input type="number" placeholder="Enter Year"    [(ngModel)]="this.newyear"></ion-input>\n            </ion-item>\n\n            <ion-item>\n            <ion-label stacked>\n                Brand\n            </ion-label>\n            <ion-input type="text" placeholder="Enter Brand" [(ngModel)]="this.newbrand"></ion-input>\n            </ion-item>	\n\n            <ion-item>\n            <ion-label stacked>\n                Model\n            </ion-label>\n            <ion-input type="text" placeholder="Enter Model" [(ngModel)]="this.newmodel"></ion-input>\n            </ion-item>\n\n            <ion-item>\n            <ion-label stacked>\n                Error Code\n            </ion-label>\n            <ion-input type="text" placeholder="Enter Error Code" [(ngModel)]="this.newerrorcode"></ion-input>\n            </ion-item>\n</ion-list>\n\n     \n<ion-list>\n\n			\n        	<ion-item *ngFor =" let projectsymptom of projectsymptoms; let i = index ">\n        		<ion-label stacked>Symptom: {{i+1}}</ion-label>\n        		<ion-input type="text" placeholder="Enter Symptoms here"     [(ngModel)]="this.newprojectsymptoms[i]"></ion-input>\n        	</ion-item>\n        	<button ion-button (click)="addsymptom()"><ion-icon name="add" >Add Symptom</ion-icon></button>\n			\n			<ion-item *ngFor =" let projectdiagnosi of projectdiagnosis; let i = index ">\n        		<ion-label stacked>Diagnosis Step: {{i+1}}</ion-label>\n        		<ion-input type="text" placeholder="Enter Diagnosis"   [(ngModel)]="this.newprojectdiagnosis[i]"></ion-input>	\n        	</ion-item>\n        	<button ion-button (click)="adddiagnosis()"><ion-icon name="add" >Add Diagnosis</ion-icon></button>\n        	\n        	<ion-item *ngFor =" let projectconclusion of projectconclusions; let i = index ">\n        		<ion-label stacked>Conclusion: {{i+1}}</ion-label>\n        		<ion-input type="text" placeholder="Enter Conclusion"   [(ngModel)]="this.newprojectconclusions[i]"></ion-input>\n        	</ion-item>\n        	<button ion-button (click)="addconclusion()"><ion-icon name="add" >Add Conclusion</ion-icon></button>\n        	\n\n<ion-item>\n<button ion-button full large round (click)="save()">Save</button>\n</ion-item>  \n\n'/*ion-inline-end:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\pages\new-project\new-project.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__providers_treasuresprovider_treasuresprovider__["a" /* TreasuresProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_treasuresprovider_treasuresprovider__["a" /* TreasuresProvider */]) === "function" && _f || Object])
], NewProjectPage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=new-project.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(394);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_treasures_treasures__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_treasure_detail_treasure_detail__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_treasures_edit_detail_treasures_edit_detail__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_register_register__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_search_search__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_chat_chat__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_onechat_onechat__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_new_request_new_request__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_points_points__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_earnpoints_earnpoints__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_new_project_new_project__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_auth_service_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_requests_requests__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_points_points__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_treasuresprovider_treasuresprovider__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_treasuresdetailprovider_treasuresdetailprovider__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_treasureseditprovider_treasureseditprovider__ = __webpack_require__(751);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_onechat_onechat__["a" /* OneChatPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_new_request_new_request__["a" /* NewRequestPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_points_points__["a" /* PointsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_earnpoints_earnpoints__["a" /* EarnpointsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_treasures_treasures__["a" /* TreasuresPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_treasure_detail_treasure_detail__["a" /* TreasureDetailPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_treasures_edit_detail_treasures_edit_detail__["a" /* TreasuresEditDetailPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_new_project_new_project__["a" /* NewProjectPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_onechat_onechat__["a" /* OneChatPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_new_request_new_request__["a" /* NewRequestPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_points_points__["a" /* PointsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_earnpoints_earnpoints__["a" /* EarnpointsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_treasures_treasures__["a" /* TreasuresPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_treasure_detail_treasure_detail__["a" /* TreasureDetailPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_treasures_edit_detail_treasures_edit_detail__["a" /* TreasuresEditDetailPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_new_project_new_project__["a" /* NewProjectPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_22__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_23__providers_requests_requests__["a" /* RequestsProvider */],
            __WEBPACK_IMPORTED_MODULE_24__providers_points_points__["a" /* PointsProvider */],
            __WEBPACK_IMPORTED_MODULE_25__providers_treasuresprovider_treasuresprovider__["a" /* TreasuresProvider */],
            __WEBPACK_IMPORTED_MODULE_26__providers_treasuresdetailprovider_treasuresdetailprovider__["a" /* TreasuresDetailProvider */],
            __WEBPACK_IMPORTED_MODULE_27__providers_treasureseditprovider_treasureseditprovider__["a" /* TreasureseditproviderProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_search_search__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_chat_chat__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_treasures_treasures__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        //used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Profile', component: __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */] },
            { title: 'Search', component: __WEBPACK_IMPORTED_MODULE_8__pages_search_search__["a" /* SearchPage */] },
            { title: 'Requests', component: __WEBPACK_IMPORTED_MODULE_9__pages_chat_chat__["a" /* ChatPage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Treasures', component: __WEBPACK_IMPORTED_MODULE_10__pages_treasures_treasures__["a" /* TreasuresPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//IonicPage()
var LoginPage = (function () {
    function LoginPage(nav, auth, alertCtrl, loadingCtrl) {
        this.nav = nav;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.registerCredentials = { email: '', password: '' };
    }
    LoginPage.prototype.createAccount = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        // alert("here.....");
        this.showLoading();
        // alert(JSON.stringify(this.auth.login(this.registerCredentials)));
        this.auth.login(this.registerCredentials).then(function (data) {
            // alert(JSON.stringify(data));
            if (data[0].password == _this.registerCredentials.password) {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            }
            else {
                _this.showError("Access Denied");
            }
        })
            .catch(function (reason) {
            this.showError(reason);
        });
    };
    LoginPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    LoginPage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present(prompt);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n<img src="../../assets/images/bosch_background.png" width=\'100%\' height="50px" />\n\n</ion-header>\n\n\n\n<ion-content class="login-content" padding>\n\n<!--   <ion-row class="logo-row">\n\n    <ion-col></ion-col>\n\n    <ion-col width-67> -->\n\n      <img src="../../assets/images/texconnect_logo.png" width="100%" />\n\n<!--     </ion-col>\n\n    <ion-col></ion-col>\n\n  </ion-row> -->\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <div class="login-box">\n\n    <form (ngSubmit)="login()" #registerForm="ngForm">\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-list inset>\n\n            \n\n            <ion-item>\n\n              <ion-input type="text" placeholder="Email" name="email" [(ngModel)]="registerCredentials.email" required></ion-input>\n\n            </ion-item>\n\n            \n\n            <ion-item>\n\n              <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n\n            </ion-item>\n\n            \n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12 class="signup-col">\n\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid">Login</button>\n\n        </ion-col>\n\n      </ion-row>\n\n      \n\n    </form>\n\n\n\n    <ion-row>\n\n          <button ion-button class="register-btn" block clear (click)="createAccount()">Create New Account</button> \n\n    </ion-row>\n\n    <img src="../../assets/images/bosch_background.png" width=\'100%\' height="10px" />\n\n  </div>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreasuresProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the TreasuresProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var TreasuresProvider = (function () {
    function TreasuresProvider(http) {
        this.http = http;
        console.log('Hello TreasuresProvider Provider');
        this.data = null;
    }
    TreasuresProvider.prototype.gettreasures = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('/api/Project')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
                console.log(data);
            });
        });
    };
    TreasuresProvider.prototype.posttreasures = function (project) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        //project.uploaded="yes"
        // console.log(project);
        headers.append('Content-Type', 'application/json');
        return new Promise(function (resolve) {
            _this.http.post('/api/Project', JSON.stringify(project), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
                console.log(_this.data);
            });
        });
        // this.http.post('/api/Project',JSON.stringify(project), {headers: headers})
        // .subscribe(res => {
        //     console.log(res.json());
        //     return res.json();
        // });
    };
    TreasuresProvider.prototype.deleteproject = function (id) {
        var _this = this;
        this.http.delete('/api/Project/' + id).subscribe(function (res) {
            console.log(res.json());
            _this.http.delete('/api/detail/project_id/' + id).subscribe(function (res) {
                console.log(res.json());
            });
        });
    };
    TreasuresProvider.prototype.getdata = function () {
        return this.data;
    };
    TreasuresProvider.prototype.postdetails = function (details) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        //project.uploaded="yes"
        console.log(details);
        headers.append('Content-Type', 'application/json');
        this.http.post('/api/Detail', JSON.stringify(details), { headers: headers })
            .subscribe(function (res) {
            //console.log(res.json());
        });
    };
    TreasuresProvider.prototype.deletedetails = function (id) {
        this.http.delete('/api/Detail/detail_id/' + id).subscribe(function (res) {
            console.log(res.json());
        });
    };
    return TreasuresProvider;
}());
TreasuresProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TreasuresProvider);

var _a;
//# sourceMappingURL=treasuresprovider.js.map

/***/ }),

/***/ 734:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 261,
	"./af.js": 261,
	"./ar": 262,
	"./ar-dz": 263,
	"./ar-dz.js": 263,
	"./ar-kw": 264,
	"./ar-kw.js": 264,
	"./ar-ly": 265,
	"./ar-ly.js": 265,
	"./ar-ma": 266,
	"./ar-ma.js": 266,
	"./ar-sa": 267,
	"./ar-sa.js": 267,
	"./ar-tn": 268,
	"./ar-tn.js": 268,
	"./ar.js": 262,
	"./az": 269,
	"./az.js": 269,
	"./be": 270,
	"./be.js": 270,
	"./bg": 271,
	"./bg.js": 271,
	"./bn": 272,
	"./bn.js": 272,
	"./bo": 273,
	"./bo.js": 273,
	"./br": 274,
	"./br.js": 274,
	"./bs": 275,
	"./bs.js": 275,
	"./ca": 276,
	"./ca.js": 276,
	"./cs": 277,
	"./cs.js": 277,
	"./cv": 278,
	"./cv.js": 278,
	"./cy": 279,
	"./cy.js": 279,
	"./da": 280,
	"./da.js": 280,
	"./de": 281,
	"./de-at": 282,
	"./de-at.js": 282,
	"./de-ch": 283,
	"./de-ch.js": 283,
	"./de.js": 281,
	"./dv": 284,
	"./dv.js": 284,
	"./el": 285,
	"./el.js": 285,
	"./en-au": 286,
	"./en-au.js": 286,
	"./en-ca": 287,
	"./en-ca.js": 287,
	"./en-gb": 288,
	"./en-gb.js": 288,
	"./en-ie": 289,
	"./en-ie.js": 289,
	"./en-nz": 290,
	"./en-nz.js": 290,
	"./eo": 291,
	"./eo.js": 291,
	"./es": 292,
	"./es-do": 293,
	"./es-do.js": 293,
	"./es.js": 292,
	"./et": 294,
	"./et.js": 294,
	"./eu": 295,
	"./eu.js": 295,
	"./fa": 296,
	"./fa.js": 296,
	"./fi": 297,
	"./fi.js": 297,
	"./fo": 298,
	"./fo.js": 298,
	"./fr": 299,
	"./fr-ca": 300,
	"./fr-ca.js": 300,
	"./fr-ch": 301,
	"./fr-ch.js": 301,
	"./fr.js": 299,
	"./fy": 302,
	"./fy.js": 302,
	"./gd": 303,
	"./gd.js": 303,
	"./gl": 304,
	"./gl.js": 304,
	"./gom-latn": 305,
	"./gom-latn.js": 305,
	"./he": 306,
	"./he.js": 306,
	"./hi": 307,
	"./hi.js": 307,
	"./hr": 308,
	"./hr.js": 308,
	"./hu": 309,
	"./hu.js": 309,
	"./hy-am": 310,
	"./hy-am.js": 310,
	"./id": 311,
	"./id.js": 311,
	"./is": 312,
	"./is.js": 312,
	"./it": 313,
	"./it.js": 313,
	"./ja": 314,
	"./ja.js": 314,
	"./jv": 315,
	"./jv.js": 315,
	"./ka": 316,
	"./ka.js": 316,
	"./kk": 317,
	"./kk.js": 317,
	"./km": 318,
	"./km.js": 318,
	"./kn": 319,
	"./kn.js": 319,
	"./ko": 320,
	"./ko.js": 320,
	"./ky": 321,
	"./ky.js": 321,
	"./lb": 322,
	"./lb.js": 322,
	"./lo": 323,
	"./lo.js": 323,
	"./lt": 324,
	"./lt.js": 324,
	"./lv": 325,
	"./lv.js": 325,
	"./me": 326,
	"./me.js": 326,
	"./mi": 327,
	"./mi.js": 327,
	"./mk": 328,
	"./mk.js": 328,
	"./ml": 329,
	"./ml.js": 329,
	"./mr": 330,
	"./mr.js": 330,
	"./ms": 331,
	"./ms-my": 332,
	"./ms-my.js": 332,
	"./ms.js": 331,
	"./my": 333,
	"./my.js": 333,
	"./nb": 334,
	"./nb.js": 334,
	"./ne": 335,
	"./ne.js": 335,
	"./nl": 336,
	"./nl-be": 337,
	"./nl-be.js": 337,
	"./nl.js": 336,
	"./nn": 338,
	"./nn.js": 338,
	"./pa-in": 339,
	"./pa-in.js": 339,
	"./pl": 340,
	"./pl.js": 340,
	"./pt": 341,
	"./pt-br": 342,
	"./pt-br.js": 342,
	"./pt.js": 341,
	"./ro": 343,
	"./ro.js": 343,
	"./ru": 344,
	"./ru.js": 344,
	"./sd": 345,
	"./sd.js": 345,
	"./se": 346,
	"./se.js": 346,
	"./si": 347,
	"./si.js": 347,
	"./sk": 348,
	"./sk.js": 348,
	"./sl": 349,
	"./sl.js": 349,
	"./sq": 350,
	"./sq.js": 350,
	"./sr": 351,
	"./sr-cyrl": 352,
	"./sr-cyrl.js": 352,
	"./sr.js": 351,
	"./ss": 353,
	"./ss.js": 353,
	"./sv": 354,
	"./sv.js": 354,
	"./sw": 355,
	"./sw.js": 355,
	"./ta": 356,
	"./ta.js": 356,
	"./te": 357,
	"./te.js": 357,
	"./tet": 358,
	"./tet.js": 358,
	"./th": 359,
	"./th.js": 359,
	"./tl-ph": 360,
	"./tl-ph.js": 360,
	"./tlh": 361,
	"./tlh.js": 361,
	"./tr": 362,
	"./tr.js": 362,
	"./tzl": 363,
	"./tzl.js": 363,
	"./tzm": 364,
	"./tzm-latn": 365,
	"./tzm-latn.js": 365,
	"./tzm.js": 364,
	"./uk": 366,
	"./uk.js": 366,
	"./ur": 367,
	"./ur.js": 367,
	"./uz": 368,
	"./uz-latn": 369,
	"./uz-latn.js": 369,
	"./uz.js": 368,
	"./vi": 370,
	"./vi.js": 370,
	"./x-pseudo": 371,
	"./x-pseudo.js": 371,
	"./yo": 372,
	"./yo.js": 372,
	"./zh-cn": 373,
	"./zh-cn.js": 373,
	"./zh-hk": 374,
	"./zh-hk.js": 374,
	"./zh-tw": 375,
	"./zh-tw.js": 375
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 734;

/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreasureseditproviderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the TreasureseditproviderProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var TreasureseditproviderProvider = (function () {
    function TreasureseditproviderProvider(http) {
        this.http = http;
        console.log('Hello TreasureseditproviderProvider Provider');
    }
    return TreasureseditproviderProvider;
}());
TreasureseditproviderProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], TreasureseditproviderProvider);

//# sourceMappingURL=treasureseditprovider.js.map

/***/ })

},[389]);
//# sourceMappingURL=main.js.map