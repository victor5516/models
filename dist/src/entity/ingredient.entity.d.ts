import { BaseEntity } from "typeorm";
import { SupplyOrder } from "./supply_order.entity";
import { RecipeItem } from "./recipe_item.entity";
export declare class Ingredient extends BaseEntity {
    id: number;
    name: string;
    starting_inventory: number;
    inventory_received: number;
    inventory_used: number;
    inventory_remaining: number;
    supplyOrders: SupplyOrder[];
    recipeItems: RecipeItem[];
    created_at: Date;
    updated_at: Date;
}
