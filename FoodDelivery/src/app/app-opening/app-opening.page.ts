import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalAppOpeningPage } from '../modal-app-opening/modal-app-opening.page';

@Component({
  selector: 'app-app-opening',
  templateUrl: './app-opening.page.html',
  styleUrls: ['./app-opening.page.scss'],
})
export class AppOpeningPage implements OnInit {

  constructor(public modalController: ModalController) {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalAppOpeningPage,
      cssClass: 'app-opening-custom-modal',
      swipeToClose: true
    });
    return await modal.present();
  }
  
  ngOnInit() {
  }

}
