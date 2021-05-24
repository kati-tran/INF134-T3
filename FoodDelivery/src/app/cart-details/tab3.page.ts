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
  subtotal = 0.00
  deliveryFee = 2.99
  taxRate = 0.0775
  tax = 0.00
  tip = 0.00

  constructor()
  {
    for(var i = 0; i < this.numItems; i++)
    {
      this.foodItems.push(new FoodItem(i,"Item" + i,(5.67*i).toFixed(2),["mod1", "mod2", "mod3", "mod4"]))
    }
  }

  public deleteItem(itemNum)
  {
    this.foodItems.splice(itemNum,1);

    for(var i = 0; i < this.foodItems.length; i++)
      this.foodItems[i].num=i;
  }

  public setBottom()
  {
    if (this.foodItems.length < 4)
      return 0
    else
      return 'auto'
  }

  public detSubtotal()
  {
    var total = 0.0
    for(var i = 0; i < this.foodItems.length; i++)
      total = total + (Number(this.foodItems[i].price)*this.foodItems[i].quantity)
    
      this.subtotal = Number(total)
      return Number(total).toFixed(2)
  }

  public detTax()
  {
    this.tax = Number(this.detSubtotal())*this.taxRate
    return (this.tax).toFixed(2)
  }

  public setTip(value)
  {
    if (!isNaN(value))
      this.tip = Number(value)
  }

  public detTotal()
  {
    return (this.subtotal+this.tax+this.tip+this.deliveryFee).toFixed(2)
  }
}





