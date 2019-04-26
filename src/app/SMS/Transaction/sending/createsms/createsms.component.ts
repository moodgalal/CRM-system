import { Component, OnInit } from '@angular/core';
import { SendingService } from '../sending.service';
import { ToastrService } from 'ngx-toastr';
import { SuccessEvent } from '@progress/kendo-angular-upload';
import { PublicSetting, PublicShared } from '../../../../models/PublicShared';
@Component({
    selector: 'app-createsms',
    templateUrl: './createsms.component.html',
    styleUrls: ['./createsms.component.scss'],
    providers: [SendingService]
})
export class CreatesmsComponent implements OnInit {
    groupsData: any[] = [];
    AccountData: any[] = [];
    templatesData: any[] = [];
    MS10101: any = {};
    MS10101List: any[] = [];
    MS10100: any = {};
    ExcelColumns = [];
    TableName;
    uploadSaveUrl: string = PublicShared.AppSeverPath + `/MasterData/GetExcelColumns`;
    constructor(
        private service: SendingService,
        private alerts: ToastrService,
        public setting: PublicSetting
    ) { }
    errHandler(event) {
        console.log(event);
    }
    successEventHandler(e: SuccessEvent) {
        this.ExcelColumns = e.response.json().ExcelColumns;
        this.TableName = e.response.json().TableName;
    }
    ColumnName_valueChange(event) {
        console.log(event);
        this.service.GetPhonelistFromExcel(this.TableName, event).subscribe(
            (res) => {
              this.MS10101List = res;
               
            }, (err) => {
                console.log(err);
            });
    }
    ngOnInit() {
        this.service.getAllAccounts().subscribe(
            (res) => {
                this.AccountData = res;
            });
        this.service.getAllGroups().subscribe(
            (res) => {
                this.groupsData = res;
            });

        this.service.getAllTemplates().subscribe(
            (res) => {
                this.templatesData = res;
            });
    }
    TemplateChange(event) {
        this.MS10100.MessageContant = event.TemplateMessage;
    }
    PhoneNumber_enter(event) {
        this.MS10101List.push(this.MS10101);
        this.MS10101 = {};
    }
    GroupID_valueChange(event) {
        console.log(event);
        this.service.GetGroupNumbers(event).subscribe(
            (res) => {
                this.MS10101List = res;
            }, (err) => {
                console.log(err);
            });
    }
    Send() {
       
        this.MS10100.MS10101 = this.MS10101List;
        this.service.Send(this.MS10100).subscribe(
            (res) => {
                if (res.Status)
                    this.alerts.success(res.Massage);
                else
                    this.alerts.error(res.Massage);
            }, (err) => {
                this.alerts.success("Error please try again later ");
            }
        );
    }
}
