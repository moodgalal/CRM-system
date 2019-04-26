import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {CmsPeriodService} from "../cms-period.service";

@Component({
  selector: 'app-cms-period',
  templateUrl: './cms-period.component.html',
  styleUrls: ['./cms-period.component.scss'],
  providers : [CmsPeriodService]
})
export class CmsPeriodComponent implements OnInit {

  @Output() outObject : EventEmitter<any> = new EventEmitter();

  years : Array<any>;
  periods : Array<any>;
  selectedYear : any;
  selectedPeriod : any;

  constructor(private service :  CmsPeriodService ) { }

  ngOnInit()
  {
    this.getYears();
  }

  getYears()
  {
    this.service.GetAllFiscalYears()
        .subscribe((res)=>
        {
          this.years = res;
        })
  }

  getPeriods(event)
  {
     this.service.GetPeriodsByYearCode(event.YearCode)
         .subscribe((res)=>
         {
            this.periods = res
         })
  }

  emitObject(event)
  {
    this.outObject.emit(event)
  }
}
