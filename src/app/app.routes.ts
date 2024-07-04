import { Routes } from '@angular/router';
import { ProdsmainComponent } from './comps/prodsmain/prodsmain.component';
import { ProdsDescriptionComponent } from './comps/prods-description/prods-description.component';

export const routes: Routes = [
  { path: '', component: ProdsmainComponent },
  { path: 'products', component: ProdsmainComponent },

  {
    path: 'description/:id',
    component: ProdsDescriptionComponent,
    title: 'description|products',
  },
];
