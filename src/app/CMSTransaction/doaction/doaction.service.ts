import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  PublicShared } from '../../models/PublicShared';
@Injectable()
export class doactionService {


    constructor(private http: HttpClient) { }


    
  

    GetAllScriptsByCaseStatusID(CaseStatusID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/DoAction/GetAllScriptsByCaseStatusID?CaseStatusID=${CaseStatusID}`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) })
    }
    GetWorkableFields(CaseStatusID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/DoAction/GetWorkableFields?CaseStatusID=${CaseStatusID}`;
        return this.http.get<Array<any>>(Url, {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        });
    }
    GetWorkableFieldsByCaseRef(CaseStatusID, CaseRef, TRXTypeID) {
      let Url = `${PublicShared.AppSeverPath}/CMS/DoAction/GetWorkableFieldsByCaseRef?CaseStatusID=${CaseStatusID}&CaseRef=${CaseRef}&TRXTypeID=${TRXTypeID}`;
      return this.http.get<Array<any>>(Url, {
        headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
      });
    }
    GetGetAllLookup4WorkableFields(CaseStatusID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/DoAction/GetGetAllLookup4WorkableFields?CaseStatusID=${CaseStatusID}`;
        return this.http.get<Array<any>>(Url, {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        });
    }
    GetTaskList(CaseStatusID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/DoAction/GetTaskList?CaseStatusID=${CaseStatusID}`;
        return this.http.get<Array<any>>(Url, {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        });
    }
}
