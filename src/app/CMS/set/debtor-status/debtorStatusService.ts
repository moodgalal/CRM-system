import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from '../../../models/KaizenResult';
import { GridData } from '../../../models/data-model';

@Injectable()
export class debtorStatusService {


    constructor(private http: HttpClient) { }

    GetSingle(DebtorstatusID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/Debtorstatus/GetSingle?DebtorstatusId=${DebtorstatusID}`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetAll() {
      let Url = `${PublicShared.AppSeverPath}/CMS/Debtorstatus/GetAll`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    SaveData(CM00023) {
        let Url = `${PublicShared.AppSeverPath}/CMS/Debtorstatus/addDebtorstatus`;
        console.log(CM00023);
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00023),
            {
                headers: new HttpHeaders()
                    .set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    UpdateData(CM00023) {
        let Url = `${PublicShared.AppSeverPath}/CMS/Debtorstatus/UpdateDebtorstatus`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00023),
            {
                headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    UpdateDataWhereCondition(CM00023) {
        let Url = `${PublicShared.AppSeverPath}/CMS/Debtorstatus/UpdateDataWhereCondition`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00023),
            {
                headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    DeleteData(DebtorstatusID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/Debtorstatus/DeleteDebtorstatus?DebtorstatusID=${DebtorstatusID}`;
        return this.http.get<KaizenResult>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }

}
