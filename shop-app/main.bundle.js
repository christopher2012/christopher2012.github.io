webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.navbar-brand img {\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n\r\n.header-static {\r\n    position: fixed;\r\n}\r\n\r\n.content {\r\n    margin-top: 120px;\r\n}\r\n\r\n.cart {\r\n    float: right;\r\n}\r\n\r\n.cart div {\r\n    padding: 4px;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n}\r\n\r\n.cart div:hover {\r\n    background-color: rgb(197, 193, 191);\r\n}\r\n\r\n.cart img {\r\n    width: 62px;\r\n    height: 62px;\r\n}\r\n\r\n.header {\r\n    display: inline-block;\r\n}\r\n\r\n.header div {\r\n    display: inline-block;\r\n}\r\n\r\n.header a {\r\n    text-decoration: none;\r\n}\r\n\r\n.header h2 {\r\n    margin-bottom: 0px;\r\n    margin-top: 0px;\r\n    padding: 4px;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    height: 70px;\r\n    padding-left: 12px;\r\n    padding-right: 12px;\r\n    line-height: 70px;\r\n}\r\n\r\n.header h2:hover {\r\n    background-color: rgb(197, 193, 191);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div >\n    <div class=\"navbar navbar-default navbar-fixed-top\">\n      <div class=\"container\">\n\n        <div class='navbar-header'>\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\"\n            data-target=\"navbar-collapse-1\" aria-expanded=\"false\">\n          <span class=\"sr-only\">Toogle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" routerLink=\"/shop\">Sklep internetowy</a>\n        </div>\n\n        <div class=\"collapse navbar-collapse\" id=\"navbar-collapse-1\">\n          <ul class=\"nav navbar-nav\">\n            <li class=\"active\"><a routerLink=\"/shop\">Sklep</a></li>\n          </ul>\n          <ul class=\"navbar navbar-nav navbar-right\">\n            <a class=\"navbar-brand\" routerLink=\"/cart\">\n              <img alt=\"Brand\" src=\"../assets/images/cart.png\">\n            </a>\n            <button type=\"button\" routerLink=\"/cart\" class=\"btn btn-default navbar-btn\">\n              Koszyk <span class=\"badge\">{{cartDataService.cartItemList.length}}</span>\n            </button>\n            <button *ngIf='!authenticateService.isLogged' type=\"button\" routerLink=\"/login\" class=\"btn btn-default navbar-btn\">Zaloguj</button>\n            <button *ngIf='authenticateService.isLogged' type=\"button\" (click)='authenticateService.logout()' class=\"btn btn-default navbar-btn\">Wyloguj</button>\n          </ul>\n        </div>\n      </div>\n    </div>\n\n\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cart_data_service__ = __webpack_require__("../../../../../src/app/services/cart.data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authenticate_service__ = __webpack_require__("../../../../../src/app/services/authenticate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(cartDataService, authenticateService) {
        this.cartDataService = cartDataService;
        this.authenticateService = authenticateService;
    }
    AppComponent.prototype.ngOnDestroy = function () {
        console.log('on Destroy...');
    };
    AppComponent.prototype.ngOnInit = function () {
        console.log(this.authenticateService.isLogged);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_cart_data_service__["a" /* CartDataService */]],
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_cart_data_service__["a" /* CartDataService */], __WEBPACK_IMPORTED_MODULE_2__services_authenticate_service__["a" /* AuthenticateService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_item_list_item_list_component__ = __webpack_require__("../../../../../src/app/components/item.list/item.list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_item_item_component__ = __webpack_require__("../../../../../src/app/components/item/item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_shop_shop_component__ = __webpack_require__("../../../../../src/app/components/shop/shop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_category_list_category_list_component__ = __webpack_require__("../../../../../src/app/components/category.list/category.list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_category_category_component__ = __webpack_require__("../../../../../src/app/components/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_search_search_component__ = __webpack_require__("../../../../../src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_pln_currency_pipe__ = __webpack_require__("../../../../../src/app/pipes/pln.currency.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_category_filter_pipe__ = __webpack_require__("../../../../../src/app/pipes/category.filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__("../../../../../src/app/app.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_cart_cart_component__ = __webpack_require__("../../../../../src/app/components/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_cart_item_cart_item_component__ = __webpack_require__("../../../../../src/app/components/cart.item/cart.item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_cart_item_list_cart_item_list_component__ = __webpack_require__("../../../../../src/app/components/cart.item.list/cart.item.list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_order_order_component__ = __webpack_require__("../../../../../src/app/components/order/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_price_price_component__ = __webpack_require__("../../../../../src/app/components/price/price.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_admin_admin_component__ = __webpack_require__("../../../../../src/app/components/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pipes_search_filter_pipe__ = __webpack_require__("../../../../../src/app/pipes/search.filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pipes_price_filter_pipe__ = __webpack_require__("../../../../../src/app/pipes/price.filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_authenticate_service__ = __webpack_require__("../../../../../src/app/services/authenticate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_user_login_user_login_component__ = __webpack_require__("../../../../../src/app/components/user.login/user.login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__components_item_list_item_list_component__["a" /* ItemListComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_item_item_component__["a" /* ItemComponent */],
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_shop_shop_component__["a" /* ShopComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_category_list_category_list_component__["a" /* CategoryListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_category_category_component__["a" /* CategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pipes_pln_currency_pipe__["a" /* PlnCurrencyPipe */],
                __WEBPACK_IMPORTED_MODULE_11__pipes_category_filter_pipe__["a" /* CategoryFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_13__components_cart_cart_component__["a" /* CartComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_cart_item_cart_item_component__["a" /* CartItemComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_cart_item_list_cart_item_list_component__["a" /* CartItemListComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_order_order_component__["a" /* OrderComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_price_price_component__["a" /* PriceComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_22__pipes_search_filter_pipe__["a" /* SearchFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_23__pipes_price_filter_pipe__["a" /* PriceFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_25__components_user_login_user_login_component__["a" /* UserLoginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_http__["c" /* HttpModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_24__services_authenticate_service__["a" /* AuthenticateService */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_cart_cart_component__ = __webpack_require__("../../../../../src/app/components/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_shop_shop_component__ = __webpack_require__("../../../../../src/app/components/shop/shop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_order_order_component__ = __webpack_require__("../../../../../src/app/components/order/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_admin_admin_component__ = __webpack_require__("../../../../../src/app/components/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_user_login_user_login_component__ = __webpack_require__("../../../../../src/app/components/user.login/user.login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_2__components_cart_cart_component__["a" /* CartComponent */] },
    { path: 'shop', component: __WEBPACK_IMPORTED_MODULE_3__components_shop_shop_component__["a" /* ShopComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_shop_shop_component__["a" /* ShopComponent */], pathMatch: 'full' },
    { path: 'order', component: __WEBPACK_IMPORTED_MODULE_4__components_order_order_component__["a" /* OrderComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_5__components_admin_admin_component__["a" /* AdminComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__components_user_login_user_login_component__["a" /* UserLoginComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input {\r\n    margin-bottom: 12px;\r\n}\r\n\r\n.form-group {\r\n    width: 300px;\r\n}\r\n\r\n.btn-success {\r\n    width: 300px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron row\">\n    <h3>Dodawanie produktu</h3>\n    <div class=\"form-group has-success has-feedback\">\n      <label class=\"control-label\" for=\"inputSuccess2\">Input with success</label>\n      <input type=\"text\" class=\"form-control\" id=\"inputSuccess2\" aria-describedby=\"inputSuccess2Status\">\n      <span class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\n      <span id=\"inputSuccess2Status\" class=\"sr-only\">(success)</span>\n    </div>\n    <div class=\"form-group has-success has-feedback\">\n      <label class=\"control-label\" for=\"inputSuccess2\">Input with success</label>\n      <input type=\"text\" class=\"form-control\" id=\"inputSuccess2\" aria-describedby=\"inputSuccess2Status\">\n      <span class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\n      <span id=\"inputSuccess2Status\" class=\"sr-only\">(success)</span>\n    </div>\n    <div class=\"form-group has-success has-feedback\">\n      <label class=\"control-label\" for=\"inputSuccess2\">Input with success</label>\n      <input type=\"text\" class=\"form-control\" id=\"inputSuccess2\" aria-describedby=\"inputSuccess2Status\">\n      <span class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\n      <span id=\"inputSuccess2Status\" class=\"sr-only\">(success)</span>\n    </div>\n    <div class=\"form-group has-success has-feedback\">\n      <label class=\"control-label\" for=\"inputSuccess2\">Input with success</label>\n      <input type=\"text\" class=\"form-control\" id=\"inputSuccess2\" aria-describedby=\"inputSuccess2Status\">\n      <span class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\n      <span id=\"inputSuccess2Status\" class=\"sr-only\">(success)</span>\n    </div>\n    <div class=\"form-group has-success has-feedback\">\n      <label class=\"control-label\" for=\"inputSuccess2\">Input with success</label>\n      <input type=\"text\" class=\"form-control\" id=\"inputSuccess2\" aria-describedby=\"inputSuccess2Status\">\n      <span class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\n      <span id=\"inputSuccess2Status\" class=\"sr-only\">(success)</span>\n    </div>\n    <div class=\"form-group has-success has-feedback\">\n      <label class=\"control-label\" for=\"inputSuccess2\">Input with success</label>\n      <input type=\"text\" class=\"form-control\" id=\"inputSuccess2\" aria-describedby=\"inputSuccess2Status\">\n      <span class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\n      <span id=\"inputSuccess2Status\" class=\"sr-only\">(success)</span>\n    </div>\n    <div class=\"form-group has-success has-feedback\">\n      <label class=\"control-label\" for=\"inputSuccess2\">Input with success</label>\n      <input type=\"text\" class=\"form-control\" id=\"inputSuccess2\" aria-describedby=\"inputSuccess2Status\">\n      <span class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\n      <span id=\"inputSuccess2Status\" class=\"sr-only\">(success)</span>\n    </div>\n    <div class=\"form-group has-success has-feedback\">\n      <label class=\"control-label\" for=\"inputSuccess2\">Input with success</label>\n      <input type=\"text\" class=\"form-control\" id=\"inputSuccess2\" aria-describedby=\"inputSuccess2Status\">\n      <span class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\n      <span id=\"inputSuccess2Status\" class=\"sr-only\">(success)</span>\n    </div>\n\n\n    <button class=\"btn btn-success\">Dodaj</button>\n  </div>\n  <div class=\"jumbotron row\">\n    <h3>Dodawanie kategorii</h3>\n  </div>\n  <div class=\"jumbotron row\">\n    <h3>Dodawanie promocji</h3>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin',
            template: __webpack_require__("../../../../../src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin/admin.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/cart.item.list/cart.item.list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cart.item.list/cart.item.list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-cart-item *ngFor='let cartItem of cartItemList' [cartItem]='cartItem' (onDelete)='onDelete($event)'></app-cart-item>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/cart.item.list/cart.item.list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartItemListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CartItemListComponent = (function () {
    function CartItemListComponent() {
    }
    CartItemListComponent.prototype.ngOnInit = function () {
    };
    CartItemListComponent.prototype.onDelete = function (cartItem) {
        this.cartItemList.splice(this.cartItemList.indexOf(cartItem), 1);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], CartItemListComponent.prototype, "cartItemList", void 0);
    CartItemListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cart-item-list',
            template: __webpack_require__("../../../../../src/app/components/cart.item.list/cart.item.list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/cart.item.list/cart.item.list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CartItemListComponent);
    return CartItemListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/cart.item/cart.item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.item-desc {\r\n    background-color: rgb(238, 238, 238);\r\n    border-radius: 4px;\r\n    margin-bottom: 5px;\r\n    cursor: pointer;\r\n    overflow: hidden;\r\n    padding-bottom: 12px;\r\n}\r\n\r\n.item-desc:hover {\r\n    background-color: rgb(197, 193, 191);\r\n}\r\n\r\n.item-desc h3 {\r\n    display: block;\r\n    text-align: left;\r\n}\r\n\r\n.item-desc h4 {\r\n    display: block;\r\n    text-align: left;\r\n}\r\n\r\n.right-price h3{\r\n    text-align: right;\r\n}\r\n\r\n.right-price button{\r\n    float:right;\r\n    display: block;\r\n    width: 126px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cart.item/cart.item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='row'>\n    <div class='col-md-12'>\n        <div class='item-desc'>\n        <div class='col-md-9'>\n            <h3>{{cartItem.name}}</h3>\n            <h4>{{cartItem.desc}}</h4>\n        </div>\n        <div class=\"col-md-3 right-price\">\n            <h3>{{cartItem.price | number: '1.2-2' | plnCurrency}}</h3>\n            <button class=\"btn btn-danger\" (click)='delete($event)'>Usuń z koszyka</button>\n        </div>\n    </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/cart.item/cart.item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CartItemComponent = (function () {
    function CartItemComponent() {
        this.onDelete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    CartItemComponent.prototype.ngOnInit = function () {
    };
    CartItemComponent.prototype.delete = function (event) {
        this.onDelete.emit(this.cartItem);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], CartItemComponent.prototype, "cartItem", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], CartItemComponent.prototype, "onDelete", void 0);
    CartItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cart-item',
            template: __webpack_require__("../../../../../src/app/components/cart.item/cart.item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/cart.item/cart.item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CartItemComponent);
    return CartItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/cart/cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\r\n    width: 126px;\r\n}\r\n\r\n.order-comp {\r\n    float: right;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-cart-item-list [cartItemList]='cartItemList'></app-cart-item-list>\n  <div *ngIf='cartItemList.length > 0' class=\"order-comp\">\n    <div class=\"col-md-3\">\n      <button routerLink='/order' class=\"btn btn-success\">ZAMÓW</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cart_data_service__ = __webpack_require__("../../../../../src/app/services/cart.data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartComponent = (function () {
    function CartComponent(cartDataService) {
        this.cartDataService = cartDataService;
    }
    CartComponent.prototype.ngOnInit = function () {
        this.getCartItemList();
    };
    CartComponent.prototype.getCartItemList = function () {
        this.cartItemList = this.cartDataService.getCartItemList();
    };
    CartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cart',
            template: __webpack_require__("../../../../../src/app/components/cart/cart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_cart_data_service__["a" /* CartDataService */]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/category.list/category.list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/category.list/category.list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-category *ngFor='let category of categoryList' \n    [category]='category'\n    (onSelect)='onSelect($event)'>\n  </app-category>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/category.list/category.list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoryListComponent = (function () {
    function CategoryListComponent() {
        this.onSelectListView = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    CategoryListComponent.prototype.ngOnInit = function () {
    };
    CategoryListComponent.prototype.onSelect = function (categoryInfo) {
        this.onSelectListView.emit(categoryInfo);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], CategoryListComponent.prototype, "categoryList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], CategoryListComponent.prototype, "onSelectListView", void 0);
    CategoryListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-category-list',
            template: __webpack_require__("../../../../../src/app/components/category.list/category.list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/category.list/category.list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CategoryListComponent);
    return CategoryListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/category/category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\r\n    width: 100%;\r\n    height: 40px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.btn:hover {\r\n    background-color: rgb(197, 193, 191);\r\n}\r\n\r\n.btn-primary:hover {\r\n    background-color: #286090;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/category/category.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn\" (click)='select(!category.isSelected)'\n  [ngClass]='category.isSelected ? \"btn-primary\" : \"btn\"'>\n  {{category.name}}\n</button>"

/***/ }),

/***/ "../../../../../src/app/components/category/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_category__ = __webpack_require__("../../../../../src/app/model/category.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryComponent = (function () {
    function CategoryComponent() {
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    CategoryComponent.prototype.select = function (select) {
        this.category.isSelected = select;
        this.onSelect.emit(this.category);
    };
    CategoryComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__model_category__["a" /* Category */])
    ], CategoryComponent.prototype, "category", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], CategoryComponent.prototype, "onSelect", void 0);
    CategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-category',
            template: __webpack_require__("../../../../../src/app/components/category/category.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/category/category.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/item.list/item.list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom-pagin /deep/ .ngx-pagination {\r\n    padding: 8px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/item.list/item.list.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor='let item of itemList | searchFilter: searchString | categoryFilter: categorySelectedNames | paginate: {\r\n        itemsPerPage: 5,\r\n        currentPage: pageNumber }'>\r\n    <app-item [item]='item' (onAdd)='onAdd($event)'></app-item>\r\n</div>\r\n\r\n<div>\r\n    <pagination-controls *ngIf='itemList !== undefined' class='custom-pagin' (pageChange)='pageNumber=$event' previousLabel='' nextLabel=''>\r\n    </pagination-controls>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/item.list/item.list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cart_data_service__ = __webpack_require__("../../../../../src/app/services/cart.data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemListComponent = (function () {
    function ItemListComponent(cartService) {
        this.cartService = cartService;
        this.minValue = 0;
        this.maxValue = 0;
        this.pageNumber = 1;
    }
    ItemListComponent.prototype.ngOnInit = function () {
    };
    ItemListComponent.prototype.onAdd = function (item) {
        console.log(item);
        this.cartService.addItemToCart(item);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ItemListComponent.prototype, "itemList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], ItemListComponent.prototype, "categorySelectedNames", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ItemListComponent.prototype, "searchString", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ItemListComponent.prototype, "minValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ItemListComponent.prototype, "maxValue", void 0);
    ItemListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-item-list',
            template: __webpack_require__("../../../../../src/app/components/item.list/item.list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/item.list/item.list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_cart_data_service__["a" /* CartDataService */]])
    ], ItemListComponent);
    return ItemListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/item/item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.item-desc {\r\n    background-color: rgb(238, 238, 238);\r\n    border-radius: 4px;\r\n    margin-bottom: 5px;\r\n    cursor: pointer;\r\n    overflow: hidden;\r\n    padding-bottom: 12px;\r\n}\r\n\r\n.item-desc:hover {\r\n    background-color: rgb(197, 193, 191);\r\n}\r\n\r\n.item-desc h3 {\r\n    display: block;\r\n    text-align: left;\r\n}\r\n\r\n.item-desc h4 {\r\n    display: block;\r\n    text-align: left;\r\n}\r\n\r\n.item-desc h5 {\r\n    display: block;\r\n    text-align: left;\r\n}\r\n\r\n.right-price h3{\r\n    text-align: right;\r\n}\r\n\r\n.right-price button{\r\n    float:right;\r\n    display: block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/item/item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='row'>\r\n    <div class='col-md-12'>\r\n        <div class='item-desc'>\r\n        <div class='col-md-9'>\r\n            <h3>{{item.name}}</h3>\r\n            <h4>{{item.desc}}</h4>\r\n            <h5>{{item.category}}</h5>\r\n        </div>\r\n        <div class=\"col-md-3 right-price\">\r\n            <h3>{{item.price | number: '1.2-2' | plnCurrency}}</h3>\r\n            <button class=\"btn btn-primary\" (click)=addToCart()> Dodaj do koszyka</button>\r\n        </div>\r\n    </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/item/item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ItemComponent = (function () {
    function ItemComponent() {
        this.onAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ItemComponent.prototype.addToCart = function (event) {
        this.onAdd.emit(this.item);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "item", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "onAdd", void 0);
    ItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-item',
            template: __webpack_require__("../../../../../src/app/components/item/item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/item/item.component.css")]
        })
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/order/order.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".order-details {\r\n\r\n}\r\n\r\n.order-details input {\r\n    margin-bottom: 12px;\r\n    width: 300px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/order/order.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class='col-md-6 order-details'>\n    <h2>Adress zamieszkania</h2>\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Imie i nazwisko\" (input)='name=$event.target.value'>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Miejscowość\" (input)='city=$event.target.value'>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Ulica i numer domu\" (input)='street=$event.target.value'>\n    </div>\n  </div>\n</div>\n<div class=\"row send-order\">\n  <div class=\"col-md-12\">\n    <button class=\"btn btn-success\" (click)='order($event)'>Zatwierdź zamówienie</button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/order/order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cart_data_service__ = __webpack_require__("../../../../../src/app/services/cart.data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_order__ = __webpack_require__("../../../../../src/app/model/order.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderComponent = (function () {
    function OrderComponent(orderService, cartDataService) {
        this.orderService = orderService;
        this.cartDataService = cartDataService;
    }
    OrderComponent.prototype.ngOnInit = function () {
    };
    OrderComponent.prototype.order = function (event) {
        this.orderService.order(new __WEBPACK_IMPORTED_MODULE_3__model_order__["a" /* Order */](this.name, this.city, this.street, this.cartDataService.cartItemList)).subscribe(function (response) { return console.log(response); });
    };
    OrderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_order_service__["a" /* OrderService */]],
            selector: 'app-order',
            template: __webpack_require__("../../../../../src/app/components/order/order.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/order/order.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_order_service__["a" /* OrderService */], __WEBPACK_IMPORTED_MODULE_2__services_cart_data_service__["a" /* CartDataService */]])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/price/price.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../nouislider/distribute/nouislider.min.css"), "");

// module
exports.push([module.i, ".price-input-max {\r\n    padding-left: 8px;\r\n}\r\n\r\n.price-input-min {\r\n    padding-right: 8px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/price/price.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6 price-input-min\">\n        <div class=\"input-group\">\n            <span class=\"input-group-addon\">MIN</span>\n            <input type=\"text\" class=\"form-control\" (keyup.enter)=\"minValue($event)\">\n        </div>\n    </div>\n    <div class=\"col-md-6 price-input-max\">\n        <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" (keyup.enter)=\"maxValue($event)\">\n            <span class=\"input-group-addon\">MAX</span>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/price/price.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PriceComponent = (function () {
    function PriceComponent() {
        this.onMinValue = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onMaxValue = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    PriceComponent.prototype.ngOnInit = function () {
    };
    PriceComponent.prototype.ngOnChanges = function () {
    };
    PriceComponent.prototype.minValue = function (event) {
        this.onMinValue.emit(event.target.value);
    };
    PriceComponent.prototype.maxValue = function (event) {
        this.onMaxValue.emit(event.target.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], PriceComponent.prototype, "onMinValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], PriceComponent.prototype, "onMaxValue", void 0);
    PriceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-price',
            template: __webpack_require__("../../../../../src/app/components/price/price.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/price/price.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PriceComponent);
    return PriceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input-group {\r\n    margin-bottom: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group\">\n  <input #searchID type=\"text\" class=\"form-control\" placeholder=\"Szukaj\" [value]=\"searchString\" (keyup.enter)=\"search(searchID.value)\">\n  <div class=\"input-group-btn\">\n      <button class=\"btn btn-default\" type=\"submit\" (click)=\"search(searchID.value)\">\n        <i class=\"glyphicon glyphicon-search\"></i>\n      </button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = (function () {
    function SearchComponent() {
        this.onSearch = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.search = function (event) {
        this.onSearch.emit(event);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "onSearch", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SearchComponent.prototype, "searchString", void 0);
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("../../../../../src/app/components/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/shop/shop.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\r\n    width: 100%;\r\n    height: 40px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.btn:hover {\r\n    background-color: rgb(197, 193, 191);\r\n}\r\n\r\n.btn-primary:hover {\r\n    background-color: #286090;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shop/shop.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n        <button class=\"btn\" (click)='clearFilter()'>Wyczyść filtr</button>\r\n        <app-search [searchString]='searchString' (onSearch)='onSearch($event)'></app-search>\r\n        <app-category-list \r\n            [categoryList]='categoryList'\r\n            (onSelectListView)='onSelectListView($event)'>\r\n        </app-category-list>\r\n        <app-price (onMaxValue)='onMaxValue($event)' (onMinValue)='onMinValue($event)'></app-price>\r\n    </div>\r\n    <div class=\"col-md-9\" align=\"center\">\r\n        <app-item-list [itemList]='itemList' \r\n            [categorySelectedNames]='categorySelectedNames'\r\n            [searchString]='searchString'\r\n            [minValue]='minValue'\r\n            [maxValue]='maxValue'>\r\n        </app-item-list>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/shop/shop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShopComponent = (function () {
    function ShopComponent(dataService) {
        this.dataService = dataService;
        this.itemList = [];
        this.categorySelectedNames = [];
        this.searchString = '';
    }
    ShopComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getItemListLocal()
            .subscribe(function (items) { return _this.itemList = items; }, function (err) {
            console.log(err);
        });
        this.dataService.getCategoryListOb()
            .subscribe(function (category) { return console.log(category); }, function (err) {
            console.log(err);
        });
        this.dataService.getCategoryListOb()
            .subscribe(function (categories) { return _this.categoryList = categories; });
    };
    ShopComponent.prototype.onSelectListView = function (category) {
        if (category.isSelected) {
            this.categorySelectedNames.push(category.name);
        }
        else {
            var index = this.categorySelectedNames.indexOf(category.name);
            console.log(index);
            if (index > -1) {
                this.categorySelectedNames.splice(index, 1);
            }
        }
        console.log(this.categorySelectedNames);
    };
    ShopComponent.prototype.clearFilter = function () {
        this.searchString = '';
        this.categorySelectedNames = [];
        for (var _i = 0, _a = this.categoryList; _i < _a.length; _i++) {
            var category = _a[_i];
            category.isSelected = false;
        }
    };
    ShopComponent.prototype.onSearch = function (searchString) {
        this.searchString = searchString;
    };
    ShopComponent.prototype.onMinValue = function (minValue) {
        this.minValue = minValue;
        console.log(minValue);
    };
    ShopComponent.prototype.onMaxValue = function (maxValue) {
        this.maxValue = maxValue;
        console.log(maxValue);
    };
    ShopComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]
            ],
            selector: 'app-shop',
            template: __webpack_require__("../../../../../src/app/components/shop/shop.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shop/shop.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], ShopComponent);
    return ShopComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user.login/user.login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-box {\r\n width: 300px;\r\n}\r\n\r\n.row-custom {\r\n    margin-top: 150px;\r\n}\r\n\r\n.spinner-custom {\r\n    margin-top: 12px;\r\n    font-size: 24px;\r\n}\r\n\r\n.sign-custom {\r\n    margin-left: 6px;\r\n}\r\n\r\n.form-login-custom {\r\n    background-color: #EDEDED;\r\n    padding-top: 10px;\r\n    padding-bottom: 20px;\r\n    padding-left: 30px;\r\n    padding-right: 30px;\r\n    border-radius: 15px;\r\n    border-color:#d2d2d2;\r\n    border-width: 5px;\r\n    box-shadow:0 1px 0 #cfcfcf;\r\n}\r\n\r\n\r\n.error-message {\r\n    color: red;\r\n}\r\n\r\n.h4-custom { \r\n border:0 solid #fff; \r\n border-bottom-width:1px;\r\n padding-bottom:10px;\r\n text-align: center;\r\n}\r\n\r\n.form-control-custom {\r\n    margin-top: 10px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.input-custom {    \r\n    margin-top: 10px;\r\n}\r\n\r\n\r\n.login-button {\r\n    width: 110px;\r\n}\r\n\r\n.wrapper-custom {\r\n    text-align: center;\r\n    margin-top: 15px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user.login/user.login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row row-custom\" align=\"center\">\n      <div class=\"login-box\">\n          <div class=\"form-login-custom\">\n          <h4 class='h4-custom'>Witamy z powrotem!</h4>\n          <input #username type=\"text\" id=\"userName\" class=\"form-control form-control-custom input-sm chat-input\" placeholder=\"username\" />\n\n          <input #password type=\"text\" id=\"userPassword\" class=\"form-control form-control-custom input-sm chat-input\" placeholder=\"password\" />\n\n          <div class=\"wrapper-custom\">\n          <span class=\"group-btn\">     \n              <a (click)='login(username.value, password.value)' class=\"login-button btn btn-primary btn-md\">\n                Zaloguj<i class=\"fa fa-sign-in sign-custom\"></i>\n              </a>\n          </span>\n          </div>\n\n          <h5 class=\"error-message\" *ngIf='isError'>{{errMessage}}</h5>\n          <i *ngIf='isLoading' class=\"fa fa-spinner fa-spin spinner-custom\" style=\"font-size:24px\"></i>\n          </div>\n      \n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user.login/user.login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authenticate_service__ = __webpack_require__("../../../../../src/app/services/authenticate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserLoginComponent = (function () {
    function UserLoginComponent(route, authenticateService, router) {
        this.route = route;
        this.authenticateService = authenticateService;
        this.router = router;
        this.isError = false;
        this.isLoading = false;
        console.log('UserLogin constructor');
    }
    UserLoginComponent.prototype.ngOnInit = function () {
        console.log(this.route.snapshot.paramMap);
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    UserLoginComponent.prototype.login = function (username, password) {
        var _this = this;
        this.isLoading = true;
        this.authenticateService.login(username, password).subscribe(function (data) {
            if (!data.json().error) {
                localStorage.setItem('loggedUser', JSON.stringify(data.json().user));
                _this.authenticateService.isLogged = true;
                _this.router.navigate([_this.returnUrl]);
            }
            else {
                _this.errMessage = data.json().message;
                _this.isError = true;
            }
            _this.isLoading = false;
        }, function (err) {
            _this.errMessage = 'Brak połączenia z serwerem';
            _this.isError = true;
            _this.isLoading = false;
        });
    };
    UserLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-login',
            template: __webpack_require__("../../../../../src/app/components/user.login/user.login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user.login/user.login.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_authenticate_service__["a" /* AuthenticateService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], UserLoginComponent);
    return UserLoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/model/category.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Category; });
var Category = (function () {
    function Category(name, isSelected) {
        if (isSelected === void 0) { isSelected = false; }
        this.name = name;
        this.isSelected = isSelected;
    }
    return Category;
}());



/***/ }),

/***/ "../../../../../src/app/model/item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
var Item = (function () {
    function Item(name, desc, category, price, count) {
        this.name = name;
        this.desc = desc;
        this.category = category;
        this.price = price;
        this.count = count;
    }
    return Item;
}());



/***/ }),

/***/ "../../../../../src/app/model/order.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Order; });
var Order = (function () {
    function Order(name, city, street, items) {
        this.name = name;
        this.city = city;
        this.street = street;
        this.items = items;
    }
    Order.prototype.toJson = function () {
        return { 'name': this.name, 'city': this.city, 'street': this.street, 'items': this.items };
    };
    return Order;
}());



/***/ }),

/***/ "../../../../../src/app/model/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(username) {
        this.username = username;
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/category.filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CategoryFilterPipe = (function () {
    function CategoryFilterPipe() {
    }
    CategoryFilterPipe.prototype.transform = function (value, category) {
        if (category.length === 0) {
            return value;
        }
        return value.filter(function (item) { return category.indexOf(item.category) !== -1; });
    };
    CategoryFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'categoryFilter',
            pure: false
        })
    ], CategoryFilterPipe);
    return CategoryFilterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/pln.currency.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlnCurrencyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PlnCurrencyPipe = (function () {
    function PlnCurrencyPipe() {
    }
    PlnCurrencyPipe.prototype.transform = function (value, args) {
        return value + ' zł';
    };
    PlnCurrencyPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'plnCurrency'
        })
    ], PlnCurrencyPipe);
    return PlnCurrencyPipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/price.filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriceFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PriceFilterPipe = (function () {
    function PriceFilterPipe() {
    }
    PriceFilterPipe.prototype.transform = function (value, args) {
        console.log(value);
        console.log(args);
        if (args.min !== undefined || args.max !== undefined) {
        }
        if (args.min !== undefined) {
            return value.filter(function (item) { return item.price > args.min; });
        }
        if (args.max !== undefined) {
            return value.filter(function (item) { return item.price > args.max; });
        }
    };
    PriceFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'priceFilter'
        })
    ], PriceFilterPipe);
    return PriceFilterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/search.filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchFilterPipe = (function () {
    function SearchFilterPipe() {
    }
    SearchFilterPipe.prototype.transform = function (value, searchString) {
        if (searchString === undefined || searchString.length === 0) {
            return value;
        }
        else {
            return value.filter(function (item) { return item.desc.toLowerCase().includes(searchString.toLowerCase()); });
        }
    };
    SearchFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'searchFilter',
            pure: false
        })
    ], SearchFilterPipe);
    return SearchFilterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/services/authenticate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_user__ = __webpack_require__("../../../../../src/app/model/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticateService = (function () {
    function AuthenticateService(http) {
        this.http = http;
        this.isLogged = false;
        if (localStorage.getItem('loggedUser') !== null) {
            this.loggedUser = new __WEBPACK_IMPORTED_MODULE_2__model_user__["a" /* User */](JSON.parse(localStorage.getItem('loggedUser')).username);
            this.isLogged = true;
        }
    }
    AuthenticateService.prototype.login = function (username, password) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:8080/api/authenticate', JSON.stringify({ username: username, password: password }), { headers: header });
        /*.map((response: Response) => {
          console.log(response);
          if (response.json().error) {
            localStorage.setItem('loggedUser', JSON.stringify(response.json().user));
          }
        });
        */
    };
    AuthenticateService.prototype.logout = function (username) {
        localStorage.removeItem('loggedUser');
        this.isLogged = false;
        this.loggedUser = null;
    };
    AuthenticateService.prototype.ngOnDestroy = function () {
        if (this.isLogged) {
            localStorage.setItem('loggedUser', JSON.stringify(this.loggedUser.username));
        }
    };
    AuthenticateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthenticateService);
    return AuthenticateService;
}());



