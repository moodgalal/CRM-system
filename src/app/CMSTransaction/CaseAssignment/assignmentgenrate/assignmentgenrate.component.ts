import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UploadEvent  , FileRestrictions, SelectEvent, ClearEvent, RemoveEvent } from '@progress/kendo-angular-upload';


import {PublicShared} from '../../../models/PublicShared';

@Component({
  selector: 'app-assignmentgenrate',
  templateUrl: './assignmentgenrate.component.html',
  styleUrls: ['./assignmentgenrate.component.scss']
})
export class AssignmentgenrateComponent implements OnInit {
  showDoAction: boolean = false;
  showCaseAttachment: boolean = false;
  CM00203;
  constructor() { }

  ngOnInit() {
  }

  uploadSaveUrl: string = "http://localhost:63568/Home/PostUserImage";

  uploadEventHandler(e: UploadEvent) {
      e.data = {
          description: "File description"
      };
      //e.headers.append("Authorization", "Basic");
      //e.headers.append("Origin", "*");
      //e.headers.append("Access-Control-Allow-Origin", "*")
      //e.headers.append("Access-Control-Allow-Credentials", "true");
      //e.headers.append("Access-Control-Allow-Headers","X-PINGOTHER, origin, content-type, accept, authorization")
      ////e.headers.append("Access-Control-Allow-Credentials", "true")
      //e.headers.append("Access-Control-Allow-Methods", "POST")

      console.log(e);
      //alert(e.files[0].rawFile);
      //alert(e.files[0].uid);
      //alert(e.files[0].name);
  }
  showDoActionFun() {
    console.log('....');
  }
  showCaseAttachmentFun() {
    console.log('....');
  }
  GetCaseDoAction() {
    console.log('....');
  }

}
