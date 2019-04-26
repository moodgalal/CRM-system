import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { GridData } from '../../models/data-model';
import { PublicShared } from "../../models/PublicShared";


@Injectable()
export class GlobalGridService {


    constructor(public http: HttpClient) { }

    public getDataSource() {
        console.log("-------------------------------------------------------------");
        let Url = `${PublicShared.AppSeverPath}/MasterData/GetMyDataSource`;
        return this.http.get<Array<any>>(Url, {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        })
    }
    public GetMyViewsByTRXTypeID(trxTypeId) {
        let Url = `${PublicShared.AppSeverPath}/MasterData/GetMyViewsByTRXTypeID?TRXTypeID=${trxTypeId}`;
        return this.http.get<Array<any>>(Url, {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        })
    }
    public getGridColumns(viewId) {
        let Url = `${PublicShared.AppSeverPath}/MasterData/GetGridColumns?ViewID=${viewId}`;
        return this.http.get<Array<any>>(Url, {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        })
    }
    public getGridData(viewId, pageSize, page, sort, Smartfilter, filter, MainGridFilter, search) {
      let Url = `${PublicShared.AppSeverPath}/MasterData/GetDataListGrid?ViewID=${viewId}&page=${page}&pageSize=${pageSize}&sort=${sort}&Smartfilter=${Smartfilter}&filter=${filter}&MainGridFilter=${MainGridFilter}&Searchcritaria=${search}`;
        return this.http.get<GridData>(Url, {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        })
    }
    GetCMSLookup01() {
    //Lookup01 // Lookup01Name
        let Url = `${PublicShared.AppSeverPath}/MasterData/GetCMSLookup01`;
        return this.http.get<Array<any>>(Url, {
          headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        });
    }
    GetCMSLookup02() {
    //Lookup02 // Lookup02Name
        let Url = `${PublicShared.AppSeverPath}/MasterData/GetCMSLookup02`;
        return this.http.get<Array<any>>(Url, {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        });
    }

    FillTaskPrioritiesList() {
      //let Url = `${PublicShared.AppSeverPath}/CMS/DoAction/FillTaskPrioritiesList`;
      //return this.http.get<Array<any>>(Url, {
      //  headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
      //});
    }

    FillTaskTypesList() {
      //let Url = `${PublicShared.AppSeverPath}/CMS/DoAction/FillTaskTypesList`;
      //return this.http.get<Array<any>>(Url, {
      //  headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
      //});
    }
    GetCaseStatusList() {
        let Url = `${PublicShared.AppSeverPath}/CMS/DoAction/GetCaseStatusList`;
        return this.http.get<Array<any>>(Url, { headers: new HttpHeaders().set('Token', localStorage.getItem('token')) });
    }
}
