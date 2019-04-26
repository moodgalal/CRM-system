import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from '../../../models/KaizenResult';
import { GridData } from '../../../models/data-model';

@Injectable()
export class NationalityService {


    constructor(private http: HttpClient) { }
    getAll() {
        let Url = `${PublicShared.AppSeverPath}/Admin/Nationality/GetAll`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetSingle(NationalityID) {
        let Url = `${PublicShared.AppSeverPath}/Admin/Nationality/GetSingle?NationalityID=${NationalityID}`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    Add(sys00030) {
        let Url = `${PublicShared.AppSeverPath}/Admin/Nationality/add`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(sys00030),
            {
                headers: new HttpHeaders()
                    .set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    Update(sys00030) {
        let Url = `${PublicShared.AppSeverPath}/Admin/Nationality/Update`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(sys00030),
            {
                headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    Delete(sys00030) {
        let Url = `${PublicShared.AppSeverPath}/Admin/Nationality/Delete`;
        return this.http.post<KaizenResult>(Url,
            JSON.stringify(sys00030),
            { headers: new HttpHeaders().set('Token', localStorage.getItem('token')).set('Content-Type', 'Application/JSON') });
    }
   

}
