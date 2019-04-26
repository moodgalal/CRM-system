import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { KaizenService } from "../../../providers/kaizen/kaizen.service";
import { ToastrService } from "ngx-toastr";
import { AgentService } from "../AgentService";
import { PublicSetting } from "../../../models/PublicShared";
@Component({
  selector: 'app-where-condition',
  templateUrl: './where-condition.component.html',
  styleUrls: ['./where-condition.component.scss'],
  providers: [KaizenService, AgentService],
  encapsulation: ViewEncapsulation.None
})
export class WhereConditionComponent implements OnInit {

  CM00105: any = {};
  sources: Array<any> = null;
  views: Array<any> = null;
  columns: Array<any> = null;
  SmartfilterObject: any = { FilterServerArray: [], FilterDisplayArray: [] };
  constructor(
    public setting: PublicSetting,
    private service: KaizenService,
    private AgentService: AgentService,
    private alerts: ToastrService,
    private agentService: AgentService) { }

  ngOnInit() {
    this.getDataSource();
  }

  AgentID_Change(event) {
    this.CM00105 = {};
    this.SmartfilterObject.FilterServerArray = [];
    this.SmartfilterObject.FilterDisplayArray = [];
    this.AgentService.GetSingle(event)
      .subscribe((res) => {
        this.CM00105 = res;
        //console.log(this.CM00105);
        //alert(this.CM00105.FilterServerArray != null);
        if (this.CM00105.FilterServerArray != null) {
          this.SmartfilterObject.FilterServerArray = this.CM00105.FilterServerArray.split(",");
          this.SmartfilterObject.FilterDisplayArray = this.CM00105.FilterDisplayArray.split(",");
        }
      }, (err) => { console.log(err); })
  }
  getDataSource() {
    this.service.getDataSource()
      .subscribe((res) => {
        this.sources = res;
      }, (err) => {
        this.alerts.error("Try again later please")
      })
  }
  getViews(event) {
    this.service.GetMyViewsByTRXTypeID(event)
      .subscribe((res) => {
        this.views = res;
      }, (err) => {
        this.alerts.error("Try again later please")
      })
  }

  getColumns(event) {
    this.service.getGridColumns(event)
      .subscribe((res) => {
        console.log("grid coloumns");
        console.log(res);
        this.columns = res;
      }, (err) => {
        this.alerts.error("Try again later please")
      })
  }

  closeFilter(event) {
    //if (event) {
    //  this.showaAdvancedFilter = !this.showaAdvancedFilter;
    //}
  }
  Filter_Changed(WhereCondition) {
    this.CM00105.FilterServerArray = WhereCondition.FilterServerArray.join();
    this.CM00105.FilterDisplayArray = WhereCondition.FilterDisplayArray.join();
    this.agentService.UpdateDataWhereCondition(this.CM00105)
      .subscribe((res) => {
        this.alerts.success(`Updated Successfully`);
      }, (err) => {
        this.alerts.error(`Try again later please`);
      })
  }
}
