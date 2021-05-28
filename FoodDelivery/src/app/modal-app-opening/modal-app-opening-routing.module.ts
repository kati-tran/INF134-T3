import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAppOpeningPage } from './modal-app-opening.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAppOpeningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalAppOpeningPageRoutingModule {}
