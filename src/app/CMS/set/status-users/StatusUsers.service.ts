import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from '../../../models/KaizenResult';
import { GridData } from '../../../models/data-model';

@Injectable()
export class StatusUsersService {


    constructor(private http: HttpClient) { }

    GetALlCompanies() {
        let Url = `${PublicShared.AppSeverPath}/Admin/Company/FillDropDownList`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
 
  
    GetUsersByCaseStatusID(CaseStatusID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/StatusUsers/GetAll?CaseStatusID=${CaseStatusID}`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    getAllStatusCase() {
        let Url = `${PublicShared.AppSeverPath}/CMS/StatusFields/GetAll`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }

    Add(CM00051) {
        let Url = `${PublicShared.AppSeverPath}/CMS/StatusUsers/add`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00051),
            {
                headers: new HttpHeaders()
                    .set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    Update(CM00051) {
        let Url = `${PublicShared.AppSeverPath}/CMS/StatusUsers/Update`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00051),
            {
                headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    Delete(CM00051) {
        let Url = `${PublicShared.AppSeverPath}/CMS/StatusUsers/Delete`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00051), { headers: new HttpHeaders().set('Token', localStorage.getItem('token')).set('Content-Type', 'Application/JSON') });
    }

}
