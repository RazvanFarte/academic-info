(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import \"http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css\";\n\n/deep/ html {\n  height: 100%;\n  box-sizing: border-box;\n}\n\n/deep/ body {\n  position: relative;\n  margin: 0;\n  padding-bottom: 6rem;\n  min-height: 100%;\n}\n\n/deep/ a {\n  background-color: transparent !important;\n  color: black !important;\n\n}\n\n.redirect {\n  background-color: transparent;\n\n}\n\n.header-text {\n  font-size: 26px;\n  margin: 10px 30px 10px 30px;\n}\n\n.header-icon {\n  font-size: 36px;\n  margin: 10px 30px 10px 30px;\n}\n\n/deep/ .nav-link .btn .btn-default {\n  margin: 0 10px 0 0 !important;\n  cursor: pointer !important;\n  font-size: 20px !important;\n}\n\n/deep/ *,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\n/deep/ #wrap {\n  margin: 0 auto;\n  width: 94%;\n}\n\n.academic-logo {\n  height: 7vh;\n}\n\n/deep/ #main {\n  overflow: hidden;\n  padding-bottom: 50px;\n  margin-top: 5em;\n  min-width: 100%;\n  width: 100%;\n}\n\n/deep/ nav {\n  box-shadow: 0 8px 6px -6px #000;\n}\n\n/deep/ .topnav-right {\n  float: right;\n}\n\n/*\n.footer {\n  position: absolute;\n  overflow: hidden;\n  z-index: 9000;\n  bottom: 0;\n  width: 100%;\n  right: 0;\n  left: 0;\n  height: 60px;\n  -webkit-box-shadow: 0 8px 6px -6px #000;\n  -moz-box-shadow: 0 8px 6px -6px #000;\n  box-shadow: 0 -8px 6px -6px #000;\n}\n*/\n\n.footer-distributed {\n  position: absolute;\n  overflow: hidden;\n  z-index: 9000;\n  margin-right: 0;\n  bottom: 0;\n  right: 0;\n  background-color: lightgrey;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\n  box-sizing: border-box;\n  width: 100vw;\n  text-align: left;\n  font: bold 1vw sans-serif;\n  padding: 0.5vw 0.5vw;\n}\n\n.footer-distributed .footer-left,\n.footer-distributed .footer-center,\n.footer-distributed .footer-right {\n  display: inline-block;\n  vertical-align: top;\n}\n\n.footer-right {\n  margin-top: 2vh;\n}\n\n/* Footer left */\n\n.footer-distributed .footer-left {\n  width: 18vw;\n  margin-left: 2vw;\n  margin-right: 5vw;\n}\n\n/* The company logo */\n\n.footer-distributed h3 {\n  color: black;\n  font: normal 1vw 'Cookie', cursive;\n  margin: 0;\n}\n\n.footer-distributed h3 span {\n  color: powderblue;\n}\n\n/* Footer links */\n\n.footer-distributed .footer-links {\n  color: black;\n  margin: 0.1vw 0 0.1vw;\n  padding: 0;\n}\n\n.footer-distributed .footer-links a {\n  display: inline-block;\n  line-height: 1.8;\n  text-decoration: none;\n  color: inherit;\n}\n\n/* Footer Center */\n\n.footer-distributed .footer-center {\n  width: 40vw;\n}\n\n.footer-distributed .footer-center i {\n  background-color: lightgrey;\n  color: black;\n  font-size: 25px;\n  width: 38px;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 42px;\n  margin: 10px 15px;\n  vertical-align: middle;\n  display: inline;\n}\n\n.footer-distributed .footer-center i.fa-envelope {\n  font-size: 1vw;\n  display: inline;\n}\n\n.footer-distributed .footer-center i.fa-map-marker {\n  font-size: 1vw;\n  display: inline;\n}\n\n.footer-distributed .footer-center p {\n  display: inline-block;\n  color: black;\n  vertical-align: middle;\n}\n\n.footer-distributed .footer-center .info {\n  display: inline;\n  margin-right: 5vw;\n  width: 17.5vw;\n}\n\n.footer-distributed .footer-center p span {\n  display: block;\n  font-weight: normal;\n  font-size: 0.8vw;\n  line-height: 2;\n}\n\n.footer-distributed .footer-center p a {\n  color: #5383d3;\n  text-decoration: none;\n}\n\n/* Footer Right */\n\n.footer-distributed .footer-right {\n  width: 28vw;\n}\n\n.footer-distributed .footer-company-about {\n  line-height: 20px;\n  color: #92999f;\n  font-size: 13px;\n  font-weight: normal;\n  margin: 0;\n}\n\n.footer-distributed .footer-icons {\n  display: inline-block;\n  width: 10vw;\n  margin-right: 2vw;\n}\n\n.footer-distributed .footer-icons a {\n  display: inline-block;\n  width: 2vw;\n  cursor: pointer;\n  background-color: lightgrey;\n  border-radius: 2px;\n\n  font-size: 1vw;\n  color: black;\n  text-align: center;\n\n  margin-right: 3px;\n  margin-bottom: 5px;\n}\n\n.footer-distributed .footer-right .footer-company-name {\n  width: 12vw;\n  display: inline-block;\n  color: black;\n  font-size: 1vw;\n}\n\n/* If you don't want the footer to be responsive, remove these media queries */\n\n@media (max-width: 300px) {\n\n  .footer-distributed {\n    font: bold 14px sans-serif;\n  }\n\n  .footer-distributed .footer-left,\n  .footer-distributed .footer-center,\n  .footer-distributed .footer-right {\n    display: block;\n    width: 100vw;\n    margin-bottom: 40px;\n    text-align: center;\n  }\n\n  .footer-distributed .footer-center i {\n    margin-left: 0;\n  }\n\n}\n\n.dropdown-menu {\n  min-width: 5px !important;\n  right: 0;\n  left: auto;\n  background: transparent;\n  border-style: none;\n}\n\n/* Logo animation */\n\n.tracking-in-expand {\n  -webkit-animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;\n  animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;\n}\n\n@-webkit-keyframes tracking-in-expand {\n  0% {\n    letter-spacing: -0.5em;\n    opacity: 0;\n  }\n  40% {\n    opacity: 0.6;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes tracking-in-expand {\n  0% {\n    letter-spacing: -0.5em;\n    opacity: 0;\n  }\n  40% {\n    opacity: 0.6;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css\" rel=\"stylesheet\">\n\n\n<nav class=\"navbar navbar-expand-md navbar-dark fixed-top\">\n  <a class=\"navbar-brand\" routerLink=\"/\" style=\"font-size: 36px;\">\n    <div style=\"animation: tracking-in-expand 1.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s 1 normal both running;\">\n      <a href=\"https://www.ubbcluj.ro/\"><img src=\"../assets/academic_logo.png\" class=\"academic-logo\"></a>\n    </div>\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\"\n          aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse \" id=\"navbarsExampleDefault\">\n    <ul class=\"nav navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"redirect\" routerLink=\"\">\n          <mat-icon class=\"header-icon\">home</mat-icon>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"redirect\" routerLink=\"profile\">\n          <mat-icon class=\"header-icon\">account_circle</mat-icon>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"redirect\" routerLink=\"login\">\n          <div class=\"header-text\">\n            Login\n          </div>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"redirect\" routerLink=\"courses\">\n          <div class=\"header-text\">\n            My courses\n          </div>\n        </a>\n      </li>\n    </ul>\n\n    <ul class=\"navbar nav ml-auto\">\n      <li class=\"dropdown\">\n        <div class=\"header-text\">\n        <a data-target=\"#\" href=\"\" data-toggle=\"dropdown\" class=\"dropdown-toggle\"\n           style=\"margin: 0 10px 0 0;cursor: pointer; font-size: inherit; color: #420000\" translate><span\n          class=\"glyphicon glyphicon-globe\"></span>Language<b class=\"caret\"></b></a>\n        </div>\n        <ul class=\"dropdown-menu\">\n          <li><img src=\"../assets/romaniaFlag.png\"  height=\"36px\" style=\"cursor: pointer; position: sticky;\"></li>\n           <li><img src=\"../assets/usFlag.png\" height=\"36px\" style=\"cursor: pointer; position: sticky\"></li>\n        </ul>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"redirect\" (click)=\"logout()\" >\n          <div class=\"header-text\">\n          <span class=\"glyphicon glyphicon-log-out\"></span>\n              Logout\n          </div>\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n\n<div id=\"wrap\" style=\"overflow: hidden\">\n  <main role=\"main\" id=\"main\" class=\"container clear-top hide-overflow\">\n    <router-outlet></router-outlet>\n  </main>\n\n  <footer class=\"footer-distributed\">\n\n    <div class=\"footer-left\">\n\n      <p class=\"footer-links\">\n        <a href=\"#\">Home</a>\n        ·\n        <a href=\"#\">Faculty page</a>\n        ·\n        <a href=\"#\">Mail</a>\n        ·\n        <a href=\"#\">About</a>\n      </p>\n    </div>\n\n    <div class=\"footer-center\">\n\n      <div class=\"info\">\n        <i class=\"fa fa-map-marker\"></i>\n        <p><span>21 Revolution Street</span> Paris, France</p>\n      </div>\n      <div class=\"info\">\n        <i class=\"fa fa-envelope\"></i>\n        <p><a href=\"mailto:support@company.com\">support@academicinfo.com</a></p>\n      </div>\n    </div>\n\n    <div class=\"footer-right\">\n      <div class=\"footer-icons\">\n\n        <a href=\"https://www.google.com\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a>\n        <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n        <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n        <a href=\"#\"><i class=\"fa fa-github\"></i></a>\n      </div>\n      <div class=\"footer-company-name\">AcademicInfo &copy; 2018</div>\n    </div>\n\n  </footer>\n\n</div>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/login/login.service */ "./src/app/services/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.title = 'AcademicInfo';
        this.loggedIn = true;
    }
    AppComponent.prototype.isUserLoggedIn = function () {
        return localStorage.getItem('currentUser') != null;
    };
    AppComponent.prototype.logout = function () {
        if (localStorage.getItem(_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__["ACCESS_TOKEN"])) {
            this.loginService.logout(localStorage.getItem(_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__["ACCESS_TOKEN"])).subscribe(function (response) { });
            this.router.navigate(['./login']);
            localStorage.clear();
            this.loggedIn = false;
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: MaterialModule, AppModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _communication_communication_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./communication/communication.component */ "./src/app/communication/communication.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/index.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-recaptcha/forms */ "./node_modules/ng-recaptcha/forms.js");
/* harmony import */ var ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _situation_table_situation_table_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./situation-table/situation-table.component */ "./src/app/situation-table/situation-table.component.ts");
/* harmony import */ var _teacher_situation_teacher_situation_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./teacher-situation/teacher-situation.component */ "./src/app/teacher-situation/teacher-situation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var appRoutes = [
    {
        path: '', pathMatch: 'full', redirectTo: '/login'
    },
    {
        path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
    },
    {
        path: 'courses', component: _teacher_situation_teacher_situation_component__WEBPACK_IMPORTED_MODULE_18__["TeacherSituationComponent"]
    }
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_15__["CdkTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTreeModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _communication_communication_component__WEBPACK_IMPORTED_MODULE_4__["CommunicationComponent"],
                _situation_table_situation_table_component__WEBPACK_IMPORTED_MODULE_17__["SituationTableComponent"],
                _teacher_situation_teacher_situation_component__WEBPACK_IMPORTED_MODULE_18__["TeacherSituationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                MaterialModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_9__["RecaptchaModule"].forRoot(),
                ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_10__["RecaptchaFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot({
                    positionClass: 'toast-bottom-right',
                    enableHtml: true,
                    progressBar: true,
                    progressAnimation: 'decreasing',
                }),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
                    }
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

// required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__["TranslateHttpLoader"](http);
}


/***/ }),

/***/ "./src/app/communication/communication.component.css":
/*!***********************************************************!*\
  !*** ./src/app/communication/communication.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.error-header{\n  font-size: 1.3vw;\n  margin-bottom: 1vw;\n\n}\n\nhtml, body {\n  height:100%;\n  width:100%;\n  margin:0;\n  padding:0;\n}\n\n#hideMe {\n  /* Firefox */\n  -webkit-animation: cssAnimation 0s ease-in 5s forwards;\n  /* Safari and Chrome */\n  /* Opera */\n  animation: cssAnimation 0s ease-in 5s forwards;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n}\n\n@keyframes cssAnimation {\n  to {\n    width:0;\n    height:0;\n    overflow:hidden;\n  }\n}\n\n@-webkit-keyframes cssAnimation {\n  to {\n    width:0;\n    height:0;\n    visibility:hidden;\n  }\n}\n"

/***/ }),

