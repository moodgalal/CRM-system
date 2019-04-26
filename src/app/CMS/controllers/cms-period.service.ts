import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from "@angular/common/http";
import {PublicShared} from "../../models/PublicShared";

@Injectable()
export class CmsPeriodService {

  constructor(public http: HttpClient) { }

  public GetAllFiscalYears() {
    let Url = `${PublicShared.AppSeverPath}/Sys/Years/GetAllFiscalYears`;
    return this.http.get<Array<any>>(Url, {
      headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
    })
  }
  public GetPeriodsByYearCode(YearCode) {
    let Url = `${PublicShared.AppSeverPath}/CM/CMPeriod/GetPeriodListByYearCode?YearCode=${YearCode}`;
    return this.http.get<Array<any>>(Url, {
      headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
    })
  }

}
