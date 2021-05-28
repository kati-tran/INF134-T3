import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-app-opening',
  templateUrl: './modal-app-opening.page.html',
  styleUrls: ['./modal-app-opening.page.scss'],
})
export class ModalAppOpeningPage implements OnInit {


  constructor(public modalController: ModalController, private router: Router) {
  }

  ngOnInit() {}
  
	  async closeModal() {
	    await this.modalController.dismiss();
	  }

    getCoordinates(event)
    {
      let pinpoint = document.getElementById("pinpoint");
      pinpoint.style.position = "absolute"
      pinpoint.style.left = event.clientX + 'px';
      pinpoint.style.top = event.clientY/2 + 'px';
      pinpoint.style.display = "block";

      let confirm = document.getElementById("confirmlocation");
      confirm.style.display = "block";
      // This output's the X coord of the click
      console.log(event.clientX);
      // This output's the Y coord of the click
      console.log(event.clientY);
    }

    navigate(){
      this.router.navigate(['/dashboard'])
    }

}
