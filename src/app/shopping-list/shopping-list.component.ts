import {Component, OnInit} from '@angular/core';
import { Ingredient } from "app/ingredient";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import {Router} from "@angular/router";

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[];

  selectedItem:Ingredient=null;
  constructor(private shoppingservice:ShoppingListService, private router:Router) { }

  ngOnInit() {
    this.items=this.shoppingservice.getItems();
  }
  onSelectedItem(item:Ingredient){
    this.selectedItem=item;
  }
  onCleared(){
    this.selectedItem=null;
  }

}
