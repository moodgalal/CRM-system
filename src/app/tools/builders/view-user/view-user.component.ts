import { Component, OnInit } from '@angular/core';
import { BuildersService } from "../builders-service.service";
import { ToastrService } from "ngx-toastr";
import { PublicSetting, PublicShared } from '../../../models/PublicShared';
@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss'],
  providers: [BuildersService]
})
export class ViewUserComponent implements OnInit {
    constructor(public Setting: PublicSetting, private service: BuildersService, private alerts: ToastrService) { }
    CompanyList: Array<any> = [];
    CompanyID;
    ModuleList: Array<any> = [];
    ModuleID;
    WindowSourceList: Array<any> = [];
    WindowSource;
    sources: Array<any> = [];
    viewsList: Array<any> = [];
    viewColumns: Array<any> = [];
    sourceColumns: Array<any> = null;
    checkedColumns: Array<any> = [];
    SelectedTRXType: any;
    selectedView: any;
    CM00073: any = {};
    CM00073List: any[] = [];

    ngOnInit() {
        this.sourceColumns = [];
        this.service.GetALlCompanies().subscribe((res) => {
            this.CompanyList = res;
        })
    }
    CompanyID_Changed() {
        this.ModuleList = [];
        this.service.GetModuleByCompany(this.CompanyID).subscribe((res) => {
            this.ModuleList = res;
        })
    }
    ModuleID_Changed() {
        this.WindowSourceList = [];
        this.service.GetScreensByModuleID(this.ModuleID).subscribe((res) => {
            this.WindowSourceList = res;
        })
    }
    WindowSource_Changed() {
        this.sources = [];
        this.service.GetTRXTypeIDByWindowSource(this.WindowSource).subscribe((res) => {
            this.sources = res;
        })
    }
    sources_Change() {
        this.viewColumns = [];
        this.viewsList = [];
        this.service.GetDSColumns(this.SelectedTRXType.TRXTypeID).subscribe((res) => {
            this.sourceColumns = res;
            this.sourceColumns.forEach(col => {
                col.checked = false;
            })
        });
        this.service.GetViewsByTRXTypeID(this.SelectedTRXType.TRXTypeID).subscribe((res) => {
            this.viewsList = res;
        })
    }
    GetUser(user) {
        this.CM00073.UserName = user.UserName;
    }
    getViewColumns(viewID) {
        this.service.GetViewUsers(viewID).subscribe((res) => this.CM00073List = res);
    }
    Add() {
        this.service.SaveViewUser(this.CM00073).subscribe(
            (res) => {
                if (res.Status) {
                    this.CM00073List.push(this.CM00073);
                    this.alerts.success(res.Massage);
                } else {
                    this.alerts.error(res.Massage);
                }
            }, (err) => this.alerts.error('Error Please try again later '));
    }
    delete(item) {
        let index = this.CM00073List.indexOf(item);
        this.service.DeleteViewUser(item).subscribe(
            (res) => {
                if (res.Status) {
                    this.CM00073List.splice(1, index);
                    this.alerts.success(res.Massage);
                } else {
                    this.alerts.error(res.Massage);

                }
            }, (err) => {
                    this.alerts.error(`Error please try again later `);
            });
        
    }
}
