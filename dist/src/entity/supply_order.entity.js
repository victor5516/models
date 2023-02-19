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
exports.SupplyOrder = void 0;
const typeorm_1 = require("typeorm");
const ingredient_entity_1 = require("./ingredient.entity");
let SupplyOrder = class SupplyOrder extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SupplyOrder.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SupplyOrder.prototype, "ingredientId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SupplyOrder.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => ingredient_entity_1.Ingredient, ingredient => ingredient.supplyOrders),
    (0, typeorm_1.JoinColumn)({ name: 'ingredientId' }),
    __metadata("design:type", ingredient_entity_1.Ingredient)
], SupplyOrder.prototype, "ingredient", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], SupplyOrder.prototype, "purchasedAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], SupplyOrder.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], SupplyOrder.prototype, "updated_at", void 0);
SupplyOrder = __decorate([
    (0, typeorm_1.Entity)()
], SupplyOrder);
exports.SupplyOrder = SupplyOrder;
