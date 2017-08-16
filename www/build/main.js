webpackJsonp([0],{

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(38);
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
    AuthService.prototype.updateuser = function (info) {
        var _this = this;
        console.log(info);
        return new Promise(function (resolve) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post('/api/user/update', JSON.stringify(info), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                console.log(res);
                _this.currentUser = res;
                console.log(_this.currentUser);
                resolve(res);
            });
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
        var _this = this;
        var user;
        return new Promise(function (resolve) {
            _this.http.get('/api/user/id/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                user = res;
                var name = user.fname.toString() + " " + user.lname.toString();
                console.log(name);
                resolve(name);
            });
        });
    };
    AuthService.prototype.getbyid = function (id) {
        this.getuserbyid(id).then(function (user) {
            console.log(user);
            return user;
        });
    };
    AuthService.prototype.getuserbyid = function (id) {
        var _this = this;
        var user;
        return new Promise(function (resolve) {
            _this.http.get('/api/user/id/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (user) {
                console.log(user);
                resolve(user);
            });
        });
    };
    AuthService.prototype.searchbyexpertise = function (ex) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var details = ex;
        return new Promise(function (resolve) {
            _this.http.get('api/user/search/' + details)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
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

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_points_points__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chat_chat__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__treasures_treasures__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__onesearchresult_onesearchresult__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_treasuresprovider_treasuresprovider__ = __webpack_require__(32);
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
    function HomePage(nav, auth, p, modalCtrl, action, alert, tres) {
        this.nav = nav;
        this.auth = auth;
        this.p = p;
        this.modalCtrl = modalCtrl;
        this.action = action;
        this.alert = alert;
        this.tres = tres;
        this.p_comment = [];
        this.p_fixes = [];
        this.p_request = [];
        this.p_total = [];
        this.searched = false;
        var info = this.auth.getUserInfo();
        this.username = info.fname;
        this.email = info.email;
        this.user = info;
        if (this.user.last_viewed != '') {
            this.searched = true;
        }
    }
    HomePage.prototype.ionViewDidEnter = function () {
        var info = this.auth.getUserInfo();
    };
    HomePage.prototype.chartcreate = function () {
        var colors = {
            green: {
                fill: '#09355C',
                stroke: '#09355C',
            },
            darkBlue: {
                fill: '#CBCBCB',
                stroke: '#CBCBCB',
            },
            purple: {
                fill: '#B61B12',
                stroke: '#B61B12',
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
                legend: true,
                legendCallback: function (chart) {
                    var text = [];
                    text.push('<ul class="' + chart.id + '-legend">');
                    for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
                        text.push('<li><span style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '">');
                        if (chart.data.labels[i]) {
                            text.push(chart.data.labels[i]);
                        }
                        text.push('</span></li>');
                    }
                    text.push('</ul>');
                    return text.join("");
                },
            }
        });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.p.getpoints(this.user._id).then(function (data) {
            if (data) {
                _this.all_points = data;
                for (var i = 0; i < _this.all_points.length; i++) {
                    var comments = _this.all_points[i].a_comment;
                    var fix = _this.all_points[i].a_fix;
                    var req = _this.all_points[i].a_request;
                    _this.p_comment.push(comments * 5 + _this.p_comment.reduce(function (pv, cv) { return pv + cv; }, 0));
                    _this.p_fixes.push(fix * 10 + _this.p_fixes.reduce(function (pv, cv) { return pv + cv; }, 0));
                    _this.p_request.push(req * 2 + _this.p_request.reduce(function (pv, cv) { return pv + cv; }, 0));
                    // this.p_total.push(comments *5 + fix *10 + req *2)
                }
                _this.chartcreate();
            }
        });
        console.log("hello from homepage");
        // this.legend.html = this.lineChart.generateLegend();
    };
    HomePage.prototype.addtreasures = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__treasures_treasures__["a" /* TreasuresPage */]);
    };
    HomePage.prototype.givehelp = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__chat_chat__["a" /* ChatPage */]);
    };
    HomePage.prototype.searchfeedback = function () {
        var _this = this;
        this.tres.getonetreasure(this.user.last_viewed).then(function (project) {
            console.log(project[0]);
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_9__onesearchresult_onesearchresult__["a" /* OnesearchresultPage */], project[0]);
        });
    };
    HomePage.prototype.pointsmodal = function () {
        var _this = this;
        var actionSheet = this.action.create({
            title: 'You have 140 points available to use',
            buttons: [
                {
                    text: 'Get Bosch Products',
                    handler: function () {
                        console.log('Products clicked');
                    }
                }, {
                    text: 'Get Help',
                    handler: function () {
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__search_search__["a" /* SearchPage */]);
                        console.log('Help clicked');
                    }
                }, {
                    text: 'Earn More Points',
                    handler: function () {
                        _this.earnmodal();
                        console.log('Archive clicked');
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    HomePage.prototype.earnmodal = function () {
        var alert = this.alert.create({
            title: 'Earn Points',
            subTitle: 'To earn points, answer requests, add new fixes, or stay active in your group.',
            buttons: ['OK']
        });
        alert.present();
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
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('legend'),
    __metadata("design:type", Object)
], HomePage.prototype, "legend", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/snehak/ionic-heroku-button/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="logout()">\n          <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n \n<ion-content class="home" padding>\n  \n\n  <ion-grid>\n    <ion-row class="points">\n      <div col text-center>\n        <h1>Welcome to TexConnect!</h1>\n        <button center round ion-button (click)="pointsmodal()">140 Points Available</button>\n      </div>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <ion-card>\n          <ion-card-header>\n            Your Points History\n          </ion-card-header>\n          <ion-card-content>\n            <canvas #lineCanvas></canvas>\n          </ion-card-content>\n          <ion-row>\n            <div id="legend" class="chart-legend"></div>\n          </ion-row>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-card>\n      <ion-card-header style="white-space: normal;">\n        Perform one of the below activities 50 times to become a Texconnect A level expert.\n      </ion-card-header>\n      <ion-card-content>\n        <ion-row>\n          <button ion-button clear (click)="givehelp()">Answer a request</button>\n        </ion-row>\n        <ion-row>\n          <button ion-button clear (click)="addtreasures()">Add a treasure</button>\n        </ion-row>\n        <ion-row>\n          <button ion-button clear *ngIf=\'searched\' (click)="searchfeedback()">Provide feedback on your last search</button>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/snehak/ionic-heroku-button/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__providers_points_points__["a" /* PointsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_10__providers_treasuresprovider_treasuresprovider__["a" /* TreasuresProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreasuresDetailProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(38);
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

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service_auth_service__ = __webpack_require__(13);
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
  Generated class for the RelationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var RelationProvider = (function () {
    function RelationProvider(http, auth) {
        this.http = http;
        this.auth = auth;
        this.helplist = [];
        this.reqlist = [];
        console.log('Hello RelationProvider Provider');
        this.user = this.auth.getUserInfo();
    }
    RelationProvider.prototype.addupdaterelation = function (relation) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return new Promise(function (resolve) {
            _this.http.post('/api/relation/', JSON.stringify(relation), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.reqlist = data;
            });
        });
    };
    RelationProvider.prototype.getrelationsreq = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('/api/relation/req/' + _this.user._id)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.reqlist = data;
                console.log(_this.reqlist);
                resolve(_this.reqlist);
            });
        });
    };
    RelationProvider.prototype.getrelationshelp = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('/api/relation/help/' + _this.user._id)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.helplist = data;
                console.log(_this.helplist);
                resolve(_this.helplist);
            });
        });
    };
    return RelationProvider;
}());
RelationProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__auth_service_auth_service__["a" /* AuthService */]])
], RelationProvider);

//# sourceMappingURL=relation.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__onechat_onechat__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_requests_requests__ = __webpack_require__(89);
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
                _this.len = _this.chats.length;
                console.log(_this.chats);
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
            _this.disc = data;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__onechat_onechat__["a" /* OneChatPage */], { chat: item, disc: _this.disc });
        })
            .catch(function (err) {
            alert(err);
        });
    };
    ChatPage.prototype.opensearch = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__search_search__["a" /* SearchPage */]);
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
        selector: 'page-chat',template:/*ion-inline-start:"/Users/snehak/ionic-heroku-button/src/pages/chat/chat.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Requests</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="logout()">\n          <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n<!-- 	<button ion-button (click)=\'newrequest()\'>Create New Request</button>\n -->  \n  <ion-item style="white-space: normal;" *ngIf="len == 0">\n    <p style="white-space: normal;">You do not have any requests at this time. To open a new request, first <a (click)="opensearch()">search</a> the database to see if you can find help. </p>\n  </ion-item>\n  <ion-list>\n    <button ion-item *ngFor="let item of chats" (click)="itemTapped($event, item)">\n      <h2>{{item.year}} {{item.make}} {{item.model}}</h2>\n        <p>Error codes: {{item.error}}</p>\n	     <p>Symptoms: {{item.symptoms}}</p>\n      <div class="date" item-end>\n        {{item.opendate}}\n      </div>\n    </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/snehak/ionic-heroku-button/src/pages/chat/chat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_6__providers_requests_requests__["a" /* RequestsProvider */]])
], ChatPage);

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(38);
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
  Generated class for the GroupProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var GroupProvider = (function () {
    function GroupProvider(http) {
        this.http = http;
        console.log('Hello GroupProvider Provider');
    }
    GroupProvider.prototype.getallgroups = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return new Promise(function (resolve) {
            _this.http.get('/api/group/')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    GroupProvider.prototype.getgroup = function (id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return new Promise(function (resolve) {
            _this.http.get('/api/group/groupid/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data[0]);
            });
        });
    };
    GroupProvider.prototype.getusergrouplist = function (id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return new Promise(function (resolve) {
            _this.http.get('/api/member/userid/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    GroupProvider.prototype.addgroup = function (group) {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post('/api/group', JSON.stringify(group), { headers: headers })
                .subscribe(function (res) {
                resolve(res);
            });
        });
    };
    GroupProvider.prototype.searchgroup = function (search) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var details = search;
        return new Promise(function (resolve) {
            _this.http.get('/api/group/search/' + details)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    GroupProvider.prototype.joingroup = function (creds) {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post('/api/member', JSON.stringify(creds), { headers: headers })
                .subscribe(function (res) {
                resolve(res);
            });
        });
    };
    GroupProvider.prototype.unjoingroup = function (creds) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return new Promise(function (resolve) {
            _this.http.delete('/api/member', new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
                headers: headers,
                body: creds
            }))
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    return GroupProvider;
}());
GroupProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], GroupProvider);

