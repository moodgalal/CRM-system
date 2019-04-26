import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from "../../../models/KaizenResult";
import {GridData} from "../../../models/data-model";

@Injectable()
export class rmsptpproductService {


    constructor(private http: HttpClient) { }

    public GetAllFiscalYears() {
      let Url = `${PublicShared.AppSeverPath}/Sys/Years/GetAllFiscalYears`;
      return this.http.get<Array<any>>(Url, {
        headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
      })
    }
    GetAllClient() {
      let Url = `${PublicShared.AppSeverPath}/CMS/Client/FillDropDownList`;
      return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetAllByClientID(ClientID) {
      let Url = `${PublicShared.AppSeverPath}/CMS/Contract/GetAllByClientID?ClientID=${ClientID}`;
      return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    public GetPeriodsByYearCode(YearCode) {
      let Url = `${PublicShared.AppSeverPath}/CM/CMPeriod/GetPeriodListByYearCode?YearCode=${YearCode}`;
      return this.http.get<Array<any>>(Url, {
        headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
      })
    }
}
