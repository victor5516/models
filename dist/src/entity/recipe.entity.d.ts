import { BaseEntity } from 'typeorm';
import { RecipeItem } from './recipe_item.entity';
import { FoodOrder } from './food_order.entity';
export declare class Recipe extends BaseEntity {
    id: number;
    name: string;
    description: string;
    recipeItems: RecipeItem[];
    foodOrder: FoodOrder[];
}
