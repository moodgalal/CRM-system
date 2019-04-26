import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from '../../../models/KaizenResult';
import { GridData } from '../../../models/data-model';

@Injectable()
export class StatusTypeRolesService {


    constructor(private http: HttpClient) { }

    GetALlCompanies() {
        let Url = `${PublicShared.AppSeverPath}/Admin/Company/FillDropDownList`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetRolesByCompany(CompanyID) {
        let Url = `${PublicShared.AppSeverPath}/Admin/Roles/GetRolesByCompany?CompanyID=${CompanyID}`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetRolesByStatusTypeID(StatusTypeID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/StatusTypeRole/GetAll?StatusTypeID=${StatusTypeID}`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    getAllStatusType() {
        let Url = `${PublicShared.AppSeverPath}/CMS/StatusType/GetAll`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }

    Add(CM00052) {
        let Url = `${PublicShared.AppSeverPath}/CMS/StatusTypeRole/add`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00052),
            {
                headers: new HttpHeaders()
                    .set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    Update(CM00052) {
        let Url = `${PublicShared.AppSeverPath}/CMS/StatusTypeRole/Update`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00052),
            {
                headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    Delete(CM00052) {
        let Url = `${PublicShared.AppSeverPath}/CMS/StatusTypeRole/Delete`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00052), { headers: new HttpHeaders().set('Token', localStorage.getItem('token')).set('Content-Type', 'Application/JSON') });
    }

}
