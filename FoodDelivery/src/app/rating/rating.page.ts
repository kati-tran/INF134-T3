import { Component, OnInit } from '@angular/core';

import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-rating',
  templateUrl: './rating.page.html',
  styleUrls: ['./rating.page.scss'],
})
export class RatingPage implements OnInit {

  constructor(public toastController: ToastController) {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Thank you for your feedback 😃',
      duration: 2000,
    });
    toast.present();
  }
  ngOnInit() {
  }




}
