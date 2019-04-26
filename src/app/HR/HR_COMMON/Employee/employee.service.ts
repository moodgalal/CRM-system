import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PublicShared} from '../../../models/PublicShared'

@Injectable()

export class HR_Common_Employee_Service
{
    constructor(private http : HttpClient){}

    public getAllDivisions()
    {
        let Url = `${PublicShared.AppSeverPath}/HR/Division/GetAllDivision`;

        return this.http.get<Array<any>>(Url);
    }

    public getAllMaritals()
    {
        let Url = `${PublicShared.AppSeverPath}/HR/Marital/GetAllMarital`;

        return this.http.get<Array<any>>(Url);
    }

    public getAllLocations()
    {
        let Url = `${PublicShared.AppSeverPath}/HR/Location/GetAllLocation`;

        return this.http.get<Array<any>>(Url);
    }

    public getAllPositions()
    {
        let Url = `${PublicShared.AppSeverPath}/HR/Position/GetAllPosition`;

        return this.http.get<Array<any>>(Url);
    }

    public getAllDepartments()
    {
        let Url = `${PublicShared.AppSeverPath}/HR/Department/GetAllDepartment`;

        return this.http.get<Array<any>>(Url);
    }

    public getAllCategories()
    {
        let Url = `${PublicShared.AppSeverPath}/HR/Category/GetAllCategory`;

        return this.http.get<Array<any>>(Url);
    }

    getAllSuffix()
    {
        let Url = `${PublicShared.AppSeverPath}/HR/Suffix/GetAllSuffix`;

        return this.http.get<Array<any>>(Url);
    }

    add(model)
    {
        let Url = `${PublicShared.AppSeverPath}/HR/Employee/AddEmployee`;

        return this.http.post<any>(Url , JSON.stringify(model) , {headers : PublicShared.header});
    }
}