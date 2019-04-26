import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from '../../../models/KaizenResult';
import { GridData } from '../../../models/data-model';

@Injectable()
export class SOP00012Service {


    constructor(private http: HttpClient) { }
    getAll() {
        let Url = `${PublicShared.AppSeverPath}/SOP/Priority/GetAllPriority`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetSingle(Id) {
        let Url = `${PublicShared.AppSeverPath}/SOP/Priority/GetSingle?id=${Id}`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    SaveData(SOP00012) {
        let Url = `${PublicShared.AppSeverPath}/SOP/Priority/add`;
        console.log(SOP00012);
        return this.http.post<KaizenResult>(Url, JSON.stringify(SOP00012),
            {
                headers: new HttpHeaders()
                    .set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    UpdateData(SOP00012) {
        let Url = `${PublicShared.AppSeverPath}/SOP/Priority/Update`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(SOP00012),
            {
                headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
 
    DeleteData(SOP00012) {
        let Url = `${PublicShared.AppSeverPath}/SOP/Priority/Delete`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(SOP00012), {
            headers: new HttpHeaders()
                .set('Token', localStorage.getItem('token')

                ).set('Content-Type', 'Application/JSON')
        });
    }

}
