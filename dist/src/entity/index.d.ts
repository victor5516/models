import { Recipe } from "./recipe.entity";
import { Ingredient } from "./ingredient.entity";
import { SupplyOrder } from "./supply_order.entity";
import { FoodOrder } from "./food_order.entity";
export declare const getEntities: () => {
    Recipe: typeof Recipe;
    Ingredient: typeof Ingredient;
    SupplyOrder: typeof SupplyOrder;
    FoodOrder: typeof FoodOrder;
};
