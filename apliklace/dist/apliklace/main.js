(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\bezou\Disk Google\Educanet\2020-2021\Programování\angulaar\apliklace\src\main.ts */"zUnb");


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 3, vars: 0, consts: [["src", "assets/Untitled.png", "alt", "", "width", "234", "height", "127"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "LgBW":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class BlogComponent {
    constructor() {
    }
    ngOnInit() {
    }
    postBlog(header, body, numbr) {
        //console.log("postblog num is " + numbr)
        if (numbr < 0 || numbr == null) {
            let outputPlace = document.getElementById("BlogPostY");
            let obal = document.createElement("div");
            let headrelem = document.createElement("h3");
            headrelem.innerText = header;
            obal.appendChild(headrelem);
            let bodyelem = document.createElement("p");
            bodyelem.innerText = body;
            obal.appendChild(bodyelem);
            outputPlace.appendChild(obal);
        }
        else {
            if (header == "" && body == "") {
                document.getElementById("BlogPostY").removeChild(numbr);
            }
            else {
                let outputPlace = document.getElementById("BlogPostY").childNodes[numbr];
                outputPlace.childNodes[0].textContent = header;
                outputPlace.childNodes[1].textContent = body;
            }
        }
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(); };
BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 20, vars: 0, consts: [[3, "ngSubmit"], ["blogform", ""], ["placeholder", "Blog Tittle"], ["hed", ""], ["placeholder", "Blog Body"], ["bod", ""], ["type", "number"], ["whichone", ""], ["type", "submit"], ["id", "BlogPostY"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function BlogComponent_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); ctx.postBlog(_r1.value, _r2.value, _r3.value - 1); return _r0.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Do you want to edit?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 9);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: [".flexcol[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFDRiIsImZpbGUiOiJibG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXhjb2wge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog',
                templateUrl: './blog.component.html',
                styleUrls: ['./blog.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "MYvN":
/*!****************************************************!*\
  !*** ./src/app/stranadvje/stranadvje.component.ts ***!
  \****************************************************/
/*! exports provided: StranadvjeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StranadvjeComponent", function() { return StranadvjeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class StranadvjeComponent {
    constructor() { }
    ngOnInit() {
    }
}
StranadvjeComponent.ɵfac = function StranadvjeComponent_Factory(t) { return new (t || StranadvjeComponent)(); };
StranadvjeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StranadvjeComponent, selectors: [["app-stranadvje"]], decls: 2, vars: 0, template: function StranadvjeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "stranadvje works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHJhbmFkdmplLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StranadvjeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-stranadvje',
                templateUrl: './stranadvje.component.html',
                styleUrls: ['./stranadvje.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





function AppComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "About us");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Blog");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Excrept");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Lites out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Checked form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor() {
        this.title = 'apliklace';
        this.kvery = "";
    }
    vypisform() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 10, vars: 8, consts: [[2, "display", "flex", "flex-direction", "row"], ["type", "text", "placeholder", "serch", 3, "ngModel", "ngModelChange"], ["style", "padding: 5px;", "routerLink", "home", 4, "ngIf"], ["style", "padding: 5px;", "routerLink", "stranadvje", 4, "ngIf"], ["style", "padding: 5px;", "routerLink", "aboutus", 4, "ngIf"], ["style", "padding: 5px;", "routerLink", "blog", 4, "ngIf"], ["style", "padding: 5px;", "routerLink", "excrept", 4, "ngIf"], ["style", "padding: 5px;", "routerLink", "litesout", 4, "ngIf"], ["style", "padding: 5px;", "routerLink", "checkedform", 4, "ngIf"], ["routerLink", "home", 2, "padding", "5px"], ["routerLink", "stranadvje", 2, "padding", "5px"], ["routerLink", "aboutus", 2, "padding", "5px"], ["routerLink", "blog", 2, "padding", "5px"], ["routerLink", "excrept", 2, "padding", "5px"], ["routerLink", "litesout", 2, "padding", "5px"], ["routerLink", "checkedform", 2, "padding", "5px"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_1_listener($event) { return ctx.kvery = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_a_2_Template, 2, 0, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_a_3_Template, 2, 0, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_a_4_Template, 2, 0, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_a_5_Template, 2, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_a_6_Template, 2, 0, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_a_7_Template, 2, 0, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_a_8_Template, 2, 0, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.kvery);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.kvery.includes("home") || ctx.kvery === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.kvery.includes("contact") || ctx.kvery === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.kvery.includes("about us") || ctx.kvery === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.kvery.includes("blog") || ctx.kvery === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.kvery.includes("excrept") || ctx.kvery === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.kvery.includes("litesout") || ctx.kvery === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.kvery.includes("checkedform") || ctx.kvery === "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "TixR":
/*!************************************************!*\
  !*** ./src/app/homecomp/homecomp.component.ts ***!
  \************************************************/
/*! exports provided: HomecompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomecompComponent", function() { return HomecompComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home/home.component */ "9vUh");



class HomecompComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomecompComponent.ɵfac = function HomecompComponent_Factory(t) { return new (t || HomecompComponent)(); };
HomecompComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomecompComponent, selectors: [["app-homecomp"]], decls: 1, vars: 0, template: function HomecompComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home");
    } }, directives: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lY29tcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomecompComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homecomp',
                templateUrl: './homecomp.component.html',
                styleUrls: ['./homecomp.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "X2mP":
/*!********************************************************!*\
  !*** ./src/app/checkedforms/checkedforms.component.ts ***!
  \********************************************************/
/*! exports provided: CheckedformsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckedformsComponent", function() { return CheckedformsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function CheckedformsComponent_label_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0147eco sem dej.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckedformsComponent_label_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" you need to be at least ", _r4.errors.requiredLength, " chars tall ");
} }
function CheckedformsComponent_label_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" you need to be at most ", _r4.errors.requiredLength, " chars tall ");
} }
function CheckedformsComponent_button_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "YEET!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckedformsComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const u_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](u_r7);
} }
class CheckedformsComponent {
    constructor() { }
    addUnameToUnames() {
        this.usernames[this.usernames.length] = this.username;
        this.username = null;
    }
    ngOnInit() {
    }
}
CheckedformsComponent.ɵfac = function CheckedformsComponent_Factory(t) { return new (t || CheckedformsComponent)(); };
CheckedformsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckedformsComponent, selectors: [["app-checkedforms"]], decls: 33, vars: 10, consts: [[3, "ngSubmit"], ["form", "ngForm"], ["for", "uname", "style", "background-color: deeppink", 4, "ngIf"], ["type", "text", "placeholder", "username", "required", "", "minlength", "1", "maxlength", "32", "id", "uname", "name", "uname", 3, "ngModel", "ngModelChange"], ["UinEl", "ngModel"], ["type", "submit", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["for", "uname", 2, "background-color", "deeppink"], ["type", "submit"]], template: function CheckedformsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "this broken");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " uinel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " uinel.errors ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " uinel.errors.req ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " uinel.errors.min ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " uinel.touched ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Register for free identity theft");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ng-form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CheckedformsComponent_Template_ng_form_ngSubmit_22_listener() { return ctx.addUnameToUnames(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CheckedformsComponent_label_24_Template, 2, 0, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CheckedformsComponent_label_25_Template, 2, 1, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CheckedformsComponent_label_26_Template, 2, 1, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckedformsComponent_Template_input_ngModelChange_27_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CheckedformsComponent_button_29_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Registered bois");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, CheckedformsComponent_div_32_Template, 3, 1, "div", 6);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r4.errors.toString());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r4.errors.required.toString());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r4.errors.minlength.toString());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r4.touched.toString());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.errors.required && _r4.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.errors.minlength && _r4.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r4.errors.maxlength == null ? null : _r4.errors.maxlength.length) > 0 && _r4.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.usernames);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja2VkZm9ybXMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckedformsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-checkedforms',
                templateUrl: './checkedforms.component.html',
                styleUrls: ['./checkedforms.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _stranadvje_stranadvje_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stranadvje/stranadvje.component */ "MYvN");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "pn0X");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _aboutcomp_aboutcomp_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./aboutcomp/aboutcomp.component */ "notO");
