import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from '../../../models/KaizenResult';
import { GridData } from '../../../models/data-model';

@Injectable()
export class StatusFieldsService {


    constructor(private http: HttpClient) { }

    GetALlCompanies() {
        let Url = `${PublicShared.AppSeverPath}/Admin/Company/FillDropDownList`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    //getAllStatusCase() {
    //    let Url = `${PublicShared.AppSeverPath}/CMS/StatusCase/GetAll`;
    //    return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    //}
    GetALlRoles() {
        let Url = `${PublicShared.AppSeverPath}/Admin/Roles/FillDropDownList`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetRolesByView(ViewID) {
        let Url = `${PublicShared.AppSeverPath}/Sys/TRXType/GetRolesByView?ViewID=${ViewID}`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetModuleByCompany(CompanyID) {
        let Url = `${PublicShared.AppSeverPath}/Admin/Company/GetModuleByCompany?CompanyID=${CompanyID}`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetRolesByCompany(CompanyID) {
        let Url = `${PublicShared.AppSeverPath}/Admin/Roles/GetRolesByCompany?CompanyID=${CompanyID}`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetRolesByCaseStatusID(CaseStatusID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/StatusRole/GetAll?CaseStatusID=${CaseStatusID}`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    getAllStatusCase() {
        let Url = `${PublicShared.AppSeverPath}/CMS/StatusFields/GetAll`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }

    Add(CM00052) {
        let Url = `${PublicShared.AppSeverPath}/CMS/StatusRole/add`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00052),
            {
                headers: new HttpHeaders()
                    .set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    Update(CM00052) {
        let Url = `${PublicShared.AppSeverPath}/CMS/StatusRole/Update`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00052),
            {
                headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    Delete(CM00052) {
        let Url = `${PublicShared.AppSeverPath}/CMS/StatusRole/Delete`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00052), { headers: new HttpHeaders().set('Token', localStorage.getItem('token')).set('Content-Type', 'Application/JSON') });
    }
   
}
