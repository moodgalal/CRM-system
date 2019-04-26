import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from '../../../models/KaizenResult';
import { GridData } from '../../../models/data-model';

@Injectable()
export class SOP00008Service {


    constructor(private http: HttpClient) { }
    getAll() {
        let Url = `${PublicShared.AppSeverPath}/SOP/AddressType/GetAll`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetSingle(addressTypeCode) {
        let Url = `${PublicShared.AppSeverPath}/SOP/AddressType/GetSingle?addressTypeCode=${addressTypeCode}`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    SaveData(SOP00009) {
        let Url = `${PublicShared.AppSeverPath}/SOP/AddressType/add`;
        console.log(SOP00009);
        return this.http.post<KaizenResult>(Url, JSON.stringify(SOP00009),
            {
                headers: new HttpHeaders()
                    .set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    UpdateData(SOP00009) {
        let Url = `${PublicShared.AppSeverPath}/SOP/AddressType/Update`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(SOP00009),
            {
                headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    UpdateDataWhereCondition(SOP00008) {
        let Url = `${PublicShared.AppSeverPath}/SOP/AddressType/UpdateDataWhereCondition`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(SOP00008),
            {
                headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    DeleteData(SOP00009) {
        let Url = `${PublicShared.AppSeverPath}/SOP/AddressType/Delete`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(SOP00009), {
            headers: new HttpHeaders()
                .set('Token', localStorage.getItem('token')

                ).set('Content-Type', 'Application/JSON')
        });
    }

}
