import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantRollerPage } from './restaurant-roller.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantRollerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantRollerPageRoutingModule {}
