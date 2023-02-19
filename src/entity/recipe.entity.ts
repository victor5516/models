import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity } from 'typeorm';
import { RecipeItem } from './recipe_item.entity';
import { FoodOrder } from './food_order.entity';

@Entity()
export class Recipe extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    //recipe items relationship
    @OneToMany(type => RecipeItem, recipeItems => recipeItems.recipe)
    recipeItems: RecipeItem[];

    @OneToMany(()=> FoodOrder , foodOrder => foodOrder.recipe)
    foodOrder: FoodOrder[];


}