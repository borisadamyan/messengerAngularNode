var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import { ErrorService } from "../errors/error.service";
let AuthService = class AuthService {
    constructor(http, errorService) {
        this.http = http;
        this.errorService = errorService;
        this.serverUrl = 'https://mean-node-app.herokuapp.com';
        this.localServerUrl = 'http://localhost:3000';
    }
    signUp(user) {
        const body = JSON.stringify(user);
        const headers = new Headers({ 'Content-type': 'application/json' });
        return this.http.post(this.serverUrl + '/user', user, { headers: headers })
            .catch((error) => {
            this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    }
    signIn(user) {
        const body = JSON.stringify(user);
        const headers = new Headers({ 'Content-type': 'application/json' });
        return this.http.post(this.serverUrl + '/user/signin', user, { headers: headers })
            .catch((error) => {
            this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    }
    logout() {
        localStorage.clear();
    }
    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }
};
AuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http, ErrorService])
], AuthService);
export { AuthService };
