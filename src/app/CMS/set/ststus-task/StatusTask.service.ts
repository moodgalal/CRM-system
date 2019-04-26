import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from '../../../models/KaizenResult';
import { GridData } from '../../../models/data-model';

@Injectable()
export class StatusTaskService {


    constructor(private http: HttpClient) { }
    getAll() {
        let Url = `${PublicShared.AppSeverPath}/CMS/StatusTask/GetAll`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetSingle(TaskID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/StatusTask/GetSingle?TaskID=${TaskID}`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    Add(CM00025) {
        let Url = `${PublicShared.AppSeverPath}/CMS/StatusTask/add`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00025),
            {
                headers: new HttpHeaders()
                    .set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    Update(CM00023) {
        let Url = `${PublicShared.AppSeverPath}/CMS/StatusTask/Update`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00023),
            {
                headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    Delete(TaskID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/StatusTask/Delete?TaskID=${TaskID}`;
        return this.http.post<KaizenResult>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')).set('Content-Type','Application/JSON') });
    }
    getCaseStatus() {
        let Url = `${PublicShared.AppSeverPath}/CMS/StatusFields/GetAll`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });

    }

}
