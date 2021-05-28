import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-restaurant-roller-done',
  templateUrl: './restaurant-roller-done.page.html',
  styleUrls: ['./restaurant-roller-done.page.scss'],
})
export class RestaurantRollerDonePage implements OnInit {

  checkItem = 0; 

  constructor(public loadingController: LoadingController) { }

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
      let restaurantimg = <HTMLInputElement>document.getElementById("imgradius");
      let restaurantdetails = <HTMLInputElement>document.getElementById("img2");
      if(this.checkItem == 0){
        restaurantimg.src = "../../assets/images/chipotleroller.png";
        restaurantdetails.src = "../../assets/images/chipotlerollerdetails.png";
        this.checkItem = 1;
        console.log("../../assets/images/chipotleroller.png")
      }
      else{
        restaurantimg.src = "../../assets/images/delsushiroller.png";
        restaurantdetails.src = "../../assets/images/delsushidetails.png";
        this.checkItem = 0;
      }

    });
  }

}
