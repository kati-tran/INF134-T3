import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  sliderValue:number = 1;

  constructor() {}

  public changeSliderVal(value)
  {
    console.log(value)

    this.sliderValue = value

    var toolbar = document.getElementById("toolbar")
    var content = document.getElementById("content")

  
    if (toolbar.classList[toolbar.classList.length-1].includes("theme"))
    {
      toolbar.classList.remove(toolbar.classList[toolbar.classList.length-1])
      content.classList.remove(content.classList[content.classList.length-1])
    }


    toolbar.classList.add("toolbar-theme-" + this.sliderValue)
    content.classList.add("content-theme-" + this.sliderValue)
  }

  ngOnInit() {
    var toolbar = document.getElementById("toolbar")
    var content = document.getElementById("content")

    toolbar.classList.add("toolbar-theme-" + this.sliderValue)
    content.classList.add("content-theme-" + this.sliderValue)
  }

}
