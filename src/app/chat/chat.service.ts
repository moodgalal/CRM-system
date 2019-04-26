// import {Injectable} from '@angular/core';
// import {Socket} from 'ng-socket-io'
// import 'rxjs/add/operator/map';
//
//
// @Injectable()
// export class ChatService {
//    room = "test2";
//    client_name = "Mohamed";
//   constructor(private socket: Socket) {  }
//
//   sendMessage(msg: string){
//     this.socket.emit('add_child',{roomId: this.room ,name: this.client_name, message: msg});
//   }
//
//   getMessage() {
//     console.log(`in get message service`);
//     return this.socket
//       .fromEvent("child_added")
//       .map(data => data);
//   }
// }
