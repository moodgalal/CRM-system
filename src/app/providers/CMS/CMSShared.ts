import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SelectableSettings, DataStateChangeEvent, GridDataResult, PageChangeEvent } from "@progress/kendo-angular-grid";
import { CMSService } from './Transations.service';

@Injectable()
export class CMSShared {

    public ActionTypeList: any = [];
    public static StatusList: any = [];
    public MyAgentList: any = [];

    public AddressList: any = [];


    public PrioritiesList: any = [];
    public TypesList: any = [];

    constructor(private CmsServer: CMSService) { }
    public GetMyAddressList() {
        if (this.AddressList.length > 0) return;
        this.CmsServer.GetMyAddressList().subscribe((res) => {
            this.AddressList = res;
        })
    }
    public GetCaseStatusTypeList() {
        if (this.ActionTypeList.length > 0) return;
        this.CmsServer.GetCaseStatusTypeList().subscribe((res) => {
            //alert('ssssssssssssssssssssssssssssssssssssss');
            this.ActionTypeList = res;
        })
    }
    public GetCaseStatusList() {
      if (CMSShared.StatusList.length > 0) return true;
      this.CmsServer.GetCaseStatusList().subscribe((res) => {
        CMSShared.StatusList = res;
        return true;
      })
    }
    public FillTaskTypesList() {
        if (this.TypesList.length <= 0) {
            this.CmsServer.FillTaskTypesList().subscribe((res) => {
                this.TypesList = res;
            })
        }
    }
    public FillTaskPrioritiesList() {
        if (this.PrioritiesList.length <= 0) {
            this.CmsServer.FillTaskPrioritiesList().subscribe((res) => {
                this.PrioritiesList = res;
            })
        }
    }


}
