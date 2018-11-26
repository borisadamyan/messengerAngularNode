import {Component} from "@angular/core";


@Component({
    selector: 'app-messages',
    template: `
        <div class="row">
            <app-messages-input></app-messages-input>
        </div>
        <hr>
        <div class="row">
            <app-messages-list></app-messages-list>
        </div>
    `
})
export class MessagesComponent{



}