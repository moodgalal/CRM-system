import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SelectableSettings, DataStateChangeEvent, GridDataResult, PageChangeEvent } from "@progress/kendo-angular-grid";
import { filterBy, SortDescriptor, orderBy, FilterDescriptor, CompositeFilterDescriptor, process, State } from '@progress/kendo-data-query';

@Injectable()
export class AgentBoxSharedData {
  public CMV00005: any = {};
}

