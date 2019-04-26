import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from '../../../models/KaizenResult';
import { GridData } from '../../../models/data-model';

@Injectable()
export class StatusCaseService {


    constructor(private http: HttpClient) { }
    getAll() {
        let Url = `${PublicShared.AppSeverPath}/CMS/StatusCase/GetAll`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    getAllCaseStatusType() {
        let Url = `${PublicShared.AppSeverPath}/CMS/StatusCase/GetAllCaseStatusType`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    getAllStatusTypes() {
        let Url = `${PublicShared.AppSeverPath}/CMS/StatusType/GetAll`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    AddStatusType(CM00003) {
        let Url = `${PublicShared.AppSeverPath}/CMS/StatusType/add`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00003),
            {
                headers: new HttpHeaders()
                    .set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
   
    GetSingle(CaseStatusID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/StatusCase/GetSingle?CaseStatusID=${CaseStatusID}`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    Add(CM00700) {
        let Url = `${PublicShared.AppSeverPath}/CMS/StatusCase/add`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00700),
            {
                headers: new HttpHeaders()
                    .set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    Update(CM00700) {
        let Url = `${PublicShared.AppSeverPath}/CMS/StatusCase/Update`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00700),
            {
                headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    Delete(CM00700) {
        let Url = `${PublicShared.AppSeverPath}/CMS/StatusCase/Delete`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00700), { headers: new HttpHeaders().set('Token', localStorage.getItem('token')).set('Content-Type', 'Application/JSON') });
    }
   
}
