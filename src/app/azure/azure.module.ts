import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AzureRoutingModule } from './azure-routing.module';
import { ImageAnalysisComponent } from './image-analysis/image-analysis.component';

@NgModule({
  imports: [
    CommonModule,
    AzureRoutingModule
  ],
  declarations: [ImageAnalysisComponent]
})
export class AzureModule { }
