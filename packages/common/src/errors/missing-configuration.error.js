"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissConfigurationError = void 0;
class MissConfigurationError extends Error {
    constructor(subDesc = '') {
        super(`Missing required asynchronous configurations.${subDesc ?? ''}`);
        this.name = MissConfigurationError.name;
    }
}
exports.MissConfigurationError = MissConfigurationError;
//# sourceMappingURL=missing-configuration.error.js.map