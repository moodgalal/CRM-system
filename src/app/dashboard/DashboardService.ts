import { Injectable } from '@angular/core';
import { PublicShared } from '../models/PublicShared'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from "../models/KaizenResult";
import {GridData} from "../models/data-model";

@Injectable()
export class DashboardService {


    constructor(private http: HttpClient) { }

    GetMyDashBoard(CompanyID) {
      let Url = `${PublicShared.AppSeverPath}/MasterDashboard/GetMyDashBoard?CompanyID=${CompanyID}`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetDashBoardReports(DashboardCode) {
      let Url = `${PublicShared.AppSeverPath}/MasterDashboard/GetDashBoardReports?DashboardCode=${DashboardCode}`;
      return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
}
