import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from "../../../models/KaizenResult";
import {GridData} from "../../../models/data-model";

@Injectable()
export class LetterFormService {


    constructor(private http: HttpClient) { }

    GetSingle(TemplateID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/LetterForm/GetSingle?TemplateID=${TemplateID}`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetLettersByTemplateID(TemplateID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/LetterForm/GetLettersByTemplateID?TemplateID=${TemplateID}`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    SaveData(CM00036) {
        let Url = `${PublicShared.AppSeverPath}/CMS/LetterForm/SaveData`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00036), { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    UpdateData(CM00036) {
        let Url = `${PublicShared.AppSeverPath}/CMS/LetterForm/UpdateData`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00036), { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }

    DeleteData(MessageTRXID) {
       let Url = `${PublicShared.AppSeverPath}/CMS/LetterForm/DeleteData?MessageTRXID=${MessageTRXID}`;
       return this.http.get<KaizenResult>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }

    public getDataGrid(pageSize, page, sort, filter, search) {
        let Url = `${PublicShared.AppSeverPath}/CMS/LetterForm/GetAgentDataGrid?page=${page}&pageSize=${pageSize}&sort=${sort}&filter=${filter}&Searchcritaria=${search}`;
        return this.http.get<GridData>(Url, {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        })
    }
    FillDropDownList() {
        let Url = `${PublicShared.AppSeverPath}/Admin/LetterType/FillDropDownList`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
}
