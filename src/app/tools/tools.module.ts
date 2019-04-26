import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildersModule } from './builders/builders.module';
import { PrinterModule } from './printerlog/printer.module';

  
@NgModule({
  imports: [
    CommonModule,
    BuildersModule,
    PrinterModule
  ],
  declarations: []
  
})
export class ToolsModule { }
