export class Message {
    constructor(content, username, messageId, userId) {
        this.content = content;
        this.username = username;
        this.userId = userId;
        this.messageId = messageId;
    }
}