//# sourceMappingURL=group.js.map

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 161;

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 204;

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(13);
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
        selector: 'page-register',template:/*ion-inline-start:"/Users/snehak/ionic-heroku-button/src/pages/register/register.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content class="login-content" padding>\n  <div class="login-box">\n    \n    <form (ngSubmit)="register()" #registerForm="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            \n            <ion-item>\n              <ion-input type="text" placeholder="Email" name="email" [(ngModel)]="registerCredentials.email" required></ion-input>\n            </ion-item>\n            \n            <ion-item>\n              <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n            </ion-item>\n            \n            <ion-item>\n              <ion-input type="text" placeholder="First Name" name="fname" [(ngModel)]="registerCredentials.fname" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input type="text" placeholder="Last Name" name="lname" [(ngModel)]="registerCredentials.lname" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input type="text" placeholder="Shop" name="shop" [(ngModel)]="registerCredentials.shop" required></ion-input>\n            </ion-item>\n\n            <!-- Need to convert to dropdowns and radio buttons\n            expertise\n            <ion-item>\n              <ion-input type="text" placeholder="First Name" name="fname" [(ngModel)]="registerCredentials.fname" required></ion-input>\n            </ion-item>\n\n            experience\n            <ion-item>\n              <ion-input type="text" placeholder="First Name" name="fname" [(ngModel)]="registerCredentials.fname" required></ion-input>\n            </ion-item>\n            -->\n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid">Register</button>\n        </ion-col>\n      </ion-row>\n      \n    </form>\n  </div>\n</ion-content>\n\n<ion-footer>\n     <img src="../../assets/images/bosch_background.png" width=\'100%\' height="10px" />\n</ion-footer>\n'/*ion-inline-end:"/Users/snehak/ionic-heroku-button/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreasuresProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(38);
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
    TreasuresProvider.prototype.getonetreasure = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('/api/Project/id/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (proj) {
                console.log(proj);
                resolve(proj);
            });
        });
    };
    TreasuresProvider.prototype.getusertreasures = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('/api/Project/UserID/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
                console.log(data);
            });
        });
    };
    TreasuresProvider.prototype.getusertreasuresuploaded = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('/api/Project/alluploaded/id/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
                console.log(data);
            });
        });
    };
    TreasuresProvider.prototype.getuploadedtreasures = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('/api/Project/alluploaded')
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
                console.log(data);
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
    TreasuresProvider.prototype.searchtreasures = function (search) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        // let details = make + " " + model + " " + symptoms + " " + errorcodes;
        var details = search;
        return new Promise(function (resolve) {
            _this.http.get('api/Project/search/' + details)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    TreasuresProvider.prototype.deletedetails = function (id) {
        this.http.delete('/api/Detail/detail_id/' + id).subscribe(function (res) {
            console.log(res.json());
        });
    };
    TreasuresProvider.prototype.uploadimg = function (img) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        console.log("gah");
        this.http.post('/api/img', JSON.stringify(img), { headers: headers })
            .subscribe(function (res) {
            console.log(res.json());
            console.log("abc");
        });
    };
    return TreasuresProvider;
}());
TreasuresProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], TreasuresProvider);

//# sourceMappingURL=treasuresprovider.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Points */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(38);
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

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchresultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__onesearchresult_onesearchresult__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_request_new_request__ = __webpack_require__(88);
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
 * Generated class for the SearchresultPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SearchresultPage = (function () {
    function SearchresultPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.projects = [];
        this.carlinks = [];
        this.Userprojects = [];
        this.links = [];
        this.buttonimg = [];
        this.projects = navParams.get('projects');
        this.searchparams = navParams.get('searchparams');
        for (var i = 0; i < this.projects.length; i++) {
            this.Userprojects.push(this.projects[i]);
        }
        for (var i = 0; i < this.Userprojects.length; i++) {
            this.carlinks[i] = "https://s3.amazonaws.com/katcher/Brands/" + this.Userprojects[i].brand + "/" + this.Userprojects[i].model + ".jpg";
            this.links[i] = "https://s3.amazonaws.com/katcher/PID" + this.Userprojects[i].PID + "/Photo/1.jpg";
        }
    }
    SearchresultPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchresultPage');
    };
    SearchresultPage.prototype.showDetails = function (project) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__onesearchresult_onesearchresult__["a" /* OnesearchresultPage */], project);
        //let modal = this.modalCtrl.create(TreasureDetailPage );
        //modal.present();
    };
    SearchresultPage.prototype.newrequest = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__new_request_new_request__["a" /* NewRequestPage */], { searchparams: this.searchparams });
    };
    return SearchresultPage;
}());
SearchresultPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-searchresult',template:/*ion-inline-start:"/Users/snehak/ionic-heroku-button/src/pages/searchresult/searchresult.html"*/'<!--\n  Generated template for the SearchresultPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Results</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="card-background-page">	\n\n	<ion-item>\n		<p>Didn\'t find what you are looking for?  </p>\n		<p><a (click)="newrequest()">Create a new request</a></p>\n	</ion-item>\n\n	<ion-list >\n\n     <ion-grid>\n		<ion-item *ngFor =" let Userproject of Userprojects; let i  = index ">\n     \n     <ion-row >\n	   <ion-col>  	\n	     <ion-card (click)="showDetails(Userproject)" >\n	     <img src={{this.carlinks[i]}}>   \n	     <div class="card-title" >{{Userproject.year}} {{Userproject.brand}} {{Userproject.model}}      {{i%2==0}}</div>\n	     <div class="card-subtitle">{{Userproject.errorcode}}</div>\n	     </ion-card>\n     </ion-col>\n\n     \n     </ion-row >\n       \n     </ion-item></ion-grid>\n     </ion-list>\n     </ion-content>\n'/*ion-inline-end:"/Users/snehak/ionic-heroku-button/src/pages/searchresult/searchresult.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], SearchresultPage);

//# sourceMappingURL=searchresult.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OneChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_requests_requests__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client__ = __webpack_require__(780);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_socket_io_client__);
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
//socket io 
// declare var io : {
//     connect(url: string): Socket;
// }
// interface Socket {
//     on(event: string, callback: (data: any) => void );
//     emit(event: string, data: any);
// }
var OneChatPage = (function () {
    function OneChatPage(navCtrl, navParams, auth, req) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.req = req;
        this.chat = navParams.get('chat');
        this.disc = navParams.get('disc');
        this.currentuser = this.auth.getUserInfo();
        if (this.chat.requesterID == this.currentuser._id) {
            this.otherperson = this.chat.helpername;
        }
        else {
            this.otherperson = this.chat.requestername;
        }
        //in reality need to get the chat info from the database
        console.log(this.disc);
        this.socket = __WEBPACK_IMPORTED_MODULE_4_socket_io_client__();
        this.socket.on("comment", function (data) {
            console.log(data);
            _this.req.getdiscussion(_this.chat._id)
                .then(function (data) {
                _this.disc = data;
            });
        });
    }
    OneChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OnechatPage');
    };
    OneChatPage.prototype.ionViewDidEnter = function () {
        this.content.scrollToBottom();
    };
    OneChatPage.prototype.addcomment = function () {
        var _this = this;
        //add comment to db
        this.req.addcomment({ requestid: this.chat._id, comment: this.ncomment, author: this.currentuser._id })
            .then(function (data) {
            _this.socket.emit('comment', data);
            //get all the coments again
            _this.req.getdiscussion(_this.chat._id)
                .then(function (data) {
                _this.disc = data;
            });
            _this.content.scrollToBottom();
            // this.navCtrl.push(OneChatPage,{chat:this.chat});
        });
        this.ncomment = "";
    };
    return OneChatPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('content'),
    __metadata("design:type", Object)
], OneChatPage.prototype, "content", void 0);
OneChatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-onechat',template:/*ion-inline-start:"/Users/snehak/ionic-heroku-button/src/pages/onechat/onechat.html"*/'<!--\n  Generated template for the OnechatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title> {{chat.year}} {{chat.make}} {{chat.model}} </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="logout()">\n          <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content #content>\n  <ion-item>\n    <p>Error codes: {{chat.error}}</p>\n    <p>Symptoms: {{chat.symptoms}}</p>\n  </ion-item> \n\n  <!-- <p *ngIf="ng.isundefined(disc)"> No messages in this thread </p> -->\n\n  <div class="messages-wrapper">\n    <div *ngFor="let d of disc">\n      <div *ngIf="d.author==currentuser._id" class="message to">{{d.comment}}</div>\n      <div *ngIf="d.author!=currentuser._id" class="message from">{{d.comment}}</div>\n    </div>\n  </div>\n\n  	\n</ion-content>\n\n<ion-footer>\n    <form (ngSubmit)="addcomment()" #newcommentform="ngForm">\n      <ion-row>\n          <ion-textarea name="ncomment" placeholder="Comment..." [(ngModel)]="ncomment"></ion-textarea>\n          <button ion-button clear item-end type="submit"><ion-icon name="send"></ion-icon></button>\n      </ion-row>\n    </form>\n</ion-footer>\n'/*ion-inline-end:"/Users/snehak/ionic-heroku-button/src/pages/onechat/onechat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_requests_requests__["a" /* RequestsProvider */]])
], OneChatPage);

