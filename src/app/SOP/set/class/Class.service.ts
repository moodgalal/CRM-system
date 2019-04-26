import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from '../../../models/KaizenResult';
import { GridData } from '../../../models/data-model';

@Injectable()
export class SOP00010Service {


    constructor(private http: HttpClient) { }
    getAll() {
        let Url = `${PublicShared.AppSeverPath}/SOP/Class/GetAll`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetSingle(CUSTCLAS) {
        let Url = `${PublicShared.AppSeverPath}/SOP/Class/GetSingle?CUSTCLAS=${CUSTCLAS}`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    SaveData(SOP00010) {
        let Url = `${PublicShared.AppSeverPath}/SOP/Class/addClass`;
        console.log(SOP00010);
        return this.http.post<KaizenResult>(Url, JSON.stringify(SOP00010),
            {
                headers: new HttpHeaders()
                    .set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    UpdateData(SOP00010) {
        let Url = `${PublicShared.AppSeverPath}/SOP/Class/UpdateClass`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(SOP00010),
            {
                headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
  
    DeleteData(SOP00010) {
        let Url = `${PublicShared.AppSeverPath}/SOP/Class/Delete`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(SOP00010), {
            headers: new HttpHeaders()
                .set('Token', localStorage.getItem('token')

                ).set('Content-Type', 'Application/JSON')
        });
    }

}
