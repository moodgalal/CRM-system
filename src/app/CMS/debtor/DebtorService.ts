import { Injectable } from '@angular/core';
import { PublicShared } from '../../models/PublicShared'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from "../../models/KaizenResult";

@Injectable()
export class DebtorService {


    constructor(private http: HttpClient) { }

    getSingle(TRXTypeID, DebtorID) {//TRXTypeID=118 DebtorID=39305
        let Url = `${PublicShared.AppSeverPath}/CMS/Debtor/GetSingle?TRXTypeID=${TRXTypeID}&DebtorID=${DebtorID}`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetAllCustClass() {
      let Url = `${PublicShared.AppSeverPath}/cms/DebtorClass/GetAllDebtorClass`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetAllReligion() {
      let Url = `${PublicShared.AppSeverPath}/CMS/Religion/GetAllReligion`;
      return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    addDebtor(CM00100) {
        let Url = `${PublicShared.AppSeverPath}/CMS/Debtor/AddDebtor`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00100), {
            headers: new HttpHeaders()
                .set('Token', localStorage.getItem('token'))
                .set('content-type','application/json')
        });
    }
    updateDebtor(CM00100) {
        let Url = `${PublicShared.AppSeverPath}/CMS/Debtor/UpdateDebtor`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00100), {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                .set('content-type', 'application/json')
        });
    }
    deleteDebtor(TRXTypeID, DebtorID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/Debtor/DeleteDebtor?TRXTypeID=${TRXTypeID}&DebtorID=${DebtorID}`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
}
