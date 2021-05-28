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
    // console.log(document.getElementsByClassName('ion-text-center').length)
    // console.log(document.getElementsByClassName('ion-text-center')[0].innerHTML)
    console.log(document.getElementsByClassName('progressBar'))
    console.log(document.getElementsByClassName('progressBar')[0]["value"])
    this.timer = 1 * 60;
    this.progress = 1;
    //document.getElementsByClassName('progressBar')[0]["value"] = 100
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

    // if (this.timer < 0){
    //   this.startTimer(0)
    // }
  }
  loadList(){
    if (this.clear){
      this.items = []
      this.clear = false
    }
    else {
      this.items =[
        {
          src: "assets/icon/blank.png",
          restaurant: "Zot n Go",
          item: "croissant",
          price: 0.99,
          quantity: 1
        },
        {
          src: "assets/icon/drink.png",
          restaurant: "Starbucks",
          item: "Tall Caramel Frappuccino",
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
          subtotal: 4.98,
          delivery: 2.02,
          total: 6.98,
          tax: 1.02,
          tip: 3.09,
          grandTotal: 11.11
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
    ++this.progress
    // console.log(this.progress)
    if (document.getElementsByClassName('progressBar')[0] != undefined){
      document.getElementsByClassName('progressBar')[0]["value"] = this.progress/60
    }
    // console.log(document.getElementsByClassName('progressBar')[0])
    // document.getElementsByClassName('progressBar')[0]["value"] = this.progress/60
    // console.log(this.timer)


    if (this.timer < 0){
      //this.startTimer(50)
      this.timer = 0;
    }
    if (this.progress > 60){
      this.progress = 60
      document.getElementsByClassName('status')[0].textContent = "Status: Delivered"
    
    }

  }

}