//# sourceMappingURL=onechat.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreasureDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_treasuresprovider_treasuresprovider__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_treasuresdetailprovider_treasuresdetailprovider__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_treasures_edit_detail_treasures_edit_detail__ = __webpack_require__(409);
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
var TreasureDetailPage = TreasureDetailPage_1 = (function () {
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
        this.navCtrl.pop();
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
                        _this.navCtrl.pop(TreasureDetailPage_1);
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
TreasureDetailPage = TreasureDetailPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-treasure-detail',template:/*ion-inline-start:"/Users/snehak/ionic-heroku-button/src/pages/treasure-detail/treasure-detail.html"*/'<!--\n  Generated template for the TreasuresPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>Details</ion-title>\n        \n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n      <ion-card>\n        <ion-card-content>\n\n            <ion-fab top right>\n              <button ion-fab><ion-icon name="construct"></ion-icon></button>\n              <ion-fab-list>\n                <button ion-fab color="danger" (click)="editDetails(ProjID,projectdetails)"><ion-icon name="create"></ion-icon></button>\n                <button ion-fab color="primary" (click)="complete(ProjID)"><ion-icon name={{this.completestatusimg}}></ion-icon></button>\n                <button ion-fab color="green" (click)="upload1(ProjID)"><ion-icon name={{this.projectuploadstatus}}></ion-icon></button>\n                <button ion-fab color="danger" (click)="deleteproject(ProjID._id)"><ion-icon name="trash"></ion-icon></button>\n                </ion-fab-list>\n                </ion-fab>\n\n       \n            <ion-card-title>\n                [{{this.completestatus}}] {{ProjID.year}} {{this.ProjID.brand}} {{this.ProjID.model}} {{this.ProjID.engine}}\n            </ion-card-title>\n            <p>Error Code: {{this.ProjID.errorcode}}</p>         \n            <ul>Symptoms:\n            <li *ngFor =" let projectsymptom of projectsymptoms; let i = index ">{{this.projectsymptom.sentence}} </li>  \n            </ul>\n            <p></p>\n            <ul>Diagnosis:\n            <li *ngFor =" let projectdiagnosi of projectdiagnosis; let i = index ">{{this.projectdiagnosi.sentence}} </li>  \n            </ul>\n            <p></p>\n            <ul>conclusion:\n            <li *ngFor =" let projectconclusion of projectconclusions; let i = index ">{{this.projectconclusion.sentence}} </li>  \n            </ul>\n\n             <p *ngFor =" let link of links; let i = index ">\n            <img src={{this.links[i]}}/>\n            </p>\n            </ion-card-content>\n            </ion-card>\n            </ion-content>\n\n     '/*ion-inline-end:"/Users/snehak/ionic-heroku-button/src/pages/treasure-detail/treasure-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_treasuresprovider_treasuresprovider__["a" /* TreasuresProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_treasuresdetailprovider_treasuresdetailprovider__["a" /* TreasuresDetailProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
], TreasureDetailPage);

var TreasureDetailPage_1;
//# sourceMappingURL=treasure-detail.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreasuresEditDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_treasuresprovider_treasuresprovider__ = __webpack_require__(32);
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
    function TreasuresEditDetailPage(navCtrl, appCtrl, navParams, toastCtrl, viewCtrl, alertCtrl, treasuresService) {
        this.navCtrl = navCtrl;
        this.appCtrl = appCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
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
                        //this.treasuresService.uploadimg(this.newimg);
                        _this.viewCtrl.dismiss();
                        // this.appCtrl.getRootNav().push(TreasureDetailPage, this.ProjID);
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
        selector: 'page-treasures-edit-detail',template:/*ion-inline-start:"/Users/snehak/ionic-heroku-button/src/pages/treasures-edit-detail/treasures-edit-detail.html"*/'<!--\n  Generated template for the TreasuresEditDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  <ion-item>\n   	<ion-title>Edit</ion-title>\n   	\n   	  <button item-end ion-button color="danger" (click)="dismiss()">\n          <ion-icon name="close"></ion-icon>\n      </button>\n      \n      </ion-item>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n     \n<ion-list>\n       \n            <ion-item>\n            <ion-label stacked>\n                Year\n            </ion-label>\n            <ion-input type="number" placeholder="{{this.newyear}}"    [(ngModel)]="this.newyear"></ion-input>\n            </ion-item>\n\n            <ion-item>\n            <ion-label stacked>\n                Brand\n            </ion-label>\n            <ion-input type="text" placeholder="{{this.newbrand}}" [(ngModel)]="this.newbrand"></ion-input>\n            </ion-item>\n\n            <ion-item>\n            <ion-label stacked>\n                Model\n            </ion-label>\n            <ion-input type="text" placeholder="{{this.newmodel}}" [(ngModel)]="this.newmodel"></ion-input>\n            </ion-item>\n\n            <ion-item>\n            <ion-label stacked>\n                Error Code\n            </ion-label>\n            <ion-input type="text" placeholder="{{this.newerrorcode}}" [(ngModel)]="this.newerrorcode"></ion-input>\n            </ion-item>\n</ion-list>\n\n     \n            \n<ion-list>\n        	<ion-item *ngFor =" let projectsymptom of projectsymptoms; let i = index ">\n        		<ion-label stacked>Symptom: {{i+1}}</ion-label>\n        		<ion-input type="text" placeholder="{{newprojectsymptoms[i]}}"     [(ngModel)]="newprojectsymptoms[i]"></ion-input>\n        		<button ion-button item-end ><ion-icon name="camera"></ion-icon></button>\n        		<button ion-button item-end ><ion-icon name="film"></ion-icon></button>\n        	</ion-item>\n\n        	<button ion-button (click)="addsymptom()"><ion-icon name="add" >Add Symptom</ion-icon></button>\n\n			<ion-item *ngFor =" let projectdiagnosi of projectdiagnosis; let i = index ">\n				<ion-label stacked>Diagnosis Step: {{i+1}}</ion-label>\n        		<ion-input type="text" placeholder="{{newprojectdiagnosis[i]}}"   [(ngModel)]="newprojectdiagnosis[i]"></ion-input>	\n        		<button ion-button item-end ><ion-icon name="camera"></ion-icon></button>\n        		<button ion-button item-end ><ion-icon name="film"></ion-icon></button>\n        	</ion-item>\n        	<button ion-button (click)="adddiagnosis()"><ion-icon name="add" >Add Diagnosis</ion-icon></button>\n\n        	<ion-item *ngFor = " let projectconclusion of projectconclusions; let i = index ">\n        		<ion-label stacked>Conclusion: {{i+1}}</ion-label>\n        		<ion-input type="text" placeholder="{{newprojectconclusions[i]}}"   [(ngModel)]="newprojectconclusions[i]"></ion-input>\n        		<button ion-button item-end ><ion-icon name="camera"></ion-icon></button>\n        		<button ion-button item-end ><ion-icon name="film"></ion-icon></button>\n        	</ion-item>\n        	<button ion-button (click)="addconclusion()"><ion-icon name="add" >Add Conclusion</ion-icon></button>\n        	\n        	\n\n\n</ion-list>  \n\n<ion-item>\n<button ion-button full large round (click)="save()">Save</button>\n</ion-item>  \n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/snehak/ionic-heroku-button/src/pages/treasures-edit-detail/treasures-edit-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_treasuresprovider_treasuresprovider__["a" /* TreasuresProvider */]])
], TreasuresEditDetailPage);

//# sourceMappingURL=treasures-edit-detail.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewProjectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_treasuresprovider_treasuresprovider__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__treasures_treasures__ = __webpack_require__(65);
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
    function NewProjectPage(navCtrl, appCtrl, toastCtrl, navParams, viewCtrl, auth, alertCtrl, treasuresService) {
        this.navCtrl = navCtrl;
        this.appCtrl = appCtrl;
        this.toastCtrl = toastCtrl;
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
                            engine: _this.newengine,
                        };
                        newproj.Userid = _this.UserID;
                        newproj.year = _this.newyear;
                        newproj.brand = _this.newbrand;
                        newproj.model = _this.newmodel;
                        newproj.errorcode = _this.newerrorcode;
                        newproj.engine = _this.newengine;
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
                            var toast = _this.toastCtrl.create({
                                message: 'Congratulations your project was created. You can find it in your Treasures.',
                                duration: 2000,
                                position: 'middle'
                            });
                            toast.present();
                            _this.viewCtrl.dismiss(data);
                            _this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__treasures_treasures__["a" /* TreasuresPage */]);
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
        selector: 'page-new-project',template:/*ion-inline-start:"/Users/snehak/ionic-heroku-button/src/pages/new-project/new-project.html"*/'<ion-header>\n\n  <ion-navbar>\n  <ion-item>\n   	<ion-title>Add a new Project</ion-title>\n   	\n   	  <button item-end ion-button color="danger" (click)="dismiss()">\n          <ion-icon name="close"></ion-icon>\n      </button>\n      </ion-item>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n     \n<ion-list>\n       \n            <ion-item>\n            <ion-label stacked>\n                Year\n            </ion-label>\n            <ion-input type="number" placeholder="Enter Year"    [(ngModel)]="this.newyear"></ion-input>\n            </ion-item>\n\n            <ion-item>\n            <ion-label stacked>\n                Brand\n            </ion-label>\n            <ion-input type="text" placeholder="Enter Brand" [(ngModel)]="this.newbrand"></ion-input>\n            </ion-item>	\n\n            <ion-item>\n            <ion-label stacked>\n                Model\n            </ion-label>\n            <ion-input type="text" placeholder="Enter Model" [(ngModel)]="this.newmodel"></ion-input>\n            </ion-item>\n\n            <ion-item>\n            <ion-label stacked>\n                Engine\n            </ion-label>\n            <ion-input type="text" placeholder="Enter Engine" [(ngModel)]="this.newengine"></ion-input>\n            </ion-item>\n\n            <ion-item>\n            <ion-label stacked>\n                Error Code\n            </ion-label>\n            <ion-input type="text" placeholder="Enter Error Code" [(ngModel)]="this.newerrorcode"></ion-input>\n            </ion-item>\n            	\n\n</ion-list>\n\n\n\n     \n<ion-list>\n\n			\n        	<ion-item *ngFor =" let projectsymptom of projectsymptoms; let i = index ">\n        		<ion-label stacked>Symptom: {{i+1}}</ion-label>\n        		<ion-input type="text" placeholder="Enter Symptoms here"     [(ngModel)]="this.newprojectsymptoms[i]"></ion-input>\n        	</ion-item>\n        	<button ion-button (click)="addsymptom()"><ion-icon name="add" >Add Symptom</ion-icon></button>\n			\n			<ion-item *ngFor =" let projectdiagnosi of projectdiagnosis; let i = index ">\n        		<ion-label stacked>Diagnosis Step: {{i+1}}</ion-label>\n        		<ion-input type="text" placeholder="Enter Diagnosis"   [(ngModel)]="this.newprojectdiagnosis[i]"></ion-input>	\n        	</ion-item>\n        	<button ion-button (click)="adddiagnosis()"><ion-icon name="add" >Add Diagnosis</ion-icon></button>\n        	\n        	<ion-item *ngFor =" let projectconclusion of projectconclusions; let i = index ">\n        		<ion-label stacked>Conclusion: {{i+1}}</ion-label>\n        		<ion-input type="text" placeholder="Enter Conclusion"   [(ngModel)]="this.newprojectconclusions[i]"></ion-input>\n        	</ion-item>\n        	<button ion-button (click)="addconclusion()"><ion-icon name="add" >Add Conclusion</ion-icon></button>\n        	\n\n<ion-item>\n<button ion-button full large round (click)="save()">Save</button>\n</ion-item>  \n\n'/*ion-inline-end:"/Users/snehak/ionic-heroku-button/src/pages/new-project/new-project.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_treasuresprovider_treasuresprovider__["a" /* TreasuresProvider */]])
], NewProjectPage);