/***/ "./src/app/communication/communication.component.html":
/*!************************************************************!*\
  !*** ./src/app/communication/communication.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"errors.length > 0\">\n  <div *ngFor=\"let error of errors\">\n    <div class=\"alert alert-danger fade show\" role=\"alert\" *ngIf=\"error?.error != null\">\n      <h4 class=\"error-header\">Error occurred : {{error?.error }}</h4>\n      <p class=\"mb-0\">{{ error?.error_description }}</p>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"successes.length > 0\">\n  <div *ngFor=\"let success of successes\">\n    <div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\" *ngIf=\"success.display === true\">\n      <p class=\"mb-0\"> Info:  {{ success.message | translate}}</p>\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n  </div>\n</div>\n\n\n<div *ngIf=\"warnings.length > 0\">\n  <div *ngFor=\"let warning of warnings\">\n    <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\" *ngIf=\"warning?.display === true\">\n      <p class=\"mb-0\"> Warning: {{ warning?.message | translate }} </p>\n      <hr>\n      <p class=\"mb-0\" *ngIf=\"warning?.recommendation\"> Recommendation: {{ warning?.recommendation }}</p>\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"informations.length > 0\">\n  <div *ngFor=\"let information of informations\">\n    <div class=\"alert alert-info alert-dismissible fade show\" role=\"alert\" *ngIf=\"information.display === true\">\n      <p class=\"mb-0\"> Info: {{ information.message | translate}} </p>\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/communication/communication.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/communication/communication.component.ts ***!
  \**********************************************************/
