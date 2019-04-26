import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PublicShared } from "../../../models/PublicShared";
import { GridData } from "../../../models/data-model";
import { KaizenResult } from "../../../models/KaizenResult";
@Injectable()
export class AgentRoleService {

    constructor(public http: HttpClient) { }

 
    GetALlRoles() {
        let Url = `${PublicShared.AppSeverPath}/Admin/Roles/FillDropDownList`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
   
    delete(CM00122) {
        let url = PublicShared.AppSeverPath + `/CMS/Agent/DeleteAgentRole`;
        return this.http.post<KaizenResult>(url, JSON.stringify(CM00122),
            {
                headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'Application/JSON')
            });
    }
    Add(CM00122) {
        let url = PublicShared.AppSeverPath + `/CMS/Agent/AddAgentRole`;
        return this.http.post<KaizenResult>(url, JSON.stringify(CM00122),
            {
                headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'Application/JSON')
            });
    }
    GetRoleAgents(RoleID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/Agent/GetRoleAgents?RoleID=${RoleID}`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });

    }
}