//# sourceMappingURL=new-project.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__treasures_treasures__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editprofile_editprofile__ = __webpack_require__(412);
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
    ProfilePage.prototype.editprofile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__editprofile_editprofile__["a" /* EditprofilePage */]);
    };
    ProfilePage.prototype.gototreasures = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__treasures_treasures__["a" /* TreasuresPage */]);
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
        selector: 'page-profile',template:/*ion-inline-start:"/Users/snehak/ionic-heroku-button/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content class="home" padding>\n            <ion-fab top right>\n              <button ion-fab (click)="editprofile()"><ion-icon name="create"></ion-icon></button>\n            </ion-fab>\n\n\n  <div class="card">\n    <img width="80%" src="../../assets/images/default-profile-picture.png">\n    <div class="container">\n      <h1>{{user.fname}} {{user.lname}}</h1>\n      <p class="title">Level: {{user.level}} \n        <br> Points: {{total_points | number}} \n        <br> Expertise: {{user.expertise}}\n      </p>\n      <p>Shop: {{user.shop}}</p>\n      <p>Email: {{user.email}}</p>\n      <button class=\'profilebutton\' (click)="gototreasures()">My Fixes</button>\n    </div>\n  </div>\n\n  <br>\n\n    <ion-card>\n      <ion-card-header>\n        You rank #23 in your network\n      </ion-card-header>\n      <ion-card-content>\n        <ion-row>\n          <ion-col>\n          </ion-col>\n          <ion-col>\n            <ion-list>\n              <ion-item>\n                <ion-badge item-start>1</ion-badge>\n                Lisa Yu\n              </ion-item>\n              <ion-item>\n                <ion-badge item-start>2</ion-badge>\n                Tim Nickel\n              </ion-item>\n              <ion-item col text-center>\n                *<br>\n                *<br>\n                *<br>\n              </ion-item>\n              <ion-item>\n                <ion-badge item-start>22</ion-badge>\n                Bjorn Michele\n              </ion-item>\n              <ion-item>\n                <ion-badge item-start>23</ion-badge>\n                Sneha Krishna\n              </ion-item>\n              <ion-item>\n                <ion-badge item-start>25</ion-badge>\n                Yi-Chieh Lee\n              </ion-item>\n            </ion-list>\n          </ion-col>\n          <ion-col>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/snehak/ionic-heroku-button/src/pages/profile/profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(49);
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
 * Generated class for the EditprofilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EditprofilePage = (function () {
    function EditprofilePage(navCtrl, navParams, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.newcreds = { fname: '', lname: '', expertise: '', shop: '', email: '' };
        this.user = this.auth.getUserInfo();
        this.joined = new Date(this.user.joined).getTime().toString();
        this.lastactive = new Date(this.user.last_active).getTime().toString();
        this.fixes = this.user.total_fix.toString();
        this.helps = this.user.total_help.toString();
        this.total_points = this.user.total_points.toString();
    }
    EditprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditprofilePage');
    };
    EditprofilePage.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function (succ) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        });
    };
    return EditprofilePage;
}());
EditprofilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-editprofile',template:/*ion-inline-start:"/Users/snehak/ionic-heroku-button/src/pages/editprofile/editprofile.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n      Cancel\n    </button>\n  </ion-navbar>\n</ion-header>\n \n<ion-content class="home" padding>\n\n<form (ngSubmit)="login()" #changeform="ngForm">\n\n  <div class="card">\n  	<ion-row>\n  		<ion-col>\n  			<img width="80%" src="../../assets/images/default-profile-picture.png">\n		    <ion-fab right bottom>\n		    	<button ion-fab (click)="newprofilepic()"><ion-icon ion-small name="create"></ion-icon></button>\n		    </ion-fab>\n  		</ion-col>\n  	</ion-row>\n\n    <div class="container">\n    	<ion-row>\n    		<ion-col>\n    			<h1>\n            <ion-label stacked>First Name</ion-label>\n		    		<ion-input type="text" name="fname" placeholder="{{user.fname}}" [(ngModel)]="newcreds.fname"></ion-input>\n		    	</h1>\n    		</ion-col>\n    		<ion-col>\n    			<h1>\n            <ion-label stacked>Last Name</ion-label>\n		    		<ion-input type="text" name="lname" placeholder="{{user.lname}}" [(ngModel)]="newcreds.lname"></ion-input>\n		    	</h1>\n    		</ion-col>\n    	</ion-row>\n    	<p>\n        <ion-label stacked>Expertise</ion-label>\n        <ion-input type="text" name="expertise" placeholder="{{user.expertise}}" [(ngModel)]="newcreds.expertise"></ion-input>\n      </p>\n      <p>\n        <ion-label stacked>Shop</ion-label>\n      	<ion-input type="text" name="shop" placeholder="{{user.shop}}" [(ngModel)]="newcreds.shop"></ion-input>\n	      <br>\n        <ion-label stacked>Email</ion-label>\n      	<ion-input type="text" name="email" placeholder="{{user.email}}" [(ngModel)]="newcreds.email"></ion-input>\n      </p>\n\n      <button class=\'profilebutton\' type="submit" [disabled]="!changeform.form.valid">Save</button>\n    </div>\n  </div>\n\n</form>\n</ion-content>\n\n'/*ion-inline-end:"/Users/snehak/ionic-heroku-button/src/pages/editprofile/editprofile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */]])
], EditprofilePage);

//# sourceMappingURL=editprofile.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Track */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_relation_relation__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contactprofile_contactprofile__ = __webpack_require__(414);
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
 * Generated class for the ContactsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Track = (function () {
    function Track(id) {
        this.id = id;
        this.name = '';
        this.helped = 0;
        this.request = 0;
    }
    Track.prototype.setrequest = function (n) {
        this.request = n;
    };
    Track.prototype.setname = function (name) {
        this.name = name;
    };
    Track.prototype.sethelped = function (n) {
        this.helped = n;
    };
    Track.prototype.getid = function () {
        return this.id;
    };
    return Track;
}());

var ContactsPage = (function () {
    function ContactsPage(navCtrl, navParams, rel, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rel = rel;
        this.auth = auth;
        this.rellist = [];
        this.user = this.auth.getUserInfo();
    }
    ContactsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactsPage');
    };
    ContactsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.helplist = null;
        this.reqlist = null;
        this.rellist = [];
        this.rel.getrelationshelp(this.user._id).then(function (help) {
            _this.helplist = help;
            console.log(_this.helplist);
            _this.rel.getrelationsreq(_this.user._id).then(function (req) {
                _this.reqlist = req;
                console.log(_this.reqlist);
                var t;
                for (var i = 0; i < _this.helplist.length; i++) {
                    var id = _this.helplist[i].requester;
                    t = new Track(id);
                    t.setrequest(_this.helplist[i].n);
                    _this.rellist.push(t);
                }
                for (var j = 0; j < _this.reqlist.length; j++) {
                    var id = _this.reqlist[j].helper;
                    for (var i = 0; i < _this.rellist.length; i++) {
                        console.log("here");
                        if (id == _this.rellist[i].id) {
                            console.log("here");
                            _this.rellist[i].sethelped(_this.reqlist[j].n);
                        }
                        else {
                            t = new Track(id);
                            t.sethelped(_this.reqlist[i].n);
                            _this.rellist.push(t);
                        }
                    }
                }
                var _loop_1 = function (k) {
                    var id = _this.rellist[k].getid();
                    _this.auth.getusernamebyid(id).then(function (name) {
                        _this.rellist[k].setname(name);
                        console.log(_this.rellist);
                    });
                };
                for (var k = 0; k < _this.rellist.length; k++) {
                    _loop_1(k);
                }
            });
        });
    };
    ContactsPage.prototype.opencontactpage = function (event, person) {
        var _this = this;
        console.log(person);
        var id = person.id;
        this.auth.getuserbyid(id).then(function (user) {
            var contact = user;
            console.log(contact);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__contactprofile_contactprofile__["a" /* ContactprofilePage */], { contact: contact });
        });
    };
    return ContactsPage;
}());
ContactsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contacts',template:/*ion-inline-start:"/Users/snehak/ionic-heroku-button/src/pages/contacts/contacts.html"*/'<!--\n  Generated template for the ContactsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Network</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-list>\n		<ion-item style="white-space: normal;" *ngIf="rellist.length == 0">\n			<p style="white-space: normal;">Build up a network by giving and getting help through the <a>Requests</a> page. You can also join groups in the <a>Groups</a> page.</p>\n		</ion-item>\n		<button ion-item *ngFor="let contact of rellist" (click)="opencontactpage($event, contact)">\n			<ion-thumbnail item-start>\n        		<img src="img/thumbnail-totoro.png">\n			</ion-thumbnail>\n			<!-- <ion-icon [name]="item.icon" item-left></ion-icon> -->\n			<h2>{{contact.name}}</h2>\n			<p>Has helped you {{contact.helped}} times. <br>\n				You have helped them {{contact.request}} times.\n			</p>\n		</button>\n	</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/snehak/ionic-heroku-button/src/pages/contacts/contacts.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_relation_relation__["a" /* RelationProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthService */]])
], ContactsPage);

//# sourceMappingURL=contacts.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_request_new_request__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contactreasures_contactreasures__ = __webpack_require__(415);
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
 * Generated class for the ContactprofilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ContactprofilePage = (function () {
    function ContactprofilePage(navCtrl, navParams, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.contact = this.navParams.get('contact');
        console.log(this.contact);
    }
    ContactprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactprofilePage');
    };
    ContactprofilePage.prototype.viewfixes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__contactreasures_contactreasures__["a" /* ContactreasuresPage */], { id: this.contact._id });
    };
    ContactprofilePage.prototype.gethelp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__new_request_new_request__["a" /* NewRequestPage */]);
    };
    return ContactprofilePage;
}());
ContactprofilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contactprofile',template:/*ion-inline-start:"/Users/snehak/ionic-heroku-button/src/pages/contactprofile/contactprofile.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Profile</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="logout()">\n          <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n \n<ion-content class="home" padding>\n            <ion-fab top right>\n              <button ion-fab (click)="editprofile()"><ion-icon name="create"></ion-icon></button>\n            </ion-fab>\n\n\n  <div class="card">\n    <img width="80%" src="../../assets/images/default-profile-picture.png">\n    <div class="container">\n      <h1>{{contact.fname}} {{contact.lname}}</h1>\n      <p class="title">Level: {{contact.level}} \n        <br> Points: {{contact.total_points | number}} \n        <br> Expertise: {{contact.expertise}}\n      </p>\n      <p>{{contact.shop}}</p>\n      <ion-row>\n        <ion-col>\n          <button class=\'profilebutton\' (click)="viewfixes()">View Fixes</button>\n        </ion-col>\n        <ion-col>\n          <button class="profilebutton" (click)="gethelp()">Get Help</button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"/Users/snehak/ionic-heroku-button/src/pages/contactprofile/contactprofile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */]])
], ContactprofilePage);