/*! exports provided: CommunicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationComponent", function() { return CommunicationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommunicationComponent = /** @class */ (function () {
    function CommunicationComponent(router) {
        this.router = router;
        this.errors = [];
        this.warnings = [];
        this.informations = [];
        this.successes = [];
    }
    CommunicationComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CommunicationComponent.prototype, "errors", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CommunicationComponent.prototype, "warnings", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CommunicationComponent.prototype, "informations", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CommunicationComponent.prototype, "successes", void 0);
    CommunicationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-communication',
            template: __webpack_require__(/*! ./communication.component.html */ "./src/app/communication/communication.component.html"),
            styles: [__webpack_require__(/*! ./communication.component.css */ "./src/app/communication/communication.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CommunicationComponent);
    return CommunicationComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n.informations {\n  position: fixed;\n  bottom: 0;\n  left: 65%;\n  top: 45%;\n  width: 20%;\n  display: inline-block;\n}\n\n@font-face {\n  font-family: Bulgatti;\n  src: url('Bulgatti.ttf');\n}\n\n.logo-container {\n  position: absolute;\n  z-index: 1500;\n  margin-top: 40vh;\n  margin-left: 70vw;\n  color: peru;\n  display: inline;\n  width: 300px;\n}\n\n/deep/ .ubb-logo {\n  width: 100% !important;\n  min-width: 20vw !important;\n}\n\n.errorLabel {\n  color: red;\n  font-size: 15px;\n}\n\n/*//////////////////////////////////////////////////////////////////\n[ FONT ]*/\n\n@font-face {\n  font-family: Montserrat-Regular;\n  src: url('Montserrat-Regular.ttf');\n}\n\n@font-face {\n  font-family: Montserrat-ExtraBold;\n  src: url('Montserrat-ExtraBold.ttf');\n}\n\n@font-face {\n  font-family: Montserrat-Bold;\n  src: url('Montserrat-Bold.ttf');\n}\n\n/*//////////////////////////////////////////////////////////////////\n[ RESTYLE TAG ]*/\n\n.login-container {\n  min-width: 40vw;\n  height: auto;\n  margin-left: 20vw;\n  margin-top: 20vh;\n  /*background-color: beige;*/\n}\n\n.container-main {\n  min-width: 100vw;\n}\n\nimg {\n  min-width: 100%;\n}\n\n/*---------------------------------------------*/\n\na {\n  font-family: Montserrat-Regular;\n  font-size: 14px;\n  line-height: 1.7;\n  color: #666666;\n  margin: 0;\n  transition: all 0.4s;\n  -webkit-transition: all 0.4s;\n  -o-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n}\n\na:focus {\n  outline: none !important;\n}\n\na:hover {\n  text-decoration: none;\n  color: #fff;\n}\n\n/*---------------------------------------------*/\n\nh1,h2,h3,h4,h5,h6 {\n  margin: 0;\n}\n\np {\n  font-family: Montserrat-Regular;\n  font-size: 14px;\n  line-height: 1.7;\n  color: #666666;\n  margin: 0;\n}\n\nul, li {\n  margin: 0;\n  list-style-type: none;\n}\n\n/*---------------------------------------------*/\n\ninput {\n  outline: none;\n  border: none;\n}\n\ntextarea {\n  outline: none;\n  border: none;\n}\n\ntextarea:focus, input:focus {\n  border-color: transparent !important;\n}\n\ninput:focus::-webkit-input-placeholder { color:transparent; }\n\ninput:focus:-moz-placeholder { color:transparent; }\n\ninput:focus::-moz-placeholder { color:transparent; }\n\ninput:focus:-ms-input-placeholder { color:transparent; }\n\ntextarea:focus::-webkit-input-placeholder { color:transparent; }\n\ntextarea:focus:-moz-placeholder { color:transparent; }\n\ntextarea:focus::-moz-placeholder { color:transparent; }\n\ntextarea:focus:-ms-input-placeholder { color:transparent; }\n\ninput::-webkit-input-placeholder { color: #999999; }\n\ninput:-moz-placeholder { color: #999999; }\n\ninput::-moz-placeholder { color: #999999; }\n\ninput:-ms-input-placeholder { color: #999999; }\n\ntextarea::-webkit-input-placeholder { color: #999999; }\n\ntextarea:-moz-placeholder { color: #999999; }\n\ntextarea::-moz-placeholder { color: #999999; }\n\ntextarea:-ms-input-placeholder { color: #999999; }\n\n/*---------------------------------------------*/\n\nbutton {\n  outline: none !important;\n  border: none;\n  background: transparent;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\niframe {\n  border: none !important;\n}\n\n/*//////////////////////////////////////////////////////////////////\n[ Utility ]*/\n\n.txt1 {\n  font-family: Montserrat-Regular;\n  font-size: 16px;\n  color: #cccccc;\n  line-height: 1.4;\n}\n\n.bo1 {\n  border-bottom: 1px solid #999999;\n}\n\n.hov1:hover {\n  border-color: #d33f8d;\n}\n\n/*//////////////////////////////////////////////////////////////////\n[ login ]*/\n\n.limiter {\n  width: 100%;\n  margin: 0 auto;\n}\n\n.error-location {\n\n}\n\n.container-login100 {\n  width: 80vw;\n  min-height: 100vh;\n  margin-left: 20vw;\n  margin-top: 15vh;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  padding: 15px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n\n  position: relative;\n  z-index: 1;\n}\n\n.container-login100::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  z-index: -1;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background-color: transparent;\n  opacity: 0.9;\n}\n\n.wrap-login100 {\n  width: 20vw;\n  background: transparent;\n}\n\n/*------------------------------------------------------------------\n[  ]*/\n\n.login100-form {\n  width: 100%;\n  min-width: 300px;\n  margin-top: 10vh;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.login100-form-title {\n  font-family: Montserrat-ExtraBold;\n  font-size: 24px;\n  color: #fff;\n  line-height: 1.2;\n  text-align: center;\n\n  width: 100%;\n  display: block;\n}\n\n/*---------------------------------------------*/\n\n.login100-form-avatar {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin: 0 auto;\n}\n\n.login100-form-avatar img {\n  width: 100%;\n}\n\n/*---------------------------------------------*/\n\n.wrap-input100 {\n  position: relative;\n  width: 100%;\n  z-index: 1;\n  margin-bottom: 5%;\n}\n\n.input100 {\n  font-family: Montserrat-Bold;\n  font-size: 3vh;\n  color: #333333;\n\n  display: block;\n  width: 100%;\n  background: #fff;\n  height: 8vh;\n  border-radius: 25px;\n  padding: 0 30px 0 53px;\n}\n\n.input100-error {\n  font-family: Montserrat-Bold;\n  font-size: 3vh;\n  color: #333333;\n\n  display: block;\n  width: 100%;\n  background: #fff;\n  height: 8vh;\n  border-radius: 25px;\n  padding: 0 30px 0 53px;\n  -webkit-animation: pulsate 5s ease-in-out infinite;\n  animation: pulsate 5s ease-in-out infinite;\n}\n\n/*------------------------------------------------------------------\n[ Focus ]*/\n\n.focus-input100 {\n  display: block;\n  position: absolute;\n  border-radius: 25px;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  box-shadow: 0px 0px 0px 0px;\n  color: peru;\n}\n\n.focus-input100-error {\n  display: block;\n  position: absolute;\n  border-radius: 25px;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  box-shadow: 0px 0px 0px 0px;\n  color: peru;\n}\n\n.input100:focus + .focus-input100 {\n\n}\n\n@-webkit-keyframes pulsate {\n  0%   { box-shadow: 0 0 0 darkred; }\n  50%  { box-shadow: 0 0 4vh darkred; }\n  100% { box-shadow: 0 0 0 darkred; }\n}\n\n@keyframes pulsate {\n  0%   { box-shadow: 0 0 0 darkred; }\n  50%  { box-shadow: 0 0 4vh darkred; }\n  100% { box-shadow: 0 0 0 darkred; }\n}\n\n@-webkit-keyframes anim-shadow {\n  to {\n    box-shadow: 0 0 20vh 20vh;\n    opacity: 0.3;\n  }\n}\n\n@keyframes anim-shadow {\n  to {\n    box-shadow: 0 0 20vh 20vh;\n    opacity: 0.3;\n  }\n}\n\n.symbol-input100 {\n  font-size: 15px;\n  color: #999999;\n  display: flex;\n  align-items: center;\n  position: absolute;\n  border-radius: 25px;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  padding-left: 30px;\n  pointer-events: none;\n  transition: all 0.4s;\n}\n\n.input100:focus + .focus-input100 + .symbol-input100 {\n  color: #00c6fb;\n  padding-left: 23px;\n}\n\n/*------------------------------------------------------------------\n[ Button ]*/\n\n.container-login100-form-btn {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.login100-form-btn {\n  height: 8vh;\n  color: #e0e0e0;\n  font-size: 3vh;\n  width: 100vw;\n  border-radius: 2vmin;\n  background: peru;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 25px;\n  transition: all 0.4s;\n\n  position: relative;\n  z-index: 1;\n}\n\n.login100-form-btn:disabled {\n  opacity: 0.8;\n  cursor: not-allowed;\n\n}\n\n.login100-form-btn::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  border-radius: 25px;\n  top: 0;\n  left: 0;\n  background-color: transparent;\n  transition: all 0.4s;\n  opacity: 0;\n}\n\n.login100-form-btn:hover {\n  color: #fff;\n}\n\n.login100-form-btn:hover:before {\n  opacity: 1;\n}\n\n/*------------------------------------------------------------------\n[ Alert validate ]*/\n\n.validate-input {\n  position: relative;\n}\n\n.alert-validate::before {\n  content: attr(data-validate);\n  position: absolute;\n  max-width: 70%;\n  background-color: white;\n  border: 1px solid #c80000;\n  border-radius: 14px;\n  padding: 4px 25px 4px 10px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  right: 8px;\n  pointer-events: none;\n\n  font-family: Montserrat-Bold;\n  color: #c80000;\n  font-size: 13px;\n  line-height: 1.4;\n  text-align: left;\n\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity 0.4s;\n}\n\n.alert-validate::after {\n  content: \"\\f06a\";\n  font-family: FontAwesome;\n  display: block;\n  position: absolute;\n  color: #c80000;\n  font-size: 15px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  right: 13px;\n}\n\n.alert-validate:hover:before {\n  visibility: visible;\n  opacity: 1;\n}\n\n@media (max-width: 992px) {\n  .alert-validate::before {\n    visibility: visible;\n    opacity: 1;\n  }\n}\n\n/*//////////////////////////////////////////////////////////////////\n[ responsive ]*/\n\n@media (max-width: 576px) {\n  .wrap-login100 {\n    padding-top: 80px;\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n}\n\n::-webkit-scrollbar {\n  display: none;\n}\n\n.parallax {\n  -webkit-perspective: 10vh;\n          perspective: 10vh;\n  height: 100vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  position: absolute;\n  top: 0;\n  left: 40vw;\n  right: 0;\n  bottom: 0;\n  margin-left: -90vw;\n}\n\n.parallax__layer {\n  position: absolute;\n  top: -20vh;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.parallax__layer img {\n  display: block;\n  position: absolute;\n  bottom: 0;\n}\n\n.parallax__cover {\n  background: #2d112b;\n  display: block;\n  position: absolute;\n  top: 100vh;\n  left: 0;\n  right: 0;\n  height: 200vh;\n  width: 300vw;\n  z-index: 2;\n}\n\n.parallax__cover__main {\n  background: #2d112b;\n  display: block;\n  position: absolute;\n  top: 100vh;\n  left: 0;\n  right: 0;\n  height: 120vh;\n  z-index: 10;\n\n}\n\n.parallax__layer_-1 {\n  -webkit-transform: translateZ(-400px) scale(5);\n          transform: translateZ(-400px) scale(5);\n}\n\n.parallax__layer__0 {\n  -webkit-transform: translateZ(-300px) scale(4);\n          transform: translateZ(-300px) scale(4);\n}\n\n.parallax__layer__1 {\n  -webkit-transform: translateZ(-250px) scale(3.5);\n          transform: translateZ(-250px) scale(3.5);\n}\n\n.parallax__layer__2 {\n  -webkit-transform: translateZ(-200px) scale(3);\n          transform: translateZ(-200px) scale(3);\n}\n\n.parallax__layer__3 {\n  -webkit-transform: translateZ(-150px) scale(2.5);\n          transform: translateZ(-150px) scale(2.5);\n}\n\n.parallax__layer__4 {\n  -webkit-transform: translateZ(-100px) scale(2);\n          transform: translateZ(-100px) scale(2);\n}\n\n.parallax__layer__5 {\n  -webkit-transform: translateZ(-50px) scale(1.5);\n          transform: translateZ(-50px) scale(1.5);\n}\n\n.parallax__layer__6 {\n  -webkit-transform: translateZ(0px) scale(1);\n          transform: translateZ(0px) scale(1);\n}\n\n.parallax__layer__main {\n  -webkit-transform: translateZ(-10px) scale(1.2);\n          transform: translateZ(-10px) scale(1.2);\n}\n\n/* BIRDS  */\n\n.bird {\n  background-image: url(\"data:image/svg+xml,%3Csvg id%3D%22bird-cells%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 3671 510%22%3E  %3Cg fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E    %3Cg%3E      %3Cpath class%3D%22cell-container%22 stroke%3D%22none%22 d%3D%22M.5.5h359v509H.5z%22%2F%3E      %3Cpath class%3D%22cell-container%22 stroke%3D%22none%22 d%3D%22M359.5.5h359v509h-359z%22%2F%3E      %3Cpath class%3D%22cell-container%22 stroke%3D%22none%22 d%3D%22M718.5.5h359v509h-359z%22%2F%3E      %3Cpath class%3D%22cell-container%22 stroke%3D%22none%22 d%3D%22M1077.5.5h370v509h-370z%22%2F%3E      %3Cpath class%3D%22cell-container%22 stroke%3D%22none%22 d%3D%22M1448.5.5h370v509h-370z%22%2F%3E      %3Cpath class%3D%22cell-container%22 stroke%3D%22none%22 d%3D%22M1818.5.5h370v509h-370z%22%2F%3E      %3Cpath class%3D%22cell-container%22 stroke%3D%22none%22 d%3D%22M2189.5.5h370v509h-370z%22%2F%3E      %3Cpath class%3D%22cell-container%22 stroke%3D%22none%22 d%3D%22M2559.5.5h370v509h-370z%22%2F%3E      %3Cpath class%3D%22cell-container%22 stroke%3D%22none%22 d%3D%22M2930.5.5h370v509h-370z%22%2F%3E      %3Cpath class%3D%22cell-container%22 stroke%3D%22none%22 d%3D%22M3300.5.5h370v509h-370z%22%2F%3E      %3Cpath fill%3D%22%23000%22            d%3D%22M51 288.38c13.33-5.34 35.33-9.34 66-12 0 0 18.44-9.95 55-15 1.04-.15 7.5-8 36-13 16 0 21-3.88 30 5 3.53-13.53 19.13-16.58 29-15 6.9 1.1 11.3 5.93 12 8 4 12 21 5 30 12-23 6-23 7-32 11-16 14-31 31-47 31-16 4-32.83 5.33-50.5 4-1 4-3.5 6.66-7.5 8-6 2-1-9-4-12s-3 10-17 18c-1-14-5-10-5-18s4 13-17 18c-14 3.33-31.67 4-53 2 26-8.67 41.33-16.34 46-23-5 0-18-1-21-9-14-4.5-30.67-4.5-50 0z%22%2F%3E      %3Cpath fill%3D%22%23000%22            d%3D%22M639 273c0 2.07-10 3-16 5-9 1-8 8-14 7s-5 8-19 14c2 11 21 9 36 19 29 30.62 18 19 37 63 14 28 18 30 27 57-1 1-11-1-14-7-1 5-5 1-4 7-5-1-8-8-12-11-4-1 1 7-2 8-4 0-5-8-9-8-4 1 1 6-2 7-33-30-43-21-43-36-8 10-10-2-19 3-4-5-6-10-2-17-1-5-7 5-11 3-1.33-6 1-12.67 7-20-6.67 6.67-14 10-22 10 1-10-1-6.5 5-16-6 7.5-13 8-19 6-4.43-2.1 4-8 2-11.5-8 0-22.76-.3-24-3.5-3.26-8.4 8-19 4-25-3.12-4.67-12 9-15-3 0-12-4.67-17-14-15-8.67-1.33-19.33-1.33-32 0-19 2-27-5-58-5 10-5 9-13 27-13-21-3-10-10-45-13 30-8 32 0 54 7 68-7 22-15 94-22 14-2 36-4 58 2 5-2 6-5 15-6 8 0 12.67 3.67 14 11 10.67.72 16 1.72 16 3z%22%2F%3E      %3Cpath fill%3D%22%23000%22            d%3D%22M729 299.03c32-14 56-26 90-40 20-6 37-5 56-8 28 0 17-8 55-3 8-1 10.95-7.5 19-7 8.67 0 13.33 2.66 14 8l26 5-24 5c-2.67 5.33-8 8.33-16 9-12 12-11 18-29 21 22 13 23 17 64 38 13 11 13 15 17 31 4 15.98 14.06 25.74 21 35 26 46 23 59 45 80-11-1-23-8-28-13-4-1-3 5-3 8-6-2-8-15-16-13-3.46 0 4 5 0 13-13-5-14-7-16-13-3-4-7-11-3-12-2 8 0 12-6 12-5-10-7-3-11-12-8-14-17-12-17-29-4 0-7 4-10 9-3-4 0-9-1-12-2 .66-4.33 1.66-7 3-2-12.67-2-21.67 0-27-8 2-4 6-15 10-5-6-4-12-2-21-5 6-5-3-12 2-9-9-10-18-25-18-5-12-3-20-11-22-3.23.86-4 10-6 7s-2-10-5-12c-2-3-6 6-9 3 0-5-2-11-6-14-3-4-5 0-10 3-2-5-2-9-1-14-4-1-14 5-12-2 0-7-4-4-8-4-5 0 1-5-1-6-5-2-13 2-21 6-5-2 4-10 0-10-31-1-38 7-76 4z%22%2F%3E      %3Cpath fill%3D%22%23000%22            d%3D%22M1367 254.1l-18-3c-2-6-5.33-9.35-10-10-14-1-17 7-22 10-21-3-19-1-35 0-30-5-36 4-50 7-36 5-33 9-48 16-34 18-41 19-75 29 6.67.65 14 0 22-2-14.67 4-21 6.32-19 7 31-5 29.02 4.23 52 0 11-3 10-9 13-12 2 7 1 7 2 13 16-3 21-2 30-2 3 4-3.66 8.6 0 10 4-1.35 9.33-2.68 16-4-4 4.65-5.67 8.32-5 11 15 2 12 4 24 1-11 4-11 4-16 10 16 3 14 1 24 2-4 4-3 8-1 11 6-3 9.53-4.5 12-3-3 3.44-5 7-2 9 10-2 12.4-5.28 15-2-3 8 0 11 1 22 5 0 10-2 15-4 1 8-3 8-3 16 6 3 13-3 17-1-7 4-7 6-8 9 7 3 6 2 14 0-5.33 4-7 7.65-5 11 5.33-3.35 8.33-3.35 9 0-2 6 0 7 1 15 10-5 10 2 21 5 5.97 3.27 6.4 10.54 11 14 9 6.74 20 9 19 9s-9-11-5-10c3.33 4 7.67 8.32 13 13 0-8-.67-13.68-2-17 9 14 12 12 28 23 3-13-6-18-15-28 19 22 19 20 30 24-24-30-20-26-29-53-14-26-24-61-39-75-18-12-19-17-38-26-3.33-4.68-7.33-8-12-10 12-2 21.33-5.68 28-11 2-5 7-5 11-9 6-1.35 9.67-4.35 11-9l18-6z%22%2F%3E      %3Cpath fill%3D%22%23000%22            d%3D%22M1751 256c-11-1-12-4-24-6-3-6-4-5-10-7-14 0-21 7-29 12-24-3-31-1-44 2-46 12-43 12-70 23-46 27-39 30-58 40 23 6 31-3 47-7-6.67 2.67-8.67 6-6 10 6.67-2.67 11-3.67 13-3-5 2-9.7 10.57-5 10 27-2 30.7-14.27 46-15-4 5-6 8-4 13 12-3 11-2 18-4-2 6-3 6 0 15 8.5 2 13-5 13-5 4 4 0 11 0 20 11 0 11 2 15 0-2 8 2 8 5 14 4-8 7-5 14-12-2 13 5 12 6 21 10-9 11-11 13-21-4 15 2 17 5 28 4-7 7-7 8-16 1 5 3.98 7.87 5 6 3-10 3.32-8.12 4-6-3 13 2 16 5 27 7-12 5-18 5-19 2 15 15 8 28 33 4-14-16-38-23-73-4-23-3-28-14-43-3-7-10-8-13-7 8-4 7-8 12-15 15-2 11-5 15-10-1 0 5-4 23-5z%22%2F%3E      %3Cpath fill%3D%22%23000%22            d%3D%22M2119.66 270.36c0-3-11-6-20-6-1.34-2.67-3.67-5-7-7-5.34-2.67-12.34-2.67-21 0-8 1-16-13-8-26 7-3 10-9 11-14-8-4-11-5-22-4-65 4-85 28-110 50-8 7 10 5 18 5-42 0-78 41-72 37s16 6 35-11c2-1-7 5-15 15 21-3 21-6 39-4-2 7 3.6 7.22 9 8 4.33.62 9.2-.44 15 0 12.53 1.4 13-1 18-1 6 0 5.35.6 9 0 9-2 7-3 10-7-3 8 1 11 6 21 7-6 6-14 6-19 0 13-1 9 2 17 6-5 6-4 8-12-3 10-1 17 3 28 5 0 6.84-4.66 10-3 0 5 0 3 6 13 5-5 2 3 7-8-1 10 4 4 10 18 5-10 3-14-1-23 6 13 8 12 13 19 2-19-1-23-7-36 3-19-6-20-5-33.5 8-10.5 15 2 24-6.5 7-1 4-4 9-7 8-5 19 1 20-3z%22%2F%3E      %3Cpath fill%3D%22%23000%22            d%3D%22M2485 278.84c-6-3-7-1-16-3 1-5-4.66-10-11-10-9.16 0-9.5 5.2-21 8-9 2.2-12.7 3.03-18-2-24-15-11-19-32-44-9-7-12-11-4-21 13-14 17-22 17-32-4-7-85-3-113 34 5.06 1.15 16.8-6.7 20.65-6 4.35 1-18.65 13-9.65 11 9-2 15-7 21-7 2.67-.05-2 2-3 7 3.78.9 9.8-1.85 16-3 3.52-.65 7.9.34 10 0-4 3-10 1-20 17 6 5.5 14-1.5 20-1.5-3 5.5-11 2.5-15 20.5 2 4 11-6 9-2 0 4-7 2-9 18 6 0 8-7 9-2-2 3-5 3-5 9 3 3 9-4 11-4-1 2-6 2-6 10-38 9-49 18-68 30 7 4.9 23-5 25-1-1.46 3.22-11 5.9-28 11 17 2 31 2 42.65-5.1 10.35 1.1 18.57-1.9 21.35-1.9 4 6 0 13 7 15 3-5 8-12 9-15 3-2-5 11 3 13 9 0 19 7 36 7 18 0 22-6 42-13 12-1 20-5 25-18 3-8 9-4 18-13 2-2 12-3 16-6z%22%2F%3E      %3Cpath fill%3D%22%23000%22            d%3D%22M2859 275.74c-.52-2.35-8-3-20-5-6.62-3.1-7.68-9-14-9-13 0-7.83 6.16-21 9-7.7 1.67-15 2-20 0s-6.32-3.7-10-6c-19.2-11.9-10.17.25-19.17-20-10.54-12-10.6-24.55-6.83-42 .97-4.5 2.27-8.15 4-11 6-9.83 12.67-30.6 11-45-1.4-12.16-11-14-27-17-21-4-33-5-58-2-9 8-21 5-33 21 9-1 7-3 14 3 8-4 15.48-1.3 16-1 7.16 4.13-3.54 3.73 1 6 6 0 2 4 0 9 5-.5 8-1 6 4 4.4 3.22 8.36-3.24 9 1 .86 5.76-11.7 9.4-9 17 18 3 20 5 22 7-4 1 3 2-26 11 3 10 14 6 15 16 0 7-9 4-12 17 12 2 9 6 23 6-5 0-18 4-26 12 9 2 6 6 14 7 7 3 6 3.36 4 7-6.5 11.86-5 15-20 23s-26.3 15.78-35 22c-4.63 3.32-7.48 8.23-11 12 12-2 12-3 15-2 2 4 1-3 0 11 6-5 16-12 22-16 5 0 13-3 17 0 5 0 0-7 0-8.96 0-1.96 3.48 5.8 5 3.96 5-6 4-9 3-14 4 3 1 10.9 6 12 19 6 21 5 42-1 1.2-.07 2.95-.92 4.3-.96 1.2 1.42.7 3 3.7 3.96 1.57-2.35 4.93-3.06 6.83-3.1.52 0-.24-.93 0-.86 10 3 17.17 3.96 32.17.96 13-8 24-5 35-17 14-6 14-10 17-16 4-3 9 0 20-4z%22%2F%3E      %3Cpath fill%3D%22%23000%22            d%3D%22M3243 286c-8-3-7-2-17-4-7.6-3.28-5-11-21-13-16.1 1.03-15 14-31 13-10.43-.65-13-7-21-11s-13-5-19-12c-13-42-1.27-9.56-3-59-.27-7.56-6-44-1-54 8-3 4.84-13.8 0-22-32-34-40.22-58.03-60-79-4-1 5 12-2 7-8.8-5.08-7-14-23-22 1 5 4 12 2 15-5-3-14-23-20-23 1 4 8 11 8 23 0 4-14-6-9-1s7 13 9 19c7.25 13.18 22 23 22 22-3-1-17-12-26-11 2 5 8 7 10 17-2 2 0 3-8 0 4 19 14 28 35 41 2.6 4.24-11.1-4.18-14-1-2.6 2.82 1.67 8.6 5 15 9.17 17.6 18.32 18.92 20 30-1 4-9.77-1.26-14 2-2.27 1.74 4.75 5.74 4 10-.75 4.24-9.22 1.68-8 6 2.48 2.98-2 12-1 17s4 6 4 11 7-2 8 6c5 4-1 4-8 12 5 5 10 4 8 14s-7 6-12 12c-5 7-3 11-10 17-9 8-15 4-31 16-13 7-14 2-30 13 18 2 36 12 68 5 5 2-5 5-2 7 14 1 16 3 23 0-4 3-10.62 8.7-7 9 8.53.74 23.38-.95 30 0 8.4 1.2 12.75 5 27 5 7.7 0 16.25-8.18 21-7 7.3 1.8 6 2.93 17 0 19.33-5.15 24-9 39-19 8-12 13-9 20-21 11-2 18-2 18-5z%22%2F%3E      %3Cpath fill%3D%22%23000%22            d%3D%22M3595.2 274c0-2.56-5-4-13-7-4.25-3.13 0-8-10-10-17 0-11.03 8.98-21 12-10-1-9-2-21 1-4.15 1.04-3.9-10.8-6-13-2.97-3.06-5-3-10-8-3-11 6-24 3-45-1.34-9.32-4.68-21.56-9-33-2.45-13.1-2-10-13-23-21-28-37-37-47-67-4.96-4.56-.68 12.44-5 11-7.68-2.56-15.4-19-19-19-2.9 0 7.5 17.9 4 23-3 4.4-17-7.67-17-5 0 3.33 8 16 15 19-4 4-9.5-4.6-11-1 7 9 1 11 6 24 5.77 12.05 11 8 16 18-3.62 4.17-24.5-6.8-26-3-1.02 2.53 9.7 2.7 17 10 6 6 1.8 13.48 6 16 5 3 2 6 8 13s10-2 8 8c-.94 4.66-4 4.34-4 9 0 5.34 8-1 6 5 0 2.57-4 4-6 8 0 .72 7.58-1.47 8 1 1.08 6.53-7.23 11.8-4 17 3.27 5.3 12 4 17 3-5 4-13 3.95-13 9 0 9.45 10 13 4 18 2 5-5 9-4 13s5.17 8.47 10 10c3.24 1.03 9 2 6 3-6 2-7-1-12 3-4.25 0-2-6-10-4-24 4-60 20-73 34-2 3 12-3 21-4-8 3-20 7-5 6 11 1 28 0 57-5 21.46-.66 17 7 39 2 11 3 28 6 43-5 14-2 15.58-9.85 33-23 6-2 11-11 14-17 7.8-3.53 12-1 18-4z%22%2F%3E    %3C%2Fg%3E  %3C%2Fg%3E%3C%2Fsvg%3E\");\n  background-size: auto 100%;\n  width: 88px;\n  height: 125px;\n  will-change: background-position;\n  -webkit-animation-name: fly-cycle;\n  animation-name: fly-cycle;\n  -webkit-animation-timing-function: steps(10);\n  animation-timing-function: steps(10);\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n}\n\n.bird--one {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s;\n}\n\n.bird--two {\n  -webkit-animation-duration: 0.9s;\n  animation-duration: 0.9s;\n  -webkit-animation-delay: -0.75s;\n  animation-delay: -0.75s;\n}\n\n.bird--three {\n  -webkit-animation-duration: 1.25s;\n  animation-duration: 1.25s;\n  -webkit-animation-delay: -0.25s;\n  animation-delay: -0.25s;\n}\n\n.bird--four {\n  -webkit-animation-duration: 1.1s;\n  animation-duration: 1.1s;\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s;\n}\n\n.bird-container {\n  position: absolute;\n  top: 20%;\n  left: -7.5vw;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n  will-change: transform;\n  -webkit-animation-name: fly-right-one;\n  animation-name: fly-right-one;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n}\n\n.bird-container--one {\n  -webkit-animation-duration: 15s;\n  animation-duration: 15s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n}\n\n.bird-container--two {\n  -webkit-animation-duration: 16s;\n  animation-duration: 16s;\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s;\n}\n\n.bird-container--three {\n  -webkit-animation-duration: 14.6s;\n  animation-duration: 14.6s;\n  -webkit-animation-delay: 9.5s;\n  animation-delay: 9.5s;\n}\n\n.bird-container--four {\n  -webkit-animation-duration: 16s;\n  animation-duration: 16s;\n  -webkit-animation-delay: 10.25s;\n  animation-delay: 10.25s;\n}\n\n@-webkit-keyframes fly-cycle {\n  100% {\n    background-position: -900px 0;\n  }\n}\n\n@keyframes fly-cycle {\n  100% {\n    background-position: -900px 0;\n  }\n}\n\n@-webkit-keyframes fly-right-one {\n  0% {\n    left: -10%;\n    -webkit-transform: scale(0.3);\n    transform: scale(0.3);\n  }\n  10% {\n    left: 10%;\n    -webkit-transform: translateY(2vh) scale(0.4);\n    transform: translateY(2vh) scale(0.4);\n  }\n  20% {\n    left: 30%;\n    -webkit-transform: translateY(0vh) scale(0.5);\n    transform: translateY(0vh) scale(0.5);\n  }\n  30% {\n    left: 50%;\n    -webkit-transform: translateY(4vh) scale(0.6);\n    transform: translateY(4vh) scale(0.6);\n  }\n  40% {\n    left: 70%;\n    -webkit-transform: translateY(2vh) scale(0.6);\n    transform: translateY(2vh) scale(0.6);\n  }\n  50% {\n    left: 90%;\n    -webkit-transform: translateY(0vh) scale(0.6);\n    transform: translateY(0vh) scale(0.6);\n  }\n  60% {\n    left: 110%;\n    -webkit-transform: translateY(0vh) scale(0.6);\n    transform: translateY(0vh) scale(0.6);\n  }\n  100% {\n    left: 110%;\n    opacity: 1;\n    -webkit-transform: translateY(0vh) scale(0.6);\n    transform: translateY(0vh) scale(0.6);\n  }\n}\n\n@keyframes fly-right-one {\n  0% {\n    left: -10%;\n    -webkit-transform: scale(0.3);\n    transform: scale(0.3);\n  }\n  10% {\n    left: 10%;\n    -webkit-transform: translateY(2vh) scale(0.4);\n    transform: translateY(2vh) scale(0.4);\n  }\n  20% {\n    left: 30%;\n    -webkit-transform: translateY(0vh) scale(0.5);\n    transform: translateY(0vh) scale(0.5);\n  }\n  30% {\n    left: 50%;\n    -webkit-transform: translateY(4vh) scale(0.6);\n    transform: translateY(4vh) scale(0.6);\n  }\n  40% {\n    left: 70%;\n    -webkit-transform: translateY(2vh) scale(0.6);\n    transform: translateY(2vh) scale(0.6);\n  }\n  50% {\n    left: 90%;\n    -webkit-transform: translateY(0vh) scale(0.6);\n    transform: translateY(0vh) scale(0.6);\n  }\n  60% {\n    left: 110%;\n    -webkit-transform: translateY(0vh) scale(0.6);\n    transform: translateY(0vh) scale(0.6);\n  }\n  100% {\n    left: 110%;\n    opacity: 1;\n    -webkit-transform: translateY(0vh) scale(0.6);\n    transform: translateY(0vh) scale(0.6);\n  }\n}\n\n@-webkit-keyframes fly-right-two {\n  0% {\n    left: -10%;\n    opacity: 1;\n    -webkit-transform: translateY(-2vh) scale(0.5);\n    transform: translateY(-2vh) scale(0.5);\n  }\n  10% {\n    left: 10%;\n    -webkit-transform: translateY(0vh) scale(0.4);\n    transform: translateY(0vh) scale(0.4);\n  }\n  20% {\n    left: 30%;\n    -webkit-transform: translateY(-4vh) scale(0.6);\n    transform: translateY(-4vh) scale(0.6);\n  }\n  30% {\n    left: 50%;\n    -webkit-transform: translateY(1vh) scale(0.45);\n    transform: translateY(1vh) scale(0.45);\n  }\n  40% {\n    left: 70%;\n    -webkit-transform: translateY(-2.5vh) scale(0.5);\n    transform: translateY(-2.5vh) scale(0.5);\n  }\n  50% {\n    left: 90%;\n    -webkit-transform: translateY(0vh) scale(0.45);\n    transform: translateY(0vh) scale(0.45);\n  }\n  51% {\n    left: 110%;\n    -webkit-transform: translateY(0vh) scale(0.45);\n    transform: translateY(0vh) scale(0.45);\n  }\n  100% {\n    left: 110%;\n    -webkit-transform: translateY(0vh) scale(0.45);\n    transform: translateY(0vh) scale(0.45);\n  }\n}\n\n@keyframes fly-right-two {\n  0% {\n    left: -10%;\n    opacity: 1;\n    -webkit-transform: translateY(-2vh) scale(0.5);\n    transform: translateY(-2vh) scale(0.5);\n  }\n  10% {\n    left: 10%;\n    -webkit-transform: translateY(0vh) scale(0.4);\n    transform: translateY(0vh) scale(0.4);\n  }\n  20% {\n    left: 30%;\n    -webkit-transform: translateY(-4vh) scale(0.6);\n    transform: translateY(-4vh) scale(0.6);\n  }\n  30% {\n    left: 50%;\n    -webkit-transform: translateY(1vh) scale(0.45);\n    transform: translateY(1vh) scale(0.45);\n  }\n  40% {\n    left: 70%;\n    -webkit-transform: translateY(-2.5vh) scale(0.5);\n    transform: translateY(-2.5vh) scale(0.5);\n  }\n  50% {\n    left: 90%;\n    -webkit-transform: translateY(0vh) scale(0.45);\n    transform: translateY(0vh) scale(0.45);\n  }\n  51% {\n    left: 110%;\n    -webkit-transform: translateY(0vh) scale(0.45);\n    transform: translateY(0vh) scale(0.45);\n  }\n  100% {\n    left: 110%;\n    -webkit-transform: translateY(0vh) scale(0.45);\n    transform: translateY(0vh) scale(0.45);\n  }\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container-main\" #scrollMe style=\"overflow: hidden;\">\n  <div class=\"parallax\" #parallax style=\"z-index: 10; overflow-y: scroll; overflow-x: scroll\">\n    <div class=\"parallax__layer parallax__layer__0\">\n      <img src=\"https://sam.beckham.io/images/articles/firewatch/layer_0.png\"/>\n    </div>\n    <div class=\"parallax__layer parallax__layer__1\">\n      <img src=\"https://sam.beckham.io/images/articles/firewatch/layer_1.png\"/>\n    </div>\n    <div class=\"parallax__layer parallax__layer__2\">\n      <img src=\"https://sam.beckham.io/images/articles/firewatch/layer_2.png\" class=\"responsive\"/>\n    </div>\n    <div class=\"parallax__layer parallax__layer__3\">\n      <img src=\"https://sam.beckham.io/images/articles/firewatch/layer_3.png\" class=\"responsive\"/>\n    </div>\n    <div class=\"parallax__layer parallax__layer__4\">\n      <img src=\"https://sam.beckham.io/images/articles/firewatch/layer_4.png\" class=\"responsive\"/>\n    </div>\n    <div class=\"parallax__layer parallax__layer__5\">\n      <img src=\"https://sam.beckham.io/images/articles/firewatch/layer_5.png\" class=\"responsive\"/>\n      <div class=\"logo-container\">\n        <img src=\"../assets/logo_UBB.png\" class=\"ubb-logo\">\n      </div>\n    </div>\n    <div class=\"parallax__layer parallax__layer__6\">\n      <div class=\"login-container\">\n\n        <div class=\"limiter\">\n          <div class=\"container-login100\">\n            <div class=\"wrap-login100 p-t-190 p-b-30\">\n              <form class=\"login100-form validate-form\" (ngSubmit)=\"submitForm()\"\n                    #formControl=\"ngForm\">\n                <div class=\"wrap-input100 validate-input m-b-10\">\n                  <input class=\"input100\" type=\"text\" id=\"inputUsername\"\n                         [ngClass]=\"{'input100-error': username.errors && username.touched}\"\n                         name=\"username\" #username=\"ngModel\"\n                         minlength=\"5\" pattern=\"[a-z0-9]+\" required\n                         [(ngModel)]=\"userModel.username\"\n                         placeholder=\"Username\">\n                  <span class=\"focus-input100\"></span>\n                  <span class=\"symbol-input100\">\n\t\t\t\t\t\t\t      <i class=\"fa fa-user\"></i>\n\t\t\t\t\t\t      </span>\n                </div>\n                <div class=\"error-location\">\n                  <div *ngIf=\"username.touched === true\">\n                    <div class=\"errorLabel\" *ngIf=\"username?.errors && username?.errors['required']\">\n                      {{ 'Username is required' | translate }}\n                    </div>\n                    <div class=\"errorLabel\" *ngIf=\"username?.errors && username?.errors['minlength']\">\n                      {{ 'Username must have a minimum length of 5 characters' | translate }}\n                    </div>\n                    <div class=\"errorLabel\" *ngIf=\"username?.errors && username?.errors['pattern']\">\n                      {{ 'Username can contain only alphanumerical characters' | translate }}\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"wrap-input100 validate-input m-b-10\">\n                  <input class=\"input100\" type=\"password\" id=\"inputPassword\"\n                         [ngClass]=\"{'input100-error': password.errors?.required && password.touched}\"\n                         name=\"password\" #password=\"ngModel\"\n                         required\n                         [(ngModel)]=\"userModel.password\"\n                         placeholder=\" {{ 'Password' | translate }}\">\n                  <span *ngIf=\"password.touched\">\n                    <div class=\"errorLabel\" *ngIf=\"password?.errors && password?.errors['required']\">\n                      {{ 'Password is required' | translate }}\n                    </div>\n                  </span>\n                  <span class=\"focus-input100\"></span>\n                  <span class=\"symbol-input100\">\n\t\t\t\t\t\t\t<i class=\"fa fa-lock\"></i>\n\t\t\t\t\t\t</span>\n                </div>\n                <div class=\"container-login100-form-btn p-t-10\">\n                  <button class=\"login100-form-btn\" [disabled]=\"formControl.invalid\">\n                    {{ 'Login' | translate }}\n                  </button>\n                </div>\n\n                <div class=\"container-login100-form-btn p-t-10\" style=\"margin-top: 5%\">\n                  <re-captcha required\n                              [(ngModel)]=\"recaptchaResponse\"\n                              name=\"captcha\"\n                              (resolved)=\"resolved($event)\" siteKey=\"6LdwLWsUAAAAALRUJUOLuIzx7IjhZddT-6P55787\">\n                  </re-captcha>\n                </div>\n                <span class=\"informations\">\n                <app-communication\n                  [errors]=\"[errorMessage]\"\n                  [warnings]=\"[failedLoginWarning]\"\n                  [informations]=\"[usernameInformation,passwordInformation]\"\n                ></app-communication>\n                  </span>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n      <img src=\"https://sam.beckham.io/images/articles/firewatch/layer_6.png\" class=\"responsive\"/>\n    </div>\n\n    <div class=\"bird-container bird-container--one\">\n      <div class=\"bird bird--one\"></div>\n    </div>\n    <div class=\"bird-container bird-container--two\">\n      <div class=\"bird bird--two\"></div>\n    </div>\n    <div class=\"bird-container bird-container--three\">\n      <div class=\"bird bird--three\"></div>\n    </div>\n    <div class=\"bird-container bird-container--four\">\n      <div class=\"bird bird--four\"></div>\n    </div>\n\n    <div class=\"parallax__cover\">\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_properties_login_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/properties/login-properties */ "./src/app/shared/properties/login-properties.ts");
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/login/login.service */ "./src/app/services/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.userModel = {
            username: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.failedCounter = 0;
        this.usernameInformation = {
            message: 'Username was generated based on your first and last names. Please contact the administrator if forgotten',
            display: false
        };
        this.passwordInformation = {
            message: 'Your password was given by the administrator, please contact him if forgotten.',
            display: false
        };
        this.failedLoginWarning = {
            message: 'After 5 unsuccessful logins your account will be disabled and your administrator notified.',
            recommendation: null,
            display: false
        };
        this.errorMessage = null;
    };
    LoginComponent.prototype.submitForm = function () {
        var _this = this;
        var loginData;
        if (this.userModel.username.includes("scs")) {
            loginData = _shared_properties_login_properties__WEBPACK_IMPORTED_MODULE_2__["login_properties"].student_login;
        }
        else {
            loginData = _shared_properties_login_properties__WEBPACK_IMPORTED_MODULE_2__["login_properties"].teacher_login;
        }
        loginData.params.username = this.userModel.username;
        loginData.params.password = this.userModel.password;
        this.loginService.validateUserCredentials(loginData)
            .subscribe(function (response) {
            localStorage.setItem(_services_login_login_service__WEBPACK_IMPORTED_MODULE_3__["ACCESS_TOKEN"], response.access_token);
            localStorage.setItem(_services_login_login_service__WEBPACK_IMPORTED_MODULE_3__["REFRESH_TOKEN"], response.refresh_token);
            _this.router.navigate(['/home']);
        }, function (error) {
            _this.errorMessage = error;
            _this.failedCounter++;
            if (_this.failedCounter > 1) {
                _this.usernameInformation.display = true;
                _this.passwordInformation.display = true;
            }
            if (_this.failedCounter > 2) {
                _this.failedLoginWarning.display = true;
            }
        });
    };
    LoginComponent.prototype.resolved = function (captchaResponse) {
        this.recaptchaResponse = captchaResponse;
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/services/course/course.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/course/course.service.ts ***!
  \***************************************************/
/*! exports provided: CourseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseService", function() { return CourseService; });
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

var CourseService = /** @class */ (function () {
    function CourseService() {
        this.initialized = false;
        if (this.initialized === true)
            return;
        this.initialized = true;
        this.subjects = [];
        this.meetings = [];
        this.situations = [];
        this.students = [];
        var names = [
            "Aaren",
            "Aarika",
            "Abagael",
            "Abagail",
            "Abbe",
            "Abbey",
            "Abbi",
            "Abbie",
            "Abby",
            "Abbye",
            "Abigael",
            "Abigail",
            "Abigale",
            "Abra",
            "Ada",
            "Adah",
            "Adaline",
            "Adan",
            "Adara",
            "Adda",
            "Addi",
            "Addia",
            "Addie",
            "Addy",
            "Adel",
            "Adela",
            "Adelaida",
            "Adelaide",
            "Adele",
            "Adelheid",
            "Adelice",
            "Adelina",
            "Adelind",
            "Adeline",
            "Adella",
            "Adelle",
            "Adena",
            "Adey",
            "Adi",
            "Adiana",
            "Adina",
            "Adora",
            "Adore",
            "Adoree",
            "Adorne",
            "Adrea",
            "Adria",
            "Adriaens",
            "Adrian",
            "Adriana",
            "Adriane",
            "Adrianna",
            "Adrianne",
            "Adriena",
            "Adrienne",
            "Aeriel",
            "Aeriela",
            "Aeriell",
            "Afton",
            "Ag",
            "Agace",
            "Agata",
            "Agatha",
            "Agathe",
            "Aggi",
            "Aggie",
            "Aggy",
            "Agna",
            "Agnella",
            "Agnes",
            "Agnese",
            "Agnesse",
            "Agneta",
            "Agnola",
            "Agretha",
            "Aida",
            "Aidan",
            "Aigneis",
            "Aila",
            "Aile",
            "Ailee",
            "Aileen",
            "Ailene",
            "Ailey",
            "Aili",
            "Ailina",
            "Ailis",
            "Ailsun",
            "Ailyn",
            "Aime",
            "Aimee",
            "Aimil",
            "Aindrea",
            "Ainslee",
            "Ainsley",
            "Ainslie",
            "Ajay",
            "Alaine",
            "Alameda",
            "Alana",
            "Alanah",
            "Alane",
            "Alanna",
            "Alayne",
            "Alberta",
            "Albertina",
            "Albertine",
            "Albina",
            "Alecia",
            "Aleda",
            "Aleece",
            "Aleen",
            "Alejandra",
            "Alejandrina",
            "Alena",
            "Alene",
            "Alessandra",
            "Aleta",
            "Alethea",
            "Alex",
            "Alexa",
            "Alexandra",
            "Alexandrina",
            "Alexi",
            "Alexia",
            "Alexina",
            "Alexine",
            "Alexis",
            "Alfi",
            "Alfie",
            "Alfreda",
            "Alfy",
            "Ali",
            "Alia",
            "Alica",
            "Alice",
            "Alicea",
            "Alicia",
            "Alida",
            "Alidia",
            "Alie",
            "Alika",
            "Alikee",
            "Alina",
            "Aline",
            "Alis",
            "Alisa",
            "Alisha",
            "Alison",
            "Alissa",
            "Alisun",
            "Alix",
            "Aliza",
            "Alla",
            "Alleen",
            "Allegra",
            "Allene",
            "Alli",
            "Allianora",
            "Allie",
            "Allina",
            "Allis",
            "Allison",
            "Allissa",
            "Allix",
            "Allsun",
            "Allx",
            "Ally",
            "Allyce",
            "Allyn",
            "Allys",
            "Allyson",
            "Alma",
            "Almeda",
            "Almeria",
            "Almeta",
            "Almira",
            "Almire",
            "Aloise",
            "Aloisia",
            "Aloysia",
            "Alta",
            "Althea",
            "Alvera",
            "Alverta",
            "Alvina",
            "Alvinia",
            "Alvira",
            "Alyce",
            "Alyda",
            "Alys",
            "Alysa",
            "Alyse",
            "Alysia",
            "Alyson",
            "Alyss",
            "Alyssa",
            "Amabel",
            "Amabelle",
            "Amalea",
            "Amalee",
            "Amaleta",
            "Amalia",
            "Amalie",
            "Amalita",
            "Amalle",
            "Amanda",
            "Amandi",
            "Amandie",
            "Amandy",
            "Amara",
            "Amargo",
            "Amata",
            "Amber",
            "Amberly",
            "Ambur",
            "Ame",
            "Amelia"
        ];
        for (var i = 0; i < 30; i++) {
            var user = {
                id: i,
                lastLogin: "2018-01-01",
                username: "username" + i,
                email: i + "@scs.ubbcluj.ro",
                firstName: names[Math.floor(Math.random() * 100 % names.length)],
                lastName: names[Math.floor(Math.random() * 100 % names.length)],
                userType: 1,
                faculty: "IE",
                createdAt: "2018-01-02",
                updatedAt: "2018-01-02",
            };
            var student = {
                user: user,
                group: "" + (i % 5 + 1),
                year: i % 3 + 1
            };
            this.students.push(student);
        }
        var teacher = {
            user: {
                id: 0,
                lastLogin: "2018-01-01",
                username: "popescu",
                email: "popescu@scs.ubbcluj.ro",
                firstName: "Ion",
                lastName: "Popescu",
                userType: 1,
                faculty: "IE",
                createdAt: "2018-01-02",
                updatedAt: "2018-01-02",
            }
        };
        var subject = {
            id: 0,
            name: "LFTC",
            isOptional: false,
            teacher: teacher
        };
        var subjectNames = [
            'Limbaje formale si tehnici de compilare',
            'Programare paralela si distribuita',
            'Proiect colectiv',
            'Ingineria sistemelor soft',
            'Medii de proiectare si programare',
            'Securitate software',
            'Prelucrarea datelor audio-video',
        ];
        for (var i = 0; i < 7; i++) {
            var subject_1 = {
                id: i,
                name: subjectNames[i],
                isOptional: i % 5 === 4,
                teacher: teacher
            };
            this.subjects.push(subject_1);
            var meeting_1 = {
                id: i * 10,
                type: "Seminar",
                attendanceRequired: (Math.floor(Math.random() * 10 % 2) > 0),
                subject: subject_1
            };
            var meeting_2 = {
                id: i * 10 + 1,
                type: "Laboratory",
                attendanceRequired: (Math.floor(Math.random() * 10 % 2) > 0),
                subject: subject_1
            };
            this.meetings.push(meeting_1, meeting_2);
        }
        var currentId = 0;
        for (var i = 0; i < this.students.length; i++) {
            for (var j = 0; j < this.meetings.length; j++) {
                for (var k = 0; k < 10; k++) {
                    var situation = {
                        id: currentId,
                        weekNumber: k,
                        isPresent: (Math.floor(Math.random() * 10 % 2) > 0),
                        isGradable: (Math.floor(Math.random() * 10 % 2) > 0),
                        grade: Math.floor(Math.random() * 10 % 10) + 1,
                        meeting: this.meetings[j],
                        student: this.students[i],
                        updated: false,
                        teacher: teacher
                    };
                    currentId += 1;
                    this.situations.push(situation);
                }
            }
        }
    }
    CourseService.prototype.getSituationsSorted = function (meeting, weekNumber) {
        if (!meeting || !weekNumber) {
            console.log(this.situations.length);
            return this.situations;
        }
        return this.situations.filter(function (s) { return s.meeting.id === meeting.id && s.weekNumber === weekNumber; })
            .sort(function (s1, s2) { return s1.student.user.lastName > s2.student.user.lastName ? 1 : -1; });
    };
    CourseService.prototype.getMeetings = function (subject) {
        return this.meetings.filter(function (m) { return m.subject.id === subject.id; });
    };
    CourseService.prototype.getSubjects = function (teacher) {
        return this.subjects.filter(function (s) { return s.teacher.user.id === teacher.user.id; });
    };
    CourseService.prototype.saveSituations = function (situations) {
        this.situations = situations;
    };
    CourseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CourseService);
    return CourseService;
}());



/***/ }),

/***/ "./src/app/services/login/login.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/login/login.service.ts ***!
  \*************************************************/
/*! exports provided: ACCESS_TOKEN, REFRESH_TOKEN, LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCESS_TOKEN", function() { return ACCESS_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REFRESH_TOKEN", function() { return REFRESH_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ACCESS_TOKEN = 'ACCESS_TOKEN';
var REFRESH_TOKEN = 'REFRESH_TOKEN';
var LoginService = /** @class */ (function () {
    function LoginService(router, http) {
        this.router = router;
        this.http = http;
        this.baseURL = 'http://localhost:port/app';
    }
    LoginService.prototype.validateUserCredentials = function (loginData) {
        var body = {
            'username': loginData.username,
            'password': loginData.password
        };
        return this.http.post(loginData.url, body);
    };
    LoginService.prototype.isLoggedIn = function () {
        var access_token = localStorage.getItem(ACCESS_TOKEN);
        return !!access_token || access_token != '';
    };
    LoginService.prototype.logout = function (username) {
        return this.http.post(this.baseURL + '/logout', username);
    };
    LoginService.prototype.getUserId = function () {
        //TODO
        return 1;
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/situation/situation.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/situation/situation.service.ts ***!
  \*********************************************************/
/*! exports provided: SituationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SituationService", function() { return SituationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_properties_situation_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/properties/situation-properties */ "./src/app/shared/properties/situation-properties.ts");
/* harmony import */ var _course_course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../course/course.service */ "./src/app/services/course/course.service.ts");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/observable/of */ "./node_modules/rxjs/internal/observable/of.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SituationService = /** @class */ (function () {
    function SituationService(http, courseService) {
        this.http = http;
        this.courseService = courseService;
        this.properties = _shared_properties_situation_properties__WEBPACK_IMPORTED_MODULE_2__["situation_properties"];
    }
    SituationService.prototype.getSituationsFor = function (teacher_id, meeting, weekNumber) {
        var p = this.properties.situation_get_sorted_by;
        p.params.meeting_id = meeting.id;
        p.params.week_number = weekNumber;
        p.headers.access_token = localStorage.getItem("ACCESS_TOKEN");
        var options = {
            params: p.params,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](p.headers)
        };
        return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_4__["of"])(this.courseService.getSituationsSorted(meeting, weekNumber));
        //TODO return this.http.get<Situation[]>(this.properties.url, options);
    };
    SituationService.prototype.getAllSituations = function (teacher_id) {
        var p = this.properties.situation_get_all_sorted;
        p.headers.access_token = localStorage.getItem("ACCESS_TOKEN");
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](p.headers)
        };
        return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_4__["of"])(this.courseService.getSituationsSorted(null, null));
        //TODO return this.http.get<Situation[]>(p.url, options);
    };
    SituationService.prototype.getSituations = function (teacher_id, meeting, weekNumber) {
        if (!meeting || !weekNumber)
            return this.getAllSituations(teacher_id);
        return this.getSituationsFor(teacher_id, meeting, weekNumber);
    };
    SituationService.prototype.getMeetings = function (subject) {
        //return this.meetings.filter(m => m.subject.id === subject.id);
        //TODO
        return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_4__["of"])(this.courseService.getMeetings(subject));
    };
    SituationService.prototype.getSubjects = function (teacher) {
        //return this.subjects.filter(s => s.teacher.user.id === teacher.user.id);
        return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_4__["of"])(this.courseService.getSubjects(teacher));
    };
    SituationService.prototype.saveSituations = function (situations) {
        //this.situations = situations;
    };
    SituationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _course_course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"]])
    ], SituationService);
    return SituationService;
}());



