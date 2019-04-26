import { Component, OnInit, ViewChild } from '@angular/core';
import { RemainderService } from "./RemainderService";
import { ToastrService } from "ngx-toastr";
import { formatDate } from '@telerik/kendo-intl';
import { GlobalGridComponent } from '../../Global/global-grid/global-grid.component'
import { PublicSetting, PublicShared} from '../../models/PublicShared';

@Component({
    selector: 'app-remainder',
    templateUrl: './remainder.component.html',
    styleUrls: ['./remainder.component.scss'],
    providers: [RemainderService]
})
export class RemainderComponent implements OnInit {
    @ViewChild("grid") grid: GlobalGridComponent;

    FilterType :number
    MyAgentList: Array<any>;
    AgentID: string;
    FilterObject: any = { StartDate: Date, EndDate: Date };

    constructor(public Setting: PublicSetting, private service: RemainderService, private alerts: ToastrService) {
        this.FilterObject.StartDate = new Date();
        this.FilterObject.EndDate = new Date();
        this.FilterType_Change(3,false)
    }
    ngOnInit() {
        this.service.GetMyListBySupervisor(this.FilterObject).subscribe((res) => {
          console.log(res);
          console.log(res.length);
            if (res.length > 0)
            {
              this.MyAgentList = res;
              this.AgentID = PublicShared.GetUserData.UserName;//.trim();
              //console.log(PublicShared.GetUserData);
              //console.log(this.AgentID);
            }
        }, (err) => { this.alerts.error(`Try again later please`); })
    }
    FilterType_Change(x, isRefreshGrid: boolean) {
        this.FilterType = x;
        switch (this.FilterType) {
            case 1:
                this.Setting.MainGridFilter = `AgentID='${this.AgentID}'`
                break;
            case 2:
                this.Setting.MainGridFilter = `AgentID='${this.AgentID}' and ReminderDateTime is null`
                break;
            case 3:
                this.Setting.MainGridFilter = `AgentID='${this.AgentID}' and (DATEADD(dd,0,DATEDIFF(dd, 0, ReminderDateTime)) >= DATEADD(dd, 0, DATEDIFF(dd,0,'${formatDate(this.FilterObject.StartDate, "d")}'))`
                this.Setting.MainGridFilter = this.Setting.MainGridFilter + ` and DATEADD(dd,0,DATEDIFF(dd, 0, ReminderDateTime)) <= DATEADD(dd,0,DATEDIFF(dd, 0,'${formatDate(this.FilterObject.EndDate, "d")}'))) `
                break;
            case 4:
                this.Setting.MainGridFilter = `AgentID='${this.AgentID}' and (DATEADD(dd,0,DATEDIFF(dd, 0, ReminderDateTime)) <= DATEADD(dd, 0, DATEDIFF(dd,0,'${formatDate(this.FilterObject.StartDate, "d")}'))`
                break;
        }
        //console.log(isRefreshGrid);
        if (isRefreshGrid)
            this.grid.getGridData();
        //console.log(`${this.FilterObject.StartDate.getFullYear()}-${this.FilterObject.StartDate.getMonth()}-${this.FilterObject.StartDate.getDate()}`);
        //console.log(`${this.to.getFullYear()}-${this.to.getMonth()}-${this.to.getDate()}`);
        //this.grid.getGridData();
        //
    }
}


