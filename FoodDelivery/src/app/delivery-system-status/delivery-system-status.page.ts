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
    document.getElementsByClassName('progressBar')[0]["value"] = this.progress/60
    // console.log(this.timer)


    if (this.timer < 0){
      //this.startTimer(50)
      this.timer = 0;
    }
    if (this.progress > 60){
      this.progress = 60
    }

  }

}
