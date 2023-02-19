"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ingredient = void 0;
const typeorm_1 = require("typeorm");
const supply_order_entity_1 = require("./supply_order.entity");
const recipe_item_entity_1 = require("./recipe_item.entity");
let Ingredient = class Ingredient extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Ingredient.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Ingredient.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 5 }),
    __metadata("design:type", Number)
], Ingredient.prototype, "starting_inventory", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 5 }),
    __metadata("design:type", Number)
], Ingredient.prototype, "inventory_received", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Ingredient.prototype, "inventory_used", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 5 }),
    __metadata("design:type", Number)
], Ingredient.prototype, "inventory_remaining", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => supply_order_entity_1.SupplyOrder, supplyOrder => supplyOrder.ingredient),
    __metadata("design:type", Array)
], Ingredient.prototype, "supplyOrders", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => recipe_item_entity_1.RecipeItem, recipeItems => recipeItems.ingredient),
    __metadata("design:type", Array)
], Ingredient.prototype, "recipeItems", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Ingredient.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Ingredient.prototype, "updated_at", void 0);
Ingredient = __decorate([
    (0, typeorm_1.Entity)('ingredients')
], Ingredient);
exports.Ingredient = Ingredient;
