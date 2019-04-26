import { Injectable } from "@angular/core";
import { SelectableSettings, DataStateChangeEvent, GridDataResult, PageChangeEvent } from "@progress/kendo-angular-grid";
import { filterBy, SortDescriptor, orderBy, FilterDescriptor, CompositeFilterDescriptor, process, State } from '@progress/kendo-data-query';

@Injectable()
export class LookUpSetting {
  public ServerFuncName: string = ''
  public Total: number = 0;
  public TxtSearch: string = '';
  public FltrOperator;
  public FieldID;
  public MainGridFilter: string = '';
  public GridFilter: string = '';
  public FilterDisplayArray: Array<string> = [];
  public FilterServerArray: Array<string> = [];

  public gridColumns: Array<any> = [];
  public DataGrid: Array<any> = [];
  public gridView: GridDataResult;
  public Sort: SortDescriptor[] = [];
  public state: State = {
    skip: 0,
    take: 10,
  };

  public loadDatGrid(): void {
    this.gridView = {
      data: orderBy(this.DataGrid, this.Sort),
      total: this.Total
    };
  }
}
