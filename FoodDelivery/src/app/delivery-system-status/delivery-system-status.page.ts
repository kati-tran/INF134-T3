import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-delivery-system-status',
  templateUrl: './delivery-system-status.page.html',
  styleUrls: ['./delivery-system-status.page.scss'],
})
export class DeliverySystemStatusPage implements OnInit {

  time: BehaviorSubject<string> = new BehaviorSubject('00:00');
  timer: number; //in seconds
  progress: number;
  state: 'start'

  clear: boolean = false;
  clearPay: boolean = false;
  items
  payment
 
  constructor() { }

  ngOnInit() {

    this.timer = 1 * 60;
    this.progress = 1;
    setInterval( ()=> {
      this.updateTimeValue()
    }, 1000);

    let minutes: any = this.timer/60;
    let seconds: any = this.timer % 60;

    minutes = String('0' + Math.floor(minutes)).slice(-2);
    seconds = String('0' + Math.floor(seconds)).slice(-2);

    const text = minutes + ':' + seconds;
    this.time.next(text);

    --this.timer;


  }
  loadList(){
    if (this.clear){
      this.items = []
      this.clear = false
    }
    else {
      this.items =[
        {
          src: "assets/icon/wings.png",
          restaurant: "Buffalo Wild Wings",
          item: "Buffalo Wings",
          price: 3.99,
          quantity: 1
        },
        {
          src: "assets/icon/blank.png",
          restaurant: "Buffalo Wild Wings",
          item: "Fries",
          price: 1.99,
          quantity: 1
        },
        {
          src: "assets/icon/garlic.png",
          restaurant: "Buffalo Wild Wings",
          item: "Garlic Wings",
          price: 3.99,
          quantity: 1
        }
        
      ]
      this.clear = true
    }
  }

  loadPayment(){
    if (this.clearPay){
      this.payment = []
      this.clearPay = false
    }
    else {
      this.payment =[
        {
          subtotal: 9.97,
          delivery: 2.02,
          total: 11.99,
          tax: 1.01,
          tip: 3.09,
          grandTotal: 16.09
        },
        
      ]
      this.clearPay = true
    }
  }

  

  startTimer(duration:number){
    this.timer = duration * 60;
    setInterval( ()=> {
      this.updateTimeValue()
    }, 1000);
  }

  updateTimeValue(){
    let minutes: any = this.timer/60;
    let seconds: any = this.timer % 60;

    minutes = String('0' + Math.floor(minutes)).slice(-2);
    seconds = String('0' + Math.floor(seconds)).slice(-2);

    const text = minutes + ':' + seconds;
    this.time.next(text);

    --this.timer;
    
    if (this.timer < 0){
      this.timer = 0;
      if (document.getElementsByClassName('status')[0] != undefined){
        document.getElementsByClassName('status')[0].innerHTML = "Status: Delivered"
      }
    }
    if (this.progress > 60){
      this.progress = 60
      document.getElementsByClassName('status')[0].innerHTML = "Status: Delivered"
    
    }

  }

}
