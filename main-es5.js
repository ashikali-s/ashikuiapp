function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _home_component_home_component_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./home-component/home-component.component */
    "./src/app/home-component/home-component.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _home_component_home_component_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponentComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function AppComponent_button_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_17_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var flag_r6 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.changeLang(flag_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var flag_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", flag_r6.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", flag_r6.name, " ");
      }
    }

    function AppComponent_span_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dashboard");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_span_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Manage");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Info Pane");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dashboard");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Dashboard provides Dashboard provides Dashboard provides Dashboard provides Dashboard provides Dashboard provides Dashboard provides Dashboard provides ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "There are two different views available");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Summary View");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Detaied View");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'ashik-ui-app';
        this.flag = [];
        this.showrightnav = false;
        this.showLeftnav = true;
        this.flags = [{
          name: 'English',
          image: 'assets/images/flags/gb.svg'
        }, {
          name: 'French',
          image: 'assets/images/flags/fr.svg'
        }];
        this.navItems = [{
          displayName: 'Home',
          iconName: 'recent_actors'
        }, {
          displayName: 'Menu1',
          iconName: 'group'
        }];
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.flag = this.flags[0];
        }
      }, {
        key: "changeLang",
        value: function changeLang(flag) {
          this.flag = flag;
        }
      }, {
        key: "showrightnavToggle",
        value: function showrightnavToggle() {
          // if (this.showrightnav) {
          this.showrightnav = !this.showrightnav; // }
        }
      }, {
        key: "showleftnavToggle",
        value: function showleftnavToggle() {
          this.showLeftnav = !this.showLeftnav;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 41,
      vars: 12,
      consts: [["fxLayout", "row"], ["fxFlex", "", "fxLayoutAlign", "start center"], ["aria-hidden", "false", "aria-label", "Example home icon", 1, "cp", 3, "click"], ["fxFlex", "100px", "fxLayoutAlign", "end center"], [1, "widget-text"], ["mat-button", "", 3, "matMenuTriggerFor"], ["langMenuTrigger", "matMenuTrigger"], ["width", "18", 3, "src"], ["fxShow", "false", "fxShow.gt-sm", "", 1, "flag-menu-title"], ["xPosition", "before", 1, "app-dropdown", 3, "overlapTrigger"], ["langMenu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["fxLayout", "row", 1, "body"], ["fxFlex.sm", "55px", "fxFlex", "220px", 1, "lft"], [4, "ngIf"], ["fxFlex", "", 1, "mdl"], ["fxLayout", "row", "fxLayoutAlign", "end start", "fxFlex.sm", "38px", "fxFlex", "300px", 1, "lst"], ["fxLayout", "column", 1, "minimize"], [1, "cp", 3, "click"], ["fxLayout", "column", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], ["fxLayout", "column"], [1, "title"], ["fxLayout", "column", 1, "content"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_mat_icon_click_3_listener() {
            return ctx.showleftnavToggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Assignment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-menu", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AppComponent_button_17_Template, 3, 2, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AppComponent_span_24_Template, 2, 0, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "construction");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AppComponent_span_28_Template, 2, 0, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-icon", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_mat_icon_click_33_listener() {
            return ctx.showrightnavToggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-icon", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_mat_icon_click_35_listener() {
            return ctx.showrightnavToggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AppComponent_div_37_Template, 16, 0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Copyright \xA9 reserved ashik");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.flag.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.flag.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("overlapTrigger", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.flags);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidedleftnav", !ctx.showLeftnav);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLeftnav);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLeftnav);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidedrightnav", !ctx.showrightnav);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showrightnav);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultShowHideDirective"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["_MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuItem"]],
      styles: ["@media only screen and (max-width: 640px) {\n  .lft[_ngcontent-%COMP%] {\n    min-width: 40px !important;\n    max-width: 40px !important;\n    overflow: hidden;\n  }\n}\n.hidedleftnav[_ngcontent-%COMP%] {\n  min-width: 55px !important;\n  max-width: 55px !important;\n}\n.hidedrightnav[_ngcontent-%COMP%] {\n  min-width: 38px !important;\n  max-width: 38px !important;\n}\nheader[_ngcontent-%COMP%] {\n  background: #2E363E;\n  color: #fff;\n  padding: 13px 18px;\n}\nheader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\nheader[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  color: unset !important;\n  text-decoration: none;\n}\nfooter[_ngcontent-%COMP%] {\n  display: flex;\n  place-content: flex-end;\n  align-items: center;\n  padding: 7px 20px 0 0;\n  background: #2E363E;\n  color: #fff;\n}\n.body[_ngcontent-%COMP%] {\n  background: #DCDCDC;\n  min-height: calc(100vh - 100px);\n}\n.body[_ngcontent-%COMP%]   .lft[_ngcontent-%COMP%] {\n  padding: 12px 0;\n  background: #EFEFEF;\n}\n.body[_ngcontent-%COMP%]   .lst[_ngcontent-%COMP%] {\n  background: #EFEFEF;\n}\n.body[_ngcontent-%COMP%]   .lst[_ngcontent-%COMP%]   .minimize[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  background: #2E363E;\n  color: #fff;\n  height: 38px;\n  display: flex;\n  align-items: center;\n  place-content: center;\n  width: 38px;\n}\n.body[_ngcontent-%COMP%]   .lst[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  background: #EEE8E8;\n  padding-left: 10px;\n  font-weight: 600 !important;\n}\n.body[_ngcontent-%COMP%]   .lst[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  background: #fff;\n  min-height: 100vh;\n  padding: 16px 13px;\n}\n.body[_ngcontent-%COMP%]   .mdl[_ngcontent-%COMP%] {\n  margin: 15px 20px;\n}\n.body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 12px;\n}\n.body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 38px;\n  align-items: center;\n  list-style-type: none;\n}\n.body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 6px;\n  margin-top: 4x;\n}\n.cp[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXEZsZXhcXGNvZGVcXGFzaGlrLXdlYi1hcHBcXGFzaGlrLXdlYi1hcHBzL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksMEJBQUE7SUFDQSwwQkFBQTtJQUNBLGdCQUFBO0VDQ047QUFDRjtBRENBO0VBQ0ksMEJBQUE7RUFDQSwwQkFBQTtBQ0NKO0FEQ0E7RUFDSSwwQkFBQTtFQUNBLDBCQUFBO0FDRUo7QURBQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDR0o7QURGSTtFQUNJLGdCQUFBO0FDSVI7QURGSTtFQUNJLHVCQUFBO0VBQ0EscUJBQUE7QUNJUjtBRERBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0dKO0FEREE7RUFDSSxtQkFBQTtFQUNBLCtCQUFBO0FDSUo7QURGSTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQ0lSO0FERkk7RUFDSSxtQkFBQTtBQ0lSO0FERlk7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDSWhCO0FERFE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUNHWjtBRERRO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDR1o7QURBSTtFQUNJLGlCQUFBO0FDRVI7QURBSTtFQUNJLGtCQUFBO0FDRVI7QUREUTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNHWjtBREZZO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDSWhCO0FEQ0E7RUFDSSxlQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjQwcHgpIHtcclxuICAgIC5sZnQge1xyXG4gICAgICAgIG1pbi13aWR0aDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1heC13aWR0aDogNDBweCAhaW1wb3J0YW50OyAgICBcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG59XHJcbi5oaWRlZGxlZnRuYXYge1xyXG4gICAgbWluLXdpZHRoOiA1NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDU1cHggIWltcG9ydGFudDtcclxufVxyXG4uaGlkZWRyaWdodG5hdiB7XHJcbiAgICBtaW4td2lkdGg6IDM4cHggIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogMzhweCAhaW1wb3J0YW50O1xyXG59XHJcbmhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMkUzNjNFO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxM3B4IDE4cHg7XHJcbiAgICBzcGFuIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgfVxyXG4gICAgYSwgYTpob3ZlciwgYTpmb2N1cyB7XHJcbiAgICAgICAgY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG59XHJcbmZvb3RlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGxhY2UtY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLy8gbWluLWhlaWdodDogNDRweDtcclxuICAgIHBhZGRpbmc6IDdweCAyMHB4IDAgMDtcclxuICAgIGJhY2tncm91bmQ6ICMyRTM2M0U7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRENEQ0RDO1xyXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcclxuICAgIC8vIHBhZGRpbmc6IDEycHggMDtcclxuICAgIC5sZnQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRUZFRkVGO1xyXG4gICAgfVxyXG4gICAgLmxzdCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0VGRUZFRjtcclxuICAgICAgICAubWluaW1pemUge1xyXG4gICAgICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMkUzNjNFO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNFRUU4RTg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDEzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1kbCB7XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4IDIwcHg7XHJcbiAgICB9XHJcbiAgICB1bCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMnB4OyBcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDM4cHg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmNwIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSIsIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgLmxmdCB7XG4gICAgbWluLXdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxufVxuLmhpZGVkbGVmdG5hdiB7XG4gIG1pbi13aWR0aDogNTVweCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDU1cHggIWltcG9ydGFudDtcbn1cblxuLmhpZGVkcmlnaHRuYXYge1xuICBtaW4td2lkdGg6IDM4cHggIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAzOHB4ICFpbXBvcnRhbnQ7XG59XG5cbmhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICMyRTM2M0U7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxM3B4IDE4cHg7XG59XG5oZWFkZXIgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5oZWFkZXIgYSwgaGVhZGVyIGE6aG92ZXIsIGhlYWRlciBhOmZvY3VzIHtcbiAgY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGxhY2UtY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDdweCAyMHB4IDAgMDtcbiAgYmFja2dyb3VuZDogIzJFMzYzRTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5ib2R5IHtcbiAgYmFja2dyb3VuZDogI0RDRENEQztcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcbn1cbi5ib2R5IC5sZnQge1xuICBwYWRkaW5nOiAxMnB4IDA7XG4gIGJhY2tncm91bmQ6ICNFRkVGRUY7XG59XG4uYm9keSAubHN0IHtcbiAgYmFja2dyb3VuZDogI0VGRUZFRjtcbn1cbi5ib2R5IC5sc3QgLm1pbmltaXplIG1hdC1pY29uIHtcbiAgYmFja2dyb3VuZDogIzJFMzYzRTtcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDogMzhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMzhweDtcbn1cbi5ib2R5IC5sc3QgLnRpdGxlIHtcbiAgYmFja2dyb3VuZDogI0VFRThFODtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG59XG4uYm9keSAubHN0IC5jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDE2cHggMTNweDtcbn1cbi5ib2R5IC5tZGwge1xuICBtYXJnaW46IDE1cHggMjBweDtcbn1cbi5ib2R5IHVsIHtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xufVxuLmJvZHkgdWwgbGkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4taGVpZ2h0OiAzOHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG4uYm9keSB1bCBsaSBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgbWFyZ2luLXRvcDogNHg7XG59XG5cbi5jcCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_component_home_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home-component/home-component.component */
    "./src/app/home-component/home-component.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js"); // import { MatTableModule, MatSlideToggleModule } from '@angular/material';
    // import { Parse } from "parse";
    // import { RegisterComponent } from './register/register.component';
    // import { MatIconModule } from '@angular/material/icon';
    // Parse.initialize(environment.PARSE_APP_ID, environment.PARSE_JS_KEY);
    // Parse.serverURL = environment.serverURL;


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], // MatSnackBarModule,
      _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], // MatListModule,
      // MatSliderModule,
      // MatExpansionModule,
      _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], // MatTableModule,
      // MatRadioModule,
      // MatDialogModule,
      // MatChipsModule,
      // MatInputModule,
      // MatIconModule,
      _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], // MatTabsModule,
      // MatDividerModule,
      _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_component_home_component_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponentComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], // MatSnackBarModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], // MatListModule,
        // MatSliderModule,
        // MatExpansionModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], // MatTableModule,
        // MatRadioModule,
        // MatDialogModule,
        // MatChipsModule,
        // MatInputModule,
        // MatIconModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], // MatTabsModule,
        // MatDividerModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_component_home_component_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponentComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], // MatSnackBarModule,
          _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], // MatListModule,
          // MatSliderModule,
          // MatExpansionModule,
          _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], // MatTableModule,
          // MatRadioModule,
          // MatDialogModule,
          // MatChipsModule,
          // MatInputModule,
          // MatIconModule,
          _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], // MatTabsModule,
          // MatDividerModule,
          _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home-component/home-component.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/home-component/home-component.component.ts ***!
    \************************************************************/

  /*! exports provided: HomeComponentComponent */

  /***/
  function srcAppHomeComponentHomeComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponentComponent", function () {
      return HomeComponentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function HomeComponentComponent_mat_card_3_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ic_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ic_r3.color);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ic_r3.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ic_r3.color);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ic_r3.number);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ic_r3.name);
      }
    }

    function HomeComponentComponent_mat_card_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponentComponent_mat_card_3_div_5_Template, 9, 7, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", data_r1.icons);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.total);
      }
    }

    var HomeComponentComponent = function HomeComponentComponent() {
      _classCallCheck(this, HomeComponentComponent);

      this.datas = [];
      this.datas = [{
        title: 'Printer Management',
        icons: [{
          icon: 'check_circle',
          color: 'green',
          number: 5,
          name: 'Ready'
        }, {
          icon: 'lock',
          color: 'red',
          number: 5,
          name: 'Locked'
        }],
        total: 'Total Printers 10'
      }, {
        title: 'Email Job Management',
        icons: [{
          icon: 'check_circle',
          color: 'blue',
          number: 8,
          name: 'Ready'
        }, {
          icon: 'block',
          color: 'grey',
          number: 5,
          name: 'disabled'
        }],
        total: 'Total Email Jobs 18'
      }, {
        title: 'Alerts',
        icons: [{
          icon: 'info',
          color: 'red',
          number: 3,
          name: 'Critical'
        }, {
          icon: 'bar_chart',
          color: 'orange',
          number: 1,
          name: 'Major'
        }],
        total: 'Total Alerts 5'
      }, {
        title: 'File Management',
        icons: [{
          icon: 'save_alt',
          color: 'orange',
          number: 5,
          name: 'Files'
        }],
        total: 'Total Files 5'
      }];
    };

    HomeComponentComponent.ɵfac = function HomeComponentComponent_Factory(t) {
      return new (t || HomeComponentComponent)();
    };

    HomeComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponentComponent,
      selectors: [["app-home-component"]],
      decls: 4,
      vars: 1,
      consts: [[1, "gtitle"], ["fxLayout", "row", 1, "wrapp"], ["fxLayout", "column", "fxFlex", "250px", 4, "ngFor", "ngForOf"], ["fxLayout", "column", "fxFlex", "250px"], [1, "title"], ["fxLayout", "row", 1, "as-content"], ["fxLayout", "row", "class", "icon", 4, "ngFor", "ngForOf"], [1, "as-footer"], ["fxLayout", "row", 1, "icon"], [1, "ic-divs"], ["fxLayout", "column", 1, "number"], [1, "nr"], [1, "nr-name"]],
      template: function HomeComponentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponentComponent_mat_card_3_Template, 9, 3, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.datas);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]],
      styles: [".wrapp[_ngcontent-%COMP%] {\n  flex-flow: wrap;\n}\n\n.gtitle[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 15px;\n  margin-left: 3px;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  margin: 0 6px 25px 6px;\n  padding: 0 !important;\n}\n\nmat-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding: 0 10px !important;\n  color: #555;\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: 15px;\n  margin-top: 15px;\n}\n\nmat-card[_ngcontent-%COMP%]   .as-content[_ngcontent-%COMP%] {\n  padding: 0 10px !important;\n  margin-bottom: 26px;\n  margin-top: 6px;\n}\n\nmat-card[_ngcontent-%COMP%]   .as-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin: 0 8px;\n}\n\nmat-card[_ngcontent-%COMP%]   .as-content[_ngcontent-%COMP%]   .ic-divs[_ngcontent-%COMP%] {\n  height: 36px;\n  display: flex;\n  place-content: center;\n  align-items: center;\n  border-radius: 30px;\n  width: 36px;\n  margin-right: 10px;\n}\n\nmat-card[_ngcontent-%COMP%]   .as-content[_ngcontent-%COMP%]   .ic-divs[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\nmat-card[_ngcontent-%COMP%]   .as-footer[_ngcontent-%COMP%] {\n  background: #F6F3F3;\n  padding: 9px 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1jb21wb25lbnQvRDpcXEZsZXhcXGNvZGVcXGFzaGlrLXdlYi1hcHBcXGFzaGlrLXdlYi1hcHBzL3NyY1xcYXBwXFxob21lLWNvbXBvbmVudFxcaG9tZS1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUtY29tcG9uZW50L2hvbWUtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0VKOztBREFBO0VBQ0ksc0JBQUE7RUFDQSxxQkFBQTtBQ0dKOztBREZJO0VBQ0ksMEJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0lSOztBREZJO0VBQ0ksMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNJUjs7QURIUTtFQUNJLGFBQUE7QUNLWjs7QURGWTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDSWhCOztBREhnQjtFQUNJLFdBQUE7QUNLcEI7O0FEQUk7RUFDSSxtQkFBQTtFQUNBLDRCQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9ob21lLWNvbXBvbmVudC9ob21lLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcCB7XHJcbiAgICBmbGV4LWZsb3c6IHdyYXA7XHJcbn1cclxuLmd0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbn1cclxubWF0LWNhcmQge1xyXG4gICAgbWFyZ2luOiAwIDZweCAyNXB4IDZweDtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIGgzIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogIzU1NTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuYXMtY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjZweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICAgICAgJiA+IGRpdiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCA4cHg7XHJcbiAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAvLyAuaWNvbiB7XHJcbiAgICAgICAgICAgIC5pYy1kaXZzIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfSAgICAgICAgICAgIFxyXG4gICAgLmFzLWZvb3RlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0Y2RjNGMztcclxuICAgICAgICBwYWRkaW5nOiA5cHggMTBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59IiwiLndyYXBwIHtcbiAgZmxleC1mbG93OiB3cmFwO1xufVxuXG4uZ3RpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuXG5tYXQtY2FyZCB7XG4gIG1hcmdpbjogMCA2cHggMjVweCA2cHg7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cbm1hdC1jYXJkIGgzIHtcbiAgcGFkZGluZzogMCAxMHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNTU1O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5tYXQtY2FyZCAuYXMtY29udGVudCB7XG4gIHBhZGRpbmc6IDAgMTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAyNnB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5tYXQtY2FyZCAuYXMtY29udGVudCA+IGRpdiB7XG4gIG1hcmdpbjogMCA4cHg7XG59XG5tYXQtY2FyZCAuYXMtY29udGVudCAuaWMtZGl2cyB7XG4gIGhlaWdodDogMzZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB3aWR0aDogMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxubWF0LWNhcmQgLmFzLWNvbnRlbnQgLmljLWRpdnMgbWF0LWljb24ge1xuICBjb2xvcjogI2ZmZjtcbn1cbm1hdC1jYXJkIC5hcy1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjRjZGM0YzO1xuICBwYWRkaW5nOiA5cHggMTBweCAhaW1wb3J0YW50O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home-component',
          templateUrl: './home-component.component.html',
          styleUrls: ['./home-component.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });

    var environment = {
      production: false,
      PARSE_APP_ID: 'APLICATION_ID',
      PARSE_JS_KEY: 'JS_KEY',
      serverURL: 'https://parseapi.back4app.com'
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Flex\code\ashik-web-app\ashik-web-apps\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map