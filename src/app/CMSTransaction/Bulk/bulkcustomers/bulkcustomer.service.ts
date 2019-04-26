import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from "../../../models/KaizenResult";

@Injectable()
export class bulkcustomerService {
    constructor(private http: HttpClient) { }
    GetNextBulkCustomerUploadID() {
        let Url = `${PublicShared.AppSeverPath}/CMS/BulkUpdate/GetNextBulkUpdateID`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) })
    }
    GetDSColumns(TRXTypeID) {
        let Url = `${PublicShared.AppSeverPath}/Sys/TRXType/GetDSColumns?TRXTypeID=${TRXTypeID}`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) })
    }

}