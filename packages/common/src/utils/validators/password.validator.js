"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStrongPassword = isStrongPassword;
exports.isMiddelPassword = isMiddelPassword;
exports.isSimplePassword = isSimplePassword;
function isStrongPassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
}
function isMiddelPassword(password) {
    return /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/.test(password);
}
function isSimplePassword(password) {
    return /^(?=.*[a-zA-Z0-9])[A-Za-z\d@$!%*?&]{6,}$/.test(password);
}
//# sourceMappingURL=password.validator.js.map