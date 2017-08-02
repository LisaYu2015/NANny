webpackJsonp([0],{

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_points_points__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__points_points__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__earnpoints_earnpoints__ = __webpack_require__(743);
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
        var info = this.auth.getUserInfo();
        this.username = info.fname;
        this.email = info.email;
        this.user = info;
        this.p.getpoints(this.user._id).then(function (data) {
            if (data) {
                _this.all_points = data;
                alert(_this.all_points.length);
                for (var i = 0; i < _this.all_points.length; i++) {
                    _this.p_comment.push(_this.all_points[i].a_comment * 5);
                    _this.p_fixes.push(_this.all_points[i].a_fix * 10);
                    _this.p_request.push(_this.all_points[i].a_request * 2);
                }
                alert(_this.p_comment);
            }
        });
    }
    HomePage.prototype.ionViewDidLoad = function () {
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
                datasets: [{
                        label: "New Fixes",
                        fill: true,
                        backgroundColor: colors.purple.fill,
                        pointBackgroundColor: colors.purple.stroke,
                        borderColor: colors.purple.stroke,
                        pointHighlightStroke: colors.purple.stroke,
                        borderCapStyle: 'butt',
                        data: this.p_fixes,
                    }, {
                        label: "Comments",
                        fill: true,
                        backgroundColor: colors.darkBlue.fill,
                        pointBackgroundColor: colors.darkBlue.stroke,
                        borderColor: colors.darkBlue.stroke,
                        pointHighlightStroke: colors.darkBlue.stroke,
                        borderCapStyle: 'butt',
                        data: this.p_comment,
                    }, {
                        label: "Answering Requests",
                        fill: true,
                        backgroundColor: colors.green.fill,
                        pointBackgroundColor: colors.green.stroke,
                        borderColor: colors.green.stroke,
                        pointHighlightStroke: colors.green.stroke,
                        data: this.p_request,
                    }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                            stacked: true,
                        }]
                },
                animation: {
                    duration: 750,
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
        selector: 'page-home',template:/*ion-inline-start:"/Users/snehak/ionic-heroku-button/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="logout()">\n          <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n \n<ion-content class="home" padding>\n  <h1>Welcome to TexConnect {{user.fname}} {{user.lname}}!</h1>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-8>\n        <ion-row>\n          <ion-col col-1>\n          </ion-col>\n          <ion-col col-5>\n            <button ion-button (click)="pointsmodal()"><h3>You have 140 Points</h3></button>\n          </ion-col>\n          <ion-col col-6>\n            <button ion-button (click)="earnmodal()"><h3>Earn More Points</h3></button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-8>\n        <ion-card>\n          <ion-card-header>\n            Points History\n          </ion-card-header>\n          <ion-card-content>\n            <canvas #lineCanvas></canvas>\n          </ion-card-content>\n          <ion-card-content>\n            <div>\n                <h2>Hello From Bar Clustered Component</h2>\n                <div id="chartdiv" style="width:100%; height:600px;"></div>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-1>\n      </ion-col>\n      <ion-col col-3>\n        <br><br><br><br>\n        <h2>Leaderboard:</h2>\n          <ol style="font-size: 14">\n            <li>Ji Eun Kim</li>\n            <li>Lisa Yu</li>\n            <li>Wan-Yi Yan</li>\n            <li>Sneha Krishna</li>\n            <li>Bjoern Michele</li>\n            <li>Yi-Cheih Lee</li>\n            <li>Ann-Marie Roberts</li>\n            <li>Jeff Hibner</li>\n            <li>Aniket Kittur</li>\n            <li>Robert Kraut</li>\n          </ol>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-1>\n      </ion-col>\n      <ion-col col-6>\n        <h3>You will become a Bosch certified D level expert by performing one of the above activities 50 times.</h3>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/snehak/ionic-heroku-button/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__providers_points_points__["a" /* PointsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 143:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 143;

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 186;

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(39);
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
        selector: 'page-register',template:/*ion-inline-start:"/Users/snehak/ionic-heroku-button/src/pages/register/register.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content class="login-content" padding>\n  <div class="login-box">\n    \n    <form (ngSubmit)="register()" #registerForm="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            \n            <ion-item>\n              <ion-input type="text" placeholder="Email" name="email" [(ngModel)]="registerCredentials.email" required></ion-input>\n            </ion-item>\n            \n            <ion-item>\n              <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n            </ion-item>\n            \n            <ion-item>\n              <ion-input type="text" placeholder="First Name" name="fname" [(ngModel)]="registerCredentials.fname" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input type="text" placeholder="Last Name" name="lname" [(ngModel)]="registerCredentials.lname" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input type="text" placeholder="Shop" name="shop" [(ngModel)]="registerCredentials.shop" required></ion-input>\n            </ion-item>\n\n            <!-- Need to convert to dropdowns and radio buttons\n            expertise\n            <ion-item>\n              <ion-input type="text" placeholder="First Name" name="fname" [(ngModel)]="registerCredentials.fname" required></ion-input>\n            </ion-item>\n\n            experience\n            <ion-item>\n              <ion-input type="text" placeholder="First Name" name="fname" [(ngModel)]="registerCredentials.fname" required></ion-input>\n            </ion-item>\n            -->\n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid">Register</button>\n        </ion-col>\n      </ion-row>\n      \n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/snehak/ionic-heroku-button/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Points */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(79);
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

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(45);
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
        this.joined = new Date(this.user.joined).getTime();
        this.lastactive = new Date(this.user.last_active);
        alert(this.user.total_fix);
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
        selector: 'page-profile',template:/*ion-inline-start:"/Users/snehak/ionic-heroku-button/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Profile</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="logout()">\n          <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n \n<ion-content class="home" padding>\n{{1288323623006 | date:"MM/dd/yyyy \'at\' h:mma"}}\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4>\n        <img width="100%" src="../../assets/images/default-profile-picture.png">>\n      </ion-col>\n      <ion-col col-4 >\n        <h3>{{user.fname}} {{user.lname}} </h3>\n        <p>Joined: {{joindate | date:\'yyyy-MM-dd HH:mm:ss Z\'}}</p>\n        <p>Last Active: {{activedate | date:\'MM/dd/yyyy\'}}</p>\n        <p>Expertise: {{user.expertise}}</p>\n      </ion-col>\n      <ion-col col-4 >\n        <h3>Points: {{user.points | number}}</h3>\n        <p>Level: {{user.level }}</p>\n        <p>New Fixes: {{user.fixes | number}}</p>\n        <p>Helps: {{user.helps | number}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/snehak/ionic-heroku-button/src/pages/profile/profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(45);
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
        selector: 'page-search',template:/*ion-inline-start:"/Users/snehak/ionic-heroku-button/src/pages/search/search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Search</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="logout()">\n          <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n	<form (ngSubmit)="search()" #nrequest="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            \n            <ion-item>\n              <ion-input type="text" placeholder="Year" name="year" [(ngModel)]="nrequest.year"></ion-input>\n            </ion-item>\n            \n            <ion-item>\n              <ion-input type="password" placeholder="Make" name="make" [(ngModel)]="nrequest.make" ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input type="text" placeholder="Model" name="Model" [(ngModel)]="nrequest.model"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input type="text" placeholder="Error Codes" name="error" [(ngModel)]="nrequest.error"></ion-input>\n            </ion-item>\n\n            <ion-item>\n            	<ion-textarea [(ngModel)]=\'nrequest.symptoms\' name="symptoms" placeholder="Describe the issues that you are seeing. What have you already tried to do to solve the issue? What components have you already checked?"></ion-textarea>\n        	</ion-item>\n            \n          </ion-list>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" >Search</button>\n        </ion-col>\n      </ion-row>\n      \n    </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/snehak/ionic-heroku-button/src/pages/search/search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__onechat_onechat__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_request_new_request__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_requests_requests__ = __webpack_require__(379);
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
        var _this = this;
        console.log('ionViewDidLoad ChatPage');
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
        selector: 'page-chat',template:/*ion-inline-start:"/Users/snehak/ionic-heroku-button/src/pages/chat/chat.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Request History</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="logout()">\n          <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n	<button ion-button (click)=\'newrequest()\'>Create New Request</button>\n  <ion-list>\n    <button ion-item *ngFor="let item of chats" (click)="itemTapped($event, item)">\n      <!-- <ion-icon [name]="item.icon" item-left></ion-icon> -->\n      <ion-row><b>{{item.title}}</b></ion-row>\n      <ion-row>\n	      {{item.author}} is helping you\n	  </ion-row>\n      <div class="date" item-right>\n        Opened: 1/21/17\n      </div>\n    </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/snehak/ionic-heroku-button/src/pages/chat/chat.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__providers_requests_requests__["a" /* RequestsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_requests_requests__["a" /* RequestsProvider */]) === "function" && _d || Object])
], ChatPage);

