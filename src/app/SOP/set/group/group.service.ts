import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from '../../../models/KaizenResult';
import { GridData } from '../../../models/data-model';

@Injectable()
export class SOP00011Service {


    constructor(private http: HttpClient) { }
    getAll() {
        let Url = `${PublicShared.AppSeverPath}/SOP/SOP00011/GetAllGroup`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetSingle(Id) {
        let Url = `${PublicShared.AppSeverPath}/SOP/SOP00011/GetSingle?id=${Id}`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    SaveData(SOP00011) {
        let Url = `${PublicShared.AppSeverPath}/SOP/SOP00011/add`;
        console.log(SOP00011);
        return this.http.post<KaizenResult>(Url, JSON.stringify(SOP00011),
            {
                headers: new HttpHeaders()
                    .set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    UpdateData(SOP00011) {
        let Url = `${PublicShared.AppSeverPath}/SOP/SOP00011/Update`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(SOP00011),
            {
                headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }

    DeleteData(SOP00011) {
        let Url = `${PublicShared.AppSeverPath}/SOP/SOP00011/Delete`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(SOP00011), {
            headers: new HttpHeaders()
                .set('Token', localStorage.getItem('token')

                ).set('Content-Type', 'Application/JSON')
        });
    }

}
