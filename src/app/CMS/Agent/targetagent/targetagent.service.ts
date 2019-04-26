import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from '../../../models/KaizenResult';
import { GridData } from '../../../models/data-model';

@Injectable()
export class TargetAgentService {


    constructor(private http: HttpClient) { }
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
    GetTargets() {
        let Url = `${PublicShared.AppSeverPath}/CMS/Target/GetAll`;
        return this.http.get<Array<any>>(Url, {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        })
    }
    GetSalesTargetsCM00107(AgentID, TargetID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/Target/GetSalesTarget?AgentID=${AgentID}&TargetID=${TargetID}`;
        return this.http.get<Array<any>>(Url, {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        });
    }
    AddCM00107(CM00107List) {
        let Url = `${PublicShared.AppSeverPath}/CMS/Target/AddSalesList`;
        return this.http.post<KaizenResult>(Url, CM00107List, {
            headers: new HttpHeaders()
                .set('Token', localStorage.getItem('token'))
                .set('content-type', 'application/json')
        });
    }
    UpdateSalesList(CM00107List) {
        let Url = `${PublicShared.AppSeverPath}/CMS/Target/UpdateSalesList`;
        return this.http.post<KaizenResult>(Url, CM00107List, {
            headers: new HttpHeaders()
                .set('Token', localStorage.getItem('token'))
                .set('content-type', 'application/json')
        });
    }
}


