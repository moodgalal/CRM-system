import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from '../../../models/KaizenResult';
import { GridData } from '../../../models/data-model';

@Injectable()
export class AccountUserService {


    constructor(private http: HttpClient) { }
    getAllAcounts() {
        let Url = `${PublicShared.AppSeverPath}/SMS/Account/GetAll`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }

    getByUser(UserName) {
        let Url = `${PublicShared.AppSeverPath}/SMS/AccountUser/GetByUser?UserName=${UserName}`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    
    Add(SMSAccountUser) {
        let Url = `${PublicShared.AppSeverPath}/SMS/AccountUser/add`;
        console.log(SMSAccountUser);
        return this.http.post<KaizenResult>(Url, JSON.stringify(SMSAccountUser),
            {
                headers: new HttpHeaders()
                    .set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
  

    Delete(SMSAccountUser) {
        let Url = `${PublicShared.AppSeverPath}/SMS/AccountUser/Delete`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(SMSAccountUser), {
            headers: new HttpHeaders()
                .set('Token', localStorage.getItem('token')

                ).set('Content-Type', 'Application/JSON')
        });
    }

}
