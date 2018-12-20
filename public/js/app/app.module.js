var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from "@angular/forms";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HederComponent } from "./heder.component";
import { routing } from "./app.routing";
import { HttpModule } from "@angular/http";
import { AuthService } from "./auth/auth.service";
import { ErrorComponent } from "./errors/error.component";
import { ErrorService } from "./errors/error.service";
import { MessageModule } from "./messages/message.module";
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
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
        providers: [AuthService, ErrorService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
