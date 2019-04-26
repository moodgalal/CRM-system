import { Component, OnInit } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {LetterTypeService} from "../LetterTypeService";

@Component({
  selector: 'app-create-letter-type',
  templateUrl: './create-letter-type.component.html',
  styleUrls: ['./create-letter-type.component.scss'],
  providers : [LetterTypeService]
})
export class CreateLetterTypeComponent implements OnInit {

  constructor(private service : LetterTypeService , private alerts : ToastrService) { }

  ngOnInit() {
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

  goBack()
  {
    window.history.back()
  }
}
