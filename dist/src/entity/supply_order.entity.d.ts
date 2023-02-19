import { BaseEntity } from 'typeorm';
import { Ingredient } from './ingredient.entity';
export declare class SupplyOrder extends BaseEntity {
    id: number;
    ingredientId: number;
    quantity: number;
    ingredient: Ingredient;
    purchasedAt: Date;
    created_at: Date;
    updated_at: Date;
}