/***/ }),

/***/ "./src/app/shared/properties/login-properties.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/properties/login-properties.ts ***!
  \*******************************************************/
/*! exports provided: login_properties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login_properties", function() { return login_properties; });
var login_properties = {
    student_login: {
        url: 'http://localhost:8000/api/v1/auth/student/',
        method: 'POST',
        params: {
            username: '',
            password: ''
        },
        response: {
            access_token: '',
            refresh_token: ''
        },
        error: {
            error: '',
            error_description: ''
        }
    },
    teacher_login: {
        url: 'http://localhost:8000/api/v1/auth/teacher/',
        method: 'POST',
        params: {
            username: '',
            password: ''
        },
        response: {
            access_token: '',
            refresh_token: ''
        },
        error: {
            error: '',
            error_description: ''
        }
    }
};


/***/ }),

/***/ "./src/app/shared/properties/situation-properties.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/properties/situation-properties.ts ***!
  \***********************************************************/
/*! exports provided: situation_properties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "situation_properties", function() { return situation_properties; });
var situation_properties = {
    situation_get_all_sorted: {
        url: 'http://localhost:8000/api/v1/situation/',
        method: 'GET',
        response: {},
        headers: {
            access_token: ''
        },
        error: {
            error: '',
            error_description: ''
        }
    },
    situation_get_sorted_by: {
        url: 'http://localhost:8000/api/v1/situation/',
        method: 'GET',
        response: {},
        params: {
            meeting_id: '',
            week_number: ''
        },
        headers: {
            access_token: ''
        },
        error: {
            error: '',
            error_description: ''
        }
    }
};


/***/ }),

