//create food order entity

import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, BaseEntity} from "typeorm";
import {Recipe} from "./recipe.entity";


@Entity()
export class FoodOrder extends BaseEntity {

     @PrimaryGeneratedColumn()
     id: number;

     @Column()
     status: string;

     @Column()
     ordered_at: Date;

     @ManyToOne(()=> Recipe, recipe => recipe.recipeItems)
     @JoinColumn({name: "recipeId"})
     recipe: Recipe;

    }