var _a, _b, _c, _d;
//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OneChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
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
        selector: 'page-onechat',template:/*ion-inline-start:"/Users/snehak/ionic-heroku-button/src/pages/onechat/onechat.html"*/'<!--\n  Generated template for the OnechatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{chat.title}}</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="logout()">\n          <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-item>\n		{{chat.note}}\n	</ion-item>\n  <ion-list>\n    <ion-item *ngFor="let c of comments">\n    	{{c.author}}:{{c.comment}}\n    </ion-item>\n  </ion-list>  	\n\n  	<form (ngSubmit)="addcomment()" #newcommentform="ngForm">\n      <ion-row>\n        <ion-col>\n        	<ion-textarea name="ncomment" [(ngModel)]="ncomment"></ion-textarea>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit">Send</button>\n        </ion-col>\n      </ion-row>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/Users/snehak/ionic-heroku-button/src/pages/onechat/onechat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], OneChatPage);

//# sourceMappingURL=onechat.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewRequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
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
    function NewRequestPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NewRequestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewRequestPage');
    };
    NewRequestPage.prototype.send = function () {
        //send request
        this.navCtrl.pop();
    };
    return NewRequestPage;
}());
NewRequestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-new-request',template:/*ion-inline-start:"/Users/snehak/ionic-heroku-button/src/pages/new-request/new-request.html"*/'<!--\n  Generated template for the NewRequestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>NewRequest</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<form (ngSubmit)="send()" #nrequest="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            \n            <ion-item>\n              <ion-input type="text" placeholder="Year" name="year" [(ngModel)]="nrequest.year"></ion-input>\n            </ion-item>\n            \n            <ion-item>\n              <ion-input type="password" placeholder="Make" name="make" [(ngModel)]="nrequest.make" ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input type="text" placeholder="Model" name="Model" [(ngModel)]="nrequest.model"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input type="text" placeholder="Error Codes" name="error" [(ngModel)]="nrequest.error"></ion-input>\n            </ion-item>\n\n            <ion-item>\n            	<ion-textarea [(ngModel)]=\'nrequest.symptoms\' name="symptoms" placeholder="Describe the issues that you are seeing. What have you already tried to do to solve the issue? What components have you already checked?"></ion-textarea>\n        	</ion-item>\n            \n          </ion-list>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" >Ask for Help</button>\n        </ion-col>\n      </ion-row>\n      \n    </form>\n</ion-content>\n'/*ion-inline-end:"/Users/snehak/ionic-heroku-button/src/pages/new-request/new-request.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], NewRequestPage);

