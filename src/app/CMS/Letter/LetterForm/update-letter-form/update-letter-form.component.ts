import { Component, OnInit } from '@angular/core';
import {LetterFormService} from "../LetterFormService";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-update-letter-form',
  templateUrl: './update-letter-form.component.html',
  styleUrls: ['./update-letter-form.component.scss'],
  providers : [LetterFormService]
})
export class UpdateLetterFormComponent implements OnInit {

  constructor(private service : LetterFormService , private alerts : ToastrService ) { }

  object : any;
  template : any;
  dropdown : Array<any>;

  ngOnInit()
  {
     this.fillDropDown();
     this.getObject(this.template);
  }

   fillDropDown()
   {
     this.service.FillDropDownList()
         .subscribe((res)=>
         {
           console.log("drop down");
           console.log(res);

            this.dropdown = res;
         })
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

  selectTemplate(event)
  {
    this.template = event;
  }

  goBack()
  {
    window.history.back()
  }
}
