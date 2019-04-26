import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from '../../../models/KaizenResult';
import { GridData } from '../../../models/data-model';

@Injectable()
export class TemplateService {


    constructor(private http: HttpClient) { }
    getAll() {
        let Url = `${PublicShared.AppSeverPath}/SMS/Template/GetAll`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetSingle(TemplateID) {
        let Url = `${PublicShared.AppSeverPath}/SMS/Template/GetSingle?TemplateID=${TemplateID}`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    SaveData(SMSTemplate) {
        let Url = `${PublicShared.AppSeverPath}/SMS/Template/add`;
        console.log(SMSTemplate);
        return this.http.post<KaizenResult>(Url, JSON.stringify(SMSTemplate),
            {
                headers: new HttpHeaders()
                    .set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    UpdateData(SMSTemplate) {
        let Url = `${PublicShared.AppSeverPath}/SMS/Template/Update`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(SMSTemplate),
            {
                headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }

    DeleteData(SMSTemplate) {
        let Url = `${PublicShared.AppSeverPath}/SMS/Template/Delete`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(SMSTemplate), {
            headers: new HttpHeaders()
                .set('Token', localStorage.getItem('token')

                ).set('Content-Type', 'Application/JSON')
        });
    }

}
