import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantRollerDonePage } from './restaurant-roller-done.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantRollerDonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantRollerDonePageRoutingModule {}
