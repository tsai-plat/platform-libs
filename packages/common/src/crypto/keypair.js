"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateES256Keypairs = generateES256Keypairs;
exports.generateKeyPairs = generateKeyPairs;
const util_jsonwebtoken_1 = require("@ingestkorea/util-jsonwebtoken");
const crypto_1 = require("crypto");
function generateES256Keypairs(passphrase) {
    const res = (0, crypto_1.generateKeyPairSync)('ec', {
        namedCurve: 'prime256v1',
        publicKeyEncoding: {
            type: 'spki',
            format: 'pem',
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
            cipher: 'aes-256-cbc',
            passphrase: passphrase,
        },
    });
    return res;
}
function generateKeyPairs() {
    (0, util_jsonwebtoken_1.createJsonWebKeyEC256)();
}
//# sourceMappingURL=keypair.js.map