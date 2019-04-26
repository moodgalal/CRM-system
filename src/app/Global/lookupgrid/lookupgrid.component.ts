import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { filterBy, orderBy, SortDescriptor, FilterDescriptor, CompositeFilterDescriptor } from '@progress/kendo-data-query';
import { FilterService, SelectableSettings, DataStateChangeEvent, GridDataResult, PageChangeEvent } from "@progress/kendo-angular-grid";
import { lookupgridService } from './lookupgrid.service';
import { LookUpSetting } from './LoockUpSetting';
import { ToastrService } from "ngx-toastr";
@Component({
  selector: 'lookupgrid',
  templateUrl: './lookupgrid.component.html',
  styleUrls: ['./lookupgrid.component.scss'],
  //encapsulation: ViewEncapsulation.None,
  providers: [lookupgridService],
  styles: [

    `kendo-grid {
      height:350px;
    }
    .mat-dialog-container{
      max-width:70vw;
    }
    kendo-grid .k-grid-content {
      height: calc(100% - 46px);
    }`
  ]
})
export class LookupgridComponent implements OnInit {
  @Output('Select_Changed') Select_Changed = new EventEmitter();
  @Output('closeEvent') closeEvent = new EventEmitter();
  ReturnObject: any;
  IsSmartFilter: boolean = false;
  public sort: SortDescriptor[] = [];
  operators = [
    { name: 0, operator: 'Less Than' },
    { name: 1, operator: 'IsLessThanOrEqualTo' },
    { name: 2, operator: 'IsEqualTo' },
    { name: 3, operator: 'IsNotEqualTo' },
    { name: 4, operator: 'IsGreaterThanOrEqualTo' },
    { name: 5, operator: 'IsGreaterThan' },
    { name: 6, operator: 'StartsWith' },
    { name: 7, operator: 'EndsWith' },
    { name: 8, operator: 'Contains' },
    { name: 9, operator: 'IsContainedIn' },
    { name: 10, operator: 'DoesNotContain' },
  ];
  SmartfilterObject: any = { FilterServerArray: [], FilterDisplayArray: [] };
  constructor(public LookUpSetting: LookUpSetting, private Server: lookupgridService, private alerts: ToastrService) {
    this.SmartfilterObject.FilterServerArray = [];
    this.SmartfilterObject.FilterDisplayArray = [];
    this.LookUpSetting.GridFilter = '';
    this.LookUpSetting.state = {
      skip: 0,
      take: 10,
    };
    this.LookUpSetting.gridView = {
      data: [],
      total: 0
    };
    //console.log(this.LookUpSetting.state);
  }
  ngOnInit() {
    this.getGridData();
  }
  getGridData() {
    //console.log("getGridData");
    let sorting = "";
    if (this.sort[0] != null)
      sorting = this.sort[0].field + " " + this.sort[0].dir;

    let Smartfilter = this.SmartfilterObject.FilterServerArray.join()
    //console.log(this.LookUpSetting.state);
    this.Server.GetClientGrid(this.LookUpSetting.ServerFuncName, this.LookUpSetting.state.skip, this.LookUpSetting.state.take, sorting
      , Smartfilter, this.LookUpSetting.GridFilter, this.LookUpSetting.MainGridFilter,
      this.LookUpSetting.FieldID, this.LookUpSetting.FltrOperator, this.LookUpSetting.TxtSearch).subscribe((data) => {

      if (data.Items !== null) {
        this.LookUpSetting.DataGrid = data.Items;
        this.LookUpSetting.Total = data.TotalItemCount;
      }
      else {
        this.LookUpSetting.DataGrid = [];
        this.LookUpSetting.Total = 0;
      }
      this.LookUpSetting.loadDatGrid();
    }, (err) => {

      this.serverError(err);
    })
  }
  private serializeFilter(filter: CompositeFilterDescriptor): string {
    if (filter === null)
      return "";
    var filterString = "";
    var filters = filter.filters.map(function (fd: CompositeFilterDescriptor) {
      //console.log(fd);


      var temp = fd.filters.map(function (fd2: FilterDescriptor) {
        return Object.values(fd2).join('_');
      })
        .join(" " + fd.logic + " ");
      if (filterString != "")
        filterString += "_ZOZO_";
      filterString += temp;
      return
    })
    return filterString;
  }
  public dataStateChange(state: DataStateChangeEvent): void {
    this.LookUpSetting.state = state;
    if (state.filter) {
      this.LookUpSetting.GridFilter = this.serializeFilter(this.LookUpSetting.state.filter);
    }
    this.getGridData();
  }
  FireEvent(dataItem) {
    this.Select_Changed.emit(dataItem);
  }
  closeFilter() {
    this.IsSmartFilter = !this.IsSmartFilter;
  }
  Filter_Changed(WhereCondition) {
    //this.CM00105.FilterServerArray = WhereCondition.FilterServerArray.join();
    //this.CM00105.FilterDisplayArray = WhereCondition.FilterDisplayArray.join();
    //this.agentService.UpdateDataWhereCondition(this.CM00105)
    //  .subscribe((res) => {
    //    this.alerts.success(`Updated Successfully`);
    //  }, (err) => {
    //    this.alerts.error(`Try again later please`);
    //  })
  }
  closeModal() {
    this.closeEvent.emit(true);
  }

  serverError(err) {
    this.alerts.error(err)
  }
}