//# sourceMappingURL=contactprofile.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactreasuresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_treasuresprovider_treasuresprovider__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__onesearchresult_onesearchresult__ = __webpack_require__(64);
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
var ContactreasuresPage = (function () {
    function ContactreasuresPage(navCtrl, navParams, auth, tres) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.tres = tres;
        this.carlinks = [];
        this.Userprojects = [];
        this.links = [];
        this.buttonimg = [];
        this.searchval = false;
        this.id = this.navParams.get('id');
    }
    ContactreasuresPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad SearchPage');
        this.tres.getusertreasuresuploaded(this.id).then(function (data) {
            _this.projects = data;
            _this.display();
        });
    };
    ContactreasuresPage.prototype.display = function () {
        this.Userprojects = [];
        this.carlinks = [];
        this.links = [];
        console.log("in display");
        for (var i = 0; i < this.projects.length; i++) {
            this.Userprojects.push(this.projects[i]);
        }
        for (var i = 0; i < this.Userprojects.length; i++) {
            this.carlinks[i] = "https://s3.amazonaws.com/katcher/Brands/" + this.Userprojects[i].brand + "/" + this.Userprojects[i].model + ".jpg";
            this.links[i] = "https://s3.amazonaws.com/katcher/PID" + this.Userprojects[i].PID + "/Photo/1.jpg";
        }
    };
    ContactreasuresPage.prototype.showDetails = function (project) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__onesearchresult_onesearchresult__["a" /* OnesearchresultPage */], project);
        //let modal = this.modalCtrl.create(TreasureDetailPage );
        //modal.present();
    };
    return ContactreasuresPage;
}());
ContactreasuresPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contactreasures',template:/*ion-inline-start:"/Users/snehak/ionic-heroku-button/src/pages/contactreasures/contactreasures.html"*/'<!--\n  Generated template for the TreasuresPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-buttons end>\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="card-background-page">	\n\n  <ion-list >\n\n     <ion-grid>\n    <ion-item *ngFor =" let Userproject of Userprojects; let i  = index ">\n     \n     <ion-row >\n     <ion-col>    \n       <ion-card (click)="showDetails(Userproject)" >\n       <img src={{this.carlinks[i]}}>   \n       <div class="card-title" >{{Userproject.year}} {{Userproject.brand}} {{Userproject.model}} </div>\n       <div class="card-subtitle">{{Userproject.errorcode}}</div>\n       </ion-card>\n     </ion-col>\n\n     \n     </ion-row >\n       \n     </ion-item></ion-grid>\n     </ion-list>\n     </ion-content>\n     '/*ion-inline-end:"/Users/snehak/ionic-heroku-button/src/pages/contactreasures/contactreasures.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_treasuresprovider_treasuresprovider__["a" /* TreasuresProvider */]])
], ContactreasuresPage);

//# sourceMappingURL=contactreasures.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupshomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_group_group__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__onegroup_onegroup__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__groupadd_groupadd__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__groupsearch_groupsearch__ = __webpack_require__(419);
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
 * Generated class for the GroupshomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var GroupshomePage = (function () {
    function GroupshomePage(navCtrl, navParams, auth, groupCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.groupCtrl = groupCtrl;
        this.modalCtrl = modalCtrl;
        this.groupdetails = [];
        this.user = this.auth.getUserInfo();
    }
    GroupshomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GroupshomePage');
    };
    GroupshomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.groups = null;
        this.groupdetails = [];
        this.groupCtrl.getusergrouplist(this.user._id).then(function (data) {
            _this.groups = data;
            console.log(_this.groups);
            for (var i = 0; i < _this.groups.length; i++) {
                _this.groupCtrl.getgroup(_this.groups[i].groupid).then(function (res) {
                    _this.groupdetails.push(res);
                    console.log(_this.groupdetails);
                });
            }
        });
    };
    GroupshomePage.prototype.newgroup = function (event, group) {
        //modal to add a new group
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__groupadd_groupadd__["a" /* GroupaddPage */]);
    };
    GroupshomePage.prototype.searchgroup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__groupsearch_groupsearch__["a" /* GroupsearchPage */]);
    };
    GroupshomePage.prototype.entergroup = function (event, group) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__onegroup_onegroup__["a" /* OnegroupPage */], group);
    };
    GroupshomePage.prototype.removegroup = function (event, group) {
        var _this = this;
        var membership = { groupid: group._id, memberid: this.user._id };
        this.groupCtrl.unjoingroup(membership).then(function (data) {
            _this.groupCtrl.getgroup(_this.user._id).then(function (groups) {
                _this.groups = groups;
            });
        });
    };
    return GroupshomePage;
}());
GroupshomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-groupshome',template:/*ion-inline-start:"/Users/snehak/ionic-heroku-button/src/pages/groupshome/groupshome.html"*/'<!--\n  Generated template for the GroupshomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  	<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My Groups</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-right (click)="newgroup()">\n      		Create new group\n          <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-item>\n		<button ion-button full clear (click)="groupsearch()">Search for new groups</button>\n	</ion-item>\n	<ion-list>\n		<ion-card *ngFor="let g of groupdetails" (click)="entergroup($event, g)">\n			<ion-item>\n				<h2>{{g.name}}</h2>\n				<p>{{g.basedon}}</p>\n				<button ion-button item-end icon-right clear small (click)="removegroup($event, g)">\n					<div>Leave</div>\n					<ion-icon name="close"></ion-icon>\n				</button>\n			</ion-item>\n			<ion-card-content>\n				<p>{{g.description}}</p>\n				<ion-row>\n						<button item-start ion-button icon-left clear small>\n							<ion-icon name=\'people\'></ion-icon>\n							<div>{{g.nmembers}} Members</div>\n						</button>\n						<button item-end ion-button icon-left clear small>\n							<ion-icon name="text"></ion-icon>\n							<div>{{g.nposts}} Posts</div>\n						</button>\n				</ion-row>\n			</ion-card-content>\n		</ion-card>\n	</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/snehak/ionic-heroku-button/src/pages/groupshome/groupshome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_2__providers_group_group__["a" /* GroupProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
], GroupshomePage);

//# sourceMappingURL=groupshome.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnegroupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the OnegroupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var OnegroupPage = (function () {
    function OnegroupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OnegroupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OnegroupPage');
    };
    return OnegroupPage;
}());
OnegroupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-onegroup',template:/*ion-inline-start:"/Users/snehak/ionic-heroku-button/src/pages/onegroup/onegroup.html"*/'<!--\n  Generated template for the OnegroupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>onegroup</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/snehak/ionic-heroku-button/src/pages/onegroup/onegroup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], OnegroupPage);

//# sourceMappingURL=onegroup.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupaddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the GroupaddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var GroupaddPage = (function () {
    function GroupaddPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GroupaddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GroupaddPage');
    };
    return GroupaddPage;
}());
GroupaddPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-groupadd',template:/*ion-inline-start:"/Users/snehak/ionic-heroku-button/src/pages/groupadd/groupadd.html"*/'<!--\n  Generated template for the GroupaddPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>groupadd</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/snehak/ionic-heroku-button/src/pages/groupadd/groupadd.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], GroupaddPage);

//# sourceMappingURL=groupadd.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_group_group__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(13);
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
 * Generated class for the GroupsearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var GroupsearchPage = (function () {
    function GroupsearchPage(navCtrl, navParams, groupctrl, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.groupctrl = groupctrl;
        this.auth = auth;
        this.user = this.auth.getUserInfo();
    }
    GroupsearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GroupsearchPage');
    };
    GroupsearchPage.prototype.getallgroups = function () {
        var _this = this;
        this.groupctrl.getallgroups().then(function (data) {
            _this.groups = data;
        });
    };
    GroupsearchPage.prototype.getitems = function (ev) {
        var _this = this;
        this.getallgroups(); //reset groups
        var val = ev.target.value; //get value of the searchbar
        if (val != '') {
            this.groupctrl.searchgroup(val).then(function (data) {
                _this.groups = data;
            });
        }
    };
    GroupsearchPage.prototype.joingroup = function (event, g) {
        this.groupctrl.joingroup({ groupid: g._id, memberid: this.user._id });
    };
    return GroupsearchPage;
}());
GroupsearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-groupsearch',template:/*ion-inline-start:"/Users/snehak/ionic-heroku-button/src/pages/groupsearch/groupsearch.html"*/'<!--\n  Generated template for the GroupsearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Search</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n	<ion-list>\n		<ion-card *ngFor="let g of groups">\n			<ion-item>\n				<h2>{{g.name}}</h2>\n				<p>Created based on: {{g.basedon}}</p>\n			</ion-item>\n			<ion-card-content>\n				<p>{{g.description}}</p>\n			</ion-card-content>\n			<ion-row>\n				<ion-col>\n					<button ion-button icon-left clear small>\n						<ion-icon name=\'people\'></ion-icon>\n						<div>{{g.nmembers}} Members</div>\n					</button>\n				</ion-col>\n				<ion-col>\n					<button ion-button icon-left clear small>\n						<ion-icon name="text"></ion-icon>\n						<div>{{g.nposts}} Posts</div>\n					</button>\n				</ion-col>\n				<ion-col>\n					<ion-note>\n					<button ion-button icon-right clear small (click)="joingroup($event, g)">\n						<div>Join Group</div>\n						<ion-icon name="person-add"></ion-icon>\n					</button>\n					</ion-note>\n				</ion-col>\n			</ion-row>\n		</ion-card>\n	</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/snehak/ionic-heroku-button/src/pages/groupsearch/groupsearch.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_group_group__["a" /* GroupProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthService */]])
], GroupsearchPage);

