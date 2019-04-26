import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from '../../../models/KaizenResult';
import { GridData } from '../../../models/data-model';

@Injectable()
export class CompanyAddressService {


    constructor(private http: HttpClient) { }
    getAll() {
        let Url = `${PublicShared.AppSeverPath}/Admin/CompanyAddress/GetAll`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    } getAllCities() {
        let Url = `${PublicShared.AppSeverPath}/Admin/City/GetAll`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    getAllCountries() {
        let Url = `${PublicShared.AppSeverPath}/Admin/Country/GetAll`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetSingle(CompanyAddressID) {
        let Url = `${PublicShared.AppSeverPath}/Admin/CompanyAddress/GetSingle?CompnayAddressID=${CompanyAddressID}`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    Add(sys00001) {
        let Url = `${PublicShared.AppSeverPath}/Admin/CompanyAddress/add`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(sys00001),
            {
                headers: new HttpHeaders()
                    .set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    Update(sys00001) {
        let Url = `${PublicShared.AppSeverPath}/Admin/CompanyAddress/Update`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(sys00001),
            {
                headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
                    .set('Content-Type', 'application/json')
            });
    }
    Delete(sys00001) {
        let Url = `${PublicShared.AppSeverPath}/Admin/CompanyAddress/Delete`;
        return this.http.post<KaizenResult>(Url,
            JSON.stringify(sys00001),
            { headers: new HttpHeaders().set('Token', localStorage.getItem('token')).set('Content-Type', 'Application/JSON') });
    }
   

}
