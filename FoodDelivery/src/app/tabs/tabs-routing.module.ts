import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../delivery-system-status/delivery-system-status.module').then(m => m.DeliverySystemStatusPageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../qrcode/qrcode.module').then(m => m.QRCodePageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../cart-details/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}