import {Component, OnInit} from "@angular/core";
import {Message} from "./message.model";
import {MessageService} from "./message.service";
@Component({
    selector: 'app-messages-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <app-message
                    [message]="msg"
                    (editClicked)="msg.content = $event"
                    *ngFor="let msg of messages"
            ></app-message>
        </div>
    `,
})

export class MessageListComponent implements OnInit {

    messages: Message[] = [];

    constructor(private messageService: MessageService) {
    }

    ngOnInit() {
        this.messages = this.messageService.getMessage();
    }

}