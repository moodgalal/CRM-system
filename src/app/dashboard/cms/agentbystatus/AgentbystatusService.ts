import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from "../../../models/KaizenResult";
import {GridData} from "../../../models/data-model";

@Injectable()
export class AgentbystatusService {


    constructor(private http: HttpClient) { }

    GetStatusByAgentID(AgentID) {
      let Url = `${PublicShared.AppSeverPath}/CMS/Analysis/GetStatusByAgentID?AgentID=${AgentID}`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
   
}
