var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Http } from "@angular/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import { Message } from "./message.model";
import { ErrorService } from "../errors/error.service";
import { Headers } from '@angular/http';
let MessageService = class MessageService {
    constructor(http, errorService) {
        this.http = http;
        this.errorService = errorService;
        this.messages = [];
        this.messageIsEdit = new EventEmitter();
        this.serverUrl = 'https://mean-node-app.herokuapp.com';
        this.localServerUrl = 'http://localhost:3000';
    }
    addMessage(message) {
        console.log(message);
        const body = JSON.stringify(message);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post(this.serverUrl + '/message' + token, message, { headers: headers })
            .map((response) => {
            const result = response.json();
            console.log(result);
            const message = new Message(result.obj.content, result.obj.user.firstName, result.obj._id, result.obj.user._id);
            this.messages.push(message);
            return message;
        })
            .catch((error) => {
            console.log('add');
            this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    }
    getMessage() {
        return this.http.get(this.serverUrl + '/message')
            .map((response) => {
            const messages = response.json().obj;
            let transformedMessages = [];
            for (let message of messages) {
                transformedMessages.push(new Message(message.content, message.user.firstName, message._id, message.user._id));
            }
            this.messages = transformedMessages;
            console.log(transformedMessages);
            return transformedMessages;
        })
            .catch((error) => {
            console.log('get');
            this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    }
    editMessage(message) {
        this.messageIsEdit.emit(message);
    }
    updateMessage(message) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const body = JSON.stringify(message);
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.patch(this.serverUrl + '/message/' + message.messageId + token, message, { headers: headers })
            .map((response) => response.json())
            .catch((error) => {
            console.log('update');
            this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    }
    deleteMessage(message) {
        console.log(this.messages);
        console.log(message.messageId);
        console.log(message);
        const body = JSON.stringify(message);
        this.messages.splice(this.messages.indexOf(message), 1);
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.delete(this.serverUrl + '/message/' + message.messageId + token)
            .map((response) => response.json())
            .catch((error) => {
            console.log('delete');
            this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    }
};
MessageService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http, ErrorService])
], MessageService);
export { MessageService };
