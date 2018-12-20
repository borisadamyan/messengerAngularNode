var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { User } from "./user.model";
let SigninComponent = class SigninComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.myForm = new FormGroup({
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required),
        });
    }
    onSubmit() {
        console.log(this.myForm);
        const user = new User(this.myForm.value.email, this.myForm.value.password);
        console.log(user);
        this.authService.signIn(user).subscribe(data => {
            console.log(data);
            localStorage.setItem('token', data.json().token);
            localStorage.setItem('userId', data.json().userId);
            this.router.navigateByUrl('/');
        }, error => {
            console.log(error);
        });
        // this.myForm.reset();
    }
};
SigninComponent = __decorate([
    Component({
        selector: 'app-signin',
        templateUrl: './signin.component.html'
    }),
    __metadata("design:paramtypes", [AuthService, Router])
], SigninComponent);
export { SigninComponent };
