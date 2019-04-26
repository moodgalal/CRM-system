import { Injectable } from '@angular/core';
import { PublicShared } from '../../models/PublicShared'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from "../../models/KaizenResult";
import {GridData} from "../../models/data-model";

@Injectable()
export class ClientService {


    constructor(private http: HttpClient) { }

    GetSingle(ClientID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/Client/GetSingle?ClientID=${ClientID}`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    SaveData(CM00105) {
        let Url = `${PublicShared.AppSeverPath}/CMS/Client/SaveData`;
        return this.http.post<KaizenResult>(Url, CM00105, {
            headers: new HttpHeaders()
                .set('Token', localStorage.getItem('token'))
                .set('content-type', 'application/json')
        });
    }
    UpdateData(CM00105) {
        let Url = `${PublicShared.AppSeverPath}/CMS/Client/UpdateData`;
        return this.http.post<KaizenResult>(Url, CM00105, {
            headers: new HttpHeaders()
                .set('Token', localStorage.getItem('token'))
                .set('content-type', 'application/json')
        });
    }
    DeleteData(ClientID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/Client/DeleteClient?ClientID=${ClientID}`;
        return this.http.get<KaizenResult>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetAddressTypeList() {
        let Url = `${PublicShared.AppSeverPath}/CMS/Client/GetAddressTypeList`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetCustClassList() {
        let Url = `${PublicShared.AppSeverPath}/CMS/Client/GetCustClassList`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });

    }
    GetStatusList() {
        let Url = `${PublicShared.AppSeverPath}/CMS/Client/GetStatusList`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });

    }
    GetClientAddress(clientID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/Client/GetClientAddress?clientID=${clientID}`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    AddClientAddress(CM00111) {
        let Url = `${PublicShared.AppSeverPath}/CMS/Client/AddClientAddress`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00111), {
            headers: new HttpHeaders()
                .set('Token', localStorage.getItem('token'))
                .set('content-type', 'application/json')
        });
    }

    DeleteClientAddress(CM00111) {
        let Url = `${PublicShared.AppSeverPath}/CMS/Client/DeleteClientAddress`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00111), {
            headers: new HttpHeaders()
                .set('Token', localStorage.getItem('token'))
                .set('content-type', 'application/json')
        });
    }}