/* harmony import */ var _homecomp_homecomp_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./homecomp/homecomp.component */ "TixR");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blog/blog.component */ "LgBW");
/* harmony import */ var _excrept_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./excrept.pipe */ "s0P2");
/* harmony import */ var _litesout_litesout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./litesout/litesout.component */ "yNZ8");
/* harmony import */ var _checkedforms_checkedforms_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./checkedforms/checkedforms.component */ "X2mP");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"],
        _stranadvje_stranadvje_component__WEBPACK_IMPORTED_MODULE_6__["StranadvjeComponent"],
        _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_7__["AboutusComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        _aboutcomp_aboutcomp_component__WEBPACK_IMPORTED_MODULE_9__["AboutcompComponent"],
        _homecomp_homecomp_component__WEBPACK_IMPORTED_MODULE_10__["HomecompComponent"],
        _blog_blog_component__WEBPACK_IMPORTED_MODULE_11__["BlogComponent"],
        _excrept_pipe__WEBPACK_IMPORTED_MODULE_12__["ExcreptPipe"],
        _litesout_litesout_component__WEBPACK_IMPORTED_MODULE_13__["LitesoutComponent"],
        _checkedforms_checkedforms_component__WEBPACK_IMPORTED_MODULE_14__["CheckedformsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"],
                    _stranadvje_stranadvje_component__WEBPACK_IMPORTED_MODULE_6__["StranadvjeComponent"],
                    _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_7__["AboutusComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                    _aboutcomp_aboutcomp_component__WEBPACK_IMPORTED_MODULE_9__["AboutcompComponent"],
                    _homecomp_homecomp_component__WEBPACK_IMPORTED_MODULE_10__["HomecompComponent"],
                    _blog_blog_component__WEBPACK_IMPORTED_MODULE_11__["BlogComponent"],
                    _excrept_pipe__WEBPACK_IMPORTED_MODULE_12__["ExcreptPipe"],
                    _litesout_litesout_component__WEBPACK_IMPORTED_MODULE_13__["LitesoutComponent"],
                    _checkedforms_checkedforms_component__WEBPACK_IMPORTED_MODULE_14__["CheckedformsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bzTf":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
    vypisvjec() {
        console.log(this.hodnotaText);
        console.log(this.hodnotaNumber);
        console.log(this.hodnotaPass);
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 13, vars: 0, consts: [[3, "ngSubmit"], ["type", "text", 3, "keyup"], ["txt", ""], ["type", "number", 3, "keyup"], ["num", ""], ["type", "password", 3, "keyup"], ["pss", ""], ["type", "submit"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_1_listener() { return ctx.vypisvjec(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ContactComponent_Template_input_keyup_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.hodnotaText = _r0.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ContactComponent_Template_input_keyup_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx.hodnotaNumber = _r1.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ContactComponent_Template_input_keyup_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return ctx.hodnotaPass = _r2.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "notO":
/*!**************************************************!*\
  !*** ./src/app/aboutcomp/aboutcomp.component.ts ***!
  \**************************************************/
/*! exports provided: AboutcompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutcompComponent", function() { return AboutcompComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AboutcompComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutcompComponent.ɵfac = function AboutcompComponent_Factory(t) { return new (t || AboutcompComponent)(); };
AboutcompComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutcompComponent, selectors: [["app-aboutcomp"]], decls: 2, vars: 0, template: function AboutcompComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas in nulla eget dignissim. Etiam at turpis urna. Nullam imperdiet orci sed ex ultricies, ut sagittis massa dictum. Nunc semper odio ut quam molestie, sit amet viverra orci facilisis. Nunc et lectus laoreet nibh tristique euismod. Suspendisse potenti. Suspendisse et fringilla metus, vel ornare nunc. Maecenas sed libero nunc. Sed a hendrerit nunc. Vestibulum quis massa felis. Nulla et ex iaculis, condimentum mi sit amet, suscipit tellus. Proin a mi a velit luctus convallis. Duis interdum scelerisque posuere.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dGNvbXAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutcompComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aboutcomp',
                templateUrl: './aboutcomp.component.html',
                styleUrls: ['./aboutcomp.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "pn0X":
/*!**********************************************!*\
  !*** ./src/app/aboutus/aboutus.component.ts ***!
  \**********************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _aboutcomp_aboutcomp_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../aboutcomp/aboutcomp.component */ "notO");



class AboutusComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutusComponent.ɵfac = function AboutusComponent_Factory(t) { return new (t || AboutusComponent)(); };
AboutusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutusComponent, selectors: [["app-aboutus"]], decls: 1, vars: 0, template: function AboutusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-aboutcomp");
    } }, directives: [_aboutcomp_aboutcomp_component__WEBPACK_IMPORTED_MODULE_1__["AboutcompComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dHVzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aboutus',
                templateUrl: './aboutus.component.html',
                styleUrls: ['./aboutus.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "s0P2":
/*!*********************************!*\
  !*** ./src/app/excrept.pipe.ts ***!
  \*********************************/
/*! exports provided: ExcreptPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcreptPipe", function() { return ExcreptPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ExcreptPipe {
    transform(value, times = 5, ending = "...") {
        return value.substring(0, times) + ending;
    }
}
ExcreptPipe.ɵfac = function ExcreptPipe_Factory(t) { return new (t || ExcreptPipe)(); };
ExcreptPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "excrept", type: ExcreptPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExcreptPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'excrept'
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _aboutcomp_aboutcomp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutcomp/aboutcomp.component */ "notO");
/* harmony import */ var _homecomp_homecomp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homecomp/homecomp.component */ "TixR");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blog/blog.component */ "LgBW");
/* harmony import */ var _litesout_litesout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./litesout/litesout.component */ "yNZ8");
/* harmony import */ var _checkedforms_checkedforms_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkedforms/checkedforms.component */ "X2mP");










const routes = [
    { path: 'stranadvje', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"] },
    { path: 'aboutus', component: _aboutcomp_aboutcomp_component__WEBPACK_IMPORTED_MODULE_3__["AboutcompComponent"] },
    { path: 'home', component: _homecomp_homecomp_component__WEBPACK_IMPORTED_MODULE_4__["HomecompComponent"] },
    { path: 'blog', component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_5__["BlogComponent"] },
    { path: 'litesout', component: _litesout_litesout_component__WEBPACK_IMPORTED_MODULE_6__["LitesoutComponent"] },
    { path: "checkedform", component: _checkedforms_checkedforms_component__WEBPACK_IMPORTED_MODULE_7__["CheckedformsComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "yNZ8":
/*!************************************************!*\
  !*** ./src/app/litesout/litesout.component.ts ***!
  \************************************************/
/*! exports provided: LitesoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LitesoutComponent", function() { return LitesoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function LitesoutComponent_div_6_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LitesoutComponent_div_6_div_1_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const y_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const x_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.getclickedon(x_r5, y_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LitesoutComponent_div_6_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LitesoutComponent_div_6_div_1_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const y_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const x_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.getclickedon(x_r5, y_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LitesoutComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LitesoutComponent_div_6_div_1_div_1_Template, 1, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LitesoutComponent_div_6_div_1_div_2_Template, 1, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const atoms_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", atoms_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !atoms_r7);
} }
function LitesoutComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LitesoutComponent_div_6_div_1_Template, 3, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slides_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", slides_r4);
} }
function LitesoutComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u200B gg.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LitesoutComponent_div_7_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.regenerate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "torture me more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("nice. took ", ctx_r1.clicks, " clicks");
} }
function LitesoutComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("taking you ", ctx_r2.clicks, " clicks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("your hiscore is ", ctx_r2.hiscore, "");
} }
function LitesoutComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LitesoutComponent_p_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.regenerate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "F5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LitesoutComponent {
    constructor() {
        this.regenerate();
    }
    ngOnInit() {
    }
    regenerate() {
        let cookies = document.cookie;
        if (cookies.includes("lightsouthighscore = ")) {
            let extractedcookie = cookies.split("lightsouthighscore = ");
            this.hiscore = parseInt(extractedcookie[0]);
        }
        else
            this.hiscore = 0;
        this.clicks = 0;
        this.endscreenshown = false;
        console.debug(this.size);
        this.size = parseInt(window.prompt("how many difficults do you want?", "10"));
        while (isNaN(this.size)) {
            this.size = parseInt(window.prompt("HEY! I ASKED YOU A QUESTION!", "10"));
        }
        console.debug(this.size);
        this.mcdonaldsplayspace = new Array(this.size);
        for (let i = 0; i < this.size; i++) {
            this.mcdonaldsplayspace[i] = new Array(this.size);
            for (let j = 0; j < this.size; j++) {
                this.mcdonaldsplayspace[i][j] = Math.random() < 0.5;
            }
        }
        console.debug(this.mcdonaldsplayspace);
    }
    getclickedon(x, y) {
        console.debug(this.size);
        console.debug("x/y = " + x + "/" + y);
        this.clicks++;
        try {
            this.mcdonaldsplayspace[x][y] = !this.mcdonaldsplayspace[x][y];
        }
        catch (e) {
            console.debug("cell oob");
        }
        try {
            if (x + 1 < this.size)
                this.mcdonaldsplayspace[x + 1][y] = !this.mcdonaldsplayspace[x + 1][y];
        }
        catch (e) {
            console.debug("cell x+1 oob");
        }
        try {
            if (y + 1 < this.size)
                this.mcdonaldsplayspace[x][y + 1] = !this.mcdonaldsplayspace[x][y + 1];
        }
        catch (e) {
            console.debug("cell y+1 oob");
        }
        try {
            this.mcdonaldsplayspace[x - 1][y] = !this.mcdonaldsplayspace[x - 1][y];
        }
        catch (e) {
            console.debug("cell x-1 oob");
        }
        try {
            this.mcdonaldsplayspace[x][y - 1] = !this.mcdonaldsplayspace[x][y - 1];
        }
        catch (e) {
            console.debug("cell y-1 oob");
        }
        this.didiwin(); //troubleshootění. plus to vypadá cool jakože to chvíli verifikuje výsledky
    }
    didiwin() {
        console.debug(this.size);
        let confirmedfail = false;
        for (let i = 0; i < this.size; i++) { //když použiju enhanced for tak hlásí že this.playspace is not iterable. vypadá to složitě, takže to botchnu
            if (confirmedfail)
                break;
            for (let j = 0; j < this.size; j++) {
                console.log("mcd playspace i" + i + " j" + j + " " + this.mcdonaldsplayspace[i][j]);
                if (this.mcdonaldsplayspace[i][j]) {
                    confirmedfail = true;
                    break;
                }
            }
        }
        console.debug("verified value = " + confirmedfail);
        if (!confirmedfail) {
            this.endscreenshown = true;
            if (this.hiscore < this.clicks) {
                this.hiscore = this.clicks;
                document.cookie = "lightsouthighscore = " + this.hiscore;
            }
        }
        console.debug("verified value = " + confirmedfail);
        console.debug("endshown " + this.endscreenshown);
    }
}
LitesoutComponent.ɵfac = function LitesoutComponent_Factory(t) { return new (t || LitesoutComponent)(); };
LitesoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LitesoutComponent, selectors: [["app-litesout"]], decls: 10, vars: 4, consts: [[1, "centerbutinlinent"], [1, "flexcolumn"], [1, "nopadbot", "alignselfcenter"], [1, "nopadtop", "alignselfcenter"], ["class", "generalflex flexrow", 4, "ngFor", "ngForOf"], ["class", "centerbutinlinent", 4, "ngIf"], [1, "generalflex", "flexrow"], ["class", "generalflex flexcolumn", 4, "ngFor", "ngForOf"], [1, "generalflex", "flexcolumn"], ["class", "onbunka generalbunka", 3, "click", 4, "ngIf"], ["class", "offbunka generalbunka", 3, "click", 4, "ngIf"], [1, "onbunka", "generalbunka", 3, "click"], [1, "offbunka", "generalbunka", 3, "click"], [1, "alignselfcenter", "nopadbot"], [1, "alignselfcenter", "nopadtop"], [1, "alignselfcenter"], [1, "automar", 3, "click"], [1, "automar", "alignselfcenter", 3, "click"]], template: function LitesoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "gl hf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "solvability not guaranteed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LitesoutComponent_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LitesoutComponent_div_7_Template, 9, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LitesoutComponent_div_8_Template, 6, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LitesoutComponent_p_9_Template, 3, 0, "p", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mcdonaldsplayspace);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.endscreenshown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.endscreenshown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.endscreenshown);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".onbunka[_ngcontent-%COMP%] {\n  box-shadow: inset 0 1px 0 0 #fff6af;\n  background: #ffec64 linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);\n  border-radius: 6px;\n  border: 1px solid #ffaa22;\n  display: inline-block;\n  cursor: pointer;\n  color: #333333;\n  font-size: 8px;\n  font-weight: bold;\n  padding: 15px 15px;\n  text-decoration: none;\n}\n\n.onbunka[_ngcontent-%COMP%]:hover {\n  background: #ffab23 linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);\n}\n\n.offbunka[_ngcontent-%COMP%] {\n  box-shadow: inset 0 1px 0 0 #ffffff;\n  background: #ffffff linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);\n  border-radius: 6px;\n  border: 1px solid #dcdcdc;\n  display: inline-block;\n  cursor: pointer;\n  color: #666666;\n  font-size: 15px;\n  font-weight: bold;\n  padding: 15px 15px;\n  text-decoration: none;\n}\n\n.offbunka[_ngcontent-%COMP%]:hover {\n  background: #f6f6f6 linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);\n}\n\n.generalflex[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.flexrow[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n\n.flexcolumn[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n\n.generalbunka[_ngcontent-%COMP%] {\n  margin: 3px;\n  display: inline-block;\n}\n\n.centerbutinlinent[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  justify-self: center;\n}\n\n.automar[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.nopadbot[_ngcontent-%COMP%] {\n  padding-bottom: 0 !important;\n  margin-bottom: 0 !important;\n}\n\n.nopadtop[_ngcontent-%COMP%] {\n  padding-top: 0 !important;\n  margin-top: 0 !important;\n}\n\n.alignselfcenter[_ngcontent-%COMP%] {\n  align-self: center;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxpdGVzb3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQUE7RUFDQSx3RUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0Usd0VBQUE7QUFDRjs7QUFFQTtFQUNFLG1DQUFBO0VBQ0Esd0VBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLHdFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSw0QkFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLHdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0YiLCJmaWxlIjoibGl0ZXNvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub25idW5rYSB7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCAwICNmZmY2YWY7XHJcbiAgYmFja2dyb3VuZDogI2ZmZWM2NCBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZlYzY0IDUlLCAjZmZhYjIzIDEwMCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZhYTIyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICMzMzMzMzM7XHJcbiAgZm9udC1zaXplOiA4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMTVweCAxNXB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLm9uYnVua2E6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZmFiMjMgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmYWIyMyA1JSwgI2ZmZWM2NCAxMDAlKTtcclxufVxyXG5cclxuLm9mZmJ1bmthIHtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIDAgI2ZmZmZmZjtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmIGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmZmZmYgNSUsICNmNmY2ZjYgMTAwJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkY2RjZGM7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogIzY2NjY2NjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMTVweCAxNXB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLm9mZmJ1bmthOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZjZmNmY2IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmNmY2ZjYgNSUsICNmZmZmZmYgMTAwJSk7XHJcbn1cclxuXHJcbi5nZW5lcmFsZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZsZXhyb3cge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5mbGV4Y29sdW1uIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZ2VuZXJhbGJ1bmthIHtcclxuICBtYXJnaW46IDNweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5jZW50ZXJidXRpbmxpbmVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hdXRvbWFyIHtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5ub3BhZGJvdCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ub3BhZHRvcCB7XHJcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hbGlnbnNlbGZjZW50ZXJ7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LitesoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-litesout',
                templateUrl: './litesout.component.html',
                styleUrls: ['./litesout.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map