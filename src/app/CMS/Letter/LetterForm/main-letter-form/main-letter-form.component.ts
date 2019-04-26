import { Component, OnInit } from '@angular/core';
import {LetterFormService} from "../LetterFormService";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-main-letter-form',
  templateUrl: './main-letter-form.component.html',
  styleUrls: ['./main-letter-form.component.scss'],
  providers : [LetterFormService]
})
export class MainLetterFormComponent implements OnInit {

  constructor(private service : LetterFormService , private alerts : ToastrService ) { }

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
