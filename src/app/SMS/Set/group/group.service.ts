import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from '../../../models/KaizenResult';
import { GridData } from '../../../models/data-model';

@Injectable()
export class GroupService {


    constructor(private http: HttpClient) { }
    getAll() {
        let Url = `${PublicShared.AppSeverPath}/SMS/Group/GetAll`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetSingle(GroupID) {
        let Url = `${PublicShared.AppSeverPath}/SMS/Group/GetSingle?GroupID=${GroupID}`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    SaveData(SMSGroup) {
        let Url = `${PublicShared.AppSeverPath}/SMS/Group/add`;
        console.log(SMSGroup);
        return this.http.post<KaizenResult>(Url, JSON.stringify(SMSGroup),
            {
                headers: new HttpHeaders()
                    .set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    UpdateData(SMSGroup) {
        let Url = `${PublicShared.AppSeverPath}/SMS/Group/Update`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(SMSGroup),
            {
                headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }

    DeleteData(SMSGroup) {
        let Url = `${PublicShared.AppSeverPath}/SMS/Group/Delete`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(SMSGroup), {
            headers: new HttpHeaders()
                .set('Token', localStorage.getItem('token')

                ).set('Content-Type', 'Application/JSON')
        });
    }

}
