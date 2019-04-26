import { Injectable } from '@angular/core';
import { PublicShared } from '../../models/PublicShared'
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class RemainderService {


    constructor(private http: HttpClient) { }

    GetMyListBySupervisor(FilterObject) {
        let Url = `${PublicShared.AppSeverPath}/CMS/Agent/GetMyListBySupervisor`;
        return this.http.post<Array<any>>(Url, FilterObject, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) })
    }

}
  