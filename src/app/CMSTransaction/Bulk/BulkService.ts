import { Injectable } from '@angular/core';
import { PublicShared } from '../../models/PublicShared'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from "../../models/KaizenResult";
import { GridData } from '../../models/data-model';

@Injectable()
export class BulkService {


  constructor(private http: HttpClient) { }
  GetNextBulkUpdateID() {
    let Url = `${PublicShared.AppSeverPath}/CMS/BulkUpdate/GetNextBulkUpdateID`;
    return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) })
  }
  GetAllOVerridableFields(TRXTypeID) {
    let Url = `${PublicShared.AppSeverPath}/Sys/TRXType/GetAllOVerridableFields?TRXTypeID=` + TRXTypeID;
    return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) })
  }
  UploadDebtorData(TRXTypeID, TableName, KaizenColumn) {
    let Url = `${PublicShared.AppSeverPath}/CMS/Debtor/UploadDebtorData?TRXTypeID=${TRXTypeID}&TableName=${TableName}`;
    return this.http.post<KaizenResult>(Url, KaizenColumn, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) })
  }
  ValidateMissingDebtorIDData() {
    let Url = `${PublicShared.AppSeverPath}/CMS/Debtor/ValidateMissingDebtorIDData`;
    return this.http.get<GridData>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) })
  }
  public PostUploadDebtorData() {
    let Url = `${PublicShared.AppSeverPath}/CMS/Debtor/PostUploadDebtorData`;
    return this.http.post<KaizenResult>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) })
  }
  UploadDebtorAddressData(TRXTypeID, AddressCode, TableName, KaizenColumn) {
    let Url = `${PublicShared.AppSeverPath}/CMS/Debtor/UploadDebtorAddressData?TRXTypeID=${TRXTypeID}&AddressCode=${AddressCode}&TableName=${TableName}`;
    return this.http.post<KaizenResult>(Url, KaizenColumn, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) })
  }
  public PostUploadDebtorAddressData() {
    let Url = `${PublicShared.AppSeverPath}/CMS/Debtor/PostUploadDebtorAddressData`;
    return this.http.post<KaizenResult>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) })
  }
  GetAllScriptsByCaseStatusID(CaseStatusID) {
    let Url = `${PublicShared.AppSeverPath}/CMS/DoAction/GetAllScriptsByCaseStatusID?CaseStatusID=${CaseStatusID}`;
    return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) })
  }
  UploadCaseData(TRXTypeID,AddressCode,ClientID,CIFTRXTypeID ,TableName, KaizenColumn) {
    let Url = `${PublicShared.AppSeverPath}/CMS/UploadCase/UploadCaseData?TableName=${TableName}&AddressCode=${AddressCode}&ClientID=${ClientID}&CIFTRXTypeID=${CIFTRXTypeID}&TRXTypeID=${TRXTypeID}`;
    return this.http.post<KaizenResult>(Url, KaizenColumn, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) })
  }
  ValidateMissingCaseData() {
    let Url = `${PublicShared.AppSeverPath}/CMS/UploadCase/ValidateMissingCaseData`;
    return this.http.get<GridData>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) })
  }
  ValidateCaseDuplicateForUploading() {
    let Url = `${PublicShared.AppSeverPath}/CMS/UploadCase/ValidateCaseDuplicateForUploading`;
    return this.http.get<GridData>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) })
  }
  ValidateCaseOld() {
    let Url = `${PublicShared.AppSeverPath}/CMS/UploadCase/ValidateCaseOld`;
    return this.http.get<GridData>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) })
  }
  ValidateCaseNew() {
    let Url = `${PublicShared.AppSeverPath}/CMS/UploadCase/ValidateCaseNew`;
    return this.http.get<GridData>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) })
  }
  ValidateRepeatedCases() {
    let Url = `${PublicShared.AppSeverPath}/CMS/UploadCase/ValidateRepeatedCases`; 
    return this.http.get<GridData>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) })
  }
  PostUploadCases(UploadedDataModel) {
    let Url = `${PublicShared.AppSeverPath}/CMS/UploadCase/PostUploadCases`;
    return this.http.post<KaizenResult>(Url, UploadedDataModel, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) })
  }
  public AddBulkUploadAsginment(CM00205) {
    let Url = `${PublicShared.AppSeverPath}/CMS/CaseMain/AddBulkUploadAsginment`;
    return this.http.post<KaizenResult>(Url, CM00205, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
  }
}