/***/ "./src/app/situation-table/situation-table.component.css":
/*!***************************************************************!*\
  !*** ./src/app/situation-table/situation-table.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\ntr.custom-table-header th {\n  background-color: lightgrey;\n  border-bottom: 1px solid black;\n  font-size: 20px;\n  text-align-all: center;\n  color: black;\n}\n\ntr.custom-table-row td {\n  border-bottom-width: 0;\n}\n\ntr.custom-table-row:hover {\n  background: #f5f5f5;\n}\n\n.example-first-header-row th {\n  border-bottom: none;\n}\n\n.example-second-header-row {\n  font-style: italic;\n}\n\n.example-first-footer-row {\n  font-weight: bold;\n}\n\n.example-second-footer-row td {\n  color: #900000;\n}\n\n.example-full-width {\n  margin-left: 5vw;\n}\n\n/deep/ .mat-tab-label {\n  opacity: 1 !important;\n}\n\n/deep/ .mat-checkbox-checked.mat-accent .mat-checkbox-background, .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background {\n  background-color: lightgreen;\n\n}\n\n/deep/ .mat-sort-header-container {\n  text-align: center !important;\n  align-items: center !important;\n  margin-left: 26% !important;\n}\n\n/deep/ .mat-header-cell {\n  text-align: center;\n}\n\n/deep/ .mat-cell {\n  justify-content: flex-end;\n  text-align: center;\n}\n\n/deep/ th {\n  text-align: center;\n}\n\n/deep/ th.mat-header-cell {\n  align-items: center;\n  margin-left: 30% !important;\n\n}\n\n/deep/ .mat-raised-button[disabled][disabled] {\n  background-color: lightgrey;\n  color: black;\n}\n\ntd.mat-cell, td.mat-footer-cell, th.mat-header-cell {\n  align-items: center;\n  margin-left: 30% !important;\n\n}\n\n.mat-elevation-z8 {\n  background-color: #fff;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n.button-row {\n  margin-bottom: 2vh;\n}\n\n.button-row button,\n.button-row a {\n  margin-right: 8px;\n}\n\n.basic-select {\n\n}\n\n/deep/ .button-row .mat-form-field-appearance-outline .mat-form-field-outline-end {\n  border-radius: 0;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);\n  background-color: white;\n}\n\n/deep/ .button-row .mat-form-field-appearance-outline .mat-form-field-outline-start {\n  border-radius: 0;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);\n  background-color: white;\n}\n\n/deep/ .button-row .mat-form-field-appearance-outline .mat-form-field-outline-end, /deep/ .mat-form-field-appearance-outline .mat-form-field-outline-start {\n  min-width: 0;\n}\n\n/deep/ .button-row .mat-form-field-appearance-outline .mat-form-field-wrapper {\n  margin-right: 8px;\n}\n\n/deep/ .mat-cell .mat-form-field-wrapper .mat-form-field-infix {\n  width: 4vw;\n}\n\n/deep/ .cdk-text-field-autofill-monitored:not(:-webkit-autofill) {\n  text-align: center;\n}\n\n/deep/ .mat-form-field-wrapper {\n  padding-bottom: 0;\n}\n\n/deep/ .mat-form-field-appearance-outline .mat-form-field-infix {\n  padding: 0.2vh 0 1vh 0;\n}\n\n/deep/ tr .form-group {\n  margin-bottom: 0;\n}\n"

/***/ }),

