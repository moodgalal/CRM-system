import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from "../../../models/KaizenResult";

@Injectable()
export class Paymentservice {
  constructor(private http: HttpClient) { }

  GetNextPaymentID() {
    let Url = `${PublicShared.AppSeverPath}/CMS/Payment/GetNextPaymentID`;
    return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) })
  }
  GetNextPaymentNumber(CheckbookCode, PaymentMethodID) {
    let Url = `${PublicShared.AppSeverPath}/CMS/Payment/GetNextPaymentNumber?CheckbookCode=${CheckbookCode}&PaymentMethodID=${PaymentMethodID}`;
    return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) })
  }
  SaveDataObjectPayment(CM10207) {
    let Url = `${PublicShared.AppSeverPath}/CMS/Payment/SaveDataObject`;
    return this.http.post<KaizenResult>(Url, CM10207, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
  }

}
