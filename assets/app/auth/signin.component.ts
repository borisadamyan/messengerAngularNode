import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

import {User} from "./user.model";
@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {
    myForm: FormGroup;

    constructor(private authService: AuthService, private router: Router){}

    ngOnInit() {
        this.myForm = new FormGroup({
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required),
        })
    }

    onSubmit() {
        console.log(this.myForm);
        const user = new User(
                this.myForm.value.email,
                this.myForm.value.password
        );
        console.log(user);
        this.authService.signIn(user).subscribe(
            data => {
                console.log(data);
                localStorage.setItem('token', data.json().token);
                localStorage.setItem('userId', data.json().userId);
                this.router.navigateByUrl('/');
            },
            error => {
                console.log(error);
            }
        )

        // this.myForm.reset();
    }
}