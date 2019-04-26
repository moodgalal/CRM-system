import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from '../../../models/KaizenResult';
import { GridData } from '../../../models/data-model';

@Injectable()
export class debtorClassService {


    constructor(private http: HttpClient) { }

    GetSingle(CustClassID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/CustClass/GetSingle?CustClass=${CustClassID}`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetAll() {
        let Url = `${PublicShared.AppSeverPath}/CMS/DebtorClass/GetAllDebtorClass`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    SaveData(CM00010) {
        let Url = `${PublicShared.AppSeverPath}/CMS/CustClass/addCustClass`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00010),
            {
                headers: new HttpHeaders()
                    .set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    UpdateData(CM00023) {
        let Url = `${PublicShared.AppSeverPath}/CMS/CustClass/UpdateCustClass`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00023),
            {
                headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    UpdateDataWhereCondition(CM00023) {
        let Url = `${PublicShared.AppSeverPath}/CMS/CustClass/UpdateDataWhereCondition`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00023),
            {
                headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    DeleteData(CustClassID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/CustClass/DeleteCustClass?CustClassID=${CustClassID}`;
        return this.http.get<KaizenResult>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }

}