/***/ "./src/app/situation-table/situation-table.component.html":
/*!****************************************************************!*\
  !*** ./src/app/situation-table/situation-table.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\n  <button mat-raised-button color=\"basic\" (click)=\"resetFilters()\">\n    <mat-icon>refresh</mat-icon>\n    Reset filters\n  </button>\n  <button mat-raised-button color=\"basic\" (click)=\"save()\">\n    <mat-icon>save</mat-icon>\n    Save\n  </button>\n  <mat-form-field appearance=\"outline\" class=\"basic-select\">\n    <mat-select  [compareWith]=\"compareColumn\" [(ngModel)]=\"displayedColumns\" multiple>\n      <mat-select-trigger>\n        Columns to display\n      </mat-select-trigger>\n      <mat-option *ngFor=\"let column of possibleColumns\" [value]=\"column.value\">{{column.display}}</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <button mat-raised-button color=\"basic\" disabled>\n    <mat-icon>info</mat-icon>\n    Average grade: {{getAverageGrade()}}\n  </button>\n  <button mat-raised-button color=\"basic\" disabled>\n    <mat-icon>info</mat-icon>\n    Average presence: {{getAveragePresence()}}%\n  </button>\n</div>\n\n<div class=\"mat-elevation-z8\">\n  <mat-tab-group mat-stretch-tabs>\n    <mat-tab label=\"Filter by...\" style=\"width: 20px\"></mat-tab>\n    <mat-tab *ngIf=\"isColumnDisplayed('name') === true\">\n      <ng-template mat-tab-label>\n        <div *ngIf=\"nameFilter === ''\"> Name</div>\n        <div *ngIf=\"nameFilter !== ''\" style=\"color: red\"> Name (edited)</div>\n      </ng-template>\n      <mat-form-field class=\"example-full-width\">\n        <input [(ngModel)]=\"nameFilter\" matInput (keyup)=\"applyFilter($event.target.value,'name')\"\n               placeholder=\"Filter by name\">\n      </mat-form-field>\n    </mat-tab>\n\n    <mat-tab *ngIf=\"isColumnDisplayed('year') === true\">\n      <ng-template mat-tab-label>\n        <div *ngIf=\"yearFilter === ''\"> Year</div>\n        <div *ngIf=\"yearFilter !== ''\" style=\"color: red\"> Year (edited)</div>\n      </ng-template>\n      <mat-form-field class=\"example-full-width\">\n        <input type=\"number\" [(ngModel)]=\"yearFilter\" matInput (keyup)=\"applyFilter($event.target.value,'year')\"\n               placeholder=\"Filter by year\">\n      </mat-form-field>\n    </mat-tab>\n\n    <mat-tab *ngIf=\"isColumnDisplayed('group') === true\">\n      <ng-template mat-tab-label>\n        <div *ngIf=\"groupFilter == ''\"> Group</div>\n        <div *ngIf=\"groupFilter != ''\" style=\"color: red\"> Group (edited)</div>\n      </ng-template>\n      <mat-form-field class=\"example-full-width\">\n        <input type=\"number\" [(ngModel)]=\"groupFilter\" matInput (keyup)=\"applyFilter($event.target.value,'group')\"\n               placeholder=\"Filter by group\">\n      </mat-form-field>\n    </mat-tab>\n\n    <mat-tab *ngIf=\"isColumnDisplayed('subject') === true\">\n      <ng-template mat-tab-label>\n        <div *ngIf=\"subjectFilter === ''\"> Subject</div>\n        <div *ngIf=\"subjectFilter !== ''\" style=\"color: red\"> Subject (edited)</div>\n      </ng-template>\n      <mat-form-field class=\"example-full-width\">\n        <input [(ngModel)]=\"subjectFilter\" matInput (keyup)=\"applyFilter($event.target.value,'subject')\"\n               placeholder=\"Filter by subject\">\n      </mat-form-field>\n    </mat-tab>\n\n    <mat-tab *ngIf=\"isColumnDisplayed('meeting') === true\">\n      <ng-template mat-tab-label>\n        <div *ngIf=\"meetingFilter === ''\"> Meeting</div>\n        <div *ngIf=\"meetingFilter !== ''\" style=\"color: red\"> Meeting (edited)</div>\n      </ng-template>\n      <mat-form-field class=\"example-full-width\">\n        <input [(ngModel)]=\"meetingFilter\" matInput (keyup)=\"applyFilter($event.target.value,'meeting')\"\n               placeholder=\"Filter by meeting\">\n      </mat-form-field>\n    </mat-tab>\n\n    <mat-tab *ngIf=\"isColumnDisplayed('week') === true\">\n      <ng-template mat-tab-label>\n        <div *ngIf=\"weekFilter === ''\"> Week </div>\n        <div *ngIf=\"weekFilter !== ''\" style=\"color: red\"> Week (edited)</div>\n      </ng-template>\n      <mat-form-field class=\"example-full-width\">\n        <input type=\"number\" [(ngModel)]=\"weekFilter\" matInput (keyup)=\"applyFilter($event.target.value,'week')\"\n               placeholder=\"Filter by week\">\n      </mat-form-field>\n    </mat-tab>\n\n    <mat-tab *ngIf=\"isColumnDisplayed('is_present') === true\">\n      <ng-template mat-tab-label>\n        <div *ngIf=\"presenceFilter === ''\"> Presence</div>\n        <div *ngIf=\"presenceFilter !== ''\" style=\"color: red\"> Presence (edited)</div>\n      </ng-template>\n      <mat-form-field class=\"example-full-width\">\n        <mat-select placeholder=\"Filter by presence\" [(ngModel)]=\"presenceFilter\">\n          <mat-option value=\"true\" (click)=\"applyFilter('true','is_present')\">Present</mat-option>\n          <mat-option value=\"false\" (click)=\"applyFilter('false','is_present')\">Absent</mat-option>\n          <mat-option value=\"not_required\" (click)=\"applyFilter('not_required','is_present')\">Not required</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </mat-tab>\n\n\n    <mat-tab *ngIf=\"isColumnDisplayed('grade') === true\">\n      <ng-template mat-tab-label>\n        <div *ngIf=\"gradeFilter === '' && gradeOperationFilter === ''\"> Grade</div>\n        <div *ngIf=\"gradeFilter !== '' || gradeOperationFilter !== ''\" style=\"color: red\"> Grade (edited)</div>\n      </ng-template>\n      <mat-form-field class=\"example-full-width\">\n        <mat-select placeholder=\"Operation type\" [(ngModel)]=\"gradeOperationFilter\">\n          <mat-option value=\"greater_than\" (click)=\"applyFilter('greater_than','gradeOperation')\">Greater than\n          </mat-option>\n          <mat-option value=\"less_than\" (click)=\"applyFilter('less_than','gradeOperation')\">Less than</mat-option>\n          <mat-option value=\"equal_to\" (click)=\"applyFilter('equal_to','gradeOperation')\">Equal to</mat-option>\n          <mat-option value=\"different_from\" (click)=\"applyFilter('different_from','gradeOperation')\">Different from\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <input type=\"number\" [(ngModel)]=\"gradeFilter\" matInput (keyup)=\"applyFilter($event.target.value,'grade')\"\n               placeholder=\"Filter by grade\">\n      </mat-form-field>\n    </mat-tab>\n\n\n    <mat-tab *ngIf=\"isColumnDisplayed('email') === true\">\n      <ng-template mat-tab-label>\n        <div *ngIf=\"emailFilter === ''\"> Email</div>\n        <div *ngIf=\"emailFilter !== ''\" style=\"color: red\"> Email (edited)</div>\n      </ng-template>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput [(ngModel)]=\"emailFilter\" (keyup)=\"applyFilter($event.target.value,'email')\"\n               placeholder=\"Filter by e-mail\">\n      </mat-form-field>\n    </mat-tab>\n\n  </mat-tab-group>\n\n\n  <table mat-table [dataSource]=\"situationsDataSource\" matSort class=\"mat-elevation-z8\">\n\n    <ng-container matColumnDef=\"action\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Actions</th>\n      <td mat-cell *matCellDef=\"let situation\">\n        <button mat-raised-button color=\"basic\" (click)=\"getOverallSituation(situation.student)\">\n          Check student\n        </button>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\n      <td mat-cell *matCellDef=\"let situation\"> {{ situation.student.user.lastName + \" \" +\n        situation.student.user.firstName }}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"year\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Year</th>\n      <td mat-cell *matCellDef=\"let situation\"> {{ situation.student.year }}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"group\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Group</th>\n      <td mat-cell *matCellDef=\"let situation\"> {{ situation.student.group}}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"subject\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Subject</th>\n      <td mat-cell *matCellDef=\"let situation\"> {{ situation.meeting.subject.name}}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"meeting\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Meeting</th>\n      <td mat-cell *matCellDef=\"let situation\"> {{ situation.meeting.type }}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"week\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Week</th>\n      <td mat-cell *matCellDef=\"let situation\"> {{ situation.weekNumber }}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"is_present\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Present</th>\n      <td mat-cell *matCellDef=\"let situation\">\n        <div *ngIf=\"situation.meeting.attendanceRequired === false\">\n          <mat-icon>not_interested</mat-icon>\n        </div>\n        <mat-checkbox [(ngModel)]=\"situation.isPresent\"\n                      (click)=\"saveChange(situation)\"\n                      [disabled]=\"editable === false\"\n                      *ngIf=\"situation.meeting.attendanceRequired === true\"\n        >\n        </mat-checkbox>\n      </td>\n\n    </ng-container>\n\n    <ng-container matColumnDef=\"grade\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Grade</th>\n      <td mat-cell type=\"number\" *matCellDef=\"let situation\">\n        <div *ngIf=\"situation.isGradable === true\">\n          <div class=\"form-group table-input-form\" *ngIf=\"editable === true\">\n\n            <mat-form-field appearance=\"outline\">\n              <input type=\"number\" min=\"0\" max=\"10\" matInput [(ngModel)]=\"situation.grade\" (input)=\"saveChange(situation)\" [disabled]=\"situation.isGradable === false\">\n              <mat-icon matSuffix *ngIf=\"situation.grade >= 5\">check</mat-icon>\n              <mat-icon matSuffix *ngIf=\"situation.grade < 5\">close</mat-icon>\n            </mat-form-field>\n          </div>\n          <div *ngIf=\"editable === false\">\n            {{ situation.grade }}\n          </div>\n        </div>\n      </td>\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"email\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>E-Mail</th>\n      <td mat-cell *matCellDef=\"let situation\"> {{ situation.student.user.email}}</td>\n    </ng-container>\n\n\n    <tr mat-header-row class=\"custom-table-header\" *matHeaderRowDef=\"getDisplayedColumns()\"></tr>\n    <tr mat-row class=\"custom-table-row\" *matRowDef=\"let row; columns: getDisplayedColumns();\"></tr>\n\n  </table>\n</div>\n<mat-paginator [pageSizeOptions]=\"[50, 100]\"></mat-paginator>\n"

/***/ }),

