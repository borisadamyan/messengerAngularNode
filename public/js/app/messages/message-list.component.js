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
import { MessageService } from "./message.service";
let MessageListComponent = class MessageListComponent {
    constructor(messageService) {
        this.messageService = messageService;
        this.messages = [];
    }
    ngOnInit() {
        this.messageService.getMessage()
            .subscribe((messages) => {
            console.log(messages);
            this.messages = messages;
        });
    }
};
MessageListComponent = __decorate([
    Component({
        selector: 'app-messages-list',
        template: `
        <div class="col-md-8 col-md-offset-2">
            <app-message
                    [message]="msg"
                    *ngFor="let msg of messages"
            ></app-message>
        </div>
    `,
    }),
    __metadata("design:paramtypes", [MessageService])
], MessageListComponent);
export { MessageListComponent };
