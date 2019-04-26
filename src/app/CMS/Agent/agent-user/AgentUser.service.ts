import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PublicShared } from "../../../models/PublicShared";
import { GridData } from "../../../models/data-model";
import { KaizenResult } from "../../../models/KaizenResult";
@Injectable()
export class AgentUserService {

    constructor(public http: HttpClient) { }

    GetUserAgents(userName) {
        let url = PublicShared.AppSeverPath + `/CMS/Agent/GetUserAgents?userName=${userName}`;

        return this.http.get<Array<any>>(url, {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token')) })
    }
  
    delete(CM00122) {
        let url = PublicShared.AppSeverPath + `/CMS/Agent/DeleteAgentIUserName`;
        return this.http.post<KaizenResult>(url, JSON.stringify(CM00122),
            {
                headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'Application/JSON')
            });
    }
    Add(CM00122) {
        let url = PublicShared.AppSeverPath + `/CMS/Agent/AddAgentUserName`;
        return this.http.post<KaizenResult>(url, JSON.stringify(CM00122),
            {
                headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'Application/JSON')
            });
    }
  
}
