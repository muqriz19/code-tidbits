export class Message {
    public type: MessageType;
    public message: string;
}

export enum MessageType {
    Success,
    Error,
    Info,
    Warning
}