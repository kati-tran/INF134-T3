import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantRollerPageRoutingModule } from './restaurant-roller-routing.module';

import { RestaurantRollerPage } from './restaurant-roller.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantRollerPageRoutingModule
  ],
  declarations: [RestaurantRollerPage]
})
export class RestaurantRollerPageModule {}
