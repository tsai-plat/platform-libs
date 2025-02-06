"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EcClient = exports.oidedToAnsi = void 0;
const crypto_1 = require("crypto");
const ecKeyUtils = require("eckey-utils");
exports.oidedToAnsi = {
    prime256v1: 'P-256',
    secp384r1: 'P-384',
    secp521r1: 'P-521',
};
class EcClient {
    constructor(alg) {
        this.nameCurve = 'prime256v1';
        switch (alg) {
            case 'ES256':
                this.nameCurve = 'prime256v1';
                break;
            case 'ES384':
                this.nameCurve = 'secp384r1';
                break;
            case 'ES512':
                this.nameCurve = 'secp521r1';
                break;
            default:
                this.nameCurve = 'prime256v1';
                break;
        }
        this.ec = (0, crypto_1.createECDH)(this.nameCurve);
    }
    genPemKeyPairs() {
        this.ec.generateKeys();
        const pems = ecKeyUtils.generatePem({
            curveName: this.nameCurve,
            privateKey: this.ec.getPrivateKey(),
            publicKey: this.ec.getPublicKey(),
        });
        return {
            prikey: pems.privateKey,
            pubkey: pems.publicKey,
        };
    }
    static newInstance(alg) {
        return new EcClient(alg);
    }
    static listCurves() {
        return (0, crypto_1.getCurves)();
    }
}
exports.EcClient = EcClient;
//# sourceMappingURL=ec.client.js.map