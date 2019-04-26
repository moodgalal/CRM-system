import { Component, OnInit } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {KaizenService} from "../../../providers/kaizen/kaizen.service";

@Component({
  selector: 'app-create-replacement',
  templateUrl: './create-replacement.component.html',
  styleUrls: ['./create-replacement.component.scss'],
  providers : [KaizenService]
})
export class CreateReplacementComponent implements OnInit {
  value = null;
  constructor(private service : KaizenService , private alerts : ToastrService) { }

    sources : Array<any> = null;
    views : Array<any> = null;
    columns : Array<any> = null;
    data : Array<any> = null;

    selectedSource : any = null;
    selectedView : any = null;


  ngOnInit()
  {
    this.getDataSources();
  }

  getDataSources()
  {
    this.service.getDataSource()
        .subscribe((res)=>
        {
          console.log("maintenance data source");
          console.log(res);
          this.sources = res;
        })
  }
  getViews(event)
  {
    this.selectedSource = event;

    console.log(event);
    this.service.GetMyViewsByTRXTypeID(event.TRXTypeID)
        .subscribe((res)=>
        {
          console.log("views");
          console.log(res);

          this.views = res;
        })
  }

  getColumns(event)
  {
      this.getData();

      this.service.getGridColumns(event.ViewID)
          .subscribe((res)=>
          {
              this.columns = res;
          })
  }

  getData()
  {
      this.service.getGridData(this.selectedView.ViewID , 10 , 1 , "", "" , "" , "")
          .subscribe((res)=>
          {
             this.data = res.Items;
          })
  }

  capture(str)
  {
      console.log(str);
  }
  goBack()
  {
    window.history.back()
  }
}
