import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalAppOpeningPageRoutingModule } from './modal-app-opening-routing.module';

import { ModalAppOpeningPage } from './modal-app-opening.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalAppOpeningPageRoutingModule
  ],
  declarations: [ModalAppOpeningPage]
})
export class ModalAppOpeningPageModule {}
