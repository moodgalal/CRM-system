import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from '../../../models/KaizenResult';
import { GridData } from '../../../models/data-model';

@Injectable()
export class StatusTypeUsersService {


    constructor(private http: HttpClient) { }

    GetALlCompanies() {
        let Url = `${PublicShared.AppSeverPath}/Admin/Company/FillDropDownList`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetRolesByCompany(CompanyID) {
        let Url = `${PublicShared.AppSeverPath}/Admin/Roles/GetRolesByCompany?CompanyID=${CompanyID}`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetUsersByStatusTypeID(StatusTypeID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/StatusTypeUsers/GetAll?StatusTypeID=${StatusTypeID}`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    getAllStatusType() {
        let Url = `${PublicShared.AppSeverPath}/CMS/StatusType/GetAll`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }

    Add(CM00053) {
        let Url = `${PublicShared.AppSeverPath}/CMS/StatusTypeUsers/add`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00053),
            {
                headers: new HttpHeaders()
                    .set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    Update(CM00053) {
        let Url = `${PublicShared.AppSeverPath}/CMS/StatusTypeUsers/Update`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00053),
            {
                headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    Delete(CM00053) {
        let Url = `${PublicShared.AppSeverPath}/CMS/StatusTypeUsers/Delete`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00053), { headers: new HttpHeaders().set('Token', localStorage.getItem('token')).set('Content-Type', 'Application/JSON') });
    }

}
