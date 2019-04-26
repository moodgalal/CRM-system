import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from '../../../models/KaizenResult';
import { GridData } from '../../../models/data-model';

@Injectable()
export class CityService {


    constructor(private http: HttpClient) { }
    getAll() {
        let Url = `${PublicShared.AppSeverPath}/Admin/City/GetAll`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetSingle(CityID) {
        let Url = `${PublicShared.AppSeverPath}/Admin/City/GetSingle?CityID=${CityID}`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    Add(sys00014) {
        let Url = `${PublicShared.AppSeverPath}/Admin/City/add`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(sys00014),
            {
                headers: new HttpHeaders()
                    .set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    Update(sys00014) {
        let Url = `${PublicShared.AppSeverPath}/Admin/City/Update`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(sys00014),
            {
                headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    Delete(sys00014) {
        let Url = `${PublicShared.AppSeverPath}/Admin/City/Delete`;
        return this.http.post<KaizenResult>(Url,
            JSON.stringify(sys00014),
            { headers: new HttpHeaders().set('Token', localStorage.getItem('token')).set('Content-Type', 'Application/JSON') });
    }
   

}
