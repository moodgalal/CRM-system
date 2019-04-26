import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrinterlogComponent } from './printerlog.component';

//Module
import { DropDownsModule , AutoCompleteModule, ComboBoxModule, MultiSelectModule } from '@progress/kendo-angular-dropdowns';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from '../../app.routing';
import { TabStripModule } from '@progress/kendo-angular-layout/dist/es/main';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { SortableModule } from '@progress/kendo-angular-sortable/dist/es/sortable.module';
import { StockChartModule, ChartsModule } from '@progress/kendo-angular-charts';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';
import { UploadModule } from '@progress/kendo-angular-upload';
import { TelerikReportingModule } from '@progress/telerik-angular-report-viewer';
import { DialogsModule, WindowModule } from '@progress/kendo-angular-dialog';

@NgModule({
  imports: [
    CommonModule,
    DropDownsModule,
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    TabStripModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ButtonsModule,
    GridModule,
    DateInputsModule,
    MultiSelectModule,
    InputsModule,
    DropDownsModule, AutoCompleteModule, ComboBoxModule,
    SortableModule,
    JsonpModule,
    StockChartModule,
    NgHttpLoaderModule,
    UploadModule,
    TelerikReportingModule,
    DialogsModule,
    WindowModule,
    ChartsModule
  ],
  declarations: [
    PrinterlogComponent
  ],
  schemas : [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class PrinterModule { }
