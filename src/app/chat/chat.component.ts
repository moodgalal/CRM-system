// import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
// import {ChatService} from './chat.service'
//
//
// @Component({
//   selector: 'app-chat',
//   templateUrl: './chat.component.html',
//   styleUrls: ['./chat.component.scss']
// })
//
// export class ChatComponent implements OnInit, AfterViewInit {
//   @ViewChild('chatContent') chatContent: ElementRef;
//   msg: string;
//   messages = [];
//
//   constructor(private chat: ChatService) { }
//
//   ngOnInit() {
//     this.chat.getMessage().subscribe(res => {
//       console.log(res);
//       this.messages.push(res);
//     });
//   }
//
//   ngAfterViewInit() {
//     this.scrollToBottom();
//   }
//
//   scrollToBottom(): void {
//     try {
//       this.chatContent.nativeElement.scrollTop = this.chatContent.nativeElement.scrollHeight;
//     } catch(err) {
//       console.log(err);
//     }
//   }
//
//   sendMsg() {
//     this.chat.sendMessage(this.msg);
//     // this.messages.push({message: this.msg, rec_class: false});
//     this.msg = '';
//     console.log(this.messages);
//     this.scrollToBottom();
//   }
//
// }
