import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from '../../../models/KaizenResult';
import { GridData } from '../../../models/data-model';

@Injectable()
export class StatusFieldsService {


    constructor(private http: HttpClient) { }
    getAll() {
        let Url = `${PublicShared.AppSeverPath}/CMS/StatusFields/GetAll`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    getAllFieldType() {
        let Url = `${PublicShared.AppSeverPath}/CMS/StatusFields/GetAllFieldsType`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetSingle(CaseStatusID, FieldCode) {
        let Url = `${PublicShared.AppSeverPath}/CMS/StatusFields/GetSingle?CaseStatusID=${CaseStatusID}&FieldCode=${FieldCode}`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    Add(CM00026) {
        let Url = `${PublicShared.AppSeverPath}/CMS/StatusFields/add`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00026),
            {
                headers: new HttpHeaders()
                    .set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    Update(CM00026) {
        let Url = `${PublicShared.AppSeverPath}/CMS/StatusFields/Update`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00026),
            {
                headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    Delete(CM00026) {
        let Url = `${PublicShared.AppSeverPath}/CMS/StatusFields/Delete`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00026), { headers: new HttpHeaders().set('Token', localStorage.getItem('token')).set('Content-Type', 'Application/JSON') });
    }
    getCaseStatus() {
        let Url = `${PublicShared.AppSeverPath}/CMS/StatusFields/GetAll`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });

    }
}
