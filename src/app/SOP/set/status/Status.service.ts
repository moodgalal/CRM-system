import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from '../../../models/KaizenResult';
import { GridData } from '../../../models/data-model';

@Injectable()
export class SOP00014Service {


    constructor(private http: HttpClient) { }
    getAll() {
        let Url = `${PublicShared.AppSeverPath}/SOP/Status/GetAll`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetSingle(StatusID) {
        let Url = `${PublicShared.AppSeverPath}/SOP/Status/GetSingle?StatusID=${StatusID}`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    SaveData(SOP00014) {
        let Url = `${PublicShared.AppSeverPath}/SOP/Status/addStatus`;
        console.log(SOP00014);
        return this.http.post<KaizenResult>(Url, JSON.stringify(SOP00014),
            {
                headers: new HttpHeaders()
                    .set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    UpdateData(SOP00014) {
        let Url = `${PublicShared.AppSeverPath}/SOP/Status/UpdateStatus`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(SOP00014),
            {
                headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
   
    DeleteData(SOP00014) {
        let Url = `${PublicShared.AppSeverPath}/SOP/Status/DeleteStatus`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(SOP00014), {
            headers: new HttpHeaders()
                .set('Token', localStorage.getItem('token')

                ).set('Content-Type', 'Application/JSON')
        });
    }

}
