import { BaseEntity } from 'typeorm';
import { Recipe } from './recipe.entity';
import { Ingredient } from './ingredient.entity';
export declare class RecipeItem extends BaseEntity {
    id: number;
    quantity: number;
    ingredientId: number;
    recipeId: number;
    recipe: Recipe;
    ingredient: Ingredient;
}
