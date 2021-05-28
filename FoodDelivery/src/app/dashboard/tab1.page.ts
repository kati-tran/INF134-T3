import { Component } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalAppOpeningPage } from '../modal-app-opening/modal-app-opening.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 10
  };

  constructor(private routerOutlet: IonRouterOutlet, public modalController: ModalController) {}

  ngOnInit() {
    this.routerOutlet.swipeGesture = false;
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalAppOpeningPage,
      cssClass: 'app-opening-custom-modal',
      swipeToClose: true
    });
    return await modal.present();
  }
}
