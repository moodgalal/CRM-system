import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KaizenService } from '../../../providers/kaizen/kaizen.service';

@Component({
  selector: 'app-do-actions',
  templateUrl: './do-actions.component.html',
  styleUrls: ['./do-actions.component.scss']
})
export class DoActionsComponent implements OnInit {
  uploadSaveUrl = 'http://80.241.220.137:3030/BulkAsginment/UploadFileTemp';
  public static dataSources: Array<any> = [];
  dataSourcesTmp;
  windowSrc: any;

  constructor(private _route: ActivatedRoute, private service: KaizenService) {
  }

  ngOnInit() {
    this.windowSrc = this._route.snapshot.paramMap.get('src');
    this.getDataSource();

  }



  getDataSource() {
    if (DoActionsComponent.dataSources.length <= 0) {
      this.service.getDataSource()
        .subscribe((res) => {
          console.log("Data source");
          console.log(res);

          DoActionsComponent.dataSources = res;
          this.dataSourcesTmp = [];

          res.forEach((source: any) => {
            if (source.WindowSource == this.windowSrc) {
              this.dataSourcesTmp.push(source)
            }
          });

        }, (err) => {
          console.log(err);
        })
    }
  }

  test(event) {
    console.log(event.TrxTypeName);
  }

  completeEventHandler(event) {
    console.log(event);
  }

  errHandler(event){
    console.log(event);
    console.log(`ERROR: ${event.operation}ing ${event.files[0].name} failed`);
  }

}
