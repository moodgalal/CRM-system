import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from "../../../models/KaizenResult";
import {GridData} from "../../../models/data-model";

@Injectable()
export class LetterTypeService {


    constructor(private http: HttpClient) { }

    GetSingle(TemplateID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/LetterType/GetSingle?TemplateID=${TemplateID}`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    GetTemplates(TRXTypeID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/LetterType/GetTemplates?TRXTypeID=${TRXTypeID}`;
        return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    SaveData(CM00036) {
        let Url = `${PublicShared.AppSeverPath}/CMS/LetterType/SaveData`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00036), { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    UpdateData(CM00036) {
        let Url = `${PublicShared.AppSeverPath}/CMS/LetterType/UpdateData`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(CM00036), { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    DeleteData(TemplateID) {
        let Url = `${PublicShared.AppSeverPath}/CMS/LetterType/DeleteAgent?TemplateID=${TemplateID}`;
        return this.http.get<KaizenResult>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }

    public getDataGrid(pageSize, page, sort, filter, search) {
        let Url = `${PublicShared.AppSeverPath}/CMS/LetterType/GetAgentDataGrid?page=${page}&pageSize=${pageSize}&sort=${sort}&filter=${filter}&Searchcritaria=${search}`;
        return this.http.get<GridData>(Url, {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        })
    }
}
