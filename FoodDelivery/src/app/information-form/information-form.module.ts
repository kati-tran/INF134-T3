import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformationFormPageRoutingModule } from './information-form-routing.module';

import { InformationFormPage } from './information-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformationFormPageRoutingModule
  ],
  declarations: [InformationFormPage]
})
export class InformationFormPageModule {}
