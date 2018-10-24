(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./not-found/not-found.module": [
		"./src/app/not-found/not-found.module.ts",
		"not-found-not-found-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _now_playing_now_playing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./now-playing/now-playing.component */ "./src/app/now-playing/now-playing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    // {path: '', redirectTo: '', pathMatch: 'full'},
    { path: '', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"] },
    { path: 'nowPlaying', component: _now_playing_now_playing_component__WEBPACK_IMPORTED_MODULE_4__["NowPlayingComponent"] },
    { path: 'blog', component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"] },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* AppComponent's private CSS styles */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'The Jack O\'Brien';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _now_playing_now_playing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./now-playing/now-playing.component */ "./src/app/now-playing/now-playing.component.ts");
/* harmony import */ var _spotify_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./spotify.service */ "./src/app/spotify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 // <-- NgModel lives here










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__["LandingComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _blog_blog_component__WEBPACK_IMPORTED_MODULE_10__["BlogComponent"],
                _now_playing_now_playing_component__WEBPACK_IMPORTED_MODULE_11__["NowPlayingComponent"]
            ],
            providers: [
                _spotify_service__WEBPACK_IMPORTED_MODULE_12__["SpotifyService"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__["HashLocationStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.css":
/*!*****************************************!*\
  !*** ./src/app/blog/blog.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.post {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 40px 0;\n}\n\n.post-author img {\n    width: 50px;\n    height: 50px;\n    vertical-align: middle;\n    border-radius: 50%;\n}\n\n.post-author span {\n    margin-left: 16px;\n}\n\n.post-container:nth-child(even) {\n    background-color: #f2f2f2;\n}\n\n.post-date {\n    color: #D2D2D2;\n    font-size: 14px;\n    font-weight: bold;\n    text-transform: uppercase;\n    letter-spacing: 0.1em;\n}\n\n.post-container {\n    padding-left: 10px;\n    padding-right: 10px;\n}\n\n.post-content p {\n    justify-content: end;\n}\n\n.author-name {\n    -webkit-text-emphasis: bold;\n            text-emphasis: bold;\n}"

/***/ }),

/***/ "./src/app/blog/blog.component.html":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"post-container\">\n    <div class=\"post\">\n      <div class=\"post-author\">\n        <img src=\"assets/me.png\">\n        <span>Jack OB</span>\n      </div>\n      <p class=\"post-date\">Post 1</p>\n      <h3 class=\"post-title\">Groovin Against Leukemia</h3>\n      <div class=\"post-content\">\n        <p> Alright you got me, I don't have a blog. But check out my fundraising page for the New\n          York Maratahon run to benefit Leukemia Lymphoma Society\n          <a href=\"https://pages.teamintraining.org/nyc/nyc18/TheJackOBrien\">here</a>.\n          I've been updating this 'blog' since I started my training in May!\n        </p>\n      </div>\n    </div>\n    <div class=\"post\">\n      <div class=\"post-author\">\n        <img src=\"assets/me.png\">\n        <span class=\"author-name\">Jack OB</span>\n      </div>\n      <p class=\"post-date\">Post 2</p>\n      <h3 class=\"post-title\">Now Playing</h3>\n      <div class=\"post-content\">\n        <p> Now Playing App is now active! See what I'm listening to, my thoughts on it, and listen to it yourself!\n          Check it out in the toolbar above!\n        </p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#footer {\n    background-color: #2f2f2f;\n    padding: 30px 0;\n}\n\n#footer h4 {\n    color: white;\n    text-transform: uppercase;\n    letter-spacing: 0.1em;\n}\n\n#footer p {\n    color: white;\n}\n\n.column {\n    min-width: 200px;\n    display: inline-block;\n    vertical-align: top;\n    padding-left: 10px;\n    padding-right: 10px;\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"footer\">\n  <div class=\"container\">\n    <div class=\"column\">\n      <h4>A Few Great Links</h4>\n      <p>\n        <a href=\"https://pages.teamintraining.org/nyc/nyc18/TheJackOBrien\">LLS NYC Marathon Fundraiser</a>\n        <br>\n        <a href=\"https://www.instagram.com/oldrelly/\">Old Relly Instagram</a>\n        <br>\n        <a href=\"https://github.com/jfobrien29/\">GitHub</a>\n        <br>\n        <a href=\"https://www.linkedin.com/in/john-jack-o-brien-53bbaa105/\">LinkedIn</a>\n        <br>\n        <a href=\"mailto:thejackobrien29@gmail.com\">Email Me</a>\n      </p>\n    </div>\n    \n    <div class=\"column\">\n      <h4>My Shameless Plug</h4>\n      <p>I'm a builder. Princeton Engineering. Computer Science. <br>\n        NCAA Lacrosse. Tiger Bed Rentals. Old Relly. IBM Blockchain.\n      </p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#header {\n    background-color: #CC6600;\n    height: 100px;\n    line-height: 100px;\n}\n\n#header a {\n    color: white;\n    text-decoration: none;\n    text-transform: uppercase;\n    letter-spacing: 0.1em;\n}\n\n#header a:hover {\n    color: #222;\n}\n\n#header-title {\n    display: block;\n    float: left;\n    font-size: 25px;\n    font-weight: bold;\n    padding-left: 10px;\n}\n\n#header-nav {\n    display: block;\n    float: right;\n    margin-top: 0;\n}\n\n#header-nav li {\n    display: inline;\n    padding-left: 20px;\n}\n\n.container {\n    max-width: 900px;\n    margin: 0 auto;\n}\n\n.lastElm {\n    padding-right: 10px;\n}\n\n@media (max-width:680px){\n    #header {\n        background-color: #CC6600;\n        height: 200px;\n        line-height: 60px;\n    }\n\n    #header-title {\n        display: block;\n        float: none;\n        font-size: 25px;\n        font-weight: bold;\n        padding-left: 0px;\n        padding-top: 10px;\n    }\n\n    #header a {\n        color: white;\n        text-decoration: none;\n        text-transform: uppercase;\n        letter-spacing: 0.1em;\n        text-align: center;\n    }\n\n    #header-nav {\n        display: block;\n        float: none;\n        margin-top: 0;\n        line-height: 40px;\n        text-align: center;\n        padding-left: 0px;\n    }\n\n    #header-nav li {\n        display: block;\n        padding-left: 20px;\n    }\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header\">\n  <div class=\"container\">\n    <a id=\"header-title\" routerLink=\"\">The Jack O'Brien</a>\n    <ul id=\"header-nav\">\n      <li>\n        <a routerLink=\"nowPlaying\">Now Playing</a>\n      </li>\n      <li>\n        <a routerLink=\"blog\">Blog</a>\n      </li>\n      <li>\n        <a class=\"lastElm\" href=\"../../assets/Jack_OBrien_Resume_October_2018.pdf\" download>Resume</a>\n      </li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.css":
/*!***********************************************!*\
  !*** ./src/app/landing/landing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    /* LandingComponent's private CSS styles */\n    \n    .about{\n        max-width: 800px;\n        margin: 0 auto;\n        padding: 40px 0;\n        text-align: center\n    }\n    \n    .about-author img {\n        border-radius: 50%;\n    }"

/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"container\">\n    <div class=\"about\">\n      <div class=\"about-author\">\n        <img src=\"../../assets/me.png\">\n      </div>\n      <h1 class=\"about-title\">Who is The Jack O'Brien?</h1>\n      <div class=\"about-content\">\n        <p>Hey! There are many \"Jack O'Briens\" in the world, but I'm <em><b>the</b></em> one you're looking for!\n          <br>\n          <br>\n          I'm currently a full stack developer for IBM Blockchain. I like solving complex\n          problems and tackling big projects in and out of my work life in New York City. \n          This site is a constant work in\n          progress with great links, info, and projects, so take a look around!</p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
        this.getBooks();
    };
    LandingComponent.prototype.getBooks = function () {
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/now-playing/now-playing.component.css":
/*!*******************************************************!*\
  !*** ./src/app/now-playing/now-playing.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".now-playing{\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 40px 0;\n    text-align: center\n}\n\n.loader img{\n    max-width: 400px;\n}\n\n.album-art{\n    padding: 10px;\n    background-color: #333;\n    border-radius: 3%;\n    height: 300px;\n    width: 300px;\n}\n\n.my-thoughts-container {\n    background-color: #CC6600;\n    max-width: 520px;\n    padding: 0px;\n    text-align: center;\n    margin: 0 auto;\n    border-width: medium;\n    border-color: #333;\n    padding-bottom: 5px;\n    border-radius: 2%;\n}\n\n.my-thoughts-container h4{\n    padding: 4px;\n    font-weight: normal;\n    border: #333;\n    border-width: medium;\n    padding-bottom: 0px;\n}\n\n.my-thoughts-container p{\n    padding-top: 0px;\n    padding-bottom: 0px;\n    line-height: 0px;\n    font-weight: bold;\n    padding-left: 3px;\n    padding-right: 3px;\n    height: auto;\n    line-height: 1.5;\n    letter-spacing: .08em;\n    font-size: large;\n    font-style: italic;\n}\n\n@media (max-width:320px){\n    .album-art{\n        height: 90%;\n        width: 90%;\n    }\n}\n\n@media (max-width:546px){\n    .my-thoughts-container{\n        width: 90%;\n    }\n}"

/***/ }),

/***/ "./src/app/now-playing/now-playing.component.html":
/*!********************************************************!*\
  !*** ./src/app/now-playing/now-playing.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"container\">\n    <div class=\"now-playing\">\n\n      <div *ngIf=\"isLoading\">\n        <div class=\"loader\"><img src=\"https://i.redd.it/ounq1mw5kdxy.gif\"></div>\n      </div>\n\n      <div *ngIf=\"!isLoading\">\n\n        <div *ngIf=\"isPlaying\">\n          <h1 class=\"page-header\"><img src=\"../../assets/bars.gif\" height=\"20\" width=\"20\"> Jack Is Listening To\n            Music! <img src=\"../../assets/bars.gif\" height=\"20\" width=\"20\"></h1>\n          <h2 class=\"song-tile\">Song: {{songTitle}}</h2>\n          <h2 class=\"song-artists\">Artist{{(hasMultipleArtists) ? 's' : ''}}: {{artists}}</h2>\n          <div>\n            <img class=\"album-art\" src={{songAlbumImage}}>\n          </div>\n\n          <div class=\"my-thoughts-container\">\n            <h4>My thoughts on this song: </h4>\n            <p>\"{{(review == '') ? 'No thoughts recorded yet!' : review}}\"</p>\n          </div>\n\n          <div class=\"about-content\">\n            <p>Listen to this song <a href={{externalLink}}>in your browser</a> or open it up <a href={{spotifyUri}}>directly\n                in Spotify</a>!</p>\n          </div>\n        </div>\n\n        <div *ngIf=\"!isPlaying\">\n          <h1 class=\"page-header\"> Jack Is Not Listening To Music.</h1>\n          <p>Check back later for some jams!</p>\n        </div>\n\n        <div>\n          <p>I wanted to create a way to share my music at all times, especially during the 2018 New York Marathon.\n            Check out the original version of this page <a href=\"https://jacks-now-playing.herokuapp.com/\">here</a> or\n            view the code on <a href=\"https://github.com/jfobrien29/spotify-marathon-api\">github</a>.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/now-playing/now-playing.component.ts":
/*!******************************************************!*\
  !*** ./src/app/now-playing/now-playing.component.ts ***!
  \******************************************************/
/*! exports provided: NowPlayingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NowPlayingComponent", function() { return NowPlayingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _spotify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spotify.service */ "./src/app/spotify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NowPlayingComponent = /** @class */ (function () {
    function NowPlayingComponent(spotifyService) {
        this.spotifyService = spotifyService;
    }
    NowPlayingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.spotifyService.getSessionData().then(function (data) {
            _this.data = data;
            _this.isPlaying = _this.data.isPlaying;
            if (_this.isPlaying) {
                _this.songTitle = _this.data.item.name;
                _this.songAlbumImage = _this.data.item.album.images[0].url;
                _this.externalLink = _this.data.item.external_urls.spotify;
                _this.spotifyUri = _this.data.item.uri;
                _this.artists = _this.data.item.artists.reduce(function (artistString, currArtist, index) {
                    return (index === 0) ? currArtist.name : artistString + ', ' + currArtist.name;
                }, '');
                _this.hasMultipleArtists = _this.data.item.artists.length > 1;
                _this.review = _this.data.review;
            }
            setTimeout(function () { _this.isLoading = false; }, 1500);
        });
    };
    NowPlayingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-now-playing',
            template: __webpack_require__(/*! ./now-playing.component.html */ "./src/app/now-playing/now-playing.component.html"),
            styles: [__webpack_require__(/*! ./now-playing.component.css */ "./src/app/now-playing/now-playing.component.css")]
        }),
        __metadata("design:paramtypes", [_spotify_service__WEBPACK_IMPORTED_MODULE_1__["SpotifyService"]])
    ], NowPlayingComponent);
    return NowPlayingComponent;
}());



/***/ }),

/***/ "./src/app/spotify.service.ts":
/*!************************************!*\
  !*** ./src/app/spotify.service.ts ***!
  \************************************/
/*! exports provided: SpotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotifyService", function() { return SpotifyService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpotifyService = /** @class */ (function () {
    function SpotifyService(http) {
        this.http = http;
        this.BASE_URI = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].spotify_url;
    }
    SpotifyService.prototype.getSessionData = function () {
        return this.http.get(this.BASE_URI + "data").toPromise();
    };
    SpotifyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SpotifyService);
    return SpotifyService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    spotify_url: 'https://jacks-now-playing.herokuapp.com/'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/John.OBrien@ibm.com/Dev/heroku/personal-site-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map