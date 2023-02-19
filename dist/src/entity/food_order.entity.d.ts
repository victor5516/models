import { BaseEntity } from "typeorm";
import { Recipe } from "./recipe.entity";
export declare class FoodOrder extends BaseEntity {
    id: number;
    status: string;
    ordered_at: Date;
    recipe: Recipe;
}
