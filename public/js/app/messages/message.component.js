var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from "@angular/core";
import { Message } from "./message.model";
import { MessageService } from "./message.service";
let MessageComponent = class MessageComponent {
    constructor(messageService) {
        this.messageService = messageService;
    }
    onEdit() {
        this.messageService.editMessage(this.message);
    }
    onDelete() {
        console.log(this.message);
        this.messageService.deleteMessage(this.message).subscribe(data => {
            console.log(data);
        });
    }
    belongsToUser() {
        return localStorage.getItem('userId') == this.message.userId;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Message)
], MessageComponent.prototype, "message", void 0);
MessageComponent = __decorate([
    Component({
        selector: 'app-message',
        templateUrl: './message.component.html',
        styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }

        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `]
    }),
    __metadata("design:paramtypes", [MessageService])
], MessageComponent);
export { MessageComponent };
