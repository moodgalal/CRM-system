import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from "../../../models/KaizenResult";

@Injectable()
export class Asginmentservice {
    constructor(private http: HttpClient) { }

    public AddAsginment(CM00205) {
        let Url = `${PublicShared.AppSeverPath}/CMS/CaseMain/AddAsginment`;
        return this.http.post<KaizenResult>(Url, CM00205, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }

}
