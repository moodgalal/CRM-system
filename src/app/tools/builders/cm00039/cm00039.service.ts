import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PublicShared } from "../../../models/PublicShared";
import { GridData } from "../../../models/data-model";
import { KaizenResult } from "../../../models/KaizenResult";
@Injectable()
export class CM00039Service {

    constructor(public http: HttpClient) { }

    public GetAllTRXType() {
        let Url = `${PublicShared.AppSeverPath}/Sys/TRXType/GetAllTRXType`;
        return this.http.get<Array<any>>(Url, {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        });
    }

    public GetCM00039ByTrxType(TrxType) {
        let Url = `${PublicShared.AppSeverPath}/Admin/CM00039/GetByTrxType?TRXTypeID=${TrxType}`;
        return this.http.get<Array<any>>(Url, {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        });
    }
    addCM00039(CM00039) {
        let Url = `${PublicShared.AppSeverPath}/Admin/CM00039/Add`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00039), {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                .set('Content-Type', 'Application/JSON')
        });
    }
    updateCM00039List(CM00039List) {
        let Url = `${PublicShared.AppSeverPath}/Admin/CM00039/UpdateList`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00039List), {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                .set('Content-Type', 'Application/JSON')
        });
    }
    Delete(CM00039) {
        let Url = `${PublicShared.AppSeverPath}/Admin/CM00039/Delete`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00039), {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                .set('Content-Type', 'Application/JSON')
        });
    }
}
