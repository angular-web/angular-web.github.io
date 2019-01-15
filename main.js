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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-user></app-user> -->\r\n<!-- <app-home></app-home> -->\r\n<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _appRoutes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./appRoutes */ "./src/app/appRoutes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_navbar_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/navbar/navbar/navbar.component */ "./src/app/components/navbar/navbar/navbar.component.ts");
/* harmony import */ var _components_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/user-detail/user-detail.component */ "./src/app/components/user-detail/user-detail.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _components_navbar_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _components_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_12__["UserDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_appRoutes__WEBPACK_IMPORTED_MODULE_7__["appRoutes"])
            ],
            providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/appRoutes.ts":
/*!******************************!*\
  !*** ./src/app/appRoutes.ts ***!
  \******************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/user-detail/user-detail.component */ "./src/app/components/user-detail/user-detail.component.ts");



var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'user', component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_1__["UserComponent"] },
    { path: 'user/:id', component: _components_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_2__["UserDetailComponent"] }
];


/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Hello word !</h1>\n  <!-- <ul class=\"list-group\">\n    <li class=\"list-group-item\" *ngFor=\"let user of users; let i=index\">\n      {{ user }}\n    </li>\n  </ul> -->\n\n  <form (submit)=\"onSubmit(isEdit)\">\n    <div class=\"form-group\">\n      <label for=\"userId\">用户ID:</label>\n      <input type=\"text\" name=\"userId\" class=\"form-control\" [(ngModel)]=\"user.userId\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"title\">标题:</label>\n      <input type=\"text\" name=\"title\" class=\"form-control\" [(ngModel)]=\"user.title\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"body\">内容:</label>\n      <input type=\"text\" name=\"body\" class=\"form-control\" [(ngModel)]=\"user.body\">\n    </div>\n\n    <div class=\"form-group\">\n      <input type=\"submit\" class=\"btn btn-success\" value=\"提交\">\n    </div>\n  </form>\n\n  <div *ngFor=\"let data of datas; let i=index\">\n    <div class=\"well\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">用户ID：{{ data.userId }}</li>\n        <li class=\"list-group-item\">标题：{{ data.title }}</li>\n        <li class=\"list-group-item\">内容：{{ data.body }}</li>\n      </ul>\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"onEditClick(data)\">编辑</button>\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"onDeketeClick(data.id)\">删除</button>\n      <a class=\"btn btn-primary pull-right\" [routerLink]=\"[ '/user', data.id ]\" routerLinkActive=\"router-link-active\" >详情</a>\n    </div>\n    <br>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.less":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.isEdit = false;
        this.user = {
            userId: '',
            title: '',
            body: ''
        };
        this.dataStatus = false;
        this.users = this.dataService.getUsers();
        // console.log(this.dataService.getUsers2());
        // this.dataService.getUsers2().subscribe(user => {
        //   console.log(user);
        // })
        this.dataService.getJson().subscribe(function (datas) {
            _this.datas = datas;
        });
    }
    ;
    HomeComponent.prototype.ngOnInit = function () { };
    ;
    HomeComponent.prototype.onSubmit = function (isEdit) {
        var _this = this;
        if (isEdit) {
            this.dataService.updataData(this.user).subscribe(function (data) {
                for (var i = 0; i < _this.datas.length; i++) {
                    if (_this.datas[i].id === _this.user.id) {
                        _this.datas.splice(i, 1);
                    }
                }
                _this.datas.unshift(_this.user);
                _this.user = {
                    userId: '',
                    title: '',
                    body: ''
                };
            });
        }
        else {
            Object.keys(this.user).forEach(function (key) {
                // console.log(this.user[key]);
                if (_this.user[key])
                    _this.dataStatus = true;
                else
                    _this.dataStatus = false;
            });
            if (this.dataStatus) {
                this.dataService.addData(this.user).subscribe(function (data) {
                    _this.datas.unshift(data);
                });
            }
            ;
        }
        return false;
    };
    ;
    HomeComponent.prototype.onDeketeClick = function (id) {
        var _this = this;
        // console.log(id);
        this.dataService.deleteData(id).subscribe(function (datas) {
            for (var i = 0; i < _this.datas.length; i++) {
                if (_this.datas[i].id === id) {
                    _this.datas.splice(i, 1);
                }
            }
        });
    };
    ;
    HomeComponent.prototype.onEditClick = function (data) {
        this.isEdit = true;
        this.user = data;
    };
    ;
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.less */ "./src/app/components/home/home.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], HomeComponent);
    return HomeComponent;
}());

