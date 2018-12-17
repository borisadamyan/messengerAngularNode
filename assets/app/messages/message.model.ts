export class  Message {
    content: string;
    username: string;
    messageId?: string;
    userId?: string;

    constructor(public content:string, public username:string, public messageId?:string, public userId?:string){
        this.content = content;
        this.username = username;
        this.userId = userId;
        this.messageId = messageId;
    }
}