webpackJsonp([1,4],{

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__session_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditProfileComponent = (function () {
    function EditProfileComponent(session, router, route, profileService) {
        this.session = session;
        this.router = router;
        this.route = route;
        this.profileService = profileService;
        this.user = {};
        this.uploader = new __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__["FileUploader"]({
            url: "http://localhost:3000/api/users/edit",
            authToken: "JWT " + this.session.token
        });
        this.newUser = {
            _id: "",
            username: "",
            password: "",
            image: "",
            name: "",
            lastName: "",
            age: "",
            height: "",
            weigth: "",
            mass_muscle: "",
            mass_water: "",
            mass_bone: "",
            mass_fat: "",
            count_total: "",
            count_variable: ""
        };
        //  this.user = JSON.parse(localStorage.getItem("user"))
        //  console.log("USER",this.user)
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = localStorage["id"];
        this.session.getUser(id)
            .subscribe(function (user) {
            _this.user = user;
            console.log(_this.user);
            _this.newUser._id = _this.user["_id"];
            _this.newUser.username = _this.user["username"];
            _this.newUser.password = _this.user["password"];
            _this.newUser.image = _this.user["image"];
            _this.newUser.name = _this.user["name"];
            _this.newUser.lastName = _this.user["lastName"];
            _this.newUser.age = _this.user["age"];
            _this.newUser.height = _this.user["height"];
            _this.newUser.weigth = _this.user["weigth"];
            _this.newUser.mass_muscle = _this.user["mass_muscle"];
            _this.newUser.mass_water = _this.user["mass_water"];
            _this.newUser.mass_bone = _this.user["mass_bone"];
            _this.newUser.mass_fat = _this.user["mass_fat"];
            _this.newUser.count_total = _this.user["count_total"];
            _this.newUser.count_variable = _this.user["count_variable"];
        });
        // this.uploader.onSuccessItem = (item, user) => {
        //   localStorage.removeItem("user")
        //   localStorage.setItem("user",user);
        // };
        // this.uploader.onErrorItem = (item, response, status, headers) => {
        //   this.feedback = JSON.parse(response).message;
        // };
    };
    EditProfileComponent.prototype.submit = function () {
        // let user= JSON.parse(localStorage.getItem("user"))
        var _this = this;
        console.log("userEdit", this.newUser);
        this.session.edit(this.newUser)
            .subscribe(function (userEdit) {
            console.log("inside subscribe");
            _this.router.navigate(['/profile']);
        });
    };
    EditProfileComponent.prototype.addImage = function () {
        var _this = this;
        this.uploader.onBuildItemForm = function (item, form) {
            form.append("id", _this.newUser["_id"]);
        };
        this.uploader.uploadAll();
    };
    return EditProfileComponent;
}());
EditProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-profile',
        template: __webpack_require__(488),
        styles: [__webpack_require__(452)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__session_service__["a" /* SessionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__profile_service__["a" /* ProfileService */]) === "function" && _d || Object])
], EditProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=edit-profile.component.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciseService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExerciseService = (function () {
    function ExerciseService(http, SessionService) {
        this.http = http;
        this.SessionService = SessionService;
        this.BASE_URL = 'http://localhost:3000/api';
    }
    ExerciseService.prototype.getList = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'JWT ' + this.SessionService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.BASE_URL + "/exercises", options)
            .map(function (res) { return res.json(); });
    };
    ExerciseService.prototype.get = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'JWT ' + this.SessionService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.BASE_URL + "/exercises/" + id, options)
            .map(function (res) { return res.json(); });
    };
    return ExerciseService;
}());
ExerciseService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */]) === "function" && _b || Object])
], ExerciseService);

