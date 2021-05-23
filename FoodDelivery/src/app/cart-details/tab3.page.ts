import { Component } from '@angular/core';
import {FoodItem} from './fooditem'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  foodItems = []
  numItems = 10

  constructor()
  {
    for(var i = 0; i < this.numItems; i++)
    {
      this.foodItems.push(new FoodItem(i,"Item" + i,(5.67*i).toFixed(2),["mod1", "mod2", "mod3"]))
    }
  }

  public deleteItem(itemNum)
  {
    this.foodItems.splice(itemNum,1);

    for(var i = 0; i < this.foodItems.length; i++)
      this.foodItems[i].num=i;


  }
}
