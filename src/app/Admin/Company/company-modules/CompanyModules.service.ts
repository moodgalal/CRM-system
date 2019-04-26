import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from "../../../models/KaizenResult";
import { GridData } from "../../../models/data-model";

@Injectable()
export class CompanyModulesService {

    constructor(private http: HttpClient) { }

  
    Save(Kaizen00101) {
        let Url = `${PublicShared.AppSeverPath}/Admin/Company/AddCompanyModule`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(Kaizen00101), {
            headers: new HttpHeaders()
                .set('Token', localStorage.getItem('token')).set('Content-Type', 'Application/JSON')
        });
    }
 
    DeleteData(Kaizen00101) {
        let Url = `${PublicShared.AppSeverPath}/Admin/Company/DeleteCompanyModule`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(Kaizen00101), {
            headers: new HttpHeaders()
                .set('Token', localStorage.getItem('token')).set('Content-Type','Application/JSON')
        });
    }
    GetCompany() {
        let Url = `${PublicShared.AppSeverPath}/Admin/Company/FillDropDownList`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetModules() {
        let Url = `${PublicShared.AppSeverPath}/Admin/Modules/FillDropDownList`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });

    }
    GetCompanyModules(companyID) {
        let Url = `${PublicShared.AppSeverPath}/Admin/Company/GetModuleByCompany?CompanyID=${companyID}`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    }