/***/ "./src/app/situation-table/situation-table.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/situation-table/situation-table.component.ts ***!
  \**************************************************************/
/*! exports provided: MyErrorStateMatcher, SituationTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SituationTableComponent", function() { return SituationTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return (control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var SituationTableComponent = /** @class */ (function () {
    function SituationTableComponent(snackBar) {
        this.snackBar = snackBar;
    }
    SituationTableComponent.prototype.getDisplayedColumns = function () {
        if (this.displayedColumns == null)
            this.displayedColumns = this.idisplayedColumns;
        return this.displayedColumns;
    };
    SituationTableComponent.prototype.compareColumn = function (column1, column2) {
        return column1 === column2;
    };
    // warning, the changed field is not guaranteed to be updated when this method is called, it usually updates after
    SituationTableComponent.prototype.saveChange = function (situation) {
        situation.updated = true;
    };
    SituationTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.possibleColumns = [
            { 'value': 'action', 'display': 'Actions' },
            { 'value': 'name', 'display': 'Name' },
            { 'value': 'year', 'display': 'Year' },
            { 'value': 'group', 'display': 'Group' },
            { 'value': 'subject', 'display': 'Subject' },
            { 'value': 'meeting', 'display': 'Meeting' },
            { 'value': 'week', 'display': 'Week' },
            { 'value': 'is_present', 'display': 'Present' },
            { 'value': 'grade', 'display': 'Grade' },
            { 'value': 'email', 'display': 'E-Mail' }
        ];
        this.situationsDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.situations);
        this.getDisplayedColumns();
        this.situationsDataSource.sortingDataAccessor = function (item, property) {
            if (_this.situationsDataSource.paginator._pageIndex > 0)
                _this.situationsDataSource.paginator.firstPage();
            switch (property) {
                case 'name':
                    return item.student.user.lastName + " " + item.student.user.firstName;
                case 'year':
                    return item.student.year;
                case 'group':
                    return item.student.group;
                case 'week':
                    return item.weekNumber;
                case 'subject':
                    return item.meeting.subject.name;
                case 'meeting':
                    return item.meeting.type;
                case 'email':
                    return item.student.user.email;
                case "is_present":
                    return item.meeting.attendanceRequired ? (item.isPresent === true ? -1 : 0) : 1;
                case "grade":
                    return item.isGradable ? item.grade : -1;
                default:
                    return item[property];
            }
        };
        this.situationsDataSource.sort = this.sort;
        this.situationsDataSource.paginator = this.paginator;
        this.situationsDataSource.filterPredicate = function (situation, filters) { return _this.filterPredicate(situation); };
        this.gradeErrorMatcher = new MyErrorStateMatcher();
        this.fc = [];
        this.resetFormControl();
        this.resetFilters();
    };
    SituationTableComponent.prototype.filterByYear = function (situation) {
        return this.filters.year == '' || ("" + situation.student.year == "" + this.filters.year);
    };
    SituationTableComponent.prototype.filterByGroup = function (situation) {
        return this.filters.group == '' || "" + situation.student.group == "" + this.filters.group;
    };
    SituationTableComponent.prototype.filterBySubject = function (situation) {
        return this.filters.subject == ''
            || situation.meeting.subject.name.toLowerCase().trim()
                .includes(this.filters.subject.trim().toLowerCase());
    };
    SituationTableComponent.prototype.filterByMeeting = function (situation) {
        return this.filters.meeting == ''
            || situation.meeting.type.toLowerCase().trim()
                .includes(this.filters.meeting.trim().toLowerCase());
    };
    SituationTableComponent.prototype.filterByWeek = function (situation) {
        return this.filters.week == '' || "" + situation.weekNumber == "" + this.filters.week;
    };
    SituationTableComponent.prototype.filterByGrade = function (situation) {
        return (this.filters.grade == '' || this.filters.gradeOperation == '')
            || (situation.isGradable && (this.gradeOperationFilter == 'less_than' ? situation.grade < this.filters.grade
                : this.gradeOperationFilter == 'greater_than' ? situation.grade > this.filters.grade
                    : this.gradeOperationFilter == 'equal_to' ? situation.grade == this.filters.grade
                        : this.gradeOperationFilter == 'different_from' ? situation.grade != this.filters.grade
                            : false));
    };
    SituationTableComponent.prototype.filterByEmail = function (situation) {
        return this.filters.email == ''
            || situation.student.user.email.toLowerCase()
                .includes(this.filters.email.toLowerCase());
    };
    SituationTableComponent.prototype.filterByPresence = function (situation) {
        return (this.filters.is_present == '')
            || (this.filters.is_present == 'not_required' ? situation.meeting.attendanceRequired == false
                : (situation.meeting.attendanceRequired == true
                    && situation.isPresent == (this.filters.is_present == 'true')));
    };
    SituationTableComponent.prototype.filterByName = function (situation) {
        return this.filters.name == ''
            || (situation.student.user.lastName + " " + situation.student.user.firstName).trim().toLowerCase()
                .includes(this.filters.name.trim().toLowerCase());
    };
    SituationTableComponent.prototype.filterPredicate = function (situation) {
        return this.filterByName(situation)
            && this.filterBySubject(situation)
            && this.filterByMeeting(situation)
            && this.filterByYear(situation)
            && this.filterByGroup(situation)
            && this.filterByWeek(situation)
            && this.filterByGrade(situation)
            && this.filterByPresence(situation)
            && this.filterByEmail(situation);
    };
    SituationTableComponent.prototype.getIndexForSituation = function (situation) {
        return this.situations.findIndex(function (s) { return s.id === situation.id; });
    };
    SituationTableComponent.prototype.resetFormControl = function () {
        this.fc = this.gradeFormControls;
        //this.gradeFormControls.forEach(f => this.fc.push(new FormControl(f.value)));
    };
    SituationTableComponent.prototype.applyFilter = function (filterValue, filterColumn) {
        this.filters[filterColumn] = filterValue;
        // do not remove the static string, otherwise the filter won't register a change on empty strings
        this.situationsDataSource.filter = "DONT_REMOVE" + filterValue.trim().toLowerCase();
        if (this.situationsDataSource.paginator) {
            this.situationsDataSource.paginator.firstPage();
        }
    };
    SituationTableComponent.prototype.resetFilters = function () {
        this.filters = {
            'name': '',
            'year': '',
            'group': '',
            'subject': '',
            'meeting': '',
            'gradeOperation': '',
            'week': '',
            'grade': '',
            'email': '',
            'is_present': ''
        };
        this.nameFilter = '';
        this.groupFilter = '';
        this.yearFilter = '';
        this.subjectFilter = '';
        this.meetingFilter = '';
        this.weekFilter = '';
        this.emailFilter = '';
        this.presenceFilter = '';
        this.gradeOperationFilter = '';
        this.gradeFilter = '';
        this.applyFilter('', null);
    };
    SituationTableComponent.prototype.getAveragePresence = function () {
        var filteredSituations = this.situationsDataSource.data
            .filter(function (s) { return s.meeting.attendanceRequired === true; });
        if (filteredSituations.length === 0)
            return 100;
        var situationsWithPresence = filteredSituations
            .filter(function (s) { return s.isPresent === true; });
        return Math.round((situationsWithPresence.length / filteredSituations.length * 100) * 100) / 100;
    };
    SituationTableComponent.prototype.getAverageGrade = function () {
        var filteredSituations = this.situationsDataSource.data
            .filter(function (s) { return s.isGradable === true; });
        if (filteredSituations.length === 0)
            return null;
        var sum = filteredSituations
            .map(function (s) { return s.grade; })
            .reduce(function (sum, grade) { return sum + grade; });
        return Math.round(sum / filteredSituations.length * 100) / 100;
    };
    SituationTableComponent.prototype.removeColumn = function (column) {
        this.displayedColumns = this.displayedColumns.filter(function (c) { return c != column; });
    };
    SituationTableComponent.prototype.save = function () {
        var avgGrade = Math.round(this.getAverageGrade() * 100) / 100;
        var avgPresence = Math.round(this.getAveragePresence() * 100) / 100;
        var message = "Average grade is " + avgGrade + "\n"
            + "Average presence is " + avgPresence + "%";
        //this.snackBar.open(message, 'OK', {duration: 2000,});
        this.snackBar.open("Data has been successfully saved!", 'Clear', { duration: 2000 });
    };
    SituationTableComponent.prototype.isColumnDisplayed = function (column) {
        return this.displayedColumns.find(function (c) { return c === column; }) != null;
    };
    SituationTableComponent.prototype.getOverallSituation = function (student) {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SituationTableComponent.prototype, "situations", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SituationTableComponent.prototype, "idisplayedColumns", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SituationTableComponent.prototype, "selection", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SituationTableComponent.prototype, "gradeFormControls", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SituationTableComponent.prototype, "editable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"])
    ], SituationTableComponent.prototype, "situationsDataSource", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], SituationTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], SituationTableComponent.prototype, "sort", void 0);
    SituationTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-situation-table',
            template: __webpack_require__(/*! ./situation-table.component.html */ "./src/app/situation-table/situation-table.component.html"),
            styles: [__webpack_require__(/*! ./situation-table.component.css */ "./src/app/situation-table/situation-table.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], SituationTableComponent);
    return SituationTableComponent;
}());