//# sourceMappingURL=groupsearch.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(425);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(802);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_treasures_treasures__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_treasure_detail_treasure_detail__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_treasures_edit_detail_treasures_edit_detail__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_register_register__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_search_search__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_searchresult_searchresult__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_chat_chat__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_onechat_onechat__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_new_project_new_project__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_new_request_new_request__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_points_points__ = __webpack_require__(803);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_earnpoints_earnpoints__ = __webpack_require__(804);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_contacts_contacts__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_contactprofile_contactprofile__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_onesearchresult_onesearchresult__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_editprofile_editprofile__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_groupadd_groupadd__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_groupsearch_groupsearch__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_groupshome_groupshome__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_onegroup_onegroup__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_contactreasures_contactreasures__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_status_bar__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_splash_screen__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_auth_service_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_requests_requests__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_points_points__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_treasuresprovider_treasuresprovider__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_treasuresdetailprovider_treasuresdetailprovider__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_treasureseditprovider_treasureseditprovider__ = __webpack_require__(805);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_relation_relation__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_group_group__ = __webpack_require__(150);
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
            __WEBPACK_IMPORTED_MODULE_15__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_onechat_onechat__["a" /* OneChatPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_new_request_new_request__["a" /* NewRequestPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_points_points__["a" /* PointsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_earnpoints_earnpoints__["a" /* EarnpointsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_treasures_treasures__["a" /* TreasuresPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_treasure_detail_treasure_detail__["a" /* TreasureDetailPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_treasures_edit_detail_treasures_edit_detail__["a" /* TreasuresEditDetailPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_new_project_new_project__["a" /* NewProjectPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_contacts_contacts__["a" /* ContactsPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_contactprofile_contactprofile__["a" /* ContactprofilePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_searchresult_searchresult__["a" /* SearchresultPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_onesearchresult_onesearchresult__["a" /* OnesearchresultPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_editprofile_editprofile__["a" /* EditprofilePage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_groupadd_groupadd__["a" /* GroupaddPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_groupsearch_groupsearch__["a" /* GroupsearchPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_groupshome_groupshome__["a" /* GroupshomePage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_onegroup_onegroup__["a" /* OnegroupPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_contactreasures_contactreasures__["a" /* ContactreasuresPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_onechat_onechat__["a" /* OneChatPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_new_request_new_request__["a" /* NewRequestPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_points_points__["a" /* PointsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_earnpoints_earnpoints__["a" /* EarnpointsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_treasures_treasures__["a" /* TreasuresPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_treasure_detail_treasure_detail__["a" /* TreasureDetailPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_treasures_edit_detail_treasures_edit_detail__["a" /* TreasuresEditDetailPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_new_project_new_project__["a" /* NewProjectPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_contacts_contacts__["a" /* ContactsPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_contactprofile_contactprofile__["a" /* ContactprofilePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_searchresult_searchresult__["a" /* SearchresultPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_onesearchresult_onesearchresult__["a" /* OnesearchresultPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_editprofile_editprofile__["a" /* EditprofilePage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_groupadd_groupadd__["a" /* GroupaddPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_groupsearch_groupsearch__["a" /* GroupsearchPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_groupshome_groupshome__["a" /* GroupshomePage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_onegroup_onegroup__["a" /* OnegroupPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_contactreasures_contactreasures__["a" /* ContactreasuresPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_30__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_31__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_32__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_33__providers_requests_requests__["a" /* RequestsProvider */],
            __WEBPACK_IMPORTED_MODULE_34__providers_points_points__["a" /* PointsProvider */],
            __WEBPACK_IMPORTED_MODULE_35__providers_treasuresprovider_treasuresprovider__["a" /* TreasuresProvider */],
            __WEBPACK_IMPORTED_MODULE_36__providers_treasuresdetailprovider_treasuresdetailprovider__["a" /* TreasuresDetailProvider */],
            __WEBPACK_IMPORTED_MODULE_37__providers_treasureseditprovider_treasureseditprovider__["a" /* TreasureseditproviderProvider */],
            __WEBPACK_IMPORTED_MODULE_38__providers_relation_relation__["a" /* RelationProvider */],
            __WEBPACK_IMPORTED_MODULE_38__providers_relation_relation__["a" /* RelationProvider */],
            __WEBPACK_IMPORTED_MODULE_39__providers_group_group__["a" /* GroupProvider */],
            __WEBPACK_IMPORTED_MODULE_39__providers_group_group__["a" /* GroupProvider */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_search_search__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_chat_chat__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_treasures_treasures__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contacts_contacts__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_groupshome_groupshome__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_auth_service_auth_service__ = __webpack_require__(13);
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
    function MyApp(platform, statusBar, splashScreen, toast, auth) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.toast = toast;
        this.auth = auth;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        //used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Treasures', component: __WEBPACK_IMPORTED_MODULE_9__pages_treasures_treasures__["a" /* TreasuresPage */] },
            { title: 'Search', component: __WEBPACK_IMPORTED_MODULE_7__pages_search_search__["a" /* SearchPage */] },
            { title: 'Network', component: __WEBPACK_IMPORTED_MODULE_10__pages_contacts_contacts__["a" /* ContactsPage */] },
            { title: 'Groups', component: __WEBPACK_IMPORTED_MODULE_11__pages_groupshome_groupshome__["a" /* GroupshomePage */] },
            { title: 'Requests', component: __WEBPACK_IMPORTED_MODULE_8__pages_chat_chat__["a" /* ChatPage */] },
            { title: 'Profile', component: __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */] },
        ];
        // this.socket = io();
        // this.socket.on("comment",(data:any) => {
        //   console.log(data)
        //   this.presentToast();
        // });
        // this.socket.on("chat",(data:any) => {
        //   console.log(data)
        //   this.presentToastchat();
        // });
    }
    // presentToast(){
    //   let toast = this.toast.create({
    //     message: 'You have a new message',
    //     duration: 3000
    //   });
    //   toast.present();
    // }
    // presentToastchat(){
    //   let toast = this.toast.create({
    //     message: 'Someone has requested you for help',
    //     duration: 3000
    //   });
    //   toast.present();
    // }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function (succ) {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/snehak/ionic-heroku-button/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n  <ion-footer>\n    <button menuClose ion-item (click)="logout()">\n      Logout\n    </button>\n  </ion-footer>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/snehak/ionic-heroku-button/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_12__providers_auth_service_auth_service__["a" /* AuthService */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(138);
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
        console.log(this.registerCredentials);
        this.auth.login(this.registerCredentials).then(function (data) {
            if (!data) {
                _this.showError("This user does not exist. Please create a new account");
            }
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
        selector: 'page-login',template:/*ion-inline-start:"/Users/snehak/ionic-heroku-button/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n<img src="../../assets/images/bosch_background.png" width=\'100%\' height="50px" />\n</ion-header>\n\n<ion-content class="login-content" padding>\n<!--   <ion-row class="logo-row">\n    <ion-col></ion-col>\n    <ion-col width-67> -->\n      <img src="../../assets/images/texconnect_logo.png" width="100%" />\n<!--     </ion-col>\n    <ion-col></ion-col>\n  </ion-row> -->\n</ion-content>\n\n<ion-footer>\n  <div class="login-box">\n    <form (ngSubmit)="login()" #registerForm="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            \n            <ion-item>\n              <ion-input type="text" placeholder="Email" name="email" [(ngModel)]="registerCredentials.email" required></ion-input>\n            </ion-item>\n            \n            <ion-item>\n              <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n            </ion-item>\n            \n          </ion-list>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid">Login</button>\n        </ion-col>\n      </ion-row>\n      \n    </form>\n\n    <ion-row>\n          <button ion-button class="register-btn" block clear (click)="createAccount()">Create New Account</button> \n    </ion-row>\n    <img src="../../assets/images/bosch_background.png" width=\'100%\' height="10px" />\n  </div>\n</ion-footer>\n'/*ion-inline-end:"/Users/snehak/ionic-heroku-button/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnesearchresultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_treasuresdetailprovider_treasuresdetailprovider__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(13);
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
 * Generated class for the OnesearchresultPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var OnesearchresultPage = (function () {
    function OnesearchresultPage(navCtrl, navParams, treasuresDetailService, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.treasuresDetailService = treasuresDetailService;
        this.auth = auth;
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
        this.user = this.auth.getUserInfo();
        console.log(this.ProjID);
        console.log(this.user);
        this.user.last_viewed = this.ProjID._id.toString();
        console.log(this.user);
        this.auth.updateuser(this.user);
    }
    OnesearchresultPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad OnesearchresultPage');
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
                _this.links[i] = "https://s3.amazonaws.com/katcher/PID" + _this.ProjID.PID + "/Photo/" + i + ".jpg";
                console.log(_this.links[i]);
            }
        });
    };
    return OnesearchresultPage;
}());
OnesearchresultPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-onesearchresult',template:/*ion-inline-start:"/Users/snehak/ionic-heroku-button/src/pages/onesearchresult/onesearchresult.html"*/'<!--\n  Generated template for the TreasuresPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>Details</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n      <ion-card>\n        <ion-card-content>\n       \n            <ion-card-title>\n                [{{this.completestatus}}] {{ProjID.year}} {{this.ProjID.brand}} {{this.ProjID.model}} \n            </ion-card-title>\n            <p>Error Code: {{this.ProjID.errorcode}}</p>         \n            <ul>Symptoms:\n            <li *ngFor =" let projectsymptom of projectsymptoms; let i = index ">{{this.projectsymptom.sentence}} </li>  \n            </ul>\n            <p></p>\n            <ul>Diagnosis:\n            <li *ngFor =" let projectdiagnosi of projectdiagnosis; let i = index ">{{this.projectdiagnosi.sentence}} </li>  \n            </ul>\n            <p></p>\n            <ul>conclusion:\n            <li *ngFor =" let projectconclusion of projectconclusions; let i = index ">{{this.projectconclusion.sentence}} </li>  \n            </ul>\n\n             <p *ngFor =" let link of links; let i = index ">\n            <img src={{this.links[i]}}/>\n            </p>\n            </ion-card-content>\n            </ion-card>\n            </ion-content>\n\n     '/*ion-inline-end:"/Users/snehak/ionic-heroku-button/src/pages/onesearchresult/onesearchresult.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_treasuresdetailprovider_treasuresdetailprovider__["a" /* TreasuresDetailProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthService */]])
], OnesearchresultPage);

