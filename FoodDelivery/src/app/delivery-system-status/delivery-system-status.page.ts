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

  state: 'start'
  constructor() { }

  ngOnInit() {
    // console.log(document.getElementsByClassName('ion-text-center').length)
    // console.log(document.getElementsByClassName('ion-text-center')[0].innerHTML)
    this.timer = 5 * 60;
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

    if (this.timer < 0){
      this.startTimer(5)
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
      this.startTimer(50)
    }

  }

}
