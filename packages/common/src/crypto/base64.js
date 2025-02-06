"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeBase64 = encodeBase64;
exports.decodeBase64 = decodeBase64;
function encodeBase64(input) {
    return Buffer.from(input, 'utf-8').toString('base64');
}
function decodeBase64(encoded) {
    return Buffer.from(encoded, 'base64').toString('utf-8');
}
//# sourceMappingURL=base64.js.map