import { Recipe } from "./recipe.entity";
import { Ingredient } from "./ingredient.entity";
import { SupplyOrder } from "./supply_order.entity";
import { FoodOrder } from "./food_order.entity";



export  const getEntities =() => {
    return {
         Recipe,
         Ingredient,
         SupplyOrder,
         FoodOrder
    };
}