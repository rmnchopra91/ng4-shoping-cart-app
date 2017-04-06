import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShopingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();
    
  private recipes: Recipe [] = [
    new Recipe('Tasty Schnitzel', 
                'A Super Tasty Schnitzel - just awesome!',
                'data:image/jpeg;base64,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',
                [
                  new Ingredient('Meat', 1),
                  new Ingredient('French Fries', 20)
                ]),
    new Recipe('Big Fat Burger',
                'What else you need to say',
                'data:image/jpeg;base64,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',
                [
                  new Ingredient('Buns', 2),
                  new Ingredient('Meat', 1)
                ])
  ];

  constructor(private slService: ShopingListService){

  }

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShopingList(ingredients : Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}