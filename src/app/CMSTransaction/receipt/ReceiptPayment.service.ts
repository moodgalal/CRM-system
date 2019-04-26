import { Injectable } from '@angular/core';
import { PublicShared } from '../../models/PublicShared'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from "../../models/KaizenResult";

@Injectable()
export class ReceiptPaymentService {
  constructor(private http: HttpClient) { }

  UpdateData(CM10207) {
    let Url = `${PublicShared.AppSeverPath}/CMS/Payment/UpdateData`;
    return this.http.post<KaizenResult>(Url, CM10207, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
  }
  GetSingle(PaymentID) {
      let Url = `${PublicShared.AppSeverPath}/CMS/Payment/GetSingle?PaymentID=${PaymentID}`;
      return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
  }
}
