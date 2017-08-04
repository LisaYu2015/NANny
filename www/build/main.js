webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h3>Ionic Menu Starter</h3>\n\n\n\n  <p>\n\n    This is the HomePage\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreasuresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_treasuresprovider_treasuresprovider__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__treasure_detail_treasure_detail__ = __webpack_require__(198);
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
    function TreasuresPage(navCtrl, navParams, treasuresService, modalCtrl, http, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.treasuresService = treasuresService;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.links = [];
        this.carlinks = [];
        this.buttonimg = [];
        this.UserID = 1;
        this.Userprojects = [];
    }
    TreasuresPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad TreasuresPage');
        this.treasuresService.gettreasures().then(function (data) {
            _this.projects = data;
            for (var i = 0; i < _this.projects.length; i++) {
                if (_this.projects[i].TID == _this.UserID)
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
    return TreasuresPage;
}());
TreasuresPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-treasures',template:/*ion-inline-start:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\pages\treasures\treasures.html"*/'<!--\n\n  Generated template for the TreasuresPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Treasures</ion-title>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="card-background-page">	\n\n\n\n\n\n	<ion-list >\n\n\n\n     <ion-grid>\n\n		<ion-item *ngFor =" let Userproject of Userprojects; let i  = index ">\n\n     \n\n     <ion-row >\n\n	   <ion-col>  	\n\n     <ion-card (click)="showDetails(Userproject)" >\n\n     <img src={{this.carlinks[i]}}>   \n\n     <div class="card-title" >{{Userproject.year}} {{Userproject.brand}} {{Userproject.model}}      {{i%2==0}}</div>\n\n     <div class="card-subtitle">{{Userproject.errorcode}}</div>\n\n     </ion-card>\n\n     <button class="sharebutton" ion-button icon-only (click)="upload(Userproject, i)"><ion-icon name={{this.buttonimg[i]}}></ion-icon></button>\n\n     </ion-col>\n\n\n\n     \n\n     </ion-row >\n\n       \n\n     </ion-item></ion-grid>\n\n     </ion-list>\n\n     </ion-content>\n\n     '/*ion-inline-end:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\pages\treasures\treasures.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_treasuresprovider_treasuresprovider__["a" /* TreasuresProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
], TreasuresPage);

//# sourceMappingURL=treasures.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreasureDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_treasuresprovider_treasuresprovider__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_treasuresdetailprovider_treasuresdetailprovider__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_treasures_edit_detail_treasures_edit_detail__ = __webpack_require__(200);
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
    function TreasureDetailPage(navCtrl, treasuresService, navParams, treasuresDetailService, toastCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.treasuresService = treasuresService;
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
                if (_this.details[i].PID == _this.ProjID.PID) {
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
    return TreasureDetailPage;
}());
TreasureDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-treasure-detail',template:/*ion-inline-start:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\pages\treasure-detail\treasure-detail.html"*/'<!--\n\n  Generated template for the TreasuresPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Details</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n      <ion-card>\n\n        <ion-card-content>\n\n\n\n            <ion-fab top right>\n\n              <button ion-fab><ion-icon name="construct"></ion-icon></button>\n\n              <ion-fab-list>\n\n                <button ion-fab color="danger" (click)="editDetails(ProjID,projectdetails)"><ion-icon name="create"></ion-icon></button>\n\n                <button ion-fab color="primary" (click)="complete(ProjID)"><ion-icon name={{this.completestatusimg}}></ion-icon></button>\n\n                <button ion-fab color="green" (click)="upload1(ProjID)"><ion-icon name={{this.projectuploadstatus}}></ion-icon></button>\n\n                </ion-fab-list>\n\n                </ion-fab>\n\n\n\n       \n\n            <ion-card-title>\n\n                [{{this.completestatus}}] {{ProjID.year}} {{this.ProjID.brand}} {{this.ProjID.model}} \n\n            </ion-card-title>\n\n            <p>Error Code: {{this.ProjID.errorcode}}</p>         \n\n            <ul>Symptoms:\n\n            <li *ngFor =" let projectsymptom of projectsymptoms; let i = index ">{{this.projectsymptom.sentence}} </li>  \n\n            </ul>\n\n            <p></p>\n\n            <ul>Diagnosis:\n\n            <li *ngFor =" let projectdiagnosi of projectdiagnosis; let i = index ">{{this.projectdiagnosi.sentence}} </li>  \n\n            </ul>\n\n            <p></p>\n\n            <ul>conclusion:\n\n            <li *ngFor =" let projectconclusion of projectconclusions; let i = index ">{{this.projectconclusion.sentence}} </li>  \n\n            </ul>\n\n\n\n             <p *ngFor =" let link of links; let i = index ">\n\n            <img src={{this.links[i]}}/>\n\n            </p>\n\n            </ion-card-content>\n\n            </ion-card>\n\n            </ion-content>\n\n\n\n     '/*ion-inline-end:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\pages\treasure-detail\treasure-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_treasuresprovider_treasuresprovider__["a" /* TreasuresProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_treasuresdetailprovider_treasuresdetailprovider__["a" /* TreasuresDetailProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
], TreasureDetailPage);

