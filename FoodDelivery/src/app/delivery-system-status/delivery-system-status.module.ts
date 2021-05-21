import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliverySystemStatusPageRoutingModule } from './delivery-system-status-routing.module';

import { DeliverySystemStatusPage } from './delivery-system-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliverySystemStatusPageRoutingModule
  ],
  declarations: [DeliverySystemStatusPage]
})
export class DeliverySystemStatusPageModule {}
