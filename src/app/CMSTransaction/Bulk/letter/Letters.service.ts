import { Injectable } from '@angular/core';
import { PublicShared } from '../../../models/PublicShared'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from "../../../models/KaizenResult";
import { GridData } from "../../../models/data-model";

@Injectable()
export class LettersService {


    constructor(private http: HttpClient) { }
    public GetMyViewsByTRXTypeID(trxTypeId) {
      let Url = `${PublicShared.AppSeverPath}/MasterData/GetMyViewsByTRXTypeID?TRXTypeID=${trxTypeId}`;
      return this.http.get<Array<any>>(Url, {
        headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
      })
    }
    GetTemplates(TRXTypeID) {
      let Url = `${PublicShared.AppSeverPath}/CMS/LetterType/GetTemplates?TRXTypeID=${TRXTypeID}`;
      return this.http.get<any>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
    public getGridData(viewId, pageSize, page, sort, filter, MainGridFilter, search) {
      let Url = `${PublicShared.AppSeverPath}/MasterData/GetDataListGrid?ViewID=${viewId}&page=${page}&pageSize=${pageSize}&sort=${sort}&filter=${filter}&MainGridFilter=${MainGridFilter}&Searchcritaria=${search}`;
      return this.http.get<GridData>(Url, {
        headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
      })
    }
}
