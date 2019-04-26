import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {GridData} from '../../models/data-model';
import {PublicShared} from "../../models/PublicShared";

@Injectable()
export class lookupgridService {

  constructor(public http: HttpClient) { }
  public GetClientGrid(ServerFuncName, page, pageSize, sort, Smartfilter, filter, MainGridFilter, FieldID = "", FltrOperator = "", Searchcritaria = "") {
      if (FieldID === "undefined" || FieldID === "")
          FieldID = "-1";
      if (FltrOperator === "undefined" || FltrOperator === "")
          FltrOperator = "-1";
      if (Searchcritaria === "undefined")
          Searchcritaria = "";
      
      let Url = `${PublicShared.AppSeverPath}/MasterData/${ServerFuncName}?page=${page}&pageSize=${pageSize}&sort=${sort}&Smartfilter=${Smartfilter}&filter=${filter}&MainGridFilter=${MainGridFilter}&FieldID=${FieldID}&FltrOperator=${FltrOperator}&Searchcritaria=${Searchcritaria}`;
      console.log(Url);
      return this.http.get<GridData>(Url, {
          headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
      })
  }
}
