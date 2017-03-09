import { Injectable } from '@angular/core';
import { Ingredient } from "app/ingredient";

@Injectable()
export class ShoppingListService {
  private items: Ingredient[] = [];

  constructor() { }

  getItems(){
    return this.items;
  }
  addItems(items: Ingredient[]){
    Array.prototype.push.apply(this.items, items);
  }
  addItem(item:Ingredient){
    this.items.push(item);
  }
  editItem(oldingredient:Ingredient, newingredient: Ingredient){
    this.items[this.items.indexOf(oldingredient)]=newingredient;
  }
  deleteItem(item:Ingredient){
    this.items.splice(this.items.indexOf(item),1);
  }

}
