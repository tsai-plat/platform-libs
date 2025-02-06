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
exports.UpdateUserStatusModel = exports.UpdateStatusModel = exports.UpdateSortnoModel = exports.BaseModel = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const core_types_1 = require("@tsailab/core-types");
class BaseModel {
}
exports.BaseModel = BaseModel;
class UpdateSortnoModel {
}
exports.UpdateSortnoModel = UpdateSortnoModel;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'unique id' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateSortnoModel.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '排序码' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateSortnoModel.prototype, "sortno", void 0);
class UpdateStatusModel {
}
exports.UpdateStatusModel = UpdateStatusModel;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'unique id' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateStatusModel.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'status' }),
    (0, class_validator_1.IsEnum)(core_types_1.StatusEnum, { message: 'status required 0 or 1' }),
    __metadata("design:type", Number)
], UpdateStatusModel.prototype, "status", void 0);
class UpdateUserStatusModel {
}
exports.UpdateUserStatusModel = UpdateUserStatusModel;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'unique id' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateUserStatusModel.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'status' }),
    (0, class_validator_1.IsEnum)(core_types_1.UserStatusEnum, { message: 'status required 0 or 1' }),
    __metadata("design:type", Number)
], UpdateUserStatusModel.prototype, "status", void 0);
//# sourceMappingURL=update.base.model.js.map