import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InventoryComponent} from './inventory.component';
import {RouterModule, Routes} from "@angular/router";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {AddEditComponent} from './add-edit/add-edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {SharedModule} from "../../shared/shared.module";

const Router: Routes = [
  {
    path: '',
    component: InventoryComponent
  },
  {
    path: 'add-inventory',
    component: AddEditComponent
  },
  {
    path: 'edit-inventory/:id',
    component: AddEditComponent
  },
];


@NgModule({
  declarations: [
    InventoryComponent,
    AddEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(Router),
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule
  ]
})
export class InventoryModule {
}