//# sourceMappingURL=new-request.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Chat */
/* unused harmony export Comment */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(79);
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
                _this.chats.push(data);
            });
            //for each request, get and store name of helper
            for (var i = 0; i < _this.chats.length; i++) {
                _this.chats[i].requestername = username;
                _this.chats[i].helpername = _this.auth.getusernamebyid(_this.chats[i].helperID);
            }
            _this.http.get('/api/question/helpid/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.chats.push(data);
            });
            //for each request, get and store name of requester
            for (var i = 0; i < _this.chats.length; i++) {
                _this.chats[i].helpername = username;
                _this.chats[i].requestername = _this.auth.getusernamebyid(_this.chats[i].requesterID);
            }
            resolve(_this.chats);
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
    RequestsProvider.prototype.addcomment = function () { };
    RequestsProvider.prototype.createrequest = function () { };
    RequestsProvider.prototype.assignhelper = function () { };
    return RequestsProvider;
}());
RequestsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], RequestsProvider);

var _a, _b;
//# sourceMappingURL=requests.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(385);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_register__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_search_search__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_chat_chat__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_onechat_onechat__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_new_request_new_request__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_auth_service_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_requests_requests__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_points_points__ = __webpack_require__(373);
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
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_onechat_onechat__["a" /* OneChatPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_new_request_new_request__["a" /* NewRequestPage */]
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
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_onechat_onechat__["a" /* OneChatPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_new_request_new_request__["a" /* NewRequestPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_16__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_17__providers_requests_requests__["a" /* RequestsProvider */],
            __WEBPACK_IMPORTED_MODULE_18__providers_points_points__["a" /* PointsProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(79);
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

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_search_search__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_chat_chat__ = __webpack_require__(376);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        //used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Profile', component: __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */] },
            { title: 'Search', component: __WEBPACK_IMPORTED_MODULE_7__pages_search_search__["a" /* SearchPage */] },
            { title: 'Requests', component: __WEBPACK_IMPORTED_MODULE_8__pages_chat_chat__["a" /* ChatPage */] },
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/snehak/ionic-heroku-button/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/snehak/ionic-heroku-button/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(127);
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
        selector: 'page-login',template:/*ion-inline-start:"/Users/snehak/ionic-heroku-button/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n</ion-header>\n\n<ion-content class="login-content" padding>\n  <ion-row class="logo-row">\n    <ion-col></ion-col>\n    <ion-col width-67>\n      <img src="http://placehold.it/300x200"/>\n    </ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n  <div class="login-box">\n    <form (ngSubmit)="login()" #registerForm="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            \n            <ion-item>\n              <ion-input type="text" placeholder="Email" name="email" [(ngModel)]="registerCredentials.email" required></ion-input>\n            </ion-item>\n            \n            <ion-item>\n              <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n            </ion-item>\n            \n          </ion-list>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid">Login</button>\n        </ion-col>\n      </ion-row>\n      \n    </form>\n\n    <ion-row>\n          <button ion-button class="register-btn" block clear (click)="createAccount()">Create New Account</button> \n    </ion-row>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/snehak/ionic-heroku-button/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 725:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 258,
	"./af.js": 258,
	"./ar": 259,
	"./ar-dz": 260,
	"./ar-dz.js": 260,
	"./ar-kw": 261,
	"./ar-kw.js": 261,
	"./ar-ly": 262,
	"./ar-ly.js": 262,
	"./ar-ma": 263,
	"./ar-ma.js": 263,
	"./ar-sa": 264,
	"./ar-sa.js": 264,
	"./ar-tn": 265,
	"./ar-tn.js": 265,
	"./ar.js": 259,
	"./az": 266,
	"./az.js": 266,
	"./be": 267,
	"./be.js": 267,
	"./bg": 268,
	"./bg.js": 268,
	"./bn": 269,
	"./bn.js": 269,
	"./bo": 270,
	"./bo.js": 270,
	"./br": 271,
	"./br.js": 271,
	"./bs": 272,
	"./bs.js": 272,
	"./ca": 273,
	"./ca.js": 273,
	"./cs": 274,
	"./cs.js": 274,
	"./cv": 275,
	"./cv.js": 275,
	"./cy": 276,
	"./cy.js": 276,
	"./da": 277,
	"./da.js": 277,
	"./de": 278,
	"./de-at": 279,
	"./de-at.js": 279,
	"./de-ch": 280,
	"./de-ch.js": 280,
	"./de.js": 278,
	"./dv": 281,
	"./dv.js": 281,
	"./el": 282,
	"./el.js": 282,
	"./en-au": 283,
	"./en-au.js": 283,
	"./en-ca": 284,
	"./en-ca.js": 284,
	"./en-gb": 285,
	"./en-gb.js": 285,
	"./en-ie": 286,
	"./en-ie.js": 286,
	"./en-nz": 287,
	"./en-nz.js": 287,
	"./eo": 288,
	"./eo.js": 288,
	"./es": 289,
	"./es-do": 290,
	"./es-do.js": 290,
	"./es.js": 289,
	"./et": 291,
	"./et.js": 291,
	"./eu": 292,
	"./eu.js": 292,
	"./fa": 293,
	"./fa.js": 293,
	"./fi": 294,
	"./fi.js": 294,
	"./fo": 295,
	"./fo.js": 295,
	"./fr": 296,
	"./fr-ca": 297,
	"./fr-ca.js": 297,
	"./fr-ch": 298,
	"./fr-ch.js": 298,
	"./fr.js": 296,
	"./fy": 299,
	"./fy.js": 299,
	"./gd": 300,
	"./gd.js": 300,
	"./gl": 301,
	"./gl.js": 301,
	"./gom-latn": 302,
	"./gom-latn.js": 302,
	"./he": 303,
	"./he.js": 303,
	"./hi": 304,
	"./hi.js": 304,
	"./hr": 305,
	"./hr.js": 305,
	"./hu": 306,
	"./hu.js": 306,
	"./hy-am": 307,
	"./hy-am.js": 307,
	"./id": 308,
	"./id.js": 308,
	"./is": 309,
	"./is.js": 309,
	"./it": 310,
	"./it.js": 310,
	"./ja": 311,
	"./ja.js": 311,
	"./jv": 312,
	"./jv.js": 312,
	"./ka": 313,
	"./ka.js": 313,
	"./kk": 314,
	"./kk.js": 314,
	"./km": 315,
	"./km.js": 315,
	"./kn": 316,
	"./kn.js": 316,
	"./ko": 317,
	"./ko.js": 317,
	"./ky": 318,
	"./ky.js": 318,
	"./lb": 319,
	"./lb.js": 319,
	"./lo": 320,
	"./lo.js": 320,
	"./lt": 321,
	"./lt.js": 321,
	"./lv": 322,
	"./lv.js": 322,
	"./me": 323,
	"./me.js": 323,
	"./mi": 324,
	"./mi.js": 324,
	"./mk": 325,
	"./mk.js": 325,
	"./ml": 326,
	"./ml.js": 326,
	"./mr": 327,
	"./mr.js": 327,
	"./ms": 328,
	"./ms-my": 329,
	"./ms-my.js": 329,
	"./ms.js": 328,
	"./my": 330,
	"./my.js": 330,
	"./nb": 331,
	"./nb.js": 331,
	"./ne": 332,
	"./ne.js": 332,
	"./nl": 333,
	"./nl-be": 334,
	"./nl-be.js": 334,
	"./nl.js": 333,
	"./nn": 335,
	"./nn.js": 335,
	"./pa-in": 336,
	"./pa-in.js": 336,
	"./pl": 337,
	"./pl.js": 337,
	"./pt": 338,
	"./pt-br": 339,
	"./pt-br.js": 339,
	"./pt.js": 338,
	"./ro": 340,
	"./ro.js": 340,
	"./ru": 341,
	"./ru.js": 341,
	"./sd": 342,
	"./sd.js": 342,
	"./se": 343,
	"./se.js": 343,
	"./si": 344,
	"./si.js": 344,
	"./sk": 345,
	"./sk.js": 345,
	"./sl": 346,
	"./sl.js": 346,
	"./sq": 347,
	"./sq.js": 347,
	"./sr": 348,
	"./sr-cyrl": 349,
	"./sr-cyrl.js": 349,
	"./sr.js": 348,
	"./ss": 350,
	"./ss.js": 350,
	"./sv": 351,
	"./sv.js": 351,
	"./sw": 352,
	"./sw.js": 352,
	"./ta": 353,
	"./ta.js": 353,
	"./te": 354,
	"./te.js": 354,
	"./tet": 355,
	"./tet.js": 355,
	"./th": 356,
	"./th.js": 356,
	"./tl-ph": 357,
	"./tl-ph.js": 357,
	"./tlh": 358,
	"./tlh.js": 358,
	"./tr": 359,
	"./tr.js": 359,
	"./tzl": 360,
	"./tzl.js": 360,
	"./tzm": 361,
	"./tzm-latn": 362,
	"./tzm-latn.js": 362,
	"./tzm.js": 361,
	"./uk": 363,
	"./uk.js": 363,
	"./ur": 364,
	"./ur.js": 364,
	"./uz": 365,
	"./uz-latn": 366,
	"./uz-latn.js": 366,
	"./uz.js": 365,
	"./vi": 367,
	"./vi.js": 367,
	"./x-pseudo": 368,
	"./x-pseudo.js": 368,
	"./yo": 369,
	"./yo.js": 369,
	"./zh-cn": 370,
	"./zh-cn.js": 370,
	"./zh-hk": 371,
	"./zh-hk.js": 371,
	"./zh-tw": 372,
	"./zh-tw.js": 372
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
webpackContext.id = 725;

/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
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
        selector: 'page-points',template:/*ion-inline-start:"/Users/snehak/ionic-heroku-button/src/pages/points/points.html"*/'<!--\n  Generated template for the PointsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>points</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/snehak/ionic-heroku-button/src/pages/points/points.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], PointsPage);

//# sourceMappingURL=points.js.map

/***/ }),

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EarnpointsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
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
        selector: 'page-earnpoints',template:/*ion-inline-start:"/Users/snehak/ionic-heroku-button/src/pages/earnpoints/earnpoints.html"*/'<!--\n  Generated template for the EarnpointsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>earnpoints</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/snehak/ionic-heroku-button/src/pages/earnpoints/earnpoints.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], EarnpointsPage);

//# sourceMappingURL=earnpoints.js.map

/***/ }),

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
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
        selector: 'page-list',template:/*ion-inline-start:"/Users/snehak/ionic-heroku-button/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/snehak/ionic-heroku-button/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ })

},[380]);
//# sourceMappingURL=main.js.map