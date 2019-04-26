import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { GridData } from '../../models/data-model';
import { PublicShared } from "../../models/PublicShared";


@Injectable()
export class KaizenService {


    constructor(public http: HttpClient) { }

    public GetAllFiscalYears() {
        let Url = `${PublicShared.AppSeverPath}/Sys/Years/GetAllFiscalYears`;
        return this.http.get<Array<any>>(Url, {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        })
    }
    public GetPeriodsByYearCode(YearCode) {
        let Url = `${PublicShared.AppSeverPath}/CM/CMPeriod/GetPeriodListByYearCode?YearCode=${YearCode}`;
        return this.http.get<Array<any>>(Url, {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        })
    }

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
    public getGridData(viewId, pageSize, page, sort, filter, MainGridFilter, search) {
        let Url = `${PublicShared.AppSeverPath}/MasterData/GetDataListGrid?ViewID=${viewId}&page=${page}&pageSize=${pageSize}&sort=${sort}&filter=${filter}&MainGridFilter=${MainGridFilter}&Searchcritaria=${search}`;
        return this.http.get<GridData>(Url, {
            headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        })
    }
    public getListCat() {
        let Url = `${PublicShared.AppSeverPath}/MasterData/GetMenueType`;

        return this.http.get<Array<any>>(Url,{
          headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        })
    }
    public getListModules() {
        let Url = `${PublicShared.AppSeverPath}/MasterData/GetModuleList?CompanyID=greenology`;

        return this.http.get<Array<any>>(Url,{
          headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        })
    }
    public getMenu() {
        let Url = `${PublicShared.AppSeverPath}/MasterData/GetMyMenue`;

        return this.http.get<Array<any>>(Url, {
          headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        })
    }

    getSearchedData(selectionValue , critiria)
    {
        let Url = `${PublicShared.AppSeverPath}/CMS/CaseMain/GetSeachData?selectinValue=${selectionValue}&Searchcritaria=${critiria}`;

        return this.http.get<Array<any>>(Url, {
          headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        })
    }
    getNexTRX() {
        let Url = `${PublicShared.AppSeverPath}/CMS/BulkAsignment/GetNextTRX_BulkAssignment`;
        return this.http.get(Url, {
          headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        })
    }

    UploadCreateAssigmnemtData(obj) {
        let Url = `${PublicShared.AppSeverPath}/CMS/BulkAsignment/UploadData?ClientID=${obj.ClientID}&KaizenID=${obj.KaizenID}&TRXTypeID=${obj.TRXTypeID}&CaseRef=${obj.CaseRef}&FilePath=${obj.FilePath}`;
        return this.http.post(Url, null, {
          headers: new HttpHeaders().set('Token', localStorage.getItem('token'))
        });
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

    loginAuthStep1(rawString) {
      let Url = `${PublicShared.AppSeverPath}/Authenticate/login`;
      return this.http.post(Url, null,{
        headers: new HttpHeaders().set('Authorization', `Basic ${rawString}`),
        observe: 'response'
      });
    }

  loginAuthStep2() {
    let Url = `${PublicShared.AppSeverPath}/Authorization/GetMyCompany`;
    return this.http.get<Array<any>>(Url, {
      headers: new HttpHeaders().set('Token', PublicShared.TokenValue),
    });
  }
  loginAuthStep3(companyID) {
    let Url = `${PublicShared.AppSeverPath}/Authorization/LoadMyCurrentSession?CompanyID=${companyID}`;
    return this.http.get(Url,{
      headers: new HttpHeaders().set('Token', PublicShared.TokenValue),
    });
  }
  GetCurrentUser() {
    let Url = `${PublicShared.AppSeverPath}/Authorization/GetCurrentUser`;
    return this.http.get(Url,{
      headers: new HttpHeaders().set('Token', PublicShared.TokenValue),
    });
  }


  logOut() {
    let Url = `${PublicShared.AppSeverPath}/Authorization/Logout`;
    return this.http.get(Url,{
      headers: new HttpHeaders().set('Token', localStorage.getItem('token')),
      observe: 'response'
    });
  }


}
