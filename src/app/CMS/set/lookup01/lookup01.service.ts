import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from '../../../models/KaizenResult';
import { GridData } from '../../../models/data-model';

@Injectable()
export class Lookuo01Service {


    constructor(private http: HttpClient) { }
    getAll() {
        let Url = `${PublicShared.AppSeverPath}/CMS/lookup01/GetAlllookup01`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetSingle(lookup01) {
        let Url = `${PublicShared.AppSeverPath}/CMS/lookup01/GetSingle?Lookup01Id=${lookup01}`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    SaveData(CM00023) {
        let Url = `${PublicShared.AppSeverPath}/CMS/lookup01/addLookup01`;
        console.log(CM00023);
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00023),
            {
                headers: new HttpHeaders()
                    .set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    UpdateData(CM00023) {
        let Url = `${PublicShared.AppSeverPath}/CMS/lookup01/UpdateLookup01`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00023),
            {
                headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    UpdateDataWhereCondition(CM00023) {
        let Url = `${PublicShared.AppSeverPath}/CMS/lookup01/UpdateDataWhereCondition`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00023),
            {
                headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    DeleteData(Lookup01) {
        let Url = `${PublicShared.AppSeverPath}/CMS/lookup01/DeleteLookup01?DebtorAddressID=${Lookup01}`;
        return this.http.get<KaizenResult>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }

}