//# sourceMappingURL=treasure-detail.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreasuresDetailProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(51);
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
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.http.get('/api/Detail')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    return TreasuresDetailProvider;
}());
TreasuresDetailProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TreasuresDetailProvider);

var _a;
//# sourceMappingURL=treasuresdetailprovider.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreasuresEditDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_treasuresprovider_treasuresprovider__ = __webpack_require__(49);
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
        this.details = [];
        var confirm = this.alertCtrl.create({
            title: 'Save',
            message: 'Do you want to save your changes and overwrite your data?',
            buttons: [
                {
                    text: 'Save',
                    handler: function () {
                        console.log(_this.newbrand);
                        if (_this.newyear != _this.ProjID.year || _this.newbrand != _this.ProjID.brand || _this.newmodel != _this.ProjID.model || _this.newerrorcode != _this.ProjID.errorcode) {
                            _this.ProjID.year = _this.newyear;
                            _this.ProjID.brand = _this.newbrand;
                            _this.ProjID.model = _this.newmodel;
                            _this.ProjID.errorcode = _this.newerrorcode;
                            console.log(_this.ProjID);
                            _this.treasuresService.posttreasures(_this.ProjID);
                        }
                        for (var i = 0; i < _this.projectproblems.length; i++) {
                            if (_this.newprojectproblems[i] != _this.projectproblems[i].sentence) {
                                _this.projectproblems[i].sentence = _this.newprojectproblems[i];
                                _this.treasuresService.postdetails(_this.projectproblems[i]);
                            }
                        }
                        for (var i = 0; i < _this.projectconclusions.length; i++) {
                            if (_this.newprojectconclusions[i] != _this.projectconclusions[i].sentence) {
                                _this.projectconclusions[i].sentence = _this.newprojectconclusions[i];
                                _this.treasuresService.postdetails(_this.projectconclusions[i]);
                            }
                        }
                        for (var i = 0; i < _this.projectdiagnosis.length; i++) {
                            if (_this.newprojectdiagnosis[i] != _this.projectdiagnosis[i].sentence) {
                                _this.projectdiagnosis[i].sentence = _this.newprojectdiagnosis[i];
                                _this.treasuresService.postdetails(_this.projectdiagnosis[i]);
                            }
                        }
                        for (var i = 0; i < _this.projectsymptoms.length; i++) {
                            if (_this.newprojectsymptoms[i] != _this.projectsymptoms[i].sentence) {
                                console.log("a");
                                _this.projectsymptoms[i].sentence = _this.newprojectsymptoms[i];
                                _this.treasuresService.postdetails(_this.projectsymptoms[i]);
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
    return TreasuresEditDetailPage;
}());
TreasuresEditDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-treasures-edit-detail',template:/*ion-inline-start:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\pages\treasures-edit-detail\treasures-edit-detail.html"*/'<!--\n  Generated template for the TreasuresEditDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n   	<ion-title>Edit</ion-title>\n   	  <button ion-button top right color="light" (click)="dismiss()">\n          <ion-icon name="close"></ion-icon>\n      </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n     \n<ion-list>\n       \n            <ion-item>\n            <ion-label stacked>\n                Year\n            </ion-label>\n            <ion-input type="number" placeholder="{{this.newyear}}"    [(ngModel)]="this.newyear"></ion-input>\n            </ion-item>\n\n            <ion-item>\n            <ion-label stacked>\n                Brand\n            </ion-label>\n            <ion-input type="text" placeholder="{{this.newbrand}}" [(ngModel)]="this.newbrand"></ion-input>\n            </ion-item>\n\n            <ion-item>\n            <ion-label stacked>\n                Model\n            </ion-label>\n            <ion-input type="text" placeholder="{{this.newmodel}}" [(ngModel)]="this.newmodel"></ion-input>\n            </ion-item>\n\n            <ion-item>\n            <ion-label stacked>\n                Error Code\n            </ion-label>\n            <ion-input type="text" placeholder="{{this.newerrorcode}}" [(ngModel)]="this.newerrorcode"></ion-input>\n            </ion-item>\n</ion-list>\n\n     \n            \n<ion-list>\n        	<ion-item *ngFor =" let projectsymptom of projectsymptoms; let i = index ">\n        		<ion-label stacked>Symptom: {{i+1}}</ion-label>\n        		<ion-input type="text" placeholder="{{newprojectsymptoms[i]}}"     [(ngModel)]="newprojectsymptoms[i]"></ion-input>\n        	</ion-item>\n			<ion-item *ngFor =" let projectdiagnosi of projectdiagnosis; let i = index ">\n        		<ion-label stacked>Diagnosis Step: {{i+1}}</ion-label>\n        		<ion-input type="text" placeholder="{{newprojectdiagnosis[i]}}"   [(ngModel)]="newprojectdiagnosis[i]"></ion-input>\n        	</ion-item>\n        	<ion-item *ngFor = " let projectconclusion of projectconclusions; let i = index ">\n        		<ion-label stacked>Conclusion: {{i+1}}</ion-label>\n        		<ion-input type="text" placeholder="{{newprojectconclusions[i]}}"   [(ngModel)]="newprojectconclusions[i]"></ion-input>\n        	</ion-item>\n\n\n</ion-list>  \n\n<ion-item>\n<button ion-button full large (click)="save()">Save</button>\n</ion-item>  \n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\pages\treasures-edit-detail\treasures-edit-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_treasuresprovider_treasuresprovider__["a" /* TreasuresProvider */]])
], TreasuresEditDetailPage);

//# sourceMappingURL=treasures-edit-detail.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_treasures_treasures__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_treasure_detail_treasure_detail__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_treasures_edit_detail_treasures_edit_detail__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_auth_service_auth_service__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_treasuresprovider_treasuresprovider__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_treasuresdetailprovider_treasuresdetailprovider__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_treasureseditprovider_treasureseditprovider__ = __webpack_require__(271);
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
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_treasures_treasures__["a" /* TreasuresPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_treasure_detail_treasure_detail__["a" /* TreasureDetailPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_treasures_edit_detail_treasures_edit_detail__["a" /* TreasuresEditDetailPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_14__angular_http__["c" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_treasures_treasures__["a" /* TreasuresPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_treasure_detail_treasure_detail__["a" /* TreasureDetailPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_treasures_edit_detail_treasures_edit_detail__["a" /* TreasuresEditDetailPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_12__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_treasuresprovider_treasuresprovider__["a" /* TreasuresProvider */],
            __WEBPACK_IMPORTED_MODULE_15__providers_treasuresdetailprovider_treasuresdetailprovider__["a" /* TreasuresDetailProvider */],
            __WEBPACK_IMPORTED_MODULE_16__providers_treasureseditprovider_treasureseditprovider__["a" /* TreasureseditproviderProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_treasures_treasures__ = __webpack_require__(197);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Treasures', component: __WEBPACK_IMPORTED_MODULE_6__pages_treasures_treasures__["a" /* TreasuresPage */] }
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\pages\profile\profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Profile</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\iik8fe\Documents\Visual Studio 2017\Projects\ionic-heroku-button\src\pages\profile\profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { Http } from '@angular/http';


