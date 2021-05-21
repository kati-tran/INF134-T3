import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliverySystemStatusPage } from './delivery-system-status.page';

const routes: Routes = [
  {
    path: '',
    component: DeliverySystemStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliverySystemStatusPageRoutingModule {}
