import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { defaultMaxListeners } from 'events';

import { InformationFormPage } from './information-form.page';

const routes: Routes = [
  {
    path: '',
    component: InformationFormPage
  },
  {
    path: 'delivery-system-status',
    loadChildren: () => import('../delivery-system-status/delivery-system-status.module').then( m => m.DeliverySystemStatusPageModule)
  },
  {
    path: 'restaurant-page',
    loadChildren: () => import('../restaurant-page/tab2.module').then(m => m.Tab2PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformationFormPageRoutingModule {}
