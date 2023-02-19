import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, BaseEntity } from 'typeorm';

import { Ingredient  } from './ingredient.entity';

@Entity()
export class SupplyOrder extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    ingredientId: number;

    @Column()
    quantity: number;

    @ManyToOne(type => Ingredient, ingredient => ingredient.supplyOrders)
    @JoinColumn({ name: 'ingredientId' })
    ingredient: Ingredient;

    @Column()
    purchasedAt: Date;

    @CreateDateColumn({ name: 'created_at' })
    created_at: Date;
    @UpdateDateColumn({ name: 'updated_at' })
    updated_at: Date;

    }