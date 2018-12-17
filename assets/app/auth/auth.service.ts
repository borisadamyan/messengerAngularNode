import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

import {User} from "./user.model";
import {ErrorService} from "../errors/error.service";

@Injectable()
export class AuthService {
    constructor(private http: Http, private errorService: ErrorService) {
    }

    signUp(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-type': 'application/json'});
        return this.http.post('http://localhost:3000/user', user, {headers: headers})
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json())
            });
    }

    signIn(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-type': 'application/json'});
        return this.http.post('http://localhost:3000/user/signin', user, {headers: headers})
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json())
            });
    }

    logout(){
        localStorage.clear();
    }
    isLoggedIn(){
        return localStorage.getItem('token') !== null;
    }
}