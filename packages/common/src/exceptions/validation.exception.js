"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationException = void 0;
const common_1 = require("@nestjs/common");
const iterare_1 = require("iterare");
const error_code_enum_1 = require("./error.code.enum");
class ValidationException extends common_1.HttpException {
    constructor(validErrors, options) {
        const { httpExceptionOptions } = common_1.HttpException.extractDescriptionAndOptionsFrom(options);
        const errors = flattenValidationErrors(validErrors);
        const body = {
            code: error_code_enum_1.ErrorCodeEnum.PARAMS_INVALID,
            message: `Request parameters invalid.`,
            error: errors,
        };
        super(common_1.HttpException.createBody(body), common_1.HttpStatus.BAD_REQUEST, httpExceptionOptions);
    }
}
exports.ValidationException = ValidationException;
function flattenValidationErrors(validationErrors) {
    return (0, iterare_1.iterate)(validationErrors)
        .map((error) => mapChildrenToValidationErrors(error))
        .flatten()
        .filter((item) => !!item.constraints)
        .map((item) => Object.values(item.constraints))
        .flatten()
        .toArray();
}
function mapChildrenToValidationErrors(error, parentPath) {
    if (!(error.children && error.children.length)) {
        return [error];
    }
    const validationErrors = [];
    parentPath = parentPath ? `${parentPath}.${error.property}` : error.property;
    for (const item of error.children) {
        if (item.children && item.children.length) {
            validationErrors.push(...this.mapChildrenToValidationErrors(item, parentPath));
        }
        validationErrors.push(prependConstraintsWithParentProp(parentPath, item));
    }
    return validationErrors;
}
function prependConstraintsWithParentProp(parentPath, error) {
    const constraints = {};
    for (const key in error.constraints) {
        constraints[key] = `${parentPath}.${error.constraints[key]}`;
    }
    return {
        ...error,
        constraints,
    };
}
//# sourceMappingURL=validation.exception.js.map