export class Message {
    content: string;
    username: string;
    messageId?: string;
    userId?: string;

    constructor(private content: string, private username: string, private messageId?: string, private userId?: string) {
        this.content = content;
        this.username = username;
        this.userId = userId;
        this.messageId = messageId;
    }
}