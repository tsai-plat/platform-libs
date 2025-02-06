"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AESCipher = exports.AES_ALGORITHM_CBC = exports.AES_KEY_LENGTH = void 0;
exports.genRandomAppKey = genRandomAppKey;
const crypto_1 = require("crypto");
exports.AES_KEY_LENGTH = 32;
exports.AES_ALGORITHM_CBC = 'aes-256-cbc';
function genRandomAppKey() {
    const base64Key = (0, crypto_1.randomBytes)(exports.AES_KEY_LENGTH).toString('base64');
    return base64Key;
}
class AESCipher {
    constructor(appKey) {
        this.alg = 'aes-256-cbc';
        const { key, iv } = AESCipher.parseAppKey(appKey);
        this.key = key;
        this.iv = iv;
    }
    get opts() {
        return {
            alg: this.alg,
            key: this.key?.toString('base64'),
            iv: this.iv?.toString('base64'),
        };
    }
    get hexOpts() {
        return {
            alg: this.alg,
            key: this.key?.toString('hex'),
            iv: this.iv?.toString('hex'),
        };
    }
    encode(text) {
        const cipher = (0, crypto_1.createCipheriv)(this.alg, this.key, this.iv);
        let encrypted = cipher.update(text, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;
    }
    decode(encryptedData) {
        const decipher = (0, crypto_1.createDecipheriv)(this.alg, this.key, this.iv);
        let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }
    static parseAppKey(appKey) {
        const keybuf = (0, crypto_1.createHash)('sha512').update(appKey).digest();
        return {
            key: keybuf.subarray(0, 32),
            iv: keybuf.subarray(0, 16),
        };
    }
    static fromBase64(base64) {
        return Buffer.from(base64, 'base64');
    }
    static fromBase64ToHex(base64) {
        return Buffer.from(base64, 'base64').toString('hex');
    }
    static hexToBase64(hex) {
        return Buffer.from(hex, 'hex').toString('base64');
    }
    static newInstance(appKey) {
        return new AESCipher(appKey);
    }
}
exports.AESCipher = AESCipher;
//# sourceMappingURL=aes.helper.js.map