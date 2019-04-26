import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from "../../../models/KaizenResult";

@Injectable()
export class CustomerContactDetailsService {


    constructor(private http: HttpClient) { }


    GetDebtorAddressSingle(DebtorID, TRXTypeID, AddressCode) {
        let Url = `${PublicShared.AppSeverPath}/CMS/Debtor/GetDebtorAddressSingle?DebtorID=${DebtorID}&TRXTypeID=${TRXTypeID}&AddressCode=${AddressCode}`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    SaveDebtorAddress(model) {
        let Url = `${PublicShared.AppSeverPath}/CMS/Debtor/SaveDebtorAddress`;
        return this.http.post<KaizenResult>(Url, model, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    UpdateDebtorAddress(model) {
      let Url = `${PublicShared.AppSeverPath}/CMS/Debtor/UpdateDebtorAddress`;
      return this.http.post<KaizenResult>(Url, model, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
}