var _a, _b;
//# sourceMappingURL=exercise.service.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__exercise_service__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExercisesListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExercisesListComponent = (function () {
    function ExercisesListComponent(session, exercise, el, _ngZone) {
        this.session = session;
        this.exercise = exercise;
        this.el = el;
        this._ngZone = _ngZone;
        this.user = {};
        this.view = true;
    }
    ExercisesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("heeeeeyyyyyyyyy", this.session.role);
        var id = localStorage["id"];
        this.session.getUser(id)
            .subscribe(function (user) {
            _this.user = user;
            console.log(_this.user);
        });
        // miro en localStorage si tengo el date
        var fixed = window.localStorage.getItem("date").slice(1, 11);
        var now = JSON.stringify(new Date());
        now = now.slice(1, 11);
        console.log("now", now);
        console.log("fixed", fixed);
        // if(fixed === now){
        //   this.view = false;
        // };
        this.exercise.getList()
            .subscribe(function (exercises) {
            _this.exercises = exercises;
        });
        console.log("hello");
    };
    ExercisesListComponent.prototype.ngAfterViewChecked = function () {
        console.log(document.getElementById("exercises"));
        var iframes = this.el.nativeElement.getElementsByTagName("iframe");
        var self = this;
        iframes[0].onload = function () {
            console.log("iframe ready");
            document.getElementById("exercises").classList.remove("hidden");
            document.getElementById("spinner").classList.add("hidden");
        };
    };
    ExercisesListComponent.prototype.done = function () {
        var _this = this;
        this.user["count_total"]++;
        this.session.edit(this.user).subscribe(function () {
            window.localStorage.setItem("date", JSON.stringify(new Date()));
            _this.view = false;
        });
    };
    ExercisesListComponent.prototype.changesrc = function (frame) {
        frame.src = "'https://www.youtube.com/embed/' + this.exercises[0].video_link.slice(32) | safe";
    };
    return ExercisesListComponent;
}());
ExercisesListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-exercises-list',
        template: __webpack_require__(489),
        styles: [__webpack_require__(453)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__exercise_service__["a" /* ExerciseService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__exercise_service__["a" /* ExerciseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__exercise_service__["a" /* ExerciseService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _d || Object])
], ExercisesListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=exercises-list.component.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(491),
        styles: [__webpack_require__(455)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(session, router) {
        this.session = session;
        this.router = router;
        this.user = {
            username: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.session.login(this.user).subscribe(function (result) {
            if (result === true) {
                // login successful
                _this.router.navigate(['/']);
            }
            else {
                // login failed
                console.log("alerta mal codigo", _this.error);
                _this.error = 'Username or password is incorrect';
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(492),
        styles: [__webpack_require__(456)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__(144);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapComponent = (function () {
    function MapComponent(router, mapsAPILoader, ngZone) {
        this.router = router;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.radioModel = 'Info';
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        //set google maps defaults
        this.latitude = 41.3978604;
        this.longitude = 2.1905049;
        this.city = "Barcelona";
        this.zoom = 14;
        // create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */]();
        // set current position
        this.setCurrentPosition();
        // load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            _this.autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["(cities)"],
            });
            _this.findGym();
            _this.autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = _this.autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.findGym();
                    _this.city = place.vicinity;
                });
            });
        });
    };
    MapComponent.prototype.findGym = function () {
        var map = new google.maps.Map(this.searchElementRef.nativeElement);
        var places = new google.maps.places.PlacesService(map);
        var pyrmont = new google.maps.LatLng(this.latitude, this.longitude);
        var search = {
            location: pyrmont,
            radius: 1000,
            type: ["gym"]
        };
        var that = this;
        places.nearbySearch(search, function (results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                that.resultados = results;
                console.log("HEEEEEYYYYYYYYYYY", results);
            }
        });
    };
    MapComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 14;
            });
        }
    };
    return MapComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])("search"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]) === "function" && _a || Object)
], MapComponent.prototype, "searchElementRef", void 0);
MapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-map',
        template: __webpack_require__(493),
        styles: ["\n      .my-map {\n        height: 300px;\n      }\n    "],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__agm_core__["b" /* MapsAPILoader */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"]) === "function" && _d || Object])
], MapComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(session, router, route, profileService
        // private userService: UserService
    ) {
        this.session = session;
        this.router = router;
        this.route = route;
        this.profileService = profileService;
        this.user = {};
        this.isCollapsed = false;
        //   this.user = JSON.parse(localStorage.getItem("user"))
        //   console.log("USER",this.user)
        //
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = localStorage["id"];
        this.session.getUser(id)
            .subscribe(function (user) {
            console.log(user);
            _this.user = user;
            console.log("a aver ", _this.user);
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(495),
        styles: [__webpack_require__(458)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__profile_service__["a" /* ProfileService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__profile_service__["a" /* ProfileService */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//   constructor(
//     private session: SessionService,
//     private user:ProfileService
//   ) { }
//
//   ngOnInit() {
//     console.log(this.session)
//     // this.profile.getList()
//     //   .subscribe((users) => {
//     //     this.profiles = profiles;
//       // });
//     }
//
// }
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = (function () {
    function SignupComponent(session, router) {
        this.session = session;
        this.router = router;
        this.newUser = {
            username: '',
            password: ''
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signup = function () {
        var _this = this;
        this.session.signup(this.newUser)
            .subscribe(function (result) {
            if (result === true) {
                // login successful
                console.log('result ok', result);
                _this.router.navigate(['/login']);
            }
            else {
                console.log('result ko', result);
                // login failed
                // this.error = 'Username or password is incorrect';
            }
        });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(496),
        styles: [__webpack_require__(459)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SignupComponent);

var _a, _b;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jwt_decode__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SessionService = (function () {
    function SessionService(router, http) {
        this.router = router;
        this.http = http;
        // BASE_URL: string = 'http://localhost:3000';
        this.BASE_URL = 'https://fullbody.herokuapp.com/';
        this.token = localStorage.getItem('token');
        if (this.token != null) {
            this.isAuth = true;
        }
        else {
            this.isAuth = false;
        }
    }
    SessionService.prototype.canActivate = function () {
        if (localStorage.getItem('token')) {
            // logged in so return true\
            this.token = localStorage.getItem('token');
            this.user = __WEBPACK_IMPORTED_MODULE_6_jwt_decode___default()(this.token).user;
            this.isAuth = true;
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        this.isAuth = false;
        return false;
    };
    SessionService.prototype.isAuthenticated = function () {
        return this.token != null ? true : false;
    };
    SessionService.prototype.signup = function (user) {
        var _this = this;
        return this.http.post(this.BASE_URL + "/signup", user)
            .map(function (response) { return response.json(); })
            .map(function (response) {
            var token = response.token;
            var user = response.user;
            if (token) {
                // set token property
                _this.token = token;
                _this.user = __WEBPACK_IMPORTED_MODULE_6_jwt_decode___default()(token).user;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('token', token);
                // localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('user', user.username);
                localStorage.setItem('id', user._id);
                _this.id = user._id;
                _this.role = user.role;
                _this.isAuth = true;
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].throw(err); });
    };
    SessionService.prototype.login = function (user) {
        var _this = this;
        return this.http.post(this.BASE_URL + "/login", user).map(function (response) {
            // login successful if there's a jwt token in the response
            var token = response.json() && response.json().token;
            var user = response.json() && response.json().user;
            // let role = response.json() && response.json().role;
            // this.id = response.json() && response.json().id;
            if (token) {
                // set token property
                _this.token = token;
                _this.user = __WEBPACK_IMPORTED_MODULE_6_jwt_decode___default()(token).user;
                _this.role = __WEBPACK_IMPORTED_MODULE_6_jwt_decode___default()(token).role;
                console.log("user name", user.username);
                _this.isAuth = true;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('token', token);
                localStorage.setItem('user', user.username);
                localStorage.setItem('id', user._id);
                _this.id = user._id;
                _this.role = user.role;
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        });
    };
    SessionService.prototype.getUser = function (id) {
        return this.http.get(this.BASE_URL + "/api/users/" + id)
            .map(function (response) {
            return response.json();
        });
    };
    SessionService.prototype.edit = function (user) {
        console.log(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'JWT ' + this.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        console.log(options);
        return this.http.put(this.BASE_URL + "/api/users/" + user._id, user, options).map(function (response) {
            var user = response.json() && response.json().user;
            localStorage.setItem('user', JSON.stringify(user));
            return true;
        });
    };
    SessionService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.token = null;
        this.user = null;
        this.id = null;
        this.isAuth = false;
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('id');
        this.router.navigate(['/login']);
    };
    return SessionService;
}());
SessionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _b || Object])
], SessionService);

var _a, _b;
//# sourceMappingURL=session.service.js.map

/***/ }),

/***/ 380:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 380;


/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(397);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(487),
        styles: [__webpack_require__(451)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__exercises_list_exercises_list_component__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__exercise_service__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__session_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__signup_signup_component__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__navbar_navbar_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__safe_pipe__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__filter_pipe__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__profile_profile_component__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__edit_profile_edit_profile_component__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__profile_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__map_map_component__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__agm_core__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__footer_footer_component__ = __webpack_require__(394);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__exercises_list_exercises_list_component__["a" /* ExercisesListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_13__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_14__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__["FileSelectDirective"],
            __WEBPACK_IMPORTED_MODULE_16__safe_pipe__["a" /* SafePipe */],
            __WEBPACK_IMPORTED_MODULE_17__filter_pipe__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_18__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_19__edit_profile_edit_profile_component__["a" /* EditProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_21__map_map_component__["a" /* MapComponent */],
            __WEBPACK_IMPORTED_MODULE_23__footer_footer_component__["a" /* FooterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_22__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: "AIzaSyC78vpwi7aeVo0o_6DlQm8_B4NM41EUEr4",
                libraries: ["places"]
            }),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap__["a" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap__["b" /* CollapseModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap__["c" /* TabsModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_20__profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_9__exercise_service__["a" /* ExerciseService */], __WEBPACK_IMPORTED_MODULE_10__session_service__["a" /* SessionService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

// platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exercises_list_exercises_list_component__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup_component__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile_component__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__session_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__map_map_component__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__edit_profile_edit_profile_component__ = __webpack_require__(146);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });








var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */], pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_2__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'map', component: __WEBPACK_IMPORTED_MODULE_6__map_map_component__["a" /* MapComponent */] },
    { path: 'exercise', component: __WEBPACK_IMPORTED_MODULE_0__exercises_list_exercises_list_component__["a" /* ExercisesListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__session_service__["a" /* SessionService */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_3__profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__session_service__["a" /* SessionService */]] },
    { path: 'edit', component: __WEBPACK_IMPORTED_MODULE_7__edit_profile_edit_profile_component__["a" /* EditProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__session_service__["a" /* SessionService */]] },
    { path: '**', redirectTo: '' }
];
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, filter) {
        var _this = this;
        if (!items || !filter) {
            return items;
        }
        return items.filter(function (item) { return _this.applyFilter(item, filter); });
    };
    FilterPipe.prototype.applyFilter = function (exercise, filter) {
        for (var field in filter) {
            if (filter[field]) {
                if (typeof filter[field] === 'string') {
                    if (exercise.muscles.indexOf(filter[field]) === -1) {
                        return false;
                    }
                }
            }
        }
        return true;
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'filter',
        pure: false,
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(490),
        styles: [__webpack_require__(454)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(session, router) {
        this.session = session;
        this.router = router;
        this.isCollapsed = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.session.user = localStorage["user"];
        this.session.id = localStorage["id"];
    };
    NavbarComponent.prototype.logout = function () {
        this.session.logout();
        // this.router.navigate(['/login']);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(494),
        styles: [__webpack_require__(457)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    return SafePipe;
}());
SafePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'safe' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
], SafePipe);

var _a;
//# sourceMappingURL=safe.pipe.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "\n.full-width{\n    float:left;width:100%;margin-top:30px;min-height:100px;position:relative;\n}\n.form-style-fake{position:absolute;top:0px;}\n.form-style-base{position:absolute;top:0px;z-index: 999;opacity: 0;}\n.imgCircle{border-radius: 50%;}\n.form-control{padding: 10px 50px;}\n.form-input{height:50px;border-radius: 0px;margin-top: 20px;}\n.Profile-input-file{\n    height:180px;width:180px;left:33%;\n    position: absolute;\n    top: 0px;\n    z-index: 999;\n    opacity: 0 !important;\n}\n.mg-auto{\n    margin:0 auto;max-width: 200px;overflow: hidden;\n}\n.fake-styled-btn{\n    background: #006cad;\n    padding: 10px;\n    color: #fff;\n}\n#main-input{width:250px;}\n.input-place{\n    position: absolute;top:35px;left: 20px;font-size:23px;color:gray;}\n.margin{margin-top:10px;margin-bottom:10px;}\n.truncate {\n    width: 250px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.bg-form{\n    float:left;width:100%;\n    position:relative;\n    background: url(\"http://lorempixel.com/200/200/abstract/\");\n    background-repeat: no-repeat;\n    background-size: cover;\n    margin-top: 0px;\n}\n.bg-transparent{\n    background: rgba(0,0,0,0.5);float: left;\n    width: 100%;margin-top: 0px;\n}\n.container{\n    background:rgba(0,0,0,0.5);\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n.custom-form{float: left;width:100%;border-radius: 20px;box-shadow: 0 0 16px #fff;overflow: hidden;\nbackground: rgba(255,255,255,0.6);\n}\n.img-section{\n    float: left;width: 100%;padding-top: 15px;padding-bottom: 15px;background: rgba(0,0,0,0.7);position: relative;\n\n}\nimg{\n  width: 25%;\n}\n.img-section h4{color:#fff;}\n#PicUpload{\n    color: #ffffff;\n    width: 180px;\n    height: 180px;\n    background: rgba(255,255,255,0.4);\n    padding: 100px;\n    position: absolute;\n    left: 30.5%;\n    border-radius: 50%;\n    display: none;\n    top:15px;\n}\n.camera{\n    font-size: 50px;\n    color: #333;\n}\n.custom-btn{\n    margin-top: 15px;\n    border-radius: 0px;\n    padding: 10px 60px;\n    margin-bottom: 15px;\n}\n#checker{\n    opacity: 0;\n    position: absolute;\n    top: 0px;\n    cursor: pointer;\n}\n.color{\n    color:#fff;\n}\n\n/*====== style for placeholder ========*/\n\n.form-control::-webkit-input-placeholder {\n    color:lightgray;\n    font-size:18px;\n}\n.form-control:-moz-placeholder {\n    color:lightgray;\n    font-size:18px;\n}\n.form-control::-moz-placeholder {\n    color:lightgray;\n    font-size:18px;\n}\n.form-control:-ms-input-placeholder {\n    color:lightgray;\n    font-size:18px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "\n.flex-container {\n  align: center;\n  list-style: none;\n\n\n\n  -ms-box-orient: horizontal;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -moz-flex;\n  display: -webkit-flex;\n  display: center;\n}\niframe{\n  max-width: 100%;\n}\n\n.column {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  float: left;\n  width: 100%;\n\n}\n.row{\n  border-radius: 6px;\n}\n.dropdown-menu{\n  position: relative;\n}\n\n.btn{\n  width:100%;\n}\n.exercises{\n  width: 100%;\n}\n\n.row{\n  background-color: rgba(192, 221, 176, 0.5);\n}\nh1{\n  color: rgb(7, 22, 227);\n}\n\n.name{\n  text-align: center;\n}\n.tab{\n  background-color: rgb(242, 234, 231);\n}\n/*\n.line {\n  display:block;\n  position:absolute;\n  top:45%;\n  left:50%;\n  border-bottom:4px solid cyan;\n  width:0%;\n  text-align:center;\n  animation: main-line 8s linear forwards;\n}\n\n\n\n@keyframes main-line {\n  from {\n    left:50%;\n    width:0%;\n  }\n  to {\n    left:15%;\n    width:70%;\n  }\n}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "section{\n  z-index: -1;\n}\nh3{\n  color: white;\n}\n.text{\n  color:white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, ".panel{\n  margin-top:50%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "#login-dp{\n    min-width: 250px;\n    padding: 14px 14px 0;\n    overflow:hidden;\n    background-color:rgba(255,255,255,.8);\n}\n#login-dp .help-block{\n    font-size:12px\n}\n#login-dp .bottom{\n    background-color:rgba(255,255,255,.8);\n    border-top:1px solid #ddd;\n    clear:both;\n    padding:14px;\n}\n.navbar{\n  height: 70px;\n}\n#login-dp .social-buttons{\n    margin:12px 0\n}\n#login-dp .social-buttons a{\n    width: 49%;\n}\n#login-dp .form-group {\n    margin-bottom: 10px;\n}\n.btn-fb{\n    color: #fff;\n    background-color:#3b5998;\n}\n.btn-fb:hover{\n    color: #fff;\n    background-color:#496ebc\n}\n.btn-tw{\n    color: #fff;\n    background-color:#55acee;\n}\n.btn-tw:hover{\n    color: #fff;\n    background-color:#59b5fa;\n}\n@media(max-width:768px){\n    #login-dp{\n        background-color: inherit;\n        color: #fff;\n    }\n    #login-dp .bottom{\n        background-color: inherit;\n        border-top:0 none;\n    }\n}\n.mbr-section{\n  background-color: rgba(0, 0, 0, 0.9);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "body\n{\n    font-family: 'Lato', 'sans-serif';\n    }\n.profile\n{\n    min-height: 355px;\n    display: inline-block;\n    text-align: left;\n\n    }\n.well {\n    min-height: 20px;\n    padding: 19px;\n    margin-bottom: 20px;\n    background-color: rgba(222, 217, 192,0.8);\n    border: 1px solid #333;\n    border-radius: 4px;\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.05);\n}\nfigcaption.ratings\n{\n    margin-top:20px;\n    }\nfigcaption.ratings a\n{\n    color:#f1c40f;\n    font-size:11px;\n    }\nfigcaption.ratings a:hover\n{\n    color:#f39c12;\n    text-decoration:none;\n    }\n.divider\n{\n    border-top:1px solid rgba(0,0,0,0.1);\n    }\n.emphasis\n{\n    border-top: 4px solid transparent;\n    }\n.emphasis:hover\n{\n    border-top: 4px solid #1abc9c;\n    }\n.emphasis h2\n{\n    margin-bottom:0;\n    }\nspan.tags\n{\n    background: #1abc9c;\n    border-radius: 2px;\n    color: #f5f5f5;\n    font-weight: bold;\n    padding: 2px 4px;\n    }\n.dropdown-menu\n{\n    background-color: #34495e;\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    width: 250px;\n    margin-left: -125px;\n    left: 50%;\n    }\n.dropdown-menu .divider\n{\n    background:none;\n    }\n.dropdown-menu>li>a\n{\n    color:#f5f5f5;\n    }\n.dropup .dropdown-menu\n{\n    margin-bottom:10px;\n    }\n.dropup .dropdown-menu:before\n{\n    content: \"\";\n    border-top: 10px solid #34495e;\n    border-right: 10px solid transparent;\n    border-left: 10px solid transparent;\n    position: absolute;\n    bottom: -10px;\n    left: 50%;\n    margin-left: -10px;\n    z-index: 10;\n    }\n\n    .dropdown-menu[_ngcontent-c3] {\n    background-color: #34495e;\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    width: 266px;\n    margin-left: -227px;\n    left: 13%;\n}\n\n.dropup .dropdown-menu, .navbar-fixed-bottom .dropdown .dropdown-menu {\n    /* top: auto; */\n    bottom: -421%;\n    margin-bottom: 2px;\n}\n.dropdown-menu[_ngcontent-c3] {\n    background-color: #34495e;\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    width: 266px;\n    margin-left: -138px;\n    left: 13%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, ".panel{\n  margin-top:50%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 165,
	"./af.js": 165,
	"./ar": 172,
	"./ar-dz": 166,
	"./ar-dz.js": 166,
	"./ar-kw": 167,
	"./ar-kw.js": 167,
	"./ar-ly": 168,
	"./ar-ly.js": 168,
	"./ar-ma": 169,
	"./ar-ma.js": 169,
	"./ar-sa": 170,
	"./ar-sa.js": 170,
	"./ar-tn": 171,
	"./ar-tn.js": 171,
	"./ar.js": 172,
	"./az": 173,
	"./az.js": 173,
	"./be": 174,
	"./be.js": 174,
	"./bg": 175,
	"./bg.js": 175,
	"./bn": 176,
	"./bn.js": 176,
	"./bo": 177,
	"./bo.js": 177,
	"./br": 178,
	"./br.js": 178,
	"./bs": 179,
	"./bs.js": 179,
	"./ca": 180,
	"./ca.js": 180,
	"./cs": 181,
	"./cs.js": 181,
	"./cv": 182,
	"./cv.js": 182,
	"./cy": 183,
	"./cy.js": 183,
	"./da": 184,
	"./da.js": 184,
	"./de": 187,
	"./de-at": 185,
	"./de-at.js": 185,
	"./de-ch": 186,
	"./de-ch.js": 186,
	"./de.js": 187,
	"./dv": 188,
	"./dv.js": 188,
	"./el": 189,
	"./el.js": 189,
	"./en-au": 190,
	"./en-au.js": 190,
	"./en-ca": 191,
	"./en-ca.js": 191,
	"./en-gb": 192,
	"./en-gb.js": 192,
	"./en-ie": 193,
	"./en-ie.js": 193,
	"./en-nz": 194,
	"./en-nz.js": 194,
	"./eo": 195,
	"./eo.js": 195,
	"./es": 197,
	"./es-do": 196,
	"./es-do.js": 196,
	"./es.js": 197,
	"./et": 198,
	"./et.js": 198,
	"./eu": 199,
	"./eu.js": 199,
	"./fa": 200,
	"./fa.js": 200,
	"./fi": 201,
	"./fi.js": 201,
	"./fo": 202,
	"./fo.js": 202,
	"./fr": 205,
	"./fr-ca": 203,
	"./fr-ca.js": 203,
	"./fr-ch": 204,
	"./fr-ch.js": 204,
	"./fr.js": 205,
	"./fy": 206,
	"./fy.js": 206,
	"./gd": 207,
	"./gd.js": 207,
	"./gl": 208,
	"./gl.js": 208,
	"./gom-latn": 209,
	"./gom-latn.js": 209,
	"./he": 210,
	"./he.js": 210,
	"./hi": 211,
	"./hi.js": 211,
	"./hr": 212,
	"./hr.js": 212,
	"./hu": 213,
	"./hu.js": 213,
	"./hy-am": 214,
	"./hy-am.js": 214,
	"./id": 215,
	"./id.js": 215,
	"./is": 216,
	"./is.js": 216,
	"./it": 217,
	"./it.js": 217,
	"./ja": 218,
	"./ja.js": 218,
	"./jv": 219,
	"./jv.js": 219,
	"./ka": 220,
	"./ka.js": 220,
	"./kk": 221,
	"./kk.js": 221,
	"./km": 222,
	"./km.js": 222,
	"./kn": 223,
	"./kn.js": 223,
	"./ko": 224,
	"./ko.js": 224,
	"./ky": 225,
	"./ky.js": 225,
	"./lb": 226,
	"./lb.js": 226,
	"./lo": 227,
	"./lo.js": 227,
	"./lt": 228,
	"./lt.js": 228,
	"./lv": 229,
	"./lv.js": 229,
	"./me": 230,
	"./me.js": 230,
	"./mi": 231,
	"./mi.js": 231,
	"./mk": 232,
	"./mk.js": 232,
	"./ml": 233,
	"./ml.js": 233,
	"./mr": 234,
	"./mr.js": 234,
	"./ms": 236,
	"./ms-my": 235,
	"./ms-my.js": 235,
	"./ms.js": 236,
	"./my": 237,
	"./my.js": 237,
	"./nb": 238,
	"./nb.js": 238,
	"./ne": 239,
	"./ne.js": 239,
	"./nl": 241,
	"./nl-be": 240,
	"./nl-be.js": 240,
	"./nl.js": 241,
	"./nn": 242,
	"./nn.js": 242,
	"./pa-in": 243,
	"./pa-in.js": 243,
	"./pl": 244,
	"./pl.js": 244,
	"./pt": 246,
	"./pt-br": 245,
	"./pt-br.js": 245,
	"./pt.js": 246,
	"./ro": 247,
	"./ro.js": 247,
	"./ru": 248,
	"./ru.js": 248,
	"./sd": 249,
	"./sd.js": 249,
	"./se": 250,
	"./se.js": 250,
	"./si": 251,
	"./si.js": 251,
	"./sk": 252,
	"./sk.js": 252,
	"./sl": 253,
	"./sl.js": 253,
	"./sq": 254,
	"./sq.js": 254,
	"./sr": 256,
	"./sr-cyrl": 255,
	"./sr-cyrl.js": 255,
	"./sr.js": 256,
	"./ss": 257,
	"./ss.js": 257,
	"./sv": 258,
	"./sv.js": 258,
	"./sw": 259,
	"./sw.js": 259,
	"./ta": 260,
	"./ta.js": 260,
	"./te": 261,
	"./te.js": 261,
	"./tet": 262,
	"./tet.js": 262,
	"./th": 263,
	"./th.js": 263,
	"./tl-ph": 264,
	"./tl-ph.js": 264,
	"./tlh": 265,
	"./tlh.js": 265,
	"./tr": 266,
	"./tr.js": 266,
	"./tzl": 267,
	"./tzl.js": 267,
	"./tzm": 269,
	"./tzm-latn": 268,
	"./tzm-latn.js": 268,
	"./tzm.js": 269,
	"./uk": 270,
	"./uk.js": 270,
	"./ur": 271,
	"./ur.js": 271,
	"./uz": 273,
	"./uz-latn": 272,
	"./uz-latn.js": 272,
	"./uz.js": 273,
	"./vi": 274,
	"./vi.js": 274,
	"./x-pseudo": 275,
	"./x-pseudo.js": 275,
	"./yo": 276,
	"./yo.js": 276,
	"./zh-cn": 277,
	"./zh-cn.js": 277,
	"./zh-hk": 278,
	"./zh-hk.js": 278,
	"./zh-tw": 279,
	"./zh-tw.js": 279
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 463;


/***/ }),

/***/ 487:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ 488:
/***/ (function(module, exports) {

module.exports = "<section class=\"engine\"></section>\n<section class=\"mbr-box mbr-section mbr-section--relative mbr-section--fixed-size mbr-section--full-height mbr-section--bg-adapted mbr-parallax-background\" id=\"header1-2\" style=\"background-image: url(assets/images/edit.jpg);\">\n  <div class=\"mbr-box__magnet mbr-box__magnet--center-center mbr-after-navbar\">\n    <div class=\"container\">\n    \t<div class=\"row\">\n    \t\t<div class=\"full-width bg-transparent\">\n            <h1 class=\"text-center color\">Change your image</h1>\n\n        <div class=\"col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-xs-12\">\n            <div class=\"full-width\">\n            <input type=\"file\" id=\"base-input\" ng2FileSelect  [uploader]=\"uploader\" class=\"form-control form-input form-style-base\">\n            <input type=\"text\" id=\"fake-input\" class=\"form-control form-input form-style-fake\" placeholder=\"Choose your File\" readonly>\n            <span class=\"glyphicon glyphicon-open input-place\"></span>\n            <br><br><br><br>\n            <button class=\"btn btn-primary\" (click)=\"addImage()\"> Add image </button>\n        </div>\n            <div class=\"full-width\">\n                <h1 class=\"text-center color\">Edit your profile</h1>\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                    <div class=\"custom-form\">\n                    <div class=\"text-center bg-form\">\n                        <div class=\"img-section\">\n                            <img *ngIf=\"!this.user.image\" src=\"assets/images/profile1.png\"  class=\"imgCircle\" alt=\"Profile picture\">\n                            <img src={{this.user.image}} class=\"imgCircle\" alt=\"Profile picture\">\n                            <span class=\"fake-icon-edit\" id=\"PicUpload\" style=\"color: #ffffff;\"><span class=\"glyphicon glyphicon-camera camera\"></span></span>\n                        <div class=\"col-lg-12\">\n                        </div>\n                        </div>\n                        <input type=\"file\" id=\"image-input\" onchange=\"readURL(this);\" accept=\"image/*\" disabled class=\"form-control form-input Profile-input-file\" >\n                    </div>\n                    <div class=\"col-lg-12 col-md-12\">\n                        <input type=\"text\" class=\"form-control form-input\" [(ngModel)]=\"newUser.name\" name=\"name\" required id=\"name\" placeholder=\"name\">\n                        <span class=\"glyphicon glyphicon-user input-place\"></span>\n                    </div>\n                    <div class=\"col-lg-12 col-md-12\">\n                        <input type=\"text\" class=\"form-control form-input\" [(ngModel)]=\"newUser.lastName\" name=\"lastName\" placeholder=\"Last Name\" required id=\"name\">\n                        <span class=\"glyphicon glyphicon-user input-place\"></span>\n                    </div>\n                    <div class=\"col-lg-12 col-md-12\">\n                        <input type=\"number\" class=\"form-control form-input\" [(ngModel)]=\"newUser.age\" name=\"age\" required placeholder=\"age\" id=\"name\">\n                        <span class=\"glyphicon glyphicon-user input-place\"></span>\n                    </div>\n                    <div class=\"col-lg-12 col-md-12\">\n                        <input type=\"number\" class=\"form-control form-input\" [(ngModel)]=\"newUser.height\" name=\"height\" required placeholder=\"Height\" id=\"email\">\n                        <span class=\"glyphicon glyphicon-arrow-up input-place\"></span>\n                    </div>\n                    <div class=\"col-lg-12 col-md-12\">\n                        <input type=\"number\" class=\"form-control form-input\" [(ngModel)]=\"newUser.weigth\" name=\"weigth\" required placeholder=\"Weigth\" id=\"phone\">\n                        <span class=\"glyphicon glyphicon-scale input-place\"></span>\n                    </div>\n                    <div class=\"col-lg-12 col-md-12\">\n                        <input type=\"number\" class=\"form-control form-input\" [(ngModel)]=\"newUser.mass_muscle\" name=\"mass_muscle\" placeholder=\"Muscle %\" required id=\"place\">\n                        <span class=\"glyphicon glyphicon-stats input-place\"></span>\n                    </div>\n                    <div class=\"col-lg-12 col-md-12\">\n                        <input type=\"number\" class=\"form-control form-input\" [(ngModel)]=\"newUser.mass_water\" name=\"water\" required placeholder=\"Water %\" id=\"place\">\n                        <span class=\"glyphicon glyphicon-stats input-place\"></span>\n                    </div>\n                    <div class=\"col-lg-12 col-md-12\">\n                        <input type=\"number\" class=\"form-control form-input\" [(ngModel)]=\"newUser.mass_bone\" name=\"mass_bone\" required\n                      placeholder=\"Bone %\"  id=\"place\">\n                        <span class=\"glyphicon glyphicon-stats input-place\"></span>\n                    </div>\n                    <div class=\"col-lg-12 col-md-12\">\n                        <input type=\"number\" class=\"form-control form-input\" [(ngModel)]=\"newUser.mass_fat\" name=\"mass_fat\" required placeholder=\"Fat %\" id=\"place\">\n                        <span class=\"glyphicon glyphicon-stats input-place\"></span>\n                        <br>\n                    </div>\n                    <div class=\"col-lg-12 col-md-12 text-center\">\n                        <button class=\"btn btn-primary\" id=\"submit\" (click)=\"submit()\"><span class=\"glyphicon glyphicon-save\"></span> Save</button>\n                        <button class=\"btn btn-primary\" id=\"submit\" [routerLink]=\"['/profile']\"> Back to profile </button>\n                          <br><br>\n                    </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n        </div>\n\n    \t</div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ 489:
/***/ (function(module, exports) {

module.exports = "<section class=\"engine\"></section>\n<section class=\"mbr-box mbr-section mbr-section--relative mbr-section--fixed-size mbr-section--full-height mbr-section--bg-adapted mbr-parallax-background\" id=\"header1-2\" style=\"background-image: url(assets/images/routine1.jpg);\">\n  <div class=\"mbr-box__magnet mbr-box__magnet--center-center mbr-after-navbar\">\n    <div class=\"row block\">\n      <h1 align=\"center\"> WORKOUT OF THE DAY </h1>\n      <div id=\"exercises\" class=\"exercises hidden\">\n\n\n\n        <div class=\"flex-container column \" *ngIf=\"view\">\n          <div class=\"tab\">\n              <tabset [justified]=\"true\" #staticTabs>\n                <tab heading=\"CARDIO\">\n\n                    <h4 class=\"name\">{{ exercises[0].name }}</h4>\n                    <h5>level {{this.session.role}}</h5>\n                    <p *ngIf=\"this.session.role === 'BEGINNER'\"> 20 minutes 50% resistance</p>\n                    <p *ngIf=\"this.session.role === 'REGULAR'\"> 30 minutes 65% resistance</p>\n                    <p *ngIf=\"this.session.role === 'ADVANCED'\"> 30 minutes 65% resistance</p>\n                    <p role=\"menuitem\" [innerHTML]= \"exercises[0].description\"></p>\n                    <br>\n                    <p align=\"center\"><iframe align=\"center\"[src]=\"'https://www.youtube.com/embed/' + exercises[0].video_link.slice(32) | safe\" width=\"560\" height=\"315\" allowfullscreen></iframe></p>\n                </tab>\n                <tab heading=\"LEGS\">\n                  <h4 class=\"name\">{{ exercises[1].name }}</h4>\n                  <h5>level {{this.session.role}}</h5>\n                  <p *ngIf=\"this.session.role === 'BEGINNER'\"> 3 set of 10 rep at 60% 1M.R</p>\n                  <p *ngIf=\"this.session.role === 'REGULAR'\"> 3 set of 8 rep at 75% 1M.R</p>\n                  <p *ngIf=\"this.session.role === 'ADVANCED'\"> 3 set of 8 rep at 85 1M.R</p>\n\n                  <p role=\"menuitem\" [innerHTML]= \"exercises[1].description\"></p>\n                  <br>\n\n                  <p align=\"center\"><iframe align=\"center\"[src]=\"'https://www.youtube.com/embed/' + exercises[1].video_link.slice(32) | safe\" width=\"560\" height=\"315\" allowfullscreen></iframe></p>\n                </tab>\n                <tab heading=\"LEGS\">\n                    <h4 class=\"name\">{{ exercises[2].name }}</h4>\n                    <h5>level {{this.session.role}}</h5>\n                    <p *ngIf=\"this.session.role === 'BEGINNER'\"> 3 set of 10 rep at 60% 1M.R</p>\n                    <p *ngIf=\"this.session.role === 'REGULAR'\"> 3 set of 8 rep at 75% 1M.R</p>\n                    <p *ngIf=\"this.session.role === 'ADVANCED'\"> 3 set of 8 rep at 85 1M.R</p>\n                    <p role=\"menuitem\" [innerHTML]= \"exercises[2].description\"></p>\n                    <br>\n\n                    <p align=\"center\"><iframe align=\"center\"[src]=\"'https://www.youtube.com/embed/' + exercises[2].video_link.slice(32) | safe\" width=\"560\" height=\"315\" allowfullscreen></iframe></p>\n                </tab>\n                <tab heading=\"BACK\">\n                    <h4 class=\"name\">{{ exercises[3].name }}</h4>\n                    <h5>level {{this.session.role}}</h5>\n                    <p *ngIf=\"this.session.role === 'BEGINNER'\"> 3 set of 9 rep at 60% 1M.R</p>\n                    <p *ngIf=\"this.session.role === 'REGULAR'\"> 3 set of 6 rep at 75% 1M.R</p>\n                    <p *ngIf=\"this.session.role === 'ADVANCED'\"> 3 set of 6 rep at 85 1M.R</p>\n                    <p role=\"menuitem\" [innerHTML]= \"exercises[3].description\"></p>\n                    <br>\n\n                    <p align=\"center\"><iframe align=\"center\"[src]=\"'https://www.youtube.com/embed/' + exercises[3].video_link.slice(32) | safe\" width=\"560\" height=\"315\" allowfullscreen></iframe></p>\n                </tab>\n                <tab heading=\"SHOULDER\">\n                    <h4 class=\"name\">{{ exercises[4].name }}</h4>\n                    <h5>level {{this.session.role}}</h5>\n                    <p *ngIf=\"this.session.role === 'BEGINNER'\"> 3 set of 9 rep at 60% 1M.R</p>\n                    <p *ngIf=\"this.session.role === 'REGULAR'\"> 3 set of 6 rep at 75% 1M.R</p>\n                    <p *ngIf=\"this.session.role === 'ADVANCED'\"> 3 set of 6 rep at 85 1M.R</p>\n                    <p role=\"menuitem\" [innerHTML]= \"exercises[4].description\"></p>\n                    <br>\n\n                    <p align=\"center\"><iframe align=\"center\"[src]=\"'https://www.youtube.com/embed/' + exercises[4].video_link.slice(32) | safe\" width=\"560\" height=\"315\" allowfullscreen></iframe></p>\n                </tab>\n                <tab heading=\"CHEST\">\n                    <h4 class=\"name\">{{ exercises[5].name }}</h4>\n                    <h5>level {{this.session.role}}</h5>\n                    <p *ngIf=\"this.session.role === 'BEGINNER'\"> 3 set of 12 rep at 60% 1M.R</p>\n                    <p *ngIf=\"this.session.role === 'REGULAR'\"> 3 set of 10 rep at 75% 1M.R</p>\n                    <p *ngIf=\"this.session.role === 'ADVANCED'\"> 3 set of 8 rep at 85 1M.R</p>\n                    <p role=\"menuitem\" [innerHTML]= \"exercises[5].description\"></p>\n                    <br>\n\n                    <p align=\"center\"><iframe align=\"center\"[src]=\"'https://www.youtube.com/embed/' + exercises[5].video_link.slice(32) | safe\" width=\"560\" height=\"315\" allowfullscreen></iframe></p>\n                </tab>\n                <tab heading=\"BICEPS\">\n                    <h4 class=\"name\">{{ exercises[6].name }}</h4>\n                    <h5>level {{this.session.role}}</h5>\n                    <p *ngIf=\"this.session.role === 'BEGINNER'\"> 3 set of 12 rep at 60% 1M.R</p>\n                    <p *ngIf=\"this.session.role === 'REGULAR'\"> 3 set of 10 rep at 75% 1M.R</p>\n                    <p *ngIf=\"this.session.role === 'ADVANCED'\"> 3 set of 8 rep at 85 1M.R</p>\n                    <p role=\"menuitem\" [innerHTML]= \"exercises[6].description\"></p>\n                    <br>\n\n                    <p align=\"center\"><iframe align=\"center\"[src]=\"'https://www.youtube.com/embed/' + exercises[6].video_link.slice(32) | safe\" width=\"560\" height=\"315\" allowfullscreen></iframe></p>\n                </tab>\n                <tab heading=\"TRICEPS\">\n                    <h4 class=\"name\">{{ exercises[7].name }}</h4>\n                    <h5>level {{this.session.role}}</h5>\n                    <p *ngIf=\"this.session.role === 'BEGINNER'\"> 3 set of 9 rep at 60% 1M.R</p>\n                    <p *ngIf=\"this.session.role === 'REGULAR'\"> 3 set of 6 rep at 75% 1M.R</p>\n                    <p *ngIf=\"this.session.role === 'ADVANCED'\"> 3 set of 6 rep at 85 1M.R</p>\n                    <p role=\"menuitem\" [innerHTML]= \"exercises[7].description\"></p>\n                    <br>\n\n                    <p align=\"center\"><iframe align=\"center\"[src]=\"'https://www.youtube.com/embed/' + exercises[7].video_link.slice(32) | safe\" width=\"560\" height=\"315\" allowfullscreen></iframe></p>\n                </tab>\n                <tab heading=\"GLUTES\">\n                    <h4 class=\"name\">{{ exercises[8].name }}</h4>\n                    <h5>level {{this.session.role}}</h5>\n                    <p *ngIf=\"this.session.role === 'BEGINNER'\"> 3 set of 10 rep at 60% 1M.R</p>\n                    <p *ngIf=\"this.session.role === 'REGULAR'\"> 3 set of 8 rep at 75% 1M.R</p>\n                    <p *ngIf=\"this.session.role === 'ADVANCED'\"> 3 set of 8 rep at 85 1M.R</p>\n                    <p role=\"menuitem\" [innerHTML]= \"exercises[8].description\"></p>\n                    <br>\n\n                    <p align=\"center\"><iframe align=\"center\"[src]=\"'https://www.youtube.com/embed/' + exercises[8].video_link.slice(32) | safe\" width=\"560\" height=\"315\" allowfullscreen></iframe></p>\n                </tab>\n                <tab heading=\"ABS\">\n                    <h4 class=\"name\">{{ exercises[9].name }}</h4>\n                    <h5>level {{this.session.role}}</h5>\n                    <p *ngIf=\"this.session.role === 'BEGINNER'\"> 3 set of 10 rep at 60% 1M.R</p>\n                    <p *ngIf=\"this.session.role === 'REGULAR'\"> 3 set of 8 rep at 75% 1M.R</p>\n                    <p *ngIf=\"this.session.role === 'ADVANCED'\"> 3 set of 8 rep at 85 1M.R</p>\n                    <p role=\"menuitem\" [innerHTML]= \"exercises[9].description\"></p>\n                    <br>\n\n                    <p align=\"center\"><iframe align=\"center\"[src]=\"'https://www.youtube.com/embed/' + exercises[9].video_link.slice(32) | safe\" width=\"560\" height=\"315\" allowfullscreen></iframe></p>\n                </tab>\n                <tab heading=\"ABS\">\n                    <h4 class=\"name\">{{ exercises[10].name }}</h4>\n                    <h5>level {{this.session.role}}</h5>\n                    <p *ngIf=\"this.session.role === 'BEGINNER'\"> 3 set of 10 rep at 60% 1M.R</p>\n                    <p *ngIf=\"this.session.role === 'REGULAR'\"> 3 set of 8 rep at 75% 1M.R</p>\n                    <p *ngIf=\"this.session.role === 'ADVANCED'\"> 3 set of 8 rep at 85 1M.R</p>\n                    <p role=\"menuitem\" [innerHTML]= \"exercises[10].description\"></p>\n                    <br>\n\n                    <p align=\"center\"><iframe align=\"center\"[src]=\"'https://www.youtube.com/embed/' + exercises[10].video_link.slice(32) | safe\" width=\"560\" height=\"315\" allowfullscreen></iframe></p>\n                </tab>\n                <tab heading=\"CARDIO\">\n                    <h4 class=\"name\">{{ exercises[11].name }}</h4>\n                    <h5>level {{this.session.role}}</h5>\n                    <p *ngIf=\"this.session.role === 'BEGINNER'\"> 20 minutes 50% resistance</p>\n                    <p *ngIf=\"this.session.role === 'REGULAR'\"> 30 minutes 65% resistance</p>\n                    <p *ngIf=\"this.session.role === 'ADVANCED'\"> 30 minutes 65% resistance</p>\n                    <p role=\"menuitem\" [innerHTML]= \"exercises[11].description\"></p>\n                    <br>\n\n                    <p align=\"center\"><iframe align=\"center\"[src]=\"'https://www.youtube.com/embed/' + exercises[11].video_link.slice(32) | safe\" width=\"560\" height=\"315\" allowfullscreen></iframe></p>\n                </tab>\n              </tabset>\n          </div>\n\n            <button type=\"button\" class=\"btn btn-danger btn-lg\" (click)=\"done()\">DONE!!</button>\n\n\n        </div>\n        <div class=\"\" *ngIf=\"view === false\">\n          <h1>Ahora a descansar</h1>\n\n        </div>\n      </div>\n\n      <div id=\"spinner\">\n  <h1>We are creating your routine</h1>\n  <div id=\"line\" class=\"line\"></div>\n  <img src=\"assets/images/qsieaSz.gif\" alt=\"\"/>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ 490:
/***/ (function(module, exports) {

module.exports = "<section class=\"engine\"></section>\n<footer class=\"mbr-section mbr-section--relative mbr-section--fixed-size\" id=\"footer1-3\" style=\"background-color: rgb(14, 1, 1);\">\n\n    <div class=\"mbr-section__container container\">\n        <div class=\"mbr-footer mbr-footer--wysiwyg row\" style=\"padding-top: 49.2px; padding-bottom: 36.900000000000006px;\">\n            <div class=\"col-sm-12\">\n                <p class=\"mbr-footer__copyright\"></p><p>Powered on Ironhack Copyright (c) 2017 Full-Body Trainer. <a href=\"www.linkedin.com/in/hectorfernandezardura\">About us</a><a class=\"mbr-footer__link text-gray\" href=\"/\"></a>  | <a href=\"mailto:7.62metaljacket@gmail.com\">CONTACT</a><a class=\"mbr-footer__link text-gray\" href=\"\"></a></p><p></p>\n            </div>\n        </div>\n    </div>\n</footer>\n\n\n  <script src=\"assets/web/assets/jquery/jquery.min.js\"></script>\n  <script src=\"assets/bootstrap/js/bootstrap.min.js\"></script>\n  <script src=\"assets/smooth-scroll/smooth-scroll.js\"></script>\n  <script src=\"assets/jarallax/jarallax.js\"></script>\n  <script src=\"assets/mobirise/js/script.js\"></script>\n"

/***/ }),

/***/ 491:
/***/ (function(module, exports) {

module.exports = "<section class=\"mbr-box mbr-section mbr-section--relative mbr-section--fixed-size mbr-section--full-height mbr-section--bg-adapted mbr-parallax-background\" id=\"header1-2\" style=\"background-image: url(assets/images/proyecto-1.jpg);\">\n    <div class=\"mbr-box__magnet mbr-box__magnet--sm-padding mbr-box__magnet--center-left\">\n      <div class=\"mbr-overlay\" style=\"opacity: 0.5; background-color: rgb(124, 112, 107);\"></div>\n        <div class=\"mbr-box__container mbr-section__container container\">\n            <div class=\"mbr-box mbr-box--stretched\"><div class=\"mbr-box__magnet mbr-box__magnet--center-left\">\n                <div class=\"row\"><div class=\" col-sm-6 col-sm-offset-6\">\n                    <div class=\"mbr-hero animated fadeInUp\">\n                        <h1 class=\"mbr-hero__text\">TOTAL TRAINNING EVERY DAY</h1>\n                        <p class=\"mbr-hero__subtext\"></p><p>This is a muscle and strength building program for beginner and early intermediate lifters. It is designed to target all major and minor muscle groups, allowing you to maximize hypertrophy (the muscle building process) through the use of progressive resistance.<br><br>You will be every day, working with your own 1M.R, thant´s means how every routines, every day is totaly personalized for the most important here,\"YOU\".</p><p></p>\n                    </div>\n\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n    </div>\n</section>\n<section class=\"mbr-section mbr-section--relative mbr-section--fixed-size mbr-parallax-background\" id=\"content5-8\" style=\"background-image: url(assets/images/proyecto-3.png);\">\n    <div class=\"mbr-overlay\" style=\"opacity: 0.7; background-color: rgb(124, 112, 107);\"></div>\n    <div class=\"mbr-section__container container mbr-section__container--first\" style=\"padding-top: 93px;\">\n        <div class=\"mbr-header mbr-header--wysiwyg row\">\n            <div class=\"col-sm-8 col-sm-offset-2\">\n                <h3 class=\"mbr-header__text\">STEPS TO FOLLOW THIS TRAINNIG!</h3>\n\n            </div>\n        </div>\n    </div>\n    <div class=\"mbr-section__container container mbr-section__container--last\" style=\"padding-bottom: 93px;\">\n        <div class=\"row\">\n            <div class=\"mbr-article mbr-article--wysiwyg col-sm-8 col-sm-offset-2 text\"><ul><li><strong>CALCULATE YOUR 1M.R</strong></li></ul><p><br></p><p>Instructions: To calculate the maximum amount of weight that you can lift just once (also known as your \"one repetition maximum\" or \"1RM\") for any given type of weight lifting exercise, select a weight that you predict you can lift up to a maximum of 10 repetitions and perform a set with this chosen weight, completing as many repetitions as you can until failure (i.e. continue lifting until you can no longer lift the weight with proper form). If you exceed 10 repetitions before failure then, after resting for 10 minutes, try a heavier weight such that you fail before or at 10 repetitions.&nbsp;</p><p><br></p><ul><li><strong>DONT PANIC</strong></li></ul><p>This is a very hard routine, take it easy, train all you want, but for your security,</p><p>We only show you one routine each day.</p><p><br></p><ul><li><strong>EAT HEALTHY AND REST</strong></li></ul><p><br></p><p><em>Highlights</em></p><p><br></p><ol><li>Starting your day with breakfast can help give you the energy and nutrients you need for exercise.</li><li>Nutritious workout snacks can help you maintain your energy and nutrient levels.</li><li>Choose complex carbohydrates over refined alternatives.</li></ol><p><br></p><p>Eating a well-balanced diet can help you get the calories and nutrients you need to fuel your daily activities, including regular exercise. When it comes to eating foods to fuel your exercise performance, it’s not as simple as choosing vegetables over doughnuts. You need to get the right types of food at the right times of the day. Learn about the importance of healthy breakfasts, workout snacks, and meal plans.</p><p><br></p><p><br></p></div>\n        </div>\n    </div>\n\n</section>\n"

/***/ }),

/***/ 492:
/***/ (function(module, exports) {

module.exports = "<section class=\"mbr-box mbr-section mbr-section--relative mbr-section--fixed-size mbr-section--full-height mbr-section--bg-adapted mbr-parallax-background\" id=\"header1-2\" style=\"background-image: url(assets/images/log.jpg);\">\n\n\t<div class=\"col-md-3 col-md-offset-4\">\n\t\t<div class=\"panel panel-default\">\n\t\t  <div class=\"panel-body\">\n\t\t    <form>\n\t\t      <div class=\"form-group\">\n\t\t        <label for=\"InputUsername\">username</label>\n\t\t        <input type=\"email\" class=\"form-control\" id=\"InputUsername\" placeholder=\"username\" [(ngModel)]=\"user.username\" name=\"username\">\n\t\t      </div>\n\t\t      <div class=\"form-group\">\n\t\t        <label for=\"InputPassword\">Password</label>\n\t\t        <input type=\"password\" class=\"form-control\" id=\"InputPassword\" placeholder=\"Password\" [(ngModel)]=\"user.password\" name=\"password\">\n\t\t      </div>\n\t\t\t\t\t<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\">{{error}}</div>\n\t\t\t\t\t <div class=\"row\">\n\t\t\t\t\t\t\t <div class=\"col-md-6 col-sm-6 col-xs-6 col-lg-6\">\n\t\t\t\t\t\t\t\t<button class=\"btn btn-primary logbutton\"(click)=\"login()\">Login</button>\n\t\t\t\t\t\t\t </div>\n\t\t\t\t\t </div>\n\t\t    </form>\n\t\t  </div>\n\t\t</div>\n\t</div>\n</section>\n"

/***/ }),

/***/ 493:
/***/ (function(module, exports) {

module.exports = "<section class=\"engine\"></section>\n<section class=\"mbr-box mbr-section mbr-section--relative mbr-section--fixed-size mbr-section--full-height mbr-section--bg-adapted mbr-parallax-background\" id=\"header1-2\" style=\"background-image: url(assets/images/gyms.jpg);\">\n  <div class=\"mbr-box__magnet mbr-box__magnet--center-center mbr-after-navbar\">\n    <div class=\"container\">\n      <h1>These are the gyms near you</h1>\n      <div class=\"form-group\" class=\"hidden\">\n        <input placeholder=\"search for location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #search [formControl]=\"searchControl\">\n      </div>\n      <agm-map class=\"my-map\" [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\">\n        <div *ngFor=\"let resultado of resultados\">\n          <agm-marker [latitude]=\"resultado.geometry.location.lat()\" [longitude]=\"resultado.geometry.location.lng()\"></agm-marker>\n        </div>\n      </agm-map>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ 494:
/***/ (function(module, exports) {

module.exports = "<section class=\"mbr-navbar mbr-navbar--freeze mbr-navbar--absolute mbr-navbar--sticky mbr-navbar--auto-collapse\" id=\"ext_menu-4\">\n    <div class=\"mbr-navbar__section mbr-section\">\n        <div class=\"mbr-section__container container\">\n            <div class=\"mbr-navbar__container\" >\n                <div class=\"mbr-navbar__column mbr-navbar__column--s mbr-navbar__brand\">\n                    <span class=\"mbr-navbar__brand-link mbr-brand mbr-brand--inline\">\n                        <span class=\"mbr-brand__logo\"><img\n                         src=\"assets/images/icons-about-gymnastics_1212-34.png\" class=\"mbr-navbar__brand-img mbr-brand__img\" alt=\"Mobirise\"></span>\n                        <span class=\"mbr-brand__name\"><a class=\"mbr-brand__name text-white\" href=\"/\">FULL-BODY TODAY</a></span>\n                    </span>\n                </div>\n\n                <div class=\"mbr-navbar__hamburger mbr-hamburger\" (click)=\"isCollapsed = !isCollapsed\">\n                  <span class=\"mbr-hamburger__line\"></span>\n                </div>\n                <div class=\"mbr-navbar__column mbr-navbar__menu collapse navbar-collapse\" [collapse]=\"isCollapsed\">\n                    <nav class=\"mbr-navbar__menu-box mbr-navbar__menu-box--inline-right\" >\n                        <div class=\"mbr-navbar__column\">\n                          <ul class=\"nav navbar-nav navbar-right\">\n                            <li *ngIf=\"this.session.isAuth\"><a [routerLink]=\"['profile']\">WELLcome: {{ this.session.user }}</a></li>\n                            <li *ngIf=\"!this.session.isAuth\"><a [routerLink]=\"['map']\">GYMS</a></li>\n                            <li *ngIf=\"this.session.isAuth\"><a [routerLink]=\"['map']\">GYMS</a></li>\n                            <li *ngIf=\"this.session.isAuth\"><a [routerLink]=\"['/exercise']\">Rutine</a></li>\n                            <li *ngIf=\"!this.session.isAuth\"><a [routerLink]=\"['login']\">Login</a></li>\n                            <li *ngIf=\"this.session.isAuth\"><a (click)=\"logout()\">Logout</a></li>\n                            <li *ngIf=\"!this.session.isAuth\"><a [routerLink]=\"['signup']\">Signup</a></li>\n                          </ul>\n\n                        </div>\n                    </nav>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ 495:
/***/ (function(module, exports) {

module.exports = "<section class=\"engine\"></section>\n<section class=\"mbr-box mbr-section mbr-section--relative mbr-section--fixed-size mbr-section--full-height mbr-section--bg-adapted mbr-parallax-background\" id=\"header1-2\" style=\"background-image: url(assets/images/profile.jpg);\">\n  <div class=\"mbr-box__magnet mbr-box__magnet--center-center mbr-after-navbar\">\n    <div class=\"container\">\n    \t<div class=\"row\">\n    \t\t<div class=\"col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6\">\n        \t <div class=\"well profile\">\n                <div class=\"col-sm-12\">\n                    <div class=\"col-xs-12 col-sm-8\">\n                        <h2>{{this.user.username}}</h2>\n                        <h3>{{this.user.name}}</h3>\n                        <h4><h3>{{this.user.lastName}}</h3></h4>\n                        <p><strong>age: </strong> {{this.user.age}}</p>\n                        <p><strong>heigth: </strong> {{this.user.height}} </p>\n                        <p><strong>weigth: </strong>{{this.user.weigth}}</p>\n                        <div class=\"btn-group dropup btn-block\">\n                          <button type=\"button\" class=\"btn btn-primary\" (click)=\"isCollapsed = !isCollapsed\"> Tecnical Dates </button>\n                          <ul class=\"dropdown-menu text-left \" [collapse]=\"isCollapsed\" role=\"menu\">\n                            <li><a><span class=\"fa fa-envelope pull-right\"></span>Muscle Mass: {{this.user.mass_muscle}}% </a></li>\n                            <li class=\"divider\"></li>\n                            <li><a><span class=\"fa fa-list pull-right\"></span>Water Mass: {{this.user.mass_water}}% </a></li>\n                            <li class=\"divider\"></li>\n                            <li><a><span class=\"fa fa-warning pull-right\"></span>Bone Mass: {{this.user.mass_bone}}%</a></li>\n                            <li class=\"divider\"></li>\n                            <li><a><span class=\"fa fa-warning pull-right\"></span>Fat Mass: {{this.user.mass_fat}}%</a></li>\n                          </ul>\n                          <br><br>\n                        </div>\n\n\n\n                    </div>\n                    <div class=\"col-xs-12 col-sm-4 text-center\" *ngIf=\"!this.user.image\">\n                        <figure>\n                            <img src=\"assets/images/profile1.png\" alt=\"\" class=\"img-circle img-responsive\">\n\n                        </figure>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-4 text-center\">\n                        <figure>\n                            <img src={{this.user.image}} alt=\"\" class=\"img-circle img-responsive\">\n                            <h4>Level: {{this.user.role}}</h4>\n                        </figure>\n                    </div>\n                </div>\n                <div class=\"col-xs-12 divider text-center\">\n                    <div class=\"col-xs-12 col-sm-4 emphasis\">\n\n                    </div>\n                    <div class=\"col-xs-12 col-sm-4 emphasis\">\n                      <h2><strong> {{this.user.count_total}} </strong></h2>\n                      <p><small>WorkOuts Realiced</small></p>\n                        <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/edit']\">Edit Profile</button>\n                    </div>\n\n                </div>\n        \t </div>\n    \t\t</div>\n    \t</div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ 496:
/***/ (function(module, exports) {

module.exports = "<section class=\"mbr-box mbr-section mbr-section--relative mbr-section--fixed-size mbr-section--full-height mbr-section--bg-adapted mbr-parallax-background\" id=\"header1-2\" style=\"background-image: url(assets/images/sign.jpg);\">\n\n\t<div class=\"col-md-3 col-md-offset-4\">\n\t\t<div class=\"panel panel-default\">\n\t\t  <div class=\"panel-body\">\n\t\t    <form>\n\t\t      <div class=\"form-group\">\n\t\t        <label for=\"InputUsername\">username</label>\n\t\t        <input type=\"text\" class=\"form-control\" id=\"InputUsername\" placeholder=\"username\" [(ngModel)]=\"newUser.username\" name=\"username\">\n\t\t      </div>\n\t\t      <div class=\"form-group\">\n\t\t        <label for=\"InputPassword\">Password</label>\n\t\t        <input type=\"password\" class=\"form-control\" id=\"InputPassword\" placeholder=\"Password\" [(ngModel)]=\"newUser.password\" name=\"password\">\n\t\t      </div>\n\t\t      <button type=\"submit\" class=\"btn btn-default btn-primary\" (click)=\"signup()\">Signup</button>\n\t\t    </form>\n\t\t  </div>\n\t\t</div>\n\t</div>\n</section>\n"

/***/ }),

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(381);


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileService = (function () {
    function ProfileService(http, SessionService) {
        this.http = http;
        this.SessionService = SessionService;
        this.BASE_URL = 'http://localhost:3000/api';
    }
    // get(id) {
    //   let headers = new Headers({ 'Authorization': 'JWT ' + this.SessionService.token });
    //   let options = new RequestOptions({ headers: headers });
    //   return this.http.get(`${this.BASE_URL}/profile/${id}`, options)
    //     .map((res) => res.json());
    // }
    ProfileService.prototype.edit = function (users) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'JWT ' + this.SessionService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.BASE_URL + "/profile/" + users.id, users, options)
            .map(function (res) { return res.json(); });
    };
    return ProfileService;
}());
ProfileService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */]) === "function" && _b || Object])
], ProfileService);

var _a, _b;
//# sourceMappingURL=profile.service.js.map

/***/ })

},[759]);
//# sourceMappingURL=main.bundle.js.map