import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from "../../../models/KaizenResult";
import {GridData} from "../../../models/data-model";

@Injectable()
export class dashreminderService {


    constructor(private http: HttpClient) { }
    GetCaseStatusList() {
      let Url = `${PublicShared.AppSeverPath}/CMS/DoAction/GetCaseStatusList`;
      return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    public GetDataGrid(pageSize, page, sort, Smartfilter, filter, MainGridFilter, search) {
      let Url = `${PublicShared.AppSeverPath}/CMS/CaseMain/GetDataListGrid?page=${page}&MainGridFilter=${MainGridFilter}&Smartfilter=${Smartfilter}&pageSize=${pageSize}&sort=${sort}&filter=${filter}&Searchcritaria=${search}`;
      return this.http.get<GridData>(Url, {
        headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
      })
    }
    public GetMyAgents() {
      let Url = `${PublicShared.AppSeverPath}/CMS/Agent/GetMyAgents`;
      return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
}
