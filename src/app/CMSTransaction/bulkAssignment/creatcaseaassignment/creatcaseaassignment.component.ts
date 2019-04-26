import { Component, OnInit  , ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { SuccessEvent } from '@progress/kendo-angular-upload';
import { KaizenService } from '../../../providers/kaizen/kaizen.service';
import { PublicShared } from '../../../models/PublicShared';
@Component({
  selector: 'app-creatcaseaassignment',
  templateUrl: './creatcaseaassignment.component.html',
  styleUrls: ['./creatcaseaassignment.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class CreatcaseaassignmentComponent implements OnInit {
  dataSourcesTmp: Array<any> = [];
  uploadSaveUrl = 'http://80.241.220.137:3030/CMS/BulkAsignment/SaveUploadFileTemp';
  isChecked: boolean = true;
  TransiactionNumber;
  Caseref;
  dataSource = [];
  uploadAssignmentObj: any = {};

  constructor(private _service: KaizenService, private _router: Router) {
    if (PublicShared.DataSources.length > 0) {
      PublicShared.DataSources.forEach((source: any) => {
        if (source.TableSource.trim() === 'CM00203') {
          console.log(source);
          this.dataSourcesTmp.push(source);
        }
      });
    } else {
      this.getDataSource();
    }
  }

  ngOnInit() {
    this._service.getNexTRX().subscribe(res => {
      console.log(res);
      this.TransiactionNumber = res;
      this.uploadAssignmentObj.KaizenID = res;
    });
  }

  completeEventHandler(event) {
    console.log(event);
  }

  errHandler(event) {
    console.log(event);
    console.log(`ERROR: ${event.operation}ing ${event.files[0].name} failed`);
  }

  successEventHandler(e: SuccessEvent) {
    console.log(e.response);
    console.log(e.response.json());
    this.Caseref = e.response.json().ExcelColumns;
    this.uploadAssignmentObj.FilePath = e.response.json().TableName;
  }

  getValue(event) {
    console.log(event);
    this.uploadAssignmentObj.ClientID = event.ClientID.trim();
  }

  CaserefChange(event) {
    console.log(event);
    this.uploadAssignmentObj.CaseRef = event.Index.trim();
  }

  dataSrcChange(event) {
    console.log(event);
    this.uploadAssignmentObj.TRXTypeID = event.TRXTypeID;
  }

  getDataSource() {
    if (PublicShared.DataSources.length <= 0) {
      this._service.getDataSource().subscribe((res) => {
        console.log("Data source");
        console.log(res);
        PublicShared.DataSources = res;
        this.dataSourcesTmp = [];

        res.forEach((source: any) => {
          if (source.TableSource.trim() === 'CM00203') {
            console.log(source);
            this.dataSourcesTmp.push(source);
          }
        });
      })
    }
  }
  uploadData() {
    this._service.UploadCreateAssigmnemtData(this.uploadAssignmentObj).subscribe(res => {
      console.log(res);
      this._router.navigate(['/do_action_assignment'])
    }, (err) => {
      console.log(err)
    })
  }
}
