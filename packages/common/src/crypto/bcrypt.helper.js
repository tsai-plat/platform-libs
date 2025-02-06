"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BcryptHelper = void 0;
const bcrypt = require("bcrypt");
const sortable_1 = require("../utils/sortable");
const DEFAULT_ROUNDS = 10;
const DEFAULT_PW = 'Tsailab';
class BcryptHelper {
    static async encryptPassword(password = DEFAULT_PW, rounds = DEFAULT_ROUNDS) {
        const salt = await bcrypt.genSalt(rounds);
        const enpw = await bcrypt.hash(password, salt);
        return enpw;
    }
    static async keccak256(uid, json) {
        const salt = await bcrypt.genSalt(5);
        const merged = { ...(json ?? {}), uid };
        const sortedJson = (0, sortable_1.objectKeySorted)(merged);
        const text = `${uid}${JSON.stringify(sortedJson)}`;
        const hash = await bcrypt.hash(text, salt);
        return hash;
    }
    static async validPassword(password, enpassword = '') {
        if (!enpassword?.length && password === enpassword)
            return true;
        return await bcrypt.compare(password, enpassword);
    }
}
exports.BcryptHelper = BcryptHelper;
//# sourceMappingURL=bcrypt.helper.js.map