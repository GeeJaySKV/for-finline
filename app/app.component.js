"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var gallery_component_1 = require('./gallery/gallery.component');
var AppComponent = (function () {
    function AppComponent() {
        this.guest = 'Гость';
        this.logIn = function () {
            this.loginInput = document.getElementById('login');
            this.nickname = this.loginInput.value;
            this.passwordInput = document.getElementById('password');
            this.password = this.passwordInput.value;
            if (this.nickname === 'admin' && this.password === 'admin') {
                var temp1 = document.getElementById('logBtn');
                var temp2 = document.getElementById('regBtn');
                document.getElementById('nick').style.color = 'red';
                temp1.remove();
                temp2.remove();
                this.loginInput.remove();
                this.passwordInput.remove();
                var temp = new gallery_component_1.GalleryComponent();
                temp.adminGalleryShow();
            }
            else if (this.nickname === 'admin' && this.password !== 'admin') {
                alert('Проверьте пароль');
                this.nickname = '';
                this.password = '';
            }
            else if (this.nickname === '' || this.password === '') {
                alert('Введите логин и пароль');
                this.nickname = '';
                this.password = '';
            }
            else {
                var temp1 = document.getElementById('logBtn');
                var temp2 = document.getElementById('regBtn');
                temp1.remove();
                temp2.remove();
                this.loginInput.remove();
                this.passwordInput.remove();
                var temp = new gallery_component_1.GalleryComponent();
                temp.userGalleryShow();
            }
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: "./app/app.component.html",
            styleUrls: ["./app/app.component.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map