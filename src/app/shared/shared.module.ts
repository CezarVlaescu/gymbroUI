import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverColorExempleDirective } from './directives/hover-color-exemple.directive';



@NgModule({
  declarations: [
    HoverColorExempleDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
