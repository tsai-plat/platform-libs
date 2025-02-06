import { JwtAlgorithm } from '../types';
export declare const oidedToAnsi: {
    prime256v1: string;
    secp384r1: string;
    secp521r1: string;
};
export declare class EcClient {
    private ec;
    private nameCurve;
    constructor(alg: JwtAlgorithm);
    genPemKeyPairs(): {
        prikey: any;
        pubkey: any;
    };
    static newInstance(alg?: JwtAlgorithm): EcClient;
    static listCurves(): string[];
}
