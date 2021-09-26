import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {NumbersOnlyDirective} from './numbers-only.directive';

@NgModule({
  declarations: [
    NumbersOnlyDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [CommonModule, NumbersOnlyDirective]
})
export class SharedModule {
}

