import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "./auth.service";
import {User} from "./user.model";



@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

    myForm: FormGroup;

    constructor(private authService: AuthService){}

    ngOnInit() {
        this.myForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required),
        })
    }

    onSubmit() {
        console.log(this.myForm);
        const user = new User(
            this.myForm.value.email,
            this.myForm.value.firstName,
            this.myForm.value.lastName,
            this.myForm.value.password,
        );

        this.authService.signUp(user)
            .subscribe(
                data => console.log(data),
                err => console.log(err),
            );

        this.myForm.reset();
    }

}