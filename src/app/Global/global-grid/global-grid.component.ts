import {
  Component, OnInit, Input, TemplateRef, ViewChild, ElementRef, OnDestroy,
  ViewEncapsulation
} from '@angular/core';
import { DataStateChangeEvent } from "@progress/kendo-angular-grid";
import { GlobalGridService } from "./global-grid.service";
import { SortDescriptor, FilterDescriptor, CompositeFilterDescriptor } from '@progress/kendo-data-query';

import { ActivatedRoute } from "@angular/router";
import { PublicSetting } from '../../models/PublicShared';
import { ToastrService } from "ngx-toastr";

import { KaizenService } from "../../providers/kaizen/kaizen.service";

@Component({
  selector: 'global-grid',
  templateUrl: './global-grid.component.html',
  styleUrls: ['./global-grid.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [GlobalGridService]
})
export class GlobalGridComponent implements OnInit, OnDestroy {
  @Input() extraButtons: TemplateRef<any>;

  @ViewChild("aboveGrid1") aboveGrid1: ElementRef;


  onResize(event) {
    this.gridheight = event.target.innerHeight - (this.aboveGrid1.nativeElement.offsetHeight + 100);
  }
  IsShowGridOptions: boolean = false;
  eventHandler: any;
  showaAdvancedFilter: boolean = false;
  showSort: boolean = false;
  gridheight: number;
  showSearch : boolean = false;
  //public sort: SortDescriptor[] = [];
  //activeColumns: Array<any> = [];

  constructor(public Setting: PublicSetting, private service: GlobalGridService, private route: ActivatedRoute, private alerts: ToastrService, private _service:KaizenService) {
    this.eventHandler = this.route.params.subscribe((params) => {
      if (this.Setting.CurrentWindowSrc !== params['src']) {
        this.Setting.CurrentWindowSrc = params['src'];
        this.Setting.SmartfilterObject.FilterServerArray = [];
        this.Setting.SmartfilterObject.FilterDisplayArray = [];
        this.Setting.dataSourcesTmp = [];
        this.Setting.gridColumns = [];
        this.Setting.GridFilter = '';
        this.Setting.TxtSearch = '';
        //this.Setting.MainGridFilter = '';
        this.Setting.GridSort = '';
        this.Setting.state = {
          skip: 0,
          take: 10,
        };
        this.Setting.gridView = {
          data: [],
          total: 0
        };
        this.LoadDataGrid();
      }
    });
  }
  ngOnInit() {

    
    this.gridheight = window.innerHeight - (this.aboveGrid1.nativeElement.offsetHeight + 100);
  }
  ngOnDestroy() {
    this.eventHandler.unsubscribe();
  }
  LoadDataGrid() {
    this.Setting.DataGrid = [];
    this.Setting.ViewList = [];
    this.Setting.gridColumns = [];
    if (this.Setting.DataSources.length > 0) {
      this.Setting.dataSourcesTmp = [];
      this.Setting.DataSources.forEach((source: any) => {
        if (source.WindowSource == this.Setting.CurrentWindowSrc) {
          this.Setting.dataSourcesTmp.push(source)
        }
      });
      if (this.Setting.dataSourcesTmp.length > 0) {
        this.Setting.SelectedTRXTypeID = this.Setting.dataSourcesTmp[0];
        this.getViews();
      }
    }
    else {
      this.service.getDataSource().subscribe((res) => {
        this.Setting.DataSources = res;
        this.LoadDataGrid();
      }, (err) => { this.serverError(err); })
    }
  }
  getViews() {
    this.Setting.ViewList = [];
    this.Setting.gridColumns = [];
    this.service.GetMyViewsByTRXTypeID(this.Setting.SelectedTRXTypeID.TRXTypeID)
      .subscribe((res) => {
        this.Setting.ViewList = res;
        this.Setting.state = {
          skip: 0,
          take: 5,
        };
        this.Setting.gridView = {
          data: [],
          total: 0
        };
        if (this.Setting.ViewList !== null) {
          if (this.Setting.ViewList.length > 0) {
            for (let x = 0; x < this.Setting.ViewList.length; x++) {
              this.Setting.SelectedView = this.Setting.ViewList[x];
              if (this.Setting.ViewList[x].IsDefault == true) {
                break;
              }
            }
            this.getColumns();
          }
        }
      }, (err) => {
        this.serverError(err);
      })
  }
  getColumns() {
    this.Setting.gridColumns = [];
    //this.activeColumns = [];
    this.Setting.DataGrid = [];
    this.service.getGridColumns(this.Setting.SelectedView.ViewID).subscribe((res) => {
      if (res !== null)
        if (res.length > 0) {
          this.Setting.state = {
            skip: 0,
            take: 10,
          };
          this.Setting.gridView = {
            data: [],
            total: 0
          };
          this.Setting.gridColumns = res;
          //this.Setting.gridColumns.forEach(col => {
          //  if (col.IsActive) {
          //    this.activeColumns.push(col)
          //  }
          //});
          console.log(this.Setting.gridColumns);
          this.getGridData();
        }
    }, (err) => {
      this.serverError(err);
    })
  }
  getGridData() {

    let sorting = this.Setting.GridSort;// this.outerServerSort.join();


    let Smartfilter = this.Setting.SmartfilterObject.FilterServerArray.join();
    this.service.getGridData(this.Setting.SelectedView.ViewID, this.Setting.state.take
      , this.Setting.state.skip, sorting
      , Smartfilter, this.Setting.GridFilter, this.Setting.MainGridFilter, this.Setting.TxtSearch).subscribe((data) => {
      if (data.Items !== null) {
        this.Setting.DataGrid = data.Items;
        this.Setting.Total = data.TotalItemCount;
      }
      else {
        this.Setting.DataGrid = [];
        this.Setting.Total = 0;
      }
      this.Setting.loadDatGrid();
      this.getMenu(this.Setting.CurrentWindowSrc);
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
      //console.log(filterString);
      if (filterString != "")
        filterString += "_ZOZO_";
      filterString += temp;
      return
    });
    return filterString;
  }
  public dataStateChange(state: DataStateChangeEvent): void {
    this.Setting.state = state;
    if (state.filter) {
      //console.log(this.serializeFilter(this.Setting.state.filter));
      this.Setting.GridFilter = this.serializeFilter(this.Setting.state.filter);
    }
    //this.Setting.state.skip = state.skip;
    //this.Setting.Sort = state.sort;
    //this.Setting.state.take = state.take;
    if (state.sort) {
      if (state.sort.length > 0)
        this.Setting.GridSort = Object.values(state.sort[0]).join('_');
      //console.log(this.Setting.GridSort);
    }
    this.getGridData();
  }
  serverError(err) {
    this.alerts.error(err)
  }
  Filter_Changed(SmartfilterObject) {
    this.Setting.SmartfilterObject = SmartfilterObject;
    this.outerServerArray = SmartfilterObject.FilterServerArray;
    //console.log(this.Setting.SmartfilterObject);
    //console.log(this.outerServerArray);
    this.showaAdvancedFilter = false;
    this.IsShowGridOptions = false;
    this.getGridData();
  }
  closeFilter(SmartfilterObject) {
    if (SmartfilterObject) {
      this.outerServerArray = SmartfilterObject.FilterServerArray;
      this.showaAdvancedFilter = !this.showaAdvancedFilter;
    }
  }
  outerServerSort: Array<string> = [];
  outerServerArray: Array<string> = [];
  sortChanged(sortObject) {
    this.outerServerSort = sortObject.sortServerArray;
    this.outerServerArray = sortObject.sortServerArray;
    this.showSort = false;
    this.IsShowGridOptions = false;
    this.getGridData();
  }
  closeSort(event) {
    if (event) {
      this.showSort = !this.showSort;
    }
  }

  getMenu(windowSrc) {
    if (this.Setting.listMenu.length > 0) {
      let menuItem = this.Setting.listMenu.filter((item) => item.WindowSource == windowSrc);
      console.table(menuItem);
      console.log(menuItem[0].MenuName);
      this.Setting.breabcrumbTitle = menuItem[0].MenuName;
    } else {
      console.log("in service");
      this._service.getMenu()
        .subscribe((res) => {
          let menuItem = res.filter((item) => item.WindowSource == windowSrc);
          this.Setting.breabcrumbTitle = menuItem[0].MenuName;
        })
    }
  }
}
