"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UuidGenerator = void 0;
const async_1 = require("nanoid/async");
const ASE58_ALPHABET_SEED = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
const REQID_ALPHABET_SEED = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz-.$';
const BASE58_ALPHABET_SEED = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
const APPKEY_DEFAULT_SEED = '$-.abcdefghjkmnpqrstuvwxyz123456789ABDCEFGHJKLMNPQRSTUVW_';
const APPKEY_HEX_SEED = '0123456789abcdefABCDEF';
class UuidGenerator {
    static async genBase58Uuid(len = 32) {
        const _len = len > 0 ? len : 32;
        const nanoid = (0, async_1.customAlphabet)(ASE58_ALPHABET_SEED, _len);
        return await nanoid();
    }
    static genReqid(len = 32) {
        const _len = len > 0 ? len : 32;
        const nanoid = (0, async_1.customAlphabet)(REQID_ALPHABET_SEED, _len);
        return nanoid();
    }
    static async createJti(size = 20) {
        const nanoid = (0, async_1.customAlphabet)(ASE58_ALPHABET_SEED, size);
        return await nanoid();
    }
    static async generateAppSecret(opts) {
        const { len = 16, mode = 'default' } = opts || {};
        let nanoid;
        switch (mode) {
            case 'base58':
                nanoid = (0, async_1.customAlphabet)(BASE58_ALPHABET_SEED, len);
                break;
            case 'hex':
                nanoid = (0, async_1.customAlphabet)(APPKEY_HEX_SEED, len);
                break;
            default:
                nanoid = (0, async_1.customAlphabet)(APPKEY_DEFAULT_SEED, len);
                break;
        }
        return await nanoid();
    }
}
exports.UuidGenerator = UuidGenerator;
//# sourceMappingURL=uuid.generator.js.map