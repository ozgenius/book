import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from "app/recipes/recipe.service";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]=[];
  @Output() recipeSelected =new EventEmitter<Recipe>();
  constructor(
    private recipeservice:RecipeService
  ) {
    //this.recipes=this.recipeservice.getRecipes();
   }

  ngOnInit() {
    this.recipes=this.recipeservice.getRecipes();
    this.recipeservice.recipesChanged.subscribe(
      (recipes: Recipe[]) => this.recipes = recipes
    );
  }
  onSelected(selectedRecipe: Recipe){
  this.recipeSelected.emit(selectedRecipe);
}

}
