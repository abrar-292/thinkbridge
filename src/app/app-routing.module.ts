import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FullLayoutComponent} from "./layout/full-layout/full-layout.component";
import {Full_ROUTES} from "./shared/routes/full-layout.routes";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inventory',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {title: 'full Views'},
    children: Full_ROUTES,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
