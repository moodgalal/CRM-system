import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { PublicShared } from "../../models/PublicShared";


@Injectable()
export class TrxTypeService {

    constructor(public http: HttpClient) { }
    public getDataSource() {
        let Url = `${PublicShared.AppSeverPath}/MasterData/GetMyDataSource`;
        return this.http.get<Array<any>>(Url, {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        })
    }
}
