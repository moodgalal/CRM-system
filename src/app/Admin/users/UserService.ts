import { Injectable } from '@angular/core';
import { PublicShared } from '../../models/PublicShared'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from "../../models/KaizenResult";
import {GridData} from "../../models/data-model";

@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }

    GetSingle(UserName) {
        let Url = `${PublicShared.AppSeverPath}/Admin/User/GetSingle?UserName=${UserName}`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
   
    SaveData(model) {
      let Url = `${PublicShared.AppSeverPath}/Admin/User/SaveData`;
      return this.http.post<KaizenResult>(Url, model, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    UpdateData(User) {
      let Url = `${PublicShared.AppSeverPath}/Admin/User/UpdateData`;
      return this.http.post<KaizenResult>(Url, User, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    DeleteData(UserName) {
        let Url = `${PublicShared.AppSeverPath}/Admin/User/DeleteData?UserName=${UserName}`;
        return this.http.get<KaizenResult>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    RestPassword(UserName, OldPassword, NewPassword) {
        let Url = `${PublicShared.AppSeverPath}/Admin/User/Restpassword?UserName=${UserName}&OldPassword=${OldPassword}&NewPassword=${NewPassword}`;
        return this.http.get<KaizenResult>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    ChangePassword(UserName, NewPassword) {
        let Url = `${PublicShared.AppSeverPath}/Admin/User/ChangePassword?UserName=${UserName}&NewPassword=${NewPassword}`;
        return this.http.get<KaizenResult>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    public GetDataListGrid(pageSize, page, sort, filter, search) {
        let Url = `${PublicShared.AppSeverPath}/Admin/User/GetDataListGrid?page=${page}&pageSize=${pageSize}&sort=${sort}&filter=${filter}&Searchcritaria=${search}`;
        return this.http.get<GridData>(Url, {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        })
    }
    //---------------------------------------
    GetCompanys(UserName) {
        let Url = `${PublicShared.AppSeverPath}/Admin/User/GetCompanys?UserName=${UserName}`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    SetCompanyAccess(UserName, CompanyID) {
        let Url = `${PublicShared.AppSeverPath}/Admin/User/SetCompanyAccess?UserName=${UserName}&CompanyID=${CompanyID}`;
        return this.http.get<KaizenResult>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    UnSetCompanyAccess(UserName, CompanyID) {
        let Url = `${PublicShared.AppSeverPath}/Admin/User/UnSetCompanyAccess?UserName=${UserName}&CompanyID=${CompanyID}`;
        return this.http.get<KaizenResult>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    //---------------------------------------
    GetRoleByUser(UserName) {
        let Url = `${PublicShared.AppSeverPath}/Admin/User/GetRoleByUser?UserName=${UserName}`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    SetUserRole(UserName, RoleID) {
        let Url = `${PublicShared.AppSeverPath}/Admin/User/SetUserRole?UserName=${UserName}&RoleID=${RoleID}`;
        return this.http.get<KaizenResult>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    UnSetUserRole(UserName, RoleID) {
        let Url = `${PublicShared.AppSeverPath}/Admin/User/UnSetCompanyAccess?UserName=${UserName}&RoleID=${RoleID}`;
        return this.http.get<KaizenResult>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    //---------------------------------------
    GetALlCompanies() {
        let Url = `${PublicShared.AppSeverPath}/Admin/Company/FillDropDownList`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    AddCompanyAccess(companyAccess) {
        let Url = `${PublicShared.AppSeverPath}/Admin/CompanyAccess/SaveData`;
        return this.http.post<KaizenResult>(Url, companyAccess, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });

    }
    DeleteCompanyAccess(companyAccess) {
        let Url = `${PublicShared.AppSeverPath}/Admin/CompanyAccess/DeleteData`;
        return this.http.post<KaizenResult>(Url, companyAccess, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });

    }


}
