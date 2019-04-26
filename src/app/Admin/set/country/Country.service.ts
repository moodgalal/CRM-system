import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from '../../../models/KaizenResult';
import { GridData } from '../../../models/data-model';

@Injectable()
export class CountrykService {


    constructor(private http: HttpClient) { }
    getAll() {
        let Url = `${PublicShared.AppSeverPath}/Admin/Country/GetAll`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetSingle(CountryID) {
        let Url = `${PublicShared.AppSeverPath}/Admin/Country/GetSingle?CountryID=${CountryID}`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    Add(Sys00013) {
        let Url = `${PublicShared.AppSeverPath}/Admin/Country/add`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(Sys00013),
            {
                headers: new HttpHeaders()
                    .set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    Update(Sys00013) {
        let Url = `${PublicShared.AppSeverPath}/Admin/Country/Update`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(Sys00013),
            {
                headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    Delete(Sys00013) {
        let Url = `${PublicShared.AppSeverPath}/Admin/Country/Delete`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(Sys00013), { headers: new HttpHeaders().set('Token', localStorage.getItem('token')).set('Content-Type', 'Application/JSON') });
    }


}
