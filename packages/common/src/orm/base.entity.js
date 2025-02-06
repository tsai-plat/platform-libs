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
exports.BaseEntity = void 0;
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
class BaseEntity extends typeorm_1.BaseEntity {
}
exports.BaseEntity = BaseEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: 'int',
        name: 'id',
        comment: 'Primary key ID',
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_transformer_1.Transform)(({ value }) => Number(value)),
    __metadata("design:type", Number)
], BaseEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        nullable: true,
        default: 0,
        name: 'created_by',
        comment: 'record created by',
    }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], BaseEntity.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        nullable: true,
        default: 0,
        name: 'updated_by',
        comment: 'record updated by',
    }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], BaseEntity.prototype, "updatedBy", void 0);
__decorate([
    (0, class_transformer_1.Transform)((row) => +new Date(row.value)),
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        nullable: false,
        name: 'created_at',
        comment: 'record create time',
    }),
    __metadata("design:type", Date)
], BaseEntity.prototype, "createdAt", void 0);
__decorate([
    (0, class_transformer_1.Transform)((row) => +new Date(row.value)),
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        nullable: false,
        name: 'updated_at',
        comment: 'record last update time',
    }),
    __metadata("design:type", Date)
], BaseEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        type: 'timestamp',
        nullable: true,
        name: 'deleted_at',
        comment: 'Logic delete sign',
    }),
    __metadata("design:type", Date)
], BaseEntity.prototype, "deletedAt", void 0);
//# sourceMappingURL=base.entity.js.map