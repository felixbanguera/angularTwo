import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatabindingComponent } from './databinding.component';
import { DatabindingcComponent } from './databindingc/databindingc.component';
import { LlajuComponent } from './llaju/llaju.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [DatabindingComponent, DatabindingcComponent, LlajuComponent],
  exports: [DatabindingComponent]
})
export class DatabindingModule { }
