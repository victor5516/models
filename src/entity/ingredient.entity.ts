import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SupplyOrder } from "./supply_order.entity";
import { RecipeItem } from "./recipe_item.entity";



@Entity('ingredients')
export class Ingredient extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ default: 5})
    starting_inventory: number;

    @Column({ default: 5})
    inventory_received: number;

    @Column({ default: 0})
    inventory_used: number;

    @Column({ default: 5})
    inventory_remaining: number;

    @OneToMany(type => SupplyOrder, supplyOrder => supplyOrder.ingredient)
    supplyOrders: SupplyOrder[];

    @OneToMany(type => RecipeItem , recipeItems => recipeItems.ingredient)
    recipeItems: RecipeItem[];



    @CreateDateColumn({ name: 'created_at' })
    created_at: Date;
    @UpdateDateColumn({ name: 'updated_at' })
    updated_at: Date;


}