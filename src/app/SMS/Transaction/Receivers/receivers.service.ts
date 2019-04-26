import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from '../../../models/KaizenResult';
import { GridData } from '../../../models/data-model';

@Injectable()
export class ReceiverService {


    constructor(private http: HttpClient) { }
    getAll() {
        let Url = `${PublicShared.AppSeverPath}/SMS/Receivers/GetAll`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    getAllGroups() {
        let Url = `${PublicShared.AppSeverPath}/SMS/Group/GetAll`;
        return this.http.get<any>(Url, {
            headers: new HttpHeaders().set('Token',
                localStorage.getItem('token'))
        });

    }
    GetRecevierGroups(PhoneNumber) {
        let Url = `${PublicShared.AppSeverPath}/SMS/Receivers/GetRecevierGroups?PhoneNumber=${PhoneNumber}`;
        return this.http.get<any>(Url, {
            headers: new HttpHeaders().set('Token',
                localStorage.getItem('token'))
        });
    }
    GetSingle(PhoneNumber) {
        let Url = `${PublicShared.AppSeverPath}/SMS/Receivers/GetSingle?PhoneNumber=${PhoneNumber}`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    SaveData(Receiver) {
        let Url = `${PublicShared.AppSeverPath}/SMS/Receivers/add`;
        console.log(Receiver);
        return this.http.post<KaizenResult>(Url, JSON.stringify(Receiver),
            {
                headers: new HttpHeaders()
                    .set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    AddToGroup(ReceiverGroup) {
        let Url = `${PublicShared.AppSeverPath}/SMS/Receivers/AddToGroup`;
        console.log(ReceiverGroup);
        return this.http.post<KaizenResult>(Url, JSON.stringify(ReceiverGroup),
            {
                headers: new HttpHeaders()
                    .set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    RemoveFromGroup(ReceiverGroup) {
        let Url = `${PublicShared.AppSeverPath}/SMS/Receivers/RemoveFromGroup`;
        console.log(ReceiverGroup);
        return this.http.post<KaizenResult>(Url, JSON.stringify(ReceiverGroup),
            {
                headers: new HttpHeaders()
                    .set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }

    UpdateData(Receiver) {
        let Url = `${PublicShared.AppSeverPath}/SMS/Receivers/Update`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(Receiver),
            {
                headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }

    DeleteData(Receiver) {
        let Url = `${PublicShared.AppSeverPath}/SMS/Receivers/Delete`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(Receiver), {
            headers: new HttpHeaders()
                .set('Token', localStorage.getItem('token')

                ).set('Content-Type', 'Application/JSON')
        });
    }

}
