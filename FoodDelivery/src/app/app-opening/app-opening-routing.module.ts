import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppOpeningPage } from './app-opening.page';

const routes: Routes = [
  {
    path: '',
    component: AppOpeningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppOpeningPageRoutingModule {}
