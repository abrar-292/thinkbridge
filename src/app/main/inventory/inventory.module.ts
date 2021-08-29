import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InventoryComponent} from './inventory.component';
import {RouterModule, Routes} from "@angular/router";

const Router: Routes = [
  {
    path: '',
    component: InventoryComponent
  }
];


@NgModule({
  declarations: [
    InventoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(Router),
  ]
})
export class InventoryModule {
}
