"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectInstNotFoundError = void 0;
class InjectInstNotFoundError extends Error {
    constructor(injectName = '') {
        super(`Instance of [${injectName}] was not found.check either inject in Module.`);
        this.name = InjectInstNotFoundError.name;
    }
}
exports.InjectInstNotFoundError = InjectInstNotFoundError;
//# sourceMappingURL=inject-instance-not-found.error.js.map