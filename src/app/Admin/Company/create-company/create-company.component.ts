import { Component, OnInit } from '@angular/core';
import {CompanyService} from "../CompanyService";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss'],
  providers : [CompanyService]
})
export class CreateCompanyComponent implements OnInit {

  constructor(private service : CompanyService , private alerts : ToastrService) { }

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
