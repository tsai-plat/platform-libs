"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsVerificationAccountConstraint = void 0;
exports.IsValidAccount = IsValidAccount;
const class_validator_1 = require("class-validator");
let IsVerificationAccountConstraint = class IsVerificationAccountConstraint {
    validate(value, _validationArguments) {
        if ((0, class_validator_1.isEmail)(value) || (0, class_validator_1.isMobilePhone)(value, 'zh-CN'))
            return true;
        return false;
    }
    defaultMessage(validationArguments) {
        throw `${validationArguments.property} must be a email or phone number format.`;
    }
};
exports.IsVerificationAccountConstraint = IsVerificationAccountConstraint;
exports.IsVerificationAccountConstraint = IsVerificationAccountConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'isValidAccount', async: false })
], IsVerificationAccountConstraint);
function IsValidAccount(validationOptions) {
    return function (obj, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: obj.constructor,
            propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsVerificationAccountConstraint,
        });
    };
}
//# sourceMappingURL=account.validator.js.map