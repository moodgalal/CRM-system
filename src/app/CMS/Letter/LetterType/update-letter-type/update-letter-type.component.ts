import { Component, OnInit } from '@angular/core';
import {LetterTypeService} from "../LetterTypeService";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-update-letter-type',
  templateUrl: './update-letter-type.component.html',
  styleUrls: ['./update-letter-type.component.scss'],
  providers : [LetterTypeService]
})
export class UpdateLetterTypeComponent implements OnInit {

  constructor(private service : LetterTypeService , private alerts : ToastrService) { }

  object : any;
  template :any;

  ngOnInit()
  {
    this.getObject(this.template);
  }

  getObject(template)
  {
    this.service.GetSingle(template)
        .subscribe((res)=>
        {
          console.log("Object");
          console.log(res);
          this.object = res;
        } , (err)=>
        {
          console.log(err);
        })
  }

  updateData()
  {
    let model : any = {};

    this.service.UpdateData(model)
        .subscribe((res)=>
        {
          this.alerts.success(`Updated Successfully`);
        } , (err)=>
        {
          this.alerts.error(`Try again later please`);
        })
  }

  deleteData()
  {
    this.service.DeleteData("message")
        .subscribe((res)=>
        {
          this.alerts.success(`Deleted Successfully`);
        } , (err)=>
        {
          this.alerts.error(`Try again later please`);
        })
  }

  goBack()
  {
    window.history.back()
  }

}
