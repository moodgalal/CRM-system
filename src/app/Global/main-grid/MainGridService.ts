import { Injectable } from '@angular/core';
import { PublicShared } from '../../models/PublicShared'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from "../../models/KaizenResult";
import { GridData } from "../../models/data-model";

@Injectable()
export class MainGridService {

  constructor(private http: HttpClient) { }

  public GetDataGrid(pageSize, page, sort, filter, MainGridFilter, TxtSearch) {
    let Url = `${PublicShared.AppSeverPath}/${PublicShared.MainGridURL}?page=${page}&pageSize=${pageSize}&sort=${sort}&filter=${filter}&MainGridFilter=${MainGridFilter}&TxtSearch=${TxtSearch}`;
    return this.http.get<GridData>(Url, {
      headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
    })
  }
}
