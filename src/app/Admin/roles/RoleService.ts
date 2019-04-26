import { Injectable } from '@angular/core';
import { PublicShared } from '../../models/PublicShared'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from "../../models/KaizenResult";
import {GridData} from "../../models/data-model";

@Injectable()
export class RoleService {

    constructor(private http: HttpClient) { }

    GetSingle(RoleID) {
        let Url = `${PublicShared.AppSeverPath}/Admin/Roles/GetSingle?RoleID=${RoleID}`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    SaveData(Kaizen00030) {
        let Url = `${PublicShared.AppSeverPath}/Admin/Roles/SaveData`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(Kaizen00030), {
            headers: new HttpHeaders()
                .set('Token', localStorage.getItem('token')).set('content-type', 'application/json')
        });
    }
    UpdateData(Kaizen00030) {
        let Url = `${PublicShared.AppSeverPath}/Admin/Roles/UpdateData`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(Kaizen00030), {
            headers: new HttpHeaders().set('content-type', 'application/json')
                .set('Token', localStorage.getItem('token'))
        });
    }
    DeleteData(RoleID) {
        let Url = `${PublicShared.AppSeverPath}/Admin/Roles/DeleteData?RoleID=${RoleID}`;
        return this.http.get<KaizenResult>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')).set('content-type', 'application/json') });
    }
    FillDropDownList() {
        let Url = `${PublicShared.AppSeverPath}/Admin/Roles/FillDropDownList`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')).set('content-type', 'application/json') });
    }


}
