import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformationFormPage } from './information-form.page';

const routes: Routes = [
  {
    path: '',
    component: InformationFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformationFormPageRoutingModule {}
