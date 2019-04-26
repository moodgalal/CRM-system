import { Component, OnInit } from '@angular/core';
import {HR_Common_Employee_Service} from "../employee.service";
import {HRShared, PublicShared} from '../../../../models/PublicShared'
import {ActivatedRoute} from "@angular/router";
import {KaizenService} from "../../../../providers/kaizen/kaizen.service";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
  providers : [HR_Common_Employee_Service]
})
export class AddEmployeeComponent implements OnInit {

  windowSrc : any;
  dataSourcesTmp : Array<any> = [];

  divisionsList : Array<any> = [];
  maritalsList : Array<any> = [];
  locationsList : Array<any> = [];
  positionsList : Array<any> = [];
  departmentsList : Array<any> = [];
  categoriesList : Array<any> = [];
  suffixList : Array<any> = [];
  value = null;
  testData = ['x', 'y', 'z'];

  constructor(private service : HR_Common_Employee_Service , private route : ActivatedRoute , private dataSourcesService : KaizenService) { }

  ngOnInit()
  {
    this.getDataSources();
     this.getAllDivisions();
     this.getAllMaritals();
     this.getAllLocations();
     this.getAllPositions();
     this.getAllDepartments();
     this.getAllCategories();
     this.getAllSuffix();
  }

  getDataSources()
  {
    if (PublicShared.DataSources.length > 0)
    {
      this.dataSourcesTmp = [];
      PublicShared.DataSources.forEach((source: any) => {
        if (source.TableSource.trim() == "UPR00100") {
          this.dataSourcesTmp.push(source)
        }
      });
    }
    else
    {
      this.dataSourcesService.getDataSource()
          .subscribe((res) => {

            PublicShared.DataSources = res;

            this.dataSourcesTmp = [];

            res.forEach((source: any) => {
              if (source.TableSource.trim() == "UPR00100") {
                this.dataSourcesTmp.push(source)
              }
            });

          }, (err) => {
            console.log(err)
          })
    }
  }

  getAllDivisions()
  {
     if (HRShared.divisionList.length == 0)
     {
       this.service.getAllDivisions()
           .subscribe((res)=>
           {
             this.divisionsList = res;
             HRShared.divisionList = res;

             console.log("Divisions");
             console.log(HRShared.divisionList);
           })
     }
     else
     {
        this.divisionsList = HRShared.divisionList;
     }

  }

  getAllMaritals()
  {
    if (HRShared.maritalList.length == 0)
    {
      this.service.getAllMaritals()
          .subscribe((res)=>
          {
            this.maritalsList = res;
            HRShared.maritalList = res;


            console.log("Maritals");
            console.log(HRShared.maritalList);
          })
    }
    else
    {
      this.maritalsList = HRShared.maritalList;
    }
  }

  getAllLocations()
  {
    if (HRShared.locationsList.length == 0)
    {
      this.service.getAllLocations()
          .subscribe((res)=>
          {
            this.locationsList = res;
            HRShared.locationsList = res;

            console.log("Locations");
            console.log(HRShared.locationsList);
          })
    }
    else
    {
      this.locationsList = HRShared.locationsList;
    }
  }

  getAllPositions()
  {
    if (HRShared.positionsList.length == 0)
    {
      this.service.getAllPositions()
          .subscribe((res)=>
          {
            this.positionsList = res;
            HRShared.positionsList = res;

            console.log("Positions");
            console.log(HRShared.positionsList);
          })
    }
    else
    {
      this.positionsList = HRShared.positionsList;
    }
  }

  getAllDepartments()
  {
    if (HRShared.departmentsList.length == 0)
    {
      this.service.getAllDepartments()
          .subscribe((res)=>
          {
            this.departmentsList = res;
            HRShared.departmentsList = res;

            console.log("Departments");
            console.log(HRShared.departmentsList);
          })
    }
    else
    {
      this.departmentsList = HRShared.departmentsList;
    }
  }

  getAllCategories()
  {
    if (HRShared.categoriesList.length == 0)
    {
      this.service.getAllCategories()
          .subscribe((res)=>
          {
            this.categoriesList = res;
            HRShared.categoriesList = res;

            console.log("Categories");
            console.log(HRShared.categoriesList);
          })
    }
    else
    {
      this.categoriesList = HRShared.categoriesList;
    }
  }

  getAllSuffix()
  {
    if (HRShared.suffixList.length == 0)
    {
      this.service.getAllSuffix()
          .subscribe((res)=>
          {
            this.suffixList = res;
            HRShared.suffixList = res;

            console.log("Suffix");
            console.log(HRShared.suffixList);
          })
    }
    else
    {
      this.suffixList = HRShared.suffixList;
    }
  }

  goBack() {
    window.history.back()
  }

  getValue(event) {
    console.log(event);
  }
  save() {
    console.log('save ...');
  }

}
