import { Component, OnInit } from '@angular/core';
import {BuildersService} from "../builders-service.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-equasion-fields',
  templateUrl: './equasion-fields.component.html',
  styleUrls: ['./equasion-fields.component.scss'],
  providers : [BuildersService]
})
export class EquasionFieldsComponent implements OnInit {

  constructor(private service : BuildersService , private alerts : ToastrService) { }

  sources : Array<any> = [];
  columns : Array<any> = null;
  selectedSource : any;
  selectedColumn : any;
  selectedEq : any = null;
  prevEq : Array<any> = null;

  ngOnInit()
  {
    this.getDataSources();
  }

  getDataSources()
  {
    this.service.getDataSource()
        .subscribe((res)=>
        {
          this.sources = res;
        })
  }

  getColumns(event)
  {
    this.getFieldEq(event.TRXTypeID);

    this.selectedSource = event;

    console.log(event);

    this.service.GetDSColumns(event.TRXTypeID)
        .subscribe((res)=>
        {
          this.columns = res;
        })
  }

  displayString : string = null;
  displayArray : Array<string> = [];
  serverString : string = null;
  serverArray : Array<string> = [];
  someWrong : boolean = false;
  pressOperator : boolean = false;
  SelectedFilterCol : number;
  SelectedFilterVal : any;
  CMSLookup01 : Array<any>;
  CMSLookup02 : Array<any>;

  arrayPushColumn(event)
  {
    this.selectedColumn = event;

    this.SelectedFilterCol = event.FieldTypeID;
    console.log("filter column value");
    console.log(this.SelectedFilterCol);

    if (event.FieldTypeID == 51)
    {
      this.service.GetCMSLookup01()
          .subscribe((res)=>
          {
            this.CMSLookup01 = res;
          }, (err)=>
          {
            this.serverError(err)
          })
    }
    else if (event.FieldTypeID == 52)
    {
      this.service.GetCMSLookup02()
          .subscribe((res)=>
          {
            this.CMSLookup02 = res;
          } , (err)=>
          {
            this.serverError(err)
          })
    }

    let displayFormat : string = `"`+event.FieldDisplay+`"`;
    this.displayArray.push(displayFormat);
    this.displayString = this.displayArray.join(' ');

    this.serverArray.push(event.FieldName);
    this.serverString = this.serverArray.join();

    this.pressOperator = true;
  }
  arrayPushOperator(char : string)
  {
    this.pressOperator  = false;
    this.displayArray.push(char);
    this.displayString = this.displayArray.join(' ');

    this.serverArray.push(char);
    this.serverString = this.serverArray.join();

    this.isBalanced();
  }
  arrayPushValue(val)
  {
    if (this.SelectedFilterCol == 51)
    {
      this.SelectedFilterVal = val.Lookup01;
      val = val.Lookup01;

      console.log("selected value");
      console.log(this.SelectedFilterVal);
    }
    else if ( this.SelectedFilterCol == 52)
    {
      this.SelectedFilterVal = val.Lookup02;
      val = val.Lookup02;

      console.log("selected value");
      console.log(this.SelectedFilterVal);
    }

    this.pressOperator  = false;
    let displayFormat : string = `"`+val+`"`;
    this.displayArray.push(displayFormat);
    this.displayString = this.displayArray.join(' ');

    this.serverArray.push(val);
    this.serverString = this.serverArray.join();
  }
  arrayPop()
  {
    let el = this.displayArray.pop();
    this.displayString = this.displayArray.join(' ');

    this.serverArray.pop();
    this.serverString = this.serverArray.join();

    this.pressOperator = el == '+' || el == '-' || el == '*' || el == '/' || el == '%';
    this.isBalanced();
  }
  arrayClear()
  {
    this.displayArray = [];
    this.displayString = null;
    this.someWrong = false;
    this.pressOperator = false;
  }

  countInArray(array, what)
  {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === what) {
        count++;
      }
    }
    return count;
  }

  isBalanced() : void
  {
    let right = this.countInArray(this.displayArray , '(');
    let left = this.countInArray(this.displayArray , ')');

    this.someWrong =  right !== left;
  }


  createFilter()
  {
    console.log("display string");
    console.log(this.displayString);
    console.log("server string");
    console.log(this.serverString);

    this.selectedColumn.FieldEquation = this.serverString;

    this.service.SaveFieldEquation(this.selectedColumn)
        .subscribe((res)=>
        {
          this.getFieldEq(this.selectedSource.TRXTypeID);

          this.alerts.success("Saved Successfully");
        },(err)=>
        {
          this.serverError(err)
        })
  }

  getFieldEq(trxId)
  {
     this.service.GetFieldEquation(trxId)
         .subscribe((res)=>
         {
           console.log("equatiiiiiiiiiiions");
           console.log(res);
           
           this.prevEq = res;
           
         },(err)=>
         {
           this.serverError(err)
         })
  }

  deleteEq(eq)
  {
     this.service.DeleteFieldEquation(eq)
         .subscribe((res)=>
         {
           this.getFieldEq(this.selectedSource.TRXTypeID);
            this.alerts.success("Deleted Successfully");
         },(err)=>
         {
           this.serverError(err)
         })
  }

  editEq()
  {
     this.service.UpdateFieldEquation(this.selectedEq)
         .subscribe((res)=>
         {
           this.getFieldEq(this.selectedSource.TRXTypeID);
           this.alerts.success("Updated Successfully");
         },(err)=>
         {
           this.serverError(err)
         })
  }

  serverError(err) {
    this.alerts.error(err)
  }

}
