import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { PublicShared } from "../../models/PublicShared";


@Injectable()
export class TrxViewService {

  constructor(public http: HttpClient) { }

  public GetMyViewsByTRXTypeID(TRXTypeID) {
    let Url = `${PublicShared.AppSeverPath}/MasterData/GetMyViewsByTRXTypeID?TRXTypeID=${TRXTypeID}`;
    return this.http.get<Array<any>>(Url, {
      headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
    })
  }
}
