import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from '../../../models/KaizenResult';
import { GridData } from '../../../models/data-model';

@Injectable()
export class SendingService {


    constructor(private http: HttpClient) { }
   
    getAllGroups() {
        let Url = `${PublicShared.AppSeverPath}/SMS/Group/GetAll`;
        return this.http.get<any>(Url, {
            headers: new HttpHeaders().set('Token',
                localStorage.getItem('token'))
        });
    }
    getAllTemplates() {
        let Url = `${PublicShared.AppSeverPath}/SMS/Template/GetAll`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    getAllAccounts() {
        let Url = `${PublicShared.AppSeverPath}/SMS/Account/GetAll`;
        return this.http.get<any>(Url, {
            headers: new HttpHeaders()
                .set('Token', localStorage.getItem('token'))
        });
    }
    GetPhonelistFromExcel(tableName, columnName) {
        let Url = `${PublicShared.AppSeverPath}/SMS/Sending/GetDataFromExcel?TableName=${tableName}&collumName=${columnName}`;
        return this.http.get<any>(Url, {
            headers: new HttpHeaders()
                .set('Token', localStorage.getItem('token'))
        });
    }
    GetGroupNumbers(GroupID) {
        let Url = `${PublicShared.AppSeverPath}/SMS/Group/GetPhoneList?GroupID=${GroupID}`;
        return this.http.get<any>(Url, {
            headers: new HttpHeaders()
                .set('Token', localStorage.getItem('token'))
        });
    }
    Send(Receiver) {
        let Url = `${PublicShared.AppSeverPath}/SMS/Sending/Send`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(Receiver),
            {
                headers: new HttpHeaders()
                    .set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }

}
