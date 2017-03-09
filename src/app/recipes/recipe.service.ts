import {Injectable, EventEmitter} from '@angular/core';
import { Recipe } from "app/recipes/recipe";
import { Ingredient } from "app/ingredient";
import {Headers, Http, Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();
  private   recipes: Recipe[]=[
    new Recipe("Dummy","Dummy","https://images-na.ssl-images-amazon.com/images/I/21y7HdqcDHL._SY300_.jpg",[
      new Ingredient("turk mutfagı",2),
      new Ingredient("french mutfagı", 5)

    ]),
    new Recipe("example","example","https://static.turbosquid.com/Preview/2014/05/21__03_48_03/dummy_1.jpg73a34682-6a0e-42f8-bbeb-b21eaa495913Original.jpg",[])


  ];
  constructor(private http:Http) { }
  getRecipes () {
    return this.recipes;
  }
  getRecipe(id:number){
    return this.recipes[id];

  }
  deleteRecipe(recipe:Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe),1);
  }
  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
  }
  editRecipe(oldRecipe: Recipe, newRecipe:Recipe){
    this.recipes[this.recipes.indexOf(oldRecipe)]=newRecipe;
  }
  storeData(){
    const body=JSON.stringify(this.recipes);
    const headers=new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://recipebook-b5133.firebaseio.com/recipes.json', body, {headers:headers});
  }
  fetchData(){
    return this.http.get('https://recipebook-b5133.firebaseio.com/recipes.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Recipe[]) => {
          this.recipes = data;
          this.recipesChanged.emit(this.recipes);
        }
      );
  }

}