/***/ }),

/***/ "./src/app/teacher-situation/teacher-situation.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/teacher-situation/teacher-situation.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".space-giver {\n  height: 2vh;\n}\n\n.button-row {\n  margin-top: 5vh !important;\n}\n"

/***/ }),

/***/ "./src/app/teacher-situation/teacher-situation.component.html":
/*!********************************************************************!*\
  !*** ./src/app/teacher-situation/teacher-situation.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"doneLoading === false\">\n  <mat-spinner></mat-spinner>\n</div>\n<div *ngIf=\"doneLoading === true\">\n  <button mat-raised-button color=\"basic\" [hidden]=\"enableShowAllButton === false\"\n          (click)=\"showTableForAll()\"\n  >Show for all\n  </button>\n  <mat-horizontal-stepper *ngIf=\"enableSelectionStepper === true\" [linear]=\"true\" #stepper>\n    <mat-step [stepControl]=\"subjectControl\">\n      <mat-form-field>\n        <ng-template matStepLabel>Choose subject</ng-template>\n        <mat-select placeholder=\"Subject...\" [formControl]=\"subjectControl\" (selectionChange)=\"subjectSelected()\"\n                    required>\n          <mat-option *ngFor=\"let subject of subjects\" [value]=\"subject\">\n            {{ subject.name }}\n          </mat-option>\n        </mat-select>\n        <mat-error *ngIf=\"subjectControl.hasError('required')\">Please choose a subject</mat-error>\n        <mat-hint> You must choose the subject for which you want to add data</mat-hint>\n      </mat-form-field>\n      <div class=\"button-row\">\n        <button mat-raised-button matStepperNext color=\"basic\">Next</button>\n      </div>\n    </mat-step>\n\n\n    <mat-step [stepControl]=\"meetingControl\">\n      <mat-form-field>\n        <ng-template matStepLabel>Choose meeting</ng-template>\n        <mat-select placeholder=\"Meeting...\" [formControl]=\"meetingControl\" required>\n          <mat-option *ngFor=\"let meeting of meetings\" [value]=\"meeting\">\n            {{ meeting.type }}\n          </mat-option>\n        </mat-select>\n        <mat-error *ngIf=\"meetingControl.hasError('required')\">Please choose a meeting</mat-error>\n        <mat-hint> You must choose the meeting for which you want to add data</mat-hint>\n      </mat-form-field>\n      <div class=\"button-row\">\n        <button mat-raised-button matStepperPrevious color=\"warn\">Back</button>\n        <button mat-raised-button matStepperNext color=\"basic\">Next</button>\n      </div>\n    </mat-step>\n\n\n    <mat-step [stepControl]=\"weekControl\">\n      <mat-form-field>\n        <ng-template matStepLabel>Choose week</ng-template>\n        <mat-select placeholder=\"Week...\" [formControl]=\"weekControl\" required>\n          <mat-option *ngFor=\"let week of weeks\" [value]=\"week\">\n            Week {{ week }}\n          </mat-option>\n        </mat-select>\n        <mat-error *ngIf=\"weekControl.hasError('required')\">Please choose a week</mat-error>\n        <mat-hint> You must choose the week for which you want to add data</mat-hint>\n      </mat-form-field>\n      <div class=\"button-row\">\n        <button mat-raised-button matStepperPrevious color=\"warn\">Back</button>\n        <button mat-raised-button matStepperNext color=\"basic\" [disabled]=\"enableSaveSelection === false\"\n                (click)=\"tableEditable = false\"\n        >Save changes\n        </button>\n      </div>\n    </mat-step>\n\n    <mat-step>\n      <ng-template matStepLabel> Save</ng-template>\n      All changes have been saved\n      <div class=\"button-row\">\n        <button mat-raised-button matStepperPrevious color=\"warn\" (click)=\"tableEditable = true\">Back</button>\n        <button mat-raised-button color=\"warn\" (click)=\"stepper.reset()\">Reset selection</button>\n      </div>\n    </mat-step>\n\n  </mat-horizontal-stepper>\n  <div class=\"space-giver\"></div>\n\n  <mat-chip-list *ngIf=\"enableSelectionStepper === true\">\n    <mat-chip color=\"accent\" selected *ngIf=\"subjectControl?.touched && meetingControl?.touched\">\n      {{ subjectControl.value.name }} {{ meetingControl.value.type }}\n    </mat-chip>\n    <mat-chip color=\"accent\" selected *ngIf=\"weekControl?.touched\">\n      Week {{ weekControl.value }}\n    </mat-chip>\n  </mat-chip-list>\n  <div class=\"main-content\" *ngIf=\"showTable()\">\n    <div class=\"space-giver\"></div>\n    <app-situation-table [situations]=\"getSituations(meetingControl.value,weekControl.value)\"\n                         [selection]=\"getNewSelection(selectedSituations)\"\n                         [editable]=\"tableEditable\"\n                         [gradeFormControls]=\"getNewGradeControl(situations)\"\n                         [idisplayedColumns]=\"getDisplayedColumns()\"\n    ></app-situation-table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/teacher-situation/teacher-situation.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/teacher-situation/teacher-situation.component.ts ***!
  \******************************************************************/
/*! exports provided: TeacherSituationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherSituationComponent", function() { return TeacherSituationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/login/login.service */ "./src/app/services/login/login.service.ts");
/* harmony import */ var _services_situation_situation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/situation/situation.service */ "./src/app/services/situation/situation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TeacherSituationComponent = /** @class */ (function () {
    function TeacherSituationComponent(situationService, loginService) {
        this.situationService = situationService;
        this.loginService = loginService;
        this.doneLoading = false;
    }
    TeacherSituationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tableEditable = true;
        this.doneLoading = false;
        this.enableShowAllButton = true;
        this.enableSaveSelection = true;
        this.enableSelectionStepper = true;
        var teacher = {
            user: {
                id: 0,
                lastLogin: "2018-01-01",
                username: "popescu",
                email: "popescu@scs.ubbcluj.ro",
                firstName: "Ion",
                lastName: "Popescu",
                userType: 1,
                faculty: "IE",
                createdAt: "2018-01-02",
                updatedAt: "2018-01-02",
            }
        };
        this.teacherID = this.loginService.getUserId();
        this.weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        this.weekControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.subjectControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.meetingControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.situationService.getSubjects(teacher).subscribe(function (s) { return _this.subjects = s; });
        this.situationService.getSituations(this.teacherID, null, null)
            .subscribe(function (r) {
            _this.situations = r;
            console.log('received: ' + r.length + ' elems');
        }, function (e) {
            console.log(e);
        }, function () {
            _this.doneLoading = true;
        });
    };
    TeacherSituationComponent.prototype.subjectSelected = function () {
        var _this = this;
        this.situationService.getMeetings(this.subjectControl.value).subscribe(function (m) { return _this.meetings = m; });
        this.meetingControl.reset();
    };
    TeacherSituationComponent.prototype.showTable = function () {
        return this.showAllButtonClicked || (this.weekControl.touched
            && this.subjectControl.touched
            && this.meetingControl.touched);
    };
    TeacherSituationComponent.prototype.getSituations = function (meeting, week) {
        if (!meeting || !week) {
            this.selectedSituations = this.situations;
        }
        else {
            this.selectedSituations = this.situations.filter(function (s) { return s.meeting.id === meeting.id && s.weekNumber === week; });
        }
        return this.selectedSituations;
    };
    TeacherSituationComponent.prototype.getNewSelection = function (situations) {
        return new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, situations.filter(function (s) { return s.isPresent === true; }));
    };
    TeacherSituationComponent.prototype.getDisplayedColumns = function () {
        if (this.showAllButtonClicked === true)
            return ['action', 'name', 'year', 'group', 'subject', 'meeting', 'week', 'is_present', 'grade', 'email'];
        return ['action', 'name', 'year', 'group', 'is_present', 'grade', 'email'];
    };
    TeacherSituationComponent.prototype.getNewGradeControl = function (situations) {
        var result = situations.map(function (s) { return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](s.grade); });
        return result;
    };
    TeacherSituationComponent.prototype.getMeeting = function () {
        if (this.weekControl.touched)
            return this.meetingControl.value;
        return null;
    };
    TeacherSituationComponent.prototype.getWeek = function () {
        if (this.weekControl.touched)
            return this.weekControl.value;
        return null;
    };
    TeacherSituationComponent.prototype.showTableForAll = function () {
        this.showAllButtonClicked = true;
        this.enableSelectionStepper = false;
        this.enableShowAllButton = false;
    };
    TeacherSituationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-teacher-situation',
            template: __webpack_require__(/*! ./teacher-situation.component.html */ "./src/app/teacher-situation/teacher-situation.component.html"),
            styles: [__webpack_require__(/*! ./teacher-situation.component.css */ "./src/app/teacher-situation/teacher-situation.component.css")]
        }),
        __metadata("design:paramtypes", [_services_situation_situation_service__WEBPACK_IMPORTED_MODULE_4__["SituationService"], _services_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], TeacherSituationComponent);
    return TeacherSituationComponent;
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
    production: false
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

module.exports = __webpack_require__(/*! /home/razvan/Documents/IntelliJIdeaProjects/academic-info/academicinfo-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map