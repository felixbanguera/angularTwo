import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentBasicComponent } from './component-basic.component';
import { FirstComponentComponent } from './first-component/first-component.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ComponentBasicComponent, FirstComponentComponent],
  exports: [FirstComponentComponent]
})
export class ComponentBasicModule { }
