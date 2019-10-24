import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/message/messages.service';
import { Message, MessageType } from '../classes';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.less'],
})
export class MessageComponent implements OnInit {
  public listOfAllMessage = [];
  public messageTypes = MessageType;

  constructor(private message: MessagesService) { }

  ngOnInit() {
    this.listenToMessage();
  }

  // listens to any observable of message
  private listenToMessage() {
    this.message.getMessage()
      .subscribe((message: Message) => {
        // push it in array message
        this.listOfAllMessage.push(message);

        this.removeMessage();
      }, error => {
        console.log(error);
      });
  }

  // after every 2 secs remove messages
  public removeMessage() {
    setTimeout(() => {
      this.listOfAllMessage.shift();
    }, 5000);
  }

}
