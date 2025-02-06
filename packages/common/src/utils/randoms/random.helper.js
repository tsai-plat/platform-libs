"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomHelper = void 0;
class RandomHelper {
    static shortId() {
        const prex1 = (Math.random() * Math.pow(36, 1)) | 0;
        const prex2 = (Math.random() * Math.pow(36, 1)) | 0;
        const prefix = prex1.toString(36).toUpperCase() + prex2.toString(36);
        const firstPart = (Math.random() * Math.pow(36, 5)) | 0;
        const secondPart = (Math.random() * Math.pow(36, 5)) | 0;
        const first = ('00000' + firstPart.toString(36)).slice(-5);
        const second = ('00000' + secondPart.toString(36)).slice(-5);
        return `${prefix}_${first}${second}`;
    }
    static randomState() {
        const firstPart = (Math.random() * Math.pow(36, 4)) | 0;
        const secondPart = (Math.random() * Math.pow(36, 4)) | 0;
        let str = `${firstPart}0000`.slice(0, 4);
        str = str + `0000${secondPart}`.slice(-4);
        return Number(str).toString(36);
    }
    static genRandomCacheKey() {
        const prex1 = (Math.random() * Math.pow(36, 1)) | 0;
        const prex2 = (Math.random() * Math.pow(36, 1)) | 0;
        const prefix = prex1.toString(36).toUpperCase() + prex2.toString(36);
        const firstPart = (Math.random() * Math.pow(36, 6)) | 0;
        const secondPart = (Math.random() * Math.pow(36, 6)) | 0;
        const first = ('00000' + firstPart.toString(36)).slice(-6);
        const second = ('00000' + secondPart.toString(36)).slice(-6);
        return `${prefix}_${first}${second}`;
    }
    static buildUno(seqno, seeds) {
        if (!/[\d]{1,8}/.test(seqno.toString()))
            throw new Error(`seqno [${seqno}] more than 8 length.`);
        const notMaches = seeds.filter((s) => !/[0-9]{2,4}/.test(s));
        if (notMaches?.length) {
            throw new Error(`Seeds [${notMaches.join(',')}] not 4 digits.`);
        }
        if (!seeds.length) {
            seeds.push('444');
        }
        const range = seeds.length;
        const idx = Math.floor(Math.random() * range);
        let seed = seeds[idx];
        seed = `0000${seed}`.slice(-4);
        const checkDigit = `00${parseInt(seed) % 17}`.slice(-2);
        const no = `00000000${seqno}`.slice(-8);
        const value = `${checkDigit}${seed}${no}`;
        const uno = Number(value).toString(36);
        return {
            uno,
            value,
        };
    }
    static parseUno(uno36) {
        if (!/[0-9a-z]{8,14}/.test(uno36))
            throw new Error(`uno [${uno36}] illegal.`);
        const no = parseInt(uno36, 36);
        return `000000${no}`.slice(-14);
    }
    static validUno(uno) {
        if (!/[0-9a-z]{9,14}/.test(uno))
            return false;
        const no = `000000${uno}`.slice(-14);
        const m = parseInt(no.slice(0, 2));
        const seed = parseInt(no.slice(2, 6));
        return seed % 17 === m;
    }
    static randomNumberCode(len = 6) {
        if (len < 1 || len > 40)
            len = 6;
        let code = '';
        while (code.length < len) {
            code = `${code}${Math.floor(Math.random() * 10)}`;
        }
        return code;
    }
}
exports.RandomHelper = RandomHelper;
//# sourceMappingURL=random.helper.js.map