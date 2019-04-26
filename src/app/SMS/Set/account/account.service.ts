import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from '../../../models/KaizenResult';
import { GridData } from '../../../models/data-model';

@Injectable()
export class AccountService {


    constructor(private http: HttpClient) { }
    getAll() {
        let Url = `${PublicShared.AppSeverPath}/SMS/Account/GetAll`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetSingle(SMSAccountCode) {
        let Url = `${PublicShared.AppSeverPath}/SMS/Account/GetSingle?SMSAccountCode=${SMSAccountCode}`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    SaveData(SMSAccount) {
        let Url = `${PublicShared.AppSeverPath}/SMS/Account/add`;
        console.log(SMSAccount);
        return this.http.post<KaizenResult>(Url, JSON.stringify(SMSAccount),
            {
                headers: new HttpHeaders()
                    .set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    UpdateData(SMSAccount) {
        let Url = `${PublicShared.AppSeverPath}/SMS/Account/Update`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(SMSAccount),
            {
                headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }

    DeleteData(SMSAccount) {
        let Url = `${PublicShared.AppSeverPath}/SMS/Account/Delete`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(SMSAccount), {
            headers: new HttpHeaders()
                .set('Token', localStorage.getItem('token')

                ).set('Content-Type', 'Application/JSON')
        });
    }

}
