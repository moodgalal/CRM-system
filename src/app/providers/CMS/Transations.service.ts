import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GridData } from '../../models/data-model';
import { PublicShared } from "../../models/PublicShared";
import { KaizenResult } from "../../models/KaizenResult";

@Injectable()
export class CMSService {
    constructor(public http: HttpClient) { }
  
    GetNextBulkUpdateID() {
        let Url = `${PublicShared.AppSeverPath}/CMS/BulkUpdate/GetNextBulkUpdateID`;
        return this.http.get<Array<any>>(Url, {headers: new HttpHeaders().set('Token', localStorage.getItem('token'))})
    }
    GetAllOVerridableFields(TRXTypeID) {
        let Url = `${PublicShared.AppSeverPath}/Sys/TRXType/GetAllOVerridableFields?TRXTypeID=` + TRXTypeID;
        return this.http.get<Array<any>>(Url, {headers: new HttpHeaders().set('Token', localStorage.getItem('token'))})
    }
    SaveBulkUpdate(ClientID, KaizenID, TRXTypeID, SelectedCaseAccountNo, FilePath, KaizenColumn) {
        let Url = `${PublicShared.AppSeverPath}/CMS/BulkUpdate/SaveBulkUpdate?ClientID=${ClientID}&KaizenID=${KaizenID}&TRXTypeID=${TRXTypeID}&CaseRef=${SelectedCaseAccountNo}&FilePath=${FilePath}`;
        return this.http.post<KaizenResult>(Url, KaizenColumn,{headers: new HttpHeaders().set('Token', localStorage.getItem('token'))})
    }
    public GetUpdatedFieldData(KaizenID, TRXTypeID, FieldName) {
        let Url = `${PublicShared.AppSeverPath}/CMS/BulkUpdate/GetUpdatedFieldData?KaizenID=${KaizenID}&TRXTypeID=${TRXTypeID}&FieldName=${FieldName}`;
        return this.http.get<Array<any>>(Url, {headers: new HttpHeaders().set('Token', localStorage.getItem('token'))})
    }
    public UpdatedFieldData(KaizenID, FieldName) {
        let Url = `${PublicShared.AppSeverPath}/CMS/BulkUpdate/UpdatedFieldData?KaizenID=${KaizenID}&FieldName=${FieldName}`;
        return this.http.get<KaizenResult>(Url, {headers: new HttpHeaders().set('Token', localStorage.getItem('token'))})
    }
  
   
    DeleteUpload(ClientID, KaizenID, TRXTypeID, SelectedCaseAccountNo, FilePath) {
      let Url = `${PublicShared.AppSeverPath}/CMS/BulkUpdate/DeleteUpload?ClientID=${ClientID}&KaizenID=${KaizenID}&TRXTypeID=${TRXTypeID}&CaseRef=${SelectedCaseAccountNo}&TableName=${FilePath}`;
        return this.http.get<KaizenResult>(Url, {headers: new HttpHeaders().set('Token', localStorage.getItem('token'))})
    }
    ArchiveUpload(ClientID, KaizenID, TRXTypeID, SelectedCaseAccountNo, FilePath) {
        let Url = `${PublicShared.AppSeverPath}/CMS/BulkUpdate/ArchiveUpload?ClientID=${ClientID}&KaizenID=${KaizenID}&TRXTypeID=${TRXTypeID}&CaseRef=${SelectedCaseAccountNo}&TableName=${FilePath}`;
        return this.http.get<KaizenResult>(Url, {headers: new HttpHeaders().set('Token', localStorage.getItem('token'))})
    }
    GetArchiveUpload(KaizenID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/BulkUpdate/GetArchiveUpload?KaizenID=` + KaizenID;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) })
    }
    PostArchiveUpload(KaizenID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/BulkUpdate/PostArchiveUpload?KaizenID=${KaizenID}`;
        return this.http.get<KaizenResult>(Url, {headers: new HttpHeaders().set('Token', localStorage.getItem('token'))})
    }
    PostArchiveUpload02(KaizenID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/BulkUpdate/PostArchiveUpload02?KaizenID=${KaizenID}`;
        return this.http.get<KaizenResult>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) })
    }
    PostArchiveUpload03(KaizenID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/BulkUpdate/PostArchiveUpload03?KaizenID=${KaizenID}`;
        return this.http.get<KaizenResult>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) })
    }

    //--------------------------------
    GetNextTRX_BulkAssignment() {
        let Url = `${PublicShared.AppSeverPath}/CMS/BulkUpdate/GetNextTRX_BulkAssignment`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) })
    }
    UploadCreateAssigmnemtData(ClientID, KaizenID, TRXTypeID, FilePath, CaseRef, UploadAgentID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/BulkUpdate/UploadBulkAssignment?ClientID=${ClientID}&KaizenID=${KaizenID}&TRXTypeID=${TRXTypeID}&UploadCase=${CaseRef}&UploadAgentID=${UploadAgentID}&FilePath=${FilePath}`;
        return this.http.post<KaizenResult>(Url, null, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) })
    }
    GetBulkAssignment(KaizenID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/BulkUpdate/GetBulkAssignment?KaizenID=` + KaizenID;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) })
    }
    PostBulkCaseAssignment(KaizenID, TRXTypeID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/BulkUpdate/PostBulkCaseAssignment?KaizenID=${KaizenID}&TRXTypeID=${TRXTypeID}`;
        return this.http.get<KaizenResult>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) })
    }

    //--------------------------------
    GetNextDoAction() {
        let Url = `${PublicShared.AppSeverPath}/CMS/BulkUpdate/GetNextDoAction`;
        return this.http.get(Url, {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        })
    }
    UploadBulkAction(ClientID, KaizenID, TRXTypeID, FilePath, CaseRef) {
        let Url = `${PublicShared.AppSeverPath}/CMS/BulkUpdate/UploadBulkAction?ClientID=${ClientID}&KaizenID=${KaizenID}&TRXTypeID=${TRXTypeID}&CaseRef=${CaseRef}&FilePath=${FilePath}`;
        return this.http.post<KaizenResult>(Url, null, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) })
    }
    GetUploadBulkAction(KaizenID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/BulkUpdate/GetUploadBulkAction?KaizenID=` + KaizenID;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) })
    }

   
    //------------------------

    GetCaseStatusList() {
        let Url = `${PublicShared.AppSeverPath}/CMS/DoAction/GetCaseStatusList`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetCaseStatusTypeList() {
        let Url = `${PublicShared.AppSeverPath}/CMS/DoAction/GetCaseStatusTypeList`;
        return this.http.get(Url, {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        });
    }
    GetMyAddressList() {
        let Url = `${PublicShared.AppSeverPath}/CMS/Debtor/GetMyAddressList`;
        return this.http.get(Url, {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        });
    }
    FillTaskTypesList() {
        let Url = `${PublicShared.AppSeverPath}/CMS/DoAction/FillTaskTypesList`;
        return this.http.get<Array<any>>(Url, {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        });
    }
    FillTaskPrioritiesList() {
        let Url = `${PublicShared.AppSeverPath}/CMS/DoAction/FillTaskPrioritiesList`;
        return this.http.get<Array<any>>(Url, {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        });
    }
}
