import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppOpeningPageRoutingModule } from './app-opening-routing.module';

import { AppOpeningPage } from './app-opening.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppOpeningPageRoutingModule
  ],
  declarations: [AppOpeningPage]
})
export class AppOpeningPageModule {}
