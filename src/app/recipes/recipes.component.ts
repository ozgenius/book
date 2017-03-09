import { Component, OnInit } from '@angular/core';
import { Recipe } from "app/recipes/recipe";

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html'
})
export class RecipesComponent implements OnInit {
  selectedRecipeeee:Recipe;
  constructor() { }

  ngOnInit() {
  }

}
