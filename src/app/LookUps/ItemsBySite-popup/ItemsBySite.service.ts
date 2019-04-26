import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {GridData} from '../../models/data-model';
import {PublicShared} from "../../models/PublicShared";

@Injectable()
export class ItemsBySiteService {

  constructor(public http: HttpClient) { }

  public getGridItemsBySite(page, pageSize, sort, filter, FieldID = "", FltrOperator = "", Searchcritaria = "") {
    console.log("in the kaizen service");
    //alert(FieldID)
    if (FieldID === "undefined" || FieldID === "")
      FieldID = "-1";
    if (FltrOperator === "undefined" || FltrOperator === "")
      FltrOperator = "-1";
    if (Searchcritaria === "undefined")
      Searchcritaria = "";
    if (page > 1)
      page = page / pageSize;
    alert(page);
    let Url = `${PublicShared.AppSeverPath}/MasterData/GetItemsBySite?page=${page}&pageSize=${pageSize}&sort=${sort}&filter=${filter}&FieldID=${FieldID}&FltrOperator=${FltrOperator}&MainGridFilter=&Searchcritaria=${Searchcritaria}`;
    console.log(Url);
    return this.http.get<GridData>(Url,{
      headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
    })
  }
}
