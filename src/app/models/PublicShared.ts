import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SelectableSettings, DataStateChangeEvent, GridDataResult, PageChangeEvent } from "@progress/kendo-angular-grid";
import { filterBy, SortDescriptor, orderBy, FilterDescriptor, CompositeFilterDescriptor, process, State } from '@progress/kendo-data-query';

export class PublicShared {
  public static currentWindowSrc: any = null;
  public static get GetUserData() {
    if (localStorage.getItem('userProfile'))
      return JSON.parse(localStorage.getItem('userProfile'));
    else
      return {};
  }
  public static get GetCompany() {
    if (localStorage.getItem('CompanyProfile'))
      return JSON.parse(localStorage.getItem('CompanyProfile'));
    else
      return {};
  }
  // public static AppSeverPath: string = "http://localhost:62250";
  //public static AppSeverPath: string = "http://192.168.107.73:3030";
  public static AppSeverPath: string = "http://80.241.220.137:3030";
  public static imagesSeverPath: string = "http://80.241.220.137:3030/imgs/";
  public static TokenValue: any;
  public static savedToken = localStorage.getItem('token');
  public static header = new HttpHeaders().set('Token', PublicShared.savedToken);
  public static DataSources: Array<any> = [];
  public static MainGridURL: string = "getGridData";
  public static myDashboards: Array<any> = [];
  public static serverComponents: Array<any> = [];
  public static idleTimer: number = 120  // NOTE: this number must be in seconds
}



@Injectable()
export class PublicSetting {
  public YearsList: Array<any> = [];
  public PeriodList: Array<any> = [];
  //---
  public DataSources: Array<any> = [];
  public dataSourcesTmp: Array<any> = [];
  public SelectedTRXTypeID: any; 
  public CurrentWindowSrc: any = null;
  public breabcrumbTitle: string = null;
  public listMenu: Array<any> = [];

  //----
  public SmartfilterObject: any = { FilterServerArray: [], FilterDisplayArray: [] };
  public Total: number = 0;
  public TxtSearch: string = '';
  public MainGridFilter: string = '';
  public GridFilter: string = '';
  public GridSort: string = '';
  public ViewList: Array<any> = [];
  public SelectedView;

  public FilterDisplayArray: Array<string> = [];
  public FilterServerArray: Array<string> = [];

  public gridColumns: Array<any> = [];
  public DataGrid: Array<any> = [];
  public gridView: GridDataResult;
  public Sort: SortDescriptor[] = [];
  //public Skip: number = 1;
  //public PageSize: number = 10;

  public state: State = {
    skip: 0,
    take: 10,
  };

  public loadDatGrid(): void {
    this.gridView = {
      data: orderBy(this.DataGrid, this.Sort),
      total: this.Total
    };
    //this.gridView = {
    //  data: this.DataGrid.slice(this.state.skip, this.state.take),
    //  total: this.Total
    //};

    //this.gridView = process(this.DataGrid, this.state);
    //this.gridView.total = this.Total;
  }

  public GoBack() {
    window.history.back();
  }

  public CMSStatusList: Array<any> = [];

}

@Injectable()
export class HRShared {
  public static divisionList: Array<any> = [];
  public static maritalList: Array<any> = [];
  public static locationsList: Array<any> = [];
  public static positionsList: Array<any> = [];
  public static departmentsList: Array<any> = [];
  public static categoriesList: Array<any> = [];
  public static suffixList: Array<any> = [];
}
