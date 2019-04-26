import { Injectable } from '@angular/core';
import { PublicShared } from '../../models/PublicShared'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from "../../models/KaizenResult";

@Injectable()
export class TrxCaseService {

    constructor(private http: HttpClient) { }

    getObject(trxId, caseRef) {
        let Url = `${PublicShared.AppSeverPath}/CMS/CaseMain/GetSingle?TRXTypeID=${trxId}&CaseRef=${caseRef}`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    openFile(documentName) {
        let Url = `${PublicShared.AppSeverPath}/CMS/Documents/openfile?filename=${documentName}`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });

    }
    getDebtorObject(cifTrxId, cifRef) {


        let Url = `${PublicShared.AppSeverPath}/CMS/Debtor/GetSingle?TRXTypeID=${cifTrxId}&DebtorID=${cifRef}`;
        console.log(Url);
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    updateDebtor(CM00100) {
      let Url = `${PublicShared.AppSeverPath}/CMS/Debtor/UpdateDebtor`;
      return this.http.post<KaizenResult>(Url, JSON.stringify(CM00100), {
        headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
          .set('content-type', 'application/json')
      });
    }
    GetDebtorAddressSingle(DebtorID, TRXTypeID, AddressCode) {
        let Url = `${PublicShared.AppSeverPath}/CMS/Debtor/GetDebtorAddressSingle?DebtorID=${DebtorID}&TRXTypeID=${TRXTypeID}&AddressCode=${AddressCode}`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    SaveDebtorAddress(model) {
        let Url = `${PublicShared.AppSeverPath}/CMS/Debtor/SaveDebtorAddress`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(model), { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }

    updateObject(model) {

        let Url = `${PublicShared.AppSeverPath}/CMS/CaseMain/UpdateMainCase`;

        return this.http.post<any>(Url, model, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    getTemplates() {

        let Url = `${PublicShared.AppSeverPath}/CMS/SMS/GetALLTemplate`;

        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }

    saveSms(trxTypeId, caseRef, mobileNo, templateId, content) {
        let Url = `${PublicShared.AppSeverPath}/CMS/CaseMain/SMSRequest?TRXTypeID=${trxTypeId}&CaseRef=${caseRef}&MobileNo=${mobileNo}&TemplateID=${templateId}&TemplateContant=${content}`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }


    GetCaseDoAction(TRXTypeID, CaseRef) {
        let Url = `${PublicShared.AppSeverPath}/CMS/CaseMain/GetCaseDoAction?TRXTypeID=${TRXTypeID}&CaseRef=${CaseRef}`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetCaseDoActionOpenByDebtor(CIFTRXTypeID, CIFNumber) {
        let Url = `${PublicShared.AppSeverPath}/CMS/CaseMain/GetCaseDoActionOpenByDebtor?CIFTRXTypeID=${CIFTRXTypeID}&CIFNumber=${CIFNumber}`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetPayment(TRXTypeID, CaseRef) {
      let Url = `${PublicShared.AppSeverPath}/CMS/CaseMain/GetPayment?TRXTypeID=${TRXTypeID}&CaseRef=${CaseRef}`;
      return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetPaymentByDebtor(CIFTRXTypeID, DebtorID) {
      let Url = `${PublicShared.AppSeverPath}/CMS/CaseMain/GetPaymentByDebtor?CIFTRXTypeID=${CIFTRXTypeID}&DebtorID=${DebtorID}`;
      return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
  //-------------------

    GetDocuments(TRXTypeID, CaseRef) {
      let Url = `${PublicShared.AppSeverPath}/CMS/CaseMain/GetDocuments?TRXTypeID=${TRXTypeID}&CaseRef=${CaseRef}`;
      return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetDocumentsByDebtor(CIFTRXTypeID, DebtorID) {
      let Url = `${PublicShared.AppSeverPath}/CMS/CaseMain/GetDocumentsByDebtor?CIFTRXTypeID=${CIFTRXTypeID}&DebtorID=${DebtorID}`;
      return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }


    AddCM10701(model) {
        let Url = `${PublicShared.AppSeverPath}/CMS/DoAction/AddCM10701`;
        return this.http.post<KaizenResult>(Url, model, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    SaveCaseHistoryData(model, CaseRef, TRXTypeID, CaseStatusID, CaseStatusChild, CaseStatusChildName, CaseStatusComment) {
        let Url = `${PublicShared.AppSeverPath}/CMS/DoAction/SaveCaseHistoryData?CaseRef=${CaseRef}&TRXTypeID=${TRXTypeID}&CaseStatusID=${CaseStatusID}&CaseStatusChild=${CaseStatusChild}&CaseStatusChildName=${CaseStatusChildName}&CaseStatusComment=${CaseStatusComment}`;
        return this.http.post<KaizenResult>(Url, model, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    SaveCaseTaskListData(model, CaseRef, TRXTypeID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/DoAction/SaveCaseTaskListData?CaseRef=${CaseRef}&TRXTypeID=${TRXTypeID}`;
        return this.http.post<KaizenResult>(Url, model, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }

    // Case-Attachment
    UpdateWorkableFields(model, CaseRef, TRXTypeID, CaseStatusID, CaseStatusChild, CaseStatusChildName, CaseStatusComment) {
      let Url = `${PublicShared.AppSeverPath}/CMS/DoAction/UpdateWorkableFields?CaseRef=${CaseRef}&TRXTypeID=${TRXTypeID}&CaseStatusID=${CaseStatusID}&CaseStatusChild=${CaseStatusChild}&CaseStatusChildName=${CaseStatusChildName}&CaseStatusComment=${CaseStatusComment}`;
      return this.http.post<KaizenResult>(Url, model, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }


  //
  

}
