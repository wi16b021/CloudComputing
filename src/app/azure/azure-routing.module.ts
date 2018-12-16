import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageAnalysisComponent } from './image-analysis/image-analysis.component';

const routes: Routes = [
  {
    path: '',
    component: ImageAnalysisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AzureRoutingModule { }
