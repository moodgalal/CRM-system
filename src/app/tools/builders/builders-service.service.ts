import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PublicShared } from "../../models/PublicShared";
import { GridData } from "../../models/data-model";
import { KaizenResult } from "../../models/KaizenResult";
@Injectable()
export class BuildersService {

    constructor(public http: HttpClient) { }

    GetALlCompanies() {
      let Url = `${PublicShared.AppSeverPath}/Admin/Company/FillDropDownList`;
      return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetALlRoles() {
      let Url = `${PublicShared.AppSeverPath}/Admin/Roles/FillDropDownList`;
      return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetRolesByView(ViewID) {
      let Url = `${PublicShared.AppSeverPath}/Sys/TRXType/GetRolesByView?ViewID=${ViewID}`;
      return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetModuleByCompany(CompanyID) {
      let Url = `${PublicShared.AppSeverPath}/Admin/Company/GetModuleByCompany?CompanyID=${CompanyID}`;
      return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    public GetScreensByModuleID(ModuleID) {
      let Url = `${PublicShared.AppSeverPath}/Sys/TRXType/GetScreensByModuleID?ModuleID=${ModuleID}`;
      return this.http.get<Array<any>>(Url, {
        headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
      })
    }
    public GetTRXTypeIDByWindowSource(WindowSource) {
      let Url = `${PublicShared.AppSeverPath}/Sys/TRXType/GetTRXTypeIDByWindowSource?WindowSource=${WindowSource}`;
      return this.http.get<Array<any>>(Url, {
        headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
      })
    }
    GetRolesByTrxTypeId(TrxTypeId) {
        let Url = `${PublicShared.AppSeverPath}/Sys/TRXType/GetRolesByTrxTypeId?TrxTypeId=${TrxTypeId}`;
        return this.http.get<Array<any>>(Url, {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        })
    }
    GetUsersByTrxTypeId(TrxTypeId) {
        let Url = `${PublicShared.AppSeverPath}/Sys/TRXType/GetUsersByTrxTypeId?TrxTypeId=${TrxTypeId}`;
        return this.http.get<Array<any>>(Url, {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        })
    }
    public getDataSource() {
        let Url = `${PublicShared.AppSeverPath}/Sys/TRXType/GetDS`;
        return this.http.get<Array<any>>(Url, {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        })
    }
    public GetViewsByTRXTypeID(trxTypeId) {
      let Url = `${PublicShared.AppSeverPath}/Sys/TRXType/GetViewsByTRXTypeID?TRXTypeID=${trxTypeId}`;
        return this.http.get<Array<any>>(Url, {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        })
    }
    public GetDSColumns(TRXTypeID) {
        let Url = `${PublicShared.AppSeverPath}/Sys/TRXType/GetDSColumns?TRXTypeID=${TRXTypeID}`;
        return this.http.get<Array<any>>(Url, {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        })
    }
    public getColumns(viewId) {
        let Url = `${PublicShared.AppSeverPath}/Sys/TRXType/GetViewColumns?ViewID=${viewId}`;
        return this.http.get<Array<any>>(Url, {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        })
    }
    public getDataGrid(pageSize, page, sort, filter, search) {
        let Url = `${PublicShared.AppSeverPath}/Sys/TRXType/GetDataListGrid?page=${page}&pageSize=${pageSize}&sort=${sort}&filter=${filter}&Searchcritaria=${search}`;
        return this.http.get<GridData>(Url, {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        })
    }

    GetCMSLookup01() {
        //Lookup01 // Lookup01Name
        let Url = `${PublicShared.AppSeverPath}/MasterData/GetCMSLookup01`;
        return this.http.get<Array<any>>(Url, {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        });
    }
    GetCMSLookup02() {
        //Lookup02 // Lookup02Name
        let Url = `${PublicShared.AppSeverPath}/MasterData/GetCMSLookup02`;
        return this.http.get<Array<any>>(Url, {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        });
    }

    //--------------------------------------------- 
    GetViewTypes() {
        let Url = `${PublicShared.AppSeverPath}/Sys/TRXType/GetViewTypes`;
        return this.http.get<Array<any>>(Url, {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        });
    }
    GetSingleView(ViewID) {
        let Url = `${PublicShared.AppSeverPath}/Sys/TRXType/GetSingleView?ViewID=${ViewID}`;
        return this.http.get<Array<any>>(Url, {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        });
    }
    SaveCaseTypeView(CM00071) {
        let Url = `${PublicShared.AppSeverPath}/Sys/TRXType/SaveCaseTypeView`;
        return this.http.post<KaizenResult>(Url, CM00071, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    UpdateView(CM00071) {
        let Url = `${PublicShared.AppSeverPath}/Sys/TRXType/UpdateView`;
        return this.http.post<KaizenResult>(Url, CM00071, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    DeleteView(CM00071) {
        let Url = `${PublicShared.AppSeverPath}/Sys/TRXType/DeleteView`;
        return this.http.post<KaizenResult>(Url, CM00071, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    //---------------------------------------------
    SaveViewsField(CM00075) {
        let Url = `${PublicShared.AppSeverPath}/Sys/TRXType/SaveViewsField`;
        return this.http.post<KaizenResult>(Url, CM00075, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    UpdateViewsFields(CM00075) {
        let Url = `${PublicShared.AppSeverPath}/Sys/TRXType/UpdateViewsFields`;
        return this.http.post<KaizenResult>(Url, CM00075, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    DeleteViewsField(CM00075) {
        let Url = `${PublicShared.AppSeverPath}/Sys/TRXType/DeleteViewsField`;
        return this.http.post<KaizenResult>(Url, CM00075, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
      //---------------------------------------------FieldEquation
    GetFieldEquation(TRXTypeID) {
      let Url = `${PublicShared.AppSeverPath}/Sys/TRXType/GetFieldEquation?TRXTypeID=${TRXTypeID}`;
      return this.http.get<Array<any>>(Url, {
        headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
      });
    }
    SaveFieldEquation(CM00080) {
      let Url = `${PublicShared.AppSeverPath}/Sys/TRXType/SaveViewsField`;
      return this.http.post<KaizenResult>(Url, CM00080, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    UpdateFieldEquation(CM00080) {
      let Url = `${PublicShared.AppSeverPath}/Sys/TRXType/UpdateViewsFields`;
      return this.http.post<KaizenResult>(Url, CM00080, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    DeleteFieldEquation(CM00080) {
      let Url = `${PublicShared.AppSeverPath}/Sys/TRXType/DeleteViewsField`;
      return this.http.post<KaizenResult>(Url, CM00080, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    //---------------------------- Update configuration view 
    UpdateCM00074(CM00074) {
        let Url = `${PublicShared.AppSeverPath}/Sys/TRXType/UpdateCM00074`;
        return this.http.post<KaizenResult>(Url, CM00074, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    AddDataSourceRole(CM00056) {
        let Url = `${PublicShared.AppSeverPath}/Sys/TRXType/AddDataSourceRole`;
        return this.http.post<KaizenResult>(Url, CM00056, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }

    DeleteDataSourceRole(CM00056) {
        let Url = `${PublicShared.AppSeverPath}/Sys/TRXType/DeleteDataSourceRole`;
        return this.http.post<KaizenResult>(Url, CM00056, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    AddDataSourceUser(CM00057) {
        let Url = `${PublicShared.AppSeverPath}/Sys/TRXType/AddDataSourceUser`;
        return this.http.post<KaizenResult>(Url, CM00057, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }

    DeleteDataSourceUser(CM00056) {
        let Url = `${PublicShared.AppSeverPath}/Sys/TRXType/DeleteDataSourceUser`;
        return this.http.post<KaizenResult>(Url, CM00056, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    SaveViewRole(CM00072) {
      let Url = `${PublicShared.AppSeverPath}/Sys/TRXType/SaveViewRole`;
      return this.http.post<KaizenResult>(Url, CM00072, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    DeleteViewRole(CM00072) {
      let Url = `${PublicShared.AppSeverPath}/Sys/TRXType/DeleteViewRole`;
      return this.http.post<KaizenResult>(Url, CM00072, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }


    //=================================
    GetViewUsers(ViewID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/ViewUser/GetViewUsers?ViewID=${ViewID}`;
        return this.http.get<Array<any>>(Url, {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        });
    }
    SaveViewUser(CM00073) {
        let Url = `${PublicShared.AppSeverPath}/CMS/ViewUser/Add`;
        return this.http.post<KaizenResult>(Url, CM00073, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    DeleteViewUser(CM00073) {
        let Url = `${PublicShared.AppSeverPath}/CMS/ViewUser/Delete`;
        return this.http.post<KaizenResult>(Url, CM00073, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }

}
