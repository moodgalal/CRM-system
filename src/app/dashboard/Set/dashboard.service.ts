import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PublicShared } from "../../models/PublicShared";
import { GridData } from "../../models/data-model";
import { KaizenResult } from "../../models/KaizenResult";
@Injectable()
export class DashboardService {

    constructor(public http: HttpClient) { }

    GetALlCompanies() {
        let Url = `${PublicShared.AppSeverPath}/Admin/Company/FillDropDownList`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetRolesByCompany(CompanyID) {
        let Url = `${PublicShared.AppSeverPath}/Admin/Roles/GetRolesByCompany?CompanyID=${CompanyID}`;
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
    GetAllReports() {
        let Url = `${PublicShared.AppSeverPath}/MasterDashboard/GetAllReports`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetReportUsers(ReportID) {
        let Url = `${PublicShared.AppSeverPath}/MasterDashboard/GetReportUsers?ReportID=${ReportID}`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });

    }
    GetDashboardReports(DashboardID) {
        let Url = `${PublicShared.AppSeverPath}/MasterDashboard/GetDashBoardReportsList?DashboardCode=${DashboardID}`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetReportRoles(ReportID) {
        let Url = `${PublicShared.AppSeverPath}/MasterDashboard/GetReportRoles?ReportID=${ReportID}`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });

    }
    AddReportRole(Kaizen00056) {
        let Url = `${PublicShared.AppSeverPath}/MasterDashboard/AddReportRole`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(Kaizen00056), {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token')).set('Content-Type', 'Application/JSON')
        });
    }
    AddReportUser(Kaizen00057) {
        let Url = `${PublicShared.AppSeverPath}/MasterDashboard/AddReportUser`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(Kaizen00057), {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token')).set('Content-Type', 'Application/JSON')
        });
    }
    RemoveReportUser(Kaizen00057) {
        let Url = `${PublicShared.AppSeverPath}/MasterDashboard/RemoveReportUser`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(Kaizen00057), {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token')).set('Content-Type', 'Application/JSON')
        });
    }
    RemoveReportRole(Kaizen00056) {
        let Url = `${PublicShared.AppSeverPath}/MasterDashboard/RemoveReportRole`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(Kaizen00056), {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token')).set('Content-Type', 'Application/JSON')
        });
    }
    AddDashboardRole(Kaizen00054) {
        let Url = `${PublicShared.AppSeverPath}/MasterDashboard/AddDashboardRole`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(Kaizen00054), {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token')).set('Content-Type', 'Application/JSON')
        });
    }
    RemoveDashboardRole(Kaizen00054) {
        let Url = `${PublicShared.AppSeverPath}/MasterDashboard/RemoveDashboardRole`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(Kaizen00054), {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token')).set('Content-Type', 'Application/JSON')
        });
    }
    GetDashboardByCompany(CompanyID) {
      let Url = `${PublicShared.AppSeverPath}/MasterDashboard/GetDashboardByCompany?CompanyID=${CompanyID}`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    //GetMyDashBoard(CompanyID) {
    //  let Url = `${PublicShared.AppSeverPath}/MasterDashboard/GetMyDashBoard?CompanyID=${CompanyID}`;
    //  return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    //}
    GetDashRoles(DashboardCode) {
        let Url = `${PublicShared.AppSeverPath}/MasterDashboard/GetDashRoles?DashboardCode=${DashboardCode}`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });

    }
    GetAllKaizen00053() {
        let Url = `${PublicShared.AppSeverPath}/MasterDashboard/GetKaizen00035`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });

    }
    GetDashboardUsers(DashboardCode) {
        let Url = `${PublicShared.AppSeverPath}/MasterDashboard/GetDashboardUsers?DashboardCode=${DashboardCode}`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    AddDashboardUser(Kaizen00055) {
        let Url = `${PublicShared.AppSeverPath}/MasterDashboard/AddDashboardUser`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(Kaizen00055), {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token')).set('Content-Type', 'Application/JSON')
        });
    }
    RemoveDashboardUser(Kaizen00055) {
        let Url = `${PublicShared.AppSeverPath}/MasterDashboard/RemoveDashboardUser`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(Kaizen00055), {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token')).set('Content-Type', 'Application/JSON')
        });
    }
    CreateDash(Kaizen00050) {
        let Url = `${PublicShared.AppSeverPath}/MasterDashboard/AddDashboard`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(Kaizen00050), {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token')).set('Content-Type', 'Application/JSON')
        });
    }
    EditDash(Kaizen00050) {
        let Url = `${PublicShared.AppSeverPath}/MasterDashboard/EditDashboard`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(Kaizen00050), {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token')).set('Content-Type', 'Application/JSON')
        });
    }
    removeDash(Kaizen00050) {
        let Url = `${PublicShared.AppSeverPath}/MasterDashboard/RemoveDashboard`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(Kaizen00050), {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token')).set('Content-Type', 'Application/JSON')
        });
    }
    AddKaizen00053(Kaizen00053) {
        let Url = `${PublicShared.AppSeverPath}/MasterDashboard/AddKaizen00053`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(Kaizen00053), {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token')).set('Content-Type', 'Application/JSON')
        });
    }
    RemoveKaizen00053(Kaizen00053) {
        let Url = `${PublicShared.AppSeverPath}/MasterDashboard/RemoveKaizen00053`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(Kaizen00053), {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token')).set('Content-Type', 'Application/JSON')
        });
    }
    GetKaizen00035ByReportAndDashboard(DashboardID) {
        let Url = `${PublicShared.AppSeverPath}/MasterDashboard/GetKaizen00035ByReportAndDashboard?DashboardID=${DashboardID}`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });

    }

}
