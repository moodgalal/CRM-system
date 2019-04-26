import { Component, OnInit } from '@angular/core';
import {CompanyService} from "../CompanyService";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-main-company',
  templateUrl: './main-company.component.html',
  styleUrls: ['./main-company.component.scss'],
  providers : [CompanyService]
})
export class MainCompanyComponent implements OnInit {

  constructor(private service : CompanyService , private alerts : ToastrService) { }

  gridData : Array<any> = [];
  searchText : string = "";
  public skip: number = 1;
  pageSize: number = 10;

  total : number = 0;

  gridView : any = {};



  ngOnInit()
  {
    this.getGridData()
  }

  getGridData()
  {
    this.service.getDataGrid(this.pageSize, this.skip, "" , "" , this.searchText)
        .subscribe((data) => {

          console.log("grid data");
          console.log(data);

          if (data.Items !== null)
          {
            this.gridData = data.Items;
            this.total = data.TotalItemCount;
          }
          else if (data.Items == null)
          {
            this.gridData = [];
            this.total = 0;
            this.alerts.warning("No data")
          }
          this.loadItems();

        }, (err) => {
          this.alerts.error("Try Again Later Please")
        })
  }

  loadItems(): void
  {
    this.gridView = {
      data: this.gridData,
      total: this.total
    };
  }

  search() {
    this.getGridData();
  }
}
