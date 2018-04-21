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
const typeorm_1 = require("typeorm");
const BaseEntity_1 = require("typeorm/repository/BaseEntity");
const class_validator_1 = require("class-validator");
let Page = class Page extends BaseEntity_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Page.prototype, "id", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.Length(5, 25),
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], Page.prototype, "title", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MinLength(10),
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], Page.prototype, "content", void 0);
Page = __decorate([
    typeorm_1.Entity()
], Page);
exports.default = Page;
//# sourceMappingURL=entity.js.map