import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from '../../../models/KaizenResult';
import { GridData } from '../../../models/data-model';

@Injectable()
export class SessionService {


    constructor(private http: HttpClient) { }
    getAll() {
        let Url = `${PublicShared.AppSeverPath}/Admin/Session/GetAll`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    } 
    GetSingle(userName, SequenceName) {
        let Url = `${PublicShared.AppSeverPath}/Admin/Session/GetSingle?userName=${userName}&SequenceName=${SequenceName}`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    
    Delete(sys00001) {
        let Url = `${PublicShared.AppSeverPath}/Admin/Session/Delete`;
        return this.http.post<KaizenResult>(Url,
            JSON.stringify(sys00001),
            { headers: new HttpHeaders().set('Token', localStorage.getItem('token')).set('Content-Type', 'Application/JSON') });
    }
   

}
