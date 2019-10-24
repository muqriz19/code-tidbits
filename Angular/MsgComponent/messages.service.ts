import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Message, MessageType } from '../../shared/classes';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  public messageSubject = new Subject<Message>();
  constructor() { }

  // show info message
  // for component to consume
  public info(message: string) {
    this.showNotifcation(message, MessageType.Info);
  }

  // show warn message
  // for component to consume
  public warn(message: string) {
    this.showNotifcation(message, MessageType.Warning);
  }

  // show success message
  // for component to consume
  public success(message: string) {
    this.showNotifcation(message, MessageType.Success);
  }

  // show error message
  // for component to consume
  public error(message: string) {
    this.showNotifcation(message, MessageType.Error);
  }

  // pass message to subject
  private showNotifcation(message: string, messageType: MessageType) {
    this.messageSubject.next(<Message>{ type: messageType, message: message });
  }

  // return obseverable
  public getMessage() {
    return this.messageSubject.asObservable();
  }
}
