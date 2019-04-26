import { Injectable } from '@angular/core';
import { PublicShared } from '../../models/PublicShared'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from "../../models/KaizenResult";
import { GridData } from "../../models/data-model";

@Injectable()
export class CompanyService {

    constructor(private http: HttpClient) { }

    GetSingle(CompanyID) {
        let Url = `${PublicShared.AppSeverPath}/Admin/Company/GetSingle?CompanyID=${CompanyID}`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    SaveData(Company) {
        let Url = `${PublicShared.AppSeverPath}/Admin/Company/SaveData`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(Company), { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    UpdateData(Company) {
        let Url = `${PublicShared.AppSeverPath}/Admin/Company/UpdateData`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(Company), { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    DeleteData(CompanyID) {
        let Url = `${PublicShared.AppSeverPath}/Admin/Company/DeleteData?CompanyID=${CompanyID}`;
        return this.http.get<KaizenResult>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    FillDropDownList() {
        let Url = `${PublicShared.AppSeverPath}/Admin/Company/FillDropDownList`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    public getDataGrid(pageSize, page, sort, filter, search) {
        let Url = `${PublicShared.AppSeverPath}/Admin/Company/GetDataListGrid?page=${page}&pageSize=${pageSize}&sort=${sort}&filter=${filter}&Searchcritaria=${search}`;
        return this.http.get<GridData>(Url, {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        })
    }

}
