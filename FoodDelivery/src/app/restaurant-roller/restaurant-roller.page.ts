import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalAppOpeningPage } from '../modal-app-opening/modal-app-opening.page';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-roller',
  templateUrl: './restaurant-roller.page.html',
  styleUrls: ['./restaurant-roller.page.scss'],
})
export class RestaurantRollerPage implements OnInit {

  constructor(public modalController: ModalController, public loadingController: LoadingController, private router: Router) { }

  ngOnInit() {
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'loader',
      message: '<ion-img src="../../assets/images/diceroll.gif" alt="loading..."></ion-img>',
      duration: 2000,
      spinner: null,
      translucent: true
    });
    await loading.present();

    loading.onDidDismiss().then((dis) => {
      console.log('Loading dismissed! after 2 Seconds', dis);
      this.router.navigate(['/restaurant-roller-done'])
    });
  }

  changeMap(event: any){
    let rangechange = <HTMLInputElement>document.getElementById("imgradius");
    console.log(event.detail.value);
    if(event.detail.value == 1){
      rangechange.src = "../../assets/images/radius1.png";
    }
    else if(event.detail.value == 3){
      rangechange.src = "../../assets/images/radius2.png";
    }
    else if(event.detail.value == 5){
      rangechange.src = "../../assets/images/radius3.png";
    }
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
