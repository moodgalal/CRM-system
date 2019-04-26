import { Injectable } from '@angular/core';
import { PublicShared } from '../../models/PublicShared'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from "../../models/KaizenResult";
import {GridData} from "../../models/data-model";

@Injectable()
export class AgentService {

 
    constructor(private http: HttpClient) { }
    GetSingle(AgentID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/Agent/GetSingle?AgentID=${AgentID}`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetAllCalendars() {
        let Url = `${PublicShared.AppSeverPath}/CMS/Agent/GetAllCalendars`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    SaveData(CM00105) {
        let Url = `${PublicShared.AppSeverPath}/CMS/Agent/SaveData`;
        return this.http.post<KaizenResult>(Url, CM00105, {
            headers: new HttpHeaders()
                .set('Token', localStorage.getItem('token'))
                .set('content-type', 'application/json')
        });
    }
    UpdateData(CM00105) {
        let Url = `${PublicShared.AppSeverPath}/CMS/Agent/UpdateData`;
        return this.http.post<KaizenResult>(Url, CM00105, {
            headers: new HttpHeaders()
                .set('Token', localStorage.getItem('token'))
                .set('content-type', 'application/json')
        });
    }
    UpdateDataWhereCondition(CM00105) {
        let Url = `${PublicShared.AppSeverPath}/CMS/Agent/UpdateDataWhereCondition`;
        return this.http.post<KaizenResult>(Url, CM00105, {
            headers: new HttpHeaders()
                .set('Token', localStorage.getItem('token'))
                .set('content-type', 'application/json')
        });
    }
    DeleteData(AgentID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/Agent/DeleteAgent?AgentID=${AgentID}`;
        return this.http.get<KaizenResult>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    getAgentGroup() {
        let Url = `${PublicShared.AppSeverPath}/CMS/AgentGroup/GetAgentGroup`;
        return this.http.get<KaizenResult>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });

    }

    // +======================
  
}
