import {Message} from "./message.model";
import {Http, Response} from "@angular/http";
import {EventEmitter, Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {ErrorService} from "../errors/error.service";


@Injectable()
export class MessageService {

    private messages: Message[] = [];
    messageIsEdit = new EventEmitter<Message>();
    serverUrl = 'https://mean-node-app.herokuapp.com';
    localServerUrl = 'http://localhost:3000';

    constructor(private http: Http, private errorService: ErrorService) {
    }

    addMessage(message: Message) {
        console.log(message);
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post(this.serverUrl + '/message' + token, message, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                console.log(result);
                const message = new Message(
                    result.obj.content,
                    result.obj.user.firstName,
                    result.obj._id,
                    result.obj.user._id);
                this.messages.push(message);
                return message;
            })
            .catch((error: Response) => {
            console.log('add');
            this.errorService.handleError(error.json());
            return Observable.throw(error.json())
            });
    }

    getMessage() {
        return this.http.get(this.serverUrl + '/message')
            .map((response: Response) => {
                const messages = response.json().obj;
                let transformedMessages: Message[] = [];
                for (let message of messages) {
                    transformedMessages.push(new Message(
                        message.content,
                        message.user.firstName,
                        message._id,
                        message.user._id))
                }
                this.messages = transformedMessages;
                console.log(transformedMessages);
                return transformedMessages;
            })
            .catch((error: Response) => {
            console.log('get');
                this.errorService.handleError(error.json());
                return Observable.throw(error.json())
            });
    }

    editMessage(message: Message) {
        this.messageIsEdit.emit(message);
    }

    updateMessage(message: Message) {
        const headers = new Headers({'Content-Type': 'application/json'});
        const body = JSON.stringify(message);
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.patch(this.serverUrl + '/message/' + message.messageId + token, message, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
            console.log('update');
                this.errorService.handleError(error.json());
                return Observable.throw(error.json())
            });
    }

    deleteMessage(message: Message) {
        console.log(this.messages);
        console.log(message.messageId);
        console.log(message);
        const body = JSON.stringify(message);
        this.messages.splice(this.messages.indexOf(message), 1);
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.delete(this.serverUrl + '/message/' + message.messageId + token)
            .map((response: Response) => response.json())
            .catch((error: Response) => {
            console.log('delete');
                this.errorService.handleError(error.json());
                return Observable.throw(error.json())
            });
    }
}