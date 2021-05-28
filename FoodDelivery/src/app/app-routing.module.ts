import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'app-opening',
    loadChildren: () => import('./app-opening/app-opening.module').then( m => m.AppOpeningPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: ()=> import('./dashboard/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'restaurant-page',
    loadChildren: () => import('./restaurant-page/tab2.module').then(m => m.Tab2PageModule)
  },
  {
    path: 'information-form',
    loadChildren: () => import('./information-form/information-form.module').then( m => m.InformationFormPageModule)
  },
  {
    path: 'delivery-system-status',
    loadChildren: () => import('./delivery-system-status/delivery-system-status.module').then( m => m.DeliverySystemStatusPageModule)
  },
  {
    path: 'restaurant-roller',
    loadChildren: () => import('./restaurant-roller/restaurant-roller.module').then( m => m.RestaurantRollerPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'qrcode',
    loadChildren: () => import('./qrcode/qrcode.module').then( m => m.QRCodePageModule)
  },
  {
    path: 'cancellation',
    loadChildren: () => import('./cancellation/cancellation.module').then( m => m.CancellationPageModule)
  },
  {
    path: 'rating',
    loadChildren: () => import('./rating/rating.module').then( m => m.RatingPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