//# sourceMappingURL=onesearchresult.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreasuresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_treasuresprovider_treasuresprovider__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__treasure_detail_treasure_detail__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__new_project_new_project__ = __webpack_require__(410);
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
        this.treasuresService.getusertreasures(this.UserID).then(function (data) {
            _this.projects = data;
            console.log(_this.projects);
            console.log("hier");
            for (var i = 0; i < _this.projects.length; i++) {
                _this.carlinks[i] = "https://s3.amazonaws.com/katcher/Brands/" + _this.projects[i].brand + "/" + _this.projects[i].model + ".jpg";
                _this.links[i] = "https://s3.amazonaws.com/katcher/PID" + _this.projects[i].PID + "/Photo/1.jpg";
                if (_this.projects[i].uploaded == "yes")
                    _this.buttonimg[i] = "cloud-done";
                else
                    _this.buttonimg[i] = "cloud-upload";
            }
        });
    };
    ;
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
        //this.navCtrl.push(TreasuresEditDetailPage, {project,details});
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__new_project_new_project__["a" /* NewProjectPage */]);
        modal.onDidDismiss(function (data) {
            console.log(data);
            console.log('jetzt');
            //this.projects.push(data);
        });
        modal.present();
        console.log("here12");
    };
    return TreasuresPage;
}());
TreasuresPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-treasures',template:/*ion-inline-start:"/Users/snehak/ionic-heroku-button/src/pages/treasures/treasures.html"*/'<!--\n  Generated template for the TreasuresPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Treasures</ion-title>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-buttons end>\n      <button ion-button (click)="addProject()"><ion-icon name="add">Add Project</ion-icon></button>\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="card-background-page">	\n\n\n	<ion-list>\n\n     <ion-grid>\n\n		 <ion-item *ngFor =" let project of projects; let i  = index ">\n     \n     <ion-row >\n	   <ion-col>  	\n     <ion-card (click)="showDetails(project)" >\n     <img src={{this.carlinks[i]}}>   \n     <div class="card-title" >{{project.year}} {{project.brand}} {{project.model}}</div>\n     <div class="card-subtitle">{{project.errorcode}}</div>\n     </ion-card>\n     <button class="sharebutton" ion-button icon-only (click)="upload(project, i)"><ion-icon name={{this.buttonimg[i]}}></ion-icon></button>\n     </ion-col>\n\n     \n     </ion-row >\n       \n     </ion-item></ion-grid>\n     </ion-list>\n     </ion-content>\n     '/*ion-inline-end:"/Users/snehak/ionic-heroku-button/src/pages/treasures/treasures.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_treasuresprovider_treasuresprovider__["a" /* TreasuresProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
], TreasuresPage);

//# sourceMappingURL=treasures.js.map

/***/ }),

/***/ 763:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 278,
	"./af.js": 278,
	"./ar": 279,
	"./ar-dz": 280,
	"./ar-dz.js": 280,
	"./ar-kw": 281,
	"./ar-kw.js": 281,
	"./ar-ly": 282,
	"./ar-ly.js": 282,
	"./ar-ma": 283,
	"./ar-ma.js": 283,
	"./ar-sa": 284,
	"./ar-sa.js": 284,
	"./ar-tn": 285,
	"./ar-tn.js": 285,
	"./ar.js": 279,
	"./az": 286,
	"./az.js": 286,
	"./be": 287,
	"./be.js": 287,
	"./bg": 288,
	"./bg.js": 288,
	"./bn": 289,
	"./bn.js": 289,
	"./bo": 290,
	"./bo.js": 290,
	"./br": 291,
	"./br.js": 291,
	"./bs": 292,
	"./bs.js": 292,
	"./ca": 293,
	"./ca.js": 293,
	"./cs": 294,
	"./cs.js": 294,
	"./cv": 295,
	"./cv.js": 295,
	"./cy": 296,
	"./cy.js": 296,
	"./da": 297,
	"./da.js": 297,
	"./de": 298,
	"./de-at": 299,
	"./de-at.js": 299,
	"./de-ch": 300,
	"./de-ch.js": 300,
	"./de.js": 298,
	"./dv": 301,
	"./dv.js": 301,
	"./el": 302,
	"./el.js": 302,
	"./en-au": 303,
	"./en-au.js": 303,
	"./en-ca": 304,
	"./en-ca.js": 304,
	"./en-gb": 305,
	"./en-gb.js": 305,
	"./en-ie": 306,
	"./en-ie.js": 306,
	"./en-nz": 307,
	"./en-nz.js": 307,
	"./eo": 308,
	"./eo.js": 308,
	"./es": 309,
	"./es-do": 310,
	"./es-do.js": 310,
	"./es.js": 309,
	"./et": 311,
	"./et.js": 311,
	"./eu": 312,
	"./eu.js": 312,
	"./fa": 313,
	"./fa.js": 313,
	"./fi": 314,
	"./fi.js": 314,
	"./fo": 315,
	"./fo.js": 315,
	"./fr": 316,
	"./fr-ca": 317,
	"./fr-ca.js": 317,
	"./fr-ch": 318,
	"./fr-ch.js": 318,
	"./fr.js": 316,
	"./fy": 319,
	"./fy.js": 319,
	"./gd": 320,
	"./gd.js": 320,
	"./gl": 321,
	"./gl.js": 321,
	"./gom-latn": 322,
	"./gom-latn.js": 322,
	"./he": 323,
	"./he.js": 323,
	"./hi": 324,
	"./hi.js": 324,
	"./hr": 325,
	"./hr.js": 325,
	"./hu": 326,
	"./hu.js": 326,
	"./hy-am": 327,
	"./hy-am.js": 327,
	"./id": 328,
	"./id.js": 328,
	"./is": 329,
	"./is.js": 329,
	"./it": 330,
	"./it.js": 330,
	"./ja": 331,
	"./ja.js": 331,
	"./jv": 332,
	"./jv.js": 332,
	"./ka": 333,
	"./ka.js": 333,
	"./kk": 334,
	"./kk.js": 334,
	"./km": 335,
	"./km.js": 335,
	"./kn": 336,
	"./kn.js": 336,
	"./ko": 337,
	"./ko.js": 337,
	"./ky": 338,
	"./ky.js": 338,
	"./lb": 339,
	"./lb.js": 339,
	"./lo": 340,
	"./lo.js": 340,
	"./lt": 341,
	"./lt.js": 341,
	"./lv": 342,
	"./lv.js": 342,
	"./me": 343,
	"./me.js": 343,
	"./mi": 344,
	"./mi.js": 344,
	"./mk": 345,
	"./mk.js": 345,
	"./ml": 346,
	"./ml.js": 346,
	"./mr": 347,
	"./mr.js": 347,
	"./ms": 348,
	"./ms-my": 349,
	"./ms-my.js": 349,
	"./ms.js": 348,
	"./my": 350,
	"./my.js": 350,
	"./nb": 351,
	"./nb.js": 351,
	"./ne": 352,
	"./ne.js": 352,
	"./nl": 353,
	"./nl-be": 354,
	"./nl-be.js": 354,
	"./nl.js": 353,
	"./nn": 355,
	"./nn.js": 355,
	"./pa-in": 356,
	"./pa-in.js": 356,
	"./pl": 357,
	"./pl.js": 357,
	"./pt": 358,
	"./pt-br": 359,
	"./pt-br.js": 359,
	"./pt.js": 358,
	"./ro": 360,
	"./ro.js": 360,
	"./ru": 361,
	"./ru.js": 361,
	"./sd": 362,
	"./sd.js": 362,
	"./se": 363,
	"./se.js": 363,
	"./si": 364,
	"./si.js": 364,
	"./sk": 365,
	"./sk.js": 365,
	"./sl": 366,
	"./sl.js": 366,
	"./sq": 367,
	"./sq.js": 367,
	"./sr": 368,
	"./sr-cyrl": 369,
	"./sr-cyrl.js": 369,
	"./sr.js": 368,
	"./ss": 370,
	"./ss.js": 370,
	"./sv": 371,
	"./sv.js": 371,
	"./sw": 372,
	"./sw.js": 372,
	"./ta": 373,
	"./ta.js": 373,
	"./te": 374,
	"./te.js": 374,
	"./tet": 375,
	"./tet.js": 375,
	"./th": 376,
	"./th.js": 376,
	"./tl-ph": 377,
	"./tl-ph.js": 377,
	"./tlh": 378,
	"./tlh.js": 378,
	"./tr": 379,
	"./tr.js": 379,
	"./tzl": 380,
	"./tzl.js": 380,
	"./tzm": 381,
	"./tzm-latn": 382,
	"./tzm-latn.js": 382,
	"./tzm.js": 381,
	"./uk": 383,
	"./uk.js": 383,
	"./ur": 384,
	"./ur.js": 384,
	"./uz": 385,
	"./uz-latn": 386,
	"./uz-latn.js": 386,
	"./uz.js": 385,
	"./vi": 387,
	"./vi.js": 387,
	"./x-pseudo": 388,
	"./x-pseudo.js": 388,
	"./yo": 389,
	"./yo.js": 389,
	"./zh-cn": 390,
	"./zh-cn.js": 390,
	"./zh-hk": 391,
	"./zh-hk.js": 391,
	"./zh-tw": 392,
	"./zh-tw.js": 392
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
webpackContext.id = 763;

/***/ }),

/***/ 798:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 802:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 803:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
    function PointsPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    PointsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PointsPage');
    };
    PointsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return PointsPage;
}());
PointsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-points',template:/*ion-inline-start:"/Users/snehak/ionic-heroku-button/src/pages/points/points.html"*/'<!--\n  Generated template for the PointsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  <ion-item>\n    <ion-title>Points</ion-title>\n    <button item-end ion-button color="danger" (click)="dismiss()">\n          <ion-icon name="close"></ion-icon>\n    </button>\n  </ion-item>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\nYou have 17 points\n\n</ion-content>\n'/*ion-inline-end:"/Users/snehak/ionic-heroku-button/src/pages/points/points.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], PointsPage);

//# sourceMappingURL=points.js.map

/***/ }),

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EarnpointsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], EarnpointsPage);

//# sourceMappingURL=earnpoints.js.map

