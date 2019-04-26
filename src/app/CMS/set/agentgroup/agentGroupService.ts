import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from '../../../models/KaizenResult';
import { GridData } from '../../../models/data-model';

@Injectable()
export class AgentGroupService {


    constructor(private http: HttpClient) { }

    GetSingle(AgentGroupID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/AgentGroup/GetSingle?AgentGroup=${AgentGroupID}`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    SaveData(CM00023) {
        let Url = `${PublicShared.AppSeverPath}/CMS/AgentGroup/addAgentGroup`;
        console.log(CM00023);
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00023),
         { headers: new HttpHeaders()
            .set('Token', localStorage.getItem('token'))
            .set('Content-Type', 'application/json')
        });
    }
    UpdateData(CM00023) {
        let Url = `${PublicShared.AppSeverPath}/CMS/AgentGroup/UpdateAgentGroup`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00023),
            { headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
            .set('Content-Type', 'application/json') });
    }
    UpdateDataWhereCondition(CM00023) {
        let Url = `${PublicShared.AppSeverPath}/CMS/AgentGroup/UpdateDataWhereCondition`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00023),
         { headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
             .set('Content-Type', 'application/json') });
    }
    DeleteData(AgentGroupID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/AgentGroup/DeleteAgentGroup?AgentGroupID=${AgentGroupID}`;
        return this.http.get<KaizenResult>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    

}
