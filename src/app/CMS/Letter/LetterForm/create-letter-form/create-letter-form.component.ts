import { Component, OnInit } from '@angular/core';
import {LetterFormService} from "../LetterFormService";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-create-letter-form',
  templateUrl: './create-letter-form.component.html',
  styleUrls: ['./create-letter-form.component.scss'],
  providers : [LetterFormService]
})
export class CreateLetterFormComponent implements OnInit {

  constructor(private service : LetterFormService , private alerts : ToastrService) { }

  template : any;
  dropdown : Array<any>;

  ngOnInit()
  {
    this.fillDropDown();
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


  saveData()
  {
    let model : any = {};

    this.service.SaveData(model)
        .subscribe((res)=>
        {
          this.alerts.success(`Saved Successfully`);
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
