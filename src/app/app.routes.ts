import {Routes, RouterModule} from '@angular/router';
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {NgModule} from "@angular/core";
import {RECIPE_ROUTES} from "./recipes/recipe.routes";
const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes',  component:  RecipesComponent, children: RECIPE_ROUTES},
  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  static forRoot(RecipesComponent: RecipesComponent) {

  }
}
