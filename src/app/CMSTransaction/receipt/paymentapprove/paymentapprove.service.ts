import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PublicShared } from "../../../models/PublicShared";
import { GridData } from "../../../models/data-model";
import { KaizenResult } from "../../../models/KaizenResult";

@Injectable()
export class paymentapproveService {

    constructor(public http: HttpClient) { }


    public GetMyViewsByTRXTypeID(trxTypeId) {
      let Url = `${PublicShared.AppSeverPath}/Sys/TRXType/GetMyViewsByTRXTypeID?TRXTypeID=${trxTypeId}`;
        return this.http.get<Array<any>>(Url, {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        })
    }
    public GetUnApproveToApprove(ViewID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/Payment/GetUnApproveToApprove?ViewID=${ViewID}`;
        return this.http.get<GridData>(Url, {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        })
    }

    ApproveDataObject(CM10207) {
        let Url = `${PublicShared.AppSeverPath}/CMS/Payment/ApproveDataObject`;
        return this.http.post<KaizenResult>(Url, CM10207, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
}
