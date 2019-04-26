import { Injectable } from '@angular/core';
import { PublicShared } from '../models/PublicShared'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from "../models/KaizenResult";
import { GridData } from "../models/data-model";

@Injectable()
export class AdminService {

  constructor(private http: HttpClient) { }

  GetALlCompanies() {
    let Url = `${PublicShared.AppSeverPath}/Admin/Company/FillDropDownList`;
    return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
  }
  GetModuleByCompany(CompanyID) {
    let Url = `${PublicShared.AppSeverPath}/Admin/Company/GetModuleByCompany?CompanyID=${CompanyID}`;
    return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
  }
  public GetMenueType() {
    let Url = `${PublicShared.AppSeverPath}/MasterData/GetMenueType`;

    return this.http.get<Array<any>>(Url, {
      headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
    })
  }
  public GetMasterMenu(ModuleID, MenueTypeID) {
    let Url = `${PublicShared.AppSeverPath}/Admin/Menu/GetMasterMenu?ModuleID=${ModuleID}&MenueTypeID=${MenueTypeID}`;
    return this.http.get<Array<any>>(Url, {
      headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
    })
  }
  public GetRoleTasks(ModuleID, MenueTypeID, RoleID , CompanyID) {
    let Url = `${PublicShared.AppSeverPath}/Admin/Menu/GetRoleTasks?ModuleID=${ModuleID}&MenueTypeID=${MenueTypeID}&RoleID=${RoleID}&CompanyID=${CompanyID}`;
    return this.http.get<Array<any>>(Url, {
      headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
    })
  }
  SaveMenu(Kaizen004) {
    let Url = `${PublicShared.AppSeverPath}/Admin/Menu/SaveData`;
    return this.http.post<KaizenResult>(Url, Kaizen004, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
  }
  DeleteMenu(Kaizen004) {
    let Url = `${PublicShared.AppSeverPath}/Admin/Menu/DeleteData`;
    return this.http.post<KaizenResult>(Url, Kaizen004, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
  }
  GetRolesByCompany(CompanyID) {
    let Url = `${PublicShared.AppSeverPath}/Admin/Roles/GetRolesByCompany?CompanyID=${CompanyID}`;
    return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
  }
  GetRolesByUser(UserName) {
    let Url = `${PublicShared.AppSeverPath}/Admin/Roles/GetRolesByUser?UserName=${UserName}`;
    return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
  }
  GetALlRoles() {
    let Url = `${PublicShared.AppSeverPath}/Admin/Roles/FillDropDownList`;
    return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
  }
  SaveDataKaizenUserRole(KaizenUserRole) {
    let Url = `${PublicShared.AppSeverPath}/Admin/Roles/SaveDataKaizenUserRole`;
    return this.http.post<KaizenResult>(Url, KaizenUserRole, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
  }
  DeleteKaizenUserRole(KaizenUserRole) {
    let Url = `${PublicShared.AppSeverPath}/Admin/Roles/DeleteKaizenUserRole`;
    return this.http.post<KaizenResult>(Url, KaizenUserRole, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
  }
  SaveCompanyRole(Kaizen006) {
    let Url = `${PublicShared.AppSeverPath}/Admin/Roles/SaveCompanyRole`;
    return this.http.post<KaizenResult>(Url, Kaizen006, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
  }
  DeleteCompanyRole(Kaizen006) {
    let Url = `${PublicShared.AppSeverPath}/Admin/Roles/DeleteCompanyRole`;
    return this.http.post<KaizenResult>(Url, Kaizen006, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
  }
  //-------------------------------- 
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