;


/***/ }),

/***/ "./src/app/components/navbar/navbar/navbar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/navbar/navbar/navbar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\" [routerLink]=\"['/']\" routerLinkActive=\"router-link-active\">Angular 7</a>\n  <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/']\" routerLinkActive=\"router-link-active\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/user']\" routerLinkActive=\"router-link-active\">User</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar/navbar.component.less":
/*!****************************************************************!*\
  !*** ./src/app/components/navbar/navbar/navbar.component.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci9uYXZiYXIuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/components/navbar/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/navbar/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    ;
    NavbarComponent.prototype.ngOnInit = function () { };
    ;
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.less */ "./src/app/components/navbar/navbar/navbar.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/user-detail/user-detail.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-detail/user-detail.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n  <div class=\"well\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">用户ID：{{ data.userId }}</li>\n      <li class=\"list-group-item\">标题：{{ data.title }}</li>\n      <li class=\"list-group-item\">内容：{{ data.body }}</li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user-detail/user-detail.component.less":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-detail/user-detail.component.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1kZXRhaWwvdXNlci1kZXRhaWwuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/components/user-detail/user-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/user-detail/user-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");




var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent(route, router, dataService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.data = {
            userId: '',
            title: '',
            body: ''
        };
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
    }
    ;
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getSingleData(this.id).subscribe(function (data) {
            _this['data'] = data;
        });
    };
    ;
    UserDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-detail',
            template: __webpack_require__(/*! ./user-detail.component.html */ "./src/app/components/user-detail/user-detail.component.html"),
            styles: [__webpack_require__(/*! ./user-detail.component.less */ "./src/app/components/user-detail/user-detail.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], UserDetailComponent);
    return UserDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Hello {{ userName }}</h1>\n\n<ul>\n  <li>年龄：{{ age }}</li>\n  <li>邮箱：{{ email }}</li>\n  <li>地址： {{ address.city }}-{{ address.state }}-{{ address.street }}</li>\n</ul>\n\n<ul>\n  <li *ngFor=\"let hobbie of hobbies; let i=index\">\n    {{ i+1 }}:{{ hobbie }}\n    <button type=\"button\" (click)=\"removeHobbie(i)\">删除</button>\n  </li>\n</ul>\n\n<form (submit)=\"addHobbie()\">\n  <div>\n    <label for=\"hobbie\">爱好：</label>\n    <input type=\"text\" name=\"hobbie\" [(ngModel)]=\"hobbie\">\n  </div>\n  <div>\n    <button type=\"submit\">添加</button>\n  </div>\n</form>\n\n<hr>\n\n<button type=\"button\" (click)=\"toggleEdit()\">是否编辑用户信息</button>\n\n<hr>\n\n<div [hidden]=\"isEdit\">\n  <h1>编辑用户信息</h1>\n  <form class=\"form\">\n    <div>\n      <label for=\"userName\">姓名：</label>\n      <input type=\"text\" name=\"userName\" [(ngModel)]=\"userName\">\n    </div>\n    <div>\n      <label for=\"age\">年龄：</label>\n      <input type=\"text\" name=\"age\" [(ngModel)]=\"age\">\n    </div>\n    <div>\n      <label for=\"email\">邮箱：</label>\n      <input type=\"text\" name=\"email\" [(ngModel)]=\"email\">\n    </div>\n    <div>\n      <label for=\"city\">城市：</label>\n      <input type=\"text\" name=\"name\" [(ngModel)]=\"address.city\">\n    </div>\n    <div>\n      <label for=\"state\">区：</label>\n      <input type=\"text\" name=\"state\" [(ngModel)]=\"address.state\">\n    </div>\n    <div>\n      <label for=\"street\">街道：</label>\n      <input type=\"text\" name=\"street\" [(ngModel)]=\"address.street\">\n    </div>\n  </form>\n</div>\n\n<!-- users -->\n<ul>\n  <li *ngFor=\"let user of users; let i=index\">\n    {{ user }}\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/user/user.component.less":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form div {\n  width: 600px;\n  height: 40px;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n}\n.form div label {\n  width: 60px;\n  height: 40px;\n  line-height: 40px;\n  display: block;\n  text-align: right;\n}\n.form div input {\n  flex: 1;\n  height: 26px;\n  box-sizing: border-box;\n  padding: 0 0 0 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL0M6L1VzZXJzL0xpdVplL0Rlc2t0b3Avd3d3cm9vdC9Bbmd1bGFyL2xlc3NvbjEvc3JjL2FwcC9jb21wb25lbnRzL3VzZXIvdXNlci5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3VzZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0NDQVA7QURORDtFQVFZLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7Q0NDWDtBRGJEO0VBZVksUUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0NDQ1giLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXIvdXNlci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtIHtcbiAgICBkaXYge1xuICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAwIDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmZvcm0gZGl2IHtcbiAgd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mb3JtIGRpdiBsYWJlbCB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uZm9ybSBkaXYgaW5wdXQge1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IDI2cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDAgMCAwIDEwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");



var UserComponent = /** @class */ (function () {
    function UserComponent(dataService) {
        this.dataService = dataService;
        this.isEdit = true;
        this.users = this.dataService.getUsers();
    }
    ;
    UserComponent.prototype.ngOnInit = function () {
        this.userName = "liuze";
        this.age = 22;
        this.email = "2411509324@qq.com";
        this.address = {
            city: '昆明市',
            state: '寻甸县',
            street: '马街'
        };
        this.hobbies = [
            "敲代码",
            "看书",
            "听音乐"
        ];
    };
    ;
    UserComponent.prototype.addHobbie = function () {
        if (this.hobbie) {
            this.hobbies.push(this.hobbie);
            this.hobbie = '';
        }
        return false;
    };
    ;
    UserComponent.prototype.removeHobbie = function (index) {
        this.hobbies.splice(index, 1);
    };
    ;
    UserComponent.prototype.toggleEdit = function () {
        this.isEdit = !this.isEdit;
    };
    ;
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/components/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.less */ "./src/app/components/user/user.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], UserComponent);
    return UserComponent;
}());

;
;


/***/ }),

/***/ "./src/app/model/api.ts":
/*!******************************!*\
  !*** ./src/app/model/api.ts ***!
  \******************************/
/*! exports provided: api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api", function() { return api; });
var api = {
    jsonUrl: 'http://jsonplaceholder.typicode.com/posts'
};


/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _model_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/api */ "./src/app/model/api.ts");





var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.jsonUrl = _model_api__WEBPACK_IMPORTED_MODULE_4__["api"].jsonUrl;
        this.users = ['liuze', '刘泽', 'Mr.liu'];
    }
    ;
    DataService.prototype.getUsers = function () {
        return this.users;
    };
    ;
    DataService.prototype.getUsers2 = function () {
        return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_3__["from"])(this.users);
    };
    ;
    DataService.prototype.getJson = function () {
        return this.http.get(this.jsonUrl);
    };
    ;
    DataService.prototype.addData = function (user) {
        return this.http.post(this.jsonUrl, user);
    };
    ;
    DataService.prototype.deleteData = function (id) {
        // console.log(id);
        return this.http.delete(this.jsonUrl + '/' + id);
    };
    ;
    DataService.prototype.updataData = function (data) {
        return this.http.put(this.jsonUrl + '/' + data.id, data);
    };
    ;
    DataService.prototype.getSingleData = function (id) {
        return this.http.get(this.jsonUrl + '/' + id);
    };
    ;
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());

;


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\LiuZe\Desktop\wwwroot\Angular\lesson1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map