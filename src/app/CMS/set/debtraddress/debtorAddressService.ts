import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from '../../../models/KaizenResult';
import { GridData } from '../../../models/data-model';

@Injectable()
export class DebtorAddreddService {


    constructor(private http: HttpClient) { }
    getAll(){
        let Url = `${PublicShared.AppSeverPath}/CMS/DebtorAddress/GetAddressTypeCode`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetSingle(UserName) {
        let Url = `${PublicShared.AppSeverPath}/CMS/DebtorAddress/GetSingle?UserName=${UserName}`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    SaveData(CM00023) {
        let Url = `${PublicShared.AppSeverPath}/CMS/DebtorAddress/addUserAddress`;
        console.log(CM00023);
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00023),
            {
                headers: new HttpHeaders()
                    .set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    UpdateData(CM00023) {
        let Url = `${PublicShared.AppSeverPath}/CMS/DebtorAddress/UpdateUserAddress`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00023),
            {
                headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    UpdateDataWhereCondition(CM00023) {
        let Url = `${PublicShared.AppSeverPath}/CMS/DebtorAddress/UpdateDataWhereCondition`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00023),
            {
                headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    DeleteData(DebtorAddressID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/DebtorAddress/DeleteDebtorAddress?DebtorAddressID=${DebtorAddressID}`;
        return this.http.get<KaizenResult>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }

}
