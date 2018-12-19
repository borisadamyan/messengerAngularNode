import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthenticationComponent} from "./auth/authentication.component";
import {HederComponent} from "./heder.component";
import {routing} from "./app.routing";
import {HttpModule} from "@angular/http";
import {AuthService} from "./auth/auth.service";
import {ErrorComponent} from "./errors/error.component";
import {ErrorService} from "./errors/error.service";
import {MessageModule} from "./messages/message.module";


@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HederComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule,
        routing,
        ReactiveFormsModule,
        HttpModule,
        MessageModule
    ],
    providers:[AuthService, ErrorService],
    bootstrap: [AppComponent]
})
export class AppModule {

}