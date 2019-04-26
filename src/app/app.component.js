"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var spinkits_1 = require("ng-http-loader/spinkits");
var router_1 = require("@angular/router");
require("rxjs/add/operator/filter");
var screenfull = require("screenfull");
var Subject_1 = require("rxjs/Subject");
var AppComponent = AppComponent_1 = (function () {
    function AppComponent(Setting, service, route, activeRoute) {
        var _this = this;
        this.Setting = Setting;
        this.service = service;
        this.route = route;
        this.activeRoute = activeRoute;
        this.Test = "Testing Val";
        this.customSpinner = spinkits_1.Spinkit.skWanderingCubes;
        this.listTypes = [];
        this.listModules = [];
        this.listMenu = [];
        this.breadcrumb = null;
        this.secondDropDown = 1;
        this.searchedData = [];
        this.currentUrl = this.route.url;
        //this.service.getDataSource().subscribe((res) => {
        //    this.Setting.DataSources = res;
        //}, (err) => {
        //    this.serverError(err);
        //})
        console.log(this.UserData);
        console.log("route");
        console.log(this.route);
        route.events
            .filter(function (event) { return event instanceof router_1.NavigationEnd; })
            .subscribe(function (event) {
            // console.log("============== is grid  from app========");
            // console.log(AppComponent.isGrid);
            //
            // console.log("============== navigation event from app========");
            // console.log(event);
            //
            //this.src = this.activeRoute.snapshot.paramMap.get('src');
            //alert(this.src);
            // console.log(this.src);
            //
            // console.log("Current value in public shared src from app component");
            //
            // console.log(PublicShared.currentWindowSrc);
            _this.breadcrumb = _this.activeRoute.snapshot.children[0].data.breadcrumb;
        });
    }
    AppComponent.prototype.refreshPage = function () {
        window.location.reload();
    };
    AppComponent.prototype.closePage = function () {
        this.route.navigate(['/']);
    };
    AppComponent.prototype.handleError = function (error) {
        console.log(error);
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        AppComponent_1.updateNavbar.subscribe(function (res) {
            _this.getListCat();
            if (localStorage.getItem('userProfile')) {
                _this.UserData = JSON.parse(localStorage.getItem('userProfile'));
            }
            else {
                _this.UserData = {};
            }
        });
        this.getListCat();
        if (localStorage.getItem('userProfile')) {
            this.UserData = JSON.parse(localStorage.getItem('userProfile'));
        }
        else {
            this.UserData = {};
        }
        var el = document.getElementById('container');
        document.getElementById('containerFull').addEventListener('click', function () {
            if (screenfull.enabled) {
                screenfull.request(el);
            }
        });
    };
    AppComponent.prototype.getListCat = function () {
        var _this = this;
        this.service.getListCat()
            .subscribe(function (res) {
            _this.listTypes = res;
            _this.getListModule();
            _this.getMenu();
        }, function (err) {
            _this.serverError(err);
        });
    };
    AppComponent.prototype.getListModule = function () {
        var _this = this;
        this.service.getListModules()
            .subscribe(function (res) {
            console.log('***-*-*-*-*-*-*-*-*-*-***');
            _this.listModules = res;
            _this.selectedListModule = res[0].ModuleID;
        }, function (err) {
            _this.serverError(err);
        });
    };
    AppComponent.prototype.getMenu = function () {
        var _this = this;
        this.service.getMenu()
            .subscribe(function (res) {
            console.log("Menu service");
            console.log(res);
            _this.listMenu = res;
        }, function (err) {
            _this.serverError(err);
        });
    };
    AppComponent.prototype.serverError = function (err) {
        if (err.status === 401) {
            localStorage.clear();
            this.route.navigate(['/login']);
        }
    };
    AppComponent.prototype.filterTypes = function (listTypes) {
        var result = [];
        for (var x = 0; x < listTypes.length; x++) {
            for (var y = 0; y < this.listMenu.length; y++) {
                if (listTypes[x].MenueTypeID == this.listMenu[y].MenueTypeID) {
                    result.push(listTypes[x]);
                    break;
                }
            }
        }
        return result;
    };
    AppComponent.prototype.filterModules = function (listType, listModule) {
        var result = [];
        for (var x = 0; x < listModule.length; x++) {
            for (var y = 0; y < this.listMenu.length; y++) {
                if (listType.MenueTypeID == this.listMenu[y].MenueTypeID && listModule[x].ModuleID == this.listMenu[y].ModuleID) {
                    result.push(listModule[x]);
                    break;
                }
            }
        }
        return result;
    };
    AppComponent.prototype.getSearchData = function () {
        var _this = this;
        this.service.getSearchedData(this.secondDropDown, this.selectedListModule)
            .subscribe(function (res) {
            _this.searchedData = res;
        });
    };
    AppComponent.prototype.dynamicComponent = function () {
        return this.ViewHolder.toArray()[0];
    };
    AppComponent.prototype.userLogOut = function () {
        this.service.logOut().subscribe(function (res) {
            console.log(res.status);
        });
        localStorage.clear();
        this.route.navigate(['/login']);
    };
    return AppComponent;
}());
AppComponent.isGrid = false;
AppComponent.updateNavbar = new Subject_1.Subject();
__decorate([
    core_1.ViewChildren('ViewHolder')
], AppComponent.prototype, "ViewHolder", void 0);
AppComponent = AppComponent_1 = __decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    })
], AppComponent);
exports.AppComponent = AppComponent;
var AppComponent_1;
