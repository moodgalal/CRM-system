import { Component, OnInit } from '@angular/core';
import { KaizenService } from "../../../providers/kaizen/kaizen.service";
import { PublicSetting } from "../../../models/PublicShared";
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  providers: [PublicSetting, KaizenService]
})
export class PortfolioComponent implements OnInit {

  YearCode;
  PERIODID;
  constructor(private keizenService: KaizenService, public SharedData: PublicSetting) { }

  ngOnInit() {
    this.keizenService.GetAllFiscalYears().subscribe((res) => {
      this.SharedData.YearsList = res;
      this.YearCode = this.SharedData.YearsList[0].YearCode;
      this.YearCode_Change(this.SharedData.YearsList[0]);
    })
  }
  YearCode_Change(event) {
    this.keizenService.GetPeriodsByYearCode(event).subscribe((res) => {
      this.SharedData.PeriodList = res;
      this.PERIODID = res[0].PERIODID;
    })
  }
}