/***/ }),

/***/ "../../../../../src/app/services/cart.data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_data_item_data_1__ = __webpack_require__("../../../../../src/assets/data/item.data.1.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_item__ = __webpack_require__("../../../../../src/app/model/item.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartDataService = (function () {
    function CartDataService() {
        this.cartItemList = [];
        for (var _i = 0, items_1 = __WEBPACK_IMPORTED_MODULE_1__assets_data_item_data_1__["a" /* items */]; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this.cartItemList.push(new __WEBPACK_IMPORTED_MODULE_2__model_item__["a" /* Item */](item.name, item.desc, item.category, item.price, item.count));
        }
        console.log('cart data service constructor');
    }
    CartDataService.prototype.addItemToCart = function (item) {
        this.cartItemList.push(item);
    };
    CartDataService.prototype.getCartItemList = function () {
        return this.cartItemList;
    };
    CartDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CartDataService);
    return CartDataService;
}());



/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_data_item_data__ = __webpack_require__("../../../../../src/assets/data/item.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_category__ = __webpack_require__("../../../../../src/app/model/category.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DataService = (function () {
    function DataService(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
        this.itemList = __WEBPACK_IMPORTED_MODULE_1__assets_data_item_data__["a" /* items */];
        this.itemsUrl = '/api/products';
        this.categoriesUrl = '/api/categories';
    }
    DataService.prototype.getItemListOb = function () {
        return this.httpClient.get(this.itemsUrl);
    };
    DataService.prototype.getItemListLocal = function () {
        return this.httpClient.get(this.itemsUrl);
    };
    DataService.prototype.getItemList = function () {
        return __WEBPACK_IMPORTED_MODULE_1__assets_data_item_data__["a" /* items */];
    };
    DataService.prototype.getCategoryListOb = function () {
        return this.http.get(this.categoriesUrl)
            .map(function (res) { return res.json()
            .map(function (category) { return new __WEBPACK_IMPORTED_MODULE_3__model_category__["a" /* Category */](category.name); }); });
    };
    DataService.prototype.getCategoryList = function () {
        return ['Kategoria 1', 'Kategoria 2', 'Kategoria 3', 'Kategoria 4'];
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/services/order.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderService = (function () {
    function OrderService(http) {
        this.http = http;
        this.categoriesUrl = 'http://localhost:2403/orders';
    }
    OrderService.prototype.order = function (order) {
        console.log(order.toJson());
        return this.http.post(this.categoriesUrl, order.toJson());
    };
    OrderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "../../../../../src/assets/data/item.data.1.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return items; });
var items = [{
        'id': 1,
        'name': 'Wigry 1',
        'desc': 'Super rower',
        'count': 5,
        'image': '/assets/images/rower1.jpg',
        'price': 399,
        'category': 'Kategoria 1'
    }, {
        'id': 2,
        'name': 'Wigry 1',
        'desc': 'Super rower',
        'count': 5,
        'image': '/assets/images/rower1.jpg',
        'price': 399,
        'category': 'Kategoria 1'
    }, {
        'id': 3,
        'name': 'Wigry 1',
        'desc': 'Super rower',
        'count': 5,
        'image': '/assets/images/rower1.jpg',
        'price': 399,
        'category': 'Kategoria 1'
    }];


/***/ }),

/***/ "../../../../../src/assets/data/item.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return items; });
var items = [{
        'id': 1,
        'name': 'Wigry 1',
        'desc': 'Super rower',
        'count': 5,
        'image': '/assets/images/rower1.jpg',
        'price': 399,
        'category': 'Kategoria 1'
    }, {
        'id': 2,
        'name': 'Wigry 1',
        'desc': 'Super rower',
        'count': 5,
        'image': '/assets/images/rower1.jpg',
        'price': 399,
        'category': 'Kategoria 1'
    }, {
        'id': 3,
        'name': 'Wigry 1',
        'desc': 'Super rower',
        'count': 5,
        'image': '/assets/images/rower1.jpg',
        'price': 399,
        'category': 'Kategoria 1'
    }, {
        'id': 4,
        'name': 'Wigry 1',
        'desc': 'Super rower',
        'count': 5,
        'image': '/assets/images/rower1.jpg',
        'price': 399,
        'category': 'Kategoria 1'
    }, {
        'id': 5,
        'name': 'Wigry 1',
        'desc': 'Super rower',
        'count': 5,
        'image': '/assets/images/rower1.jpg',
        'price': 399,
        'category': 'Kategoria 1'
    }, {
        'id': 5,
        'name': 'Wigry 1',
        'desc': 'Super rower',
        'count': 5,
        'image': '/assets/images/rower1.jpg',
        'price': 399,
        'category': 'Kategoria 1'
    }, {
        'id': 5,
        'name': 'Wigry 1',
        'desc': 'Super rower',
        'count': 5,
        'image': '/assets/images/rower1.jpg',
        'price': 399,
        'category': 'Kategoria 2'
    }, {
        'id': 5,
        'name': 'Wigry 1',
        'desc': 'Super rower',
        'count': 5,
        'image': '/assets/images/rower1.jpg',
        'price': 399,
        'category': 'Kategoria 2'
    }, {
        'id': 5,
        'name': 'Wigry 1',
        'desc': 'Super rower',
        'count': 5,
        'image': '/assets/images/rower1.jpg',
        'price': 399,
        'category': 'Kategoria 2'
    }, {
        'id': 5,
        'name': 'Wigry 1',
        'desc': 'Super rower',
        'count': 5,
        'image': '/assets/images/rower1.jpg',
        'price': 399,
        'category': 'Kategoria 2'
    }, {
        'id': 5,
        'name': 'Wigry 1',
        'desc': 'Super rower',
        'count': 5,
        'image': '/assets/images/rower1.jpg',
        'price': 399,
        'category': 'Kategoria 2'
    }];


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map