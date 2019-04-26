import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from '../../../models/KaizenResult';
import { GridData } from '../../../models/data-model';

@Injectable()
export class ReligionService {


    constructor(private http: HttpClient) { }
    getAll() {
        let Url = `${PublicShared.AppSeverPath}/Admin/religion/GetAll`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetSingle(ReligionID) {
        let Url = `${PublicShared.AppSeverPath}/Admin/religion/GetSingle?ReligionID=${ReligionID}`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    Add(Sys00008) {
        let Url = `${PublicShared.AppSeverPath}/Admin/Religion/add`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(Sys00008),
            {
                headers: new HttpHeaders()
                    .set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    Update(Sys00008) {
        let Url = `${PublicShared.AppSeverPath}/Admin/religion/Update`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(Sys00008),
            {
                headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    Delete(Sys00008) {
        let Url = `${PublicShared.AppSeverPath}/Admin/religion/Delete`;
        return this.http.post<KaizenResult>(Url,
            JSON.stringify(Sys00008),
            { headers: new HttpHeaders().set('Token', localStorage.getItem('token')).set('Content-Type', 'Application/JSON') });
    }
   

}
