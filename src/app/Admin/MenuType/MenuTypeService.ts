import { Injectable } from '@angular/core';
import { PublicShared } from '../../models/PublicShared'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaizenResult } from "../../models/KaizenResult";
import {GridData} from "../../models/data-model";

@Injectable()
export class MenuTypeService {

    constructor(private http: HttpClient) { }

    GetSingle(MenueTypeID) {
        let Url = `${PublicShared.AppSeverPath}/Admin/MenuType/GetSingle?MenueTypeID=${MenueTypeID}`;
        return this.http.get<any>(Url, {
            headers: new HttpHeaders()
                .set('Content-Type', 'Application/JSON')
                .set('Token', localStorage.getItem('token'))
        });
    }
    SaveData(Kaizen001) {
        let Url = `${PublicShared.AppSeverPath}/Admin/MenuType/SaveData`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(Kaizen001), {
            headers: new HttpHeaders()
                .set('Token', localStorage.getItem('token'))
                .set('Content-Type', 'Application/JSON')
        });
    }
    UpdateData(Kaizen001) {
        let Url = `${PublicShared.AppSeverPath}/Admin/MenuType/UpdateData`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(Kaizen001), {
            headers: new HttpHeaders()
                .set('Content-Type', 'Application/JSON')
                .set('Token', localStorage.getItem('token'))
        });
    }
    DeleteData(MenueTypeID) {
        let Url = `${PublicShared.AppSeverPath}/Admin/MenuType/DeleteData?MenueTypeID=${MenueTypeID}`;
        return this.http.get<KaizenResult>(Url, {
            headers: new HttpHeaders()
                .set('Content-Type', 'Application/JSON')
                .set('Token', localStorage.getItem('token'))
        });
    }
    public GetDataListGrid(pageSize, page, sort, filter, search) {
        let Url = `${PublicShared.AppSeverPath}/Admin/MenuType/GetDataListGrid?page=${page}&pageSize=${pageSize}&sort=${sort}&filter=${filter}&Searchcritaria=${search}`;
        return this.http.get<GridData>(Url, {
            headers: new HttpHeaders()
                .set('Content-Type', 'Application/JSON')
                .set('Token', localStorage.getItem('token'))
        })
    }
    FillDropDownList() {
        let Url = `${PublicShared.AppSeverPath}/Admin/MenuType/FillDropDownList`;
        return this.http.get<Array<any>>(Url, {
            headers: new HttpHeaders()
                .set('Content-Type', 'Application/JSON')
                .set('Token', localStorage.getItem('token'))
        });
    }

    //---------------------------------------
    GetAllMedules() {
        let Url = `${PublicShared.AppSeverPath}/Admin/Module/GetAll`;
        return this.http.get<Array<any>>(Url, {
            headers: new HttpHeaders()
                .set('Content-Type', 'Application/JSON')
                .set('Token', localStorage.getItem('token'))
        });
    }
    AddModule(Kaizen000) {
        let Url = `${PublicShared.AppSeverPath}/Admin/Module/AddModule`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(Kaizen000), {
            headers: new HttpHeaders()
                .set('Token', localStorage.getItem('token'))
                .set('Content-Type', 'Application/JSON')
        });
    }
    UpdateModule(Kaizen000) {
        let Url = `${PublicShared.AppSeverPath}/Admin/Module/UpdateModule`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(Kaizen000), {
            headers: new HttpHeaders()
                .set('Token', localStorage.getItem('token'))
                .set('Content-Type', 'Application/JSON')
        });
    }
    DeleteModule(Kaizen000) {
        let Url = `${PublicShared.AppSeverPath}/Admin/Module/DeleteModule`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(Kaizen000), {
            headers: new HttpHeaders()
                .set('Token', localStorage.getItem('token'))
                .set('Content-Type', 'Application/JSON')
        });
    }
    //==============================================================

    GetMenuModules(ModuleID,MenuTypeID) {
        let Url = `${PublicShared.AppSeverPath}/Admin/MenuModules/GetAll?ModuleID=${ModuleID}&MenuTypeID=${MenuTypeID}`;
        return this.http.get<Array<any>>(Url, {
            headers: new HttpHeaders()
                .set('Content-Type', 'Application/JSON')
                .set('Token', localStorage.getItem('token'))
        });
    }
    UpdateMenuModule(Kaizen002) {
        let Url = `${PublicShared.AppSeverPath}/Admin/MenuModules/Update`;
        return this.http.post<KaizenResult>(Url, JSON.stringify(Kaizen002), {
            headers: new HttpHeaders()
                .set('Token', localStorage.getItem('token'))
                .set('Content-Type', 'Application/JSON')
        });
    }

}
