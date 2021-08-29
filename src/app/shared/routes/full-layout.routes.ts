import {Routes, RouterModule} from '@angular/router';


export const Full_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'inventory',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('../../main/inventory/inventory.module').then(m => m.InventoryModule),
  },
];

