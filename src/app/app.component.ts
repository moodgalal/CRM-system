import { Component, ViewChild, ElementRef, AfterViewInit, ErrorHandler, ViewChildren, QueryList, OnInit } from '@angular/core';
import { KaizenService } from "./providers/kaizen/kaizen.service";
import {DashboardService} from "./dashboard/DashboardService";
import { Spinkit } from 'ng-http-loader/spinkits';
import { ActivatedRoute, Router, NavigationEnd} from "@angular/router";
import 'rxjs/add/operator/filter';
import * as screenfull from 'screenfull';
import { PublicSetting, PublicShared } from "./models/PublicShared";

import {Idle, DEFAULT_INTERRUPTSOURCES} from '@ng-idle/core';
//Chat
import * as io from "socket.io-client";
interface Dictionary<T> {
  [Key: string]: T;
}
interface ChatUser{
  name: string;
  client_id: string;
  socket_id: string;
  status?: string;
}

interface Message {
  message: string;
  owner: string;
  client_id: string;
  byMe?:boolean;
}

interface ChatBox {
  messages?: Array<Message>;
  client_id: string;
  owner: string;
  socket_id: string;
  status: string;
}
//EOF Chat Declaration
declare var $: any;
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, ErrorHandler {
  subscribersCounter: number;

  //Chat Config
  token;
  room;
  client_id;
  client_name;

  @ViewChildren('ViewHolder') ViewHolder: QueryList<any>;
  @ViewChild('chatContent') chatContent: ElementRef;
  PublicShared = PublicShared;
  public Test: string = "Testing Val";
  customSpinner = Spinkit.skWanderingCubes;
  listTypes: Array<any> = [];
  listModules: Array<any> = [];
  listMenu: Array<any> = [];
  // breadcrumb: string = null;
  //currentUrl: string;
  selectedListModule: any;
  secondDropDown: any = 1;
  searchedData: Array<any> = [];
  PublicSearchValue;
  UserData;
  //Chat
  socket;
  chatUsers:  Dictionary<ChatUser> = {};
  chatBoxes:  Dictionary<ChatBox> = {};
  Object = Object;
  //EOF Chat
  src: any;
  sub: any;
  value = null;
  testData = ['x', 'y', 'z'];
  isMenuNavigation: boolean = false;
  public static isGrid: boolean = false;
  public static updateNavbar: Subject<boolean> = new Subject();

  constructor(public Setting: PublicSetting,
              private service: KaizenService,
              private dashboardService: DashboardService,
              public route: Router,
              public activeRoute: ActivatedRoute,
              private idle: Idle
  ) {
    //this.currentUrl = this.route.url;
    //console.log(this.UserData);

    //console.log("route");
    //console.log(this.route);



      this.route.events.filter(event => event instanceof NavigationEnd).subscribe((event: any) => {
          // this.breadcrumb = this.activeRoute.snapshot.children[0].data.breadcrumb;
        this.Setting.breabcrumbTitle = this.activeRoute.snapshot.children[0].data.breadcrumb;
        });

      if (localStorage.getItem("CompanyProfile")) {
        this.getMyDashbaord();
        this.idleCountDown();
      }
  }


  navigateTo(path, params, menuItem) {
    console.log(menuItem);
    console.log(menuItem.MenuName);
    this.Setting.breabcrumbTitle = menuItem.MenuName;
    this.route.navigate([`/${path}/${params}`])
  }


  refreshPage() {
    window.location.reload();
  }


  closePage() {
    this.route.navigate(['/'])
  }

  handleError(error) {
    console.log(error);
  }


  //================================================ Chat Start - Mohamed Hisham
  public sendMsg(client_id,elem,item:ChatBox)
  {
    if(this.chatUsers[client_id])
    {
      var m = elem.target.value;
      var socketId = this.chatUsers[client_id].socket_id;
      this.socket.emit('add_child',{roomId: socketId ,name: item.owner, message: m});
      let myMessage:Message = {
        message: m,
        owner:"Me",
        client_id: this.client_id
      }
      if(!this.chatBoxes[client_id].messages)
      {
        this.chatBoxes[client_id].messages = [];
      }
      this.chatBoxes[client_id].messages.push(myMessage);
      console.log('SEND TO '+client_id ,item);
      elem.target.value = "";
      this.scrollToBottom();
    }else{
      console.log("Not found");
    }
  }
  openBox(user:ChatUser)
  {
    if(this.chatBoxes[""+user.client_id+""] == undefined)
    {
      var chatb:ChatBox = {
        client_id : user.client_id,
        owner: user.name,
        socket_id: user.socket_id,
        status: user.status,
        messages:[]
      };
      this.chatBoxes[""+user.client_id+""] = chatb;
    }
  }

  closeChatBox(chatBox) {
    //socket_id -
    for(let chatBox in this.chatBoxes) {
      if(this.chatBoxes[chatBox].socket_id) {
        delete this.chatBoxes[chatBox];
      }
    }
  }

  hChat()
  {
    console.log('Try Chat');
    if(this.UserData != {} && this.UserData.chatStatus == true)
    {
      console.log('yes Chat working');
      this.token = this.UserData.UserName.trim();
      this.room = "private1";
      this.client_id = this.UserData.UserName.trim();
      this.client_name = this.UserData.FullName.trim()?this.UserData.FullName.trim():this.UserData.UserName.trim();

      this.socket = io('http://localhost:8800',{query:"access_token="+this.token+"&room="+this.room+"&client_id="+this.client_id+"&display_name="+this.client_name});
      // var client_id = sessionStorage.getItem('clientId');
      this.socket.on("user_update", (function (data)
      {
        if(data.client_id == this.client_id){
          return;
        }
        console.log("Hello Chat",data);
        //User added
        this.chatUsers[data.client_id] = {
          name     : data.display_name,
          client_id: data.client_id,
          socket_id: data.client_socket_id,
          status: data.status
        };
        console.log("ChatUsers: ",this.chatUsers);
      }).bind(this));

      this.socket.on('disconnect_user', (function(data){
        console.log('dis',data);
        console.log(this.chatUsers);
        for(var i in this.chatUsers) {

          console.log(this.chatUsers[i]);

          if(this.chatUsers[i].socket_id == data.client_socket_id) {
            this.chatUsers[i].status = "incognito";
            this.chatBoxes[i].status = "incognito";
            break;
          }

        }
      }).bind(this));

      this.socket.on('child_added', (function (data)
      {//New Message
        console.log('child_added',data);
        var theMessage: Message = {
          message: data.message,
          owner: data.owner,
          client_id: data.clientId
        };
        var message = data.message;
        var sender_name = data.owner;
        var clientId = data.clientId;
        var socket_id = data.roomId;//Change it HERE
        if(!this.chatUsers[clientId]){
          return;
        }
        this.openBox(this.chatUsers[clientId]);
        if(this.chatBoxes[clientId])
        {
          if(!this.chatBoxes[clientId].messages)
          {
            this.chatBoxes[clientId].messages = [];
          }
          this.chatBoxes[clientId].messages.push(theMessage);
        }
      }).bind(this));
    }else{
      console.log('Chat Not Enabled');
    }
  }
//================================================ Chat End - Mohamed Hisham

  ngAfterViewInit() {

    this.UserData = PublicShared.GetUserData;
    console.log('HI User try chat: ',this.UserData);
    //Start Chat
    console.log(this.UserData);
    // this.hChat();

    AppComponent.updateNavbar.subscribe(res => {
      this.getListCat();
      this.UserData = PublicShared.GetUserData;
      console.log('HIIIIIIIIII',this.UserData);
      this.hChat();
      this.getMyDashbaord();
      this.idleCountDown();

    });


    if (localStorage.getItem("token") !== null) {
      this.getListCat();
    }

    if (localStorage.getItem('userProfile')) {
      this.UserData = JSON.parse(localStorage.getItem('userProfile'));
      this.hChat();
    } else {
      this.UserData = {};
    }

  }

  getListCat() {
    this.service.getListCat()
      .subscribe((res) => {
        this.listTypes = res;
        this.getListModule();
        this.getMenu()
      }, (err) => {
        this.serverError(err)
      })
  }
  getListModule() {
    this.service.getListModules()
      .subscribe((res) => {
        console.log('***-*-*-*-*-*-*-*-*-*-***');
        this.listModules = res;
        this.selectedListModule = res[0].ModuleID;
      }, (err) => {
        this.serverError(err)
      })
  }
  getMenu() {
    this.service.getMenu()
      .subscribe((res) => {
        console.log("Menu service");
        console.log(res);
        this.listMenu = res;
        this.Setting.listMenu = res;
      }, (err) => {
        this.serverError(err)
      })
  }

  serverError(err) {
    if (err.status === 401) {
      localStorage.clear();
      this.route.navigate(['/login']);
    }
  }

  filterTypes(listTypes: Array<any>): Array<any>   // Level 1 filter
  {
    let result: Array<any> = [];

    for (let x = 0; x < listTypes.length; x++) {
      for (let y = 0; y < this.listMenu.length; y++) {
        if (listTypes[x].MenueTypeID == this.listMenu[y].MenueTypeID) {
          result.push(listTypes[x]);
          break;
        }
      }
    }
    return result;
  }
  filterModules(listType: any, listModule: Array<any>): Array<any>   // Filter level 2
  {
    let result: Array<any> = [];

    for (let x = 0; x < listModule.length; x++) {
      for (let y = 0; y < this.listMenu.length; y++) {
        if (listType.MenueTypeID == this.listMenu[y].MenueTypeID && listModule[x].ModuleID == this.listMenu[y].ModuleID) {
          result.push(listModule[x]);
          break;
        }
      }
    }
    return result;
  }

  getSearchData() {
    this.service.getSearchedData(this.secondDropDown, this.PublicSearchValue)
      .subscribe((res) => {
        this.searchedData = res;
      })
  }

  dynamicComponent() {
    return this.ViewHolder.toArray()[0];
  }





  userLogOut() {
    this.service.logOut().subscribe(res => {
      console.log(res.status);
      this.PublicShared.serverComponents = [];
      this.PublicShared.myDashboards = [];
      this.PublicShared.DataSources = [];
    });
    localStorage.clear();
    if (this.UserData != {} &&  this.UserData.chatStatus == true) {
      this.socket.disconnect();
    }

    this.route.navigateByUrl('/login');

  }



  scrollToBottom(): void {
    try {
      this.chatContent.nativeElement.scrollTop = this.chatContent.nativeElement.scrollHeight;
    } catch(err) {
      console.log(err);
    }
  }

  //  ---------- Server Components ----------

  public getMyDashbaord() {
    if (localStorage.getItem("CompanyProfile")) {
      this.dashboardService.GetMyDashBoard(JSON.parse(localStorage.getItem("CompanyProfile")).CompanyID).subscribe((res: any) => {
        console.table(res);
        PublicShared.myDashboards = res;
        if (PublicShared.myDashboards.length > 0) {
         this.selectedDashboard(PublicShared.myDashboards[0]);
        }
      }, (err) => {
        console.log(err);
      })
    }
  }

  public selectedDashboard(dashboardObject) {
    this.getDashbaordCompoenents(dashboardObject.DashboardCode);
  }

  public getDashbaordCompoenents(dashboardCode) {
    this.dashboardService.GetDashBoardReports(dashboardCode).subscribe((res: any) => {
      console.table(res);
      PublicShared.serverComponents = res;
    }, (err) => {
      console.log(err);
    })
  }

  public idleCountDown() {
    this.idle.setIdle(PublicShared.idleTimer);
    this.idle.setTimeout(10);
    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    this.idle.onTimeoutWarning.subscribe((countdown: number) => {
      console.log('Timeout Warning - ' + countdown);
    });

    //this.idle.onTimeout.subscribe(() => {
    //  this.userLogOut();
    //});

    this.idle.watch();
  }


}
