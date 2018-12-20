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
import { Message } from "./message.model";
let MessageInputComponent = class MessageInputComponent {
    constructor(messageService) {
        this.messageService = messageService;
    }
    onSubmit(form) {
        // console.log(form);
        if (this.message) {
            // Edit
            this.message.content = form.value.content;
            this.messageService.updateMessage(this.message)
                .subscribe(result => console.log(result));
            this.message = null;
        }
        else {
            // Create
            const message = new Message(form.value.content, 'Boris');
            this.messageService.addMessage(message)
                .subscribe(data => {
                console.log(data);
            }, error => {
                console.log(error);
            });
            form.resetForm();
        }
    }
    onClear(form) {
        this.message = null;
        form.resetForm();
    }
    ngOnInit() {
        this.messageService.messageIsEdit.subscribe((message) => this.message = message);
    }
};
MessageInputComponent = __decorate([
    Component({
        selector: 'app-messages-input',
        templateUrl: './message-input.component.html',
    }),
    __metadata("design:paramtypes", [MessageService])
], MessageInputComponent);
export { MessageInputComponent };
