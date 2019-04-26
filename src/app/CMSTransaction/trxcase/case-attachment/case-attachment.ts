import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from "../../../models/KaizenResult";

@Injectable()
export class Caseattachment {


  constructor(private http: HttpClient) { }

  GetDocuments(TRXTypeID, CaseRef) {
    let Url = `${PublicShared.AppSeverPath}/CMS/CaseMain/GetDocuments?TRXTypeID=${TRXTypeID}&CaseRef=${CaseRef}`;
    return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
  }

  GetDocumentTypeList() {
    let Url = `${PublicShared.AppSeverPath}//CMS/Documents/GetDocumentTypeList`;
    return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
  }

  SaveCaseDocument(CM00208) {
    let Url = `${PublicShared.AppSeverPath}/CMS/Documents/SaveCaseDocument`;
    return this.http.post<KaizenResult>(Url, CM00208, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
  }

}