var User = (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
    }
    return User;
}());

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var AuthServiceProvider = (function () {
    function AuthServiceProvider() {
    }
    //  constructor(public http: Http) {
    //    console.log('Hello AuthServiceProvider Provider');
    //  }
    AuthServiceProvider.prototype.login = function (credentials) {
        var _this = this;
        if (credentials.email === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                // At this point make a request to your backend to make a real check!
                var access = (credentials.password === "pass" && credentials.email === "email");
                _this.currentUser = new User('Simon', 'saimon@devdactic.com');
                observer.next(access);
                observer.complete();
            });
        }
    };
    AuthServiceProvider.prototype.register = function (credentials) {
        if (credentials.email === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            // At this point store the credentials to your backend!
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                observer.next(true);
                observer.complete();
            });
        }
    };
    AuthServiceProvider.prototype.getUserInfo = function () {
        return this.currentUser;
    };
    AuthServiceProvider.prototype.logout = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this.currentUser = null;
            observer.next(true);
            observer.complete();
        });
    };
    return AuthServiceProvider;
}());
AuthServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], AuthServiceProvider);

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreasureseditproviderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(51);
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

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreasuresProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(51);
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
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.http.get('/api/Project')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    TreasuresProvider.prototype.posttreasures = function (project) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        //project.uploaded="yes"
        console.log(project);
        headers.append('Content-Type', 'application/json');
        this.http.post('/api/Project', JSON.stringify(project), { headers: headers })
            .subscribe(function (res) {
            //console.log(res.json());
        });
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
    return TreasuresProvider;
}());
TreasuresProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TreasuresProvider);

var _a;
//# sourceMappingURL=treasuresprovider.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map