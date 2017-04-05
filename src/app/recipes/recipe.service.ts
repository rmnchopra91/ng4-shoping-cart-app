import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();
    
  private recipes: Recipe [] = [
    new Recipe('A Test Recipe', 'This is simply a test','http://images.media-allrecipes.com/userphotos/250x250/00/69/35/693521.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test','http://images.media-allrecipes.com/userphotos/250x250/00/69/35/693521.jpg')
  ];

  getRecipes(){
    return this.recipes.slice();
  }
}