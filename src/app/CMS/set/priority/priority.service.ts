import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from '../../../models/KaizenResult';
import { GridData } from '../../../models/data-model';

@Injectable()
export class PirorityService {


    constructor(private http: HttpClient) { }
    getAll() {
        let Url = `${PublicShared.AppSeverPath}/CMS/Priorities/GetAllPriority`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetSingle(priorityId) {
        let Url = `${PublicShared.AppSeverPath}/CMS/Priorities/GetSingle?priorityId=${priorityId}`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    SaveData(CM00023) {
        let Url = `${PublicShared.AppSeverPath}/CMS/Priorities/addPriority`;
        console.log(CM00023);
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00023),
            {
                headers: new HttpHeaders()
                    .set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    UpdateData(CM00023) {
        let Url = `${PublicShared.AppSeverPath}/CMS/Priorities/UpdatePriority`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00023),
            {
                headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    UpdateDataWhereCondition(CM00023) {
        let Url = `${PublicShared.AppSeverPath}/CMS/Priorities/UpdateDataWhereCondition`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00023),
            {
                headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    DeleteData(lookup02) {
        let Url = `${PublicShared.AppSeverPath}/CMS/Priorities/DeletePriority?DebtorAddressID=${lookup02}`;
        return this.http.get<KaizenResult>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }

}
