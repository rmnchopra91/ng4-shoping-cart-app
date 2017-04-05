import { Ingredient } from '../shared/ingredient.model';

export class ShopingListService {
    private ingredients: Ingredient[]= [
        new Ingredient('Apple',5),
        new Ingredient('Tomatoes',10)
    ];
    getIngredient(){
        return this.ingredients.slice();
    }
    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
    }
}