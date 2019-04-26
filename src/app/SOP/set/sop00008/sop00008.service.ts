import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from '../../../models/KaizenResult';
import { GridData } from '../../../models/data-model';

@Injectable()
export class SOP00008Service {


    constructor(private http: HttpClient) { }
    getAll() {
        let Url = `${PublicShared.AppSeverPath}/SOP/SOP00008/GetAll`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetSingle(Id) {
        let Url = `${PublicShared.AppSeverPath}/SOP/SOP00008/GetSingle?id=${Id}`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    SaveData(SOP00008) {
        let Url = `${PublicShared.AppSeverPath}/SOP/SOP00008/add`;
        console.log(SOP00008);
        return this.http.post<KaizenResult>(Url, JSON.stringify(SOP00008),
            {
                headers: new HttpHeaders()
                    .set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    UpdateData(SOP00008) {
        let Url = `${PublicShared.AppSeverPath}/SOP/SOP00008/Update`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(SOP00008),
            {
                headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    UpdateDataWhereCondition(SOP00008) {
        let Url = `${PublicShared.AppSeverPath}/SOP/Priorities/UpdateDataWhereCondition`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(SOP00008),
            {
                headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    DeleteData(SOP00008) {
        let Url = `${PublicShared.AppSeverPath}/SOP/Priorities/Delete`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(SOP00008), {
            headers: new HttpHeaders()
                .set('Token', localStorage.getItem('token')
                    
                ).set('Content-Type','Application/JSON')
        });
    }

}
