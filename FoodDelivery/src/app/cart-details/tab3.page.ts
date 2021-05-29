import { Component } from '@angular/core';
import {FoodItem} from './fooditem'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  foodItems = []
  numItems = 5
  subtotal = 0.00
  deliveryFee = 2.99
  taxRate = 0.0775
  tax = 0.00
  tip = 0.00

  constructor(){}

  public deleteItem(itemNum)
  {
    this.foodItems.splice(itemNum,1);

    for(var i = 0; i < this.foodItems.length; i++)
      this.foodItems[i].num=i;
  }

  public setBottom()
  {
    if (this.foodItems.length < 3)
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
    if (!isNaN(value) && value >= 0)
      this.tip = Number(value)
    else
      this.tip = Number(0.00)
  }

  public detTotal()
  {
    return (this.subtotal+this.tax+this.tip+this.deliveryFee).toFixed(2)
  }

  public resetQuantity(input, itemNum)
  {
      if (input.value == "" || input.value < 1)
      {
        input.value = 1
        this.foodItems[itemNum].quantity = 1
      }  
      else
        input.value = String(this.foodItems[itemNum].quantity) 
  }

  public resetTip(input)
  {
    if (isNaN(input.value) || input.value < 0)
    {
      input.value = (0).toFixed(2)
      this.tip = 0.00
    } 
  }

  ngOnInit() {
      this.foodItems.push(new FoodItem(0,"Buffalo Wings", 3.99,["Boneless", "No Dip"]))
      this.foodItems.push(new FoodItem(1,"Fries", 1.99,["Regular Size"]))
      this.foodItems.push(new FoodItem(2,"Garlic Wings", 3.99,["w/ Celery", "Ranch dip"]))  
  }
}





