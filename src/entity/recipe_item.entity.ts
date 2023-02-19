import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, BaseEntity } from 'typeorm';

import { Recipe } from './recipe.entity';
import { Ingredient } from './ingredient.entity';

@Entity()
export class RecipeItem extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantity: number;

    @Column()
    ingredientId: number;

    @Column()
    recipeId: number;


    @ManyToOne(()=> Recipe, recipe => recipe.recipeItems)
    @JoinColumn({name: "recipeId"})
    recipe: Recipe;

    @ManyToOne(() => Ingredient, ingredient => ingredient.recipeItems)
    @JoinColumn({name: "ingredientId"})
    ingredient: Ingredient;
    }
