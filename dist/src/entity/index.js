"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEntities = void 0;
const recipe_entity_1 = require("./recipe.entity");
const ingredient_entity_1 = require("./ingredient.entity");
const supply_order_entity_1 = require("./supply_order.entity");
const food_order_entity_1 = require("./food_order.entity");
const getEntities = () => {
    return {
        Recipe: recipe_entity_1.Recipe,
        Ingredient: ingredient_entity_1.Ingredient,
        SupplyOrder: supply_order_entity_1.SupplyOrder,
        FoodOrder: food_order_entity_1.FoodOrder
    };
};
exports.getEntities = getEntities;
