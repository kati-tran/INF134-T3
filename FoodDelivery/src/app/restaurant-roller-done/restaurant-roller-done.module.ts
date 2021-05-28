import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantRollerDonePageRoutingModule } from './restaurant-roller-done-routing.module';

import { RestaurantRollerDonePage } from './restaurant-roller-done.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantRollerDonePageRoutingModule
  ],
  declarations: [RestaurantRollerDonePage]
})
export class RestaurantRollerDonePageModule {}