/***/ }),

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreasureseditproviderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(38);
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

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__searchresult_searchresult__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_treasuresprovider_treasuresprovider__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__onesearchresult_onesearchresult__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__new_request_new_request__ = __webpack_require__(88);
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
    function SearchPage(navCtrl, navParams, auth, tres) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.tres = tres;
        this.nrequest = { year: '', make: '', model: '', error: '', symptoms: '' };
        this.carlinks = [];
        this.Userprojects = [];
        this.links = [];
        this.buttonimg = [];
        this.searchval = false;
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad SearchPage');
        this.tres.getuploadedtreasures().then(function (data) {
            _this.projects = data;
            _this.display();
        });
    };
    SearchPage.prototype.search = function () {
        var _this = this;
        var search = this.nrequest.make + " " + this.nrequest.model + " " + this.nrequest.symptoms + " " + this.nrequest.error;
        this.tres.searchtreasures(search)
            .then(function (projects) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__searchresult_searchresult__["a" /* SearchresultPage */], { projects: projects, searchparams: _this.nrequest });
        });
    };
    SearchPage.prototype.display = function () {
        this.Userprojects = [];
        this.carlinks = [];
        this.links = [];
        console.log("in display");
        for (var i = 0; i < this.projects.length; i++) {
            this.Userprojects.push(this.projects[i]);
        }
        for (var i = 0; i < this.Userprojects.length; i++) {
            this.carlinks[i] = "https://s3.amazonaws.com/katcher/Brands/" + this.Userprojects[i].brand + "/" + this.Userprojects[i].model + ".jpg";
            this.links[i] = "https://s3.amazonaws.com/katcher/PID" + this.Userprojects[i].PID + "/Photo/1.jpg";
        }
    };
    SearchPage.prototype.searchsingle = function (ev) {
        var _this = this;
        var val = ev.target.value;
        console.log(val);
        //get value of the searchbar
        if (val != '') {
            this.searchval = true;
            this.tres.searchtreasures(val).then(function (data) {
                console.log(data);
                _this.projects = data;
                _this.display();
            });
        }
        else {
            this.ionViewDidLoad();
        }
    };
    SearchPage.prototype.showDetails = function (project) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__onesearchresult_onesearchresult__["a" /* OnesearchresultPage */], project);
        //let modal = this.modalCtrl.create(TreasureDetailPage );
        //modal.present();
    };
    SearchPage.prototype.newrequest = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__new_request_new_request__["a" /* NewRequestPage */]);
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
        selector: 'page-search',template:/*ion-inline-start:"/Users/snehak/ionic-heroku-button/src/pages/search/search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Search</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="logout()">\n          <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-searchbar (ionInput)="searchsingle($event)"></ion-searchbar>\n\n  <ion-item *ngIf="searchval">\n    <p>Didn\'t find what you are looking for?  </p>\n    <p><a (click)="newrequest()">Create a new request</a></p>\n  </ion-item>\n\n  <ion-list >\n\n     <ion-grid>\n    <ion-item *ngFor =" let Userproject of Userprojects; let i  = index ">\n     \n     <ion-row >\n     <ion-col>    \n       <ion-card (click)="showDetails(Userproject)" >\n       <img src={{this.carlinks[i]}}>   \n       <div class="card-title" >{{Userproject.year}} {{Userproject.brand}} {{Userproject.model}} </div>\n       <div class="card-subtitle">{{Userproject.errorcode}}</div>\n       </ion-card>\n     </ion-col>\n\n     \n     </ion-row >\n       \n     </ion-item></ion-grid>\n     </ion-list>\n\n<!-- 	<form (ngSubmit)="search()" #nrequestform="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            \n            <ion-item>\n              <ion-input type="text" placeholder="Year" name="year" [(ngModel)]="nrequest.year"></ion-input>\n            </ion-item>\n            \n            <ion-item>\n              <ion-input type="text" placeholder="Make" name="make" [(ngModel)]="nrequest.make" ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input type="text" placeholder="Model" name="model" [(ngModel)]="nrequest.model"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input type="text" placeholder="Error Codes" name="error" [(ngModel)]="nrequest.error"></ion-input>\n            </ion-item>\n\n            <ion-item>\n            	<ion-textarea [(ngModel)]=\'nrequest.symptoms\' name="symptoms" placeholder="Describe the issues that you are seeing. What have you already tried to do to solve the issue? What components have you already checked?"></ion-textarea>\n        	</ion-item>\n            \n          </ion-list>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!nrequestform.form.valid" >Search</button>\n        </ion-col>\n      </ion-row>\n      \n    </form> -->\n\n</ion-content>\n'/*ion-inline-end:"/Users/snehak/ionic-heroku-button/src/pages/search/search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_5__providers_treasuresprovider_treasuresprovider__["a" /* TreasuresProvider */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewRequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_requests_requests__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_treasuresprovider_treasuresprovider__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_relation_relation__ = __webpack_require__(145);
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
    function NewRequestPage(navCtrl, navParams, req, tres, auth, rel) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.req = req;
        this.tres = tres;
        this.auth = auth;
        this.rel = rel;
        this.nrequest = { year: '', brand: '', model: '', error: '', symptoms: '' };
        this.searchreq = { year: 'Year', make: 'Make', model: 'Model', error: 'Error', symptoms: 'Describe the issues that you are seeing.' };
        this.nrequestq = { content: '', requesterid: '', helperid: '', projectid: '' };
        this.expertise = { expertise: '' };
        // let tmp = this.navParams.get('searchparams')
        // if(tmp.year)
        //   this.searchreq.year = tmp.year;
        // if(tmp.make != '')
        //   this.searchreq.make = tmp.make;
        // if(tmp.model != '')
        //   this.searchreq.model = tmp.model;
        // if(tmp.error != '')
        //   this.searchreq.error = tmp.error;
        // if(tmp.symptoms != '')
        //   this.searchreq.symptoms = tmp.symptoms;
    }
    NewRequestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewRequestPage');
        console.log(this.nrequest);
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
            //match: currently, we are simply doing an expertise text search
            _this.auth.searchbyexpertise(_this.expertise.expertise).then(function (data) {
                var t = data[0];
                _this.nrequestq.helperid = t._id;
                console.log(_this.nrequestq);
                //create new request
                _this.req.createrequest(_this.nrequestq).then(function (data) {
                    console.log("before pop");
                    _this.rel.addupdaterelation({ requesterid: _this.nrequestq.requesterid, helperid: _this.nrequestq.helperid });
                    _this.navCtrl.pop();
                });
            });
        });
    };
    return NewRequestPage;
}());
NewRequestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-new-request',template:/*ion-inline-start:"/Users/snehak/ionic-heroku-button/src/pages/new-request/new-request.html"*/'<!--\n  Generated template for the NewRequestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>NewRequest</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<form (ngSubmit)="send()" #nreqform="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            \n            <ion-item>\n              <ion-label stacked>Year</ion-label>\n              <ion-input type="text" name="year" [(ngModel)]="nrequest.year"></ion-input>\n            </ion-item>\n            \n            <ion-item>\n              <ion-label stacked>Make</ion-label>\n              <ion-input type="text" name="brand" [(ngModel)]="nrequest.brand" ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label stacked>Model</ion-label>\n              <ion-input type="text" name="model" [(ngModel)]="nrequest.model"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label stacked>ErrorCodes</ion-label>\n              <ion-input type="text"  name="error" [(ngModel)]="nrequest.error"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label stacked>Symptoms</ion-label>\n            	<ion-textarea [(ngModel)]=\'nrequest.symptoms\' name="symptoms" placeholder="Describe the issues you are seeing."></ion-textarea>\n        	  </ion-item>\n\n            <ion-item>\n              <ion-textarea [(ngModel)]=\'nrequestq.content\' name="content" placeholder="What help do you need? Please include what have you already tried to do to solve the issue and what components you have already checked?"></ion-textarea>\n            </ion-item>\n\n            <ion-item>\n              <ion-textarea [(ngModel)]=\'expertise.expertise\' placeholder="What kind of expertise should your helper have?" name="expertise" ></ion-textarea>\n            </ion-item>\n            \n          </ion-list>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!nreqform.form.valid">Ask for Help</button>\n        </ion-col>\n      </ion-row>\n      \n    </form>\n</ion-content>\n'/*ion-inline-end:"/Users/snehak/ionic-heroku-button/src/pages/new-request/new-request.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_requests_requests__["a" /* RequestsProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_treasuresprovider_treasuresprovider__["a" /* TreasuresProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__providers_relation_relation__["a" /* RelationProvider */]])
], NewRequestPage);

//# sourceMappingURL=new-request.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Chat */
/* unused harmony export Comment */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_treasuresprovider_treasuresprovider__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
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
    function Chat(id, content, helperID, requesterID, helpername, username, year, make, model, error, symptoms, complete) {
        this._id = id;
        this.content = content;
        this.helperID = helperID;
        this.helpername = helpername;
        this.requesterID = requesterID;
        this.requestername = username;
        this.year = year;
        this.make = make;
        this.model = model;
        this.error = error;
        this.symptoms = symptoms;
        this.complete = complete;
        this.opendate = "";
    }
    Chat.prototype.setopendate = function (opendate) {
        this.opendate = opendate;
    };
    return Chat;
}());

var Comment = (function () {
    function Comment() {
    }
    return Comment;
}());

var RequestsProvider = (function () {
    function RequestsProvider(http, auth, tres) {
        this.http = http;
        this.auth = auth;
        this.tres = tres;
        this.disc = Array();
        console.log('Hello RequestsProvider Provider');
    }
    RequestsProvider.prototype.convertdatatochat = function (data) {
        var _this = this;
        var _loop_1 = function () {
            console.log("inloop");
            var r = data[i];
            if (r.helperID)
                helpername = this_1.auth.getusernamebyid(r.helperID);
            else
                helpername = "Not Matched";
            //find project
            this_1.tres.getonetreasure(r.ProjectID)
                .then(function (project) {
                console.log(project);
                data2 = project[0];
                request = new Chat(r._id, r.content, r.helperID, r.requesterID, helpername, _this.username, data2.year, data2.brand, data2.model, data2.errorcode, data2.symptoms, data2.complete);
                // if(data2.opendate){
                //   request.setopendate(data2.opendate.getTime().toString())
                // } 
                _this.chats.push(request);
                console.log(request);
            });
        };
        var this_1 = this, helpername, request, data2;
        for (var i = 0; i < data.length; i++) {
            _loop_1();
        }
    };
    //where id is the _id of the user
    RequestsProvider.prototype.getallrequests = function (id) {
        var _this = this;
        this.chats = new Array();
        this.username = this.auth.getUserName();
        return new Promise(function (resolve) {
            _this.http.get('/api/question/reqid/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log("in subscribe");
                if (data) {
                    console.log(data);
                    _this.convertdatatochat(data);
                }
                _this.http.get('/api/question/helpid/' + id)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    if (data) {
                        console.log("in here after  subscribe");
                        _this.convertdatatochat(data);
                    }
                });
            });
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
    RequestsProvider.prototype.addcomment = function (info) {
        var _this = this;
        console.log(info);
        return new Promise(function (resolve) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post('/api/disc', JSON.stringify(info), { headers: headers })
                .subscribe(function (res) {
                resolve(res);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__providers_treasuresprovider_treasuresprovider__["a" /* TreasuresProvider */]])
], RequestsProvider);

//# sourceMappingURL=requests.js.map

/***/ })

},[420]);
//# sourceMappingURL=main.js.map