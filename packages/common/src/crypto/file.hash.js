"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcHash = calcHash;
const crypto_1 = require("crypto");
function calcHash(content = '', opts = {
    encoding: 'utf8',
    alg: 'sha256',
}) {
    const { encoding, alg } = opts;
    return (0, crypto_1.createHash)(alg).update(content, encoding).digest('hex');
}
//# sourceMappingURL=file.hash.js.map