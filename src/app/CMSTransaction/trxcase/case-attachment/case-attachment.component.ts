import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SuccessEvent } from '@progress/kendo-angular-upload';
import { PublicShared } from '../../../models/PublicShared'
import { Caseattachment } from './case-attachment'
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-case-attachment',
  templateUrl: './case-attachment.component.html',
  styleUrls: ['./case-attachment.component.scss'],
  providers: [Caseattachment]
})
export class CaseAttachmentComponent implements OnInit {
  @Input() CaseMain: any;
  DocumentTypeList: Array<any> = [];
  CM00208: any = {};
  DOcHistoryList: Array<any> = [];
  @Output('hideMe') hideMe = new EventEmitter();
  uploadSaveUrl = `${PublicShared.AppSeverPath}/MasterData/UploadDocTemp`;
  constructor(private Server: Caseattachment, private alerts: ToastrService) { }

  ngOnInit() {
    console.log(this.CaseMain);
    this.Server.GetDocumentTypeList().subscribe((res) => {
      this.DocumentTypeList = res;
    });
    this.CM00208.TRXTypeID = this.CaseMain.TRXTypeID;
    this.CM00208.CaseRef = this.CaseMain.CaseRef;
    this.CM00208.CIFTRXTypeID = this.CaseMain.CIFTRXTypeID;
    this.CM00208.CIFNumber = this.CaseMain.CIFNumber;
  }
  errHandler(event) {
    console.log(event);
    console.log(`ERROR: ${event.operation}ing ${event.files[0].name} failed`);
  }

  successEventHandler(e: SuccessEvent) {
    this.CM00208.DocumentName = e.response.json().TableName;
    this.CM00208.TempFileName = e.response.json().FileName;
    console.log(e.response);
    // console.log(e.response.json());
    // this.Caseref = e.response.json().ExcelColumns;
    // this.uploadAssignmentObj.FilePath = e.response.json().TableName;
  }


  Form_Closing() {
    this.hideMe.emit(true);
  }
  DocumentTypeList_Change(event) {

  }
  GetDocuments() {
    this.DOcHistoryList = [];
    this.Server.GetDocuments(this.CaseMain.TRXTypeID, this.CaseMain.CaseRef)
      .subscribe((res) => {
        this.DOcHistoryList = res;
      });
  }
  save() {
    this.Server.SaveCaseDocument(this.CM00208).subscribe((res) => {
      if (res.Status) {
        this.alerts.success(res.Massage);
        this.Form_Closing();
      } else {
        this.alerts.error(res.Description);
      }
    }, () => {
      this.alerts.error("Try Again Later Please")
    })
  }
}
